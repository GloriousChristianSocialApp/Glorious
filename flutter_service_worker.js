'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_104.part.js": "a3d9c524cd0605af697767a3c0de98a7",
"main.dart.js_113.part.js": "d20b1f2b07ea1f436fbbae381452bfe3",
"main.dart.js_37.part.js": "95672599fd4c6a92d097366c3df3bed0",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js_65.part.js": "1c2acb3f9ca3da1a31527c20a8a60f6d",
"icons/icon.png": "959c9b5b9480015ff6a3a4fc2a496f20",
"main.dart.js_20.part.js": "f1b3ad1c7099107f9a5f17fa9368af43",
"main.dart.js_88.part.js": "2f40f355b665b2c0a3ced45f2d53d58d",
"main.dart.js_112.part.js": "5e350d8fda2ccc0efac3ded536e47028",
"main.dart.js_105.part.js": "cffa330e7cfb50651508dc8ef6b2f078",
"main.dart.js_120.part.js": "fc92445ef23423ec988f03917f296487",
"main.dart.js_1.part.js": "bc6e88cca3e595abc89ca56189325f6c",
"manifest.json": "cb0b7586619562d04b8cc9f17b55bb88",
"main.dart.js_92.part.js": "a06953c62010d7db6e2d6e5f047bd098",
"main.dart.js_87.part.js": "9a83d0b5dfef050ac96c6c6464975304",
"main.dart.js_63.part.js": "ecb6be137214e1d271841248a0d71587",
"main.dart.js_27.part.js": "2fa6c7b30e950e2b534f8c66a5021c1c",
"main.dart.js_36.part.js": "74a0185d9242e1282cf4a0f5d899d3b7",
"main.dart.js_124.part.js": "a5bfafb28c28543ce46a1a677f61a8fe",
"main.dart.js_13.part.js": "4082201f10db37e651d6564d42c2c8f5",
"main.dart.js_106.part.js": "2f67bca00e60a3b1ae9c9c3b5780c2f6",
"main.dart.js_14.part.js": "c6ac8d47f99a49e59ddaaf1ea0fa2ae4",
"main.dart.js_39.part.js": "f2c2ca20a860105704c46638ab178935",
"main.dart.js_61.part.js": "7fb33a15f6e541be625d9154343eb3ac",
"main.dart.js_48.part.js": "79d19d28552aa548b3fd27f44e88d44b",
"main.dart.js_19.part.js": "93c197637ecb56b9c111063cf330b8f0",
"main.dart.js_73.part.js": "efda64c7ce7ec96cd8c957dba986509e",
"main.dart.js_30.part.js": "adb8bba7c2743026d6476f4f0f2f9d3d",
"main.dart.js_117.part.js": "58a1db4273c4dac37cde05300a55950b",
"main.dart.js_11.part.js": "aa891c17ab6e37803a6ef6d1c3244bda",
"main.dart.js_58.part.js": "a74bbe3d48e85a0a378c1769be265d2e",
"main.dart.js_71.part.js": "cc1ac41ad7f962daa56ca9224664a7c0",
"main.dart.js_42.part.js": "1d6975afacd935ce7e571ed6927f9f10",
"main.dart.js_45.part.js": "6c7eba8f9d4189d5510dda22aeb9a6ad",
"index.html": "6e27627253c271d1d95205e972fb0464",
"/": "6e27627253c271d1d95205e972fb0464",
"main.dart.js_18.part.js": "02f806072b718c67a5b3b82a8d1e6cb1",
"main.dart.js_35.part.js": "8d78a61024cda4d39a499e275a00de94",
"main.dart.js_79.part.js": "474c290707b278e50211df85793ce7c4",
"main.dart.js_95.part.js": "85ae194723f239c3dd826d0316f54fa2",
"main.dart.js_41.part.js": "19e604a900b583b398828e631260221b",
"main.dart.js_96.part.js": "21e8d5220c5461452faead065a76b64d",
"main.dart.js_78.part.js": "0d4dfd54abdde557f7e23cfac0f0730e",
"main.dart.js_75.part.js": "bfa01b9c616940bba52e71c482e77454",
"main.dart.js_122.part.js": "0c9307d2faa959d8dbf7b154f818fb72",
"main.dart.js_82.part.js": "65df3683a3af496c2a4d7a47fb1f9636",
"main.dart.js_57.part.js": "b390f3402b6ade1f752db343f72e3ec7",
"main.dart.js_114.part.js": "9342c662d59f2c4234d4c7ae07c095cb",
"main.dart.js_34.part.js": "7165277460f31d66f4e870e32607c715",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "29b23e500ce543ad557950e9020abd6e",
"assets/fonts/MaterialIcons-Regular.otf": "69d4e5dd6c396f062094db7a2158f9b5",
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
"main.dart.js_53.part.js": "c89b2d3e7aa3faa0df67b46525ffa063",
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
"main.dart.js_60.part.js": "4d9e3d65a319dcef278ff35d5c4f2ad6",
"main.dart.js_89.part.js": "7a00681ce820611fa6f94005e2df680a",
"favicon.png": "5c946c6c291dfc00d360e81bb979c983",
"main.dart.js_56.part.js": "5e97b9cc830bb73a4e3ab08e0151556b",
"main.dart.js_72.part.js": "8de7e5f97125e0922a25579a6129afbf",
"main.dart.js_44.part.js": "6e32b70431ff22553bf347f0f5728fcc",
"main.dart.js_32.part.js": "129ecc06ce127b6137c080b845d7be70",
"main.dart.js_91.part.js": "1dd0194e4241c73e47704475a2a8338a",
"main.dart.js_31.part.js": "899c261cafc191cbfde044682bf2f6e6",
"main.dart.js_5.part.js": "bbfd2140cd00811ec380efbce256844a",
"main.dart.js_59.part.js": "19a811ba64d6776c906f040a83f4439d",
"main.dart.js_16.part.js": "95c7106af7abca64a6f5213fb315cdf7",
"main.dart.js_50.part.js": "ec1800702e4c832efff771820001612d",
"main.dart.js_52.part.js": "546c2a55de7efd4fb409d98cf3e10140",
"main.dart.js_7.part.js": "f02346bf38461f76397f460457ea6347",
"main.dart.js_23.part.js": "4efdb027b6770f31e35a5972238261e8",
"main.dart.js_68.part.js": "a71b10570cf9ff6e21e2d1bbde30ca3e",
"main.dart.js_49.part.js": "9a14239063f367941ffef8f1c32b1979",
"main.dart.js_43.part.js": "aeb521706e93c3f12f7288d20f223a5f",
"main.dart.js_97.part.js": "969a00f9d875040dedb16547d635a771",
"main.dart.js_67.part.js": "f5afc2d5c50976161ed41a0c3ff22386",
"main.dart.js_8.part.js": "2247d8942f93ec38dc01acc7e1ed7e6d",
"main.dart.js_21.part.js": "bfd1591071be083d4520e1001b41d118",
"main.dart.js_123.part.js": "761c42f6f3bf1f73bd1e4ac9368b69bb",
"main.dart.js_93.part.js": "690fe4242583910f4ea32e9c9d73f665",
"main.dart.js_64.part.js": "55399af0790f50683431a1c3022d15ab",
"install/index.html": "ac361cf84c1fa61883488016c0b0aea8",
"main.dart.js_70.part.js": "4b5173a8fb01097080610d57451498ee",
"main.dart.js_46.part.js": "e5b0066ae62d35e472d6d5359dbf8262",
"main.dart.js_40.part.js": "67d0d20c7fa3babd942875086fc42498",
"main.dart.js_22.part.js": "625cf1ce7742be8e13dfde7be4fb44c6",
"main.dart.js_84.part.js": "4411ad50efef699d88a32441dccd637e",
"main.dart.js_4.part.js": "68519fd67a5f9ffeeb024a5b853cdc3b",
"main.dart.js_85.part.js": "e53b20b3b5ab10f434bcc340f9e05dc1",
"main.dart.js_25.part.js": "eac1da3a59a6e1827fe8d572e105d2d4",
"main.dart.js_90.part.js": "42926cd9e1700773d09aa16026a15f07",
"main.dart.js_28.part.js": "2af2aec7d5674078e0237b395511b296",
"main.dart.js_62.part.js": "d4eb8c3c1a019c4a70f9238911733422",
"main.dart.js_29.part.js": "529da26ac8b9c897c897f60c93e65269",
"main.dart.js_24.part.js": "c271242e13f6634063f8949cce721057",
"main.dart.js_74.part.js": "b1cb5a9d6d3b613d05199a4b6e8b1318",
"main.dart.js_108.part.js": "57822a61e8afd69f8c20feb1d005e1c6",
"main.dart.js_83.part.js": "464456bffb821b777c16e7e1cc22d840",
"main.dart.js_111.part.js": "e62d408e7f32d0a5cdace12275f17a0e",
"flutter_bootstrap.js": "3ef5802eecd6f443840c24de37545e36",
"main.dart.js_15.part.js": "8814ab655982da6981ce37429b2cb00a",
"main.dart.js_9.part.js": "6969cbdc5ff41ba5bea71beda71dead6",
"main.dart.js_26.part.js": "97b69752d5ea56d9459a7c965f8306a9",
"main.dart.js_125.part.js": "88be3e2caad45b10aa1423cb9e88cecc",
"version.json": "8f277993c26af9064cc6f427ee9f1d5b",
"main.dart.js_115.part.js": "0e251fea45393048ad91a0174c909dee",
"main.dart.js": "c8d4994dd55d79521050f24a6fae7d5c",
"main.dart.js_51.part.js": "81181d338aef747fe8568983d3cf47ef",
"main.dart.js_6.part.js": "b5c5ac92171739c4368cd26841eec4e4",
"main.dart.js_116.part.js": "39b51ce069616d5c7728655494dfbbd4",
"main.dart.js_99.part.js": "9cc5b80d38a04cbd7e5e55e4bbb34f73",
"main.dart.js_17.part.js": "12adf224dd1b5457ea17a80fb68876c7",
"main.dart.js_86.part.js": "7d552328125ace5d2eeb762317095a9a",
"main.dart.js_33.part.js": "91ef168982527a1ca9900c7730f8e04e",
"main.dart.js_80.part.js": "859876aaed27f1a0c5e84971ee4e90a7",
"main.dart.js_118.part.js": "9f73e1f76cfae69632be0e415253c0d4"};
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
