'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_37.part.js": "e990823eaa714e086075a59f795c8582",
"main.dart.js_3.part.js": "f453ba9b43f05d9035d67b2698ffa2c3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/icon.png": "5c946c6c291dfc00d360e81bb979c983",
"main.dart.js_1.part.js": "49dbf6716e79024bac02e4cbdb433789",
"manifest.json": "cb0b7586619562d04b8cc9f17b55bb88",
"main.dart.js_27.part.js": "8f5392d0f5fd6df5e334cbc5311b15e3",
"main.dart.js_36.part.js": "c11b4d6cdbb36937fde421aac11d74d3",
"main.dart.js_13.part.js": "5c70611013f96f044009c2f60e1468a5",
"main.dart.js_14.part.js": "1f3b25dad89c98c3b2ea7d7103bdfd38",
"main.dart.js_39.part.js": "2ce4874bf339b7b069a35671b4be3f55",
"main.dart.js_19.part.js": "e0d4a595dad70ea2c1a0602898da57e6",
"main.dart.js_30.part.js": "87b6986e49ba8aa92c0f7d72229a5e85",
"main.dart.js_11.part.js": "45220d6f17c6345249ff574e04baba4d",
"index.html": "6e27627253c271d1d95205e972fb0464",
"/": "6e27627253c271d1d95205e972fb0464",
"main.dart.js_18.part.js": "608cd334a2e58b18118c597aae305bcb",
"main.dart.js_35.part.js": "26ab5d377b463bf5749917d46890e5b3",
"main.dart.js_10.part.js": "ca9fecfa5cbc996353d84509b9f0f43c",
"main.dart.js_2.part.js": "a3974e001388f0424364f1817f840e75",
"main.dart.js_34.part.js": "d21e7a30c4c559b31750a5e89dc0f395",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "29b23e500ce543ad557950e9020abd6e",
"assets/fonts/MaterialIcons-Regular.otf": "309c2255624e231cd1347f2f47f7156a",
"assets/NOTICES": "83cf99dc23e35628adfc190ba713c112",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin": "2e1802c285397d4e8e2518c6e94c7be0",
"assets/AssetManifest.json": "c47c3d71c4c36118f590f1713de10626",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"google16f6abb7e53b51f3.html": "8b107aea1020d451961f70f0ea9bfe6c",
"favicon.png": "5c946c6c291dfc00d360e81bb979c983",
"main.dart.js_32.part.js": "50fd1ab70d4e88ff79f7713ccaa224a3",
"main.dart.js_31.part.js": "6383c2fee647cee793b1ee08d96906b2",
"main.dart.js_5.part.js": "7fd37585eb3e2a6f20c685a2c95c3f23",
"main.dart.js_16.part.js": "98e4d2b18c8c51127d52e9a700742750",
"main.dart.js_7.part.js": "1a5e84ca02ef1c4fd3e632cbe3a65592",
"main.dart.js_23.part.js": "407c82a51cbf23ae4a4b092a8379120d",
"main.dart.js_8.part.js": "ab2a9056e9b0920d543307f2a90514c3",
"main.dart.js_21.part.js": "3ae08b7f3a31f32f803454b93bcef9b0",
"install/index.html": "303d9ae34fdd094e89790c79ee8aa168",
"main.dart.js_22.part.js": "3e6e19094ee7624e98aecec62bba9d86",
"main.dart.js_4.part.js": "8a76d1740fc4fde70095e73307c9ef1b",
"main.dart.js_25.part.js": "cf23f00df0276cfbdbae692cfcfcb735",
"main.dart.js_28.part.js": "d1930d123ba6c1527284eaf468e83dc7",
"main.dart.js_29.part.js": "ddf84ca7f36010359d9331923be30e0c",
"main.dart.js_24.part.js": "edce0853134d0c3c0d7fa8477744dcd8",
"main.dart.js_12.part.js": "d8b560763bbd0d95543a79272521ec1b",
"main.dart.js_38.part.js": "de5f235d641800bcdb5d4fdab40e8b07",
"flutter_bootstrap.js": "0d7a2aa116a631d7aed9fadf49d865c8",
"main.dart.js_15.part.js": "5ea43da2839758f3396b24f9aca3973f",
"main.dart.js_9.part.js": "f81408a68279ed37db8f6a059ff372d1",
"version.json": "e3f8986c8ff8b48f1f8160608576d2f4",
"main.dart.js": "eacaf1ad67ba0929cec121e4447642bc",
"main.dart.js_6.part.js": "392d5410e2dee88e503e9b03ba69077a",
"main.dart.js_17.part.js": "246261e7508ac1e2ec083e809aae53c4",
"main.dart.js_33.part.js": "178f5e239f08b5056b4e19f452fe8946"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
