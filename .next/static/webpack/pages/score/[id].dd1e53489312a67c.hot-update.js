"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/score/[id]", {
  /***/ "./components/MileageDisplay/MileageDisplay.tsx":
    /*!******************************************************!*\
  !*** ./components/MileageDisplay/MileageDisplay.tsx ***!
  \******************************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _this = undefined;\nvar MileageDisplay = function(param) {\n    var mileage = param.mileage, numberOfScrapped = param.numberOfScrapped;\n    var numberWithCommas = function numberWithCommas(x) {\n        return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: mileage > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "mileage-score-container",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                        className: "mileage-text",\n                        children: [\n                            numberWithCommas(mileage),\n                            "mi"\n                        ]\n                    }, void 0, true, {\n                        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/MileageDisplay/MileageDisplay.tsx",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/MileageDisplay/MileageDisplay.tsx",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                    className: "mileage-sub-text",\n                    children: "Average Life Expectancy"\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/MileageDisplay/MileageDisplay.tsx",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                    className: "mileage-sub-text",\n                    children: [\n                        "Based off of ",\n                        numberOfScrapped,\n                        " cars"\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/MileageDisplay/MileageDisplay.tsx",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/MileageDisplay/MileageDisplay.tsx",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_c = MileageDisplay;\n/* harmony default export */ __webpack_exports__["default"] = (MileageDisplay);\nvar _c;\n$RefreshReg$(_c, "MileageDisplay");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01pbGVhZ2VEaXNwbGF5L01pbGVhZ2VEaXNwbGF5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSxHQUFLLENBQUNBLGNBQWMsR0FBa0MsUUFBUSxRQUEyQixDQUFDO1FBQWpDQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsZ0JBQWdCLFNBQWhCQSxnQkFBZ0I7UUFDdkVDLGdCQUFnQixHQUF6QixRQUFRLENBQUNBLGdCQUFnQixDQUFDQyxDQUFTLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUNBLENBQUMsQ0FBQ0MsUUFBUSxHQUFHQyxPQUFPLDBCQUEwQixDQUFHO0lBQzFELENBQUM7SUFFRCxNQUFNLDZFQUNIQyxDQUFHO2tCQUNETixPQUFPLEdBQUcsQ0FBQzs7NEZBRVBNLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUF5QjswR0FDckNELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFjOzs0QkFBRUwsZ0JBQWdCLENBQUNGLE9BQU87NEJBQUUsQ0FBRTs7Ozs7Ozs7Ozs7OzRGQUU1RFEsQ0FBQztvQkFBQ0QsU0FBUyxFQUFDLENBQWtCOzhCQUFDLENBQXVCOzs7Ozs7NEZBQ3REQyxDQUFDO29CQUFDRCxTQUFTLEVBQUMsQ0FBa0I7O3dCQUFDLENBQWE7d0JBQUNOLGdCQUFnQjt3QkFBQyxDQUFLOzs7Ozs7Ozs7Ozs7OztBQUs5RSxDQUFDO0tBbEJLRixjQUFjO0FBb0JwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWlsZWFnZURpc3BsYXkvTWlsZWFnZURpc3BsYXkudHN4P2RjMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIE1pbGVhZ2VEaXNwbGF5UHJvcHMge1xuICBtaWxlYWdlOiBudW1iZXI7XG4gIG51bWJlck9mU2NyYXBwZWQ6IG51dW1iZXI7XG59XG5cbmNvbnN0IE1pbGVhZ2VEaXNwbGF5OiBSZWFjdC5GQzxNaWxlYWdlRGlzcGxheVByb3BzPiA9ICh7IG1pbGVhZ2UsIG51bWJlck9mU2NyYXBwZWQgfSkgPT4ge1xuICBmdW5jdGlvbiBudW1iZXJXaXRoQ29tbWFzKHg6IG51bWJlcikge1xuICAgIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge21pbGVhZ2UgPiAwICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbGVhZ2Utc2NvcmUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbGVhZ2UtdGV4dFwiPntudW1iZXJXaXRoQ29tbWFzKG1pbGVhZ2UpfW1pPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWlsZWFnZS1zdWItdGV4dFwiPkF2ZXJhZ2UgTGlmZSBFeHBlY3RhbmN5PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1pbGVhZ2Utc3ViLXRleHRcIj5CYXNlZCBvZmYgb2Yge251bWJlck9mU2NyYXBwZWR9IGNhcnM8L3A+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1pbGVhZ2VEaXNwbGF5O1xuIl0sIm5hbWVzIjpbIk1pbGVhZ2VEaXNwbGF5IiwibWlsZWFnZSIsIm51bWJlck9mU2NyYXBwZWQiLCJudW1iZXJXaXRoQ29tbWFzIiwieCIsInRvU3RyaW5nIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MileageDisplay/MileageDisplay.tsx\n'
      );

      /***/
    },
});
