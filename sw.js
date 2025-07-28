
self.addEventListener('install', event => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', function(event) {
  // Offline fallback
});
