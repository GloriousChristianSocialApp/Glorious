'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_37.part.js": "67031c76964f923f960858fffef74dbf",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js_65.part.js": "2fa79fd3c04783e3a83f95e85e9a3ffa",
"icons/icon.png": "959c9b5b9480015ff6a3a4fc2a496f20",
"main.dart.js_20.part.js": "0c7a6d2e924c9fad5ce90748d28dfc03",
"main.dart.js_88.part.js": "877dd4d9b9b5e4315882cd46276504b5",
"main.dart.js_105.part.js": "18a0ec1d26ebe74ca691474f158cf9b2",
"main.dart.js_76.part.js": "7e2c0d06db3c7307dff4dfc9b196f8f8",
"main.dart.js_101.part.js": "da2c8ed45e7f940c7fff140b67528011",
"main.dart.js_1.part.js": "a8da3630d8a02fbefe4cdf77cf598951",
"manifest.json": "cb0b7586619562d04b8cc9f17b55bb88",
"main.dart.js_92.part.js": "17c4029048355c2d1a852cdf55023992",
"main.dart.js_87.part.js": "37b13160c5ecd0464d1a22a924930085",
"main.dart.js_63.part.js": "d5bb8e73b5ea1a5d4bb11d390472d206",
"main.dart.js_27.part.js": "fb5f79119ee0165abc1aee6b790226b3",
"main.dart.js_36.part.js": "540c1ac08cff7607316d142d813f65ff",
"main.dart.js_124.part.js": "7a521388df63c9cc3dcae982cb3b76bb",
"main.dart.js_13.part.js": "4df78b9c136aa48ce67538f496998095",
"main.dart.js_106.part.js": "4761d6047373983e62d9bdaa3ec4eb9c",
"main.dart.js_14.part.js": "d957aad0c0c23942dcbff041d84cd472",
"main.dart.js_39.part.js": "c8b6ee0272153455436d48a4f01c6735",
"main.dart.js_61.part.js": "ea5fb552b19dfcbdb1fcb0908334b77d",
"main.dart.js_48.part.js": "bed629c9597a2d06a5a9edb6455e6b69",
"main.dart.js_19.part.js": "bcad86dad3a288c5552b9fcc1ee52153",
"main.dart.js_132.part.js": "3232ac5e985c8ae7feb3ec7bd237490b",
"main.dart.js_73.part.js": "e70b050759ebb20343d3ca5f9ae71f63",
"main.dart.js_81.part.js": "f678b10791c530d86646a28d2bbca742",
"main.dart.js_30.part.js": "5c674994517f7431e4c104a9b3eba6dc",
"main.dart.js_117.part.js": "8019137e52c0e0c5c43997efea74a577",
"main.dart.js_11.part.js": "433e8354405e101efe7e616123cbee04",
"main.dart.js_126.part.js": "1c3fa15093392b7c6dcd6168fec105fd",
"main.dart.js_100.part.js": "e8b6ee2e473eab0fe791ed8ded759b7b",
"main.dart.js_58.part.js": "6db8aa9dba6c47f8eda6a0f7832d6310",
"main.dart.js_130.part.js": "96426aa941cb40d6db5809283866990e",
"main.dart.js_71.part.js": "6b647444beb861fc84d014cde57e4f7f",
"main.dart.js_42.part.js": "22129c60182fc261f7279f96c2d4b822",
"main.dart.js_45.part.js": "6c7d66768c7fc1910c0aa40b3eae03ae",
"index.html": "4ff0981f9dfac3453e3301f4f513bda7",
"/": "4ff0981f9dfac3453e3301f4f513bda7",
"main.dart.js_18.part.js": "e7f1e7c99f369a947a04417d7702af50",
"main.dart.js_35.part.js": "90c5d87ca3ec15a095d5d78c8dd7ea69",
"main.dart.js_102.part.js": "695c853bd4b4faa6658b88336645bd88",
"main.dart.js_79.part.js": "1d34a6623e85c318ac1d6add17142d09",
"main.dart.js_95.part.js": "84747a20a7c5138481889c6b25240bbb",
"main.dart.js_98.part.js": "582cb1a4a850bc3c88ced372838a2465",
"main.dart.js_41.part.js": "60c601f088ac0610fe6690488e5744e4",
"main.dart.js_96.part.js": "4fd5f83ad53182ae5955ae7d36356dd7",
"main.dart.js_75.part.js": "528d60fe4cf153fce19ba717cf37583a",
"main.dart.js_122.part.js": "d6ed8bad2ff03c4eaed62770aad04415",
"main.dart.js_134.part.js": "8cc6a3c20bdad15a6e0b1a91470df00a",
"main.dart.js_57.part.js": "72fc91a2ce7c47418d7ae94713e230bb",
"main.dart.js_114.part.js": "abfd6683198d0e359adccb1124f51f8a",
"main.dart.js_34.part.js": "7d442d8f65c9c8d677fb4f6d5a514a63",
"googlea3aedf9eb623d511.html": "15908280a731c99ea6b5defe4f6f29d1",
"robot.txt": "519d7a97fb9d7f7d00839f6e51f64f96",
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
"main.dart.js_53.part.js": "f7b2b5f8f8e2fb1a6fc540403684df4e",
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
"main.dart.js_69.part.js": "5cc04806a51f0d2ff63f0d22d19ea755",
"main.dart.js_107.part.js": "8145d65fc23c91917e2af6d73eabfea9",
"main.dart.js_60.part.js": "ee92792b1696affd01574909c5f93e91",
"main.dart.js_89.part.js": "43f3f0c61bb6c806468bd30c1994efa7",
"favicon.png": "5c946c6c291dfc00d360e81bb979c983",
"main.dart.js_72.part.js": "f466cb6f95a001e41a23b88056b37f69",
"main.dart.js_44.part.js": "c1c0b4a3aed3daa2473574b81fdb0dcf",
"main.dart.js_32.part.js": "2a1679d2590ee42093bee85136484972",
"main.dart.js_91.part.js": "f7a92e9af29ed5625d446253eafd8efe",
"main.dart.js_31.part.js": "d7b8c31065f9e2be2f76433b655ed77c",
"main.dart.js_5.part.js": "8343aa56e6b9ada4d40583445ab737e1",
"main.dart.js_59.part.js": "c744c5661b250bfd9658bf629fbbc12c",
"main.dart.js_16.part.js": "29bbc0b98e5a5754a721b80a7b2f5ca4",
"main.dart.js_50.part.js": "1208867806b6749fabd2cb81e9fe89d8",
"main.dart.js_103.part.js": "47f97854192b357fd39ec04ea4d17e4f",
"main.dart.js_54.part.js": "03a401ecb0d100d04a6001c9551c3803",
"main.dart.js_52.part.js": "2223c8f6c18cf1383ec8dfdc64e997aa",
"main.dart.js_7.part.js": "31b6eb9a5728eeaefb641c8bbd8b7620",
"main.dart.js_23.part.js": "d95f3d3d09338fc0ef45763142952a3a",
"main.dart.js_68.part.js": "ed558a0248759ae1d1db578fe96e3c0b",
"main.dart.js_49.part.js": "35bc561730cc36a47ca4acd3068ac857",
"main.dart.js_43.part.js": "d3555bf2fdba70ee2a51f3325eaa8371",
"main.dart.js_97.part.js": "ac7ae9d21548f6bf6a0af3b07145a669",
"sitemap/sitemap.xml": "d22253fd38c86667bfce26ae39aed417",
"main.dart.js_8.part.js": "07b72398e15865f59001f1cef8f4c0e4",
"main.dart.js_21.part.js": "5f236182f07b245fc8b1f06fd1a954c4",
"main.dart.js_123.part.js": "b100644880968860dc76250432d2f2d7",
"main.dart.js_93.part.js": "98289e7c0780dc1e21a0f87c8701ea59",
"main.dart.js_66.part.js": "e7cde4686b730c773bc7ba442194db32",
"main.dart.js_64.part.js": "24928d0f99c2b202054885551565bf6d",
"install/index.html": "aa968a51763d0993d21fcb21916d073a",
"install/googlea3aedf9eb623d511.html": "15908280a731c99ea6b5defe4f6f29d1",
"main.dart.js_46.part.js": "a66c6cdffd5185baa128a2d2b81e1d70",
"main.dart.js_40.part.js": "9fbb9fa20685c0d403eb3ba7dd94e12c",
"main.dart.js_22.part.js": "a6eb9ec92807f6088b6e3abc4ff046c9",
"main.dart.js_84.part.js": "763e4cfcc4175014c5538641ac19cfe2",
"main.dart.js_4.part.js": "20b86d1490e7ea4b03899bf0ffb82b97",
"main.dart.js_85.part.js": "682e2b58213c6a0826a71b57847cffba",
"main.dart.js_128.part.js": "da7b8954457b96791b92449a36418087",
"main.dart.js_109.part.js": "26e1dfca9c7589fd1dc16743c4412133",
"main.dart.js_25.part.js": "ba5f2c43104f6f6473d34f45417f6e55",
"main.dart.js_90.part.js": "9ec2423fe8f4521fbd48575cd1924560",
"main.dart.js_28.part.js": "611a14dbb4d4abfedd18d50f843c59a8",
"main.dart.js_62.part.js": "3cb697880c3a0cf40d3455a7754dca0b",
"main.dart.js_29.part.js": "4a71e978bc5867f7d67235c720122f40",
"main.dart.js_129.part.js": "d4416b2334e577a0c38dd9e73dbfe6e7",
"main.dart.js_127.part.js": "c5ae702c15a7b85b2f08c100ab310045",
"main.dart.js_24.part.js": "4edfd2ef900c5fa5fb0bc6c316190683",
"main.dart.js_121.part.js": "5f4de7dd4d062efbc4567d806d8c6f78",
"main.dart.js_74.part.js": "3869550de6810d1b133b947302d86906",
"main.dart.js_83.part.js": "8b34be68708af9fee7a340e9f6bdcef1",
"flutter_bootstrap.js": "30683a07113c9199d3e2c5aa03a771d7",
"main.dart.js_15.part.js": "66192c6573be1fd40851ced53b153eb9",
"main.dart.js_9.part.js": "88e967d02100bcb9ba8821f9182c3efe",
"main.dart.js_26.part.js": "8ab033e255ee6a0e776f6896d250fa30",
"main.dart.js_125.part.js": "0c1b5b8338b350637e6bcbc346008a0e",
"version.json": "8f277993c26af9064cc6f427ee9f1d5b",
"main.dart.js_115.part.js": "807998ca50abde8c5efdc398bdd32ef1",
"main.dart.js": "2220f329877ac13cae647857d63b0567",
"main.dart.js_51.part.js": "4cac419aa301070273b53d37bc273000",
"main.dart.js_6.part.js": "2081181592292fef52d6ad55a7d2aca6",
"main.dart.js_116.part.js": "1c4b14064f7cfcef36d7cac8f2fed15d",
"main.dart.js_94.part.js": "7528640830a267d72fdd69e9cdc3df84",
"main.dart.js_99.part.js": "4bfec169b3aa93bbeeabf8e0b811e61f",
"main.dart.js_17.part.js": "b93ff2e5e4e072a678706c435bb6eb41",
"main.dart.js_86.part.js": "6a1e6725f3627af0eb40cd7860871388",
"main.dart.js_33.part.js": "b8d46ee525be930c1d85e4efaea7d40b",
"main.dart.js_80.part.js": "2e70c220e1731dc31640286b7ddef944",
"main.dart.js_118.part.js": "1712ec04cea6e37a27c31aebde283b5e"};
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
