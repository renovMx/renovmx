const CACHE_NAME = 'renovmx-v1';
const ASSETS = [
  'https://renovmx.github.io/renovmx/',
  'index.html',
  'logotipo.png'
];

// Instalar el Service Worker y guardar en caché los archivos básicos
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Responder desde la caché si no hay internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
