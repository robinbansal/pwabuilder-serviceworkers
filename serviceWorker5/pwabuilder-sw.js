//This is the service worker with the Advanced caching

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

const CACHE = "pwabuilder-adv-cache";

const precacheFiles = [
  /* Add an array of files to precache for your app */
];

const networkFirstPaths = [
  /* Add an array of regex of paths that should go network first */
  // Example: /\/api\/.*/
];

const networkOnlyPaths = [
  /* Add an array of regex of paths that should always come from the network */
  // Example: /\/api\/.*/
]

workbox.precaching.precacheAndRoute(precacheFiles);

networkFirstPaths.forEach((path) => {
  workbox.routing.registerRoute(
    new RegExp(path),
    new workbox.strategies.NetworkFirst({
      cacheName: CACHE
    })
  );
});

networkOnlyPaths.forEach((path) => {
  workbox.routing.registerRoute(
    new RegExp(path),
    new workbox.strategies.NetworkOnly({
      cacheName: CACHE
    })
  );
});


