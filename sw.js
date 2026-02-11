const CACHE_NAME = 'star-tasker-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/game.html',
  'https://unpkg.com/lucide@latest'
];

// Installation : Mise en cache des ressources
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Stratégie : Cache-first, puis réseau
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
