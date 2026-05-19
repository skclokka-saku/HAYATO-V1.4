const CACHE_NAME = "tripta-gnana-v1";
const urlsToCache = [
  "/HAYATO-V1.2/",
  "/HAYATO-V1.2/index.html",
  "/HAYATO-V1.2/manifest.json"
  // ඔබගේ අනෙකුත් ගොනු (CSS, JS, images) මෙහි එක් කරන්න
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});