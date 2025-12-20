'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_104.part.js": "136541c1fe23d5af9cf2f096fe16755c",
"main.dart.js_113.part.js": "81cd43666ed43ad37bc5a768821c6600",
"main.dart.js_37.part.js": "3a740054fd8feb961fc4d394107bf685",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js_65.part.js": "8de17eb992ec11c1ead606239828abbe",
"icons/icon.png": "5c946c6c291dfc00d360e81bb979c983",
"main.dart.js_20.part.js": "caff7db0396bffbc0524154db1a8acb5",
"main.dart.js_88.part.js": "3064c7a05bb6c152b9ed51e335f0a88b",
"main.dart.js_112.part.js": "bdb09547f6f619a14840c9cd61c57770",
"main.dart.js_105.part.js": "fb2467e5f594df31fa6c849abb833917",
"main.dart.js_120.part.js": "d0146e09cb5211ea2eb201cc3c92a027",
"main.dart.js_1.part.js": "22f4131c7a632c34bfa6c4329985816a",
"manifest.json": "cb0b7586619562d04b8cc9f17b55bb88",
"main.dart.js_92.part.js": "fe7a5be3972e875f07c7b8af22ab7d33",
"main.dart.js_87.part.js": "9a83d0b5dfef050ac96c6c6464975304",
"main.dart.js_63.part.js": "ecb6be137214e1d271841248a0d71587",
"main.dart.js_27.part.js": "1c5ed7ba9e4598698ea1d955b1337bbe",
"main.dart.js_36.part.js": "2be6fb9fbfd1479496a885f146c7ce81",
"main.dart.js_124.part.js": "61a030f0834d0ef2005125dd1617135d",
"main.dart.js_13.part.js": "4082201f10db37e651d6564d42c2c8f5",
"main.dart.js_106.part.js": "2f67bca00e60a3b1ae9c9c3b5780c2f6",
"main.dart.js_14.part.js": "c6ac8d47f99a49e59ddaaf1ea0fa2ae4",
"main.dart.js_39.part.js": "d18821b98685578f3bfff616abf6e8f0",
"main.dart.js_61.part.js": "825dcafc1c8c09406299f8be97ee12ec",
"main.dart.js_48.part.js": "79d19d28552aa548b3fd27f44e88d44b",
"main.dart.js_19.part.js": "93c197637ecb56b9c111063cf330b8f0",
"main.dart.js_73.part.js": "efda64c7ce7ec96cd8c957dba986509e",
"main.dart.js_30.part.js": "d453a0e6568ce8603d2066ed6a9f23f5",
"main.dart.js_117.part.js": "58a1db4273c4dac37cde05300a55950b",
"main.dart.js_11.part.js": "2d10aeb492d6fc9b5bce4afd69c7afa9",
"main.dart.js_58.part.js": "a74bbe3d48e85a0a378c1769be265d2e",
"main.dart.js_71.part.js": "4120f87487354292db8fb42c972359cc",
"main.dart.js_42.part.js": "1349c86fcc134ff0f823f8907b54cfe3",
"main.dart.js_45.part.js": "6c7eba8f9d4189d5510dda22aeb9a6ad",
"index.html": "6e27627253c271d1d95205e972fb0464",
"/": "6e27627253c271d1d95205e972fb0464",
"main.dart.js_18.part.js": "02f806072b718c67a5b3b82a8d1e6cb1",
"main.dart.js_35.part.js": "8d78a61024cda4d39a499e275a00de94",
"main.dart.js_79.part.js": "19a2ebe0c75095b13c8207c8fd5b260d",
"main.dart.js_95.part.js": "5b7fbae55aca2c714e5747c650db46f4",
"main.dart.js_41.part.js": "6fb9ed713705dc682154457b5c05d5f5",
"main.dart.js_96.part.js": "21e8d5220c5461452faead065a76b64d",
"main.dart.js_78.part.js": "0d4dfd54abdde557f7e23cfac0f0730e",
"main.dart.js_75.part.js": "bfa01b9c616940bba52e71c482e77454",
"main.dart.js_122.part.js": "f717100f4b9aef9591e1376ce4e66a74",
"main.dart.js_82.part.js": "2eb5f1f7c56621e42423e672bc888463",
"main.dart.js_57.part.js": "b390f3402b6ade1f752db343f72e3ec7",
"main.dart.js_114.part.js": "a1d7c3879eb0ac052ed0bc0024eb5314",
"main.dart.js_34.part.js": "7165277460f31d66f4e870e32607c715",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "29b23e500ce543ad557950e9020abd6e",
"assets/fonts/MaterialIcons-Regular.otf": "69d4e5dd6c396f062094db7a2158f9b5",
"assets/NOTICES": "8a1d8c0a477b75280fc38b1eee96228b",
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
"main.dart.js_53.part.js": "6be020f477e49a4bc47cafc4ea1980b7",
"main.dart.js_47.part.js": "1f23ff1c9078ec3cc442cad84fd63d5c",
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
"main.dart.js_107.part.js": "8f87a6f96be3b90c5fd734af07cb4b39",
"google16f6abb7e53b51f3.html": "8b107aea1020d451961f70f0ea9bfe6c",
"main.dart.js_60.part.js": "f187cf4fbeda783a24fabd87db8fdf4d",
"main.dart.js_89.part.js": "50b238d3d90ee72976a477766fdf40b2",
"favicon.png": "5c946c6c291dfc00d360e81bb979c983",
"main.dart.js_56.part.js": "5e97b9cc830bb73a4e3ab08e0151556b",
"main.dart.js_72.part.js": "990ac0d1a60f9c5217f80ad2fc36d6a9",
"main.dart.js_44.part.js": "6e32b70431ff22553bf347f0f5728fcc",
"main.dart.js_32.part.js": "129ecc06ce127b6137c080b845d7be70",
"main.dart.js_91.part.js": "23bacf95ae95caf2ff288e16ec282923",
"main.dart.js_31.part.js": "899c261cafc191cbfde044682bf2f6e6",
"main.dart.js_5.part.js": "e90d034e7329d82abb5ad9b73b92efbc",
"main.dart.js_59.part.js": "19a811ba64d6776c906f040a83f4439d",
"main.dart.js_16.part.js": "95c7106af7abca64a6f5213fb315cdf7",
"main.dart.js_50.part.js": "72d07292da9a0295b85ad1d221305b1f",
"main.dart.js_52.part.js": "546c2a55de7efd4fb409d98cf3e10140",
"main.dart.js_7.part.js": "f77f402ff75967ca9836dd77ef1c96da",
"main.dart.js_23.part.js": "4efdb027b6770f31e35a5972238261e8",
"main.dart.js_68.part.js": "6aef4ab4630d7af74796e0a0aa9fa4d5",
"main.dart.js_49.part.js": "9a14239063f367941ffef8f1c32b1979",
"main.dart.js_43.part.js": "aeb521706e93c3f12f7288d20f223a5f",
"main.dart.js_97.part.js": "969a00f9d875040dedb16547d635a771",
"main.dart.js_67.part.js": "8ec09db058420e1fdec5e377cb4e19b5",
"main.dart.js_8.part.js": "990dc1b6c7b8e8601caee194019ccd8e",
"main.dart.js_21.part.js": "bfd1591071be083d4520e1001b41d118",
"main.dart.js_123.part.js": "4bc0471d9e21a020ac03c513e531b9cd",
"main.dart.js_93.part.js": "cfceb488462be64c4c4655b10d95d7a3",
"main.dart.js_64.part.js": "621bc2c7ea857a4e0536588e0458918a",
"install/index.html": "ac361cf84c1fa61883488016c0b0aea8",
"main.dart.js_70.part.js": "170297c7e3c88baca6d207b3ce215382",
"main.dart.js_46.part.js": "e5b0066ae62d35e472d6d5359dbf8262",
"main.dart.js_40.part.js": "184858b6a74f4225faa44eb982c0c3d2",
"main.dart.js_22.part.js": "625cf1ce7742be8e13dfde7be4fb44c6",
"main.dart.js_84.part.js": "a31a4fe0e68ac8f380a98560f0168549",
"main.dart.js_4.part.js": "989d73999c8f932b829fd8fabc0175e2",
"main.dart.js_85.part.js": "82f5ac57e64e24e8d41061a26d27eafd",
"main.dart.js_25.part.js": "87e04ba49311053cfcca7ad991b962e8",
"main.dart.js_90.part.js": "4e3d450d75fa1ba0ca1b3c37403091c2",
"main.dart.js_28.part.js": "a032dd015edb0795c28c41a8ec6a2d70",
"main.dart.js_62.part.js": "d4eb8c3c1a019c4a70f9238911733422",
"main.dart.js_29.part.js": "529da26ac8b9c897c897f60c93e65269",
"main.dart.js_24.part.js": "c271242e13f6634063f8949cce721057",
"main.dart.js_74.part.js": "8a2cc56c89504a272ff673b2270631ec",
"main.dart.js_108.part.js": "011834807d2d0b72ef8dab7eccce091a",
"main.dart.js_83.part.js": "abad652ddac65932e9848f35bb1c24d9",
"main.dart.js_111.part.js": "b3d30646a2295e45d48ba2af8821234b",
"flutter_bootstrap.js": "663af27dfbaee069b8c1cf8ab9f24e39",
"main.dart.js_15.part.js": "8814ab655982da6981ce37429b2cb00a",
"main.dart.js_9.part.js": "6969cbdc5ff41ba5bea71beda71dead6",
"main.dart.js_26.part.js": "39de18707a21138dd2a25cba2a73d80b",
"main.dart.js_125.part.js": "5a9bd1d815edae1118029360ce92729a",
"version.json": "8f277993c26af9064cc6f427ee9f1d5b",
"main.dart.js_115.part.js": "94963aaa8613949d1e5d6f537949095a",
"main.dart.js": "c97a852ff571ff5bf27dda2977369856",
"main.dart.js_51.part.js": "c980dd0f7da05049fc613e0eb7916edc",
"main.dart.js_6.part.js": "ec430d7b8f8ad6a2609930bf247b3b55",
"main.dart.js_116.part.js": "39b51ce069616d5c7728655494dfbbd4",
"main.dart.js_99.part.js": "e210c9ffb45446a2cd704f18c2455400",
"main.dart.js_17.part.js": "12adf224dd1b5457ea17a80fb68876c7",
"main.dart.js_86.part.js": "7d552328125ace5d2eeb762317095a9a",
"main.dart.js_33.part.js": "91ef168982527a1ca9900c7730f8e04e",
"main.dart.js_80.part.js": "df582b24fa8cd4f0e6cbd63b722321a5",
"main.dart.js_118.part.js": "257815f39a209f039e0210a22e16aa31"};
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
