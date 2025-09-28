const CACHE_NAME = 'tarif-cache-v1';
const FILES_TO_CACHE = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.protocol === 'chrome-extension:') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request).then(networkResponse => {
        // Перевірка: кешуємо лише локальні ресурси з типом 'basic'
        if (
          !networkResponse ||
          networkResponse.status !== 200 ||
          networkResponse.type !== 'basic' ||
          !event.request.url.startsWith(self.location.origin)
        ) {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
          return networkResponse;
        });
      }).catch(() => caches.match('./index.html'));
    })
  );
});
