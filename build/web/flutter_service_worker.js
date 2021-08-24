'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "e76bd08921d2e3c8585066e144ee6dc2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f5bf0d5ebd8af69cb77ed96512d609dc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe21975ca04d367ab2188ca9004fa590",
".git/logs/refs/heads/master": "fe21975ca04d367ab2188ca9004fa590",
".git/logs/refs/remotes/origin/master": "d4c65079d50ec8814a6dbc25f1d77bab",
".git/objects/09/de359e24f6fa3ec7a9815418896784cec2c4db": "d5a6a4ed2056c2097c19e9345e1b59fe",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/139550a412af17001f906d7365dc692d6fb12b": "b2d8b9190563ad249c374b5a7571ca18",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2b/0450b3b4717a222387011888e2d7122b4854d1": "ffb2fa5470de34efbc026175d90aba17",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/c74ac1fae3e1ce0e1a757199a631ab326f0eb8": "66d321e0e685749b664a5f7fd7127245",
".git/objects/4d/30ebcb06720c6b143fba4c5acea5946f4f4b93": "3dfad4015fa8cfe4e48f86e16a2344e5",
".git/objects/68/23df33a04fdc331ed03d4d7f73673f722dda88": "b79eb640287c0c532b15fea0409e9892",
".git/objects/7b/5580ad08c6d7e230e57c9bfe7fd6dbeb663280": "2b2e67a07a0eb3e56ffdc03083a70f95",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/260aa1d982904972e3ca061ba6d43467c1bb84": "473c86ec99a7162229ff9a2f417854aa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/25dc32abae78f9a21126cd7d66c5b49ee754d4": "ef477ebbd645332661d7dd3f0b18c1db",
".git/objects/95/ffa0e123915f7684f986f581377acedbd908a9": "0f7bcff618d1f19583eb35be2aa8ebaf",
".git/objects/96/2c066b5eff8746fe8c6172d71f44aace66c5d2": "37dd5bdff7fd52cd92e871fa0bc33c09",
".git/objects/98/03c8896f02c28790b50ede9a3d7084688ef4d7": "f0dbc677e981c004f112ab86a4c2062b",
".git/objects/9c/0a407c9150aa3346a864f0568b73921f0b845a": "8f3d72701d911acd0579c3d7cca115f5",
".git/objects/a5/2514d993837d3e06c3e621a8d6a3e11927b8a8": "e81582561a5901809ab1ca6a113dc5fd",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b4/ab4572af2bf9dff4cd2f8beb576674550a5ffa": "a6e17d14d64790c6e3bf5c5fdfded8e4",
".git/objects/b4/ae2e79bce60028f186788d5d6b167f60b550ff": "31c0eaff956a521e76b46f6a377d6051",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/84d4dc7259e49a5e0540d479258bac8babebff": "9a0ac598bb0c942b30df1443193bee96",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ff/974e950d6ae1f3bfca64b9e29c3a12798da39d": "38df4638334f3f67574bc93437690152",
".git/refs/heads/master": "688aac2ba88baff226fdfa602b6c06d0",
".git/refs/remotes/origin/master": "688aac2ba88baff226fdfa602b6c06d0",
"assets/AssetManifest.json": "22436d34d123a48a6878fcadc6e6e3bf",
"assets/assets/1.jpeg": "19c31fdf2ac4fcb3436d3e405563b8aa",
"assets/assets/2.jpeg": "aa0e1046e8a709764b170df3003d696e",
"assets/assets/3.jpeg": "10fa0c6a6593cb2b7735e4ff2cb3bd7f",
"assets/assets/4.jpeg": "bf9b585ec8e42cd6d7525d321ef69d31",
"assets/assets/5.jpeg": "581328cf5a9f5f697cfdadb9156f09c3",
"assets/assets/borobudur-india-spiritual-destinations.jpg": "b9fcb2ad36ded0357b9e9aec8a58ceca",
"assets/assets/dead-sea-israel-spiritual-travel-destinations.jpg": "884cb94a47b9fa0d3f58c125babaf187",
"assets/assets/logo.png": "3b65e9c18ec40701762f6373bfb93f5a",
"assets/assets/machu-piccu-spirituality-destinations.jpg": "c4623e24a1eb9dcff4886ea42e9d0183",
"assets/assets/powerful-spiritual-travel-places.jpg": "8891132ed0fc414c11c98abb86f5278c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "eaf83d7c752fcaad740a553f33d5d111",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8180884910fc7d1aba6e5ad2a8a62978",
"/": "8180884910fc7d1aba6e5ad2a8a62978",
"main.dart.js": "916f7b9c2e6431cf49c491c6ac66e948",
"manifest.json": "687e8d30566e7152e6b851ddf4d342c4",
"version.json": "0ed11a52c103a9e94a9b70a892653e54"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
