"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/useLocalStorage.tsx":
/*!***********************************!*\
  !*** ./utils/useLocalStorage.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\nvar _s = $RefreshSig$();\nfunction useLocalStorage(key, initialValue) {\n    _s();\n    // State to store our value\n    // Pass initial state function to useState so logic is only executed once\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function() {\n        try {\n            // Get from local storage by key\n            var item = window.localStorage.getItem(key);\n            // Parse stored json or if none return initialValue\n            return item ? JSON.parse(item) : initialValue;\n        } catch (error) {\n            // If error also return initialValue\n            console.log(error);\n            return initialValue;\n        }\n    }), storedValue = ref[0], setStoredValue = ref[1];\n    // Return a wrapped version of useState's setter function that ...\n    // ... persists the new value to localStorage.\n    var setValue = function(value) {\n        try {\n            // Allow value to be a function so we have same API as useState\n            var valueToStore = _instanceof(value, Function) ? value(storedValue) : value;\n            // Save state\n            setStoredValue(valueToStore);\n            // Save to local storage\n            window.localStorage.setItem(key, JSON.stringify(valueToStore));\n        } catch (error) {\n            // A more advanced implementation would handle the error case\n            console.log(error);\n        }\n    };\n    return [\n        storedValue,\n        setValue\n    ];\n}\n_s(useLocalStorage, \"A255wW7830Y4F5rbR6TCSnE2wIQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLocalStorage);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy91c2VMb2NhbFN0b3JhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBOEI7Ozs7Ozs7OztTQUVyQkMsZUFBZSxDQUFDQyxHQUFHLEVBQUVDLFlBQVksRUFBRSxDQUFDOztJQUMzQyxFQUEyQjtJQUMzQixFQUF5RTtJQUN6RSxHQUFLLENBQWlDSCxHQVdwQyxHQVhvQ0EsK0NBQVEsQ0FBQyxRQUNqRCxHQUR1RCxDQUFDO1FBQ3BELEdBQUcsQ0FBQyxDQUFDO1lBQ0gsRUFBZ0M7WUFDaEMsR0FBSyxDQUFDSSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUNMLEdBQUc7WUFDNUMsRUFBbUQ7WUFDbkQsTUFBTSxDQUFDRSxJQUFJLEdBQUdJLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxJQUFJLElBQUlELFlBQVk7UUFDL0MsQ0FBQyxDQUFDLEtBQUssRUFBRU8sS0FBSyxFQUFFLENBQUM7WUFDZixFQUFvQztZQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7WUFDakIsTUFBTSxDQUFDUCxZQUFZO1FBQ3JCLENBQUM7SUFDSCxDQUFDLEdBWE1VLFdBQVcsR0FBb0JiLEdBV3BDLEtBWGtCYyxjQUFjLEdBQUlkLEdBV3BDO0lBQ0YsRUFBa0U7SUFDbEUsRUFBOEM7SUFDOUMsR0FBSyxDQUFDZSxRQUFRLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztRQUMzQixHQUFHLENBQUMsQ0FBQztZQUNILEVBQStEO1lBQy9ELEdBQUssQ0FBQ0MsWUFBWSxHQUNoQkQsV0FBeUIsQ0FBekJBLEtBQUssRUFBWUUsUUFBUSxJQUFHRixLQUFLLENBQUNILFdBQVcsSUFBSUcsS0FBSztZQUN4RCxFQUFhO1lBQ2JGLGNBQWMsQ0FBQ0csWUFBWTtZQUMzQixFQUF3QjtZQUN4QlosTUFBTSxDQUFDQyxZQUFZLENBQUNhLE9BQU8sQ0FBQ2pCLEdBQUcsRUFBRU0sSUFBSSxDQUFDWSxTQUFTLENBQUNILFlBQVk7UUFDOUQsQ0FBQyxDQUFDLEtBQUssRUFBRVAsS0FBSyxFQUFFLENBQUM7WUFDZixFQUE2RDtZQUM3REMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7UUFDbkIsQ0FBQztJQUNILENBQUM7SUFHSCxNQUFNLENBQUMsQ0FBQ0c7UUFBQUEsV0FBVztRQUFFRSxRQUFRO0lBQUEsQ0FBQztBQUM5QixDQUFDO0dBbENRZCxlQUFlO0FBb0N4QiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL3VzZUxvY2FsU3RvcmFnZS50c3g/ZjZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKGtleSwgaW5pdGlhbFZhbHVlKSB7XG4gIC8vIFN0YXRlIHRvIHN0b3JlIG91ciB2YWx1ZVxuICAvLyBQYXNzIGluaXRpYWwgc3RhdGUgZnVuY3Rpb24gdG8gdXNlU3RhdGUgc28gbG9naWMgaXMgb25seSBleGVjdXRlZCBvbmNlXG4gIGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBHZXQgZnJvbSBsb2NhbCBzdG9yYWdlIGJ5IGtleVxuICAgICAgY29uc3QgaXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgLy8gUGFyc2Ugc3RvcmVkIGpzb24gb3IgaWYgbm9uZSByZXR1cm4gaW5pdGlhbFZhbHVlXG4gICAgICByZXR1cm4gaXRlbSA/IEpTT04ucGFyc2UoaXRlbSkgOiBpbml0aWFsVmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElmIGVycm9yIGFsc28gcmV0dXJuIGluaXRpYWxWYWx1ZVxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcbiAgICB9XG4gIH0pO1xuICAvLyBSZXR1cm4gYSB3cmFwcGVkIHZlcnNpb24gb2YgdXNlU3RhdGUncyBzZXR0ZXIgZnVuY3Rpb24gdGhhdCAuLi5cbiAgLy8gLi4uIHBlcnNpc3RzIHRoZSBuZXcgdmFsdWUgdG8gbG9jYWxTdG9yYWdlLlxuICBjb25zdCBzZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBBbGxvdyB2YWx1ZSB0byBiZSBhIGZ1bmN0aW9uIHNvIHdlIGhhdmUgc2FtZSBBUEkgYXMgdXNlU3RhdGVcbiAgICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9XG4gICAgICAgIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZTtcbiAgICAgIC8vIFNhdmUgc3RhdGVcbiAgICAgIHNldFN0b3JlZFZhbHVlKHZhbHVlVG9TdG9yZSk7XG4gICAgICAvLyBTYXZlIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBBIG1vcmUgYWR2YW5jZWQgaW1wbGVtZW50YXRpb24gd291bGQgaGFuZGxlIHRoZSBlcnJvciBjYXNlXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuICBcbiAgXG5yZXR1cm4gW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYWxTdG9yYWdlOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUxvY2FsU3RvcmFnZSIsImtleSIsImluaXRpYWxWYWx1ZSIsIml0ZW0iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RvcmVkVmFsdWUiLCJzZXRTdG9yZWRWYWx1ZSIsInNldFZhbHVlIiwidmFsdWUiLCJ2YWx1ZVRvU3RvcmUiLCJGdW5jdGlvbiIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/useLocalStorage.tsx\n");

/***/ })

});