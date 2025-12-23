'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_104.part.js": "b19fadda0bf4d77e2b08220f32be22c3",
"main.dart.js_113.part.js": "c689bc3f501fe714454a03096c3ad301",
"main.dart.js_37.part.js": "710ca3478f538971e4e37a9c7641e1b2",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js_65.part.js": "5bbb2c647607ae059edddca12f38241d",
"icons/icon.png": "959c9b5b9480015ff6a3a4fc2a496f20",
"main.dart.js_20.part.js": "008411b313044f946d3504f272dd0a42",
"main.dart.js_88.part.js": "ef8ec73cd16652c09a4e934811c213bb",
"main.dart.js_112.part.js": "0da847067ed6246cf2a2555b4c86832a",
"main.dart.js_120.part.js": "0f4c66787d153daaed1bf8cc55eee8b1",
"main.dart.js_101.part.js": "c6e9c1c3cd6890e1e2d88818dbbdd046",
"main.dart.js_1.part.js": "35f1e9220e792197ba9fd0c2c63cdb01",
"manifest.json": "cb0b7586619562d04b8cc9f17b55bb88",
"main.dart.js_92.part.js": "d6a4411965540d5be87029b4e26fe07a",
"main.dart.js_87.part.js": "6b7ed46773c7a4a9550e87f04618711a",
"main.dart.js_63.part.js": "e99f755afc35c282c23973341b7f2716",
"main.dart.js_27.part.js": "89447fa9b210a7014edb8ea3cc78740d",
"main.dart.js_36.part.js": "b5f185b246b7efe91cf353c272a0c709",
"main.dart.js_13.part.js": "9662e1e92c53b96a0177472748f1a539",
"main.dart.js_14.part.js": "f8f573a598367a374866ed6993a97fa9",
"main.dart.js_39.part.js": "46d835b591ec68d59e5ccf521ff04154",
"main.dart.js_61.part.js": "b83283edfd74c86f477d84fd033d264a",
"main.dart.js_48.part.js": "3d8139893e738554040f2e9c0c7f6227",
"main.dart.js_19.part.js": "354cc20d4b53505566dcd2a27cc43598",
"main.dart.js_73.part.js": "41064433b5d37fa23bf5bf75caac8d16",
"main.dart.js_30.part.js": "9d5c3bfcdb7338243054edf130c7f757",
"main.dart.js_117.part.js": "b410171a280f7059c99bf18c461ae3bc",
"main.dart.js_11.part.js": "39223c837c61c573fc74748258ccdd82",
"main.dart.js_100.part.js": "9705efcca20bc6cf7c239b51c725e1d4",
"main.dart.js_58.part.js": "fb162995c62e8e046c32bb078d0a973b",
"main.dart.js_130.part.js": "4a7109f7ffc564e0aae6459f2e94a221",
"main.dart.js_71.part.js": "d470cd4caa0d35d88e8a109bca5861ad",
"main.dart.js_42.part.js": "cd4dfb04258a0acb8e56d7257b8537a5",
"main.dart.js_45.part.js": "f6fd5e2c078e210669548ef527a5a45c",
"index.html": "6e27627253c271d1d95205e972fb0464",
"/": "6e27627253c271d1d95205e972fb0464",
"main.dart.js_18.part.js": "9666e909088884fbe49ff353a0ef8042",
"main.dart.js_35.part.js": "ee2f890f8eeb48620685491d80525981",
"main.dart.js_102.part.js": "6c8d0549ad76a27109b9e7ed49c05f80",
"main.dart.js_79.part.js": "bd7ea8d2eae0b6509ae605d4c3dbd136",
"main.dart.js_95.part.js": "bded01cdc39e9d4dc9051c56e0733678",
"main.dart.js_119.part.js": "f19a5d2e08f9dbf21b0463ef1b50c0d1",
"main.dart.js_98.part.js": "947bcf3efcfa969a7760a143898e4dc6",
"main.dart.js_41.part.js": "72c6dec38bad2404dc05bd259bd8722a",
"main.dart.js_96.part.js": "fa7a674d7ceef7b7b027553458e6a760",
"main.dart.js_78.part.js": "68ceabb6d4b3c184343460361130e58b",
"main.dart.js_75.part.js": "fb07383e427bf0d8dfc7f260107af9d4",
"main.dart.js_122.part.js": "40f8ceb1886e83fdb28dafcf304d9bcd",
"main.dart.js_82.part.js": "fb97b3ec5001fb826fdf8f817196a3d9",
"main.dart.js_57.part.js": "c37798556d070274f523b2ca28de3478",
"main.dart.js_34.part.js": "029bc27e7ac0074165283a03669a195e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "29b23e500ce543ad557950e9020abd6e",
"assets/fonts/MaterialIcons-Regular.otf": "a7659db950e15589e620ba1e2953d47b",
"assets/NOTICES": "21eef7dbff0611da96cffc77dbafac5b",
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
"main.dart.js_53.part.js": "eb75e423bbaf9b4c6a6b9e6810af5f3b",
"main.dart.js_47.part.js": "debc031a1e0ec98a5759f52c795d7bb1",
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
"main.dart.js_60.part.js": "3a10cf99648ee474df6eb20853e3da2d",
"main.dart.js_89.part.js": "e69ae7b64c0408a74a551beaf965ea15",
"favicon.png": "5c946c6c291dfc00d360e81bb979c983",
"main.dart.js_56.part.js": "c97f7bba7ee2ee9cb2b08e748bfbcf88",
"main.dart.js_72.part.js": "6ffaa4615e5622c20b62f8c987d059e3",
"main.dart.js_44.part.js": "235cab72388fb8543d8b10575accc2f8",
"main.dart.js_32.part.js": "f7a38c94dd043ce94b1aba95b406b63f",
"main.dart.js_91.part.js": "7089aec7b6b2f5d5e6bd8e0f62b81a1d",
"main.dart.js_31.part.js": "d64c063d28f6104988b50964b335221e",
"main.dart.js_5.part.js": "05e8f61032efa9e94d2ff59f4beb2585",
"main.dart.js_59.part.js": "c3a3273feb616357590c6d3c65acc139",
"main.dart.js_16.part.js": "fed3aa5034f8f96c9cdf273aac7ebd59",
"main.dart.js_50.part.js": "d4fdc547f725b8ef8b4b4a279432bfb5",
"main.dart.js_52.part.js": "9b000c7d09a87fa6a77a56b0508a5d6d",
"main.dart.js_7.part.js": "2ded6957984f3acc4c86e79b0e5d3f87",
"main.dart.js_23.part.js": "38df2c488eda4b5fc43fb64998bc5fec",
"main.dart.js_68.part.js": "feee3401acf8599b2761b1d3e3b6275c",
"main.dart.js_49.part.js": "3fdbfcb7165f74fe728a00a14b02fc9d",
"main.dart.js_43.part.js": "36754f3e6564c072a2add0605287d10d",
"main.dart.js_97.part.js": "e994fb508908ff6f349747cc668fe84e",
"main.dart.js_67.part.js": "57dd122be5e80de2347acaa582c3deda",
"main.dart.js_8.part.js": "e3f53a7fce519e9ab4877b5dca4b3e32",
"main.dart.js_21.part.js": "a9af26921419f553428f6d2ac03305c2",
"main.dart.js_123.part.js": "a1424d2736cfdfffccbf2d26f3db70cc",
"main.dart.js_93.part.js": "788ed2e5da491d032afc41361f4d1bdc",
"main.dart.js_64.part.js": "d6b165e6e0cc4502a027fd1df9b79622",
"install/index.html": "ac361cf84c1fa61883488016c0b0aea8",
"main.dart.js_70.part.js": "a54eed1fddc3ffb682c44f08551c000a",
"main.dart.js_46.part.js": "de06cd83045ab9080b1f6f4ff8464fb9",
"main.dart.js_40.part.js": "fe7dcb9ee2d714db7a7ddb8d11e62de1",
"main.dart.js_22.part.js": "8a2b3f703c9d9ce765e8ec6671a32be5",
"main.dart.js_84.part.js": "9fb47f324d96cb6f2c79b35991005100",
"main.dart.js_4.part.js": "43b079a8ad27b2ca1c456c0f7c595979",
"main.dart.js_85.part.js": "cdd36ba92fd6ac839972d9397d6acb41",
"main.dart.js_128.part.js": "4578b93ee9952016a631f26e06fd6b10",
"main.dart.js_109.part.js": "ec98ebd0669a85bebdfc78dcb6a423d7",
"main.dart.js_25.part.js": "46a902ec05a85d2c2233564bb37f0086",
"main.dart.js_90.part.js": "0c5f466e3d8230dbc31d4fc51f3fdf3e",
"main.dart.js_28.part.js": "0980e8ccad77bf387ec2a8701f0bf4d1",
"main.dart.js_62.part.js": "dd81e6370970c46138845eafe929ab52",
"main.dart.js_29.part.js": "d3800d06a208ef790b79d52dbc1f48cd",
"main.dart.js_129.part.js": "e6ab602699d0225c1a64edc2ddd2de6a",
"main.dart.js_127.part.js": "8e450a284b551c9a53716e68168f17a8",
"main.dart.js_24.part.js": "13f4ab7d8231951b709ff0e207693bd4",
"main.dart.js_121.part.js": "d8caf86e5541252cc1884fcaba4dba26",
"main.dart.js_74.part.js": "0f985363bc17328cf99e3da08c90adc1",
"main.dart.js_83.part.js": "aa28d500ff6953ad31832b2bc776e7cc",
"main.dart.js_111.part.js": "3deb6304236cf3919d122f0efb865a54",
"flutter_bootstrap.js": "66925cb4d5f9b51b852148b0164fe618",
"main.dart.js_15.part.js": "1bec5f2ec89787cde8a1c004a8c1b0f0",
"main.dart.js_9.part.js": "8806b36b667f1d52a2a43c98180d73a1",
"main.dart.js_26.part.js": "d3a0b3c1affcea32a7453180a3c48077",
"main.dart.js_125.part.js": "ad0061dbb104df7247606ce940acfde8",
"version.json": "8f277993c26af9064cc6f427ee9f1d5b",
"main.dart.js": "0b61e767b001a511bad17b8bc0b278e2",
"main.dart.js_51.part.js": "e63a3f2f928cdf0d81bf5736cf8e22db",
"main.dart.js_6.part.js": "9b1d17a4ddf1afc90c302eedeba529fc",
"main.dart.js_116.part.js": "6649bf47c676d1e8c29fcb1c2272eeb6",
"main.dart.js_110.part.js": "2d3ae56bebe18ef5829daa6b54573002",
"main.dart.js_94.part.js": "a7a709bccbad01fcd4a9aaba88b1825b",
"main.dart.js_17.part.js": "37069007bccd62ffbb33703922a411eb",
"main.dart.js_86.part.js": "547a8de390ac750133127be5945c16e3",
"main.dart.js_33.part.js": "9e9109a1adb2d59fa494b672705c7137",
"main.dart.js_80.part.js": "7656c7b95b6ed5bff489f909099aa2d8",
"main.dart.js_118.part.js": "1ecaad4194878b8f0654c76940598983"};
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
