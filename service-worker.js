const CACHE_NAME = 'tarif-cache-v1';
const FILES_TO_CACHE = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './offline.html' // резервна сторінка
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

// Активація: очищення старих кешів
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

// Обробка запитів
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Пропускаємо запити до розширень Chrome
  if (url.protocol === 'chrome-extension:') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Якщо є кеш — повертаємо його
      if (cachedResponse) return cachedResponse;

      // Інакше пробуємо отримати з мережі
      return fetch(event.request).then(networkResponse => {
        // Перевірка: кешуємо лише локальні ресурси
        if (
          !networkResponse ||
          networkResponse.status !== 200 ||
          networkResponse.type !== 'basic' ||
          !event.request.url.startsWith(self.location.origin)
        ) {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Якщо мережа недоступна — показуємо offline.html
        return caches.match('./offline.html');
      });
    })
  );
});
