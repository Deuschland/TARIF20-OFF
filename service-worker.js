const CACHE_NAME = 'tarif-cache-v1';
const FILES_TO_CACHE = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-256.png',
  './icon-384.png',
  './icon-512.png'
];

// Встановлення Service Worker і кешування файлів
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Активація Service Worker і очищення старих кешів
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Обробка запитів: відповідаємо з кешу або з мережі, fallback — index.html
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => caches.match('./index.html'));
    })
  );
});
