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
})({"cqPt9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "337880306909d6fe";
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

},{}],"jCFDj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "W3mAccountButton", ()=>We);
parcelHelpers.export(exports, "W3mConnectButton", ()=>oe);
parcelHelpers.export(exports, "W3mCoreButton", ()=>ne);
parcelHelpers.export(exports, "W3mModal", ()=>re);
parcelHelpers.export(exports, "W3mNetworkSwitch", ()=>ie);
var _lit = require("lit");
var _decoratorsJs = require("lit/decorators.js");
var _core = require("@web3modal/core");
var _classMapJs = require("lit/directives/class-map.js");
var _litHtml = require("lit-html");
var _motion = require("motion");
var _ifDefinedJs = require("lit/directives/if-defined.js");
var _qrcode = require("qrcode");
var _qrcodeDefault = parcelHelpers.interopDefault(_qrcode);
var Mt = Object.defineProperty, ct = Object.getOwnPropertySymbols, Wt = Object.prototype.hasOwnProperty, jt = Object.prototype.propertyIsEnumerable, dt = (e, t, o)=>t in e ? Mt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[t] = o, ht = (e, t)=>{
    for(var o in t || (t = {}))Wt.call(t, o) && dt(e, o, t[o]);
    if (ct) for (var o of ct(t))jt.call(t, o) && dt(e, o, t[o]);
    return e;
};
function mt() {
    return {
        default: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(51,150,255)",
                background: "rgb(232,242,252)"
            },
            dark: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(71,161,255)",
                background: "rgb(21,38,55)"
            }
        },
        magenta: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(198,83,128)",
                background: "rgb(244,221,230)"
            },
            dark: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(203,77,140)",
                background: "rgb(57,35,43)"
            }
        },
        blue: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(61,92,245)",
                background: "rgb(232,235,252)"
            },
            dark: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(81,109,251)",
                background: "rgb(28,33,59)"
            }
        },
        orange: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(234,140,46)",
                background: "rgb(244,236,221)"
            },
            dark: {
                inverse: "rgb(0,0,0)",
                foreground: "rgb(255,166,76)",
                background: "rgb(57,50,34)"
            }
        },
        green: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(38,181,98)",
                background: "rgb(218,246,218)"
            },
            dark: {
                inverse: "rgb(0,0,0)",
                foreground: "rgb(38,217,98)",
                background: "rgb(35,52,40)"
            }
        },
        purple: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(121,76,255)",
                background: "rgb(225,218,246)"
            },
            dark: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(144,110,247)",
                background: "rgb(36,31,51)"
            }
        },
        teal: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(43,182,182)",
                background: "rgb(217,242,238)"
            },
            dark: {
                inverse: "rgb(0,0,0)",
                foreground: "rgb(54,226,226)",
                background: "rgb(29,48,52)"
            }
        },
        blackWhite: {
            light: {
                inverse: "rgb(255,255,255)",
                foreground: "rgb(20,20,20)",
                background: "rgb(255,255,255)"
            },
            dark: {
                inverse: "rgb(0,0,0)",
                foreground: "rgb(255,255,255)",
                background: "rgb(20,20,20)"
            }
        }
    };
}
function Lt() {
    return {
        light: {
            foreground: {
                1: "rgb(20,20,20)",
                2: "rgb(121,134,134)",
                3: "rgb(158,169,169)"
            },
            background: {
                1: "rgb(255,255,255)",
                2: "rgb(241,243,243)",
                3: "rgb(228,231,231)"
            },
            overlay: "rgba(0,0,0,0.1)"
        },
        dark: {
            foreground: {
                1: "rgb(228,231,231)",
                2: "rgb(148,158,158)",
                3: "rgb(110,119,119)"
            },
            background: {
                1: "rgb(20,20,20)",
                2: "rgb(39,42,42)",
                3: "rgb(59,64,64)"
            },
            overlay: "rgba(255,255,255,0.1"
        }
    };
}
function At() {
    return {
        default: {
            1: "#B6B9C9",
            2: "#C653C6",
            3: "#794DFF",
            4: "#2EB8B8"
        },
        blue: {
            1: "#E8EBFD",
            2: "#C653C6",
            3: "#2DD2C5",
            4: "#3D5CF5"
        },
        magenta: {
            1: "#F4DDE6",
            2: "#E0D452",
            3: "#F09475",
            4: "#D1618D"
        },
        orange: {
            1: "#F4ECDD",
            2: "#B4EB47",
            3: "#3075E8",
            4: "#EB9947"
        },
        green: {
            1: "#DAF6DA",
            2: "#E06B92",
            3: "#99E54D",
            4: "#26B562"
        },
        purple: {
            1: "#E1DAF6",
            2: "#EB9947",
            3: "#E06B92",
            4: "#794DFF"
        },
        teal: {
            1: "#D9F2EE",
            2: "#F09475",
            3: "#794DFF",
            4: "#2EB8B8"
        },
        blackWhite: {
            1: "#E3E8E8",
            2: "#98AEAE",
            3: "#516767",
            4: "#242E2E"
        }
    };
}
const u = {
    color () {
        var e, t;
        const o = (e = (0, _core.ConfigCtrl).state.themeColor) != null ? e : "default", n = (t = (0, _core.ConfigCtrl).state.themeMode) != null ? t : "dark", a = mt()[o][n], r = Lt()[n], i = At()[o];
        return {
            foreground: ht({
                accent: a.foreground,
                inverse: a.inverse
            }, r.foreground),
            background: ht({
                accent: a.background
            }, r.background),
            gradient: i,
            overlay: r.overlay,
            error: "rgb(242, 90, 103)"
        };
    },
    setTheme () {
        const e = document.querySelector(":root"), { themeZIndex: t  } = (0, _core.ConfigCtrl).state;
        if (e) {
            const o = {
                "--color-fg-accent": u.color().foreground.accent,
                "--color-fg-inverse": u.color().foreground.inverse,
                "--color-fg-1": u.color().foreground[1],
                "--color-fg-2": u.color().foreground[2],
                "--color-fg-3": u.color().foreground[3],
                "--color-bg-1": u.color().background[1],
                "--color-bg-2": u.color().background[2],
                "--color-bg-3": u.color().background[3],
                "--color-overlay": u.color().overlay,
                "--color-err": u.color().error,
                "--color-success": mt().green.light.foreground,
                "--gradient-1": u.color().gradient[1],
                "--gradient-2": u.color().gradient[2],
                "--gradient-3": u.color().gradient[3],
                "--gradient-4": u.color().gradient[4],
                "--modal-z-index": `${t}`
            };
            Object.entries(o).forEach(([n, a])=>e.style.setProperty(n, a));
        }
    },
    globalCss: (0, _lit.css)`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent}button::after{content:'';position:absolute;inset:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--color-fg-inverse);background:var(--color-fg-accent)}`
}, Pt = (0, _lit.css)`button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--color-overlay)}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--color-overlay);background-color:var(--color-fg-accent);border-radius:50%;margin-bottom:4px}button path{fill:var(--color-fg-inverse)}`;
var St = Object.defineProperty, _t = Object.getOwnPropertyDescriptor, ke = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? _t(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && St(t, o, a), a;
};
let te = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.icon = void 0, this.label = "", this.onClick = ()=>null;
    }
    render() {
        return (0, _lit.html)`<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-normal" color="accent">${this.label}</w3m-text></button>`;
    }
};
te.styles = [
    u.globalCss,
    Pt
], ke([
    (0, _decoratorsJs.property)()
], te.prototype, "icon", 2), ke([
    (0, _decoratorsJs.property)()
], te.prototype, "label", 2), ke([
    (0, _decoratorsJs.property)()
], te.prototype, "onClick", 2), te = ke([
    (0, _decoratorsJs.customElement)("w3m-box-button")
], te);
const Dt = (0, _lit.css)`button{border-radius:28px;height:28px;padding:0 10px;background-color:var(--color-fg-accent)}button path{fill:var(--color-fg-inverse)}button::after{border-radius:inherit;border:1px solid var(--color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:hover::after{background-color:var(--color-overlay)}button:disabled{background-color:var(--color-bg-3)}`;
var Tt = Object.defineProperty, Nt = Object.getOwnPropertyDescriptor, le = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Nt(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Tt(t, o, a), a;
};
let G = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = ()=>null;
    }
    render() {
        const e = {
            "w3m-icon-left": this.iconLeft !== void 0,
            "w3m-icon-right": this.iconRight !== void 0
        };
        return (0, _lit.html)`<button class="${(0, _classMapJs.classMap)(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<w3m-text variant="small-normal" color="inverse"><slot></slot></w3m-text>${this.iconRight}</button>`;
    }
};
G.styles = [
    u.globalCss,
    Dt
], le([
    (0, _decoratorsJs.property)()
], G.prototype, "disabled", 2), le([
    (0, _decoratorsJs.property)()
], G.prototype, "iconLeft", 2), le([
    (0, _decoratorsJs.property)()
], G.prototype, "iconRight", 2), le([
    (0, _decoratorsJs.property)()
], G.prototype, "onClick", 2), G = le([
    (0, _decoratorsJs.customElement)("w3m-button")
], G);
const Rt = (0, _lit.css)`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:10px;color:var(--color-fg-inverse);background-color:var(--color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--color-overlay)}button:hover::after{background-color:var(--color-overlay)}button:disabled{padding-bottom:0;background-color:var(--color-bg-3);color:var(--color-fg-3)}.w3m-secondary{color:var(--color-fg-accent);background-color:transparent}.w3m-secondary::after{display:none}`;
var Bt = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, Ne = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Ut(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Bt(t, o, a), a;
};
let se = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.disabled = !1, this.variant = "primary";
    }
    render() {
        const e = {
            "w3m-secondary": this.variant === "secondary"
        };
        return (0, _lit.html)`<button ?disabled="${this.disabled}" class="${(0, _classMapJs.classMap)(e)}"><slot></slot></button>`;
    }
};
se.styles = [
    u.globalCss,
    Rt
], Ne([
    (0, _decoratorsJs.property)()
], se.prototype, "disabled", 2), Ne([
    (0, _decoratorsJs.property)()
], se.prototype, "variant", 2), se = Ne([
    (0, _decoratorsJs.customElement)("w3m-button-big")
], se);
class Ht {
    constructor(...t){
        this.angle = 0, this.t = 1253106, this.last = 0, this.height = 500, this.amp = 300, this.seed = 15, this.freqX = 14e-5, this.freqY = 29e-5, this.freqDelta = 1e-5, this.activeColors = [
            1,
            1,
            1,
            1
        ], this.isMetaKey = !1, this.playing = !1, pt(this, "resize", ()=>{
            this.width = window.innerWidth, this.minigl.setSize(this.width, this.height), this.minigl.setOrthographicCamera(), this.xSegCount = Math.ceil(this.width * this.conf.density[0]), this.ySegCount = Math.ceil(this.height * this.conf.density[1]), this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount), this.mesh.geometry.setSize(this.width, this.height), this.mesh.material.uniforms.u_shadow_power.value = this.width < 550 ? 5 : 6;
        }), pt(this, "animate", (o)=>{
            if (this.playing) {
                if (this.shouldSkipFrame(o) || (this.t += Math.min(o - this.last, 1e3 / 15), this.last = o, this.mesh.material.uniforms.u_time.value = this.t, this.minigl.render()), this.last !== 0 && this.isStatic) return this.minigl.render();
                requestAnimationFrame(this.animate);
            }
        });
    }
    play(t) {
        this.el = t, this.connect();
    }
    stop() {
        this.playing = !1;
    }
    async connect() {
        this.shaderFiles = {
            vertex: "varying vec3 v_color;void main(){float time=u_time*u_global.noiseSpeed;vec2 noiseCoord=resolution*uvNorm*u_global.noiseFreq;vec2 st=1.-uvNorm.xy;float tilt=resolution.y/2.0*uvNorm.y;float incline=resolution.x*uvNorm.x/2.0*u_vertDeform.incline;float offset=resolution.x/2.0*u_vertDeform.incline*mix(u_vertDeform.offsetBottom,u_vertDeform.offsetTop,uv.y);float noise=snoise(vec3(noiseCoord.x*u_vertDeform.noiseFreq.x+time*u_vertDeform.noiseFlow,noiseCoord.y*u_vertDeform.noiseFreq.y,time*u_vertDeform.noiseSpeed+u_vertDeform.noiseSeed))*u_vertDeform.noiseAmp;noise*=1.0-pow(abs(uvNorm.y),2.0);noise=max(0.0,noise);vec3 pos=vec3(position.x,position.y+tilt+incline+noise-offset,position.z);if(u_active_colors[0]==1.){v_color=u_baseColor;}for(int i=0;i<u_waveLayers_length;i++){if(u_active_colors[i+1]==1.){WaveLayers layer=u_waveLayers[i];float noise=smoothstep(layer.noiseFloor,layer.noiseCeil,snoise(vec3(noiseCoord.x*layer.noiseFreq.x+time*layer.noiseFlow,noiseCoord.y*layer.noiseFreq.y,time*layer.noiseSpeed+layer.noiseSeed))/2.0+0.5);v_color=blendNormal(v_color,layer.color,pow(noise,4.));}}gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}",
            noise: `
// MIT License: Copyright (C) 2011 Ashima Arts. All rights reserved. https://github.com/ashima/webgl-noise, https://github.com/stegu/webgl-noise
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`,
            blend: `
// MIT Licence: Copyright (C) 2015 Jamie Owen. All rights reserved. https://github.com/jamieowen/glsl-blend
vec3 blendNormal(vec3 base, vec3 blend){return blend;}vec3 blendNormal(vec3 base,vec3 blend,float opacity){return (blendNormal(base,blend)*opacity+base*(1.0-opacity));}float blendScreen(float base,float blend){return 1.0-((1.0-base)*(1.0-blend));}vec3 blendScreen(vec3 base,vec3 blend){return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));}vec3 blendScreen(vec3 base,vec3 blend,float opacity){return (blendScreen(base, blend)*opacity+base*(1.0-opacity));}vec3 blendMultiply(vec3 base,vec3 blend){return base*blend;}vec3 blendMultiply(vec3 base,vec3 blend,float opacity){return (blendMultiply(base,blend)*opacity+base*(1.0-opacity));}float blendOverlay(float base,float blend){return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));}vec3 blendOverlay(vec3 base,vec3 blend){return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));}vec3 blendOverlay(vec3 base,vec3 blend,float opacity){return (blendOverlay(base,blend)*opacity+base*(1.0-opacity));}vec3 blendHardLight(vec3 base,vec3 blend){return blendOverlay(blend,base);}vec3 blendHardLight(vec3 base,vec3 blend,float opacity){return (blendHardLight(base,blend)*opacity+base*(1.0-opacity));}float blendSoftLight(float base,float blend){return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));}vec3 blendSoftLight(vec3 base,vec3 blend){return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));}vec3 blendSoftLight(vec3 base,vec3 blend,float opacity){return (blendSoftLight(base,blend)*opacity+base*(1.0-opacity));}float blendColorDodge(float base,float blend){return (blend==1.0)?blend:min(base/(1.0-blend),1.0);}vec3 blendColorDodge(vec3 base,vec3 blend){return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));}vec3 blendColorDodge(vec3 base,vec3 blend,float opacity){return (blendColorDodge(base, blend)*opacity+base*(1.0-opacity));}float blendColorBurn(float base,float blend){return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);}vec3 blendColorBurn(vec3 base,vec3 blend){return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));}vec3 blendColorBurn(vec3 base,vec3 blend,float opacity){return (blendColorBurn(base, blend)*opacity+base*(1.0-opacity));}float blendVividLight(float base,float blend){return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));}vec3 blendVividLight(vec3 base,vec3 blend){return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));}vec3 blendVividLight(vec3 base,vec3 blend,float opacity){return (blendVividLight(base,blend)*opacity+base*(1.0-opacity));}float blendLighten(float base,float blend){return max(blend,base);}vec3 blendLighten(vec3 base,vec3 blend){return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));}vec3 blendLighten(vec3 base,vec3 blend,float opacity){return (blendLighten(base,blend)*opacity+base*(1.0-opacity));}float blendLinearBurn(float base,float blend){return max(base+blend-1.0,0.0);}vec3 blendLinearBurn(vec3 base,vec3 blend){return max(base+blend-vec3(1.0),vec3(0.0));}vec3 blendLinearBurn(vec3 base,vec3 blend,float opacity){return (blendLinearBurn(base, blend)*opacity+base*(1.0-opacity));}float blendLinearDodge(float base,float blend){return min(base+blend,1.0);}vec3 blendLinearDodge(vec3 base,vec3 blend){return min(base+blend,vec3(1.0));}vec3 blendLinearDodge(vec3 base,vec3 blend,float opacity){return (blendLinearDodge(base,blend)*opacity+base*(1.0-opacity));}float blendLinearLight(float base,float blend){return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));}vec3 blendLinearLight(vec3 base,vec3 blend){return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));}vec3 blendLinearLight(vec3 base,vec3 blend,float opacity){return (blendLinearLight(base,blend)*opacity+base*(1.0-opacity));}`,
            fragment: "varying vec3 v_color;void main(){vec3 color=v_color;if(u_darken_top==1.0){vec2 st=gl_FragCoord.xy/resolution.xy;color.g-=pow(st.y+sin(-12.0)*st.x,u_shadow_power)*0.4;}gl_FragColor=vec4(color,1.0);}"
        }, this.conf = {
            density: [
                .06,
                .16
            ]
        }, this.minigl = new Ft(this.el, null, null, !0), requestAnimationFrame(()=>{
            this.el && (this.computedCanvasStyle = getComputedStyle(this.el), this.waitForCssVars());
        });
    }
    initMaterial() {
        this.uniforms = {
            u_time: new this.minigl.Uniform({
                value: 0
            }),
            u_shadow_power: new this.minigl.Uniform({
                value: 5
            }),
            u_darken_top: new this.minigl.Uniform({
                value: this.el.dataset.jsDarkenTop === "" ? 1 : 0
            }),
            u_active_colors: new this.minigl.Uniform({
                value: this.activeColors,
                type: "vec4"
            }),
            u_global: new this.minigl.Uniform({
                value: {
                    noiseFreq: new this.minigl.Uniform({
                        value: [
                            this.freqX,
                            this.freqY
                        ],
                        type: "vec2"
                    }),
                    noiseSpeed: new this.minigl.Uniform({
                        value: 5e-6
                    })
                },
                type: "struct"
            }),
            u_vertDeform: new this.minigl.Uniform({
                value: {
                    incline: new this.minigl.Uniform({
                        value: Math.sin(this.angle) / Math.cos(this.angle)
                    }),
                    offsetTop: new this.minigl.Uniform({
                        value: -0.5
                    }),
                    offsetBottom: new this.minigl.Uniform({
                        value: -0.5
                    }),
                    noiseFreq: new this.minigl.Uniform({
                        value: [
                            3,
                            4
                        ],
                        type: "vec2"
                    }),
                    noiseAmp: new this.minigl.Uniform({
                        value: this.amp
                    }),
                    noiseSpeed: new this.minigl.Uniform({
                        value: 10
                    }),
                    noiseFlow: new this.minigl.Uniform({
                        value: 3
                    }),
                    noiseSeed: new this.minigl.Uniform({
                        value: this.seed
                    })
                },
                type: "struct",
                excludeFrom: "fragment"
            }),
            u_baseColor: new this.minigl.Uniform({
                value: this.sectionColors[0],
                type: "vec3",
                excludeFrom: "fragment"
            }),
            u_waveLayers: new this.minigl.Uniform({
                value: [],
                excludeFrom: "fragment",
                type: "array"
            })
        };
        for(let t = 1; t < this.sectionColors.length; t += 1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({
            value: {
                color: new this.minigl.Uniform({
                    value: this.sectionColors[t],
                    type: "vec3"
                }),
                noiseFreq: new this.minigl.Uniform({
                    value: [
                        2 + t / this.sectionColors.length,
                        3 + t / this.sectionColors.length
                    ],
                    type: "vec2"
                }),
                noiseSpeed: new this.minigl.Uniform({
                    value: 11 + .3 * t
                }),
                noiseFlow: new this.minigl.Uniform({
                    value: 6.5 + .3 * t
                }),
                noiseSeed: new this.minigl.Uniform({
                    value: this.seed + 10 * t
                }),
                noiseFloor: new this.minigl.Uniform({
                    value: .1
                }),
                noiseCeil: new this.minigl.Uniform({
                    value: .63 + .07 * t
                })
            },
            type: "struct"
        }));
        return this.vertexShader = [
            this.shaderFiles.noise,
            this.shaderFiles.blend,
            this.shaderFiles.vertex
        ].join(""), new this.minigl.Material(this.vertexShader, this.shaderFiles.fragment, this.uniforms);
    }
    initMesh() {
        this.material = this.initMaterial(), this.geometry = new this.minigl.PlaneGeometry, this.mesh = new this.minigl.Mesh(this.geometry, this.material);
    }
    shouldSkipFrame(t) {
        return !!window.document.hidden || parseInt(t, 10) % 2 == 0 || void 0;
    }
    updateFrequency(t) {
        this.freqX += t, this.freqY += t;
    }
    toggleColor(t) {
        this.activeColors[t] = this.activeColors[t] === 0 ? 1 : 0;
    }
    init() {
        this.playing = !0, this.initGradientColors(), this.initMesh(), this.resize(), requestAnimationFrame(this.animate);
    }
    waitForCssVars() {
        this.computedCanvasStyle && this.computedCanvasStyle.getPropertyValue("--gradient-1").indexOf("#") !== -1 ? this.init() : this.init();
    }
    initGradientColors() {
        this.sectionColors = [
            "--gradient-1",
            "--gradient-2",
            "--gradient-3",
            "--gradient-4"
        ].map((t)=>{
            let o = this.computedCanvasStyle.getPropertyValue(t).trim();
            return o.length === 4 && (o = `#${o.substr(1).split("").map((n)=>n + n).join("")}`), o && `0x${o.substr(1)}`;
        }).filter(Boolean).map(Zt);
    }
}
function Zt(e) {
    return [
        (e >> 16 & 255) / 255,
        (e >> 8 & 255) / 255,
        (255 & e) / 255
    ];
}
function pt(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}
let Ft = class {
    constructor(t, o, n){
        const a = this;
        a.canvas = t, a.gl = a.canvas.getContext("webgl", {
            antialias: !0
        }), a.meshes = [];
        const r = a.gl;
        o && n && this.setSize(o, n), Object.defineProperties(a, {
            Material: {
                enumerable: !1,
                value: class {
                    constructor(c, h, s = {}){
                        const d = this;
                        function g(R, E) {
                            const x = r.createShader(R);
                            return r.shaderSource(x, E), r.compileShader(x), r.getShaderParameter(x, r.COMPILE_STATUS) || console.error(r.getShaderInfoLog(x)), x;
                        }
                        function C(R, E) {
                            return Object.entries(R).map(([x, W])=>W.getDeclaration(x, E)).join("");
                        }
                        d.uniforms = s, d.uniformInstances = [];
                        const A = "precision highp float;";
                        d.vertexSource = `${A} attribute vec4 position;attribute vec2 uv;attribute vec2 uvNorm;${C(a.commonUniforms, "vertex")} ${C(s, "vertex")} ${c}`, d.Source = `${A} ${C(a.commonUniforms, "fragment")} ${C(s, "fragment")} ${h} `, d.vertexShader = g(r.VERTEX_SHADER, d.vertexSource), d.fragmentShader = g(r.FRAGMENT_SHADER, d.Source), d.program = r.createProgram(), r.attachShader(d.program, d.vertexShader), r.attachShader(d.program, d.fragmentShader), r.linkProgram(d.program), r.getProgramParameter(d.program, r.LINK_STATUS) || console.error(r.getProgramInfoLog(d.program)), r.useProgram(d.program), d.attachUniforms(void 0, a.commonUniforms), d.attachUniforms(void 0, d.uniforms);
                    }
                    attachUniforms(c, h) {
                        const s = this;
                        c === void 0 ? Object.entries(h).forEach(([d, g])=>{
                            s.attachUniforms(d, g);
                        }) : h.type == "array" ? h.value.forEach((d, g)=>s.attachUniforms(`${c}[${g}]`, d)) : h.type == "struct" ? Object.entries(h.value).forEach(([d, g])=>s.attachUniforms(`${c}.${d}`, g)) : s.uniformInstances.push({
                            uniform: h,
                            location: r.getUniformLocation(s.program, c)
                        });
                    }
                }
            },
            Uniform: {
                enumerable: !1,
                value: class {
                    constructor(c){
                        this.type = "float", Object.assign(this, c), this.typeFn = ({
                            float: "1f",
                            int: "1i",
                            vec2: "2fv",
                            vec3: "3fv",
                            vec4: "4fv",
                            mat4: "Matrix4fv"
                        })[this.type] || "1f", this.update();
                    }
                    update(c) {
                        this.value !== void 0 && r[`uniform${this.typeFn}`](c, this.typeFn.indexOf("Matrix") === 0 ? this.transpose : this.value, this.typeFn.indexOf("Matrix") === 0 ? this.value : null);
                    }
                    getDeclaration(c, h, s) {
                        const d = this;
                        if (d.excludeFrom !== h) {
                            if (d.type === "array") return d.value[0].getDeclaration(c, h, d.value.length) + `const int ${c}_length=${d.value.length};`;
                            if (d.type === "struct") {
                                let g = c.replace("u_", "");
                                return g = g.charAt(0).toUpperCase() + g.slice(1), `uniform struct ${g} {` + Object.entries(d.value).map(([C, A])=>A.getDeclaration(C, h).replace(/^uniform/, "")).join("") + `} ${c}${s > 0 ? `[${s}]` : ""};`;
                            }
                            return `uniform ${d.type} ${c}${s > 0 ? `[${s}]` : ""};`;
                        }
                    }
                }
            },
            PlaneGeometry: {
                enumerable: !1,
                value: class {
                    constructor(c, h, s, d, g){
                        r.createBuffer(), this.attributes = {
                            position: new a.Attribute({
                                target: r.ARRAY_BUFFER,
                                size: 3
                            }),
                            uv: new a.Attribute({
                                target: r.ARRAY_BUFFER,
                                size: 2
                            }),
                            uvNorm: new a.Attribute({
                                target: r.ARRAY_BUFFER,
                                size: 2
                            }),
                            index: new a.Attribute({
                                target: r.ELEMENT_ARRAY_BUFFER,
                                size: 3,
                                type: r.UNSIGNED_SHORT
                            })
                        }, this.setTopology(s, d), this.setSize(c, h, g);
                    }
                    setTopology(c = 1, h = 1) {
                        const s = this;
                        s.xSegCount = c, s.ySegCount = h, s.vertexCount = (s.xSegCount + 1) * (s.ySegCount + 1), s.quadCount = s.xSegCount * s.ySegCount * 2, s.attributes.uv.values = new Float32Array(2 * s.vertexCount), s.attributes.uvNorm.values = new Float32Array(2 * s.vertexCount), s.attributes.index.values = new Uint16Array(3 * s.quadCount);
                        for(let d = 0; d <= s.ySegCount; d++)for(let g = 0; g <= s.xSegCount; g++){
                            const C = d * (s.xSegCount + 1) + g;
                            if (s.attributes.uv.values[2 * C] = g / s.xSegCount, s.attributes.uv.values[2 * C + 1] = 1 - d / s.ySegCount, s.attributes.uvNorm.values[2 * C] = g / s.xSegCount * 2 - 1, s.attributes.uvNorm.values[2 * C + 1] = 1 - d / s.ySegCount * 2, g < s.xSegCount && d < s.ySegCount) {
                                const A = d * s.xSegCount + g;
                                s.attributes.index.values[6 * A] = C, s.attributes.index.values[6 * A + 1] = C + 1 + s.xSegCount, s.attributes.index.values[6 * A + 2] = C + 1, s.attributes.index.values[6 * A + 3] = C + 1, s.attributes.index.values[6 * A + 4] = C + 1 + s.xSegCount, s.attributes.index.values[6 * A + 5] = C + 2 + s.xSegCount;
                            }
                        }
                        s.attributes.uv.update(), s.attributes.uvNorm.update(), s.attributes.index.update();
                    }
                    setSize(c = 1, h = 1, s = "xz") {
                        const d = this;
                        d.width = c, d.height = h, d.orientation = s, d.attributes.position.values && d.attributes.position.values.length === 3 * d.vertexCount || (d.attributes.position.values = new Float32Array(3 * d.vertexCount));
                        const g = c / -2, C = h / -2, A = c / d.xSegCount, R = h / d.ySegCount;
                        for(let E = 0; E <= d.ySegCount; E++){
                            const x = C + E * R;
                            for(let W = 0; W <= d.xSegCount; W++){
                                const M = g + W * A, S = E * (d.xSegCount + 1) + W;
                                d.attributes.position.values[3 * S + "xyz".indexOf(s[0])] = M, d.attributes.position.values[3 * S + "xyz".indexOf(s[1])] = -x;
                            }
                        }
                        d.attributes.position.update();
                    }
                }
            },
            Mesh: {
                enumerable: !1,
                value: class {
                    constructor(c, h){
                        const s = this;
                        s.geometry = c, s.material = h, s.attributeInstances = [], Object.entries(s.geometry.attributes).forEach(([d, g])=>{
                            s.attributeInstances.push({
                                attribute: g,
                                location: g.attach(d, s.material.program)
                            });
                        }), a.meshes.push(s);
                    }
                    draw() {
                        r.useProgram(this.material.program), this.material.uniformInstances.forEach(({ uniform: c , location: h  })=>c.update(h)), this.attributeInstances.forEach(({ attribute: c , location: h  })=>c.use(h)), r.drawElements(r.TRIANGLES, this.geometry.attributes.index.values.length, r.UNSIGNED_SHORT, 0);
                    }
                    remove() {
                        a.meshes = a.meshes.filter((c)=>c != this);
                    }
                }
            },
            Attribute: {
                enumerable: !1,
                value: class {
                    constructor(c){
                        this.type = r.FLOAT, this.normalized = !1, this.buffer = r.createBuffer(), Object.assign(this, c), this.update();
                    }
                    update() {
                        this.values !== void 0 && (r.bindBuffer(this.target, this.buffer), r.bufferData(this.target, this.values, r.STATIC_DRAW));
                    }
                    attach(c, h) {
                        const s = r.getAttribLocation(h, c);
                        return this.target === r.ARRAY_BUFFER && (r.enableVertexAttribArray(s), r.vertexAttribPointer(s, this.size, this.type, this.normalized, 0, 0)), s;
                    }
                    use(c) {
                        r.bindBuffer(this.target, this.buffer), this.target === r.ARRAY_BUFFER && (r.enableVertexAttribArray(c), r.vertexAttribPointer(c, this.size, this.type, this.normalized, 0, 0));
                    }
                }
            }
        });
        const i = [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ];
        a.commonUniforms = {
            projectionMatrix: new a.Uniform({
                type: "mat4",
                value: i
            }),
            modelViewMatrix: new a.Uniform({
                type: "mat4",
                value: i
            }),
            resolution: new a.Uniform({
                type: "vec2",
                value: [
                    1,
                    1
                ]
            }),
            aspectRatio: new a.Uniform({
                type: "float",
                value: 1
            })
        };
    }
    setSize(t = 640, o = 480) {
        this.width = t, this.height = o, this.canvas.width = t, this.canvas.height = o, this.gl.viewport(0, 0, t, o), this.commonUniforms.resolution.value = [
            t,
            o
        ], this.commonUniforms.aspectRatio.value = t / o;
    }
    setOrthographicCamera(t = 0, o = 0, n = 0, a = -2000, r = 2e3) {
        this.commonUniforms.projectionMatrix.value = [
            2 / this.width,
            0,
            0,
            0,
            0,
            2 / this.height,
            0,
            0,
            0,
            0,
            2 / (a - r),
            0,
            t,
            o,
            n,
            1
        ];
    }
    render() {
        this.gl.clearColor(0, 0, 0, 0), this.gl.clearDepth(1), this.meshes.forEach((t)=>t.draw());
    }
};
const w = {
    CROSS_ICON: (0, _litHtml.svg)`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
    NOISE_TEXTURE: (0, _litHtml.svg)`<svg id="w3m-transparent-noise"><filter id="w3m-noise"><feTurbulence type="fractalNoise" baseFrequency="0.8"/></filter><rect width="100%" height="100%" filter="url(#w3m-noise)"/></svg>`,
    WALLET_CONNECT_LOGO: (0, _litHtml.svg)`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_ICON: (0, _litHtml.svg)`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
    WALLET_CONNECT_ICON_COLORED: (0, _litHtml.svg)`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
    BACK_ICON: (0, _litHtml.svg)`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
    COPY_ICON: (0, _litHtml.svg)`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
    RETRY_ICON: (0, _litHtml.svg)`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
    DESKTOP_ICON: (0, _litHtml.svg)`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    MOBILE_ICON: (0, _litHtml.svg)`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
    ARROW_DOWN_ICON: (0, _litHtml.svg)`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
    ARROW_UP_RIGHT_ICON: (0, _litHtml.svg)`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    ARROW_RIGHT_ICON: (0, _litHtml.svg)`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
    QRCODE_ICON: (0, _litHtml.svg)`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
    SCAN_ICON: (0, _litHtml.svg)`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
    CHECKMARK_ICON: (0, _litHtml.svg)`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
    HELP_ETH_IMG: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,
    HELP_PAINTING_IMG: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,
    HELP_CHART_IMG: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    HELP_KEY_IMG: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    HELP_USER_IMG: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,
    HELP_LOCK_IMG: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
    HELP_COMPAS_IMG: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,
    HELP_NOUN_IMG: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
    HELP_DAO_IMG: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    SEARCH_ICON: (0, _litHtml.svg)`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
    HELP_ICON: (0, _litHtml.svg)`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,
    WALLET_ICON: (0, _litHtml.svg)`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,
    NETWORK_PLACEHOLDER: (0, _litHtml.svg)`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,
    WALLET_PLACEHOLDER: (0, _litHtml.svg)`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    TOKEN_PLACEHOLDER: (0, _litHtml.svg)`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,
    ACCOUNT_COPY: (0, _litHtml.svg)`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,
    ACCOUNT_DISCONNECT: (0, _litHtml.svg)`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`
}, zt = {
    1: "692ed6ba-e569-459a-556a-776476829e00",
    42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    137: "41d04d42-da3b-4453-8506-668cc0727900"
};
var Z = ((e)=>(e.metaMask = "metaMask", e.trust = "trust", e.phantom = "phantom", e.brave = "brave", e.spotEthWallet = "spotEthWallet", e.exodus = "exodus", e.tokenPocket = "tokenPocket", e.frame = "frame", e.tally = "tally", e.coinbaseWallet = "coinbaseWallet", e.core = "core", e.bitkeep = "bitkeep", e.mathWallet = "mathWallet", e.opera = "opera", e.tokenary = "tokenary", e["1inch"] = "1inch", e.kuCoinWallet = "kuCoinWallet", e.ledger = "ledger", e))(Z || {});
const J = {
    injectedPreset: {
        metaMask: {
            name: "MetaMask",
            icon: "619537c0-2ff3-4c78-9ed8-a05e7567f300",
            url: "https://metamask.io",
            isMobile: !0,
            isInjected: !0
        },
        trust: {
            name: "Trust",
            icon: "0528ee7e-16d1-4089-21e3-bbfb41933100",
            url: "https://trustwallet.com",
            isMobile: !0,
            isInjected: !0
        },
        spotEthWallet: {
            name: "Spot",
            icon: "1bf33a89-b049-4a1c-d1f6-4dd7419ee400",
            url: "https://www.spot-wallet.com",
            isMobile: !0,
            isInjected: !0
        },
        phantom: {
            name: "Phantom",
            icon: "62471a22-33cb-4e65-5b54-c3d9ea24b900",
            url: "https://phantom.app",
            isInjected: !0
        },
        core: {
            name: "Core",
            icon: "35f9c46e-cc57-4aa7-315d-e6ccb2a1d600",
            url: "https://core.app",
            isMobile: !0,
            isInjected: !0
        },
        bitkeep: {
            name: "BitKeep",
            icon: "3f7075d0-4ab7-4db5-404d-3e4c05e6fe00",
            url: "https://bitkeep.com",
            isMobile: !0,
            isInjected: !0
        },
        tokenPocket: {
            name: "TokenPocket",
            icon: "f3119826-4ef5-4d31-4789-d4ae5c18e400",
            url: "https://www.tokenpocket.pro",
            isMobile: !0,
            isInjected: !0
        },
        mathWallet: {
            name: "MathWallet",
            icon: "26a8f588-3231-4411-60ce-5bb6b805a700",
            url: "https://mathwallet.org",
            isMobile: !0,
            isInjected: !0
        },
        exodus: {
            name: "Exodus",
            icon: "4c16cad4-cac9-4643-6726-c696efaf5200",
            url: "https://www.exodus.com",
            isMobile: !0,
            isDesktop: !0,
            isInjected: !0
        },
        kuCoinWallet: {
            name: "KuCoin Wallet",
            icon: "1e47340b-8fd7-4ad6-17e7-b2bd651fae00",
            url: "https://kuwallet.com",
            isMobile: !0,
            isInjected: !0
        },
        ledger: {
            name: "Ledger",
            icon: "a7f416de-aa03-4c5e-3280-ab49269aef00",
            url: "https://www.ledger.com",
            isDesktop: !0
        },
        brave: {
            name: "Brave",
            icon: "125e828e-9936-4451-a8f2-949c119b7400",
            url: "https://brave.com/wallet",
            isInjected: !0
        },
        frame: {
            name: "Frame",
            icon: "cd492418-ea85-4ef1-aeed-1c9e20b58900",
            url: "https://frame.sh",
            isInjected: !0
        },
        tally: {
            name: "Tally",
            icon: "98d2620c-9fc8-4a1c-31bc-78d59d00a300",
            url: "https://tallyho.org",
            isInjected: !0
        },
        coinbaseWallet: {
            name: "Coinbase",
            icon: "f8068a7f-83d7-4190-1f94-78154a12c600",
            url: "https://www.coinbase.com/wallet",
            isInjected: !0
        },
        opera: {
            name: "Opera",
            icon: "877fa1a4-304d-4d45-ca8e-f76d1a556f00",
            url: "https://www.opera.com/crypto",
            isInjected: !0
        },
        tokenary: {
            name: "Tokenary",
            icon: "5e481041-dc3c-4a81-373a-76bbde91b800",
            url: "https://tokenary.io",
            isDesktop: !0,
            isInjected: !0
        },
        ["1inch"]: {
            name: "1inch Wallet",
            icon: "dce1ee99-403f-44a9-9f94-20de30616500",
            url: "https://1inch.io/wallet",
            isMobile: !0
        }
    },
    getInjectedId (e) {
        if (e.toUpperCase() !== "INJECTED" && e.length) return e;
        const { ethereum: t , spotEthWallet: o , coinbaseWalletExtension: n  } = window;
        return t ? t.isTrust || t.isTrustWallet ? "trust" : t.isPhantom ? "phantom" : t.isBraveWallet ? "brave" : o ? "spotEthWallet" : t.isExodus ? "exodus" : t.isTokenPocket ? "tokenPocket" : t.isFrame ? "frame" : t.isTally ? "tally" : n ? "coinbaseWallet" : t.isAvalanche ? "core" : t.isBitKeep ? "bitkeep" : t.isMathWallet ? "mathWallet" : t.isOpera ? "opera" : t.isTokenary ? "tokenary" : t.isOneInchIOSWallet || t.isOneInchAndroidWallet ? "1inch" : t.isKuCoinWallet ? "kuCoinWallet" : t.isMetaMask ? "metaMask" : "injected" : "metaMask";
    },
    getInjectedName (e) {
        var t, o;
        if (e.length && e.toUpperCase() !== "INJECTED") return e;
        const n = J.getInjectedId("");
        return (o = (t = J.injectedPreset[n]) == null ? void 0 : t.name) != null ? o : "Injected";
    }
}, Vt = {
    ETH: {
        icon: "692ed6ba-e569-459a-556a-776476829e00"
    },
    WETH: {
        icon: "692ed6ba-e569-459a-556a-776476829e00"
    },
    AVAX: {
        icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00"
    },
    FTM: {
        icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00"
    },
    BNB: {
        icon: "93564157-2e8e-4ce7-81df-b264dbee9b00"
    },
    MATIC: {
        icon: "41d04d42-da3b-4453-8506-668cc0727900"
    },
    OP: {
        icon: "ab9c186a-c52f-464b-2906-ca59d760a400"
    }
};
var Gt = Object.defineProperty, ut = Object.getOwnPropertySymbols, qt = Object.prototype.hasOwnProperty, Kt = Object.prototype.propertyIsEnumerable, gt = (e, t, o)=>t in e ? Gt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[t] = o, Yt = (e, t)=>{
    for(var o in t || (t = {}))qt.call(t, o) && gt(e, o, t[o]);
    if (ut) for (var o of ut(t))Kt.call(t, o) && gt(e, o, t[o]);
    return e;
};
const m = {
    MOBILE_BREAKPOINT: 600,
    W3M_RECENT_WALLET: "W3M_RECENT_WALLET",
    rejectStandaloneButtonComponent () {
        const { isStandalone: e  } = (0, _core.OptionsCtrl).state;
        if (e) throw new Error("Web3Modal button components are not available in standalone mode.");
    },
    getShadowRootElement (e, t) {
        const o = e.renderRoot.querySelector(t);
        if (!o) throw new Error(`${t} not found`);
        return o;
    },
    getWalletId (e) {
        return J.getInjectedId(e);
    },
    getWalletIcon (e) {
        var t, o;
        const n = (t = J.injectedPreset[e]) == null ? void 0 : t.icon, { projectId: a , walletImages: r  } = (0, _core.ConfigCtrl).state;
        return (o = r?.[e]) != null ? o : a && n ? (0, _core.ExplorerCtrl).getImageUrl(n) : "";
    },
    getWalletName (e, t = !1) {
        const o = J.getInjectedName(e);
        return t ? o.split(" ")[0] : o;
    },
    getChainIcon (e) {
        var t;
        const o = zt[e], { projectId: n , chainImages: a  } = (0, _core.ConfigCtrl).state;
        return (t = a?.[e]) != null ? t : n && o ? (0, _core.ExplorerCtrl).getImageUrl(o) : "";
    },
    getTokenIcon (e) {
        var t, o;
        const n = (t = Vt[e]) == null ? void 0 : t.icon, { projectId: a , tokenImages: r  } = (0, _core.ConfigCtrl).state;
        return (o = r?.[e]) != null ? o : a && n ? (0, _core.ExplorerCtrl).getImageUrl(n) : "";
    },
    isMobileAnimation () {
        return window.innerWidth <= m.MOBILE_BREAKPOINT;
    },
    async preloadImage (e) {
        return new Promise((t, o)=>{
            const n = new Image;
            n.onload = t, n.onerror = o, n.src = e;
        });
    },
    getErrorMessage (e) {
        return e instanceof Error ? e.message : "Unknown Error";
    },
    debounce (e, t = 500) {
        let o;
        return (...n)=>{
            function a() {
                e(...n);
            }
            o && clearTimeout(o), o = setTimeout(a, t);
        };
    },
    async handleMobileLinking (e) {
        const { standaloneUri: t , selectedChain: o  } = (0, _core.OptionsCtrl).state, { links: n , name: a  } = e;
        function r(i) {
            let c = "";
            n != null && n.universal ? c = (0, _core.CoreUtil).formatUniversalUrl(n.universal, i, a) : n != null && n.native && (c = (0, _core.CoreUtil).formatNativeUrl(n.native, i, a)), (0, _core.CoreUtil).openHref(c);
        }
        t ? r(t) : (await (0, _core.ClientCtrl).client().connectWalletConnect((i)=>{
            r(i);
        }, o?.id), (0, _core.ModalCtrl).close()), m.setRecentWallet(e);
    },
    async handleAndroidLinking () {
        const { standaloneUri: e , selectedChain: t  } = (0, _core.OptionsCtrl).state;
        e ? (0, _core.CoreUtil).openHref(e) : (await (0, _core.ClientCtrl).client().connectWalletConnect((o)=>{
            (0, _core.CoreUtil).setWalletConnectAndroidDeepLink(o), (0, _core.CoreUtil).openHref(o);
        }, t?.id), (0, _core.ModalCtrl).close());
    },
    async handleUriCopy () {
        const { standaloneUri: e  } = (0, _core.OptionsCtrl).state;
        if (e) await navigator.clipboard.writeText(e);
        else {
            const t = (0, _core.ClientCtrl).client().walletConnectUri;
            await navigator.clipboard.writeText(t);
        }
        (0, _core.ToastCtrl).openToast("Link copied", "success");
    },
    async handleConnectorConnection (e, t) {
        try {
            const { selectedChain: o  } = (0, _core.OptionsCtrl).state;
            await (0, _core.ClientCtrl).client().connectConnector(e, o?.id), (0, _core.ModalCtrl).close();
        } catch (o) {
            t ? t() : (0, _core.ToastCtrl).openToast(m.getErrorMessage(o), "error");
        }
    },
    getCustomWallets () {
        var e;
        const { desktopWallets: t , mobileWallets: o  } = (0, _core.ConfigCtrl).state;
        return (e = (0, _core.CoreUtil).isMobile() ? o : t) != null ? e : [];
    },
    getCustomImageUrls () {
        const { chainImages: e , walletImages: t  } = (0, _core.ConfigCtrl).state, o = Object.values(e ?? {}), n = Object.values(t ?? {});
        return Object.values([
            ...o,
            ...n
        ]);
    },
    getConnectorImageUrls () {
        return (0, _core.ClientCtrl).client().getConnectors().map(({ id: e  })=>J.getInjectedId(e)).map((e)=>m.getWalletIcon(e));
    },
    truncate (e, t = 8) {
        return e.length <= t ? e : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`;
    },
    generateAvatarColors (e) {
        var t;
        const o = (t = e.match(/.{1,7}/g)) == null ? void 0 : t.splice(0, 5), n = [];
        o?.forEach((r)=>{
            let i = 0;
            for(let h = 0; h < r.length; h += 1)i = r.charCodeAt(h) + ((i << 5) - i), i = i & i;
            const c = [
                0,
                0,
                0
            ];
            for(let h = 0; h < 3; h += 1){
                const s = i >> h * 8 & 255;
                c[h] = s;
            }
            n.push(`rgb(${c[0]}, ${c[1]}, ${c[2]})`);
        });
        const a = document.querySelector(":root");
        if (a) {
            const r = {
                "--color-av-1": n[0],
                "--color-av-2": n[1],
                "--color-av-3": n[2],
                "--color-av-4": n[3],
                "--color-av-5": n[4]
            };
            Object.entries(r).forEach(([i, c])=>a.style.setProperty(i, c));
        }
    },
    setRecentWallet (e) {
        localStorage.setItem(m.W3M_RECENT_WALLET, JSON.stringify(e));
    },
    getRecentWallet () {
        const e = localStorage.getItem(m.W3M_RECENT_WALLET);
        if (e) return JSON.parse(e);
    },
    getExtensionWallets () {
        const e = [];
        for (const [t, o] of Object.entries(J.injectedPreset))t !== Z.coinbaseWallet && o && o.isInjected && !o.isDesktop && e.push(Yt({
            id: t
        }, o));
        return e;
    },
    caseSafeIncludes (e, t) {
        return e.toUpperCase().includes(t.toUpperCase());
    }
}, Qt = (0, _lit.css)`#w3m-transparent-noise,.w3m-canvas,.w3m-color-placeholder,.w3m-gradient-placeholder,.w3m-highlight{inset:0;position:absolute;display:block;pointer-events:none;width:100%;height:100px;border-radius:8px 8px 0 0;transform:translateY(-5px)}.w3m-gradient-placeholder{background:linear-gradient(var(--gradient-1),var(--gradient-2),var(--gradient-3),var(--gradient-4))}.w3m-color-placeholder{background-color:var(--color-fg-accent)}.w3m-highlight{border:1px solid var(--color-overlay)}.w3m-canvas{opacity:0;transition:opacity 2s ease;box-shadow:0 8px 28px -6px rgba(10,16,31,.12),0 18px 88px -4px rgba(10,16,31,.14)}.w3m-canvas-visible{opacity:1}#w3m-transparent-noise{mix-blend-mode:multiply;opacity:.35}.w3m-toolbar{height:28px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--color-fg-inverse)}.w3m-action-btn{width:28px;height:28px;border-radius:50%;border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:background-color,.2s ease;background-color:var(--color-bg-1);box-shadow:0 0 0 1px var(--color-overlay),0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08)}.w3m-action-btn:hover{background-color:var(--color-bg-2)}.w3m-action-btn svg{display:block;object-position:center}.w3m-action-btn path{fill:var(--color-fg-1)}.w3m-actions{display:flex}.w3m-actions button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--color-fg-1)}.w3m-help-active button:first-child path{fill:var(--color-bg-1)}`;
var Xt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, Re = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Jt(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Xt(t, o, a), a;
};
const vt = new Ht;
let ce = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.open = !1, this.isHelp = !1, this.unsubscribeRouter = void 0, this.playTimeout = void 0, this.unsubscribeRouter = (0, _core.RouterCtrl).subscribe((e)=>{
            this.isHelp = e.view === "Help";
        });
    }
    firstUpdated() {
        const { themeBackground: e  } = (0, _core.ConfigCtrl).state;
        e === "gradient" && (this.playTimeout = setTimeout(()=>{
            vt.play(this.canvasEl), this.open = !0;
        }, 800));
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeRouter) == null || e.call(this), clearTimeout(this.playTimeout), vt.stop();
    }
    get canvasEl() {
        return m.getShadowRootElement(this, ".w3m-canvas");
    }
    onHelp() {
        (0, _core.RouterCtrl).push("Help");
    }
    render() {
        const { themeBackground: e  } = (0, _core.ConfigCtrl).state, t = {
            "w3m-canvas": !0,
            "w3m-canvas-visible": this.open
        }, o = {
            "w3m-actions": !0,
            "w3m-help-active": this.isHelp
        };
        return (0, _lit.html)`${e === "themeColor" ? (0, _lit.html)`<div class="w3m-color-placeholder"></div>` : null} ${e === "gradient" ? (0, _lit.html)`<div class="w3m-gradient-placeholder"></div><canvas class="${(0, _classMapJs.classMap)(t)}"></canvas>${w.NOISE_TEXTURE}` : null}<div class="w3m-highlight"></div><div class="w3m-toolbar">${w.WALLET_CONNECT_LOGO}<div class="${(0, _classMapJs.classMap)(o)}"><button class="w3m-action-btn" @click="${this.onHelp}">${w.HELP_ICON}</button> <button class="w3m-action-btn" @click="${(0, _core.ModalCtrl).close}">${w.CROSS_ICON}</button></div></div>`;
    }
};
ce.styles = [
    u.globalCss,
    Qt
], Re([
    (0, _decoratorsJs.state)()
], ce.prototype, "open", 2), Re([
    (0, _decoratorsJs.state)()
], ce.prototype, "isHelp", 2), ce = Re([
    (0, _decoratorsJs.customElement)("w3m-modal-backcard")
], ce);
const ea = (0, _lit.css)`main{padding:20px;padding-top:0;width:100%}`;
var ta = Object.defineProperty, aa = Object.getOwnPropertyDescriptor, oa = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? aa(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && ta(t, o, a), a;
};
let Be = class extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`<main><slot></slot></main>`;
    }
};
Be.styles = [
    u.globalCss,
    ea
], Be = oa([
    (0, _decoratorsJs.customElement)("w3m-modal-content")
], Be);
const na = (0, _lit.css)`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--color-bg-2)}`;
var ra = Object.defineProperty, ia = Object.getOwnPropertyDescriptor, la = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? ia(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && ra(t, o, a), a;
};
let Ue = class extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`<footer><slot></slot></footer>`;
    }
};
Ue.styles = [
    u.globalCss,
    na
], Ue = la([
    (0, _decoratorsJs.customElement)("w3m-modal-footer")
], Ue);
const sa = (0, _lit.css)`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--color-bg-2);margin-bottom:20px}header button{padding:15px 20px;transition:opacity .2s ease}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--color-fg-accent)}`;
var ca = Object.defineProperty, da = Object.getOwnPropertyDescriptor, de = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? da(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && ca(t, o, a), a;
};
let q = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1;
    }
    backBtnTemplate() {
        return (0, _lit.html)`<button class="w3m-back-btn" @click="${(0, _core.RouterCtrl).goBack}">${w.BACK_ICON}</button>`;
    }
    actionBtnTemplate() {
        return (0, _lit.html)`<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
    }
    render() {
        const e = {
            "w3m-border": this.border
        }, t = (0, _core.RouterCtrl).state.history.length > 1, o = this.title ? (0, _lit.html)`<w3m-text variant="large-bold">${this.title}</w3m-text>` : (0, _lit.html)`<slot></slot>`;
        return (0, _lit.html)`<header class="${(0, _classMapJs.classMap)(e)}">${t ? this.backBtnTemplate() : null} ${o} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
    }
};
q.styles = [
    u.globalCss,
    sa
], de([
    (0, _decoratorsJs.property)()
], q.prototype, "title", 2), de([
    (0, _decoratorsJs.property)()
], q.prototype, "onAction", 2), de([
    (0, _decoratorsJs.property)()
], q.prototype, "actionIcon", 2), de([
    (0, _decoratorsJs.property)()
], q.prototype, "border", 2), q = de([
    (0, _decoratorsJs.customElement)("w3m-modal-header")
], q);
const ha = (0, _lit.css)`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
var ma = Object.defineProperty, pa = Object.getOwnPropertyDescriptor, He = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? pa(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && ma(t, o, a), a;
};
let he = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.view = (0, _core.RouterCtrl).state.view, this.prevView = (0, _core.RouterCtrl).state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = (0, _core.RouterCtrl).subscribe((e)=>{
            this.view !== e.view && this.onChangeRoute();
        });
    }
    firstUpdated() {
        this.resizeObserver = new ResizeObserver(([e])=>{
            const t = `${e.contentRect.height}px`;
            this.oldHeight !== "0px" && ((0, _motion.animate)(this.routerEl, {
                height: [
                    this.oldHeight,
                    t
                ]
            }, {
                duration: .2
            }), (0, _motion.animate)(this.routerEl, {
                opacity: [
                    0,
                    1
                ],
                scale: [
                    .99,
                    1
                ]
            }, {
                duration: .37,
                delay: .03
            })), this.oldHeight = t;
        }), this.resizeObserver.observe(this.contentEl);
    }
    disconnectedCallback() {
        var e, t;
        (e = this.unsubscribe) == null || e.call(this), (t = this.resizeObserver) == null || t.disconnect();
    }
    get routerEl() {
        return m.getShadowRootElement(this, ".w3m-router");
    }
    get contentEl() {
        return m.getShadowRootElement(this, ".w3m-content");
    }
    viewTemplate() {
        switch(this.view){
            case "ConnectWallet":
                return (0, _lit.html)`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
            case "SelectNetwork":
                return (0, _lit.html)`<w3m-select-network-view></w3m-select-network-view>`;
            case "InjectedConnector":
                return (0, _lit.html)`<w3m-injected-connector-view></w3m-injected-connector-view>`;
            case "InstallConnector":
                return (0, _lit.html)`<w3m-install-connector-view></w3m-install-connector-view>`;
            case "GetWallet":
                return (0, _lit.html)`<w3m-get-wallet-view></w3m-get-wallet-view>`;
            case "DesktopConnector":
                return (0, _lit.html)`<w3m-desktop-connector-view></w3m-desktop-connector-view>`;
            case "WalletExplorer":
                return (0, _lit.html)`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
            case "Qrcode":
                return (0, _lit.html)`<w3m-qrcode-view></w3m-qrcode-view>`;
            case "Help":
                return (0, _lit.html)`<w3m-help-view></w3m-help-view>`;
            case "WalletFilter":
                return (0, _lit.html)`<w3m-wallet-filter-view></w3m-wallet-filter-view>`;
            case "Account":
                return (0, _lit.html)`<w3m-account-view></w3m-account-view>`;
            case "SwitchNetwork":
                return (0, _lit.html)`<w3m-switch-network-view></w3m-switch-network-view>`;
            default:
                return (0, _lit.html)`<div>Not Found</div>`;
        }
    }
    async onChangeRoute() {
        await (0, _motion.animate)(this.routerEl, {
            opacity: [
                1,
                0
            ],
            scale: [
                1,
                1.02
            ]
        }, {
            duration: .15
        }).finished, this.view = (0, _core.RouterCtrl).state.view;
    }
    render() {
        return (0, _lit.html)`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`;
    }
};
he.styles = [
    u.globalCss,
    ha
], He([
    (0, _decoratorsJs.state)()
], he.prototype, "view", 2), He([
    (0, _decoratorsJs.state)()
], he.prototype, "prevView", 2), he = He([
    (0, _decoratorsJs.customElement)("w3m-modal-router")
], he);
const ua = (0, _lit.css)`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:10px 15px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:36px;border:1px solid var(--color-overlay);background-color:var(--color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--color-bg-3)}}.w3m-success path{fill:var(--color-fg-accent)}.w3m-error path{fill:var(--color-err)}`;
var ga = Object.defineProperty, va = Object.getOwnPropertyDescriptor, bt = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? va(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && ga(t, o, a), a;
};
let $e = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = (0, _core.ToastCtrl).subscribe((e)=>{
            e.open ? (this.open = !0, this.timeout = setTimeout(()=>(0, _core.ToastCtrl).closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout));
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribe) == null || e.call(this), clearTimeout(this.timeout), (0, _core.ToastCtrl).closeToast();
    }
    render() {
        const { message: e , variant: t  } = (0, _core.ToastCtrl).state, o = {
            "w3m-success": t === "success",
            "w3m-error": t === "error"
        };
        return this.open ? (0, _lit.html)`<div class="${(0, _classMapJs.classMap)(o)}">${t === "success" ? w.CHECKMARK_ICON : null} ${t === "error" ? w.CROSS_ICON : null}<w3m-text variant="small-normal">${e}</w3m-text></div>` : null;
    }
};
$e.styles = [
    u.globalCss,
    ua
], bt([
    (0, _decoratorsJs.state)()
], $e.prototype, "open", 2), $e = bt([
    (0, _decoratorsJs.customElement)("w3m-modal-toast")
], $e);
const ba = (0, _lit.css)`button{padding:5px;border-radius:10px;transition:all .2s ease;display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:hover{background-color:var(--color-overlay)}`;
var wa = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, Oe = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? fa(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && wa(t, o, a), a;
};
let ae = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.onClick = ()=>null, this.name = "", this.chainId = "";
    }
    render() {
        return (0, _lit.html)`<button @click="${this.onClick}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-normal">${this.name}</w3m-text></button>`;
    }
};
ae.styles = [
    u.globalCss,
    ba
], Oe([
    (0, _decoratorsJs.property)()
], ae.prototype, "onClick", 2), Oe([
    (0, _decoratorsJs.property)()
], ae.prototype, "name", 2), Oe([
    (0, _decoratorsJs.property)()
], ae.prototype, "chainId", 2), ae = Oe([
    (0, _decoratorsJs.customElement)("w3m-network-button")
], ae);
const ya = (0, _lit.css)`div{width:inherit;height:inherit}.polygon-stroke{stroke:var(--color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--color-bg-3)}#network-placeholder-dash{stroke:var(--color-overlay)}`;
var xa = Object.defineProperty, Ca = Object.getOwnPropertyDescriptor, wt = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Ca(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && xa(t, o, a), a;
};
let Ie = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.chainId = "";
    }
    render() {
        const e = m.getChainIcon(this.chainId);
        return e ? (0, _lit.html)`<div><svg width="54" height="59" viewBox="0 0 54 59" fill="none"><defs><clipPath id="polygon"><path d="M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z"/></clipPath></defs><image clip-path="url(#polygon)" href="${e}" width="58" height="59" x="-2" y="0"/><path class="polygon-stroke" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z" stroke="#fff"/></svg></div>` : (0, _lit.html)`${w.NETWORK_PLACEHOLDER}`;
    }
};
Ie.styles = [
    u.globalCss,
    ya
], wt([
    (0, _decoratorsJs.property)()
], Ie.prototype, "chainId", 2), Ie = wt([
    (0, _decoratorsJs.customElement)("w3m-network-image")
], Ie);
const ka = .1, ft = 2.5, F = 7;
function Ze(e, t, o) {
    return e === t ? !1 : (e - t < 0 ? t - e : e - t) <= o + ka;
}
function $a(e, t) {
    const o = Array.prototype.slice.call((0, _qrcodeDefault.default).create(e, {
        errorCorrectionLevel: t
    }).modules.data, 0), n = Math.sqrt(o.length);
    return o.reduce((a, r, i)=>(i % n === 0 ? a.push([
            r
        ]) : a[a.length - 1].push(r)) && a, []);
}
const Oa = {
    generate (e, t, o, n) {
        const a = n === "light" ? "#141414" : "#fff", r = n === "light" ? "#fff" : "#141414", i = [], c = $a(e, "Q"), h = t / c.length, s = [
            {
                x: 0,
                y: 0
            },
            {
                x: 1,
                y: 0
            },
            {
                x: 0,
                y: 1
            }
        ];
        s.forEach(({ x: E , y: x  })=>{
            const W = (c.length - F) * h * E, M = (c.length - F) * h * x, S = .32;
            for(let U = 0; U < s.length; U += 1){
                const ee = h * (F - U * 2);
                i.push((0, _lit.svg)`<rect fill="${U % 2 === 0 ? a : r}" height="${ee}" rx="${ee * S}" ry="${ee * S}" width="${ee}" x="${W + h * U}" y="${M + h * U}">`);
            }
        });
        const d = Math.floor((o + 25) / h), g = c.length / 2 - d / 2, C = c.length / 2 + d / 2 - 1, A = [];
        c.forEach((E, x)=>{
            E.forEach((W, M)=>{
                if (c[x][M] && !(x < F && M < F || x > c.length - (F + 1) && M < F || x < F && M > c.length - (F + 1)) && !(x > g && x < C && M > g && M < C)) {
                    const S = x * h + h / 2, U = M * h + h / 2;
                    A.push([
                        S,
                        U
                    ]);
                }
            });
        });
        const R = {};
        return A.forEach(([E, x])=>{
            R[E] ? R[E].push(x) : R[E] = [
                x
            ];
        }), Object.entries(R).map(([E, x])=>{
            const W = x.filter((M)=>x.every((S)=>!Ze(M, S, h)));
            return [
                Number(E),
                W
            ];
        }).forEach(([E, x])=>{
            x.forEach((W)=>{
                i.push((0, _lit.svg)`<circle cx="${E}" cy="${W}" fill="${a}" r="${h / ft}">`);
            });
        }), Object.entries(R).filter(([E, x])=>x.length > 1).map(([E, x])=>{
            const W = x.filter((M)=>x.some((S)=>Ze(M, S, h)));
            return [
                Number(E),
                W
            ];
        }).map(([E, x])=>{
            x.sort((M, S)=>M < S ? -1 : 1);
            const W = [];
            for (const M of x){
                const S = W.find((U)=>U.some((ee)=>Ze(M, ee, h)));
                S ? S.push(M) : W.push([
                    M
                ]);
            }
            return [
                E,
                W.map((M)=>[
                        M[0],
                        M[M.length - 1]
                    ])
            ];
        }).forEach(([E, x])=>{
            x.forEach(([W, M])=>{
                i.push((0, _lit.svg)`<line x1="${E}" x2="${E}" y1="${W}" y2="${M}" stroke="${a}" stroke-width="${h / (ft / 2)}" stroke-linecap="round">`);
            });
        }), i;
    }
}, Ia = (0, _lit.css)`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:15px}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--color-fg-accent)}svg:first-child path:last-child{stroke:var(--color-overlay)}`;
var Ea = Object.defineProperty, Ma = Object.getOwnPropertyDescriptor, me = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Ma(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Ea(t, o, a), a;
};
let K = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.uri = "", this.size = 0, this.logoSrc = "", this.walletId = "";
    }
    svgTemplate() {
        var e;
        const t = (e = (0, _core.ConfigCtrl).state.themeMode) != null ? e : "light";
        return (0, _lit.svg)`<svg height="${this.size}" width="${this.size}">${Oa.generate(this.uri, this.size, this.size / 4, t)}</svg>`;
    }
    render() {
        return (0, _lit.html)`<div>${this.walletId || this.logoSrc ? (0, _lit.html)`<w3m-wallet-image walletId="${(0, _ifDefinedJs.ifDefined)(this.walletId)}" src="${(0, _ifDefinedJs.ifDefined)(this.logoSrc)}"></w3m-wallet-image>` : w.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
    }
};
K.styles = [
    u.globalCss,
    Ia
], me([
    (0, _decoratorsJs.property)()
], K.prototype, "uri", 2), me([
    (0, _decoratorsJs.property)({
        type: Number
    })
], K.prototype, "size", 2), me([
    (0, _decoratorsJs.property)()
], K.prototype, "logoSrc", 2), me([
    (0, _decoratorsJs.property)()
], K.prototype, "walletId", 2), K = me([
    (0, _decoratorsJs.customElement)("w3m-qrcode")
], K);
const Wa = (0, _lit.css)`:host{position:relative;height:28px;width:75%}input{width:100%;height:100%;line-height:28px!important;border-radius:28px;font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--color-bg-3);box-shadow:inset 0 0 0 1px var(--color-overlay)}input::placeholder{color:transparent}svg{margin-right:4px}.w3m-placeholder{top:0;left:50%;transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:100%;width:fit-content;position:relative}input:focus-within+.w3m-placeholder,input:not(:placeholder-shown)+.w3m-placeholder{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+.w3m-placeholder w3m-text,input:not(:placeholder-shown)+.w3m-placeholder w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--color-fg-accent)}path{fill:var(--color-fg-2)}`;
var ja = Object.defineProperty, La = Object.getOwnPropertyDescriptor, yt = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? La(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && ja(t, o, a), a;
};
let Ee = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.onChange = ()=>null;
    }
    render() {
        const e = (0, _core.CoreUtil).isMobile() ? "Search mobile wallets" : "Search desktop wallets";
        return (0, _lit.html)`<input type="text" @input="${this.onChange}" placeholder="${e}"><div class="w3m-placeholder">${w.SEARCH_ICON}<w3m-text color="secondary" variant="medium-thin">${e}</w3m-text></div>`;
    }
};
Ee.styles = [
    u.globalCss,
    Wa
], yt([
    (0, _decoratorsJs.property)()
], Ee.prototype, "onChange", 2), Ee = yt([
    (0, _decoratorsJs.customElement)("w3m-search-input")
], Ee);
const Aa = (0, _lit.css)`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--color-fg-accent)}`;
var Pa = Object.defineProperty, Sa = Object.getOwnPropertyDescriptor, _a = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Sa(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Pa(t, o, a), a;
};
let Fe = class extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
    }
};
Fe.styles = [
    u.globalCss,
    Aa
], Fe = _a([
    (0, _decoratorsJs.customElement)("w3m-spinner")
], Fe);
const Da = (0, _lit.css)`span{font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xxsmall-bold{font-weight:700;font-size:10px;line-height:12px;letter-spacing:.02em;text-transform:uppercase}.w3m-xsmall-normal{font-weight:600;font-size:12px;line-height:14px;letter-spacing:-.03em}.w3m-small-thin{font-weight:500;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-small-normal{font-weight:600;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-medium-thin{font-weight:500;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-normal{font-weight:600;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-bold{font-weight:700;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-large-bold{font-weight:600;font-size:20px;line-height:24px;letter-spacing:-.03em}:host(*){color:var(--color-fg-1)}.w3m-color-primary{color:var(--color-fg-1)}.w3m-color-secondary{color:var(--color-fg-2)}.w3m-color-tertiary{color:var(--color-fg-3)}.w3m-color-inverse{color:var(--color-fg-inverse)}.w3m-color-accnt{color:var(--color-fg-accent)}.w3m-color-error{color:var(--color-err)}`;
var Ta = Object.defineProperty, Na = Object.getOwnPropertyDescriptor, ze = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Na(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Ta(t, o, a), a;
};
let pe = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.variant = "medium-normal", this.color = "primary";
    }
    render() {
        const e = {
            "w3m-large-bold": this.variant === "large-bold",
            "w3m-medium-bold": this.variant === "medium-bold",
            "w3m-medium-normal": this.variant === "medium-normal",
            "w3m-medium-thin": this.variant === "medium-thin",
            "w3m-small-normal": this.variant === "small-normal",
            "w3m-small-thin": this.variant === "small-thin",
            "w3m-xsmall-normal": this.variant === "xsmall-normal",
            "w3m-xxsmall-bold": this.variant === "xxsmall-bold",
            "w3m-color-primary": this.color === "primary",
            "w3m-color-secondary": this.color === "secondary",
            "w3m-color-tertiary": this.color === "tertiary",
            "w3m-color-inverse": this.color === "inverse",
            "w3m-color-accnt": this.color === "accent",
            "w3m-color-error": this.color === "error"
        };
        return (0, _lit.html)`<span class="${(0, _classMapJs.classMap)(e)}"><slot></slot></span>`;
    }
};
pe.styles = [
    u.globalCss,
    Da
], ze([
    (0, _decoratorsJs.property)()
], pe.prototype, "variant", 2), ze([
    (0, _decoratorsJs.property)()
], pe.prototype, "color", 2), pe = ze([
    (0, _decoratorsJs.customElement)("w3m-text")
], pe);
const Ra = (0, _lit.css)`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;inset:0;border-radius:50%;border:1px solid var(--color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--color-bg-3)}#token-placeholder-dash{stroke:var(--color-overlay)}`;
var Ba = Object.defineProperty, Ua = Object.getOwnPropertyDescriptor, xt = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Ua(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Ba(t, o, a), a;
};
let Me = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.symbol = void 0;
    }
    render() {
        var e;
        const t = m.getTokenIcon((e = this.symbol) != null ? e : "");
        return t ? (0, _lit.html)`<div><img src="${t}" alt="${this.id}"></div>` : w.TOKEN_PLACEHOLDER;
    }
};
Me.styles = [
    u.globalCss,
    Ra
], xt([
    (0, _decoratorsJs.property)()
], Me.prototype, "symbol", 2), Me = xt([
    (0, _decoratorsJs.customElement)("w3m-token-image")
], Me);
const Ha = (0, _lit.css)`button{transition:all .2s ease;width:100%;height:100%;border-radius:10px;display:flex;align-items:flex-start}button:hover{background-color:var(--color-overlay)}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:15px;margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
var Za = Object.defineProperty, Fa = Object.getOwnPropertyDescriptor, z = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Fa(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Za(t, o, a), a;
};
let H = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.onClick = ()=>null, this.name = "", this.walletId = "", this.label = void 0, this.src = void 0, this.installed = !1, this.recent = !1;
    }
    sublabelTemplate() {
        return this.recent ? (0, _lit.html)`<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">RECENT</w3m-text>` : this.installed ? (0, _lit.html)`<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">INSTALLED</w3m-text>` : null;
    }
    render() {
        var e;
        return (0, _lit.html)`<button @click="${this.onClick}"><div><w3m-wallet-image walletId="${this.walletId}" .src="${this.src}"></w3m-wallet-image><w3m-text variant="xsmall-normal">${(e = this.label) != null ? e : m.getWalletName(this.name, !0)}</w3m-text>${this.sublabelTemplate()}</div></button>`;
    }
};
H.styles = [
    u.globalCss,
    Ha
], z([
    (0, _decoratorsJs.property)()
], H.prototype, "onClick", 2), z([
    (0, _decoratorsJs.property)()
], H.prototype, "name", 2), z([
    (0, _decoratorsJs.property)()
], H.prototype, "walletId", 2), z([
    (0, _decoratorsJs.property)()
], H.prototype, "label", 2), z([
    (0, _decoratorsJs.property)()
], H.prototype, "src", 2), z([
    (0, _decoratorsJs.property)()
], H.prototype, "installed", 2), z([
    (0, _decoratorsJs.property)()
], H.prototype, "recent", 2), H = z([
    (0, _decoratorsJs.customElement)("w3m-wallet-button")
], H);
const za = (0, _lit.css)`div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;inset:0;border-radius:inherit;border:1px solid var(--color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--color-bg-3)}#wallet-placeholder-dash{stroke:var(--color-overlay)}`;
var Va = Object.defineProperty, Ga = Object.getOwnPropertyDescriptor, Ve = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Ga(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Va(t, o, a), a;
};
let ue = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.walletId = void 0, this.src = void 0;
    }
    render() {
        var e;
        const t = m.getWalletId((e = this.walletId) != null ? e : ""), o = m.getWalletId(t), n = this.src ? this.src : m.getWalletIcon(o);
        return (0, _lit.html)`${n.length ? (0, _lit.html)`<div><img src="${n}" alt="${this.id}"></div>` : w.WALLET_PLACEHOLDER}`;
    }
};
ue.styles = [
    u.globalCss,
    za
], Ve([
    (0, _decoratorsJs.property)()
], ue.prototype, "walletId", 2), Ve([
    (0, _decoratorsJs.property)()
], ue.prototype, "src", 2), ue = Ve([
    (0, _decoratorsJs.customElement)("w3m-wallet-image")
], ue);
const qa = (0, _lit.css)`:host{all:initial}div{display:flex;align-items:center;background-color:var(--color-overlay);box-shadow:inset 0 0 0 1px var(--color-overlay);border-radius:10px;padding:4px 4px 4px 8px}div button{border-radius:16px;padding:4px 8px 4px 4px;height:auto;margin-left:10px;color:var(--color-fg-inverse);background-color:var(--color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--color-overlay)}button:hover::after{background-color:var(--color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
var Ka = Object.defineProperty, Ya = Object.getOwnPropertyDescriptor, Ct = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Ya(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Ka(t, o, a), a;
};
let We = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.balance = "hide", m.rejectStandaloneButtonComponent();
    }
    onOpen() {
        const { isStandalone: e  } = (0, _core.OptionsCtrl).state;
        e || (0, _core.ModalCtrl).open({
            route: "Account"
        });
    }
    accountTemplate() {
        return (0, _lit.html)`<w3m-avatar></w3m-avatar><w3m-address-text></w3m-address-text>`;
    }
    render() {
        return this.balance === "show" ? (0, _lit.html)`<div><w3m-balance></w3m-balance><button @click="${this.onOpen}">${this.accountTemplate()}</button></div>` : (0, _lit.html)`<w3m-button-big @click="${this.onOpen}">${this.accountTemplate()}</w3m-button-big>`;
    }
};
We.styles = [
    u.globalCss,
    qa
], Ct([
    (0, _decoratorsJs.property)()
], We.prototype, "balance", 2), We = Ct([
    (0, _decoratorsJs.customElement)("w3m-account-button")
], We);
const Qa = (0, _lit.css)`button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--color-overlay)}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
var Xa = Object.defineProperty, Ja = Object.getOwnPropertyDescriptor, Ge = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Ja(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Xa(t, o, a), a;
};
let ge = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.chainId = "", this.label = "", this.unsubscribeNetwork = void 0;
        const { selectedChain: e  } = (0, _core.OptionsCtrl).state;
        this.chainId = e?.id.toString(), this.label = e?.name, this.unsubscribeNetwork = (0, _core.OptionsCtrl).subscribe(({ selectedChain: t  })=>{
            this.chainId = t?.id.toString(), this.label = t?.name;
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeNetwork) == null || e.call(this);
    }
    onClick() {
        (0, _core.RouterCtrl).push("SelectNetwork");
    }
    render() {
        const { chains: e  } = (0, _core.OptionsCtrl).state, t = e && e.length > 1;
        return (0, _lit.html)`<button @click="${this.onClick}" ?disabled="${!t}"><w3m-network-image chainId="${(0, _ifDefinedJs.ifDefined)(this.chainId)}"></w3m-network-image><w3m-text variant="xsmall-normal" color="accent">${this.label}</w3m-text></button>`;
    }
};
ge.styles = [
    u.globalCss,
    Qa
], Ge([
    (0, _decoratorsJs.state)()
], ge.prototype, "chainId", 2), Ge([
    (0, _decoratorsJs.state)()
], ge.prototype, "label", 2), ge = Ge([
    (0, _decoratorsJs.customElement)("w3m-account-network-button")
], ge);
const eo = (0, _lit.css)`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--color-fg-1) 36.33%,var(--color-fg-3) 42.07%,var(--color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
var to = Object.defineProperty, ao = Object.getOwnPropertyDescriptor, ve = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? ao(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && to(t, o, a), a;
};
let Y = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.address = void 0, this.name = void 0, this.loading = !0, this.variant = "button", this.unsubscribeAccount = void 0, this.address = (0, _core.OptionsCtrl).state.address, this.name = (0, _core.OptionsCtrl).state.profileName, this.loading = Boolean((0, _core.OptionsCtrl).state.profileLoading), this.unsubscribeAccount = (0, _core.OptionsCtrl).subscribe(({ address: e , profileName: t , profileLoading: o  })=>{
            this.address = e, this.name = t, this.loading = Boolean(o);
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeAccount) == null || e.call(this);
    }
    render() {
        var e;
        const t = this.variant === "button", o = {
            "w3m-loading": this.loading
        };
        return (0, _lit.html)`<w3m-text class="${(0, _classMapJs.classMap)(o)}" variant="${t ? "medium-normal" : "large-bold"}" color="${t ? "inverse" : "primary"}">${this.name ? this.name : m.truncate((e = this.address) != null ? e : "")}</w3m-text>`;
    }
};
Y.styles = [
    u.globalCss,
    eo
], ve([
    (0, _decoratorsJs.state)()
], Y.prototype, "address", 2), ve([
    (0, _decoratorsJs.state)()
], Y.prototype, "name", 2), ve([
    (0, _decoratorsJs.state)()
], Y.prototype, "loading", 2), ve([
    (0, _decoratorsJs.property)()
], Y.prototype, "variant", 2), Y = ve([
    (0, _decoratorsJs.customElement)("w3m-address-text")
], Y);
const oo = (0, _lit.css)`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 10),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px}.w3m-slider::after,.w3m-slider::before{content:'';height:100%;width:50px;z-index:2;position:absolute;background:linear-gradient(to right,var(--color-bg-1) 0,transparent 100%);top:0}.w3m-slider::before{left:0}.w3m-slider::after{right:0;transform:rotateZ(180deg)}.w3m-track{display:flex;width:calc(70px * 20);animation:scroll 20s linear infinite}.w3m-action{padding:30px 0 10px 0;display:flex;justify-content:center;align-items:center;flex-direction:column}.w3m-action w3m-button-big:last-child{margin-top:10px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;box-shadow:0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08);border-radius:15px}`;
var no = Object.defineProperty, ro = Object.getOwnPropertyDescriptor, io = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? ro(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && no(t, o, a), a;
};
let qe = class extends (0, _lit.LitElement) {
    onGoToQrcode() {
        (0, _core.RouterCtrl).push("Qrcode");
    }
    onGoToGetWallet() {
        (0, _core.RouterCtrl).push("GetWallet");
    }
    render() {
        const { previewWallets: e  } = (0, _core.ExplorerCtrl).state, t = e.length, o = [
            ...e,
            ...e
        ];
        return (0, _lit.html)`<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${w.QRCODE_ICON}"></w3m-modal-header><w3m-modal-content>${t ? (0, _lit.html)`<div class="w3m-slider"><div class="w3m-track">${o.map(({ image_url: n  })=>(0, _lit.html)`<w3m-wallet-image src="${n.lg}"></w3m-wallet-image>`)}</div></div>` : null}<div class="w3m-action"><w3m-button-big @click="${m.handleAndroidLinking}"><w3m-text variant="medium-normal" color="inverse">Select Wallet</w3m-text></w3m-button-big><w3m-button-big variant="secondary" @click="${this.onGoToGetWallet}"><w3m-text variant="medium-normal" color="accent">I don’t have a wallet</w3m-text></w3m-button-big></div></w3m-modal-content>`;
    }
};
qe.styles = [
    u.globalCss,
    oo
], qe = io([
    (0, _decoratorsJs.customElement)("w3m-android-wallet-selection")
], qe);
const lo = (0, _lit.css)`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--color-av-1);background-image:radial-gradient(at 66% 77%,var(--color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
var so = Object.defineProperty, co = Object.getOwnPropertyDescriptor, be = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? co(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && so(t, o, a), a;
};
let Q = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.address = void 0, this.avatar = void 0, this.loading = !0, this.size = "small", this.unsubscribeAccount = void 0, this.address = (0, _core.OptionsCtrl).state.address, this.avatar = (0, _core.OptionsCtrl).state.profileAvatar, this.loading = Boolean((0, _core.OptionsCtrl).state.profileLoading), this.unsubscribeAccount = (0, _core.OptionsCtrl).subscribe(({ address: e , profileAvatar: t , profileLoading: o  })=>{
            this.address = e, this.avatar = t, this.loading = Boolean(o);
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeAccount) == null || e.call(this);
    }
    render() {
        const e = {
            "w3m-placeholder": !0,
            "w3m-small": this.size === "small",
            "w3m-medium": this.size === "medium"
        };
        return this.avatar ? (0, _lit.html)`<img class="${(0, _classMapJs.classMap)(e)}" src="${this.avatar}">` : this.address ? (m.generateAvatarColors(this.address), (0, _lit.html)`<div class="${(0, _classMapJs.classMap)(e)}">${this.loading ? (0, _lit.html)`<div class="w3m-loader"></div>` : null}</div>`) : null;
    }
};
Q.styles = [
    u.globalCss,
    lo
], be([
    (0, _decoratorsJs.state)()
], Q.prototype, "address", 2), be([
    (0, _decoratorsJs.state)()
], Q.prototype, "avatar", 2), be([
    (0, _decoratorsJs.state)()
], Q.prototype, "loading", 2), be([
    (0, _decoratorsJs.property)()
], Q.prototype, "size", 2), Q = be([
    (0, _decoratorsJs.customElement)("w3m-avatar")
], Q);
const ho = (0, _lit.css)`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
var mo = Object.defineProperty, po = Object.getOwnPropertyDescriptor, Ke = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? po(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && mo(t, o, a), a;
};
let we = class extends (0, _lit.LitElement) {
    constructor(){
        var e, t;
        super(), this.symbol = void 0, this.amount = void 0, this.unsubscribeAccount = void 0, this.symbol = (e = (0, _core.OptionsCtrl).state.balance) == null ? void 0 : e.symbol, this.amount = (t = (0, _core.OptionsCtrl).state.balance) == null ? void 0 : t.amount, this.unsubscribeAccount = (0, _core.OptionsCtrl).subscribe(({ balance: o  })=>{
            this.symbol = o?.symbol, this.amount = o?.amount;
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeAccount) == null || e.call(this);
    }
    render() {
        let e = "_._";
        return this.amount === "0.0" && (e = 0), this.amount && this.amount.length > 6 && (e = parseFloat(this.amount).toFixed(3)), (0, _lit.html)`<div><w3m-token-image symbol="${(0, _ifDefinedJs.ifDefined)(this.symbol)}"></w3m-token-image><w3m-text variant="medium-normal" color="primary">${e} ${this.symbol}</w3m-text></div>`;
    }
};
we.styles = [
    u.globalCss,
    ho
], Ke([
    (0, _decoratorsJs.state)()
], we.prototype, "symbol", 2), Ke([
    (0, _decoratorsJs.state)()
], we.prototype, "amount", 2), we = Ke([
    (0, _decoratorsJs.customElement)("w3m-balance")
], we);
const uo = (0, _lit.css)`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--color-fg-inverse)}button:disabled svg path{fill:var(--color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
var go = Object.defineProperty, vo = Object.getOwnPropertyDescriptor, je = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? vo(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && go(t, o, a), a;
};
let oe = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.loading = !1, this.label = "Connect Wallet", this.icon = "show", this.modalUnsub = void 0, m.rejectStandaloneButtonComponent(), this.modalUnsub = (0, _core.ModalCtrl).subscribe((e)=>{
            e.open && (this.loading = !0), e.open || (this.loading = !1);
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.modalUnsub) == null || e.call(this);
    }
    iconTemplate() {
        return this.icon === "show" ? w.WALLET_CONNECT_ICON : null;
    }
    onOpen() {
        this.loading = !0;
        const { enableNetworkView: e  } = (0, _core.ConfigCtrl).state, { chains: t , selectedChain: o  } = (0, _core.OptionsCtrl).state, n = t?.length && t.length > 1;
        e || n && !o ? (0, _core.ModalCtrl).open({
            route: "SelectNetwork"
        }) : (0, _core.ModalCtrl).open({
            route: "ConnectWallet"
        });
    }
    render() {
        return (0, _lit.html)`<w3m-button-big .disabled="${this.loading}" @click="${this.onOpen}">${this.loading ? (0, _lit.html)`<w3m-spinner></w3m-spinner><w3m-text variant="medium-normal" color="accent">Connecting...</w3m-text>` : (0, _lit.html)`${this.iconTemplate()}<w3m-text variant="medium-normal" color="inverse">${this.label}</w3m-text>`}</w3m-button-big>`;
    }
};
oe.styles = [
    u.globalCss,
    uo
], je([
    (0, _decoratorsJs.state)()
], oe.prototype, "loading", 2), je([
    (0, _decoratorsJs.property)()
], oe.prototype, "label", 2), je([
    (0, _decoratorsJs.property)()
], oe.prototype, "icon", 2), oe = je([
    (0, _decoratorsJs.customElement)("w3m-connect-button")
], oe);
var bo = Object.defineProperty, wo = Object.getOwnPropertyDescriptor, fe = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? wo(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && bo(t, o, a), a;
};
let ne = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.isConnected = !1, this.label = "Connect Wallet", this.icon = "show", this.balance = "hide", this.unsubscribeAccount = void 0, m.rejectStandaloneButtonComponent(), this.isConnected = (0, _core.OptionsCtrl).state.isConnected, this.unsubscribeAccount = (0, _core.OptionsCtrl).subscribe(({ isConnected: e  })=>{
            this.isConnected = e;
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeAccount) == null || e.call(this);
    }
    render() {
        return this.isConnected ? (0, _lit.html)`<w3m-account-button balance="${(0, _ifDefinedJs.ifDefined)(this.balance)}"></w3m-account-button>` : (0, _lit.html)`<w3m-connect-button label="${(0, _ifDefinedJs.ifDefined)(this.label)}" icon="${(0, _ifDefinedJs.ifDefined)(this.icon)}"></w3m-connect-button>`;
    }
};
fe([
    (0, _decoratorsJs.state)()
], ne.prototype, "isConnected", 2), fe([
    (0, _decoratorsJs.property)()
], ne.prototype, "label", 2), fe([
    (0, _decoratorsJs.property)()
], ne.prototype, "icon", 2), fe([
    (0, _decoratorsJs.property)()
], ne.prototype, "balance", 2), ne = fe([
    (0, _decoratorsJs.customElement)("w3m-core-button")
], ne);
const B = {
    allowedExplorerListings (e) {
        const { explorerAllowList: t , explorerDenyList: o  } = (0, _core.ConfigCtrl).state;
        let n = [
            ...e
        ];
        return t != null && t.length && (n = n.filter((a)=>t.includes(a.id))), o != null && o.length && (n = n.filter((a)=>!o.includes(a.id))), n;
    },
    walletsWithInjected (e) {
        let t = [
            ...e ?? []
        ];
        if (window.ethereum) {
            const o = m.getWalletName("");
            t = t.filter(({ name: n  })=>!m.caseSafeIncludes(n, o));
        }
        return t;
    },
    connectorWallets () {
        const { isStandalone: e  } = (0, _core.OptionsCtrl).state;
        if (e) return [];
        let t = (0, _core.ClientCtrl).client().getConnectors();
        return !window.ethereum && (0, _core.CoreUtil).isMobile() && (t = t.filter(({ id: o  })=>o !== "injected" && o !== Z.metaMask)), t;
    },
    walletTemplatesWithRecent (e, t) {
        let o = [
            ...e
        ];
        if (t) {
            const n = m.getRecentWallet();
            o = o.filter((a)=>!a.values.includes(n?.name)), o.splice(1, 0, t);
        }
        return o;
    },
    deduplicateExplorerListingsFromConnectors (e) {
        const { isStandalone: t  } = (0, _core.OptionsCtrl).state;
        if (t) return e;
        const o = (0, _core.ClientCtrl).client().getConnectors().map(({ name: n  })=>n.toUpperCase());
        return e.filter(({ name: n  })=>!o.includes(n.toUpperCase()));
    }
}, fo = (0, _lit.css)`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--color-fg-accent)}`;
var yo = Object.defineProperty, xo = Object.getOwnPropertyDescriptor, Co = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? xo(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && yo(t, o, a), a;
};
let Ye = class extends (0, _lit.LitElement) {
    onDesktopWallet(e) {
        (0, _core.RouterCtrl).push("DesktopConnector", {
            DesktopConnector: e
        });
    }
    onInjectedWallet() {
        (0, _core.RouterCtrl).push("InjectedConnector");
    }
    onInstallConnector() {
        (0, _core.RouterCtrl).push("InstallConnector", {
            InstallConnector: {
                id: "metaMask",
                name: "MetaMask",
                isMobile: !0,
                url: "https://metamask.io"
            }
        });
    }
    async onConnectorWallet(e) {
        window.ethereum ? e === "injected" || e === Z.metaMask ? this.onInjectedWallet() : await m.handleConnectorConnection(e) : this.onInstallConnector();
    }
    desktopWalletsTemplate() {
        const { desktopWallets: e  } = (0, _core.ConfigCtrl).state;
        return e?.map(({ id: t , name: o , links: { universal: n , native: a  }  })=>(0, _lit.html)`<w3m-wallet-button walletId="${t}" name="${o}" .onClick="${()=>this.onDesktopWallet({
                    name: o,
                    walletId: t,
                    universal: n,
                    native: a
                })}"></w3m-wallet-button>`);
    }
    previewWalletsTemplate() {
        let e = B.allowedExplorerListings((0, _core.ExplorerCtrl).state.previewWallets);
        return e = B.deduplicateExplorerListingsFromConnectors(e), e.map(({ name: t , desktop: { universal: o , native: n  } , homepage: a , image_url: r , id: i  })=>(0, _lit.html)`<w3m-wallet-button src="${r.lg}" name="${t}" .onClick="${()=>this.onDesktopWallet({
                    walletId: i,
                    name: t,
                    native: n,
                    universal: o || a,
                    icon: r.lg
                })}"></w3m-wallet-button>`);
    }
    connectorWalletsTemplate() {
        return B.connectorWallets().map(({ id: e , name: t , ready: o  })=>(0, _lit.html)`<w3m-wallet-button .installed="${[
                "injected",
                "metaMask"
            ].includes(e) && o}" name="${t}" walletId="${e}" .onClick="${async ()=>this.onConnectorWallet(e)}"></w3m-wallet-button>`);
    }
    recentWalletTemplate() {
        const e = m.getRecentWallet();
        if (!e) return;
        const { id: t , name: o , links: n , image: a  } = e;
        return (0, _lit.html)`<w3m-wallet-button .recent="${!0}" name="${o}" walletId="${(0, _ifDefinedJs.ifDefined)(t)}" src="${(0, _ifDefinedJs.ifDefined)(a)}" .onClick="${()=>this.onDesktopWallet({
                name: o,
                walletId: t,
                universal: n?.universal,
                native: n?.native,
                icon: a
            })}"></w3m-wallet-button>`;
    }
    render() {
        const { standaloneUri: e  } = (0, _core.OptionsCtrl).state, t = this.desktopWalletsTemplate(), o = this.previewWalletsTemplate(), n = this.connectorWalletsTemplate(), a = this.recentWalletTemplate(), r = t ?? o;
        let i = [
            ...n,
            ...r
        ];
        i = B.walletTemplatesWithRecent(i, a);
        const c = e ? r : i, h = c.length > 4;
        let s = [];
        h ? s = c.filter((g)=>!g.values.includes(Z.coinbaseWallet)).slice(0, 3) : s = c;
        const d = Boolean(s.length);
        return (0, _lit.html)`<w3m-modal-header border="${!0}" title="Connect your wallet" .onAction="${m.handleUriCopy}" .actionIcon="${w.COPY_ICON}"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${w.MOBILE_ICON}<w3m-text variant="small-normal" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${w.SCAN_ICON}<w3m-text variant="small-normal" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${d ? (0, _lit.html)`<w3m-modal-footer><div class="w3m-desktop-title">${w.DESKTOP_ICON}<w3m-text variant="small-normal" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${s} ${h ? (0, _lit.html)`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>` : null}</div></w3m-modal-footer>` : null}`;
    }
};
Ye.styles = [
    u.globalCss,
    fo
], Ye = Co([
    (0, _decoratorsJs.customElement)("w3m-desktop-wallet-selection")
], Ye);
const ko = (0, _lit.css)`div{background-color:var(--color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--color-bg-3);text-align:center}a{color:var(--color-fg-accent);text-decoration:none;transition:opacity .2s ease-in-out}a:hover{opacity:.8}`;
var $o = Object.defineProperty, Oo = Object.getOwnPropertyDescriptor, Io = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Oo(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && $o(t, o, a), a;
};
let Qe = class extends (0, _lit.LitElement) {
    render() {
        const { termsOfServiceUrl: e , privacyPolicyUrl: t  } = (0, _core.ConfigCtrl).state;
        return e ?? t ? (0, _lit.html)`<div><w3m-text variant="small-normal" color="secondary">By connecting your wallet, you agree to our<br>${e ? (0, _lit.html)`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e && t ? "and" : null} ${t ? (0, _lit.html)`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</w3m-text></div>` : null;
    }
};
Qe.styles = [
    u.globalCss,
    ko
], Qe = Io([
    (0, _decoratorsJs.customElement)("w3m-legal-notice")
], Qe);
const Eo = (0, _lit.css)`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var Mo = Object.defineProperty, Wo = Object.getOwnPropertyDescriptor, jo = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Wo(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Mo(t, o, a), a;
};
let Xe = class extends (0, _lit.LitElement) {
    onGoToQrcode() {
        (0, _core.RouterCtrl).push("Qrcode");
    }
    async onConnectorWallet(e) {
        await m.handleConnectorConnection(e);
    }
    mobileWalletsTemplate() {
        const { mobileWallets: e  } = (0, _core.ConfigCtrl).state, t = B.walletsWithInjected(e);
        if (t.length) return t.map(({ id: o , name: n , links: { universal: a , native: r  }  })=>(0, _lit.html)`<w3m-wallet-button name="${n}" walletId="${o}" .onClick="${async ()=>m.handleMobileLinking({
                    links: {
                        native: r,
                        universal: a
                    },
                    name: n,
                    id: o
                })}"></w3m-wallet-button>`);
    }
    previewWalletsTemplate() {
        const { previewWallets: e  } = (0, _core.ExplorerCtrl).state;
        let t = B.walletsWithInjected(e);
        return t = B.allowedExplorerListings(t), t = B.deduplicateExplorerListingsFromConnectors(t), t.map(({ image_url: o , name: n , mobile: { native: a , universal: r  } , id: i  })=>(0, _lit.html)`<w3m-wallet-button name="${n}" src="${o.lg}" .onClick="${async ()=>m.handleMobileLinking({
                    links: {
                        native: a,
                        universal: r
                    },
                    name: n,
                    id: i,
                    image: o.lg
                })}"></w3m-wallet-button>`);
    }
    connectorWalletsTemplate() {
        let e = B.connectorWallets();
        return window.ethereum || (e = e.filter(({ id: t  })=>t !== "injected" && t !== Z.metaMask)), e.map(({ name: t , id: o , ready: n  })=>(0, _lit.html)`<w3m-wallet-button .installed="${[
                "injected",
                "metaMask"
            ].includes(o) && n}" name="${t}" walletId="${o}" .onClick="${async ()=>this.onConnectorWallet(o)}"></w3m-wallet-button>`);
    }
    recentWalletTemplate() {
        const e = m.getRecentWallet();
        if (!e) return;
        const { id: t , name: o , links: n , image: a  } = e;
        return (0, _lit.html)`<w3m-wallet-button .recent="${!0}" name="${o}" walletId="${(0, _ifDefinedJs.ifDefined)(t)}" src="${(0, _ifDefinedJs.ifDefined)(a)}" .onClick="${async ()=>m.handleMobileLinking({
                name: o,
                id: t,
                links: n,
                image: a
            })}"></w3m-wallet-button>`;
    }
    render() {
        const { standaloneUri: e  } = (0, _core.OptionsCtrl).state, t = this.connectorWalletsTemplate(), o = this.mobileWalletsTemplate(), n = this.previewWalletsTemplate(), a = this.recentWalletTemplate(), r = o ?? n;
        let i = [
            ...t,
            ...r
        ];
        i = B.walletTemplatesWithRecent(i, a);
        const c = e ? r : i, h = c.length > 8;
        let s = [];
        h ? s = c.filter((A)=>!A.values.includes(Z.coinbaseWallet)).slice(0, 7) : s = c;
        const d = s.slice(0, 4), g = s.slice(4, 8), C = Boolean(s.length);
        return (0, _lit.html)`<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${w.QRCODE_ICON}"></w3m-modal-header>${C ? (0, _lit.html)`<w3m-modal-content><div class="w3m-grid">${d} ${g.length ? (0, _lit.html)`${g} ${h ? (0, _lit.html)`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>` : null}` : null}</div></w3m-modal-content>` : null}`;
    }
};
Xe.styles = [
    u.globalCss,
    Eo
], Xe = jo([
    (0, _decoratorsJs.customElement)("w3m-mobile-wallet-selection")
], Xe);
const Lo = (0, _lit.css)`:host{all:initial}.w3m-overlay{inset:0;position:fixed;z-index:var(--modal-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}.w3m-open{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0}.w3m-card{width:100%;position:relative;transform:translateY(5px);border-radius:30px;overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--color-overlay);background-color:var(--color-bg-1);color:var(--color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{transform:translateY(5px);border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}`;
var Ao = Object.defineProperty, Po = Object.getOwnPropertyDescriptor, Le = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Po(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Ao(t, o, a), a;
};
let re = class extends (0, _lit.LitElement) {
    constructor(){
        if (super(), this.open = !1, this.preload = !0, this.activeChainId = void 0, this.unsubscribeModal = void 0, this.unsubscribeConfig = void 0, this.unwatchAccount = void 0, this.unwatchNetwork = void 0, this.abortController = void 0, u.setTheme(), this.unsubscribeConfig = (0, _core.ConfigCtrl).subscribe(u.setTheme), this.unsubscribeModal = (0, _core.ModalCtrl).subscribe((e)=>{
            e.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
        }), !(0, _core.OptionsCtrl).state.isStandalone) {
            (0, _core.OptionsCtrl).getAccount();
            const e = (0, _core.OptionsCtrl).getSelectedChain();
            this.activeChainId = e?.id, this.fetchEnsProfile(), this.fetchBalance(), this.unwatchNetwork = (0, _core.ClientCtrl).client().watchNetwork((t)=>{
                const o = t.chain;
                o && this.activeChainId !== o.id && ((0, _core.OptionsCtrl).setSelectedChain(o), this.activeChainId = o.id, (0, _core.OptionsCtrl).resetBalance(), this.fetchBalance());
            }), this.unwatchAccount = (0, _core.ClientCtrl).client().watchAccount((t)=>{
                const { address: o  } = (0, _core.OptionsCtrl).state;
                t.address !== o && (this.fetchEnsProfile(t.address), this.fetchBalance(t.address)), (0, _core.OptionsCtrl).setAddress(t.address), (0, _core.OptionsCtrl).setIsConnected(t.isConnected);
            });
        }
        this.preloadModalData();
    }
    disconnectedCallback() {
        var e, t, o, n;
        (e = this.unsubscribeModal) == null || e.call(this), (t = this.unsubscribeConfig) == null || t.call(this), (o = this.unwatchAccount) == null || o.call(this), (n = this.unwatchNetwork) == null || n.call(this);
    }
    get overlayEl() {
        return m.getShadowRootElement(this, ".w3m-overlay");
    }
    get containerEl() {
        return m.getShadowRootElement(this, ".w3m-container");
    }
    async fetchEnsProfile(e) {
        try {
            (0, _core.OptionsCtrl).setProfileLoading(!0);
            const t = e ?? (0, _core.OptionsCtrl).state.address, { id: o  } = (0, _core.ClientCtrl).client().getDefaultChain();
            if (t && o === 1) {
                const [n, a] = await Promise.all([
                    (0, _core.ClientCtrl).client().fetchEnsName({
                        address: t,
                        chainId: 1
                    }),
                    (0, _core.ClientCtrl).client().fetchEnsAvatar({
                        address: t,
                        chainId: 1
                    })
                ]);
                a && await m.preloadImage(a), (0, _core.OptionsCtrl).setProfileName(n), (0, _core.OptionsCtrl).setProfileAvatar(a);
            }
        } catch (t) {
            (0, _core.ToastCtrl).openToast(m.getErrorMessage(t), "error");
        } finally{
            (0, _core.OptionsCtrl).setProfileLoading(!1);
        }
    }
    async fetchBalance(e) {
        try {
            (0, _core.OptionsCtrl).setBalanceLoading(!0);
            const t = e ?? (0, _core.OptionsCtrl).state.address;
            if (t) {
                const o = await (0, _core.ClientCtrl).client().fetchBalance({
                    address: t
                });
                (0, _core.OptionsCtrl).setBalance({
                    amount: o.formatted,
                    symbol: o.symbol
                });
            }
        } catch (t) {
            (0, _core.ToastCtrl).openToast(m.getErrorMessage(t), "error");
        } finally{
            (0, _core.OptionsCtrl).setBalanceLoading(!1);
        }
    }
    toggleBodyScroll(e) {
        if (document.querySelector("body")) {
            if (e) {
                const t = document.getElementById("w3m-styles");
                t?.remove();
            } else document.head.insertAdjacentHTML("beforeend", '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>');
        }
    }
    async preloadExplorerData() {
        var e;
        const { standaloneChains: t , chains: o , isExplorer: n  } = (0, _core.OptionsCtrl).state;
        if (n) {
            const a = t?.join(",");
            await Promise.all([
                (0, _core.ExplorerCtrl).getPreviewWallets({
                    page: 1,
                    entries: 10,
                    chains: a,
                    device: (0, _core.CoreUtil).isMobile() ? "mobile" : "desktop",
                    version: (0, _core.CoreUtil).getWalletConnectVersion()
                }),
                (0, _core.ExplorerCtrl).getRecomendedWallets()
            ]), (0, _core.OptionsCtrl).setIsDataLoaded(!0);
            const { previewWallets: r , recomendedWallets: i  } = (0, _core.ExplorerCtrl).state, c = (e = o?.map((s)=>m.getChainIcon(s.id))) != null ? e : [], h = [
                ...r,
                ...i
            ].map((s)=>s.image_url.lg);
            await this.preloadExplorerImages([
                ...c,
                ...h
            ]);
        } else (0, _core.OptionsCtrl).setIsDataLoaded(!0);
    }
    async preloadExplorerImages(e) {
        e.length && await Promise.all(e.map(async (t)=>m.preloadImage(t)));
    }
    async preloadCustomImages() {
        const e = m.getCustomImageUrls();
        e.length && await Promise.all(e.map(async (t)=>m.preloadImage(t)));
    }
    async preloadConnectorImages() {
        const e = m.getConnectorImageUrls();
        e.length && await Promise.all(e.map(async (t)=>m.preloadImage(t)));
    }
    async preloadModalData() {
        try {
            this.preload && (this.preload = !1, await Promise.all([
                this.preloadExplorerData(),
                this.preloadCustomImages(),
                this.preloadConnectorImages()
            ]));
        } catch  {
            (0, _core.ToastCtrl).openToast("Failed preloading", "error");
        }
    }
    onCloseModal(e) {
        e.target === e.currentTarget && (0, _core.ModalCtrl).close();
    }
    async onOpenModalEvent() {
        await this.preloadModalData(), this.toggleBodyScroll(!1);
        const e = .2;
        await (0, _motion.animate)(this.containerEl, {
            y: 0
        }, {
            duration: 0
        }).finished, (0, _motion.animate)(this.overlayEl, {
            opacity: [
                0,
                1
            ]
        }, {
            duration: .2,
            delay: e
        }), (0, _motion.animate)(this.containerEl, m.isMobileAnimation() ? {
            y: [
                "50vh",
                0
            ]
        } : {
            scale: [
                .98,
                1
            ]
        }, {
            scale: {
                easing: (0, _motion.spring)({
                    velocity: .4
                })
            },
            y: {
                easing: (0, _motion.spring)({
                    mass: .5
                })
            },
            delay: e
        }), this.addKeyboardEvents(), this.open = !0;
    }
    async onCloseModalEvent() {
        this.toggleBodyScroll(!0), this.removeKeyboardEvents(), await Promise.all([
            (0, _motion.animate)(this.containerEl, m.isMobileAnimation() ? {
                y: [
                    0,
                    "50vh"
                ]
            } : {
                scale: [
                    1,
                    .98
                ]
            }, {
                scale: {
                    easing: (0, _motion.spring)({
                        velocity: 0
                    })
                },
                y: {
                    easing: (0, _motion.spring)({
                        mass: .5
                    })
                }
            }).finished,
            (0, _motion.animate)(this.overlayEl, {
                opacity: [
                    1,
                    0
                ]
            }, {
                duration: .2
            }).finished
        ]), this.open = !1;
    }
    addKeyboardEvents() {
        this.abortController = new AbortController, window.addEventListener("keydown", (e)=>{
            var t;
            e.key === "Escape" ? (0, _core.ModalCtrl).close() : e.key === "Tab" && ((t = e.target) != null && t.tagName.includes("W3M-") || this.containerEl.focus());
        }, this.abortController), this.containerEl.focus();
    }
    removeKeyboardEvents() {
        var e;
        (e = this.abortController) == null || e.abort(), this.abortController = void 0;
    }
    render() {
        const e = {
            "w3m-overlay": !0,
            "w3m-open": this.open
        };
        return (0, _lit.html)`<div id="w3m-modal" class="${(0, _classMapJs.classMap)(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${this.open ? (0, _lit.html)`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>` : null}</div></div>`;
    }
};
re.styles = [
    u.globalCss,
    Lo
], Le([
    (0, _decoratorsJs.state)()
], re.prototype, "open", 2), Le([
    (0, _decoratorsJs.state)()
], re.prototype, "preload", 2), Le([
    (0, _decoratorsJs.state)()
], re.prototype, "activeChainId", 2), re = Le([
    (0, _decoratorsJs.customElement)("w3m-modal")
], re);
const So = (0, _lit.css)`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
var _o = Object.defineProperty, Do = Object.getOwnPropertyDescriptor, Ae = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Do(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && _o(t, o, a), a;
};
let ie = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.chainId = "", this.label = "", this.wrongNetwork = !1, this.unsubscribeNetwork = void 0, m.rejectStandaloneButtonComponent();
        const { selectedChain: e  } = (0, _core.OptionsCtrl).state;
        this.onSetChainData(e), this.unsubscribeNetwork = (0, _core.OptionsCtrl).subscribe(({ selectedChain: t  })=>{
            this.onSetChainData(t);
        });
    }
    disconnectedCallback() {
        var e;
        (e = this.unsubscribeNetwork) == null || e.call(this);
    }
    onSetChainData(e) {
        if (e) {
            const { chains: t  } = (0, _core.OptionsCtrl).state, o = t?.map((n)=>n.id);
            this.chainId = e.id.toString(), this.wrongNetwork = !(o != null && o.includes(e.id)), this.label = this.wrongNetwork ? "Wrong Network" : e.name;
        }
    }
    onClick() {
        (0, _core.ModalCtrl).open({
            route: "SelectNetwork"
        });
    }
    render() {
        var e;
        const { chains: t  } = (0, _core.OptionsCtrl).state, o = t && t.length > 1;
        return (0, _lit.html)`<w3m-button-big @click="${this.onClick}" ?disabled="${!o}"><w3m-network-image chainId="${(0, _ifDefinedJs.ifDefined)(this.chainId)}"></w3m-network-image><w3m-text variant="medium-normal" color="inverse">${(e = this.label) != null && e.length ? this.label : "Select Network"}</w3m-text></w3m-button-big>`;
    }
};
ie.styles = [
    u.globalCss,
    So
], Ae([
    (0, _decoratorsJs.state)()
], ie.prototype, "chainId", 2), Ae([
    (0, _decoratorsJs.state)()
], ie.prototype, "label", 2), Ae([
    (0, _decoratorsJs.state)()
], ie.prototype, "wrongNetwork", 2), ie = Ae([
    (0, _decoratorsJs.customElement)("w3m-network-switch")
], ie);
const To = (0, _lit.css)`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:10px;transition:background-color .2s ease;height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:15px;justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--color-bg-2);box-shadow:inset 0 0 0 1px var(--color-overlay)}button:hover{background-color:var(--color-overlay)}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:8px;border:1px solid var(--color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--color-bg-3)}#wallet-placeholder-dash{stroke:var(--color-overlay)}`;
var No = Object.defineProperty, Ro = Object.getOwnPropertyDescriptor, Bo = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Ro(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && No(t, o, a), a;
};
let Je = class extends (0, _lit.LitElement) {
    onClick(e, t) {
        e ? (0, _core.RouterCtrl).push("WalletExplorer") : t && (0, _core.RouterCtrl).push("WalletFilter");
    }
    render() {
        const { previewWallets: e  } = (0, _core.ExplorerCtrl).state, t = m.getCustomWallets(), o = [
            ...e
        ].reverse().slice(0, 4), n = [
            ...t
        ].reverse().slice(0, 4), a = Boolean(o.length), r = Boolean(n.length);
        return (0, _lit.html)`<button @click="${()=>this.onClick(a, r)}"><div class="w3m-icons">${a ? o.map((i)=>(0, _lit.html)`<img src="${i.image_url.lg}">`) : null} ${r ? n.map((i)=>{
            const c = m.getWalletId(i.id), h = m.getWalletIcon(c);
            return h ? (0, _lit.html)`<img src="${h}">` : w.WALLET_PLACEHOLDER;
        }) : null}</div><w3m-text variant="xsmall-normal">View All</w3m-text></button>`;
    }
};
Je.styles = [
    u.globalCss,
    To
], Je = Bo([
    (0, _decoratorsJs.customElement)("w3m-view-all-wallets-button")
], Je);
const Uo = (0, _lit.css)`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var Ho = Object.defineProperty, Zo = Object.getOwnPropertyDescriptor, kt = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Zo(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Ho(t, o, a), a;
};
let Pe = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.uri = "", this.createConnectionAndWait();
    }
    get overlayEl() {
        return m.getShadowRootElement(this, ".w3m-qr-container");
    }
    async createConnectionAndWait(e = 0) {
        var t;
        try {
            const { standaloneUri: o  } = (0, _core.OptionsCtrl).state;
            o ? setTimeout(()=>this.uri = o, 0) : (await (0, _core.ClientCtrl).client().connectWalletConnect((n)=>this.uri = n, (t = (0, _core.OptionsCtrl).state.selectedChain) == null ? void 0 : t.id), (0, _core.ModalCtrl).close());
        } catch  {
            (0, _core.ToastCtrl).openToast("Connection request declined", "error"), e < 2 && this.createConnectionAndWait(e + 1);
        }
    }
    render() {
        return (0, _lit.html)`<div class="w3m-qr-container">${this.uri ? (0, _lit.html)`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}"></w3m-qrcode>` : (0, _lit.html)`<w3m-spinner></w3m-spinner>`}</div>`;
    }
};
Pe.styles = [
    u.globalCss,
    Uo
], kt([
    (0, _decoratorsJs.state)()
], Pe.prototype, "uri", 2), Pe = kt([
    (0, _decoratorsJs.customElement)("w3m-walletconnect-qr")
], Pe);
const Fo = (0, _lit.css)`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--color-bg-2);box-shadow:inset 0 0 0 1px var(--color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--color-success);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--color-success),inset 0 0 0 1px var(--color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--color-bg-2);padding:11px 20px}`;
var zo = Object.defineProperty, Vo = Object.getOwnPropertyDescriptor, Go = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Vo(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && zo(t, o, a), a;
};
let et = class extends (0, _lit.LitElement) {
    onDisconnect() {
        (0, _core.ModalCtrl).close(), (0, _core.ClientCtrl).client().disconnect(), (0, _core.OptionsCtrl).resetAccount();
    }
    async onCopyAddress() {
        var e;
        await navigator.clipboard.writeText((e = (0, _core.OptionsCtrl).state.address) != null ? e : ""), (0, _core.ToastCtrl).openToast("Address copied", "success");
    }
    render() {
        return (0, _lit.html)`<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-normal" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${w.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${w.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`;
    }
};
et.styles = [
    u.globalCss,
    Fo
], et = Go([
    (0, _decoratorsJs.customElement)("w3m-account-view")
], et);
var qo = Object.defineProperty, Ko = Object.getOwnPropertyDescriptor, Yo = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Ko(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && qo(t, o, a), a;
};
let tt = class extends (0, _lit.LitElement) {
    viewTemplate() {
        return (0, _core.CoreUtil).isAndroid() ? (0, _lit.html)`<w3m-android-wallet-selection></w3m-android-wallet-selection>` : (0, _core.CoreUtil).isMobile() ? (0, _lit.html)`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>` : (0, _lit.html)`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`;
    }
    render() {
        return (0, _lit.html)`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`;
    }
};
tt.styles = [
    u.globalCss
], tt = Yo([
    (0, _decoratorsJs.customElement)("w3m-connect-wallet-view")
], tt);
const Qo = (0, _lit.css)`.w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}.w3m-install-actions{display:flex}.w3m-install-actions w3m-button{margin:0 5px;opacity:1}`;
var Xo = Object.defineProperty, Jo = Object.getOwnPropertyDescriptor, $t = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Jo(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && Xo(t, o, a), a;
};
let Se = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.uri = "", this.createConnectionAndWait();
    }
    getRouterData() {
        var e;
        const t = (e = (0, _core.RouterCtrl).state.data) == null ? void 0 : e.DesktopConnector;
        if (!t) throw new Error("Missing router data");
        return t;
    }
    onFormatAndRedirect(e) {
        const { native: t , universal: o , name: n  } = this.getRouterData();
        if (t) {
            const a = (0, _core.CoreUtil).formatNativeUrl(t, e, n);
            (0, _core.CoreUtil).openHref(a);
        } else if (o) {
            const a = (0, _core.CoreUtil).formatUniversalUrl(o, e, n);
            (0, _core.CoreUtil).openHref(a, "_blank");
        }
    }
    async createConnectionAndWait(e = 0) {
        var t;
        const { standaloneUri: o  } = (0, _core.OptionsCtrl).state;
        if (o) this.onFormatAndRedirect(o);
        else try {
            await (0, _core.ClientCtrl).client().connectWalletConnect((h)=>{
                this.uri = h, this.onFormatAndRedirect(h);
            }, (t = (0, _core.OptionsCtrl).state.selectedChain) == null ? void 0 : t.id);
            const { name: n , walletId: a , native: r , universal: i , icon: c  } = this.getRouterData();
            m.setRecentWallet({
                name: n,
                id: a,
                links: {
                    native: r,
                    universal: i
                },
                image: c
            }), (0, _core.ModalCtrl).close();
        } catch  {
            (0, _core.ToastCtrl).openToast("Connection request declined", "error"), e < 2 && this.createConnectionAndWait(e + 1);
        }
    }
    onConnectWithMobile() {
        (0, _core.RouterCtrl).push("Qrcode");
    }
    onGoToWallet() {
        const { universal: e , name: t  } = this.getRouterData();
        if (e) {
            const o = (0, _core.CoreUtil).formatUniversalUrl(e, this.uri, t);
            (0, _core.CoreUtil).openHref(o, "_blank");
        }
    }
    render() {
        const { name: e , icon: t , universal: o , walletId: n  } = this.getRouterData(), a = m.getWalletName(e);
        return (0, _lit.html)`<w3m-modal-header title="${a}"></w3m-modal-header><w3m-modal-content><div class="w3m-wrapper">${t ? (0, _lit.html)`<w3m-wallet-image src="${t}" size="lg"></w3m-wallet-image>` : (0, _lit.html)`<w3m-wallet-image size="lg" walletid="${(0, _ifDefinedJs.ifDefined)(n)}"></w3m-wallet-image>`}<div class="w3m-connecting-title"><w3m-spinner></w3m-spinner><w3m-text variant="large-bold" color="secondary">${`Continue in ${a}...`}</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="${async ()=>this.createConnectionAndWait()}" .iconRight="${w.RETRY_ICON}">Retry</w3m-button>${o ? (0, _lit.html)`<w3m-button .onClick="${this.onGoToWallet.bind(this)}" .iconLeft="${w.ARROW_UP_RIGHT_ICON}">Go to Wallet</w3m-button>` : (0, _lit.html)`<w3m-button .onClick="${this.onConnectWithMobile}" .iconLeft="${w.MOBILE_ICON}">Connect with Mobile</w3m-button>`}</div></div></w3m-modal-content>`;
    }
};
Se.styles = [
    u.globalCss,
    Qo
], $t([
    (0, _decoratorsJs.state)()
], Se.prototype, "uri", 2), Se = $t([
    (0, _decoratorsJs.customElement)("w3m-desktop-connector-view")
], Se);
const en = (0, _lit.css)`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
var tn = Object.defineProperty, an = Object.getOwnPropertyDescriptor, on = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? an(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && tn(t, o, a), a;
};
let at = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.explorerUrl = "https://explorer.walletconnect.com/";
    }
    onGet(e) {
        (0, _core.CoreUtil).openHref(e, "_blank");
    }
    onExplore() {
        (0, _core.CoreUtil).openHref(this.explorerUrl, "_blank");
    }
    render() {
        const { recomendedWallets: e  } = (0, _core.ExplorerCtrl).state, t = m.getCustomWallets().slice(0, 6), o = e.length, n = t.length;
        return (0, _lit.html)`<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${o ? e.map(({ name: a , image_url: r , homepage: i  })=>(0, _lit.html)`<div class="w3m-wallet-item"><w3m-wallet-image src="${r.lg}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">${a}</w3m-text><w3m-button .iconRight="${w.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(i)}">Get</w3m-button></div></div>`) : null} ${n ? t.map(({ name: a , id: r , links: i  })=>(0, _lit.html)`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${r}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">${a}</w3m-text><w3m-button .iconRight="${w.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(i.universal)}">Get</w3m-button></div></div>`) : null}</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-normal">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${this.onExplore.bind(this)}" .iconRight="${w.ARROW_UP_RIGHT_ICON}">Explore Wallets</w3m-button></div>`;
    }
};
at.styles = [
    u.globalCss,
    en
], at = on([
    (0, _decoratorsJs.customElement)("w3m-get-wallet-view")
], at);
const nn = (0, _lit.css)`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--color-overlay)}`;
var rn = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, sn = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? ln(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && rn(t, o, a), a;
};
let ot = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.learnUrl = "https://ethereum.org/en/wallets/";
    }
    onGet() {
        (0, _core.RouterCtrl).push("GetWallet");
    }
    onLearnMore() {
        (0, _core.CoreUtil).openHref(this.learnUrl, "_blank");
    }
    render() {
        return (0, _lit.html)`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${w.HELP_CHART_IMG} ${w.HELP_PAINTING_IMG} ${w.HELP_ETH_IMG}</div><w3m-text variant="medium-normal">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${w.HELP_KEY_IMG} ${w.HELP_USER_IMG} ${w.HELP_LOCK_IMG}</div><w3m-text variant="medium-normal">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${w.HELP_COMPAS_IMG} ${w.HELP_NOUN_IMG} ${w.HELP_DAO_IMG}</div><w3m-text variant="medium-normal">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(this)}" .iconLeft="${w.WALLET_ICON}">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(this)}" .iconRight="${w.ARROW_UP_RIGHT_ICON}">Learn More</w3m-button></div></w3m-modal-content>`;
    }
};
ot.styles = [
    u.globalCss,
    nn
], ot = sn([
    (0, _decoratorsJs.customElement)("w3m-help-view")
], ot);
const cn = (0, _lit.css)`.w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:20px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-injected-error w3m-button{opacity:1}`;
var dn = Object.defineProperty, hn = Object.getOwnPropertyDescriptor, nt = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? hn(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && dn(t, o, a), a;
};
let ye = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.connecting = !0, this.error = !1, this.connector = (0, _core.ClientCtrl).client().getConnectorById("injected"), this.onConnect();
    }
    async onConnect() {
        const { ready: e  } = this.connector;
        e && (this.error = !1, this.connecting = !0, await m.handleConnectorConnection("injected", ()=>{
            this.error = !0, this.connecting = !1;
        }));
    }
    render() {
        const e = m.getWalletName(this.connector.name), t = m.getWalletId(this.connector.id), o = {
            "w3m-injected-wrapper": !0,
            "w3m-injected-error": this.error
        };
        return (0, _lit.html)`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><div class="${(0, _classMapJs.classMap)(o)}"><w3m-wallet-image walletId="${t}" size="lg"></w3m-wallet-image><div class="w3m-connecting-title">${this.connecting ? (0, _lit.html)`<w3m-spinner></w3m-spinner>` : null}<w3m-text variant="large-bold" color="${this.error ? "error" : "secondary"}">${this.error ? "Connection declined" : `Continue in ${e}...`}</w3m-text></div><w3m-button .onClick="${this.onConnect.bind(this)}" .disabled="${!this.error}" .iconRight="${w.RETRY_ICON}">Try Again</w3m-button></div></w3m-modal-content>`;
    }
};
ye.styles = [
    u.globalCss,
    cn
], nt([
    (0, _decoratorsJs.state)()
], ye.prototype, "connecting", 2), nt([
    (0, _decoratorsJs.state)()
], ye.prototype, "error", 2), ye = nt([
    (0, _decoratorsJs.customElement)("w3m-injected-connector-view")
], ye);
const mn = (0, _lit.css)`.w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}.w3m-install-title{display:flex;align-items:center;justify-content:center;flex-direction:column}.w3m-install-title w3m-text:last-child{margin-top:10px;max-width:240px}.w3m-install-actions{display:flex;margin-top:15px;align-items:center;flex-direction:column}@media(max-width:355px){.w3m-install-actions{flex-direction:column;align-items:center}}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-install-actions w3m-button{margin:5px;opacity:1}.w3m-info-text{text-align:center}`;
var pn = Object.defineProperty, un = Object.getOwnPropertyDescriptor, gn = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? un(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && pn(t, o, a), a;
};
let rt = class extends (0, _lit.LitElement) {
    getRouterData() {
        var e;
        const t = (e = (0, _core.RouterCtrl).state.data) == null ? void 0 : e.InstallConnector;
        if (!t) throw new Error("Missing router data");
        return t;
    }
    onInstall() {
        const { url: e  } = this.getRouterData();
        (0, _core.CoreUtil).openHref(e, "_blank");
    }
    onMobile() {
        const { name: e  } = this.getRouterData();
        (0, _core.RouterCtrl).push("ConnectWallet"), (0, _core.ToastCtrl).openToast(`Scan the code with ${e}`, "success");
    }
    render() {
        const { name: e , id: t , isMobile: o  } = this.getRouterData();
        return (0, _lit.html)`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><div class="w3m-injected-wrapper"><w3m-wallet-image walletId="${t}" size="lg"></w3m-wallet-image><div class="w3m-install-title"><w3m-text variant="large-bold">Install ${e}</w3m-text><w3m-text color="secondary" variant="medium-thin" class="w3m-info-text">To connect ${e}, install the browser extension.</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="${this.onInstall.bind(this)}" .iconLeft="${w.ARROW_DOWN_ICON}">Install Extension</w3m-button>${o ? (0, _lit.html)`<w3m-button .onClick="${this.onMobile.bind(this)}" .iconLeft="${w.MOBILE_ICON}">${e} Mobile</w3m-button>` : null}</div></div></w3m-modal-content>`;
    }
};
rt.styles = [
    u.globalCss,
    mn
], rt = gn([
    (0, _decoratorsJs.customElement)("w3m-install-connector-view")
], rt);
var vn = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, wn = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? bn(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && vn(t, o, a), a;
};
let it = class extends (0, _lit.LitElement) {
    render() {
        return (0, _lit.html)`<w3m-modal-header title="Scan the code" .onAction="${m.handleUriCopy}" .actionIcon="${w.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`;
    }
};
it.styles = [
    u.globalCss
], it = wn([
    (0, _decoratorsJs.customElement)("w3m-qrcode-view")
], it);
const fn = (0, _lit.css)`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}`;
var yn = Object.defineProperty, xn = Object.getOwnPropertyDescriptor, Cn = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? xn(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && yn(t, o, a), a;
};
let lt = class extends (0, _lit.LitElement) {
    onSelectChain(e) {
        const { isConnected: t , selectedChain: o  } = (0, _core.OptionsCtrl).state;
        t ? o?.id === e.id ? (0, _core.RouterCtrl).replace("Account") : (0, _core.RouterCtrl).push("SwitchNetwork", {
            SwitchNetwork: e
        }) : ((0, _core.RouterCtrl).push("ConnectWallet"), (0, _core.OptionsCtrl).setSelectedChain(e));
    }
    render() {
        const { chains: e  } = (0, _core.OptionsCtrl).state;
        return (0, _lit.html)`<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div class="w3m-grid">${e?.map((t)=>(0, _lit.html)`<w3m-network-button name="${t.name}" chainId="${t.id}" .onClick="${()=>this.onSelectChain(t)}">${t.name}</w3m-network-button>`)}</div></w3m-modal-content>`;
    }
};
lt.styles = [
    u.globalCss,
    fn
], lt = Cn([
    (0, _decoratorsJs.customElement)("w3m-select-network-view")
], lt);
const kn = (0, _lit.css)`.w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-network-image{width:96px;height:96px;margin-bottom:20px}w3m-button{opacity:0}.w3m-error w3m-button{opacity:1}`;
var $n = Object.defineProperty, On = Object.getOwnPropertyDescriptor, Ot = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? On(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && $n(t, o, a), a;
};
let _e = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.error = !1, this.onSwitchNetwork();
    }
    getRouterData() {
        var e;
        const t = (e = (0, _core.RouterCtrl).state.data) == null ? void 0 : e.SwitchNetwork;
        if (!t) throw new Error("Missing router data");
        return t;
    }
    async onSwitchNetwork() {
        try {
            this.error = !1;
            const e = this.getRouterData();
            await (0, _core.ClientCtrl).client().switchNetwork({
                chainId: e.id
            }), (0, _core.OptionsCtrl).setSelectedChain(e), (0, _core.RouterCtrl).replace("Account");
        } catch  {
            this.error = !0;
        }
    }
    render() {
        const { id: e , name: t  } = this.getRouterData(), o = {
            "w3m-wrapper": !0,
            "w3m-error": this.error
        };
        return (0, _lit.html)`<w3m-modal-header title="${`Connect to ${t}`}"></w3m-modal-header><w3m-modal-content><div class="${(0, _classMapJs.classMap)(o)}"><w3m-network-image chainId="${e}"></w3m-network-image><div class="w3m-connecting-title">${this.error ? null : (0, _lit.html)`<w3m-spinner></w3m-spinner>`}<w3m-text variant="large-bold" color="${this.error ? "error" : "secondary"}">${this.error ? "Connection declined" : "Approve in your wallet"}</w3m-text></div><w3m-button .onClick="${this.onSwitchNetwork.bind(this)}" .disabled="${!this.error}" .iconRight="${w.RETRY_ICON}">Try Again</w3m-button></div></w3m-modal-content>`;
    }
};
_e.styles = [
    u.globalCss,
    kn
], Ot([
    (0, _decoratorsJs.state)()
], _e.prototype, "error", 2), _e = Ot([
    (0, _decoratorsJs.customElement)("w3m-switch-network-view")
], _e);
const In = (0, _lit.css)`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--color-bg-1);background:linear-gradient(var(--color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var En = Object.defineProperty, Mn = Object.getOwnPropertyDescriptor, xe = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Mn(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && En(t, o, a), a;
};
const st = 40;
let X = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.loading = !(0, _core.ExplorerCtrl).state.wallets.listings.length, this.firstFetch = !(0, _core.ExplorerCtrl).state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = m.debounce((e)=>{
            e.length >= 3 ? (this.firstFetch = !0, this.endReached = !1, this.search = e, (0, _core.ExplorerCtrl).resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), (0, _core.ExplorerCtrl).resetSearch());
        });
    }
    firstUpdated() {
        this.createPaginationObserver();
    }
    disconnectedCallback() {
        var e;
        (e = this.intersectionObserver) == null || e.disconnect();
    }
    get placeholderEl() {
        return m.getShadowRootElement(this, ".w3m-placeholder-block");
    }
    createPaginationObserver() {
        this.intersectionObserver = new IntersectionObserver(([e])=>{
            e.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
        }), this.intersectionObserver.observe(this.placeholderEl);
    }
    isLastPage() {
        const { wallets: e , search: t  } = (0, _core.ExplorerCtrl).state, { listings: o , total: n  } = this.search ? t : e;
        return n <= st || o.length >= n;
    }
    async fetchWallets() {
        var e;
        const { wallets: t , search: o  } = (0, _core.ExplorerCtrl).state, n = m.getExtensionWallets(), { listings: a , total: r , page: i  } = this.search ? o : t;
        if (!this.endReached && (this.firstFetch || r > st && a.length < r)) try {
            this.loading = !0;
            const c = (e = (0, _core.OptionsCtrl).state.standaloneChains) == null ? void 0 : e.join(","), { listings: h  } = await (0, _core.ExplorerCtrl).getPaginatedWallets({
                page: this.firstFetch ? 1 : i + 1,
                entries: st,
                device: (0, _core.CoreUtil).isMobile() ? "mobile" : "desktop",
                search: this.search,
                version: (0, _core.CoreUtil).getWalletConnectVersion(),
                chains: c
            }), s = h.map(({ image_url: g  })=>g.lg), d = n.map(({ id: g  })=>m.getWalletIcon(g));
            await Promise.all([
                ...s.map(async (g)=>m.preloadImage(g)),
                ...d.map(async (g)=>m.preloadImage(g)),
                (0, _core.CoreUtil).wait(300)
            ]), this.endReached = this.isLastPage();
        } catch (c) {
            (0, _core.ToastCtrl).openToast(m.getErrorMessage(c), "error");
        } finally{
            this.loading = !1, this.firstFetch = !1;
        }
    }
    async onConnectPlatform(e) {
        if ((0, _core.CoreUtil).isMobile()) {
            const { id: t , image_url: o  } = e, { native: n , universal: a  } = e.mobile;
            await m.handleMobileLinking({
                links: {
                    native: n,
                    universal: a
                },
                name: e.name,
                id: t,
                image: o.lg
            });
        } else (0, _core.RouterCtrl).push("DesktopConnector", {
            DesktopConnector: {
                name: e.name,
                icon: e.image_url.lg,
                universal: e.desktop.universal || e.homepage,
                native: e.desktop.native
            }
        });
    }
    onConnectExtension(e) {
        m.getWalletId("") === e.id ? (0, _core.RouterCtrl).push("InjectedConnector") : (0, _core.RouterCtrl).push("InstallConnector", {
            InstallConnector: e
        });
    }
    onSearchChange(e) {
        const { value: t  } = e.target;
        this.searchDebounce(t);
    }
    coinbaseConnectorTemplate() {
        try {
            const e = (0, _core.ClientCtrl).client().getConnectorById(Z.coinbaseWallet);
            return (0, _lit.html)`<w3m-wallet-button name="${e.name}" walletId="${e.id}" .onClick="${async ()=>m.handleConnectorConnection(Z.coinbaseWallet)}"></w3m-wallet-button>`;
        } catch  {
            return null;
        }
    }
    render() {
        const { wallets: e , search: t  } = (0, _core.ExplorerCtrl).state, { isStandalone: o  } = (0, _core.OptionsCtrl).state;
        let { listings: n  } = this.search ? t : e;
        n = B.allowedExplorerListings(n);
        const a = this.loading && !n.length, r = this.search.length >= 3, i = !a && (!r || m.caseSafeIncludes(Z.coinbaseWallet, this.search));
        let c = !o && !(0, _core.CoreUtil).isMobile() ? m.getExtensionWallets() : [];
        r && (c = c.filter(({ name: g  })=>m.caseSafeIncludes(g, this.search)));
        const h = !this.loading && !n.length && !c.length && !i, s = Math.max(c.length, n.length), d = {
            "w3m-loading": a,
            "w3m-end-reached": this.endReached || !this.loading,
            "w3m-empty": h
        };
        return (0, _lit.html)`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(this)}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${(0, _classMapJs.classMap)(d)}"><div class="w3m-grid">${a ? null : [
            ...Array(s)
        ].map((g, C)=>(0, _lit.html)`${c[C] ? (0, _lit.html)`<w3m-wallet-button name="${c[C].name}" walletId="${c[C].id}" .onClick="${()=>this.onConnectExtension(c[C])}"></w3m-wallet-button>` : null} ${n[C] ? (0, _lit.html)`<w3m-wallet-button src="${n[C].image_url.lg}" name="${n[C].name}" walletId="${n[C].id}" .onClick="${async ()=>this.onConnectPlatform(n[C])}"></w3m-wallet-button>` : null}`)} ${i ? this.coinbaseConnectorTemplate() : null}</div><div class="w3m-placeholder-block">${h ? (0, _lit.html)`<w3m-text variant="large-bold" color="secondary">No results found</w3m-text>` : null} ${!h && this.loading ? (0, _lit.html)`<w3m-spinner></w3m-spinner>` : null}</div></w3m-modal-content>`;
    }
};
X.styles = [
    u.globalCss,
    In
], xe([
    (0, _decoratorsJs.state)()
], X.prototype, "loading", 2), xe([
    (0, _decoratorsJs.state)()
], X.prototype, "firstFetch", 2), xe([
    (0, _decoratorsJs.state)()
], X.prototype, "search", 2), xe([
    (0, _decoratorsJs.state)()
], X.prototype, "endReached", 2), X = xe([
    (0, _decoratorsJs.customElement)("w3m-wallet-explorer-view")
], X);
const Wn = (0, _lit.css)`w3m-modal-content{display:flex;max-height:55vh;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--color-bg-1);background:linear-gradient(var(--color-bg-1),transparent)}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--color-bg-1);background:linear-gradient(transparent,var(--color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var jn = Object.defineProperty, Ln = Object.getOwnPropertyDescriptor, It = (e, t, o, n)=>{
    for(var a = n > 1 ? void 0 : n ? Ln(t, o) : t, r = e.length - 1, i; r >= 0; r--)(i = e[r]) && (a = (n ? i(t, o, a) : i(a)) || a);
    return n && a && jn(t, o, a), a;
};
let De = class extends (0, _lit.LitElement) {
    constructor(){
        super(...arguments), this.search = "";
    }
    async onConnectPlatform({ name: e , universal: t , native: o , walletId: n  }) {
        (0, _core.CoreUtil).isMobile() ? await m.handleMobileLinking({
            links: {
                native: o,
                universal: t
            },
            name: e,
            id: n
        }) : (0, _core.RouterCtrl).push("DesktopConnector", {
            DesktopConnector: {
                name: e,
                walletId: n,
                universal: t,
                native: o
            }
        });
    }
    onSearchChange(e) {
        const { value: t  } = e.target;
        this.search = t;
    }
    render() {
        const e = m.getCustomWallets(), t = this.search.length ? e.filter((o)=>m.caseSafeIncludes(o.name, this.search)) : e;
        return (0, _lit.html)`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(this)}"></w3m-search-input></w3m-modal-header><w3m-modal-content><div class="w3m-grid">${t.map(({ id: o , name: n , links: { native: a , universal: r  }  })=>(0, _lit.html)`<w3m-wallet-button walletId="${o}" name="${n}" .onClick="${async ()=>this.onConnectPlatform({
                    name: n,
                    universal: r,
                    native: a,
                    walletId: o
                })}"></w3m-wallet-button>`)}</div></w3m-modal-content>`;
    }
};
De.styles = [
    u.globalCss,
    Wn
], It([
    (0, _decoratorsJs.state)()
], De.prototype, "search", 2), De = It([
    (0, _decoratorsJs.customElement)("w3m-wallet-filter-view")
], De);

},{"lit":"4antt","lit/decorators.js":"bCPKi","@web3modal/core":"7c76x","lit/directives/class-map.js":"jiVKL","lit-html":"1cmQt","motion":"aqnbF","lit/directives/if-defined.js":"77RTn","qrcode":"lB7MY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4antt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","lit-element/lit-element.js":"9YxkX","lit-html/is-server.js":"e2OXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hypet":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>d);
parcelHelpers.export(exports, "defaultConverter", ()=>n);
parcelHelpers.export(exports, "notEqual", ()=>a);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s;
const e = window, r = e.trustedTypes, h = r ? r.emptyScript : "", o = e.reactiveElementPolyfillSupport, n = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, a = (t, i)=>i !== t && (i == i || t == t), l = {
    attribute: !0,
    type: String,
    converter: n,
    reflect: !1,
    hasChanged: a
};
class d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || l;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, _cssTagJs.getCompatibleStyle)(i));
        } else void 0 !== i && s.push((0, _cssTagJs.getCompatibleStyle)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : n;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
d.finalized = !0, d.elementProperties = new Map, d.elementStyles = [], d.shadowRootOptions = {
    mode: "open"
}, null == o || o({
    ReactiveElement: d
}), (null !== (s = e.reactiveElementVersions) && void 0 !== s ? s : e.reactiveElementVersions = []).push("1.6.1");

},{"./css-tag.js":"gkZsf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkZsf":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>o);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = window, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), n = new WeakMap;
class o {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new o("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new o(n, t, s);
}, S = (s, n)=>{
    e ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cmQt":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>L);
parcelHelpers.export(exports, "html", ()=>y);
parcelHelpers.export(exports, "noChange", ()=>x);
parcelHelpers.export(exports, "nothing", ()=>b);
parcelHelpers.export(exports, "render", ()=>Z);
parcelHelpers.export(exports, "svg", ()=>w);
var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, o = `lit$${(Math.random() + "").slice(9)}$`, n = "?" + o, l = `<${n}>`, h = document, r = (t = "")=>h.createComment(t), d = (t)=>null === t || "object" != typeof t && "function" != typeof t, u = Array.isArray, c = (t)=>u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, a = /-->/g, f = />/g, _ = RegExp(">|[ 	\n\f\r](?:([^\\s\"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), m = /'/g, p = /"/g, $ = /^(?:script|style|textarea|title)$/i, g = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), y = g(1), w = g(2), x = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), T = new WeakMap, A = h.createTreeWalker(h, 129, null, !1), E = (t, i)=>{
    const s = t.length - 1, n = [];
    let h, r = 2 === i ? "<svg>" : "", d = v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let e, u, c = -1, g = 0;
        for(; g < s.length && (d.lastIndex = g, u = d.exec(s), null !== u);)g = d.lastIndex, d === v ? "!--" === u[1] ? d = a : void 0 !== u[1] ? d = f : void 0 !== u[2] ? ($.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = _) : void 0 !== u[3] && (d = _) : d === _ ? ">" === u[0] ? (d = null != h ? h : v, c = -1) : void 0 === u[1] ? c = -2 : (c = d.lastIndex - u[2].length, e = u[1], d = void 0 === u[3] ? _ : '"' === u[3] ? p : m) : d === p || d === m ? d = _ : d === a || d === f ? d = v : (d = _, h = void 0);
        const y = d === _ && t[i + 1].startsWith("/>") ? " " : "";
        r += d === v ? s + l : c >= 0 ? (n.push(e), s.slice(0, c) + "$lit$" + s.slice(c) + o + y) : s + o + (-2 === c ? (n.push(void 0), i) : y);
    }
    const u = r + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== e ? e.createHTML(u) : u,
        n
    ];
};
class C {
    constructor({ strings: t , _$litType$: i  }, e){
        let l;
        this.parts = [];
        let h = 0, d = 0;
        const u = t.length - 1, c = this.parts, [v, a] = E(t, i);
        if (this.el = C.createElement(v, e), A.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (l = A.nextNode()) && c.length < u;){
            if (1 === l.nodeType) {
                if (l.hasAttributes()) {
                    const t = [];
                    for (const i of l.getAttributeNames())if (i.endsWith("$lit$") || i.startsWith(o)) {
                        const s = a[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = l.getAttribute(s.toLowerCase() + "$lit$").split(o), i = /([.?@])?(.*)/.exec(s);
                            c.push({
                                type: 1,
                                index: h,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? M : "?" === i[1] ? k : "@" === i[1] ? H : S
                            });
                        } else c.push({
                            type: 6,
                            index: h
                        });
                    }
                    for (const i of t)l.removeAttribute(i);
                }
                if ($.test(l.tagName)) {
                    const t = l.textContent.split(o), i = t.length - 1;
                    if (i > 0) {
                        l.textContent = s ? s.emptyScript : "";
                        for(let s = 0; s < i; s++)l.append(t[s], r()), A.nextNode(), c.push({
                            type: 2,
                            index: ++h
                        });
                        l.append(t[i], r());
                    }
                }
            } else if (8 === l.nodeType) {
                if (l.data === n) c.push({
                    type: 2,
                    index: h
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = l.data.indexOf(o, t + 1));)c.push({
                        type: 7,
                        index: h
                    }), t += o.length - 1;
                }
            }
            h++;
        }
    }
    static createElement(t, i) {
        const s = h.createElement("template");
        return s.innerHTML = t, s;
    }
}
function P(t, i, s = t, e) {
    var o, n, l, h;
    if (i === x) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = P(t, r._$AS(t, i.values), r, e)), i;
}
class V {
    constructor(t, i){
        this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    v(t) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : h).importNode(s, !0);
        A.currentNode = o;
        let n = A.nextNode(), l = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (l === d.index) {
                let i;
                2 === d.type ? i = new N(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new I(n, this, t)), this.u.push(i), d = e[++r];
            }
            l !== (null == d ? void 0 : d.index) && (n = A.nextNode(), l++);
        }
        return o;
    }
    p(t) {
        let i = 0;
        for (const s of this.u)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class N {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cm = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cm;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = P(this, t, i), d(t) ? t === b || null == t || "" === t ? (this._$AH !== b && this._$AR(), this._$AH = b) : t !== this._$AH && t !== x && this.g(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : c(t) ? this.k(t) : this.g(t);
    }
    O(t, i = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, i);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    g(t) {
        this._$AH !== b && d(this._$AH) ? this._$AA.nextSibling.data = t : this.T(h.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var i;
        const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = C.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.p(s);
        else {
            const t = new V(o, this), i = t.v(this.options);
            t.p(s), this.T(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = T.get(t.strings);
        return void 0 === i && T.set(t.strings, i = new C(t)), i;
    }
    k(t) {
        u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new N(this.O(r()), this.O(r()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cm = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class S {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = b;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = P(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== x, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = P(this, e[s + l], i, l), h === x && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === b ? t = b : t !== b && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class M extends S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === b ? void 0 : t;
    }
}
const R = s ? s.emptyScript : "";
class k extends S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
}
class H extends S {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : b) === x) return;
        const e = this._$AH, o = t === b && e !== b || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== b && (e === b || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class I {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        P(this, t);
    }
}
const L = {
    P: "$lit$",
    A: o,
    M: n,
    C: 1,
    L: E,
    R: V,
    D: c,
    V: P,
    I: N,
    H: S,
    N: k,
    U: H,
    B: M,
    F: I
}, z = i.litHtmlPolyfillSupport;
null == z || z(C, N), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.6.1");
const Z = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new N(i.insertBefore(r(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YxkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>s);
parcelHelpers.export(exports, "UpdatingElement", ()=>r);
parcelHelpers.export(exports, "_$LE", ()=>h);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var l, o;
const r = (0, _reactiveElement.ReactiveElement);
class s extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
    LitElement: s
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
    LitElement: s
});
const h = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.2.2");

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2OXP":[function(require,module,exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCPKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customElementJs = require("@lit/reactive-element/decorators/custom-element.js");
parcelHelpers.exportAll(_customElementJs, exports);
var _propertyJs = require("@lit/reactive-element/decorators/property.js");
parcelHelpers.exportAll(_propertyJs, exports);
var _stateJs = require("@lit/reactive-element/decorators/state.js");
parcelHelpers.exportAll(_stateJs, exports);
var _eventOptionsJs = require("@lit/reactive-element/decorators/event-options.js");
parcelHelpers.exportAll(_eventOptionsJs, exports);
var _queryJs = require("@lit/reactive-element/decorators/query.js");
parcelHelpers.exportAll(_queryJs, exports);
var _queryAllJs = require("@lit/reactive-element/decorators/query-all.js");
parcelHelpers.exportAll(_queryAllJs, exports);
var _queryAsyncJs = require("@lit/reactive-element/decorators/query-async.js");
parcelHelpers.exportAll(_queryAsyncJs, exports);
var _queryAssignedElementsJs = require("@lit/reactive-element/decorators/query-assigned-elements.js");
parcelHelpers.exportAll(_queryAssignedElementsJs, exports);
var _queryAssignedNodesJs = require("@lit/reactive-element/decorators/query-assigned-nodes.js");
parcelHelpers.exportAll(_queryAssignedNodesJs, exports);

},{"@lit/reactive-element/decorators/custom-element.js":"cMf50","@lit/reactive-element/decorators/property.js":"ipYYa","@lit/reactive-element/decorators/state.js":"goyf7","@lit/reactive-element/decorators/event-options.js":"8b5ex","@lit/reactive-element/decorators/query.js":"kzuRy","@lit/reactive-element/decorators/query-all.js":"krNkJ","@lit/reactive-element/decorators/query-async.js":"a6gRJ","@lit/reactive-element/decorators/query-assigned-elements.js":"kKpwU","@lit/reactive-element/decorators/query-assigned-nodes.js":"2F824","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMf50":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>e);
const e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t , elements: s  } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipYYa":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "property", ()=>e);
const i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    };
function e(e) {
    return (n, t)=>void 0 !== t ? ((i, e, n)=>{
            e.constructor.createProperty(n, i);
        })(e, n, t) : i(e, n);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"goyf7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>t);
var _propertyJs = require("./property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function t(t) {
    return (0, _propertyJs.property)({
        ...t,
        state: !0
    });
}

},{"./property.js":"ipYYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8b5ex":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventOptions", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d0R9Y":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decorateProperty", ()=>o);
parcelHelpers.export(exports, "legacyPrototypeMethod", ()=>e);
parcelHelpers.export(exports, "standardPrototypeMethod", ()=>t);
const e = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, t = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), o = ({ finisher: e , descriptor: t  })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kzuRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query", ()=>i);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function i(i, n) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t;
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krNkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAll", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6gRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAsync", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKpwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedElements", ()=>l);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var n;
const e = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function l(n) {
    const { slot: l , selector: t  } = null != n ? n : {};
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2F824":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedNodes", ()=>o);
var _baseJs = require("./base.js");
var _queryAssignedElementsJs = require("./query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function o(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, _queryAssignedElementsJs.queryAssignedElements)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, _baseJs.decorateProperty)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","./query-assigned-elements.js":"kKpwU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jiVKL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classMapJs = require("lit-html/directives/class-map.js");
parcelHelpers.exportAll(_classMapJs, exports);

},{"lit-html/directives/class-map.js":"1IFol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1IFol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classMap", ()=>o);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(t){
        var i;
        if (super(t), t.type !== (0, _directiveJs.PartType).ATTRIBUTE || "class" !== t.name || (null === (i = t.strings) || void 0 === i ? void 0 : i.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return " " + Object.keys(t).filter((i)=>t[i]).join(" ") + " ";
    }
    update(i, [s]) {
        var r, o;
        if (void 0 === this.nt) {
            this.nt = new Set, void 0 !== i.strings && (this.st = new Set(i.strings.join(" ").split(/\s/).filter((t)=>"" !== t)));
            for(const t in s)s[t] && !(null === (r = this.st) || void 0 === r ? void 0 : r.has(t)) && this.nt.add(t);
            return this.render(s);
        }
        const e = i.element.classList;
        this.nt.forEach((t)=>{
            t in s || (e.remove(t), this.nt.delete(t));
        });
        for(const t in s){
            const i = !!s[t];
            i === this.nt.has(t) || (null === (o = this.st) || void 0 === o ? void 0 : o.has(t)) || (i ? (e.add(t), this.nt.add(t)) : (e.remove(t), this.nt.delete(t)));
        }
        return 0, _litHtmlJs.noChange;
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9lbyV":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>i);
parcelHelpers.export(exports, "PartType", ()=>t);
parcelHelpers.export(exports, "directive", ()=>e);
const t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class i {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aqnbF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>(0, _animateEsJs.animate));
var _dom = require("@motionone/dom");
parcelHelpers.exportAll(_dom, exports);
var _types = require("@motionone/types");
parcelHelpers.exportAll(_types, exports);
var _animateEsJs = require("./animate.es.js");

},{"@motionone/dom":"krEZT","@motionone/types":"6rLrg","./animate.es.js":"lEsDf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krEZT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>(0, _indexEsJs.animate));
parcelHelpers.export(exports, "createAnimate", ()=>(0, _createAnimateEsJs.createAnimate));
parcelHelpers.export(exports, "animateStyle", ()=>(0, _animateStyleEsJs.animateStyle));
parcelHelpers.export(exports, "timeline", ()=>(0, _indexEsJs1.timeline));
parcelHelpers.export(exports, "stagger", ()=>(0, _staggerEsJs.stagger));
parcelHelpers.export(exports, "spring", ()=>(0, _indexEsJs2.spring));
parcelHelpers.export(exports, "glide", ()=>(0, _indexEsJs3.glide));
parcelHelpers.export(exports, "style", ()=>(0, _styleEsJs.style));
parcelHelpers.export(exports, "inView", ()=>(0, _inViewEsJs.inView));
parcelHelpers.export(exports, "resize", ()=>(0, _indexEsJs4.resize));
parcelHelpers.export(exports, "scroll", ()=>(0, _indexEsJs5.scroll));
parcelHelpers.export(exports, "ScrollOffset", ()=>(0, _presetsEsJs.ScrollOffset));
parcelHelpers.export(exports, "withControls", ()=>(0, _controlsEsJs.withControls));
parcelHelpers.export(exports, "getAnimationData", ()=>(0, _dataEsJs.getAnimationData));
parcelHelpers.export(exports, "getStyleName", ()=>(0, _getStyleNameEsJs.getStyleName));
parcelHelpers.export(exports, "createMotionState", ()=>(0, _indexEsJs6.createMotionState));
parcelHelpers.export(exports, "mountedStates", ()=>(0, _indexEsJs6.mountedStates));
parcelHelpers.export(exports, "createStyles", ()=>(0, _styleObjectEsJs.createStyles));
parcelHelpers.export(exports, "createStyleString", ()=>(0, _styleStringEsJs.createStyleString));
var _indexEsJs = require("./animate/index.es.js");
var _createAnimateEsJs = require("./animate/create-animate.es.js");
var _animateStyleEsJs = require("./animate/animate-style.es.js");
var _indexEsJs1 = require("./timeline/index.es.js");
var _staggerEsJs = require("./utils/stagger.es.js");
var _indexEsJs2 = require("./easing/spring/index.es.js");
var _indexEsJs3 = require("./easing/glide/index.es.js");
var _styleEsJs = require("./animate/style.es.js");
var _inViewEsJs = require("./gestures/in-view.es.js");
var _indexEsJs4 = require("./gestures/resize/index.es.js");
var _indexEsJs5 = require("./gestures/scroll/index.es.js");
var _presetsEsJs = require("./gestures/scroll/offsets/presets.es.js");
var _controlsEsJs = require("./animate/utils/controls.es.js");
var _dataEsJs = require("./animate/data.es.js");
var _getStyleNameEsJs = require("./animate/utils/get-style-name.es.js");
var _indexEsJs6 = require("./state/index.es.js");
var _styleObjectEsJs = require("./animate/utils/style-object.es.js");
var _styleStringEsJs = require("./animate/utils/style-string.es.js");

},{"./animate/index.es.js":"4V5Bk","./animate/create-animate.es.js":"acg4f","./animate/animate-style.es.js":"3Iur2","./timeline/index.es.js":"j3Ike","./utils/stagger.es.js":"ihQdi","./easing/spring/index.es.js":"31qfP","./easing/glide/index.es.js":"6w57n","./animate/style.es.js":"gYtky","./gestures/in-view.es.js":"gjZoF","./gestures/resize/index.es.js":"3ucYu","./gestures/scroll/index.es.js":"fySeU","./gestures/scroll/offsets/presets.es.js":"gHEKo","./animate/utils/controls.es.js":"39ePr","./animate/data.es.js":"jdGoo","./animate/utils/get-style-name.es.js":"ksBTX","./state/index.es.js":"62kdY","./animate/utils/style-object.es.js":"ejYmc","./animate/utils/style-string.es.js":"cdmxE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4V5Bk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
var _animation = require("@motionone/animation");
var _createAnimateEsJs = require("./create-animate.es.js");
const animate = (0, _createAnimateEsJs.createAnimate)((0, _animation.Animation));

},{"@motionone/animation":"ebY3Z","./create-animate.es.js":"acg4f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebY3Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>(0, _animationEsJs.Animation));
parcelHelpers.export(exports, "getEasingFunction", ()=>(0, _easingEsJs.getEasingFunction));
var _animationEsJs = require("./Animation.es.js");
var _easingEsJs = require("./utils/easing.es.js");

},{"./Animation.es.js":"lESA9","./utils/easing.es.js":"ajTA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lESA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>Animation);
var _utils = require("@motionone/utils");
var _easingEsJs = require("./utils/easing.es.js");
class Animation {
    constructor(output, keyframes = [
        0,
        1
    ], { easing , duration: initialDuration = (0, _utils.defaults).duration , delay =(0, _utils.defaults).delay , endDelay =(0, _utils.defaults).endDelay , repeat =(0, _utils.defaults).repeat , offset , direction ="normal"  } = {}){
        this.startTime = null;
        this.rate = 1;
        this.t = 0;
        this.cancelTimestamp = null;
        this.easing = (0, _utils.noopReturn);
        this.duration = 0;
        this.totalDuration = 0;
        this.repeat = 0;
        this.playState = "idle";
        this.finished = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
        easing = easing || (0, _utils.defaults).easing;
        if ((0, _utils.isEasingGenerator)(easing)) {
            const custom = easing.createAnimation(keyframes);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            initialDuration = custom.duration || initialDuration;
        }
        this.repeat = repeat;
        this.easing = (0, _utils.isEasingList)(easing) ? (0, _utils.noopReturn) : (0, _easingEsJs.getEasingFunction)(easing);
        this.updateDuration(initialDuration);
        const interpolate$1 = (0, _utils.interpolate)(keyframes, offset, (0, _utils.isEasingList)(easing) ? easing.map((0, _easingEsJs.getEasingFunction)) : (0, _utils.noopReturn));
        this.tick = (timestamp)=>{
            var _a;
            delay;
            let t = 0;
            if (this.pauseTime !== undefined) t = this.pauseTime;
            else t = (timestamp - this.startTime) * this.rate;
            this.t = t;
            // Convert to seconds
            t /= 1000;
            // Rebase on delay
            t = Math.max(t - delay, 0);
            /**
             * If this animation has finished, set the current time
             * to the total duration.
             */ if (this.playState === "finished" && this.pauseTime === undefined) t = this.totalDuration;
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ const progress = t / this.duration;
            // TODO progress += iterationStart
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ let iterationProgress = progress % 1.0;
            if (!iterationProgress && progress >= 1) iterationProgress = 1;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ iterationProgress === 1 && currentIteration--;
            /**
             * Reverse progress if we're not running in "normal" direction
             */ const iterationIsOdd = currentIteration % 2;
            if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) iterationProgress = 1 - iterationProgress;
            const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
            const latest = interpolate$1(this.easing(p));
            output(latest);
            const isAnimationFinished = this.pauseTime === undefined && (this.playState === "finished" || t >= this.totalDuration + endDelay);
            if (isAnimationFinished) {
                this.playState = "finished";
                (_a = this.resolve) === null || _a === void 0 || _a.call(this, latest);
            } else if (this.playState !== "idle") this.frameRequestId = requestAnimationFrame(this.tick);
        };
        this.play();
    }
    play() {
        const now = performance.now();
        this.playState = "running";
        if (this.pauseTime !== undefined) this.startTime = now - this.pauseTime;
        else if (!this.startTime) this.startTime = now;
        this.cancelTimestamp = this.startTime;
        this.pauseTime = undefined;
        this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
        this.playState = "paused";
        this.pauseTime = this.t;
    }
    finish() {
        this.playState = "finished";
        this.tick(0);
    }
    stop() {
        var _a;
        this.playState = "idle";
        if (this.frameRequestId !== undefined) cancelAnimationFrame(this.frameRequestId);
        (_a = this.reject) === null || _a === void 0 || _a.call(this, false);
    }
    cancel() {
        this.stop();
        this.tick(this.cancelTimestamp);
    }
    reverse() {
        this.rate *= -1;
    }
    commitStyles() {}
    updateDuration(duration) {
        this.duration = duration;
        this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
        return this.t;
    }
    set currentTime(t) {
        if (this.pauseTime !== undefined || this.rate === 0) this.pauseTime = t;
        else this.startTime = performance.now() - t / this.rate;
    }
    get playbackRate() {
        return this.rate;
    }
    set playbackRate(rate) {
        this.rate = rate;
    }
}

},{"@motionone/utils":"krBNu","./utils/easing.es.js":"ajTA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krBNu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>(0, _arrayEsJs.addUniqueItem));
parcelHelpers.export(exports, "removeItem", ()=>(0, _arrayEsJs.removeItem));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampEsJs.clamp));
parcelHelpers.export(exports, "defaults", ()=>(0, _defaultsEsJs.defaults));
parcelHelpers.export(exports, "getEasingForSegment", ()=>(0, _easingEsJs.getEasingForSegment));
parcelHelpers.export(exports, "interpolate", ()=>(0, _interpolateEsJs.interpolate));
parcelHelpers.export(exports, "isCubicBezier", ()=>(0, _isCubicBezierEsJs.isCubicBezier));
parcelHelpers.export(exports, "isEasingGenerator", ()=>(0, _isEasingGeneratorEsJs.isEasingGenerator));
parcelHelpers.export(exports, "isEasingList", ()=>(0, _isEasingListEsJs.isEasingList));
parcelHelpers.export(exports, "isFunction", ()=>(0, _isFunctionEsJs.isFunction));
parcelHelpers.export(exports, "isNumber", ()=>(0, _isNumberEsJs.isNumber));
parcelHelpers.export(exports, "isString", ()=>(0, _isStringEsJs.isString));
parcelHelpers.export(exports, "mix", ()=>(0, _mixEsJs.mix));
parcelHelpers.export(exports, "noop", ()=>(0, _noopEsJs.noop));
parcelHelpers.export(exports, "noopReturn", ()=>(0, _noopEsJs.noopReturn));
parcelHelpers.export(exports, "defaultOffset", ()=>(0, _offsetEsJs.defaultOffset));
parcelHelpers.export(exports, "fillOffset", ()=>(0, _offsetEsJs.fillOffset));
parcelHelpers.export(exports, "progress", ()=>(0, _progressEsJs.progress));
parcelHelpers.export(exports, "time", ()=>(0, _timeEsJs.time));
parcelHelpers.export(exports, "velocityPerSecond", ()=>(0, _velocityEsJs.velocityPerSecond));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapEsJs.wrap));
var _arrayEsJs = require("./array.es.js");
var _clampEsJs = require("./clamp.es.js");
var _defaultsEsJs = require("./defaults.es.js");
var _easingEsJs = require("./easing.es.js");
var _interpolateEsJs = require("./interpolate.es.js");
var _isCubicBezierEsJs = require("./is-cubic-bezier.es.js");
var _isEasingGeneratorEsJs = require("./is-easing-generator.es.js");
var _isEasingListEsJs = require("./is-easing-list.es.js");
var _isFunctionEsJs = require("./is-function.es.js");
var _isNumberEsJs = require("./is-number.es.js");
var _isStringEsJs = require("./is-string.es.js");
var _mixEsJs = require("./mix.es.js");
var _noopEsJs = require("./noop.es.js");
var _offsetEsJs = require("./offset.es.js");
var _progressEsJs = require("./progress.es.js");
var _timeEsJs = require("./time.es.js");
var _velocityEsJs = require("./velocity.es.js");
var _wrapEsJs = require("./wrap.es.js");

},{"./array.es.js":"lV7u8","./clamp.es.js":"eARWM","./defaults.es.js":"4Xx6A","./easing.es.js":"b9U1C","./interpolate.es.js":"dDlur","./is-cubic-bezier.es.js":"hF8Ai","./is-easing-generator.es.js":"jOIrz","./is-easing-list.es.js":"gFRon","./is-function.es.js":"8kyHJ","./is-number.es.js":"3cDKd","./is-string.es.js":"8dcJ3","./mix.es.js":"Y3RWW","./noop.es.js":"cIUEQ","./offset.es.js":"4q1NU","./progress.es.js":"3PqyP","./time.es.js":"98Uct","./velocity.es.js":"alryn","./wrap.es.js":"1iRdr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lV7u8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>addUniqueItem);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eARWM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
const clamp = (min, max, v)=>Math.min(Math.max(v, min), max);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Xx6A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaults", ()=>defaults);
const defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9U1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingForSegment", ()=>getEasingForSegment);
var _isEasingListEsJs = require("./is-easing-list.es.js");
var _wrapEsJs = require("./wrap.es.js");
function getEasingForSegment(easing, i) {
    return (0, _isEasingListEsJs.isEasingList)(easing) ? easing[(0, _wrapEsJs.wrap)(0, easing.length, i)] : easing;
}

},{"./is-easing-list.es.js":"gFRon","./wrap.es.js":"1iRdr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gFRon":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEasingList", ()=>isEasingList);
var _isNumberEsJs = require("./is-number.es.js");
const isEasingList = (easing)=>Array.isArray(easing) && !(0, _isNumberEsJs.isNumber)(easing[0]);

},{"./is-number.es.js":"3cDKd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cDKd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
const isNumber = (value)=>typeof value === "number";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1iRdr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wrap", ()=>wrap);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDlur":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
var _mixEsJs = require("./mix.es.js");
var _noopEsJs = require("./noop.es.js");
var _offsetEsJs = require("./offset.es.js");
var _progressEsJs = require("./progress.es.js");
var _easingEsJs = require("./easing.es.js");
var _clampEsJs = require("./clamp.es.js");
function interpolate(output, input = (0, _offsetEsJs.defaultOffset)(output.length), easing = (0, _noopEsJs.noopReturn)) {
    const length = output.length;
    /**
     * If the input length is lower than the output we
     * fill the input to match. This currently assumes the input
     * is an animation progress value so is a good candidate for
     * moving outside the function.
     */ const remainder = length - input.length;
    remainder > 0 && (0, _offsetEsJs.fillOffset)(input, remainder);
    return (t)=>{
        let i = 0;
        for(; i < length - 2; i++){
            if (t < input[i + 1]) break;
        }
        let progressInRange = (0, _clampEsJs.clamp)(0, 1, (0, _progressEsJs.progress)(input[i], input[i + 1], t));
        const segmentEasing = (0, _easingEsJs.getEasingForSegment)(easing, i);
        progressInRange = segmentEasing(progressInRange);
        return (0, _mixEsJs.mix)(output[i], output[i + 1], progressInRange);
    };
}

},{"./mix.es.js":"Y3RWW","./noop.es.js":"cIUEQ","./offset.es.js":"4q1NU","./progress.es.js":"3PqyP","./easing.es.js":"b9U1C","./clamp.es.js":"eARWM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y3RWW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mix", ()=>mix);
const mix = (min, max, progress)=>-progress * min + progress * max + min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIUEQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
parcelHelpers.export(exports, "noopReturn", ()=>noopReturn);
const noop = ()=>{};
const noopReturn = (v)=>v;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4q1NU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOffset", ()=>defaultOffset);
parcelHelpers.export(exports, "fillOffset", ()=>fillOffset);
var _mixEsJs = require("./mix.es.js");
var _progressEsJs = require("./progress.es.js");
function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for(let i = 1; i <= remaining; i++){
        const offsetProgress = (0, _progressEsJs.progress)(0, remaining, i);
        offset.push((0, _mixEsJs.mix)(min, 1, offsetProgress));
    }
}
function defaultOffset(length) {
    const offset = [
        0
    ];
    fillOffset(offset, length - 1);
    return offset;
}

},{"./mix.es.js":"Y3RWW","./progress.es.js":"3PqyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PqyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progress", ()=>progress);
const progress = (min, max, value)=>max - min === 0 ? 1 : (value - min) / (max - min);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hF8Ai":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCubicBezier", ()=>isCubicBezier);
var _isNumberEsJs = require("./is-number.es.js");
const isCubicBezier = (easing)=>Array.isArray(easing) && (0, _isNumberEsJs.isNumber)(easing[0]);

},{"./is-number.es.js":"3cDKd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jOIrz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEasingGenerator", ()=>isEasingGenerator);
const isEasingGenerator = (easing)=>typeof easing === "object" && Boolean(easing.createAnimation);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kyHJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
const isFunction = (value)=>typeof value === "function";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dcJ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isString", ()=>isString);
const isString = (value)=>typeof value === "string";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98Uct":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "time", ()=>time);
const time = {
    ms: (seconds)=>seconds * 1000,
    s: (milliseconds)=>milliseconds / 1000
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alryn":[function(require,module,exports) {
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "velocityPerSecond", ()=>velocityPerSecond);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajTA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingFunction", ()=>getEasingFunction);
var _easing = require("@motionone/easing");
var _utils = require("@motionone/utils");
const namedEasings = {
    ease: (0, _easing.cubicBezier)(0.25, 0.1, 0.25, 1.0),
    "ease-in": (0, _easing.cubicBezier)(0.42, 0.0, 1.0, 1.0),
    "ease-in-out": (0, _easing.cubicBezier)(0.42, 0.0, 0.58, 1.0),
    "ease-out": (0, _easing.cubicBezier)(0.0, 0.0, 0.58, 1.0)
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
    // If already an easing function, return
    if ((0, _utils.isFunction)(definition)) return definition;
    // If an easing curve definition, return bezier function
    if ((0, _utils.isCubicBezier)(definition)) return (0, _easing.cubicBezier)(...definition);
    // If we have a predefined easing function, return
    if (namedEasings[definition]) return namedEasings[definition];
    // If this is a steps function, attempt to create easing curve
    if (definition.startsWith("steps")) {
        const args = functionArgsRegex.exec(definition);
        if (args) {
            const argsArray = args[1].split(",");
            return (0, _easing.steps)(parseFloat(argsArray[0]), argsArray[1].trim());
        }
    }
    return 0, _utils.noopReturn;
}

},{"@motionone/easing":"k1EJx","@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k1EJx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>(0, _cubicBezierEsJs.cubicBezier));
parcelHelpers.export(exports, "steps", ()=>(0, _stepsEsJs.steps));
var _cubicBezierEsJs = require("./cubic-bezier.es.js");
var _stepsEsJs = require("./steps.es.js");

},{"./cubic-bezier.es.js":"ajXFr","./steps.es.js":"gpf57","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajXFr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>cubicBezier);
var _utils = require("@motionone/utils");
/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) upperBound = currentT;
        else lowerBound = currentT;
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return 0, _utils.noopReturn;
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gpf57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "steps", ()=>steps);
var _utils = require("@motionone/utils");
const steps = (steps, direction = "end")=>(progress)=>{
        progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        const expanded = progress * steps;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return (0, _utils.clamp)(0, 1, rounded / steps);
    };

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acg4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnimate", ()=>createAnimate);
var _heyListen = require("hey-listen");
var _animateStyleEsJs = require("./animate-style.es.js");
var _optionsEsJs = require("./utils/options.es.js");
var _resolveElementsEsJs = require("../utils/resolve-elements.es.js");
var _controlsEsJs = require("./utils/controls.es.js");
var _staggerEsJs = require("../utils/stagger.es.js");
function createAnimate(AnimatePolyfill) {
    return function animate(elements, keyframes, options = {}) {
        elements = (0, _resolveElementsEsJs.resolveElements)(elements);
        const numElements = elements.length;
        (0, _heyListen.invariant)(Boolean(numElements), "No valid element provided.");
        (0, _heyListen.invariant)(Boolean(keyframes), "No keyframes defined.");
        /**
         * Create and start new animations
         */ const animationFactories = [];
        for(let i = 0; i < numElements; i++){
            const element = elements[i];
            for(const key in keyframes){
                const valueOptions = (0, _optionsEsJs.getOptions)(options, key);
                valueOptions.delay = (0, _staggerEsJs.resolveOption)(valueOptions.delay, i, numElements);
                const animation = (0, _animateStyleEsJs.animateStyle)(element, key, keyframes[key], valueOptions, AnimatePolyfill);
                animationFactories.push(animation);
            }
        }
        return (0, _controlsEsJs.withControls)(animationFactories, options, /**
         * TODO:
         * If easing is set to spring or glide, duration will be dynamically
         * generated. Ideally we would dynamically generate this from
         * animation.effect.getComputedTiming().duration but this isn't
         * supported in iOS13 or our number polyfill. Perhaps it's possible
         * to Proxy animations returned from animateStyle that has duration
         * as a getter.
         */ options.duration);
    };
}

},{"hey-listen":"8yK8Z","./animate-style.es.js":"3Iur2","./utils/options.es.js":"fCKN3","../utils/resolve-elements.es.js":"KZgGT","./utils/controls.es.js":"39ePr","../utils/stagger.es.js":"ihQdi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yK8Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
parcelHelpers.export(exports, "warning", ()=>warning);
var warning = function() {};
var invariant = function() {};
warning = function(check, message) {
    if (!check && typeof console !== "undefined") console.warn(message);
};
invariant = function(check, message) {
    if (!check) throw new Error(message);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Iur2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateStyle", ()=>animateStyle);
var _dataEsJs = require("./data.es.js");
var _cssVarEsJs = require("./utils/css-var.es.js");
var _utils = require("@motionone/utils");
var _transformsEsJs = require("./utils/transforms.es.js");
var _easingEsJs = require("./utils/easing.es.js");
var _featureDetectionEsJs = require("./utils/feature-detection.es.js");
var _keyframesEsJs = require("./utils/keyframes.es.js");
var _styleEsJs = require("./style.es.js");
var _getStyleNameEsJs = require("./utils/get-style-name.es.js");
var _stopAnimationEsJs = require("./utils/stop-animation.es.js");
var _getUnitEsJs = require("./utils/get-unit.es.js");
function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration =(0, _utils.defaults).duration , delay =(0, _utils.defaults).delay , endDelay =(0, _utils.defaults).endDelay , repeat =(0, _utils.defaults).repeat , easing =(0, _utils.defaults).easing , persist =false , direction , offset , allowWebkitAcceleration =false  } = options;
    const data = (0, _dataEsJs.getAnimationData)(element);
    const valueIsTransform = (0, _transformsEsJs.isTransform)(key);
    let canAnimateNatively = (0, _featureDetectionEsJs.supports).waapi();
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */ valueIsTransform && (0, _transformsEsJs.addTransformToElement)(element, key);
    const name = (0, _getStyleNameEsJs.getStyleName)(key);
    const motionValue = (0, _dataEsJs.getMotionValue)(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */ const definition = (0, _transformsEsJs.transformDefinitions).get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */ (0, _stopAnimationEsJs.stopAnimation)(motionValue.animation, !((0, _utils.isEasingGenerator)(easing) && motionValue.generator) && options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */ return ()=>{
        const readInitialValue = ()=>{
            var _a, _b;
            return (_b = (_a = (0, _styleEsJs.style).get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
        };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */ let keyframes = (0, _keyframesEsJs.hydrateKeyframes)((0, _keyframesEsJs.keyframesList)(keyframesDefinition), readInitialValue);
        /**
         * Detect unit type of keyframes.
         */ const toUnit = (0, _getUnitEsJs.getUnitConverter)(keyframes, definition);
        if ((0, _utils.isEasingGenerator)(easing)) {
            const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            duration = custom.duration || duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */ if ((0, _cssVarEsJs.isCssVar)(name)) {
            if ((0, _featureDetectionEsJs.supports).cssRegisterProperty()) (0, _cssVarEsJs.registerCssVariable)(name);
            else canAnimateNatively = false;
        }
        /**
         * If we've been passed a custom easing function, and this browser
         * does **not** support linear() easing, and the value is a transform
         * (and thus a pure number) we can still support the custom easing
         * by falling back to the animation polyfill.
         */ if (valueIsTransform && !(0, _featureDetectionEsJs.supports).linearEasing() && ((0, _utils.isFunction)(easing) || (0, _utils.isEasingList)(easing) && easing.some((0, _utils.isFunction)))) canAnimateNatively = false;
        /**
         * If we can animate this value with WAAPI, do so.
         */ if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */ if (definition) keyframes = keyframes.map((value)=>(0, _utils.isNumber)(value) ? definition.toDefaultUnit(value) : value);
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */ if (keyframes.length === 1 && (!(0, _featureDetectionEsJs.supports).partialKeyframes() || isRecording)) keyframes.unshift(readInitialValue());
            const animationOptions = {
                delay: (0, _utils.time).ms(delay),
                duration: (0, _utils.time).ms(duration),
                endDelay: (0, _utils.time).ms(endDelay),
                easing: !(0, _utils.isEasingList)(easing) ? (0, _easingEsJs.convertEasing)(easing, duration) : undefined,
                direction,
                iterations: repeat + 1,
                fill: "both"
            };
            animation = element.animate({
                [name]: keyframes,
                offset,
                easing: (0, _utils.isEasingList)(easing) ? easing.map((thisEasing)=>(0, _easingEsJs.convertEasing)(thisEasing, duration)) : undefined
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */ if (!animation.finished) animation.finished = new Promise((resolve, reject)=>{
                animation.onfinish = resolve;
                animation.oncancel = reject;
            });
            const target = keyframes[keyframes.length - 1];
            animation.finished.then(()=>{
                if (persist) return;
                // Apply styles to target
                (0, _styleEsJs.style).set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            }).catch((0, _utils.noop));
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */ if (!allowWebkitAcceleration) animation.playbackRate = 1.000001;
        /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */ } else if (AnimationPolyfill && valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */ keyframes = keyframes.map((value)=>typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */ if (keyframes.length === 1) keyframes.unshift(parseFloat(readInitialValue()));
            animation = new AnimationPolyfill((latest)=>{
                (0, _styleEsJs.style).set(element, name, toUnit ? toUnit(latest) : latest);
            }, keyframes, Object.assign(Object.assign({}, options), {
                duration,
                easing
            }));
        } else {
            const target = keyframes[keyframes.length - 1];
            (0, _styleEsJs.style).set(element, name, definition && (0, _utils.isNumber)(target) ? definition.toDefaultUnit(target) : target);
        }
        if (isRecording) record(element, key, keyframes, {
            duration,
            delay: delay,
            easing,
            repeat,
            offset
        }, "motion-one");
        motionValue.setAnimation(animation);
        return animation;
    };
}

},{"./data.es.js":"jdGoo","./utils/css-var.es.js":"eE8uy","@motionone/utils":"krBNu","./utils/transforms.es.js":"3akS9","./utils/easing.es.js":"45L34","./utils/feature-detection.es.js":"98zUZ","./utils/keyframes.es.js":"e1Tay","./style.es.js":"gYtky","./utils/get-style-name.es.js":"ksBTX","./utils/stop-animation.es.js":"jktqe","./utils/get-unit.es.js":"ldpTn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jdGoo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAnimationData", ()=>getAnimationData);
parcelHelpers.export(exports, "getMotionValue", ()=>getMotionValue);
var _types = require("@motionone/types");
const data = new WeakMap();
function getAnimationData(element) {
    if (!data.has(element)) data.set(element, {
        transforms: [],
        values: new Map()
    });
    return data.get(element);
}
function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) motionValues.set(name, new (0, _types.MotionValue)());
    return motionValues.get(name);
}

},{"@motionone/types":"6rLrg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6rLrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>(0, _motionValueEsJs.MotionValue));
var _motionValueEsJs = require("./MotionValue.es.js");

},{"./MotionValue.es.js":"alVre","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alVre":[function(require,module,exports) {
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>MotionValue);
class MotionValue {
    setAnimation(animation) {
        this.animation = animation;
        animation === null || animation === void 0 || animation.finished.then(()=>this.clearAnimation()).catch(()=>{});
    }
    clearAnimation() {
        this.animation = this.generator = undefined;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eE8uy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCssVar", ()=>isCssVar);
parcelHelpers.export(exports, "registerCssVariable", ()=>registerCssVariable);
parcelHelpers.export(exports, "registeredProperties", ()=>registeredProperties);
var _transformsEsJs = require("./transforms.es.js");
const isCssVar = (name)=>name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
    if (registeredProperties.has(name)) return;
    registeredProperties.add(name);
    try {
        const { syntax , initialValue  } = (0, _transformsEsJs.transformDefinitions).has(name) ? (0, _transformsEsJs.transformDefinitions).get(name) : {};
        CSS.registerProperty({
            name,
            inherits: false,
            syntax,
            initialValue
        });
    } catch (e) {}
}

},{"./transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3akS9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addTransformToElement", ()=>addTransformToElement);
parcelHelpers.export(exports, "asTransformCssVar", ()=>asTransformCssVar);
parcelHelpers.export(exports, "axes", ()=>axes);
parcelHelpers.export(exports, "buildTransformTemplate", ()=>buildTransformTemplate);
parcelHelpers.export(exports, "compareTransformOrder", ()=>compareTransformOrder);
parcelHelpers.export(exports, "isTransform", ()=>isTransform);
parcelHelpers.export(exports, "transformAlias", ()=>transformAlias);
parcelHelpers.export(exports, "transformDefinitions", ()=>transformDefinitions);
var _utils = require("@motionone/utils");
var _dataEsJs = require("../data.es.js");
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */ const axes = [
    "",
    "X",
    "Y",
    "Z"
];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */ const order = [
    "translate",
    "scale",
    "rotate",
    "skew"
];
const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v)=>v + "deg"
};
const baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v)=>v + "px"
    },
    rotate: rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: (0, _utils.noopReturn)
    },
    skew: rotation
};
const transformDefinitions = new Map();
const asTransformCssVar = (name)=>`--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */ const transforms = [
    "x",
    "y",
    "z"
];
order.forEach((name)=>{
    axes.forEach((axis)=>{
        transforms.push(name + axis);
        transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */ const compareTransformOrder = (a, b)=>transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */ const transformLookup = new Set(transforms);
const isTransform = (name)=>transformLookup.has(name);
const addTransformToElement = (element, name)=>{
    // Map x to translateX etc
    if (transformAlias[name]) name = transformAlias[name];
    const { transforms  } = (0, _dataEsJs.getAnimationData)(element);
    (0, _utils.addUniqueItem)(transforms, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */ element.style.transform = buildTransformTemplate(transforms);
};
const buildTransformTemplate = (transforms)=>transforms.sort(compareTransformOrder).reduce(transformListToString, "").trim();
const transformListToString = (template, name)=>`${template} ${name}(var(${asTransformCssVar(name)}))`;

},{"@motionone/utils":"krBNu","../data.es.js":"jdGoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45L34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertEasing", ()=>convertEasing);
parcelHelpers.export(exports, "cubicBezierAsString", ()=>cubicBezierAsString);
parcelHelpers.export(exports, "generateLinearEasingPoints", ()=>generateLinearEasingPoints);
var _utils = require("@motionone/utils");
var _featureDetectionEsJs = require("./feature-detection.es.js");
// Create a linear easing point for every x second
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration)=>{
    let points = "";
    const numPoints = Math.round(duration / resolution);
    for(let i = 0; i < numPoints; i++)points += easing((0, _utils.progress)(0, numPoints - 1, i)) + ", ";
    return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration)=>{
    if ((0, _utils.isFunction)(easing)) return (0, _featureDetectionEsJs.supports).linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : (0, _utils.defaults).easing;
    else return (0, _utils.isCubicBezier)(easing) ? cubicBezierAsString(easing) : easing;
};
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;

},{"@motionone/utils":"krBNu","./feature-detection.es.js":"98zUZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98zUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supports", ()=>supports);
const testAnimation = (keyframes, options)=>document.createElement("div").animate(keyframes, options);
const featureTests = {
    cssRegisterProperty: ()=>typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: ()=>{
        try {
            testAnimation({
                opacity: [
                    1
                ]
            });
        } catch (e) {
            return false;
        }
        return true;
    },
    finished: ()=>Boolean(testAnimation({
            opacity: [
                0,
                1
            ]
        }, {
            duration: 0.001
        }).finished),
    linearEasing: ()=>{
        try {
            testAnimation({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            });
        } catch (e) {
            return false;
        }
        return true;
    }
};
const results = {};
const supports = {};
for(const key in featureTests)supports[key] = ()=>{
    if (results[key] === undefined) results[key] = featureTests[key]();
    return results[key];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1Tay":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hydrateKeyframes", ()=>hydrateKeyframes);
parcelHelpers.export(exports, "keyframesList", ()=>keyframesList);
function hydrateKeyframes(keyframes, readInitialValue) {
    for(let i = 0; i < keyframes.length; i++)if (keyframes[i] === null) keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
    return keyframes;
}
const keyframesList = (keyframes)=>Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYtky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "style", ()=>style);
var _cssVarEsJs = require("./utils/css-var.es.js");
var _getStyleNameEsJs = require("./utils/get-style-name.es.js");
var _transformsEsJs = require("./utils/transforms.es.js");
const style = {
    get: (element, name)=>{
        name = (0, _getStyleNameEsJs.getStyleName)(name);
        let value = (0, _cssVarEsJs.isCssVar)(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
        if (!value && value !== 0) {
            const definition = (0, _transformsEsJs.transformDefinitions).get(name);
            if (definition) value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value)=>{
        name = (0, _getStyleNameEsJs.getStyleName)(name);
        if ((0, _cssVarEsJs.isCssVar)(name)) element.style.setProperty(name, value);
        else element.style[name] = value;
    }
};

},{"./utils/css-var.es.js":"eE8uy","./utils/get-style-name.es.js":"ksBTX","./utils/transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksBTX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getStyleName", ()=>getStyleName);
var _transformsEsJs = require("./transforms.es.js");
function getStyleName(key) {
    if ((0, _transformsEsJs.transformAlias)[key]) key = (0, _transformsEsJs.transformAlias)[key];
    return (0, _transformsEsJs.isTransform)(key) ? (0, _transformsEsJs.asTransformCssVar)(key) : key;
}

},{"./transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jktqe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stopAnimation", ()=>stopAnimation);
function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished") return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) animation.stop();
        else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    } catch (e) {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldpTn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUnitConverter", ()=>getUnitConverter);
var _utils = require("@motionone/utils");
function getUnitConverter(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || (0, _utils.noopReturn);
    const finalKeyframe = keyframes[keyframes.length - 1];
    if ((0, _utils.isString)(finalKeyframe)) {
        const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
        if (unit) toUnit = (value)=>value + unit;
    }
    return toUnit;
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCKN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOptions", ()=>getOptions);
const getOptions = (options, key)=>/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */ options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"KZgGT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveElements", ()=>resolveElements);
function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
            elements = selectorCache[elements];
        } else elements = document.querySelectorAll(elements);
    } else if (elements instanceof Element) elements = [
        elements
    ];
    /**
     * Return an empty array
     */ return Array.from(elements || []);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39ePr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "controls", ()=>controls);
parcelHelpers.export(exports, "withControls", ()=>withControls);
var _utils = require("@motionone/utils");
var _stopAnimationEsJs = require("./stop-animation.es.js");
const createAnimation = (factory)=>factory();
const withControls = (animationFactory, options, duration = (0, _utils.defaults).duration)=>{
    return new Proxy({
        animations: animationFactory.map(createAnimation).filter(Boolean),
        duration,
        options
    }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */ const getActiveAnimation = (state)=>state.animations[0];
const controls = {
    get: (target, key)=>{
        const activeAnimation = getActiveAnimation(target);
        switch(key){
            case "duration":
                return target.duration;
            case "currentTime":
                return (0, _utils.time).s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
            case "playbackRate":
            case "playState":
                return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
            case "finished":
                if (!target.finished) target.finished = Promise.all(target.animations.map(selectFinished)).catch((0, _utils.noop));
                return target.finished;
            case "stop":
                return ()=>{
                    target.animations.forEach((animation)=>(0, _stopAnimationEsJs.stopAnimation)(animation));
                };
            case "forEachNative":
                /**
                 * This is for internal use only, fire a callback for each
                 * underlying animation.
                 */ return (callback)=>{
                    target.animations.forEach((animation)=>callback(animation, target));
                };
            default:
                return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? undefined : ()=>target.animations.forEach((animation)=>animation[key]());
        }
    },
    set: (target, key, value)=>{
        switch(key){
            case "currentTime":
                value = (0, _utils.time).ms(value);
            case "currentTime":
            case "playbackRate":
                for(let i = 0; i < target.animations.length; i++)target.animations[i][key] = value;
                return true;
        }
        return false;
    }
};
const selectFinished = (animation)=>animation.finished;

},{"@motionone/utils":"krBNu","./stop-animation.es.js":"jktqe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ihQdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFromIndex", ()=>getFromIndex);
parcelHelpers.export(exports, "resolveOption", ()=>resolveOption);
parcelHelpers.export(exports, "stagger", ()=>stagger);
var _utils = require("@motionone/utils");
var _animation = require("@motionone/animation");
function stagger(duration = 0.1, { start =0 , from =0 , easing  } = {}) {
    return (i, total)=>{
        const fromIndex = (0, _utils.isNumber)(from) ? from : getFromIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (easing) {
            const maxDelay = total * duration;
            const easingFunction = (0, _animation.getEasingFunction)(easing);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return start + delay;
    };
}
function getFromIndex(from, total) {
    if (from === "first") return 0;
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function resolveOption(option, i, total) {
    return (0, _utils.isFunction)(option) ? option(i, total) : option;
}

},{"@motionone/utils":"krBNu","@motionone/animation":"ebY3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3Ike":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnimationsFromTimeline", ()=>createAnimationsFromTimeline);
parcelHelpers.export(exports, "timeline", ()=>timeline);
var _tslib = require("tslib");
var _heyListen = require("hey-listen");
var _utils = require("@motionone/utils");
var _staggerEsJs = require("../utils/stagger.es.js");
var _animateStyleEsJs = require("../animate/animate-style.es.js");
var _controlsEsJs = require("../animate/utils/controls.es.js");
var _keyframesEsJs = require("../animate/utils/keyframes.es.js");
var _optionsEsJs = require("../animate/utils/options.es.js");
var _resolveElementsEsJs = require("../utils/resolve-elements.es.js");
var _calcTimeEsJs = require("./utils/calc-time.es.js");
var _editEsJs = require("./utils/edit.es.js");
var _sortEsJs = require("./utils/sort.es.js");
var _animation = require("@motionone/animation");
function timeline(definition, options = {}) {
    var _a;
    const animationDefinitions = createAnimationsFromTimeline(definition, options);
    /**
     * Create and start animations
     */ const animationFactories = animationDefinitions.map((definition)=>(0, _animateStyleEsJs.animateStyle)(...definition, (0, _animation.Animation))).filter(Boolean);
    return (0, _controlsEsJs.withControls)(animationFactories, options, // Get the duration from the first animation definition
    (_a = animationDefinitions[0]) === null || _a === void 0 ? void 0 : _a[3].duration);
}
function createAnimationsFromTimeline(definition, _a = {}) {
    var { defaultOptions ={}  } = _a, timelineOptions = (0, _tslib.__rest)(_a, [
        "defaultOptions"
    ]);
    const animationDefinitions = [];
    const elementSequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the definition array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i = 0; i < definition.length; i++){
        const segment = definition[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if ((0, _utils.isString)(segment)) {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0, _calcTimeEsJs.calcNextTime)(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        const [elementDefinition, keyframes, options = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (options.at !== undefined) currentTime = (0, _calcTimeEsJs.calcNextTime)(currentTime, options.at, prevTime, timeLabels);
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        /**
         * Find all the elements specified in the definition and parse value
         * keyframes from their timeline definitions.
         */ const elements = (0, _resolveElementsEsJs.resolveElements)(elementDefinition, elementCache);
        const numElements = elements.length;
        for(let elementIndex = 0; elementIndex < numElements; elementIndex++){
            const element = elements[elementIndex];
            const elementSequence = getElementSequence(element, elementSequences);
            for(const key in keyframes){
                const valueSequence = getValueSequence(key, elementSequence);
                let valueKeyframes = (0, _keyframesEsJs.keyframesList)(keyframes[key]);
                const valueOptions = (0, _optionsEsJs.getOptions)(options, key);
                let { duration =defaultOptions.duration || (0, _utils.defaults).duration , easing =defaultOptions.easing || (0, _utils.defaults).easing  } = valueOptions;
                if ((0, _utils.isEasingGenerator)(easing)) {
                    (0, _heyListen.invariant)(key === "opacity" || valueKeyframes.length > 1, "spring must be provided 2 keyframes within timeline()");
                    const custom = easing.createAnimation(valueKeyframes, key !== "opacity", ()=>0, key);
                    easing = custom.easing;
                    valueKeyframes = custom.keyframes || valueKeyframes;
                    duration = custom.duration || duration;
                }
                const delay = (0, _staggerEsJs.resolveOption)(options.delay, elementIndex, numElements) || 0;
                const startTime = currentTime + delay;
                const targetTime = startTime + duration;
                /**
                 *
                 */ let { offset =(0, _utils.defaultOffset)(valueKeyframes.length)  } = valueOptions;
                /**
                 * If there's only one offset of 0, fill in a second with length 1
                 *
                 * TODO: Ensure there's a test that covers this removal
                 */ if (offset.length === 1 && offset[0] === 0) offset[1] = 1;
                /**
                 * Fill out if offset if fewer offsets than keyframes
                 */ const remainder = offset.length - valueKeyframes.length;
                remainder > 0 && (0, _utils.fillOffset)(offset, remainder);
                /**
                 * If only one value has been set, ie [1], push a null to the start of
                 * the keyframe array. This will let us mark a keyframe at this point
                 * that will later be hydrated with the previous value.
                 */ valueKeyframes.length === 1 && valueKeyframes.unshift(null);
                /**
                 * Add keyframes, mapping offsets to absolute time.
                 */ (0, _editEsJs.addKeyframes)(valueSequence, valueKeyframes, easing, offset, startTime, targetTime);
                maxDuration = Math.max(delay + duration, maxDuration);
                totalDuration = Math.max(targetTime, totalDuration);
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ elementSequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort((0, _sortEsJs.compareByTime));
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at , value , easing  } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0, _utils.progress)(0, totalDuration, at));
                valueEasing.push(easing || (0, _utils.defaults).easing);
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift("linear");
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            animationDefinitions.push([
                element,
                key,
                keyframes,
                Object.assign(Object.assign(Object.assign({}, defaultOptions), {
                    duration: totalDuration,
                    easing: valueEasing,
                    offset: valueOffset
                }), timelineOptions)
            ]);
        }
    });
    return animationDefinitions;
}
function getElementSequence(element, sequences) {
    !sequences.has(element) && sequences.set(element, {});
    return sequences.get(element);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}

},{"tslib":"eIL45","hey-listen":"8yK8Z","@motionone/utils":"krBNu","../utils/stagger.es.js":"ihQdi","../animate/animate-style.es.js":"3Iur2","../animate/utils/controls.es.js":"39ePr","../animate/utils/keyframes.es.js":"e1Tay","../animate/utils/options.es.js":"fCKN3","../utils/resolve-elements.es.js":"KZgGT","./utils/calc-time.es.js":"fvV2P","./utils/edit.es.js":"iQMGd","./utils/sort.es.js":"fCgRH","@motionone/animation":"ebY3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eIL45":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fvV2P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcNextTime", ()=>calcNextTime);
var _utils = require("@motionone/utils");
function calcNextTime(current, next, prev, labels) {
    var _a;
    if ((0, _utils.isNumber)(next)) return next;
    else if (next.startsWith("-") || next.startsWith("+")) return Math.max(0, current + parseFloat(next));
    else if (next === "<") return prev;
    else return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQMGd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addKeyframes", ()=>addKeyframes);
parcelHelpers.export(exports, "eraseKeyframes", ()=>eraseKeyframes);
var _utils = require("@motionone/utils");
function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0, _utils.removeItem)(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++)sequence.push({
        value: keyframes[i],
        at: (0, _utils.mix)(startTime, endTime, offset[i]),
        easing: (0, _utils.getEasingForSegment)(easing, i)
    });
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgRH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compareByTime", ()=>compareByTime);
function compareByTime(a, b) {
    if (a.at === b.at) return a.value === null ? 1 : -1;
    else return a.at - b.at;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31qfP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spring", ()=>spring);
var _generators = require("@motionone/generators");
var _createGeneratorEasingEsJs = require("../create-generator-easing.es.js");
const spring = (0, _createGeneratorEasingEsJs.createGeneratorEasing)((0, _generators.spring));

},{"@motionone/generators":"17PnZ","../create-generator-easing.es.js":"deZka","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17PnZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glide", ()=>(0, _indexEsJs.glide));
parcelHelpers.export(exports, "spring", ()=>(0, _indexEsJs1.spring));
parcelHelpers.export(exports, "pregenerateKeyframes", ()=>(0, _pregenerateKeyframesEsJs.pregenerateKeyframes));
parcelHelpers.export(exports, "calcGeneratorVelocity", ()=>(0, _velocityEsJs.calcGeneratorVelocity));
var _indexEsJs = require("./glide/index.es.js");
var _indexEsJs1 = require("./spring/index.es.js");
var _pregenerateKeyframesEsJs = require("./utils/pregenerate-keyframes.es.js");
var _velocityEsJs = require("./utils/velocity.es.js");

},{"./glide/index.es.js":"25xtk","./spring/index.es.js":"1gwOH","./utils/pregenerate-keyframes.es.js":"60YU3","./utils/velocity.es.js":"c9uks","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25xtk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glide", ()=>glide);
var _utils = require("@motionone/utils");
var _velocityEsJs = require("../utils/velocity.es.js");
var _indexEsJs = require("../spring/index.es.js");
const glide = ({ from =0 , velocity =0.0 , power =0.8 , decay =0.325 , bounceDamping , bounceStiffness , changeTarget , min , max , restDistance =0.5 , restSpeed  })=>{
    decay = (0, _utils.time).ms(decay);
    const state = {
        hasReachedTarget: false,
        done: false,
        current: from,
        target: from
    };
    const isOutOfBounds = (v)=>min !== undefined && v < min || max !== undefined && v > max;
    const nearestBoundary = (v)=>{
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = from + amplitude;
    const target = changeTarget === undefined ? ideal : changeTarget(ideal);
    state.target = target;
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */ if (target !== ideal) amplitude = target - from;
    const calcDelta = (t)=>-amplitude * Math.exp(-t / decay);
    const calcLatest = (t)=>target + calcDelta(t);
    const applyFriction = (t)=>{
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDistance;
        state.current = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */ let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t)=>{
        if (!isOutOfBounds(state.current)) return;
        timeReachedBoundary = t;
        spring$1 = (0, _indexEsJs.spring)({
            from: state.current,
            to: nearestBoundary(state.current),
            velocity: (0, _velocityEsJs.calcGeneratorVelocity)(calcLatest, t, state.current),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDistance,
            restSpeed
        });
    };
    checkCatchBoundary(0);
    return (t)=>{
        /**
         * We need to resolve the friction to figure out if we need a
         * spring but we don't want to do this twice per frame. So here
         * we flag if we updated for this frame and later if we did
         * we can skip doing it again.
         */ let hasUpdatedFrame = false;
        if (!spring$1 && timeReachedBoundary === undefined) {
            hasUpdatedFrame = true;
            applyFriction(t);
            checkCatchBoundary(t);
        }
        /**
         * If we have a spring and the provided t is beyond the moment the friction
         * animation crossed the min/max boundary, use the spring.
         */ if (timeReachedBoundary !== undefined && t > timeReachedBoundary) {
            state.hasReachedTarget = true;
            return spring$1(t - timeReachedBoundary);
        } else {
            state.hasReachedTarget = false;
            !hasUpdatedFrame && applyFriction(t);
            return state;
        }
    };
};

},{"@motionone/utils":"krBNu","../utils/velocity.es.js":"c9uks","../spring/index.es.js":"1gwOH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9uks":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcGeneratorVelocity", ()=>calcGeneratorVelocity);
var _utils = require("@motionone/utils");
const sampleT = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - sampleT, 0);
    return (0, _utils.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1gwOH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spring", ()=>spring);
var _utils = require("@motionone/utils");
var _defaultsEsJs = require("./defaults.es.js");
var _utilsEsJs = require("./utils.es.js");
var _hasReachedTargetEsJs = require("../utils/has-reached-target.es.js");
var _velocityEsJs = require("../utils/velocity.es.js");
const spring = ({ stiffness =(0, _defaultsEsJs.defaults).stiffness , damping =(0, _defaultsEsJs.defaults).damping , mass =(0, _defaultsEsJs.defaults).mass , from =0 , to =1 , velocity =0.0 , restSpeed =2 , restDistance =0.5  } = {})=>{
    velocity = velocity ? (0, _utils.time).s(velocity) : 0.0;
    const state = {
        done: false,
        hasReachedTarget: false,
        current: from,
        target: to
    };
    const initialDelta = to - from;
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
    const dampingRatio = (0, _utilsEsJs.calcDampingRatio)(stiffness, damping, mass);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
        // Underdamped spring (bouncy)
        resolveSpring = (t)=>to - Math.exp(-dampingRatio * undampedAngularFreq * t) * ((-velocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    } else // Critically damped spring
    resolveSpring = (t)=>{
        return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (-velocity + undampedAngularFreq * initialDelta) * t);
    };
    return (t)=>{
        state.current = resolveSpring(t);
        const currentVelocity = t === 0 ? velocity : (0, _velocityEsJs.calcGeneratorVelocity)(resolveSpring, t, state.current);
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - state.current) <= restDistance;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        state.hasReachedTarget = (0, _hasReachedTargetEsJs.hasReachedTarget)(from, to, state.current);
        return state;
    };
};

},{"@motionone/utils":"krBNu","./defaults.es.js":"eXwH5","./utils.es.js":"5MLtH","../utils/has-reached-target.es.js":"1oJKA","../utils/velocity.es.js":"c9uks","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXwH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaults", ()=>defaults);
const defaults = {
    stiffness: 100.0,
    damping: 10.0,
    mass: 1.0
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5MLtH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcDampingRatio", ()=>calcDampingRatio);
var _defaultsEsJs = require("./defaults.es.js");
const calcDampingRatio = (stiffness = (0, _defaultsEsJs.defaults).stiffness, damping = (0, _defaultsEsJs.defaults).damping, mass = (0, _defaultsEsJs.defaults).mass)=>damping / (2 * Math.sqrt(stiffness * mass));

},{"./defaults.es.js":"eXwH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1oJKA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasReachedTarget", ()=>hasReachedTarget);
function hasReachedTarget(origin, target, current) {
    return origin < target && current >= target || origin > target && current <= target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"60YU3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pregenerateKeyframes", ()=>pregenerateKeyframes);
var _utils = require("@motionone/utils");
const timeStep = 10;
const maxDuration = 10000;
function pregenerateKeyframes(generator, toUnit = (0, _utils.noopReturn)) {
    let overshootDuration = undefined;
    let timestamp = timeStep;
    let state = generator(0);
    const keyframes = [
        toUnit(state.current)
    ];
    while(!state.done && timestamp < maxDuration){
        state = generator(timestamp);
        keyframes.push(toUnit(state.done ? state.target : state.current));
        if (overshootDuration === undefined && state.hasReachedTarget) overshootDuration = timestamp;
        timestamp += timeStep;
    }
    const duration = timestamp - timeStep;
    /**
     * If generating an animation that didn't actually move,
     * generate a second keyframe so we have an origin and target.
     */ if (keyframes.length === 1) keyframes.push(state.current);
    return {
        keyframes,
        duration: duration / 1000,
        overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1000
    };
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"deZka":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createGeneratorEasing", ()=>createGeneratorEasing);
var _generators = require("@motionone/generators");
var _utils = require("@motionone/utils");
var _getUnitEsJs = require("../animate/utils/get-unit.es.js");
var _transformsEsJs = require("../animate/utils/transforms.es.js");
var _getStyleNameEsJs = require("../animate/utils/get-style-name.es.js");
function canGenerate(value) {
    return (0, _utils.isNumber)(value) && !isNaN(value);
}
function getAsNumber(value) {
    return (0, _utils.isString)(value) ? parseFloat(value) : value;
}
function createGeneratorEasing(createGenerator) {
    const keyframesCache = new WeakMap();
    return (options = {})=>{
        const generatorCache = new Map();
        const getGenerator = (from = 0, to = 100, velocity = 0, isScale = false)=>{
            const key = `${from}-${to}-${velocity}-${isScale}`;
            if (!generatorCache.has(key)) generatorCache.set(key, createGenerator(Object.assign({
                from,
                to,
                velocity,
                restSpeed: isScale ? 0.05 : 2,
                restDistance: isScale ? 0.01 : 0.5
            }, options)));
            return generatorCache.get(key);
        };
        const getKeyframes = (generator, toUnit)=>{
            if (!keyframesCache.has(generator)) keyframesCache.set(generator, (0, _generators.pregenerateKeyframes)(generator, toUnit));
            return keyframesCache.get(generator);
        };
        return {
            createAnimation: (keyframes, shouldGenerate = true, getOrigin, name, motionValue)=>{
                let settings;
                let origin;
                let target;
                let velocity = 0;
                let toUnit = (0, _utils.noopReturn);
                const numKeyframes = keyframes.length;
                /**
                 * If we should generate an animation for this value, run some preperation
                 * like resolving target/origin, finding a unit (if any) and determine if
                 * it is actually possible to generate.
                 */ if (shouldGenerate) {
                    toUnit = (0, _getUnitEsJs.getUnitConverter)(keyframes, name ? (0, _transformsEsJs.transformDefinitions).get((0, _getStyleNameEsJs.getStyleName)(name)) : undefined);
                    const targetDefinition = keyframes[numKeyframes - 1];
                    target = getAsNumber(targetDefinition);
                    if (numKeyframes > 1 && keyframes[0] !== null) /**
                         * If we have multiple keyframes, take the initial keyframe as the origin.
                         */ origin = getAsNumber(keyframes[0]);
                    else {
                        const prevGenerator = motionValue === null || motionValue === void 0 ? void 0 : motionValue.generator;
                        /**
                         * If we have an existing generator for this value we can use it to resolve
                         * the animation's current value and velocity.
                         */ if (prevGenerator) {
                            /**
                             * If we have a generator for this value we can use it to resolve
                             * the animations's current value and velocity.
                             */ const { animation , generatorStartTime  } = motionValue;
                            const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
                            const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
                            const prevGeneratorCurrent = prevGenerator(currentTime).current;
                            origin = prevGeneratorCurrent;
                            velocity = (0, _generators.calcGeneratorVelocity)((t)=>prevGenerator(t).current, currentTime, prevGeneratorCurrent);
                        } else if (getOrigin) /**
                             * As a last resort, read the origin from the DOM.
                             */ origin = getAsNumber(getOrigin());
                    }
                }
                /**
                 * If we've determined it is possible to generate an animation, do so.
                 */ if (canGenerate(origin) && canGenerate(target)) {
                    const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
                    settings = Object.assign(Object.assign({}, getKeyframes(generator, toUnit)), {
                        easing: "linear"
                    });
                    // TODO Add test for this
                    if (motionValue) {
                        motionValue.generator = generator;
                        motionValue.generatorStartTime = performance.now();
                    }
                }
                /**
                 * If by now we haven't generated a set of keyframes, create a generic generator
                 * based on the provided props that animates from 0-100 to fetch a rough
                 * "overshootDuration" - the moment when the generator first hits the animation target.
                 * Then return animation settings that will run a normal animation for that duration.
                 */ if (!settings) {
                    const keyframesMetadata = getKeyframes(getGenerator(0, 100));
                    settings = {
                        easing: "ease",
                        duration: keyframesMetadata.overshootDuration
                    };
                }
                return settings;
            }
        };
    };
}

},{"@motionone/generators":"17PnZ","@motionone/utils":"krBNu","../animate/utils/get-unit.es.js":"ldpTn","../animate/utils/transforms.es.js":"3akS9","../animate/utils/get-style-name.es.js":"ksBTX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6w57n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glide", ()=>glide);
var _generators = require("@motionone/generators");
var _createGeneratorEasingEsJs = require("../create-generator-easing.es.js");
const glide = (0, _createGeneratorEasingEsJs.createGeneratorEasing)((0, _generators.glide));

},{"@motionone/generators":"17PnZ","../create-generator-easing.es.js":"deZka","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gjZoF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inView", ()=>inView);
var _resolveElementsEsJs = require("../utils/resolve-elements.es.js");
var _utils = require("@motionone/utils");
const thresholds = {
    any: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root , margin: rootMargin , amount ="any"  } = {}) {
    /**
     * If this browser doesn't support IntersectionObserver, return a dummy stop function.
     * Default triggering of onStart is tricky - it could be used for starting/stopping
     * videos, lazy loading content etc. We could provide an option to enable a fallback, or
     * provide a fallback callback option.
     */ if (typeof IntersectionObserver === "undefined") return ()=>{};
    const elements = (0, _resolveElementsEsJs.resolveElements)(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if ((0, _utils.isFunction)(newOnEnd)) activeIntersections.set(entry.target, newOnEnd);
                else observer.unobserve(entry.target);
            } else if (onEnd) {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}

},{"../utils/resolve-elements.es.js":"KZgGT","@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ucYu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resize", ()=>resize);
var _handleElementEsJs = require("./handle-element.es.js");
var _handleWindowEsJs = require("./handle-window.es.js");
var _utils = require("@motionone/utils");
function resize(a, b) {
    return (0, _utils.isFunction)(a) ? (0, _handleWindowEsJs.resizeWindow)(a) : (0, _handleElementEsJs.resizeElement)(a, b);
}

},{"./handle-element.es.js":"aRilw","./handle-window.es.js":"jcB2n","@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRilw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeElement", ()=>resizeElement);
var _resolveElementsEsJs = require("../../utils/resolve-elements.es.js");
const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize , blockSize  } = borderBoxSize[0];
        return {
            width: inlineSize,
            height: blockSize
        };
    } else if (target instanceof SVGElement && "getBBox" in target) return target.getBBox();
    else return {
        width: target.offsetWidth,
        height: target.offsetHeight
    };
}
function notifyTarget({ target , contentRect , borderBoxSize  }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 || _a.forEach((handler)=>{
        handler({
            target,
            contentSize: contentRect,
            get size () {
                return getElementSize(target, borderBoxSize);
            }
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined") return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer) createResizeObserver();
    const elements = (0, _resolveElementsEsJs.resolveElements)(target);
    elements.forEach((element)=>{
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 || observer.observe(element);
    });
    return ()=>{
        elements.forEach((element)=>{
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 || elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) observer === null || observer === void 0 || observer.unobserve(element);
        });
    };
}

},{"../../utils/resolve-elements.es.js":"KZgGT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcB2n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeWindow", ()=>resizeWindow);
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = ()=>{
        const size = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const info = {
            target: window,
            size,
            contentSize: size
        };
        windowCallbacks.forEach((callback)=>callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler) createWindowResizeHandler();
    return ()=>{
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) windowResizeHandler = undefined;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fySeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scroll", ()=>scroll);
var _tslib = require("tslib");
var _indexEsJs = require("../resize/index.es.js");
var _infoEsJs = require("./info.es.js");
var _onScrollHandlerEsJs = require("./on-scroll-handler.es.js");
const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element)=>element === document.documentElement ? window : element;
function scroll(onScroll, _a = {}) {
    var { container =document.documentElement  } = _a, options = (0, _tslib.__rest)(_a, [
        "container"
    ]);
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */ if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */ const info = (0, _infoEsJs.createScrollInfo)();
    const containerHandler = (0, _onScrollHandlerEsJs.createOnScrollHandler)(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */ if (!scrollListeners.has(container)) {
        const listener = ()=>{
            const time = performance.now();
            for (const handler of containerHandlers)handler.measure();
            for (const handler of containerHandlers)handler.update(time);
            for (const handler of containerHandlers)handler.notify();
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, {
            passive: true
        });
        if (container !== document.documentElement) resizeListeners.set(container, (0, _indexEsJs.resize)(container, listener));
        target.addEventListener("scroll", listener, {
            passive: true
        });
    }
    const listener = scrollListeners.get(container);
    const onLoadProcesss = requestAnimationFrame(listener);
    return ()=>{
        var _a;
        if (typeof onScroll !== "function") onScroll.stop();
        cancelAnimationFrame(onLoadProcesss);
        /**
         * Check if we even have any handlers for this container.
         */ const containerHandlers = onScrollHandlers.get(container);
        if (!containerHandlers) return;
        containerHandlers.delete(containerHandler);
        if (containerHandlers.size) return;
        /**
         * If no more handlers, remove the scroll listener too.
         */ const listener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (listener) {
            getEventTarget(container).removeEventListener("scroll", listener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 || _a();
            window.removeEventListener("resize", listener);
        }
    };
}

},{"tslib":"eIL45","../resize/index.es.js":"3ucYu","./info.es.js":"eDt4T","./on-scroll-handler.es.js":"8Y3X4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eDt4T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createScrollInfo", ()=>createScrollInfo);
parcelHelpers.export(exports, "updateScrollInfo", ()=>updateScrollInfo);
var _utils = require("@motionone/utils");
/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */ const maxElapsed = 50;
const createAxisInfo = ()=>({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    });
const createScrollInfo = ()=>({
        time: 0,
        x: createAxisInfo(),
        y: createAxisInfo()
    });
const keys = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length , position  } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element["scroll" + position];
    axis.scrollLength = element["scroll" + length] - element["client" + length];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0, _utils.progress)(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity = elapsed > maxElapsed ? 0 : (0, _utils.velocityPerSecond)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Y3X4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createOnScrollHandler", ()=>createOnScrollHandler);
var _utils = require("@motionone/utils");
var _infoEsJs = require("./info.es.js");
var _indexEsJs = require("./offsets/index.es.js");
function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */ info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while(node && node != container){
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    const axis = options.axis || "y";
    return {
        measure: ()=>measure(element, options.target, info),
        update: (time)=>{
            (0, _infoEsJs.updateScrollInfo)(element, info, time);
            if (options.offset || options.target) (0, _indexEsJs.resolveOffsets)(element, info, options);
        },
        notify: (0, _utils.isFunction)(onScroll) ? ()=>onScroll(info) : scrubAnimation(onScroll, info[axis])
    };
}
function scrubAnimation(controls, axisInfo) {
    controls.pause();
    controls.forEachNative((animation, { easing  })=>{
        var _a, _b;
        if (animation.updateDuration) {
            if (!easing) animation.easing = (0, _utils.noopReturn);
            animation.updateDuration(1);
        } else {
            const timingOptions = {
                duration: 1000
            };
            if (!easing) timingOptions.easing = "linear";
            (_b = (_a = animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming) === null || _b === void 0 || _b.call(_a, timingOptions);
        }
    });
    return ()=>{
        controls.currentTime = axisInfo.progress;
    };
}

},{"@motionone/utils":"krBNu","./info.es.js":"eDt4T","./offsets/index.es.js":"5Sl1H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Sl1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveOffsets", ()=>resolveOffsets);
var _utils = require("@motionone/utils");
var _insetEsJs = require("./inset.es.js");
var _presetsEsJs = require("./presets.es.js");
var _offsetEsJs = require("./offset.es.js");
const point = {
    x: 0,
    y: 0
};
function resolveOffsets(container, info, options) {
    let { offset: offsetDefinition = (0, _presetsEsJs.ScrollOffset).All  } = options;
    const { target =container , axis ="y"  } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0, _insetEsJs.calcInset)(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */ const targetSize = target === container ? {
        width: container.scrollWidth,
        height: container.scrollHeight
    } : {
        width: target.clientWidth,
        height: target.clientHeight
    };
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */ info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */ let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for(let i = 0; i < numOffsets; i++){
        const offset = (0, _offsetEsJs.resolveOffset)(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) hasChanged = true;
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */ if (hasChanged) {
        info[axis].interpolate = (0, _utils.interpolate)((0, _utils.defaultOffset)(numOffsets), info[axis].offset);
        info[axis].interpolatorOffsets = [
            ...info[axis].offset
        ];
    }
    info[axis].progress = info[axis].interpolate(info[axis].current);
}

},{"@motionone/utils":"krBNu","./inset.es.js":"iYtaW","./presets.es.js":"gHEKo","./offset.es.js":"iuNov","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYtaW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcInset", ()=>calcInset);
function calcInset(element, container) {
    let inset = {
        x: 0,
        y: 0
    };
    let current = element;
    while(current && current !== container){
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        } else if (current instanceof SVGGraphicsElement && "getBBox" in current) {
            const { top , left  } = current.getBBox();
            inset.x += left;
            inset.y += top;
            /**
             * Assign the next parent element as the <svg /> tag.
             */ while(current && current.tagName !== "svg")current = current.parentNode;
        }
    }
    return inset;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHEKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollOffset", ()=>ScrollOffset);
const ScrollOffset = {
    Enter: [
        [
            0,
            1
        ],
        [
            1,
            1
        ]
    ],
    Exit: [
        [
            0,
            0
        ],
        [
            1,
            0
        ]
    ],
    Any: [
        [
            1,
            0
        ],
        [
            0,
            1
        ]
    ],
    All: [
        [
            0,
            0
        ],
        [
            1,
            1
        ]
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iuNov":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveOffset", ()=>resolveOffset);
var _utils = require("@motionone/utils");
var _edgeEsJs = require("./edge.es.js");
const defaultOffset = [
    0,
    0
];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if ((0, _utils.isNumber)(offset)) /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */ offsetDefinition = [
        offset,
        offset
    ];
    else if ((0, _utils.isString)(offset)) {
        offset = offset.trim();
        if (offset.includes(" ")) offsetDefinition = offset.split(" ");
        else /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */ offsetDefinition = [
            offset,
            (0, _edgeEsJs.namedEdges)[offset] ? offset : `0`
        ];
    }
    targetPoint = (0, _edgeEsJs.resolveEdge)(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0, _edgeEsJs.resolveEdge)(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}

},{"@motionone/utils":"krBNu","./edge.es.js":"2pTUT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2pTUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "namedEdges", ()=>namedEdges);
parcelHelpers.export(exports, "resolveEdge", ()=>resolveEdge);
var _utils = require("@motionone/utils");
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */ if (namedEdges[edge] !== undefined) edge = namedEdges[edge];
    /**
     * Handle unit values
     */ if ((0, _utils.isString)(edge)) {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) delta = asNumber;
        else if (edge.endsWith("%")) edge = asNumber / 100;
        else if (edge.endsWith("vw")) delta = asNumber / 100 * document.documentElement.clientWidth;
        else if (edge.endsWith("vh")) delta = asNumber / 100 * document.documentElement.clientHeight;
        else edge = asNumber;
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */ if ((0, _utils.isNumber)(edge)) delta = length * edge;
    return inset + delta;
}

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62kdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMotionState", ()=>createMotionState);
parcelHelpers.export(exports, "mountedStates", ()=>mountedStates);
var _tslib = require("tslib");
var _heyListen = require("hey-listen");
var _utils = require("@motionone/utils");
var _animateStyleEsJs = require("../animate/animate-style.es.js");
var _styleEsJs = require("../animate/style.es.js");
var _optionsEsJs = require("../animate/utils/options.es.js");
var _hasChangedEsJs = require("./utils/has-changed.es.js");
var _resolveVariantEsJs = require("./utils/resolve-variant.es.js");
var _scheduleEsJs = require("./utils/schedule.es.js");
var _inViewEsJs = require("./gestures/in-view.es.js");
var _hoverEsJs = require("./gestures/hover.es.js");
var _pressEsJs = require("./gestures/press.es.js");
var _eventsEsJs = require("./utils/events.es.js");
var _animation = require("@motionone/animation");
const gestures = {
    inView: (0, _inViewEsJs.inView),
    hover: (0, _hoverEsJs.hover),
    press: (0, _pressEsJs.press)
};
/**
 * A list of state types, in priority order. If a value is defined in
 * a righter-most type, it will override any definition in a lefter-most.
 */ const stateTypes = [
    "initial",
    "animate",
    ...Object.keys(gestures),
    "exit"
];
/**
 * A global store of all generated motion states. This can be used to lookup
 * a motion state for a given Element.
 */ const mountedStates = new WeakMap();
function createMotionState(options = {}, parent) {
    /**
     * The element represented by the motion state. This is an empty reference
     * when we create the state to support SSR and allow for later mounting
     * in view libraries.
     *
     * @ts-ignore
     */ let element;
    /**
     * Calculate a depth that we can use to order motion states by tree depth.
     */ let depth = parent ? parent.getDepth() + 1 : 0;
    /**
     * Track which states are currently active.
     */ const activeStates = {
        initial: true,
        animate: true
    };
    /**
     * A map of functions that, when called, will remove event listeners for
     * a given gesture.
     */ const gestureSubscriptions = {};
    /**
     * Initialise a context to share through motion states. This
     * will be populated by variant names (if any).
     */ const context = {};
    for (const name of stateTypes)context[name] = typeof options[name] === "string" ? options[name] : parent === null || parent === void 0 ? void 0 : parent.getContext()[name];
    /**
     * If initial is set to false we use the animate prop as the initial
     * animation state.
     */ const initialVariantSource = options.initial === false ? "animate" : "initial";
    /**
     * Destructure an initial target out from the resolved initial variant.
     */ let _a = (0, _resolveVariantEsJs.resolveVariant)(options[initialVariantSource] || context[initialVariantSource], options.variants) || {}, target = (0, _tslib.__rest)(_a, [
        "transition"
    ]);
    /**
     * The base target is a cached map of values that we'll use to animate
     * back to if a value is removed from all active state types. This
     * is usually the initial value as read from the DOM, for instance if
     * it hasn't been defined in initial.
     */ const baseTarget = Object.assign({}, target);
    /**
     * A generator that will be processed by the global animation scheduler.
     * This yeilds when it switches from reading the DOM to writing to it
     * to prevent layout thrashing.
     */ function* animateUpdates() {
        var _a, _b;
        const prevTarget = target;
        target = {};
        const animationOptions = {};
        for (const name of stateTypes){
            if (!activeStates[name]) continue;
            const variant = (0, _resolveVariantEsJs.resolveVariant)(options[name]);
            if (!variant) continue;
            for(const key in variant){
                if (key === "transition") continue;
                target[key] = variant[key];
                animationOptions[key] = (0, _optionsEsJs.getOptions)((_b = (_a = variant.transition) !== null && _a !== void 0 ? _a : options.transition) !== null && _b !== void 0 ? _b : {}, key);
            }
        }
        const allTargetKeys = new Set([
            ...Object.keys(target),
            ...Object.keys(prevTarget)
        ]);
        const animationFactories = [];
        allTargetKeys.forEach((key)=>{
            var _a;
            if (target[key] === undefined) target[key] = baseTarget[key];
            if ((0, _hasChangedEsJs.hasChanged)(prevTarget[key], target[key])) {
                (_a = baseTarget[key]) !== null && _a !== void 0 ? _a : baseTarget[key] = (0, _styleEsJs.style).get(element, key);
                animationFactories.push((0, _animateStyleEsJs.animateStyle)(element, key, target[key], animationOptions[key], (0, _animation.Animation)));
            }
        });
        // Wait for all animation states to read from the DOM
        yield;
        const animations = animationFactories.map((factory)=>factory()).filter(Boolean);
        if (!animations.length) return;
        const animationTarget = target;
        element.dispatchEvent((0, _eventsEsJs.motionEvent)("motionstart", animationTarget));
        Promise.all(animations.map((animation)=>animation.finished)).then(()=>{
            element.dispatchEvent((0, _eventsEsJs.motionEvent)("motioncomplete", animationTarget));
        }).catch((0, _utils.noop));
    }
    const setGesture = (name, isActive)=>()=>{
            activeStates[name] = isActive;
            (0, _scheduleEsJs.scheduleAnimation)(state);
        };
    const updateGestureSubscriptions = ()=>{
        for(const name in gestures){
            const isGestureActive = gestures[name].isActive(options);
            const remove = gestureSubscriptions[name];
            if (isGestureActive && !remove) gestureSubscriptions[name] = gestures[name].subscribe(element, {
                enable: setGesture(name, true),
                disable: setGesture(name, false)
            }, options);
            else if (!isGestureActive && remove) {
                remove();
                delete gestureSubscriptions[name];
            }
        }
    };
    const state = {
        update: (newOptions)=>{
            if (!element) return;
            options = newOptions;
            updateGestureSubscriptions();
            (0, _scheduleEsJs.scheduleAnimation)(state);
        },
        setActive: (name, isActive)=>{
            if (!element) return;
            activeStates[name] = isActive;
            (0, _scheduleEsJs.scheduleAnimation)(state);
        },
        animateUpdates,
        getDepth: ()=>depth,
        getTarget: ()=>target,
        getOptions: ()=>options,
        getContext: ()=>context,
        mount: (newElement)=>{
            (0, _heyListen.invariant)(Boolean(newElement), "Animation state must be mounted with valid Element");
            element = newElement;
            mountedStates.set(element, state);
            updateGestureSubscriptions();
            return ()=>{
                mountedStates.delete(element);
                (0, _scheduleEsJs.unscheduleAnimation)(state);
                for(const key in gestureSubscriptions)gestureSubscriptions[key]();
            };
        },
        isMounted: ()=>Boolean(element)
    };
    return state;
}

},{"tslib":"eIL45","hey-listen":"8yK8Z","@motionone/utils":"krBNu","../animate/animate-style.es.js":"3Iur2","../animate/style.es.js":"gYtky","../animate/utils/options.es.js":"fCKN3","./utils/has-changed.es.js":"iYOpx","./utils/resolve-variant.es.js":"1fRlC","./utils/schedule.es.js":"NJrJF","./gestures/in-view.es.js":"74O7b","./gestures/hover.es.js":"1t5Lv","./gestures/press.es.js":"7xW6Y","./utils/events.es.js":"2uqa6","@motionone/animation":"ebY3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYOpx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged);
parcelHelpers.export(exports, "shallowCompare", ()=>shallowCompare);
function hasChanged(a, b) {
    if (typeof a !== typeof b) return true;
    if (Array.isArray(a) && Array.isArray(b)) return !shallowCompare(a, b);
    return a !== b;
}
function shallowCompare(next, prev) {
    const prevLength = prev.length;
    if (prevLength !== next.length) return false;
    for(let i = 0; i < prevLength; i++){
        if (prev[i] !== next[i]) return false;
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1fRlC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveVariant", ()=>resolveVariant);
var _isVariantEsJs = require("./is-variant.es.js");
function resolveVariant(definition, variants) {
    if ((0, _isVariantEsJs.isVariant)(definition)) return definition;
    else if (definition && variants) return variants[definition];
}

},{"./is-variant.es.js":"cpoLp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpoLp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isVariant", ()=>isVariant);
function isVariant(definition) {
    return typeof definition === "object";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"NJrJF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleAnimation", ()=>scheduleAnimation);
parcelHelpers.export(exports, "unscheduleAnimation", ()=>unscheduleAnimation);
var _utils = require("@motionone/utils");
let scheduled = undefined;
function processScheduledAnimations() {
    if (!scheduled) return;
    const generators = scheduled.sort(compareByDepth).map(fireAnimateUpdates);
    generators.forEach(fireNext);
    generators.forEach(fireNext);
    scheduled = undefined;
}
function scheduleAnimation(state) {
    if (!scheduled) {
        scheduled = [
            state
        ];
        requestAnimationFrame(processScheduledAnimations);
    } else (0, _utils.addUniqueItem)(scheduled, state);
}
function unscheduleAnimation(state) {
    scheduled && (0, _utils.removeItem)(scheduled, state);
}
const compareByDepth = (a, b)=>a.getDepth() - b.getDepth();
const fireAnimateUpdates = (state)=>state.animateUpdates();
const fireNext = (iterator)=>iterator.next();

},{"@motionone/utils":"krBNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74O7b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inView", ()=>inView);
var _tslib = require("tslib");
var _eventsEsJs = require("../utils/events.es.js");
var _inViewEsJs = require("../../gestures/in-view.es.js");
const inView = {
    isActive: (options)=>Boolean(options.inView),
    subscribe: (element, { enable , disable  }, { inViewOptions ={}  })=>{
        const { once  } = inViewOptions, viewOptions = (0, _tslib.__rest)(inViewOptions, [
            "once"
        ]);
        return (0, _inViewEsJs.inView)(element, (enterEntry)=>{
            enable();
            (0, _eventsEsJs.dispatchViewEvent)(element, "viewenter", enterEntry);
            if (!once) return (leaveEntry)=>{
                disable();
                (0, _eventsEsJs.dispatchViewEvent)(element, "viewleave", leaveEntry);
            };
        }, viewOptions);
    }
};

},{"tslib":"eIL45","../utils/events.es.js":"2uqa6","../../gestures/in-view.es.js":"gjZoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2uqa6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dispatchPointerEvent", ()=>dispatchPointerEvent);
parcelHelpers.export(exports, "dispatchViewEvent", ()=>dispatchViewEvent);
parcelHelpers.export(exports, "motionEvent", ()=>motionEvent);
const motionEvent = (name, target)=>new CustomEvent(name, {
        detail: {
            target
        }
    });
function dispatchPointerEvent(element, name, event) {
    element.dispatchEvent(new CustomEvent(name, {
        detail: {
            originalEvent: event
        }
    }));
}
function dispatchViewEvent(element, name, entry) {
    element.dispatchEvent(new CustomEvent(name, {
        detail: {
            originalEntry: entry
        }
    }));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1t5Lv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hover", ()=>hover);
var _eventsEsJs = require("../utils/events.es.js");
const mouseEvent = (element, name, action)=>(event)=>{
        if (event.pointerType && event.pointerType !== "mouse") return;
        action();
        (0, _eventsEsJs.dispatchPointerEvent)(element, name, event);
    };
const hover = {
    isActive: (options)=>Boolean(options.hover),
    subscribe: (element, { enable , disable  })=>{
        const onEnter = mouseEvent(element, "hoverstart", enable);
        const onLeave = mouseEvent(element, "hoverend", disable);
        element.addEventListener("pointerenter", onEnter);
        element.addEventListener("pointerleave", onLeave);
        return ()=>{
            element.removeEventListener("pointerenter", onEnter);
            element.removeEventListener("pointerleave", onLeave);
        };
    }
};

},{"../utils/events.es.js":"2uqa6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7xW6Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "press", ()=>press);
var _eventsEsJs = require("../utils/events.es.js");
const press = {
    isActive: (options)=>Boolean(options.press),
    subscribe: (element, { enable , disable  })=>{
        const onPointerUp = (event)=>{
            disable();
            (0, _eventsEsJs.dispatchPointerEvent)(element, "pressend", event);
            window.removeEventListener("pointerup", onPointerUp);
        };
        const onPointerDown = (event)=>{
            enable();
            (0, _eventsEsJs.dispatchPointerEvent)(element, "pressstart", event);
            window.addEventListener("pointerup", onPointerUp);
        };
        element.addEventListener("pointerdown", onPointerDown);
        return ()=>{
            element.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointerup", onPointerUp);
        };
    }
};

},{"../utils/events.es.js":"2uqa6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ejYmc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStyles", ()=>createStyles);
var _utils = require("@motionone/utils");
var _transformsEsJs = require("./transforms.es.js");
function createStyles(keyframes) {
    const initialKeyframes = {};
    const transformKeys = [];
    for(let key in keyframes){
        const value = keyframes[key];
        if ((0, _transformsEsJs.isTransform)(key)) {
            if ((0, _transformsEsJs.transformAlias)[key]) key = (0, _transformsEsJs.transformAlias)[key];
            transformKeys.push(key);
            key = (0, _transformsEsJs.asTransformCssVar)(key);
        }
        let initialKeyframe = Array.isArray(value) ? value[0] : value;
        /**
         * If this is a number and we have a default value type, convert the number
         * to this type.
         */ const definition = (0, _transformsEsJs.transformDefinitions).get(key);
        if (definition) initialKeyframe = (0, _utils.isNumber)(value) ? definition.toDefaultUnit(value) : value;
        initialKeyframes[key] = initialKeyframe;
    }
    if (transformKeys.length) initialKeyframes.transform = (0, _transformsEsJs.buildTransformTemplate)(transformKeys);
    return initialKeyframes;
}

},{"@motionone/utils":"krBNu","./transforms.es.js":"3akS9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cdmxE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStyleString", ()=>createStyleString);
var _styleObjectEsJs = require("./style-object.es.js");
const camelLetterToPipeLetter = (letter)=>`-${letter.toLowerCase()}`;
const camelToPipeCase = (str)=>str.replace(/[A-Z]/g, camelLetterToPipeLetter);
function createStyleString(target = {}) {
    const styles = (0, _styleObjectEsJs.createStyles)(target);
    let style = "";
    for(const key in styles){
        style += key.startsWith("--") ? key : camelToPipeCase(key);
        style += `: ${styles[key]}; `;
    }
    return style;
}

},{"./style-object.es.js":"ejYmc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEsDf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "animateProgress", ()=>animateProgress);
var _dom = require("@motionone/dom");
var _utils = require("@motionone/utils");
var _animation = require("@motionone/animation");
function animateProgress(target, options = {}) {
    return (0, _dom.withControls)([
        ()=>{
            const animation = new (0, _animation.Animation)(target, [
                0,
                1
            ], options);
            animation.finished.catch(()=>{});
            return animation;
        }
    ], options, options.duration);
}
function animate(target, keyframesOrOptions, options) {
    const factory = (0, _utils.isFunction)(target) ? animateProgress : (0, _dom.animate);
    return factory(target, keyframesOrOptions, options);
}

},{"@motionone/dom":"krEZT","@motionone/utils":"krBNu","@motionone/animation":"ebY3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"77RTn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ifDefinedJs = require("lit-html/directives/if-defined.js");
parcelHelpers.exportAll(_ifDefinedJs, exports);

},{"lit-html/directives/if-defined.js":"fP4k4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fP4k4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ifDefined", ()=>l);
var _litHtmlJs = require("../lit-html.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const l = (l)=>null != l ? l : (0, _litHtmlJs.nothing);

},{"../lit-html.js":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lB7MY":[function(require,module,exports) {
const canPromise = require("6494caf582f523ff");
const QRCode = require("ce1a83b4a43af82e");
const CanvasRenderer = require("3df195249cba1044");
const SvgRenderer = require("8c99c6156dbc6405");
function renderCanvas(renderFunc, canvas, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === "function";
    if (!isLastArgCb && !canPromise()) throw new Error("Callback required as last argument");
    if (isLastArgCb) {
        if (argsNum < 2) throw new Error("Too few arguments provided");
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === "undefined") {
                cb = opts;
                opts = undefined;
            } else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    } else {
        if (argsNum < 1) throw new Error("Too few arguments provided");
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function(resolve, reject) {
            try {
                const data = QRCode.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
    } catch (e) {
        cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
// only svg for now.
exports.toString = renderCanvas.bind(null, function(data, _, opts) {
    return SvgRenderer.render(data, opts);
});

},{"6494caf582f523ff":"9FrZa","ce1a83b4a43af82e":"20hbG","3df195249cba1044":"2oGFV","8c99c6156dbc6405":"7Akrj"}],"9FrZa":[function(require,module,exports) {
// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
module.exports = function() {
    return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
};

},{}],"20hbG":[function(require,module,exports) {
const Utils = require("743bbad77520b4ad");
const ECLevel = require("e4cd0f1d1f51a52");
const BitBuffer = require("4e01af13d4c8b6e0");
const BitMatrix = require("fec744fa7ed1b8a");
const AlignmentPattern = require("22fd5ecf1b19e9ad");
const FinderPattern = require("9b291da9e3b9f9d4");
const MaskPattern = require("49540459ab88a438");
const ECCode = require("bc4c6d1b04efea5a");
const ReedSolomonEncoder = require("4aa6e74dd39ccd");
const Version = require("e3b437ea1ca02eff");
const FormatInfo = require("86409d11633fa0a5");
const Mode = require("293d6d583a614d9c");
const Segments = require("e800540eb16de17a");
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/ /**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupFinderPattern(matrix, version) {
    const size = matrix.size;
    const pos = FinderPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -1; r <= 7; r++){
            if (row + r <= -1 || size <= row + r) continue;
            for(let c = -1; c <= 7; c++){
                if (col + c <= -1 || size <= col + c) continue;
                if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) matrix.set(row + r, col + c, true, true);
                else matrix.set(row + r, col + c, false, true);
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */ function setupTimingPattern(matrix) {
    const size = matrix.size;
    for(let r = 8; r < size - 8; r++){
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupAlignmentPattern(matrix, version) {
    const pos = AlignmentPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -2; r <= 2; r++){
            for(let c = -2; c <= 2; c++)if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) matrix.set(row + r, col + c, true, true);
            else matrix.set(row + r, col + c, false, true);
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupVersionInfo(matrix, version) {
    const size = matrix.size;
    const bits = Version.getEncodedBits(version);
    let row, col, mod;
    for(let i = 0; i < 18; i++){
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */ function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    const size = matrix.size;
    const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
    let i, mod;
    for(i = 0; i < 15; i++){
        mod = (bits >> i & 1) === 1;
        // vertical
        if (i < 6) matrix.set(i, 8, mod, true);
        else if (i < 8) matrix.set(i + 1, 8, mod, true);
        else matrix.set(size - 15 + i, 8, mod, true);
        // horizontal
        if (i < 8) matrix.set(8, size - i - 1, mod, true);
        else if (i < 9) matrix.set(8, 15 - i - 1 + 1, mod, true);
        else matrix.set(8, 15 - i - 1, mod, true);
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */ function setupData(matrix, data) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for(let col = size - 1; col > 0; col -= 2){
        if (col === 6) col--;
        while(true){
            for(let c = 0; c < 2; c++)if (!matrix.isReserved(row, col - c)) {
                let dark = false;
                if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                    byteIndex++;
                    bitIndex = 7;
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */ function createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    const buffer = new BitBuffer();
    segments.forEach(function(data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) buffer.put(0, 4);
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while(buffer.getLengthInBits() % 8 !== 0)buffer.putBit(0);
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for(let i = 0; i < remainingByte; i++)buffer.put(i % 2 ? 0x11 : 0xEC, 8);
    return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */ function createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    const rs = new ReedSolomonEncoder(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for(let b = 0; b < ecTotalBlocks; b++){
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    const data = new Uint8Array(totalCodewords);
    let index = 0;
    let i, r;
    // Add data codewords
    for(i = 0; i < maxDataSize; i++){
        for(r = 0; r < ecTotalBlocks; r++)if (i < dcData[r].length) data[index++] = dcData[r][i];
    }
    // Apped EC codewords
    for(i = 0; i < ecCount; i++)for(r = 0; r < ecTotalBlocks; r++)data[index++] = ecData[r][i];
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */ function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
    let segments;
    if (Array.isArray(data)) segments = Segments.fromArray(data);
    else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments = Segments.fromString(data, estimatedVersion || 40);
    } else throw new Error("Invalid data");
    // Get the min version that can contain data
    const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) throw new Error("The amount of data is too big to be stored in a QR Code");
    // If not specified, use min version as default
    if (!version) version = bestVersion;
    else if (version < bestVersion) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n");
    const dataBits = createData(version, errorCorrectionLevel, segments);
    // Allocate matrix buffer
    const moduleCount = Utils.getSymbolSize(version);
    const modules = new BitMatrix(moduleCount);
    // Add function modules
    setupFinderPattern(modules, version);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version >= 7) setupVersionInfo(modules, version);
    // Add data codewords
    setupData(modules, dataBits);
    if (isNaN(maskPattern)) // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    // Apply mask pattern
    MaskPattern.applyMask(maskPattern, modules);
    // Replace format info bits with correct values
    setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
    return {
        modules: modules,
        version: version,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern,
        segments: segments
    };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */ exports.create = function create(data, options) {
    if (typeof data === "undefined" || data === "") throw new Error("No input text");
    let errorCorrectionLevel = ECLevel.M;
    let version;
    let mask;
    if (typeof options !== "undefined") {
        // Use higher error correction level as default
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) Utils.setToSJISFunction(options.toSJISFunc);
    }
    return createSymbol(data, version, errorCorrectionLevel, mask);
};

},{"743bbad77520b4ad":"iXLHI","e4cd0f1d1f51a52":"kbPwo","4e01af13d4c8b6e0":"kiPfj","fec744fa7ed1b8a":"fTjkX","22fd5ecf1b19e9ad":"1o9KB","9b291da9e3b9f9d4":"dc6Ma","49540459ab88a438":"fyimH","bc4c6d1b04efea5a":"5yWYH","4aa6e74dd39ccd":"47Qq0","e3b437ea1ca02eff":"a8ag2","86409d11633fa0a5":"iThdR","293d6d583a614d9c":"f1e9A","e800540eb16de17a":"4tKki"}],"iXLHI":[function(require,module,exports) {
let toSJISFunction;
const CODEWORDS_COUNT = [
    0,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */ exports.getSymbolSize = function getSymbolSize(version) {
    if (!version) throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */ exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
    return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */ exports.getBCHDigit = function(data) {
    let digit = 0;
    while(data !== 0){
        digit++;
        data >>>= 1;
    }
    return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
    if (typeof f !== "function") throw new Error('"toSJISFunc" is not a valid function.');
    toSJISFunction = f;
};
exports.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== "undefined";
};
exports.toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
};

},{}],"kbPwo":[function(require,module,exports) {
exports.L = {
    bit: 1
};
exports.M = {
    bit: 0
};
exports.Q = {
    bit: 3
};
exports.H = {
    bit: 2
};
function fromString(string) {
    if (typeof string !== "string") throw new Error("Param is not a string");
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case "l":
        case "low":
            return exports.L;
        case "m":
        case "medium":
            return exports.M;
        case "q":
        case "quartile":
            return exports.Q;
        case "h":
        case "high":
            return exports.H;
        default:
            throw new Error("Unknown EC Level: " + string);
    }
}
exports.isValid = function isValid(level) {
    return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) return value;
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

},{}],"kiPfj":[function(require,module,exports) {
function BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
BitBuffer.prototype = {
    get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
        for(let i = 0; i < length; i++)this.putBit((num >>> length - i - 1 & 1) === 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) this.buffer.push(0);
        if (bit) this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        this.length++;
    }
};
module.exports = BitBuffer;

},{}],"fTjkX":[function(require,module,exports) {
/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */ function BitMatrix(size) {
    if (!size || size < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */ BitMatrix.prototype.set = function(row, col, value, reserved) {
    const index = row * this.size + col;
    this.data[index] = value;
    if (reserved) this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */ BitMatrix.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */ BitMatrix.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */ BitMatrix.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;

},{}],"1o9KB":[function(require,module,exports) {
/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */ const getSymbolSize = require("6032185e537913f8").getSymbolSize;
/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */ exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    const posCount = Math.floor(version / 7) + 2;
    const size = getSymbolSize(version);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [
        size - 7
    ] // Last coord is always (size - 7)
    ;
    for(let i = 1; i < posCount - 1; i++)positions[i] = positions[i - 1] - intervals;
    positions.push(6) // First coord is always 6
    ;
    return positions.reverse();
};
/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const coords = [];
    const pos = exports.getRowColCoords(version);
    const posLength = pos.length;
    for(let i = 0; i < posLength; i++)for(let j = 0; j < posLength; j++){
        // Skip if position is occupied by finder patterns
        if (i === 0 && j === 0 || // top-left
        i === 0 && j === posLength - 1 || // bottom-left
        i === posLength - 1 && j === 0) continue;
        coords.push([
            pos[i],
            pos[j]
        ]);
    }
    return coords;
};

},{"6032185e537913f8":"iXLHI"}],"dc6Ma":[function(require,module,exports) {
const getSymbolSize = require("6080c7283af40ec3").getSymbolSize;
const FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const size = getSymbolSize(version);
    return [
        // top-left
        [
            0,
            0
        ],
        // top-right
        [
            size - FINDER_PATTERN_SIZE,
            0
        ],
        // bottom-left
        [
            0,
            size - FINDER_PATTERN_SIZE
        ]
    ];
};

},{"6080c7283af40ec3":"iXLHI"}],"fyimH":[function(require,module,exports) {
/**
 * Data mask pattern reference
 * @type {Object}
 */ exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */ const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
};
/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */ exports.isValid = function isValid(mask) {
    return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
};
/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */ exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
};
/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/ exports.getPenaltyN1 = function getPenaltyN1(data) {
    const size = data.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for(let row = 0; row < size; row++){
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for(let col = 0; col < size; col++){
            let module = data.get(row, col);
            if (module === lastCol) sameCountCol++;
            else {
                if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
                lastCol = module;
                sameCountCol = 1;
            }
            module = data.get(col, row);
            if (module === lastRow) sameCountRow++;
            else {
                if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
                lastRow = module;
                sameCountRow = 1;
            }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
};
/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */ exports.getPenaltyN2 = function getPenaltyN2(data) {
    const size = data.size;
    let points = 0;
    for(let row = 0; row < size - 1; row++)for(let col = 0; col < size - 1; col++){
        const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0) points++;
    }
    return points * PenaltyScores.N2;
};
/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */ exports.getPenaltyN3 = function getPenaltyN3(data) {
    const size = data.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for(let row = 0; row < size; row++){
        bitsCol = bitsRow = 0;
        for(let col = 0; col < size; col++){
            bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
            if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
            bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
            if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
        }
    }
    return points * PenaltyScores.N3;
};
/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */ exports.getPenaltyN4 = function getPenaltyN4(data) {
    let darkCount = 0;
    const modulesCount = data.data.length;
    for(let i = 0; i < modulesCount; i++)darkCount += data.data[i];
    const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
};
/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */ function getMaskAt(maskPattern, i, j) {
    switch(maskPattern){
        case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
            return i % 2 === 0;
        case exports.Patterns.PATTERN010:
            return j % 3 === 0;
        case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
            throw new Error("bad maskPattern:" + maskPattern);
    }
}
/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */ exports.applyMask = function applyMask(pattern, data) {
    const size = data.size;
    for(let col = 0; col < size; col++)for(let row = 0; row < size; row++){
        if (data.isReserved(row, col)) continue;
        data.xor(row, col, getMaskAt(pattern, row, col));
    }
};
/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */ exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    const numPatterns = Object.keys(exports.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for(let p = 0; p < numPatterns; p++){
        setupFormatFunc(p);
        exports.applyMask(p, data);
        // Calculate penalty
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        // Undo previously applied mask
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
        }
    }
    return bestPattern;
};

},{}],"5yWYH":[function(require,module,exports) {
const ECLevel = require("dd59ab8eadd40492");
const EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
];
const EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */ exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */ exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};

},{"dd59ab8eadd40492":"kbPwo"}],"47Qq0":[function(require,module,exports) {
const Polynomial = require("e4a3e9ec6aab4882");
function ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree) this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */ ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */ ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    const paddedData = new Uint8Array(data.length + this.degree);
    paddedData.set(data);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    const remainder = Polynomial.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    const start = this.degree - remainder.length;
    if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
    }
    return remainder;
};
module.exports = ReedSolomonEncoder;

},{"e4a3e9ec6aab4882":"dxhHI"}],"dxhHI":[function(require,module,exports) {
const GF = require("e9d75ea13da4cd4d");
/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */ exports.mul = function mul(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for(let i = 0; i < p1.length; i++)for(let j = 0; j < p2.length; j++)coeff[i + j] ^= GF.mul(p1[i], p2[j]);
    return coeff;
};
/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */ exports.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while(result.length - divisor.length >= 0){
        const coeff = result[0];
        for(let i = 0; i < divisor.length; i++)result[i] ^= GF.mul(divisor[i], coeff);
        // remove all zeros from buffer head
        let offset = 0;
        while(offset < result.length && result[offset] === 0)offset++;
        result = result.slice(offset);
    }
    return result;
};
/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */ exports.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([
        1
    ]);
    for(let i = 0; i < degree; i++)poly = exports.mul(poly, new Uint8Array([
        1,
        GF.exp(i)
    ]));
    return poly;
};

},{"e9d75ea13da4cd4d":"2JC5s"}],"2JC5s":[function(require,module,exports) {
const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256) /**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */ ;
(function initTables() {
    let x = 1;
    for(let i = 0; i < 255; i++){
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1 // multiply by 2
        ;
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) x ^= 0x11D;
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for(let i = 255; i < 512; i++)EXP_TABLE[i] = EXP_TABLE[i - 255];
})();
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.log = function log(n) {
    if (n < 1) throw new Error("log(" + n + ")");
    return LOG_TABLE[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.exp = function exp(n) {
    return EXP_TABLE[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */ exports.mul = function mul(x, y) {
    if (x === 0 || y === 0) return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};

},{}],"a8ag2":[function(require,module,exports) {
const Utils = require("e00f2a57088ea828");
const ECCode = require("436ebe622f51f868");
const ECLevel = require("b6ac96e4e145bdc");
const Mode = require("a1736037745cdfe6");
const VersionCheck = require("37fae0ab094b7402");
// Generator polynomial used to encode version information
const G18 = 7973;
const G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) return currentVersion;
    }
    return undefined;
}
function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
    let totalBits = 0;
    segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) return currentVersion;
    }
    return undefined;
}
/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */ exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) return parseInt(value, 10);
    return defaultValue;
};
/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */ exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!VersionCheck.isValid(version)) throw new Error("Invalid QR Code version");
    // Use Byte mode as default
    if (typeof mode === "undefined") mode = Mode.BYTE;
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === Mode.MIXED) return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
    // Return max number of storable codewords
    switch(mode){
        case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
            return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
            return Math.floor(usableBits / 8);
    }
};
/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */ exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    let seg;
    const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
    if (Array.isArray(data)) {
        if (data.length > 1) return getBestVersionForMixedData(data, ecl);
        if (data.length === 0) return 1;
        seg = data[0];
    } else seg = data;
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};
/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */ exports.getEncodedBits = function getEncodedBits(version) {
    if (!VersionCheck.isValid(version) || version < 7) throw new Error("Invalid QR Code version");
    let d = version << 12;
    while(Utils.getBCHDigit(d) - G18_BCH >= 0)d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
    return version << 12 | d;
};

},{"e00f2a57088ea828":"iXLHI","436ebe622f51f868":"5yWYH","b6ac96e4e145bdc":"kbPwo","a1736037745cdfe6":"f1e9A","37fae0ab094b7402":"enfTX"}],"f1e9A":[function(require,module,exports) {
const VersionCheck = require("23a8974cbdc042e5");
const Regex = require("e9308588f9fdcd5f");
/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */ exports.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [
        10,
        12,
        14
    ]
};
/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */ exports.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [
        9,
        11,
        13
    ]
};
/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */ exports.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [
        8,
        16,
        16
    ]
};
/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */ exports.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [
        8,
        10,
        12
    ]
};
/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */ exports.MIXED = {
    bit: -1
};
/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */ exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
    if (!VersionCheck.isValid(version)) throw new Error("Invalid version: " + version);
    if (version >= 1 && version < 10) return mode.ccBits[0];
    else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
};
/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */ exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr)) return exports.KANJI;
    else return exports.BYTE;
};
/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */ exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error("Invalid mode");
};
/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */ exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
};
/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */ function fromString(string) {
    if (typeof string !== "string") throw new Error("Param is not a string");
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case "numeric":
            return exports.NUMERIC;
        case "alphanumeric":
            return exports.ALPHANUMERIC;
        case "kanji":
            return exports.KANJI;
        case "byte":
            return exports.BYTE;
        default:
            throw new Error("Unknown mode: " + string);
    }
}
/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */ exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) return value;
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

},{"23a8974cbdc042e5":"enfTX","e9308588f9fdcd5f":"3Bqru"}],"enfTX":[function(require,module,exports) {
/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */ exports.isValid = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};

},{}],"3Bqru":[function(require,module,exports) {
const numeric = "[0-9]+";
const alphanumeric = "[A-Z $%*+\\-./:]+";
let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
kanji = kanji.replace(/u/g, "\\u");
const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
exports.KANJI = new RegExp(kanji, "g");
exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
exports.BYTE = new RegExp(byte, "g");
exports.NUMERIC = new RegExp(numeric, "g");
exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
const TEST_KANJI = new RegExp("^" + kanji + "$");
const TEST_NUMERIC = new RegExp("^" + numeric + "$");
const TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
exports.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
};

},{}],"iThdR":[function(require,module,exports) {
const Utils = require("1e1fb53bc0de3ebf");
const G15 = 1335;
const G15_MASK = 21522;
const G15_BCH = Utils.getBCHDigit(G15);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */ exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
    const data = errorCorrectionLevel.bit << 3 | mask;
    let d = data << 10;
    while(Utils.getBCHDigit(d) - G15_BCH >= 0)d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return (data << 10 | d) ^ G15_MASK;
};

},{"1e1fb53bc0de3ebf":"iXLHI"}],"4tKki":[function(require,module,exports) {
const Mode = require("fe0ef612e71614d6");
const NumericData = require("4ae370ebcc83022");
const AlphanumericData = require("1f80cec749f6bcc3");
const ByteData = require("4a22b07d21666962");
const KanjiData = require("5e65b29766009f20");
const Regex = require("823125e16b1de1be");
const Utils = require("4bef37818f8814ca");
const dijkstra = require("98030237bb4a83cb");
/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */ function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
}
/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */ function getSegments(regex, mode, str) {
    const segments = [];
    let result;
    while((result = regex.exec(str)) !== null)segments.push({
        data: result[0],
        index: result.index,
        mode: mode,
        length: result[0].length
    });
    return segments;
}
/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */ function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
    } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
    }).map(function(obj) {
        return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
        };
    });
}
/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */ function getSegmentBitsLength(length, mode) {
    switch(mode){
        case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
            return KanjiData.getBitsLength(length);
        case Mode.BYTE:
            return ByteData.getBitsLength(length);
    }
}
/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
        }
        acc.push(curr);
        return acc;
    }, []);
}
/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function buildNodes(segs) {
    const nodes = [];
    for(let i = 0; i < segs.length; i++){
        const seg = segs[i];
        switch(seg.mode){
            case Mode.NUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.ALPHANUMERIC,
                        length: seg.length
                    },
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.ALPHANUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.KANJI:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
                break;
            case Mode.BYTE:
                nodes.push([
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
        }
    }
    return nodes;
}
/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */ function buildGraph(nodes, version) {
    const table = {};
    const graph = {
        start: {}
    };
    let prevNodeIds = [
        "start"
    ];
    for(let i = 0; i < nodes.length; i++){
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for(let j = 0; j < nodeGroup.length; j++){
            const node = nodeGroup[j];
            const key = "" + i + j;
            currentNodeIds.push(key);
            table[key] = {
                node: node,
                lastCount: 0
            };
            graph[key] = {};
            for(let n = 0; n < prevNodeIds.length; n++){
                const prevNodeId = prevNodeIds[n];
                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                    graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                    table[prevNodeId].lastCount += node.length;
                } else {
                    if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                    graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
                    ;
                }
            }
        }
        prevNodeIds = currentNodeIds;
    }
    for(let n = 0; n < prevNodeIds.length; n++)graph[prevNodeIds[n]].end = 0;
    return {
        map: graph,
        table: table
    };
}
/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */ function buildSingleSegment(data, modesHint) {
    let mode;
    const bestMode = Mode.getBestModeForData(data);
    mode = Mode.from(modesHint, bestMode);
    // Make sure data can be encoded
    if (mode !== Mode.BYTE && mode.bit < bestMode.bit) throw new Error('"' + data + '"' + " cannot be encoded with mode " + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
    // Use Mode.BYTE if Kanji support is disabled
    if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) mode = Mode.BYTE;
    switch(mode){
        case Mode.NUMERIC:
            return new NumericData(data);
        case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
        case Mode.KANJI:
            return new KanjiData(data);
        case Mode.BYTE:
            return new ByteData(data);
    }
}
/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */ exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
        if (typeof seg === "string") acc.push(buildSingleSegment(seg, null));
        else if (seg.data) acc.push(buildSingleSegment(seg.data, seg.mode));
        return acc;
    }, []);
};
/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */ exports.fromString = function fromString(data, version) {
    const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version);
    const path = dijkstra.find_path(graph.map, "start", "end");
    const optimizedSegs = [];
    for(let i = 1; i < path.length - 1; i++)optimizedSegs.push(graph.table[path[i]].node);
    return exports.fromArray(mergeSegments(optimizedSegs));
};
/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */ exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};

},{"fe0ef612e71614d6":"f1e9A","4ae370ebcc83022":"c44F8","1f80cec749f6bcc3":"cdBOf","4a22b07d21666962":"ediQ9","5e65b29766009f20":"gphIw","823125e16b1de1be":"3Bqru","4bef37818f8814ca":"iXLHI","98030237bb4a83cb":"lDJz9"}],"c44F8":[function(require,module,exports) {
const Mode = require("4cdd5e38fb922452");
function NumericData(data) {
    this.mode = Mode.NUMERIC;
    this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
    let i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for(i = 0; i + 3 <= this.data.length; i += 3){
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    const remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
module.exports = NumericData;

},{"4cdd5e38fb922452":"f1e9A"}],"cdBOf":[function(require,module,exports) {
const Mode = require("d4d7d5e3b8c8530a");
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */ const ALPHA_NUM_CHARS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
];
function AlphanumericData(data) {
    this.mode = Mode.ALPHANUMERIC;
    this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
    let i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for(i = 0; i + 2 <= this.data.length; i += 2){
        // The character value of the first character is multiplied by 45
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
};
module.exports = AlphanumericData;

},{"d4d7d5e3b8c8530a":"f1e9A"}],"ediQ9":[function(require,module,exports) {
const encodeUtf8 = require("75674faf3491d857");
const Mode = require("ae8eb331ad4ea538");
function ByteData(data) {
    this.mode = Mode.BYTE;
    if (typeof data === "string") data = encodeUtf8(data);
    this.data = new Uint8Array(data);
}
ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer) {
    for(let i = 0, l = this.data.length; i < l; i++)bitBuffer.put(this.data[i], 8);
};
module.exports = ByteData;

},{"75674faf3491d857":"3UdK6","ae8eb331ad4ea538":"f1e9A"}],"3UdK6":[function(require,module,exports) {
"use strict";
module.exports = function encodeUtf8(input) {
    var result = [];
    var size = input.length;
    for(var index = 0; index < size; index++){
        var point = input.charCodeAt(index);
        if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
            var second = input.charCodeAt(index + 1);
            if (second >= 0xDC00 && second <= 0xDFFF) {
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
                index += 1;
            }
        }
        // US-ASCII
        if (point < 0x80) {
            result.push(point);
            continue;
        }
        // 2-byte UTF-8
        if (point < 0x800) {
            result.push(point >> 6 | 192);
            result.push(point & 63 | 128);
            continue;
        }
        // 3-byte UTF-8
        if (point < 0xD800 || point >= 0xE000 && point < 0x10000) {
            result.push(point >> 12 | 224);
            result.push(point >> 6 & 63 | 128);
            result.push(point & 63 | 128);
            continue;
        }
        // 4-byte UTF-8
        if (point >= 0x10000 && point <= 0x10FFFF) {
            result.push(point >> 18 | 240);
            result.push(point >> 12 & 63 | 128);
            result.push(point >> 6 & 63 | 128);
            result.push(point & 63 | 128);
            continue;
        }
        // Invalid character
        result.push(0xEF, 0xBF, 0xBD);
    }
    return new Uint8Array(result).buffer;
};

},{}],"gphIw":[function(require,module,exports) {
const Mode = require("617399140d9a4611");
const Utils = require("e50c06ea0c489d58");
function KanjiData(data) {
    this.mode = Mode.KANJI;
    this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer) {
    let i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for(i = 0; i < this.data.length; i++){
        let value = Utils.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9FFC) // Subtract 0x8140 from Shift JIS value
        value -= 0x8140;
        else if (value >= 0xE040 && value <= 0xEBBF) // Subtract 0xC140 from Shift JIS value
        value -= 0xC140;
        else throw new Error("Invalid SJIS character: " + this.data[i] + "\n" + "Make sure your charset is UTF-8");
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
module.exports = KanjiData;

},{"617399140d9a4611":"f1e9A","e50c06ea0c489d58":"iXLHI"}],"lDJz9":[function(require,module,exports) {
"use strict";
/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/ var dijkstra = {
    single_source_shortest_paths: function(graph, s, d) {
        // Predecessor map for each node that has been encountered.
        // node ID => predecessor node ID
        var predecessors = {};
        // Costs of shortest paths from s to all nodes encountered.
        // node ID => cost
        var costs = {};
        costs[s] = 0;
        // Costs of shortest paths from s to all nodes encountered; differs from
        // `costs` in that it provides easy access to the node that currently has
        // the known shortest path from s.
        // XXX: Do we actually need both `costs` and `open`?
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while(!open.empty()){
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            // Get nodes adjacent to u...
            adjacent_nodes = graph[u] || {};
            // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.
            for(v in adjacent_nodes)if (adjacent_nodes.hasOwnProperty(v)) {
                // Get the cost of the edge running from u to v.
                cost_of_e = adjacent_nodes[v];
                // Cost of s to u plus the cost of u to v across e--this is *a*
                // cost from s to v that may or may not be less than the current
                // known cost to v.
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                // If we haven't visited v yet OR if the current known cost from s to
                // v is greater than the new cost we just found (cost of s to u plus
                // cost of u to v across e), update v's cost in the cost list and
                // update v's predecessor in the predecessor list (it's now u).
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === "undefined";
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                    costs[v] = cost_of_s_to_u_plus_cost_of_e;
                    open.push(v, cost_of_s_to_u_plus_cost_of_e);
                    predecessors[v] = u;
                }
            }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
            var msg = [
                "Could not find a path from ",
                s,
                " to ",
                d,
                "."
            ].join("");
            throw new Error(msg);
        }
        return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while(u){
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
    },
    find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },
    /**
   * A very naive priority queue implementation.
   */ PriorityQueue: {
        make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for(key in T)if (T.hasOwnProperty(key)) t[key] = T[key];
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
        },
        default_sorter: function(a, b) {
            return a.cost - b.cost;
        },
        /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */ push: function(value, cost) {
            var item = {
                value: value,
                cost: cost
            };
            this.queue.push(item);
            this.queue.sort(this.sorter);
        },
        /**
     * Return the highest priority element in the queue.
     */ pop: function() {
            return this.queue.shift();
        },
        empty: function() {
            return this.queue.length === 0;
        }
    }
};
module.exports = dijkstra;

},{}],"2oGFV":[function(require,module,exports) {
const Utils = require("a25e32ea40746159");
function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + "px";
    canvas.style.width = size + "px";
}
function getCanvasElement() {
    try {
        return document.createElement("canvas");
    } catch (e) {
        throw new Error("You need to specify a canvas element");
    }
}
exports.render = function render(qrData, canvas, options) {
    let opts = options;
    let canvasEl = canvas;
    if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!canvas) canvasEl = getCanvasElement();
    opts = Utils.getOptions(opts);
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext("2d");
    const image = ctx.createImageData(size, size);
    Utils.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    let opts = options;
    if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!opts) opts = {};
    const canvasEl = exports.render(qrData, canvas, opts);
    const type = opts.type || "image/png";
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
};

},{"a25e32ea40746159":"6rMWz"}],"6rMWz":[function(require,module,exports) {
function hex2rgba(hex) {
    if (typeof hex === "number") hex = hex.toString();
    if (typeof hex !== "string") throw new Error("Color should be defined as hex string");
    let hexCode = hex.slice().replace("#", "").split("");
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) throw new Error("Invalid hex color: " + hex);
    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
        return [
            c,
            c
        ];
    }));
    // Add default alpha value
    if (hexCode.length === 6) hexCode.push("F", "F");
    const hexValue = parseInt(hexCode.join(""), 16);
    return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
    };
}
exports.getOptions = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : undefined;
    const scale = options.scale || 4;
    return {
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
            dark: hex2rgba(options.color.dark || "#000000ff"),
            light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
    };
};
exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = exports.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [
        opts.color.light,
        opts.color.dark
    ];
    for(let i = 0; i < symbolSize; i++)for(let j = 0; j < symbolSize; j++){
        let posDst = (i * symbolSize + j) * 4;
        let pxColor = opts.color.light;
        if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
    }
};

},{}],"7Akrj":[function(require,module,exports) {
const Utils = require("4724e101c61ce6d");
function getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
    let str = cmd + x;
    if (typeof y !== "undefined") str += " " + y;
    return str;
}
function qrToPath(data, size, margin) {
    let path = "";
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for(let i = 0; i < data.length; i++){
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd("h", lineLength);
                lineLength = 0;
            }
        } else moveBy++;
    }
    return path;
}
exports.render = function render(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
    const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
    const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
    if (typeof cb === "function") cb(null, svgTag);
    return svgTag;
};

},{"4724e101c61ce6d":"6rMWz"}]},["cqPt9"], null, "parcelRequire3914")

//# sourceMappingURL=dist.6909d6fe.js.map
