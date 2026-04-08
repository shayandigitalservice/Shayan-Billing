self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Offline support ke liye khaali fetch handler zaruri hai
  event.respondWith(fetch(event.request));
});
