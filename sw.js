const CACHE_NAME = 'pixelart-camera-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install event - cache resources
self.addEventListener('install', event => {
  self.skipWaiting(); // Activate immediately
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened, adding URLs');
        return cache.addAll(urlsToCache.map(url => new Request(url, {cache: 'no-cache'})));
      })
      .catch(err => {
        console.log('Cache addAll failed:', err);
      })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control immediately
});

// Fetch event - serve from cache
self.addEventListener('fetch', event => {
  const request = event.request;
  
  // Skip for non-GET requests or webRTC/mediastream
  if (request.method !== 'GET' || request.url.includes('media') || request.url.includes('blob:')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // Return cached version
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Fetch from network and cache
        return fetch(request)
          .then(response => {
            // Clone and cache the response
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseToCache);
            });
            return response;
          })
          .catch(() => {
            // Return a basic offline page if fetch fails
            if (request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
      })
  );
});
