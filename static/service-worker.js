importScripts('/themes/andromeda-hugo/assets/workbox-sw/workbox-sw.js');

workbox.routing.registerRoute(
  ({request})=> request.destination === 'image',
  new workbox.strategies.NetworkFirst()
);