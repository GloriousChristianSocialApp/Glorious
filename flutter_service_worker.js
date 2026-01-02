'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_37.part.js": "7bce73631766265076126c2f9978a49c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js_65.part.js": "733f7cc1a7cf3f572f1bb0f11fcf03cb",
"icons/icon.png": "959c9b5b9480015ff6a3a4fc2a496f20",
"main.dart.js_20.part.js": "4c893e3b1ccac43ed74756c851d230c4",
"main.dart.js_88.part.js": "11b48b8fa9d526b8795ab3cc85867a0d",
"main.dart.js_105.part.js": "4fa927466206fa18c7fe7ff42febc1b2",
"main.dart.js_76.part.js": "f724f2b716ca50bf99eb599123e0bff5",
"main.dart.js_101.part.js": "3971796e8cad187404e8cbf5211b713f",
"main.dart.js_1.part.js": "770e70b7a2b864e07922da991aab0bd6",
"manifest.json": "cb0b7586619562d04b8cc9f17b55bb88",
"main.dart.js_92.part.js": "0f3e6aa9c3c1fc8514116eedc54b3cc3",
"main.dart.js_87.part.js": "37b13160c5ecd0464d1a22a924930085",
"main.dart.js_63.part.js": "c96bbff4cf7660ef3f27388ec64a3717",
"main.dart.js_27.part.js": "918a897f83b0805eb6fd880fc89d8536",
"main.dart.js_36.part.js": "f06d4f9b8b63008d37b082410cdf6776",
"main.dart.js_124.part.js": "7a521388df63c9cc3dcae982cb3b76bb",
"main.dart.js_13.part.js": "441a899808052767136932b52281ec5e",
"main.dart.js_106.part.js": "4761d6047373983e62d9bdaa3ec4eb9c",
"main.dart.js_14.part.js": "d957aad0c0c23942dcbff041d84cd472",
"main.dart.js_39.part.js": "dfb5fb594fee4a9cdcfd0ee38cb0b301",
"main.dart.js_61.part.js": "103b8f8ffe8e98ddf8fabc3810003480",
"main.dart.js_48.part.js": "bed629c9597a2d06a5a9edb6455e6b69",
"main.dart.js_19.part.js": "bcad86dad3a288c5552b9fcc1ee52153",
"main.dart.js_132.part.js": "08c54a32e66e6858e23e0f531cbad137",
"main.dart.js_73.part.js": "e2781e375781d914d1b9d1cc3f720641",
"main.dart.js_81.part.js": "220939a41c515b4b2a9f266f473944d8",
"main.dart.js_30.part.js": "9e0ff32d070a3c50f8994d0452eb8c60",
"main.dart.js_117.part.js": "8019137e52c0e0c5c43997efea74a577",
"main.dart.js_11.part.js": "93b0ca5802039569538d6f218445574d",
"main.dart.js_126.part.js": "1c3fa15093392b7c6dcd6168fec105fd",
"main.dart.js_100.part.js": "5bd225cd70f4307d77fdf638cc1b2a68",
"main.dart.js_58.part.js": "af7e7e5a026e911d23fba2202267bb3f",
"main.dart.js_130.part.js": "3cebc4099010012dd8ec9ce94b71e3f9",
"main.dart.js_71.part.js": "6d6b2296a32f59eedfecff0932b1536c",
"main.dart.js_42.part.js": "ae13b93306f705990d34184b6d5cee64",
"main.dart.js_45.part.js": "6c7d66768c7fc1910c0aa40b3eae03ae",
"index.html": "6e27627253c271d1d95205e972fb0464",
"/": "6e27627253c271d1d95205e972fb0464",
"main.dart.js_18.part.js": "e7f1e7c99f369a947a04417d7702af50",
"main.dart.js_35.part.js": "048c4b1271ff35f0297bdff8ee24157f",
"main.dart.js_102.part.js": "2b1db0bf96a670557b62b0a5c68cfa7a",
"main.dart.js_79.part.js": "1d34a6623e85c318ac1d6add17142d09",
"main.dart.js_95.part.js": "ceda582892508887a6cfe0d8c41a5ada",
"main.dart.js_98.part.js": "1a2242770d5f8ea62bf308d3a37e2317",
"main.dart.js_41.part.js": "01e1e3b33570245dd9b5bd88bcddcc4b",
"main.dart.js_96.part.js": "6f52608eb9bea3f61d3f6dcaf4505188",
"main.dart.js_75.part.js": "bd2933c372a4902b81ec6506e919d191",
"main.dart.js_122.part.js": "eae1b6814179b9bb2e5b98eba8b2afa9",
"main.dart.js_134.part.js": "0c625c36e367e894a1762a16cf60d068",
"main.dart.js_57.part.js": "72fc91a2ce7c47418d7ae94713e230bb",
"main.dart.js_114.part.js": "638b68dd9b1144c8da8a3dca5f6d2b21",
"main.dart.js_34.part.js": "7d442d8f65c9c8d677fb4f6d5a514a63",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "29b23e500ce543ad557950e9020abd6e",
"assets/fonts/MaterialIcons-Regular.otf": "cad78999986c7c6761bec698f7bd1a62",
"assets/NOTICES": "6b34b802ec458dc0bd01c7342cca4336",
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
"main.dart.js_53.part.js": "f3236d72f5fdc2b453e3ae80263da6ff",
"main.dart.js_47.part.js": "abaab825c64b4f13ff6f8a8cb6cec861",
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
"main.dart.js_69.part.js": "bc26bdb1e801544ab82f3661bfcc005a",
"main.dart.js_107.part.js": "b57b964ce5bc1ff028f6577b086a9d4d",
"google16f6abb7e53b51f3.html": "8b107aea1020d451961f70f0ea9bfe6c",
"main.dart.js_60.part.js": "ee92792b1696affd01574909c5f93e91",
"main.dart.js_89.part.js": "43f3f0c61bb6c806468bd30c1994efa7",
"favicon.png": "5c946c6c291dfc00d360e81bb979c983",
"main.dart.js_72.part.js": "9afe73171fa3bc6bfb9c2df452cdb2af",
"main.dart.js_44.part.js": "c1c0b4a3aed3daa2473574b81fdb0dcf",
"main.dart.js_32.part.js": "2a1679d2590ee42093bee85136484972",
"main.dart.js_91.part.js": "45f9c76c951e267d9343b3786c828b94",
"main.dart.js_31.part.js": "d7b8c31065f9e2be2f76433b655ed77c",
"main.dart.js_5.part.js": "3914e81767a45045773f66cf3403db29",
"main.dart.js_59.part.js": "c744c5661b250bfd9658bf629fbbc12c",
"main.dart.js_16.part.js": "fa0e01cf8b377cc053a276c31238258e",
"main.dart.js_50.part.js": "1208867806b6749fabd2cb81e9fe89d8",
"main.dart.js_103.part.js": "9d986c9e8792e6ed734945d5e57d2368",
"main.dart.js_54.part.js": "994c3bb0984f2e39c4587df81cedbcb7",
"main.dart.js_52.part.js": "b58aa632aaca27c24d79b585a64072df",
"main.dart.js_7.part.js": "07dda57dde5bd5b9b0f482b1f8915384",
"main.dart.js_23.part.js": "d95f3d3d09338fc0ef45763142952a3a",
"main.dart.js_68.part.js": "c8f5c1ae0c17102ec5b88ccfb3f3ae1f",
"main.dart.js_49.part.js": "35bc561730cc36a47ca4acd3068ac857",
"main.dart.js_43.part.js": "be246f6f9cacb6bcf07300fdda834da8",
"main.dart.js_97.part.js": "00bb2be236d7c8b3fe5b0b5f3f653321",
"main.dart.js_8.part.js": "403b4dba51fcf9feb6189fb2b3653615",
"main.dart.js_21.part.js": "5f236182f07b245fc8b1f06fd1a954c4",
"main.dart.js_123.part.js": "0070d6bd9f603f4c2124f02b2d748725",
"main.dart.js_93.part.js": "db94fa83fc0520dbbfa1e89f1587751a",
"main.dart.js_66.part.js": "c81486e6be6161608009cb498a7c7702",
"main.dart.js_64.part.js": "a43820f4ac57c30f2b2adc11a1a1e7b4",
"install/index.html": "76cb3be3a9115e556f52a1800bc740fa",
"install/googlea3aedf9eb623d511.html": "15908280a731c99ea6b5defe4f6f29d1",
"main.dart.js_46.part.js": "62f55ebef64902ca4593b9261fd95c3f",
"main.dart.js_40.part.js": "55a47e84b1e1f6a0745bef3f351bec59",
"main.dart.js_22.part.js": "a6eb9ec92807f6088b6e3abc4ff046c9",
"main.dart.js_84.part.js": "ad646c72519089e6f54f11d661c578fe",
"main.dart.js_4.part.js": "d546d2ea3a3039d1edf7ec59db7151bb",
"main.dart.js_85.part.js": "4422efc78dacb91adc4b0120b7b9f077",
"main.dart.js_128.part.js": "0641a3c391ffc7d6d33dddf6edbc5afc",
"main.dart.js_109.part.js": "d7fa9e99143c3877f6bf53a58ab74f6f",
"main.dart.js_25.part.js": "7b9ee237da632d7916bafbf7f92debca",
"main.dart.js_90.part.js": "9ec2423fe8f4521fbd48575cd1924560",
"main.dart.js_28.part.js": "f47c7d55566a3cd66b1796ddd0276024",
"main.dart.js_62.part.js": "1982119827af0e1e4de67ac6f3db2535",
"main.dart.js_29.part.js": "4a71e978bc5867f7d67235c720122f40",
"main.dart.js_129.part.js": "06de87656761e67dddf0c3a71bbe721e",
"main.dart.js_127.part.js": "bcc95d835a0545c93b6283a47e11f239",
"main.dart.js_24.part.js": "4edfd2ef900c5fa5fb0bc6c316190683",
"main.dart.js_121.part.js": "d97a5677cd2ea8603e3cc20ddf022a8b",
"main.dart.js_74.part.js": "1a9b35c3dac62ada0b6220734434d2fd",
"main.dart.js_83.part.js": "0e207b1a96c289ebc71546d288c02786",
"flutter_bootstrap.js": "8e067354dc97d8c03ba3afcc17d9ebfc",
"main.dart.js_15.part.js": "66192c6573be1fd40851ced53b153eb9",
"main.dart.js_9.part.js": "88e967d02100bcb9ba8821f9182c3efe",
"main.dart.js_26.part.js": "a43f5c778b3876e30900cafb5ca9595a",
"main.dart.js_125.part.js": "d63735398a0b1e95abd768bdb7fed830",
"version.json": "8f277993c26af9064cc6f427ee9f1d5b",
"main.dart.js_115.part.js": "5dd8dce5d85046fedd5b7c395ae4b340",
"main.dart.js": "eec73a6df7974ba1ee6bc050094be2ff",
"main.dart.js_51.part.js": "79c40db77d903cf7acfb59df4a7f5ec6",
"main.dart.js_6.part.js": "bec21492d90422d58a90332c37f234e9",
"main.dart.js_116.part.js": "1c4b14064f7cfcef36d7cac8f2fed15d",
"main.dart.js_94.part.js": "93128c66562c1676cdff749a18617286",
"main.dart.js_99.part.js": "2ab0c8e14e9ecdf13b5a42bd3b0ca0ac",
"main.dart.js_17.part.js": "b93ff2e5e4e072a678706c435bb6eb41",
"main.dart.js_86.part.js": "3b427fde00bbab4d4887458db0057569",
"main.dart.js_33.part.js": "b8d46ee525be930c1d85e4efaea7d40b",
"main.dart.js_80.part.js": "9087d27ea4f9e8d1f8831811df91130e",
"main.dart.js_118.part.js": "ebef1ad2c76ad1d82811dd0fb212dc6c"};
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
