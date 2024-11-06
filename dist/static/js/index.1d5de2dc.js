(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"487": (function (module, __unused_webpack___webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
/* ESM import */var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react__WEBPACK_IMPORTED_MODULE_0__]);
react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const testA = /*#__PURE__*/ function() {
    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function*() {
        yield new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(1);
            }, 1000);
        });
        console.log('test');
    });
    return function testA() {
        return _ref.apply(this, arguments);
    };
}();
console.log('useEffect', react__WEBPACK_IMPORTED_MODULE_0__.useEffect);
testA();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"318": (function (module, __unused_webpack_exports, __webpack_require__) {

var __webpack_error__ = new Error();
module.exports = new Promise(function(resolve, reject) {
if(typeof React !== "undefined") return resolve();
__webpack_require__.l("https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js", function(event) {
  if(typeof React !== "undefined") return resolve();
  var errorType = event && (event.type === 'load' ? 'missing' : event.type);
  var realSrc = event && event.target && event.target.src;
  __webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
  __webpack_error__.name = 'ScriptExternalLoadError';
  __webpack_error__.type = errorType;
  __webpack_error__.request = realSrc;
  reject(__webpack_error__);
}, "React");
}).then(function() { return React; });


}),
"387": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  _: function() { return _async_to_generator; }
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;

        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
        });
    };
}



}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/async_module
(() => {
var webpackQueues =
	typeof Symbol === "function"
		? Symbol("webpack queues")
		: "__webpack_queues__";
var webpackExports =
	typeof Symbol === "function"
		? Symbol("webpack exports")
		: "__webpack_exports__";
var webpackError =
	typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
var resolveQueue = function (queue) {
	if (queue && queue.d < 1) {
		queue.d = 1;
		queue.forEach(function (fn) { fn.r--; });
		queue.forEach(function (fn) { fn.r-- ? fn.r++ : fn(); });
	}
}
var wrapDeps = function (deps) {
	return deps.map(function (dep) {
		if (dep !== null && typeof dep === "object") {
			if (dep[webpackQueues]) return dep;
			if (dep.then) {
				var queue = [];
				queue.d = 0;
				dep.then(function (r) {
					obj[webpackExports] = r;
					resolveQueue(queue);
				}, function (e) {
					obj[webpackError] = e;
					resolveQueue(queue);
				});
				var obj = {};
				obj[webpackQueues] = function (fn) { fn(queue); };
				return obj;
			}
		}
		var ret = {};
		ret[webpackQueues] = function () { };
		ret[webpackExports] = dep;
		return ret;
	});
};
__webpack_require__.a = function (module, body, hasAwait) {
	var queue;
	hasAwait && ((queue = []).d = -1);
	var depQueues = new Set();
	var exports = module.exports;
	var currentDeps;
	var outerResolve;
	var reject;
	var promise = new Promise(function (resolve, rej) {
		reject = rej;
		outerResolve = resolve;
	});
	promise[webpackExports] = exports;
	promise[webpackQueues] = function (fn) { queue && fn(queue), depQueues.forEach(fn), promise["catch"](function () { }); };
	module.exports = promise;
	body(function (deps) {
		currentDeps = wrapDeps(deps);
		var fn;
		var getResult = function () {
			return currentDeps.map(function (d) {
				if (d[webpackError]) throw d[webpackError];
				return d[webpackExports];
			});
		}
		var promise = new Promise(function (resolve) {
			fn = function () { resolve(getResult); };
			fn.r = 0;
			var fnQueue = function (q) { q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))); };
			currentDeps.map(function (dep) { dep[webpackQueues](fnQueue); });
		});
		return fn.r ? promise : getResult();
	}, function (err) { (err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue); });
	queue && queue.d < 0 && (queue.d = 0);
};
})();
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var dataWebpackPrefix = "rsbuild-project:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		script = document.createElement('script');
		
		script.charset = 'utf-8';
		script.timeout = 120;
		if (__webpack_require__.nc) {
			script.setAttribute("nonce", __webpack_require__.nc);
		}
		script.setAttribute("data-webpack", dataWebpackPrefix + key);
		
		script.src = url;

		
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = function () {
	return "1.0.14";
};

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.0.14";

})();
/************************************************************************/
// startup
// Load entry module and return exports
// This entry module used 'module' so it can't be inlined
var __webpack_exports__ = __webpack_require__("487");
})()
;