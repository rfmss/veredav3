const CACHE_NAME = "vereda-offline-v56";
const ASSET_VERSION = "20260430-04";

const CORE_ASSETS = [
  "./",
  "./index.html",
  `./styles.css?v=${ASSET_VERSION}`,
  `./app.js?v=${ASSET_VERSION}`,
  `./lexical-engine.js?v=${ASSET_VERSION}`,
  `./proof-engine.js?v=${ASSET_VERSION}`,
  `./vrda-engine.js?v=${ASSET_VERSION}`,
  `./backup-engine.js?v=${ASSET_VERSION}`,
  `./filesystem-backup-engine.js?v=${ASSET_VERSION}`,
  `./archive-engine.js?v=${ASSET_VERSION}`,
  `./version-engine.js?v=${ASSET_VERSION}`,
  `./export-engine.js?v=${ASSET_VERSION}`,
  `./template-engine.js?v=${ASSET_VERSION}`,
  `./precision-engine.js?v=${ASSET_VERSION}`,
  `./voice-engine.js?v=${ASSET_VERSION}`,
  `./decolonial-engine.js?v=${ASSET_VERSION}`,
  `./rights-engine.js?v=${ASSET_VERSION}`,
  `./manifest.webmanifest?v=${ASSET_VERSION}`,
  `./icons/Logo.svg?v=${ASSET_VERSION}`,
  `./icons/Logo-tab.svg?v=${ASSET_VERSION}`,
  `./icons/vereda-logo-light.svg?v=${ASSET_VERSION}`,
  `./icons/vereda-logo-dark.svg?v=${ASSET_VERSION}`,
  "./favicon_io/site.webmanifest",
  `./favicon_io/tab-favicon-16x16.png?v=${ASSET_VERSION}`,
  `./favicon_io/tab-favicon-32x32.png?v=${ASSET_VERSION}`,
  `./favicon_io/tab-favicon-48x48.png?v=${ASSET_VERSION}`,
  `./favicon_io/tab-favicon-180x180.png?v=${ASSET_VERSION}`,
  `./favicon_io/apple-touch-icon.png?v=${ASSET_VERSION}`,
  "./favicon_io/android-chrome-192x192.png",
  "./favicon_io/android-chrome-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName.startsWith("vereda-offline-") && cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", responseClone));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status >= 400) {
            return response;
          }

          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => cachedResponse);
    })
  );
});
