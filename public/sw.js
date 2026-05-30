const CACHE_NAME = 'malik-digital-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo192.png',
  '/logo512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If the fetch is successful, we can optionally cache the new response
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
