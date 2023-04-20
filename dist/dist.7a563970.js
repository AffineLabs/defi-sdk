// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iatvl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a2357e327a563970";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5OAmS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Web3Modal", ()=>f);
var _core = require("@web3modal/core");
var s = Object.defineProperty, a = Object.getOwnPropertySymbols, c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable, i = (o, e, t)=>e in o ? s(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, b = (o, e)=>{
    for(var t in e || (e = {}))c.call(e, t) && i(o, t, e[t]);
    if (a) for (var t of a(e))d.call(e, t) && i(o, t, e[t]);
    return o;
};
class f {
    constructor(e){
        this.openModal = (0, _core.ModalCtrl).open, this.closeModal = (0, _core.ModalCtrl).close, this.subscribeModal = (0, _core.ModalCtrl).subscribe, this.setTheme = (0, _core.ConfigCtrl).setThemeConfig, (0, _core.ConfigCtrl).setConfig(b({
            enableStandaloneMode: !0
        }, e)), this.initUi();
    }
    async initUi() {
        if (typeof window < "u") {
            await require("396f34377adca09c");
            const e = document.createElement("w3m-modal");
            document.body.insertAdjacentElement("beforeend", e), (0, _core.OptionsCtrl).setIsUiLoaded(!0);
        }
    }
}

},{"@web3modal/core":"7c76x","396f34377adca09c":"cVRFP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7c76x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClientCtrl", ()=>I);
parcelHelpers.export(exports, "ConfigCtrl", ()=>E);
parcelHelpers.export(exports, "CoreUtil", ()=>c);
parcelHelpers.export(exports, "ExplorerCtrl", ()=>A);
parcelHelpers.export(exports, "ModalCtrl", ()=>k);
parcelHelpers.export(exports, "OptionsCtrl", ()=>a);
parcelHelpers.export(exports, "RouterCtrl", ()=>m);
parcelHelpers.export(exports, "ToastCtrl", ()=>P);
var _vanilla = require("valtio/vanilla");
var _buffer = require("buffer");
const n = (0, _vanilla.proxy)({
    selectedChain: void 0,
    chains: void 0,
    standaloneChains: void 0,
    standaloneUri: void 0,
    address: void 0,
    profileName: void 0,
    profileAvatar: void 0,
    profileLoading: !1,
    balanceLoading: !1,
    balance: void 0,
    isConnected: !1,
    isStandalone: !1,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isExplorer: !1,
    isDataLoaded: !1,
    isUiLoaded: !1
}), a = {
    state: n,
    subscribe (e) {
        return (0, _vanilla.subscribe)(n, ()=>e(n));
    },
    setChains (e) {
        n.chains = e;
    },
    setStandaloneChains (e) {
        n.standaloneChains = e;
    },
    setStandaloneUri (e) {
        n.standaloneUri = e;
    },
    getSelectedChain () {
        const e = I.client().getNetwork().chain;
        return e && (n.selectedChain = e), n.selectedChain;
    },
    setSelectedChain (e) {
        n.selectedChain = e;
    },
    setIsStandalone (e) {
        n.isStandalone = e;
    },
    setIsCustomDesktop (e) {
        n.isCustomDesktop = e;
    },
    setIsCustomMobile (e) {
        n.isCustomMobile = e;
    },
    setIsExplorer (e) {
        n.isExplorer = e;
    },
    getAccount () {
        const e = I.client().getAccount();
        n.address = e.address, n.isConnected = e.isConnected;
    },
    setAddress (e) {
        n.address = e;
    },
    setIsConnected (e) {
        n.isConnected = e;
    },
    setProfileName (e) {
        n.profileName = e;
    },
    setProfileAvatar (e) {
        n.profileAvatar = e;
    },
    setProfileLoading (e) {
        n.profileLoading = e;
    },
    setBalanceLoading (e) {
        n.balanceLoading = e;
    },
    setBalance (e) {
        n.balance = e;
    },
    setIsDataLoaded (e) {
        n.isDataLoaded = e;
    },
    setIsUiLoaded (e) {
        n.isUiLoaded = e;
    },
    resetEnsProfile () {
        n.profileName = void 0, n.profileAvatar = void 0;
    },
    resetBalance () {
        n.balance = void 0;
    },
    resetAccount () {
        n.address = void 0, a.resetEnsProfile(), a.resetBalance();
    }
}, h = (0, _vanilla.proxy)({
    initialized: !1,
    ethereumClient: void 0
}), I = {
    setEthereumClient (e) {
        !h.initialized && e && (h.ethereumClient = e, a.setChains(e.chains), h.initialized = !0);
    },
    client () {
        if (h.ethereumClient) return h.ethereumClient;
        throw new Error("ClientCtrl has no client set");
    }
}, c = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    isMobile () {
        return typeof window < "u" ? Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
    },
    isAndroid () {
        return c.isMobile() && navigator.userAgent.toLowerCase().includes("android");
    },
    isEmptyObject (e) {
        return Object.getPrototypeOf(e) === Object.prototype && Object.getOwnPropertyNames(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
    },
    isHttpUrl (e) {
        return e.startsWith("http://") || e.startsWith("https://");
    },
    formatNativeUrl (e, t, s) {
        if (c.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
        let o = e;
        o.includes("://") || (o = e.replaceAll("/", "").replaceAll(":", ""), o = `${o}://`), this.setWalletConnectDeepLink(o, s);
        const l = encodeURIComponent(t);
        return `${o}wc?uri=${l}`;
    },
    formatUniversalUrl (e, t, s) {
        if (!c.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
        let o = e;
        e.endsWith("/") && (o = e.slice(0, -1)), this.setWalletConnectDeepLink(o, s);
        const l = encodeURIComponent(t);
        return `${o}/wc?uri=${l}`;
    },
    async wait (e) {
        return new Promise((t)=>{
            setTimeout(t, e);
        });
    },
    openHref (e, t = "_self") {
        window.open(e, t, "noreferrer noopener");
    },
    setWalletConnectDeepLink (e, t) {
        localStorage.setItem(c.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
            href: e,
            name: t
        }));
    },
    setWalletConnectAndroidDeepLink (e) {
        const [t] = e.split("?");
        localStorage.setItem(c.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
            href: t,
            name: "Android"
        }));
    },
    removeWalletConnectDeepLink () {
        localStorage.removeItem(c.WALLETCONNECT_DEEPLINK_CHOICE);
    },
    isNull (e) {
        return e === null;
    },
    getWalletConnectVersion () {
        const { isStandalone: e  } = a.state;
        let t = 1;
        return e || (t = I.client().walletConnectVersion), t;
    }
};
function S() {
    return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const g = (0, _vanilla.proxy)({
    projectId: void 0,
    themeMode: S() ? "dark" : "light",
    themeColor: "default",
    themeBackground: c.isMobile() ? "themeColor" : "gradient",
    themeZIndex: 89,
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chainImages: void 0,
    tokenImages: void 0,
    standaloneChains: void 0,
    enableStandaloneMode: !1,
    enableNetworkView: !1,
    defaultChain: void 0,
    explorerAllowList: void 0,
    explorerDenyList: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0
}), E = {
    state: g,
    subscribe (e) {
        return (0, _vanilla.subscribe)(g, ()=>e(g));
    },
    setConfig (e) {
        var t, s, o, l;
        if (a.setStandaloneChains(e.standaloneChains), a.setIsStandalone(Boolean((t = e.standaloneChains) == null ? void 0 : t.length) || Boolean(e.enableStandaloneMode)), a.setIsCustomMobile(Boolean((s = e.mobileWallets) == null ? void 0 : s.length)), a.setIsCustomDesktop(Boolean((o = e.desktopWallets) == null ? void 0 : o.length)), a.setIsExplorer(Boolean((l = e.projectId) == null ? void 0 : l.length)), e.defaultChain) a.setSelectedChain(e.defaultChain);
        else if (!a.state.isStandalone) {
            const u = I.client().getDefaultChain();
            a.setSelectedChain(u);
        }
        Object.assign(g, e);
    },
    setThemeConfig (e) {
        Object.assign(g, e);
    }
}, L = "https://explorer-api.walletconnect.com";
function y(e) {
    const t = Object.fromEntries(Object.entries(e).filter(([s, o])=>typeof o < "u" && o !== null && o !== "").map(([s, o])=>[
            s,
            o.toString()
        ]));
    return new URLSearchParams(t).toString();
}
const w = {
    async fetchWallets (e, t) {
        const s = y(t), o = `${L}/v3/wallets?projectId=${e}&${s}`;
        return (await fetch(o)).json();
    },
    formatImageUrl (e, t) {
        return `${L}/v3/logo/lg/${t}?projectId=${e}`;
    }
}, r = (0, _vanilla.proxy)({
    wallets: {
        listings: [],
        total: 0,
        page: 1
    },
    search: {
        listings: [],
        total: 0,
        page: 1
    },
    previewWallets: [],
    recomendedWallets: []
});
function b() {
    const { projectId: e  } = E.state;
    if (!e) throw new Error("projectId is required to work with explorer api");
    return e;
}
const A = {
    state: r,
    async getPreviewWallets (e) {
        const { listings: t  } = await w.fetchWallets(b(), e);
        return r.previewWallets = Object.values(t), r.previewWallets;
    },
    async getRecomendedWallets () {
        const { listings: e  } = await w.fetchWallets(b(), {
            page: 1,
            entries: 6
        });
        r.recomendedWallets = Object.values(e);
    },
    async getPaginatedWallets (e) {
        const { page: t , search: s  } = e, { listings: o , total: l  } = await w.fetchWallets(b(), e), u = Object.values(o), v = s ? "search" : "wallets";
        return r[v] = {
            listings: [
                ...r[v].listings,
                ...u
            ],
            total: l,
            page: t ?? 1
        }, {
            listings: u,
            total: l
        };
    },
    getImageUrl (e) {
        return w.formatImageUrl(b(), e);
    },
    resetSearch () {
        r.search = {
            listings: [],
            total: 0,
            page: 1
        };
    }
}, i = (0, _vanilla.proxy)({
    history: [
        "ConnectWallet"
    ],
    view: "ConnectWallet",
    data: void 0
}), m = {
    state: i,
    subscribe (e) {
        return (0, _vanilla.subscribe)(i, ()=>e(i));
    },
    push (e, t) {
        e !== i.view && (i.view = e, t && (i.data = t), i.history.push(e));
    },
    replace (e) {
        i.view = e, i.history = [
            e
        ];
    },
    goBack () {
        if (i.history.length > 1) {
            i.history.pop();
            const [e] = i.history.slice(-1);
            i.view = e;
        }
    }
}, C = (0, _vanilla.proxy)({
    open: !1
}), k = {
    state: C,
    subscribe (e) {
        return (0, _vanilla.subscribe)(C, ()=>e(C));
    },
    async open (e) {
        return new Promise((t)=>{
            const { isConnected: s , isStandalone: o , isUiLoaded: l , isDataLoaded: u  } = a.state, { enableNetworkView: v  } = E.state;
            if (o ? (a.setStandaloneUri(e?.uri), a.setStandaloneChains(e?.standaloneChains), m.replace("ConnectWallet")) : e != null && e.route ? m.replace(e.route) : s ? m.replace("Account") : v ? m.replace("SelectNetwork") : m.replace("ConnectWallet"), l && u) C.open = !0, t();
            else {
                const W = setInterval(()=>{
                    a.state.isUiLoaded && a.state.isDataLoaded && (clearInterval(W), C.open = !0, t());
                }, 200);
            }
        });
    },
    close () {
        C.open = !1;
    }
}, d = (0, _vanilla.proxy)({
    open: !1,
    message: "",
    variant: "success"
}), P = {
    state: d,
    subscribe (e) {
        return (0, _vanilla.subscribe)(d, ()=>e(d));
    },
    openToast (e, t) {
        d.open = !0, d.message = e, d.variant = t;
    },
    closeToast () {
        d.open = !1;
    }
};
typeof window < "u" && (window.Buffer || (window.Buffer = (0, _buffer.Buffer)), window.global || (window.global = window), window.process || (window.process = {
    env: {}
}));

},{"valtio/vanilla":"gyoEY","buffer":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyoEY":[function(require,module,exports) {
"use strict";
var proxyCompare = require("f1a9c2f7ce7053e7");
var isObject = function isObject(x) {
    return typeof x === "object" && x !== null;
};
var proxyStateMap = new WeakMap();
var refSet = new WeakSet();
var buildProxyFunction = function buildProxyFunction(objectIs, newProxy, canProxy, defaultHandlePromise, snapCache, createSnapshot, proxyCache, versionHolder, proxyFunction) {
    if (objectIs === void 0) objectIs = Object.is;
    if (newProxy === void 0) newProxy = function newProxy(target, handler) {
        return new Proxy(target, handler);
    };
    if (canProxy === void 0) canProxy = function canProxy(x) {
        return isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer);
    };
    if (defaultHandlePromise === void 0) defaultHandlePromise = function defaultHandlePromise(promise) {
        switch(promise.status){
            case "fulfilled":
                return promise.value;
            case "rejected":
                throw promise.reason;
            default:
                throw promise;
        }
    };
    if (snapCache === void 0) snapCache = new WeakMap();
    if (createSnapshot === void 0) createSnapshot = function createSnapshot(target, version, handlePromise) {
        if (handlePromise === void 0) handlePromise = defaultHandlePromise;
        var cache = snapCache.get(target);
        if ((cache == null ? void 0 : cache[0]) === version) return cache[1];
        var snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
        proxyCompare.markToTrack(snap, true);
        snapCache.set(target, [
            version,
            snap
        ]);
        Reflect.ownKeys(target).forEach(function(key) {
            var value = Reflect.get(target, key);
            if (refSet.has(value)) {
                proxyCompare.markToTrack(value, false);
                snap[key] = value;
            } else if (value instanceof Promise) Object.defineProperty(snap, key, {
                get: function get() {
                    return handlePromise(value);
                }
            });
            else if (proxyStateMap.has(value)) snap[key] = snapshot(value, handlePromise);
            else snap[key] = value;
        });
        return Object.freeze(snap);
    };
    if (proxyCache === void 0) proxyCache = new WeakMap();
    if (versionHolder === void 0) versionHolder = [
        1,
        1
    ];
    if (proxyFunction === void 0) proxyFunction = function proxyFunction(initialObject) {
        if (!isObject(initialObject)) throw new Error("object required");
        var found = proxyCache.get(initialObject);
        if (found) return found;
        var version = versionHolder[0];
        var listeners = new Set();
        var notifyUpdate = function notifyUpdate(op, nextVersion) {
            if (nextVersion === void 0) nextVersion = ++versionHolder[0];
            if (version !== nextVersion) {
                version = nextVersion;
                listeners.forEach(function(listener) {
                    return listener(op, nextVersion);
                });
            }
        };
        var checkVersion = versionHolder[1];
        var ensureVersion = function ensureVersion(nextCheckVersion) {
            if (nextCheckVersion === void 0) nextCheckVersion = ++versionHolder[1];
            if (checkVersion !== nextCheckVersion && !listeners.size) {
                checkVersion = nextCheckVersion;
                propProxyStates.forEach(function(_ref) {
                    var propProxyState = _ref[0];
                    var propVersion = propProxyState[1](nextCheckVersion);
                    if (propVersion > version) version = propVersion;
                });
            }
            return version;
        };
        var createPropListener = function createPropListener(prop) {
            return function(op, nextVersion) {
                var newOp = [].concat(op);
                newOp[1] = [
                    prop
                ].concat(newOp[1]);
                notifyUpdate(newOp, nextVersion);
            };
        };
        var propProxyStates = new Map();
        var addPropListener = function addPropListener(prop, propProxyState) {
            if (propProxyStates.has(prop)) throw new Error("prop listener already exists");
            if (listeners.size) {
                var remove = propProxyState[3](createPropListener(prop));
                propProxyStates.set(prop, [
                    propProxyState,
                    remove
                ]);
            } else propProxyStates.set(prop, [
                propProxyState
            ]);
        };
        var removePropListener = function removePropListener(prop) {
            var entry = propProxyStates.get(prop);
            if (entry) {
                var _entry$;
                propProxyStates.delete(prop);
                (_entry$ = entry[1]) == null || _entry$.call(entry);
            }
        };
        var addListener = function addListener(listener) {
            listeners.add(listener);
            if (listeners.size === 1) propProxyStates.forEach(function(_ref2, prop) {
                var propProxyState = _ref2[0], prevRemove = _ref2[1];
                if (prevRemove) throw new Error("remove already exists");
                var remove = propProxyState[3](createPropListener(prop));
                propProxyStates.set(prop, [
                    propProxyState,
                    remove
                ]);
            });
            var removeListener = function removeListener() {
                listeners.delete(listener);
                if (listeners.size === 0) propProxyStates.forEach(function(_ref3, prop) {
                    var propProxyState = _ref3[0], remove = _ref3[1];
                    if (remove) {
                        remove();
                        propProxyStates.set(prop, [
                            propProxyState
                        ]);
                    }
                });
            };
            return removeListener;
        };
        var baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
        var handler = {
            deleteProperty: function deleteProperty(target, prop) {
                var prevValue = Reflect.get(target, prop);
                removePropListener(prop);
                var deleted = Reflect.deleteProperty(target, prop);
                if (deleted) notifyUpdate([
                    "delete",
                    [
                        prop
                    ],
                    prevValue
                ]);
                return deleted;
            },
            set: function set(target, prop, value, receiver) {
                var _Object$getOwnPropert;
                var hasPrevValue = Reflect.has(target, prop);
                var prevValue = Reflect.get(target, prop, receiver);
                if (hasPrevValue && objectIs(prevValue, value)) return true;
                removePropListener(prop);
                if (isObject(value)) value = proxyCompare.getUntracked(value) || value;
                var nextValue = value;
                if ((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(target, prop)) != null && _Object$getOwnPropert.set) ;
                else if (value instanceof Promise) value.then(function(v) {
                    value.status = "fulfilled";
                    value.value = v;
                    notifyUpdate([
                        "resolve",
                        [
                            prop
                        ],
                        v
                    ]);
                }).catch(function(e) {
                    value.status = "rejected";
                    value.reason = e;
                    notifyUpdate([
                        "reject",
                        [
                            prop
                        ],
                        e
                    ]);
                });
                else {
                    if (!proxyStateMap.has(value) && canProxy(value)) nextValue = proxy(value);
                    var childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
                    if (childProxyState) addPropListener(prop, childProxyState);
                }
                Reflect.set(target, prop, nextValue, receiver);
                notifyUpdate([
                    "set",
                    [
                        prop
                    ],
                    value,
                    prevValue
                ]);
                return true;
            }
        };
        var proxyObject = newProxy(baseObject, handler);
        proxyCache.set(initialObject, proxyObject);
        var proxyState = [
            baseObject,
            ensureVersion,
            createSnapshot,
            addListener
        ];
        proxyStateMap.set(proxyObject, proxyState);
        Reflect.ownKeys(initialObject).forEach(function(key) {
            var desc = Object.getOwnPropertyDescriptor(initialObject, key);
            if (desc.get || desc.set) Object.defineProperty(baseObject, key, desc);
            else proxyObject[key] = initialObject[key];
        });
        return proxyObject;
    };
    return [
        proxyFunction,
        proxyStateMap,
        refSet,
        objectIs,
        newProxy,
        canProxy,
        defaultHandlePromise,
        snapCache,
        createSnapshot,
        proxyCache,
        versionHolder
    ];
};
var _buildProxyFunction = buildProxyFunction(), proxyFunction = _buildProxyFunction[0];
function proxy(initialObject) {
    if (initialObject === void 0) initialObject = {};
    return proxyFunction(initialObject);
}
function getVersion(proxyObject) {
    var proxyState = proxyStateMap.get(proxyObject);
    return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
    var proxyState = proxyStateMap.get(proxyObject);
    if (!proxyState) console.warn("Please use proxy object");
    var promise;
    var ops = [];
    var addListener = proxyState[3];
    var isListenerActive = false;
    var listener = function listener(op) {
        ops.push(op);
        if (notifyInSync) {
            callback(ops.splice(0));
            return;
        }
        if (!promise) promise = Promise.resolve().then(function() {
            promise = undefined;
            if (isListenerActive) callback(ops.splice(0));
        });
    };
    var removeListener = addListener(listener);
    isListenerActive = true;
    return function() {
        isListenerActive = false;
        removeListener();
    };
}
function snapshot(proxyObject, handlePromise) {
    var proxyState = proxyStateMap.get(proxyObject);
    if (!proxyState) console.warn("Please use proxy object");
    var _ref4 = proxyState, target = _ref4[0], ensureVersion = _ref4[1], createSnapshot = _ref4[2];
    return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
    refSet.add(obj);
    return obj;
}
var unstable_buildProxyFunction = buildProxyFunction;
exports.getVersion = getVersion;
exports.proxy = proxy;
exports.ref = ref;
exports.snapshot = snapshot;
exports.subscribe = subscribe;
exports.unstable_buildProxyFunction = unstable_buildProxyFunction;

},{"f1a9c2f7ce7053e7":"d0ziJ"}],"d0ziJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "affectedToPathList", ()=>w);
parcelHelpers.export(exports, "createProxy", ()=>u);
parcelHelpers.export(exports, "getUntracked", ()=>g);
parcelHelpers.export(exports, "isChanged", ()=>p);
parcelHelpers.export(exports, "markToTrack", ()=>h);
parcelHelpers.export(exports, "replaceNewProxy", ()=>O);
parcelHelpers.export(exports, "trackMemo", ()=>y);
const e = Symbol(), t = Symbol(), r = "a", n = "w";
let o = (e, t)=>new Proxy(e, t);
const s = Object.getPrototypeOf, c = new WeakMap, l = (e)=>e && (c.has(e) ? c.get(e) : s(e) === Object.prototype || s(e) === Array.prototype), f = (e)=>"object" == typeof e && null !== e, i = new WeakMap, a = (e)=>e[t] || e, u = (c, f, p)=>{
    if (!l(c)) return c;
    const y = a(c), g = ((e)=>Object.isFrozen(e) || Object.values(Object.getOwnPropertyDescriptors(e)).some((e)=>!e.writable))(y);
    let h = p && p.get(y);
    return h && h[1].f === g || (h = ((o, s)=>{
        const c = {
            f: s
        };
        let l = !1;
        const f = (e, t)=>{
            if (!l) {
                let s = c[r].get(o);
                if (s || (s = {}, c[r].set(o, s)), e === n) s[n] = !0;
                else {
                    let r = s[e];
                    r || (r = new Set, s[e] = r), r.add(t);
                }
            }
        }, i = {
            get: (e, n)=>n === t ? o : (f("k", n), u(Reflect.get(e, n), c[r], c.c)),
            has: (t, n)=>n === e ? (l = !0, c[r].delete(o), !0) : (f("h", n), Reflect.has(t, n)),
            getOwnPropertyDescriptor: (e, t)=>(f("o", t), Reflect.getOwnPropertyDescriptor(e, t)),
            ownKeys: (e)=>(f(n), Reflect.ownKeys(e))
        };
        return s && (i.set = i.deleteProperty = ()=>!1), [
            i,
            c
        ];
    })(y, g), h[1].p = o(g ? ((e)=>{
        let t = i.get(e);
        if (!t) {
            if (Array.isArray(e)) t = Array.from(e);
            else {
                const r = Object.getOwnPropertyDescriptors(e);
                Object.values(r).forEach((e)=>{
                    e.configurable = !0;
                }), t = Object.create(s(e), r);
            }
            i.set(e, t);
        }
        return t;
    })(y) : y, h[0]), p && p.set(y, h)), h[1][r] = f, h[1].c = p, h[1].p;
}, p = (e, t, r, o)=>{
    if (Object.is(e, t)) return !1;
    if (!f(e) || !f(t)) return !0;
    const s = r.get(a(e));
    if (!s) return !0;
    if (o) {
        const r = o.get(e);
        if (r && r.n === t) return r.g;
        o.set(e, {
            n: t,
            g: !1
        });
    }
    let c = null;
    try {
        for (const r of s.h || [])if (c = Reflect.has(e, r) !== Reflect.has(t, r), c) return c;
        if (!0 === s[n]) {
            if (c = ((e, t)=>{
                const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
                return r.length !== n.length || r.some((e, t)=>e !== n[t]);
            })(e, t), c) return c;
        } else for (const r of s.o || [])if (c = !!Reflect.getOwnPropertyDescriptor(e, r) != !!Reflect.getOwnPropertyDescriptor(t, r), c) return c;
        for (const n of s.k || [])if (c = p(e[n], t[n], r, o), c) return c;
        return null === c && (c = !0), c;
    } finally{
        o && o.set(e, {
            n: t,
            g: c
        });
    }
}, y = (t)=>!!l(t) && e in t, g = (e)=>l(e) && e[t] || null, h = (e, t = !0)=>{
    c.set(e, t);
}, w = (e, t, r)=>{
    const o = [], s = new WeakSet, c = (e, l)=>{
        if (s.has(e)) return;
        f(e) && s.add(e);
        const i = f(e) && t.get(a(e));
        if (i) {
            var u, p;
            if (null == (u = i.h) || u.forEach((e)=>{
                const t = `:has(${String(e)})`;
                o.push(l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            }), !0 === i[n]) {
                const e = ":ownKeys";
                o.push(l ? [
                    ...l,
                    e
                ] : [
                    e
                ]);
            } else {
                var y;
                null == (y = i.o) || y.forEach((e)=>{
                    const t = `:hasOwn(${String(e)})`;
                    o.push(l ? [
                        ...l,
                        t
                    ] : [
                        t
                    ]);
                });
            }
            null == (p = i.k) || p.forEach((t)=>{
                r && !("value" in (Object.getOwnPropertyDescriptor(e, t) || {})) || c(e[t], l ? [
                    ...l,
                    t
                ] : [
                    t
                ]);
            });
        } else l && o.push(l);
    };
    return c(e), o;
}, O = (e)=>{
    o = e;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVRFP":[function(require,module,exports) {
module.exports = require("a442393e8c4ff0e1")(require("c6ff7d0f5d0999e5").getBundleURL("dVqW6") + "dist.6909d6fe.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("jCFDj"));

},{"a442393e8c4ff0e1":"61B45","c6ff7d0f5d0999e5":"lgJ39"}]},["iatvl"], null, "parcelRequire3914")

//# sourceMappingURL=dist.7a563970.js.map
