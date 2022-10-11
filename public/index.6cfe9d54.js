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
})({"6cwfz":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "be9cd73c6cfe9d54";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
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
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _eventsJson = require("./data/events.json");
var _eventsJsonDefault = parcelHelpers.interopDefault(_eventsJson);
var _app = require("./controllers/App");
var _appDefault = parcelHelpers.interopDefault(_app);
(()=>{
    new (0, _appDefault.default)((0, _eventsJsonDefault.default));
})();

},{"./data/events.json":"5LFKi","./controllers/App":"89XUi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5LFKi":[function(require,module,exports) {

},{}],"89XUi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _data = require("../utils/data");
var _timeline = require("./Timeline");
var _timelineDefault = parcelHelpers.interopDefault(_timeline);
var _map = require("./Map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _summary = require("./Summary");
var _summaryDefault = parcelHelpers.interopDefault(_summary);
class App {
    static DIVISIONS_NUMBER = 100;
    constructor(events){
        this.divisions = (0, _data.getDivisionsFromEvents)(events, App.DIVISIONS_NUMBER);
        this.summary = new (0, _summaryDefault.default)();
        this.map = new (0, _mapDefault.default)(this.divisions);
        this.timeline = new (0, _timelineDefault.default)(this.divisions, this.handleDivisionChange.bind(this));
    }
    handleDivisionChange(index) {
        this.summary.applyStats(this.divisions[index].cumulativeAffectedNumberByType);
        this.map.setDivisionIndex(index);
    }
}
exports.default = App;

},{"../utils/data":"j8lWA","./Timeline":"ejfOB","./Map":"5ZdEb","./Summary":"kBCRs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8lWA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Aggregates all the events into divisions where each division will contain info about all the events that happened
 * during that division's time period and aggregated number of affected people by type.
 */ parcelHelpers.export(exports, "getDivisionsFromEvents", ()=>getDivisionsFromEvents);
var _constants = require("../constants");
const EMPTY_DIVISION = {
    date: Date.now(),
    events: [],
    affectedNumberByType: {},
    totalAffectedNumber: 0,
    relativeSize: 0
};
/**
 * Filter out incomplete events, re-aggregate the rest and sort them by date.
 */ function aggregateEvents(events) {
    return events.filter((event)=>event.lat && event.lon).map((event)=>({
            date: new Date(event.from).getTime(),
            lat: event.lat,
            lon: event.lon,
            affectedType: Number(event.affected_type?.[0]) || 0,
            affectedNumber: Number(event.affected_number?.[0]) || 0
        })).sort((a, b)=>a.date - b.date);
}
/**
 * Calculates timespan of each division. The result is intentionally not an exact number of days to prevent having
 * many empty divisions on timeline edges.
 */ function getDivisionTimespan(aggregatedEvents, divisionsNumber) {
    const firstEventDate = aggregatedEvents[0].date;
    const lastEventDate = aggregatedEvents[aggregatedEvents.length - 1].date;
    const totalDays = (lastEventDate - firstEventDate) / (0, _constants.DAY_MS);
    return totalDays / divisionsNumber * (0, _constants.DAY_MS);
}
/**
 * Returns dates within the requested timespan picked from list of dates with events.
 */ function getDivisionDates(startDate, timeSpan, datesWithEvents) {
    return datesWithEvents.filter((date)=>date >= startDate && date < startDate + timeSpan);
}
/**
 * Provision relative size for each division in the provided list to the highest affected number per division recorded.
 * This is going to be used to determine division's bar size on the timeline.
 */ function provisionRelativeSize(divisions) {
    const highestAffectedNumber = Math.max(...divisions.map(({ totalAffectedNumber  })=>totalAffectedNumber));
    return divisions.map((division)=>{
        let relativeSize = division.totalAffectedNumber / highestAffectedNumber;
        if (division.totalAffectedNumber) // If there are affected people within the division, ensure that it is not rendered as a zero-height bar.
        relativeSize = Math.max(relativeSize, 0.05);
        return {
            ...division,
            relativeSize
        };
    });
}
function getDivisionsFromEvents(events, divisionsNumber) {
    // The first division must always be empty according to the task:
    // > the appearance of points on the map is animated from: no point to showing all points
    const trueDivisionsNumber = divisionsNumber - 1;
    const aggregatedEvents = aggregateEvents(events);
    const firstEventDate = aggregatedEvents[0].date;
    const divisionTimespan = getDivisionTimespan(aggregatedEvents, trueDivisionsNumber);
    const eventsByDate = aggregatedEvents.reduce((result, event)=>({
            ...result,
            [event.date]: [
                ...result[event.date] || [],
                event, 
            ]
        }), []);
    const datesWithEvents = Object.keys(eventsByDate);
    const cumulativeAffectedNumberByType = {};
    // Create requested divisions number and fill them with events and aggregated stats for respective time periods.
    const divisions = Array(trueDivisionsNumber).fill("").map((_, i)=>{
        const division = {
            ...EMPTY_DIVISION,
            date: firstEventDate + i * divisionTimespan
        };
        // A list of all date timestamps within the current division period for quick access of events.
        const divisionDates = getDivisionDates(division.date, divisionTimespan, datesWithEvents);
        division.events = divisionDates.reduce((a, date)=>a.concat(...eventsByDate[date] || []), []);
        // Aggregate current division's level stats (not cumulative).
        division.affectedNumberByType = division.events.reduce((a, event)=>({
                ...a,
                [event.affectedType]: (a[event.affectedType] || 0) + event.affectedNumber
            }), {});
        // Add current division's level stats to cumulative stats. This calculation happens on data processing layer
        // to avoid unnecessary calculations in runtime.
        Object.keys(division.affectedNumberByType).forEach((type)=>{
            cumulativeAffectedNumberByType[type] = (cumulativeAffectedNumberByType[type] || 0) + division.affectedNumberByType[type];
        });
        division.cumulativeAffectedNumberByType = {
            ...cumulativeAffectedNumberByType
        };
        division.totalAffectedNumber = Object.values(division.affectedNumberByType).reduce((a, v)=>a + v, 0);
        return division;
    });
    const firstDivision = {
        ...EMPTY_DIVISION,
        date: firstEventDate - divisionTimespan
    };
    return provisionRelativeSize([
        firstDivision,
        ...divisions
    ]);
}

},{"../constants":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3huJa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DAY_MS", ()=>DAY_MS);
parcelHelpers.export(exports, "GEO_EXTREMES", ()=>GEO_EXTREMES);
parcelHelpers.export(exports, "GEO_DIMENSIONS", ()=>GEO_DIMENSIONS);
const DAY_MS = 86400000;
const GEO_EXTREMES = {
    N: 52.3794,
    S: 44.3864,
    E: 40.2278,
    W: 22.1369
};
const GEO_DIMENSIONS = {
    lat: GEO_EXTREMES.N - GEO_EXTREMES.S,
    lon: GEO_EXTREMES.E - GEO_EXTREMES.W
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ejfOB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _i18N = require("../utils/i18n");
class Timeline {
    static PLAYBACK_SPEED = 1000;
    $root = document.getElementById("timeline");
    $playbackControl = this.$root.querySelector(".playbackControl");
    $slider = this.$root.querySelector(".slider");
    $dateIndicator = this.$slider.querySelector(".date");
    _currentDivisionIndex = 0;
    isPlaying = false;
    get isSliding() {
        return !!this.slidingInfo;
    }
    get currentDivisionIndex() {
        return this._currentDivisionIndex;
    }
    set currentDivisionIndex(index) {
        const normalizedIndex = Math.min(Math.max(index, 0), this.totalDivisions - 1);
        if (normalizedIndex === this._currentDivisionIndex) return;
        this._currentDivisionIndex = normalizedIndex;
        this.onCurrentChange(this._currentDivisionIndex);
        const $division = this.$divisions[this._currentDivisionIndex];
        this.$slider.style.left = `${this._currentDivisionIndex}%`;
        this.$dateIndicator.innerText = (0, _i18N.formatDate)($division.dataset.date);
        this.updateDivisionHighlight();
    }
    constructor(divisions, onCurrentChange){
        this.onCurrentChange = onCurrentChange;
        this.renderDivisions(divisions);
        this.totalDivisions = divisions.length;
        this.currentDivisionIndex = this.totalDivisions - 1;
        // We are binding on timeline itself instead of slider for slider events to allow the user to click not only on
        // the slider but also on timeline bars and move mouse to navigate the timeline.
        this.$root.addEventListener("mousedown", this.handleMouseDown.bind(this));
        window.addEventListener("mouseup", this.handleMouseUp.bind(this));
        window.addEventListener("mousemove", this.handleMouseMove.bind(this));
        // Playback control binding.
        this.$playbackControl.addEventListener("mousedown", this.handlePlaybackControlMouseDown.bind(this));
        this.$playbackControl.addEventListener("click", this.handlePlaybackControlClick.bind(this));
        // Keyboard controls binding.
        window.addEventListener("keydown", this.handleKeyDown.bind(this));
    }
    handleMouseDown(e) {
        if (e.button !== 0) return;
        e.preventDefault();
        this.pause();
        const rootBbox = this.$root.getBoundingClientRect();
        this.slidingInfo = {
            rootX: rootBbox.x,
            stepSize: rootBbox.width / this.totalDivisions
        };
        this.activateDivisionAtX(e.clientX);
    }
    handleMouseUp(e) {
        e.preventDefault();
        this.slidingInfo = undefined;
        this.updateDivisionHighlight();
    }
    handleMouseMove(e) {
        e.preventDefault();
        this.activateDivisionAtX(e.clientX);
    }
    handlePlaybackControlClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.togglePlayback();
    }
    handlePlaybackControlMouseDown(e) {
        e.stopPropagation();
    }
    handleKeyDown(e) {
        switch(e.key){
            case "ArrowLeft":
                this.pause();
                this.currentDivisionIndex -= 1;
                break;
            case "ArrowRight":
                this.pause();
                this.currentDivisionIndex += 1;
                break;
            case " ":
                this.togglePlayback();
                break;
            case "Home":
                this.pause();
                this.currentDivisionIndex = 0;
                break;
            case "End":
                this.pause();
                this.currentDivisionIndex = this.totalDivisions - 1;
                break;
            default:
                return;
        }
        e.preventDefault();
    }
    play() {
        this.isPlaying = true;
        this.$playbackControl.classList.add("isPlaying");
        // If play is hit when on the last division - start from the beginning.
        if (this.currentDivisionIndex === this.totalDivisions - 1) this.currentDivisionIndex = 0;
        this.scheduleNextDivisionMove();
        this.updateDivisionHighlight();
    }
    pause() {
        this.isPlaying = false;
        this.$playbackControl.classList.remove("isPlaying");
        clearTimeout(this.playbackTimeout);
        this.updateDivisionHighlight();
    }
    togglePlayback() {
        if (this.isPlaying) {
            this.pause();
            return;
        }
        this.play();
    }
    /**
   * Schedules and performs playback move to the next division.
   */ scheduleNextDivisionMove() {
        if (this.currentDivisionIndex === this.totalDivisions - 1) {
            this.pause();
            return;
        }
        this.playbackTimeout = setTimeout(()=>{
            this.currentDivisionIndex += 1;
            this.scheduleNextDivisionMove();
        }, Timeline.PLAYBACK_SPEED);
    }
    /**
   * Makes the division closest to passed x coordinate (relative to window) active.
   */ activateDivisionAtX(x) {
        if (!this.isSliding) return;
        this.currentDivisionIndex = Math.floor((x - this.slidingInfo.rootX) / this.slidingInfo.stepSize);
    }
    /**
   * Highlights the current division on slider dragging or playing for better visuals.
   */ updateDivisionHighlight() {
        const isHighlightEnabled = this.isSliding || this.isPlaying;
        this.$divisions.forEach(($division, i)=>{
            const isCurrent = i === this.currentDivisionIndex;
            $division.classList.toggle("isHighlighted", isHighlightEnabled && isCurrent);
        });
    }
    /**
   * Renders division bars on the timeline plane.
   *
   * Instead of setting height for a bar it is setting its top padding which is pushing the nested ::after element.
   * This allows to have a bigger interactive area without a need to render an actual DOM element for bar visuals.
   */ renderDivisions(divisions) {
        const rootHeight = this.$root.clientHeight;
        this.$divisions = divisions.map((division)=>{
            const $division = document.createElement("div");
            $division.dataset.date = division.date;
            $division.classList.add("division");
            $division.style.paddingTop = `${(1 - division.relativeSize) * rootHeight}px`;
            this.$root.appendChild($division);
            return $division;
        });
    }
}
exports.default = Timeline;

},{"../utils/i18n":"Jny8E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Jny8E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
parcelHelpers.export(exports, "formatNumber", ()=>formatNumber);
parcelHelpers.export(exports, "getAffectedTypeLabel", ()=>getAffectedTypeLabel);
parcelHelpers.export(exports, "getAllAffectedTypes", ()=>getAllAffectedTypes);
var _namesJson = require("../data/names.json");
var _namesJsonDefault = parcelHelpers.interopDefault(_namesJson);
const locale = navigator.language || "en-US";
// Labels translation will depend on user's language with fallback to English if there is no support for it.
const [langCode] = locale.split("-");
const labels = (0, _namesJsonDefault.default)[langCode] || (0, _namesJsonDefault.default)["en"];
const formatDate = new Intl.DateTimeFormat(locale, {
    dateStyle: "medium"
}).format;
const formatNumber = new Intl.NumberFormat(locale).format;
function getAffectedTypeLabel(type) {
    return labels.affected_type[type] || "";
}
function getAllAffectedTypes() {
    return Object.keys(labels.affected_type);
}

},{"../data/names.json":"f3QFy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3QFy":[function(require,module,exports) {
module.exports = JSON.parse('{"ua":{"affected_type":{"2":"Загибель людини","3":"Поранення чи інша шкода для здоров’я","4":"Зґвалтування","5":"Порушення прав","6":"Зникнення людини"},"object_status":{"2":"Магазини, заводи та інші об’єкти бізнесу","3":"Громадські організації","4":"","5":"Освітні заклади","6":"Урядові будівлі","7":"Житлові будинки","8":"Транспортна інфраструктура","9":"Фермерські угіддя, ліси тощо","10":"Розважальні заклади","12":"Храми","13":"Об’єкт інфраструктури життєзабезпечення","14":"Історичні пам’ятки","15":"Мости","16":"Транспортні засоби","17":"","18":"Гуманітарний конвой","19":"Гуманітарний коридор"},"event":{"5":"Артобстріл/бомбардування","6":"Обстріл зі стрілецької зброї","7":"Детонація вибухівки","8":"Ушкодження транспортним засобом","9":"Катування, нелюдське поводження, посягання на людську гідність","10":"Зникнення","11":"Незаконне позбавлення волі","12":"","34":"Використання цивільного населення як живого щита","35":"Привласнення майна цивільних осіб","36":"Умисне вбивство цивільної людини","37":"Умисне тілесне ушкодження цивільної людини","38":"Масове насильницьке вивезення людей до Росії","39":"Напад на склад гуманітарної допомоги, гуманітарний конвой, гуманітарну місію чи коридор","40":"Екологічна катастрофа внаслідок обстрілу","41":"Зґвалтування","42":"Взяття заручників","43":"Застосування хімічної зброї","44":"Примусова мобілізація","45":"Посягання на людську гідність","47":"Захоплення цивільної будівлі"},"qualification":{"1":"Пошкодження чи знищення історичних пам’яток, лікарень, релігійних споруд, закладів освіти, науки, мистецтва (стаття 8 (2) (b) (ix))","2":"Обстріл населеного пункту без наслідків (стаття 8 (2) (b) (v))","3":"Напад на цивільний об’єкт (стаття 8 (2) (b) (ii))","4":"Знищення або пошкодження майна (стаття 8 (2) (b) (iv))","5":"Знищення або присвоєння майна у великих розмірах (стаття 8 (2) (a) (iv))","7":"Умисне вбивство цивільної людини зі стрілецької зброї, чи іншим способом (статті 7 (1) (a) або 8 (2) (a) (i))","8":"Умисне тілесне ушкодження цивільної людини (стаття 8 (2) (a) (iii))","9":"Масове насильницьке вивезення людей до Росії (статті 7 (1) (d), 8 (2) (a) або 8 (2) (b))","10":"Насильницьке зникнення людини (стаття 7 (1) (i))","11":"Катування та нелюдське поводження із цивільними чи військовими (статті 7 (f) або 8 (2) (a) (ii))","14":"Взяття заручників (стаття 8 (2) (a) (viii))","15":"Напад на склад гуманітарної допомоги, гуманітарний конвой, гуманітарну місію чи коридор (стаття 8 (2) (b) (iii))","16":"Загибель людини внаслідок обстрілу (стаття 8 (2) (b) (iv))","17":"Поранення внаслідок обстрілу (стаття 8 (2) (b) (iv))","18":"Екологічна катастрофа внаслідок обстрілу (стаття 8 (2) (b) (iv))","21":"Розграблення захопленого населеного пункту (стаття 8 (2) (b) (xvi))","22":"Застосування зброї, яка призводить до надмірних пошкоджень або невибіркових страждань людей, призводить до невибіркових руйнувань чи заборонена міжнародними угодами — системи “Смерч”, “Сонцепьок”, “Буратіно”, касетні та фосфорні бомби (стаття 8 (2) (b) (xx))","23":"Зґвалтування (стаття 8 (2) (b) (xxii))","24":"Використання об’єкту чи людей як живого щита (стаття 8 (2) (b) (xxiii))","25":"Перешкоджання гуманітарним місіям у доставці води та їжі, знищення припасів їжі та питної води (стаття 8 (2) (b) (xxv)","26":"Застосування хімічної зброї, у тому числі, фосфорних бомб (статті 8 (2) (b) (xvii) або 8 (2) (b) (xviii)))","27":"Незаконне затримання та позбавлення свободи цивільної особи чи військовослужбовця (стаття 7 (1) (e))","29":"Використання пристосованого місця для тримання під вартою (стаття 7 (1) (c))","30":"Посягання на людську гідність цивільної особи чи військовослужбовця (стаття 8 (2) (b) (xxi))","32":"Примусова мобілізація на окупованих територіях (стаття 8 (2) (a) (v))","33":"Мінування населених пунктів чи окремих цивільних об’єктів, застосування систем дистанційного мінування (стаття 8 (2) (b) (xx))","34":"Використання росіянами знаків розрізнення української армії (стаття 8 (2) (b) (vii))","35":""}},"de":{"affected_type":{"2":"Tod eines Menschen","3":"Verletzung oder anderer gesundheitlicher Schaden","4":"Vergewaltigung","5":"Verletzung anderer Rechte","6":"Verschwindenlassen eines Menschen"},"object_status":{"2":"Gesch\xe4fte, Tresore und andere Gesch\xe4ftsobjekte","3":"\xd6ffentliche Organisationen","4":"","5":"Bildungseinrichtungen","6":"Regierungsgeb\xe4ude","7":"Wohngeb\xe4ude","8":"Verkehrsinfrastruktur","9":"Ackerland, W\xe4lder usw.","10":"Unterhaltungsbetriebe","12":"Tempel","13":"Objekt der lebenserhaltenden Infrastruktur","14":"Historische Denkm\xe4ler","15":"Br\xfccken","16":"Fahrzeuge","17":"","18":"Humanit\xe4rer Konvoi","19":"Humanit\xe4rer Korridor"},"event":{"5":"Artilleriebeschuss oder Bombardement","6":"Beschuss aus Schusswaffen","7":"Sprengstoffdetonation","8":"Besch\xe4digung durch ein Fahrzeug","9":"Folter, unmenschliches Verhalten, Anschlag auf die Menschenw\xfcrde","10":"Verschwindenlassen","11":"Illegale Freiheitsberaubung","12":"","34":"Einsatz der Zivilbev\xf6lkerung als lebendigen Schutzschild","35":"Aneignung des Eigentums von Zivilpersonen","36":"Mord an einer Zivilperson","37":"Vors\xe4tzliche K\xf6rperverletzung einer Zivilperson","38":"Gewaltsame Massendeportation nach Russland","39":"Angriff ein Depot humanit\xe4rer Hilfe, einen humanit\xe4ren Konvoi, eine humanit\xe4re Mission oder einen Korridor","40":"\xd6kologische Katastrophe infolge von Beschuss","41":"Vergewaltigung","42":"Geiselnahme","43":"Einsatz von Chemiewaffen","44":"Zwangsmobilisierung","45":"Verletzung der Menschenw\xfcrde","47":"Besetzung eines Zivilgeb\xe4udes"},"qualification":{"1":"Besch\xe4digung oder Zerst\xf6rung von historischen Denkm\xe4lern, Krankenh\xe4usern, religi\xf6sen Einrichtungen, Institutionen der Bildung, Wissenschaft und Kunst (Artikel 8 (2) (b) (ix))","2":"Beschuss einer Ortschaft ohne Folgen (Artikel  8 (2) (b) (v))","3":"Angriff auf ein Zivilobjekt (Artikel  8 (2) (b) (ii))","4":"Zerst\xf6rung oder Besch\xe4digung von Eigentum (Artikel 8 (2) (b) (iv))","5":"Zerst\xf6rung oder Aneignung von Eigentum in gro\xdfem Ausma\xdf (Artikel 8 (2) (a) (iv))","7":"Mord an einer Zivilperson mit einer Schusswaffe oder auf andere Weise (Artikel 7(1)(a) oder 8(2)(a)(i))","8":"Vors\xe4tzliche K\xf6rperverletzung einer Zivilperson (Artikel 8(2) (a) (iii))","9":"Gewaltsame Massendeportation nach Russland (Artikel 7 (1) (d), 8 (2) (a) oder 8 (2) (b))","10":"Gewaltsames Verschwindenlassen eines Menschen (Artikel 7 (1) (i))","11":"Folter und unmenschliche Behandlung von Zivilisten oder Milit\xe4rs (Artikel 7(f) oder 8(2)(a)(ii))","14":"Geiselnahme (Artikel 8 (2) (a) (viii))","15":"Angriff auf humanit\xe4re Hilfe, einen humanit\xe4ren Konvoi, eine humanit\xe4re Mission oder einen Korridor (Artikel 8 (2) (b) (iii))","16":"Tod eines Menschen infolge von Beschuss (Artikel 8 (2) (b) (iv))","17":"Verletzung infolge von Beschuss (Artikel 8 (2) (b) (iv))","18":"Verletzung infolge von Beschuss (Artikel 8 (2) (b) (iv))","21":"Pl\xfcnderung einer eingenommenen Ortschaft (Artikel 8 (2) (b) (xvi)))","22":"Ein Einsatz von Waffen, die zu \xfcberm\xe4\xdfigen Sch\xe4digungen oder zu unn\xf6tigem Leiden von Menschen f\xfchren, die wahllose Zerst\xf6rungen bewirken oder nach internationalen Abkommen verboten sind – die Raketenwerfer „Smertsch“, „Solnzepjok“ und „Buratino“ sowie Streubomben und Phosphorbomben (Artikel 8 (2) (b) (xx ))","23":"Vergewaltigung (Artikel 8 (2) (b) (xxii))","24":"Einsatz eines Objekts oder von Menschen als lebendige Schutzschilde (Artikel 8 (2) (b) (xxiii))","25":"Behinderung von humanit\xe4ren Missionen bei der Lieferung von Wasser und Lebensmitteln, Vernichtung von Nahrungsmittelvorr\xe4ten und Trinkwasser (Artikel 8(2)(b)(xxv))","26":"Einsatz von Chemiewaffen, darunter Phosphorbomben (Artikel 8(2)(b)(xvii) oder 8(2)(b)(xviii)))","27":"Illegale Festnahme und Freiheitsberaubung einer Zivilperson oder eines Wehrdienstleistenden (Artikel 7(1)(e))","29":"Nutzung einer ungeeigneten Unterbringung f\xfcr die Haft (Artikel 7 (1) (c))","30":"Angriff auf die Menschenw\xfcrde einer Zivilperson oder eines Wehrdienstleistenden (Artikel  8 (2) (b) (xxi))","32":"Zwangsmobilisierung in besetzten Gebieten (Artikel 8 (2) (a) (v))","33":"Verminung bewohnter Ortschaften oder einzelner ziviler Objekte, die Anwendung fernz\xfcndbarer Minensysteme (Artikel 8 (2) (b) (xx))","34":"Nutzung ukrainischer Rangabzeichen durch Russen (Artikel 8(2)(a)(vii))","35":""}},"en":{"affected_type":{"2":"Death of an individual ","3":"Those wounded or whose health was otherwise damaged","4":"Rape","5":"Violation of other rights","6":"Disappearance of an individual"},"object_status":{"2":"Shops, centres and other business properties","3":"NGOs","4":"","5":"Educational institutions","6":"Government buildings","7":"Residential buildings","8":"Transport infrastructure","9":"Farmland, forests, etc.","10":"Entertainment institutions","12":"Religious buildings","13":"Object of life support infrastructure","14":"Historic monuments","15":"Bridges","16":"Means of transport","17":"","18":"Humanitarian convoys","19":"Humanitarian corridors"},"event":{"5":"Shelling, bombardment","6":"Shooting from firearms","7":"Detonation of explosives","8":"Damage to means of transport","9":"Torture, inhuman treatment, violation of human dignity","10":"Disappearances","11":"Unlawful detention","12":"","34":"Use of civilian population as a human shield","35":"Seizure of personal property","36":"Deliberate killing of a civilian","37":"Deliberate wounding of a civilian","38":"Mass, forced deportation of people to Russia","39":"Attacks on stores of humanitarian aid,\\r\\nhumanitarian convoy, mission or corridor\\r\\n","40":"Ecological damage arising from shelling / bombardment","41":"Rape","42":"Hostage-taking","43":"Use of chemical weapons","44":"Forced mobilisation","45":"Violation of human dignity","47":"Seizure of a civilian building"},"qualification":{"1":"Intentionally directing attacks against buildings dedicated to religion, education, art, science or charitable purposes, historic monuments, and hospitals [ Article 8: 2 (b) ix ]","2":"Attacking or bombarding, by whatever means, towns, villages, dwellings or buildings which are undefended [ Article 8: 2 (b) v)]","3":"Intentionally directing attacks against civilian objects [ Article 8: 2 (b) ii ])","4":"Intentionally launching an attack in the knowledge that such attack will cause incidental loss of life or injury to civilians or damage to civilian objects or widespread, long-term and severe damage to the natural environment [ Article 8: 2 (b) iv ]","5":"Extensive destruction and appropriation of property [ Article 8: 2 (a) iv ]","7":"Killing committed as part of a widespread or systematic attack directed against any civilian population [ Article 7: 1 (a) “Murder” or Article 8: 2 (a) i “Wilful killing” ]","8":"Wilfully causing great suffering, or serious injury to body or health [ Article 8: 2 (a) iii ]\\r\\n","9":"Deportation or forcible transfer of population to Russia [ Article 7: 1 (d) ] or\\r\\n“Grave breaches of the Geneva Conventions of 12 August 1949“ [Article 8 (2) a ] or  “Other serious violations of the laws and customs applicable in international armed conflict” [ Article 8 (2) b ]\\r\\n","10":"Enforced disappearance of persons [ Article 7: 1 i ]","11":"Torture or inhuman treatment of civilians and military personnel  [[ Article 7: 1 (f) or Article 8: 2 (a) ii ]","14":"Taking of hostages [ Article 8: 2 (a) viii ]","15":"Intentionally directing attacks against personnel, installations, material, units or vehicles involved in humanitarian assistance or a humanitarian corridor[ Article 8: 2 (b) iii ]","16":"Intentionally launching an attack in the knowledge that such attack will cause incidental loss of life or injury to civilians or damage to civilian objects or widespread, long-term and severe damage to the natural environment which would be clearly excessive in relation to the concrete and direct overall military advantage anticipated [ Article 8: 2 (b) iv ]","17":"Intentionally launching an attack in the knowledge that such attack will cause incidental injury to civilians [ Article 8: 2 (b) iv ]","18":"Intentionally launching an attack in the knowledge that such attack will cause widespread, long-term and severe damage to the natural environment [ Article 8: 2 (b) iv ]","21":"Pillaging a town or place, even when taken by assault [ Article 8: 2 (b) xvi ]","22":"Employing weapons, projectiles and material and methods of warfare which are of a nature to cause superfluous injury or unnecessary suffering, or which are inherently indiscriminate in violation of the international law of armed conflict, provided that such weapons, projectiles and material and methods of warfare are the subject of a comprehensive prohibition: the BM-30 “Smerch”, TOS-1 “Buratino”, and other systems, cluster munitions and phosphorus bombs [ Article 8: 2 (b) xx ]","23":"Committing rape (as defined in article 7, paragraph 2 (f) ) [ Article 8: 2 (b) xxii ]","24":"Utilizing the presence of a civilian or other protected person as a human shield to render certain points, areas or military forces immune from military operation [ Article 8: 2 (b) xxiii ]","25":"Intentionally using starvation of civilians as a method of warfare by depriving them of food and drinking water [ Article 8: 2 (b) xxv ]","26":"Employing poison or poisoned weapons, including phosphorus bombs [ Article 8: 2 (b) xvii ] or  [ Article 8: 2 (b) xviii ]","27":"Imprisonment or other severe deprivation of physical liberty of civilians or military personnel [ Article 7: 1 (e) ]","29":"Enslavement, meaning “the exercise of any or all of the powers attaching to the right of ownership over a person” – [ Article 7: 1 (c) ]","30":"Committing outrages upon personal dignity, in particular humiliating and degrading treatment of either civilians or military personnel [ Article 8: 2 (b) xxi ] ","32":"Compelling a prisoner of war or other protected person to serve in the forces of a hostile Power [ Article 8: 2) (a) v ]","33":"Employing weapons, projectiles and material and methods of warfare which are of a nature to cause superfluous injury or unnecessary suffering, or which are inherently indiscriminate [ Article 8: 2 (b) xx ]","34":"Use by Russian forces of the Ukrainiian flag or of the military insignia and uniform of the Ukrainian armed forces [ Article 8: 2 (b) vii ]","35":""}},"fr":{"affected_type":{"2":"D\xe9c\xe8s","3":"Blessure ou autre atteinte \xe0 la sant\xe9","4":"Viol","5":"Violation d\'autres droits","6":"Disparition"},"object_status":{"2":"Magasins, coffres-forts et autres objets commerciaux","3":"Organismes publics","4":"","5":"\xc9tablissements d\'enseignement","6":"B\xe2timents gouvernementaux","7":"B\xe2timents r\xe9sidentiels","8":"Infrastructures de transports","9":"Terres agricoles, for\xeats, etc.","10":"Etablissements de divertissement","12":"Temples","13":"Objet d\'infrastructure de survie","14":"Monuments historiques","15":"Ponts","16":"V\xe9hicules","17":"","18":"Convoi humanitaire","19":"Couloir humanitaire"},"event":{"5":"Tir d\'artillerie / bombardement","6":"Tir \xe0 l\'arme \xe0 feu l\xe9g\xe8re","7":"D\xe9flagration d\'explosifs","8":"Dommage caus\xe9 par un v\xe9hicule","9":"Torture, traitements d\xe9gradants, atteinte \xe0 la dignit\xe9 de la personne","10":"Disparition","11":"D\xe9tention arbitraire","12":"","34":"Utiliser des civils comme boucliers humains","35":"Appropriation de biens appartenant \xe0 une personne civile","36":"Homicide intentionnel d\'une personne civile","37":"Blessure corporelle intentionnelle d\'une personne physique","38":"Transfert forc\xe9 et massif de personnes vers la Russie","39":"Attaque contre un entrep\xf4t d\'aide humanitaire, un convoi humanitaire, une mission humanitaire ou un corridor","40":"Catastrophe environnementale due \xe0 un bombardement","41":"Viol","42":"Prise d\'otages","43":"Utilisation d\'armes chimiques","44":"Mobilisation forc\xe9e","45":"Atteinte \xe0 la dignit\xe9 humaine","47":"Saisie de b\xe2timents civils"},"qualification":{"1":"D\xe9gradation ou destruction de monuments historiques, d\'h\xf4pitaux, de b\xe2timents consacr\xe9s \xe0 la religion, \xe0 l\'enseignement, \xe0 la science, \xe0 l\'art (Article 8 (2) (b) (ix))","2":"Bombardement d\'une agglom\xe9ration sans cons\xe9quences (Article  8 (2) (b) (v))","3":"Attaque dirig\xe9e contre des biens de caract\xe8re civil (Article  8 (2) (b) (ii))","4":"Destruction ou d\xe9gradation de biens (Article  8 (2) (b) (iv))","5":"Destruction ou appropriation de biens ex\xe9cut\xe9es sur une grande \xe9chelle (Article 8 (2) (a) (iv)))","7":"Homicide intentionnel d\'un civil par arme \xe0 feu l\xe9g\xe8re ou par un autre moyen (Articles 7(1)(a) ou 8(2)(a)(i))","8":"Blessure intentionnelle d\'une personne civile (Article 8(2) (a) (iii))","9":"Transfert forc\xe9 et massif de personnes vers la Russie (Articles 7 (1) (d), 8 (2) (a) ou 8 (2) (b))","10":"Disparition forc\xe9e (Article 7 (1) (i))","11":"Torture et traitements inhumains envers des civils ou des militaires (Articles 7(f) ou 8(2)(a)(ii))","14":"Prise d\'otages (Article 8 (2) (a) (viii)))","15":"Attaque contre de l\'aide humanitaire, un convoi humanitaire, une mission humanitaire ou un corridor. (статья 8 (2) (b) (iii))","16":"D\xe9c\xe8s suite \xe0 un bombardement (Article 8 (2) (b) (iv))","17":"Blessures suite \xe0 un bombardement (Article 8 (2) (b) (iv))","18":"Catastrophe environnementale due \xe0 un bombardement (Article 8 (2) (b) (iv))","21":"Pillage d\'une localit\xe9 prise d\'assaut (Article 8 (2) (b) (xvi))","22":"Emploi d\'armes de nature \xe0 causer des blessures excessives ou des souffrances indiscrimin\xe9es, \xe0 provoquer des destructions sans discrimination, ou emploi d\'armes interdites par plusieurs accords internationaux, comme les syst\xe8mes \xab&nbsp;Smerch&nbsp;\xbb, \xab&nbsp;Sontsepek&nbsp;\xbb, \xab&nbsp;Bouratino&nbsp;\xbb, bombes \xe0 fragmentation et au phosphore. (Article 8 (2) (b) (xx ))","23":"Viol (Article 8 (2) (b) (xxii))","24":"Utilisation d\'un lieu ou de personnes comme bouclier humain (Article 8 (2) (b) (xxiii))","25":"Entrave aux missions humanitaires dans l\'acheminement de l\'eau et des vivres, destruction des stocks de vivres et d\'eau potable (Article 8(2)(b)(xxv))","26":"Utilisation d\'armes chimiques, y compris des bombes au phosphore (Articles 8(2)(b)(xvii) ou 8(2)(b)(xviii)))","27":"D\xe9tention ill\xe9gale et privation de libert\xe9 de civils ou de militaires (Article 7(1)(e))","29":"Utilisation d\'un lieu inadapt\xe9 pour la d\xe9tention (Article 7 (1) (c))","30":"Atteinte \xe0 la dignit\xe9 d\'une personne civile ou militaire (Article 8 (2) (b) (xxi))","32":"Mobilisation forc\xe9e dans les territoires occup\xe9s (Article 8 (2) (a) (v))","33":"Minage de localit\xe9 ou de biens civils individuels, utilisation de syst\xe8mes de mines manœuvr\xe9es \xe0 distance (Article 8 (2) (b) (xx))","34":"Utilisation par les Russes d\'insignes de l\'arm\xe9e ukrainienne (Article 8(2)(b)(vii))","35":""}},"es":{"affected_type":{"2":"Muerte","3":"Lesiones y da\xf1os a la salud","4":"Violaciones","5":"Violaci\xf3n de otros derechos","6":"Desaparici\xf3n"},"object_status":{"2":"Tiendas, b\xf3vedas y otros objetos comerciales","3":"Organizaciones p\xfablicas","4":"","5":"Instituciones educativas","6":"Edificios gubernamentales","7":"Edificios residenciales","8":"Infraestructura de transporte","9":"Tierras de cultivo, bosques, etc.","10":"Establecimientos de ocio","12":"Templos","13":"Objeto de infraestructura de soporte vital","14":"Monumentos hist\xf3ricos","15":"Puentes","16":"Veh\xedculos","17":"","18":"Convoy Humanitario","19":"Corredor Humanitario"},"event":{"5":"Ataques de artiller\xeda/bombardeos","6":"Disparos y tiroteos","7":"Detonaci\xf3n de explosivos","8":"Da\xf1o causado por veh\xedculos armados","9":"Torturas, trato inhumano, humillaci\xf3n de la dignidad humana","10":"Desapariciones","11":"Detenciones ilegales","12":"","34":"Uso de civiles como escudo humano","35":"Apropiaci\xf3n de bienes de civiles","36":"Asesinatos intencionados de civiles","37":"Da\xf1os corporales intencionados a civiles","38":"Deportaci\xf3n forzosa masiva a Rusiaї","39":"Ataque a un almac\xe9n de ayuda humanitaria, a un convoy, a una misi\xf3n o un corredor humanitarios","40":"Desastre ecol\xf3gico causado por bombardeos","41":"Violaciones","42":"Toma de rehenes","43":"Uso de armas qu\xedmicas","44":"Movilizaci\xf3n forzada","45":"Violaci\xf3n de la dignidad humana","47":"Apropiaci\xf3n premeditada de un edificio civil"},"qualification":{"1":"Destrucci\xf3n parcial o total de monumentos hist\xf3ricos, hospitales, edificios religiosos, instituciones educativas, de ciencia y arte (Art\xed-culo 8 (2) (b) (ix))","2":"Bombardeo de un poblado sin consecuencias (Art\xedculo 8 (2) (b) (v))","3":"Напад на цивільний об’єкт (стаття 8 (2) (b) (ii)Ataque a bienes civiles (Art\xedculo 8 (2)(b)(ii)))","4":"Destrucci\xf3n o da\xf1o a la propiedad (Art\xedculo 8 (2)(b)(iv))","5":"Destrucci\xf3n o apropiaci\xf3n de bienes a gran escala (Art\xedculo 8 (2) (a) (iv))","7":"Asesinato intencionado de civiles con armas peque\xf1as o semejantes (Art\xedculo 7(1)(a) y 8(2)(a)(i))","8":"Lesiones corporales intencionales causadas a civiles (Art\xedculo 8 (2) (a) (iii))","9":"Deportaci\xf3n forzada masiva gente a Rusia (Art\xedculos 7 (1) (d), 8 (2) (a) y 8 (2) (b))","10":"Desaparici\xf3n forzada (Art\xedculo 7 (1) (i))","11":"Torturas y tratos inhumanos de civiles o militares (Art\xedculos 7 (f) y 8 (2)(a)(ii))","14":"Toma de rehenes (Art\xedculo 8 (2)(a)(viii))","15":"Ataque a centros de ayuda humanitaria; a convoyes, misiones o cor-redores humanitarios (Art\xedculo 8 (2)(b)(iii))","16":"Muerte  por disparos o bombardeos (Art\xedculo 8 (2) (b) (iv))","17":"Lesiones causadas por bombardeos (Art\xedculo 8 (2) (b) (iv))","18":"Desastre ambiental causado por bombardeos (Art\xedculo 8 (2) (b) (iv))","21":"Saqueo de poblados ocupados (Art\xedculo 8 (2) (b) (xvi))","22":"Uso de armas que causan lesiones indiscriminadas o grande sufri-miento a las personas, que provocan destrucciones excesivas o est\xe1n prohibidas por acuerdos internacionales: como los sistemas de Smerch, Sontsepek y Buratino, y las bombas de racimo y de f\xf3sforo blanco (Art\xedculo 8 (2) (b) (xx ))","23":"Agresiones sexuales (Art\xedculo 8 (2) (b) (xxii))","24":"Uso de un objeto o personas como escudos humanos (Art\xedculo 8 (2)(b)(xxiii))","25":"Obstrucci\xf3n a las misiones humanitarias en el suministro de agua y alimentos, destrucci\xf3n de reservas de alimentos y agua potable (Ar-t\xedculo 8 (2)(b)(xxv))","26":"Uso de armas qu\xedmicas, incluidas las bombas de f\xf3sforo blanco (Ar-t\xedculo 8 (2)(b)(xvii) o 8 (2)(b)(xviii)))","27":"Detenci\xf3n ilegal y privaci\xf3n de libertad de civiles o militares (Ar-t\xedculo 7 (1)(e))","29":"Uso de un lugar de detenci\xf3n no apto (Art\xedculo 7 (1)(c)))","30":"Humillaci\xf3n de la dignidad humana de civiles o militares (Art\xedculo 8 (2) (b) (xxi))","32":"Movilizaci\xf3n forzada en los territorios ocupados (Art\xedculo 8 (2) (a) (v))","33":"Colocaci\xf3n de minas en poblados o edificios civiles, uso de sistemas de minado a distancia (Art\xedculo 8 (2) (b) (xx))","34":"Uso de insignias del ej\xe9rcito ucraniano por ciudadanos rusos (Ar-t\xedculo 8 (2)(b)(vii))","35":""}},"it":{"affected_type":{"2":"Omicidi","3":"Ferite o altre lesioni corporee","4":"Stupri","5":"Violazioni di altri diritti","6":"Sparizioni di persone"},"object_status":{"2":"Negozi, centri commerciali e altre strutture produttive","3":"Enti pubblici","4":"","5":"Edifici scolastici di ogni grado","6":"Edifici governativi","7":"Palazzi residenziali","8":"Infrastrutture dei trasporti","9":"Terreni agricoli coltivati, boschi ecc.","10":"Luoghi di svago","12":"Edifici religiosi","13":"Oggetto di infrastruttura di supporto vitale","14":"Monumenti storici","15":"Ponti","16":"Mezzi di trasporto","17":"","18":"Convogli umanitari","19":"Corridoi umanitari"},"event":{"5":"Attacco di artiglieria o bombardamento","6":"Attacco con armi da fuoco","7":"Detonazione di esplosivi","8":"Danneggiamento tramite mezzo di trasporto","9":"Torture, trattamento disumano, violazione della dignit\xe0 umana","10":"Sparizioni","11":"Detenzioni illegali","12":"","34":"Uso di civili come scudi umani","35":"Confische di beni a civili","36":"Omicidi intenzionali di civili","37":"Lesioni aggravate intenzionali a civili","38":"Deportazione forzata di massa verso la Russia","39":"Attacchi a depositi di aiuti umanitari, convogli umanitari, missioni umanitarie o corridoi umanitari","40":"Disastri ecologici causati da attacchi di artiglieria","41":"Stupri","42":"Rapimenti di ostaggi","43":"Uso di armi chimiche","44":"Mobilitazione forzata","45":"Violazione della dignit\xe0 umana","47":"Occupazioni di edifici civili"},"qualification":{"1":"Danneggiamento o distruzione di monumenti storici, ospedali, edifici di culto, edifici scolastici, centri di ricerca o arte (art. 8 (2) (b) (ix))","2":"Attacchi a fuoco senza conseguenze su un centro abitato (art. 8 (2) (b) (v))","3":"Attacchi a un sito civile (art. 8 (2) (b) (ii))","4":"Distruzione o danneggiamento di beni (art. 8 (2) (b) (iv))","5":"Distruzione o sottrazione di beni su larga scala (art. 8 (2) (a) (iv))","7":"Omicidi intenzionali di civili con armi da fuoco o con altri mezzi (artt. 7 (1) (a) o 8 (2) (a) (i)))","8":"Lesioni personali aggravate a civili (art. 8 (2) (a) (iii))","9":"Deportazione forzata di massa di persone in Russia (artt. 7 (1) (d), 8 (2) (a) o 8 (2) (b))","10":"Sparizioni forzate di persone (art. 7 (1) (i))","11":"Torture e trattamenti disumani di civili o militari (artt. 7 (f) o 8 (2) (a) (ii))","14":"Rapimento di ostaggi (art. 8 (2) (a) (viii))","15":"Attacchi a depositi di aiuti umanitari, convogli umanitari, missioni umanitarie o corridoi umanitari (art. 8 (2) (b) (iii))","16":"Morti causate da attacchi con armi da fuoco (art. 8 (2) (b) (iv)))","17":"Ferite causate da un attacco con armi da fuoco (art. 8 (2) (b) (iv))","18":"Disastri ecologici causati da attacchi di artiglieria (art. 8 (2) (b) (iv))","21":"Saccheggio di centri abitati (art. 8 (2) (b) (xvi))","22":"Uso di armi che causano danni eccessivi, sofferenze indiscriminate alle persone, distruzioni indiscriminate o di armi vietate dalle convenzioni internazionali, ad es. dei sistemi “Smerch”, “Sontsepek”, “Buratino”, bombe a grappolo e al fosforo (art. 8 (2) (b) (xx )))","23":"Stupri (art. 8 (2) (b) (xxii))","24":"Utilizzo di siti o di persone come scudi umani (art. 8 (2) (b) (xxiii))","25":"Intralcio alle attivit\xe0 delle missioni umanitarie che consegnano acqua e viveri, distruzione delle scorte di viveri e acqua potabile (art. 8 (2) (b) (xxv))","26":"Utilizzo di armi chimiche, incluse le bombe al fosforo (artt. 8 (2) (b) (xvii) o 8(2) (b) (xviii)))","27":"Detenzione illegale e privazione di libert\xe0 di civili o militari (art. 7(1) (e)))","29":"Utilizzo di locali non idonei alla detenzione (art. 7 (1) (c))","30":"Violazioni della dignit\xe0 umana di civili o militari (art. 8 (2) (b) (xxi))","32":"Mobilitazione forzata su territori occupati (art. 8 (2) (a) (v))","33":"Minamento dei centri abitati o di singoli siti civili, utilizzo di sistemi di minamento a distanza (art. 8 (2) (b) (xx))","34":"Utilizzo di distintivi dell’esercito ucraino da parte di cittadini russi (art. 8 (2) (b) (vii))","35":""}},"ru":{"affected_type":{"2":"Гибель человека","3":"Ранение или другой вред здоровью","4":"Изнасилование","5":"Нарушение прав","6":"Исчезновение человека"},"object_status":{"2":"Магазины, заводы и другие объекты бизнеса","3":"Общественные организации","4":"","5":"Образовательные заведения","6":"Правительственные здания","7":"Жилые дома","8":"Транспортная инфраструктура","9":"Фермерские угодья, леса и т.д.","10":"Развлекательные заведения","12":"Храмы","13":"Объект инфраструктуры жизнеобеспечения","14":"Исторические памятники","15":"Мосты","16":"Транспортные средства","17":"","18":"Гуманитарный конвой","19":"Гуманитарный коридор"},"event":{"5":"Артобстрел/бомбардировка","6":"Обстрел из стрелкового оружия","7":"Детонация взрывчатки","8":"Повреждение транспортным средством","9":"Пытки, бесчеловечное обращение, посягательство на человеческое достоинство","10":"Исчезновение","11":"Незаконное лишение свободы","12":"","34":"Использование гражданского населения как живого щита","35":"Присвоение имущества гражданских лиц","36":"Умышленное убийство гражданского лица","37":"Умышленное телесное повреждение гражданского лица","38":"Массовый насильственный вывоз людей в Россию","39":"Нападение на гуманитарную помощь, гуманитарный конвой, гуманитарную миссию или коридор","40":"Экологическая катастрофа в результате обстрела","41":"Изнасилование","42":"Взятие заложников","43":"Применение химического оружия","44":"Принудительная мобилизация","45":"Посягательство на человеческое достоинство","47":"Захват гражданского здания"},"qualification":{"1":"Повреждение или уничтожение исторических памятников, больниц, религиозных сооружений, учебных заведений, науки, искусства (статья 8(2)(b)(ix))","2":"Обстрел населенного пункта без последствий (статья 8(2)(b)(v))","3":"Нападение на гражданский объект (статья 8(2)(b)(ii))","4":"Уничтожение или повреждение имущества (статья 8(2)(b)(iv))","5":"Уничтожение или присвоение имущества в крупных размерах (статья 8(2)(a)(iv))","7":"Умышленное убийство гражданского человека из стрелкового оружия или другим способом (статьи 7(1)(a) или 8(2)(a)(i))","8":"Умышленное телесное повреждение гражданского человека (статья 8(2)(a)(iii))","9":"Массовый насильственный вывоз людей в Россию (статьи 7(1)(d), 8(2)(a) или 8(2)(b))","10":"Насильственное исчезновение человека (статья 7(1)(i))","11":"Пытки и бесчеловечное обращение с гражданскими или военными (статьи 7(f) или 8(2)(a)(ii))","14":"Взятие заложников (статья 8(2)(a)(viii))","15":"Нападение на гуманитарную помощь, гуманитарный конвой, гуманитарную миссию или коридор (статья 8(2)(b)(iii))","16":"Гибель человека в результате обстрела (статья 8(2)(b)(iv))","17":"Ранение в результате обстрела (статья 8(2)(b)(iv))","18":"Экологическая катастрофа в результате обстрела (статья 8(2)(b)(iv))","21":"Разграбление захваченного населенного пункта (статья 8(2)(b)(xvi))","22":"Применение оружия, которое приводит к чрезмерным повреждениям или неизбирательным страданиям людей, приводит к неизбирательным разрушениям или запрещено международными соглашениями - системы “Смерч”, “Сонцепёк”, “Буратино”, кассетные и фосфорные бомбы (статья 8 (2) ( b) (xx))","23":"Изнасилование (статья 8(2)(b)(xxii))","24":"Использование объекта или людей как живого щита (статья 8(2)(b)(xxiii))","25":"Препятствование гуманитарным миссиям в доставке воды и пищи, уничтожение припасов пищи и питьевой воды (статья 8(2)(b)(xxv)","26":"Применение химического оружия, в том числе фосфорных бомб (статьи 8 (2) (b) (xvii) или 8 (2) (b) (xviii)))","27":"Незаконное задержание и лишение свободы гражданского лица или военнослужащего (статья 7(1)(e))","29":"Использование приспособленного места для содержания под стражей (статья 7(1)(c))","30":"Посягательство на человеческое достоинство гражданского лица или военнослужащего (статья 8(2)(b)(xxi))","32":"Принудительная мобилизация на оккупированных территориях (статья 8(2)(a)(v))","33":"Минирование населенных пунктов или отдельных гражданских объектов, применение систем дистанционного минирования (статья 8(2)(b)(xx))","34":"Использование русскими знаков различия украинской армии (статья 8 (2) (b) (vii))","35":""}}}');

},{}],"5ZdEb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../constants");
class Map {
    $root = document.getElementById("map");
    constructor(divisions){
        this.renderPoints(divisions);
    }
    /**
   * Sets the current division index and shows/hides corresponding division.
   */ setDivisionIndex(index) {
        this.$divisions.forEach(($division, i)=>{
            $division.classList.toggle("active", index >= i);
        });
    }
    /**
   * Renders all divisions and points in them. Points are nested in their divisions to optimize
   * show/hide performance since it is much faster to show/hide a single division with all points inside
   * rather than show/hide each point separately.
   *
   * Point position is calculated in percentage shift relative to the map for free responsiveness.
   * To achieve this, the map is treated as a normal 2D plane and calculations are made based on its
   * corner extreme points and dimensions.
   */ renderPoints(divisions) {
        this.$divisions = divisions.map((division)=>{
            const $division = document.createElement("div");
            $division.classList.add("division");
            division.events.forEach((event)=>{
                const $point = document.createElement("span");
                $point.classList.add("point");
                $point.style.left = `${(event.lon - (0, _constants.GEO_EXTREMES).W) / (0, _constants.GEO_DIMENSIONS).lon * 100}%`;
                $point.style.top = `${((0, _constants.GEO_EXTREMES).N - event.lat) / (0, _constants.GEO_DIMENSIONS).lat * 100}%`;
                $division.appendChild($point);
            });
            this.$root.appendChild($division);
            return $division;
        });
    }
}
exports.default = Map;

},{"../constants":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBCRs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _i18N = require("../utils/i18n");
class Summary {
    $root = document.getElementById("summary");
    constructor(){
        this.renderStatBlocks();
    }
    /**
   * Applies passed stats info to respective stat blocks.
   */ applyStats(stats = {}) {
        this.$statBlocks.forEach(($block)=>{
            const type = $block.dataset.type;
            $block.querySelector(".value").innerText = (0, _i18N.formatNumber)(stats[type] || 0);
        });
    }
    /**
   * Renders stat blocks for all possible affected types.
   */ renderStatBlocks() {
        this.$statBlocks = (0, _i18N.getAllAffectedTypes)().map((type)=>{
            const $block = document.createElement("div");
            $block.classList.add("stat");
            $block.innerHTML = `
        <span class="value">0</span>
        <span class="label">${(0, _i18N.getAffectedTypeLabel)(type)}</span>
      `;
            $block.dataset.type = type;
            this.$root.appendChild($block);
            return $block;
        });
    }
}
exports.default = Summary;

},{"../utils/i18n":"Jny8E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6cwfz","8lqZg"], "8lqZg", "parcelRequire4697")

//# sourceMappingURL=index.6cfe9d54.js.map