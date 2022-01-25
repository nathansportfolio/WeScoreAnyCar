"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/score/[id]",{

/***/ "./components/LineChart/LineChart.tsx":
/*!********************************************!*\
  !*** ./components/LineChart/LineChart.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar LineCharts = function(param) {\n    var mots = param.mots;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mobile = ref[0], setMobile = ref[1];\n    //TODO - Count advisories per mot and transform data for dates\n    var data = mots.map(function(mot) {\n        return {\n            name: mot.completedDate.split(\".\")[0],\n            score: mot.rfrAndComments.length,\n            average: Math.floor(Math.random() * 7),\n            amt: 2\n        };\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (window !== undefined) {\n            setMobile(window.innerWidth < 640);\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.LineChart, {\n        width: mobile ? 340 : 800,\n        height: mobile ? 300 : 370,\n        data: data,\n        margin: {\n            top: 5,\n            right: 30,\n            left: 0,\n            bottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.CartesianGrid, {\n                strokeDasharray: \"3 3\"\n            }, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.XAxis, {\n                dataKey: \"name\"\n            }, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.YAxis, {}, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {}, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Line, {\n                type: \"monotone\",\n                dataKey: \"average\",\n                stroke: \"#e74c3c\",\n                strokeWidth: 3,\n                activeDot: {\n                    r: 8\n                }\n            }, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Line, {\n                type: \"monotone\",\n                dataKey: \"score\",\n                stroke: \"#2ecc71\",\n                strokeWidth: 3\n            }, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this));\n};\n_s(LineCharts, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = LineCharts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineCharts);\nvar _c;\n$RefreshReg$(_c, \"LineCharts\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmVDaGFydC9MaW5lQ2hhcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBUTFCOzs7QUFNakIsR0FBSyxDQUFDUyxVQUFVLEdBQThCLFFBQVEsUUFBTSxDQUFDO1FBQVpDLElBQUksU0FBSkEsSUFBSTs7SUFDbkQsR0FBSyxDQUF1QlQsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBbkNVLE1BQU0sR0FBZVYsR0FBZSxLQUE1QlcsU0FBUyxHQUFJWCxHQUFlO0lBQzNDLEVBQThEO0lBQzlELEdBQUssQ0FBQ1ksSUFBSSxHQUFHSCxJQUFJLENBQ2RJLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEdBQVE7UUFBSyxNQUNwQixDQURxQixDQUFDO1lBQ25CQyxJQUFJLEVBQUVELEdBQUcsQ0FBQ0UsYUFBYSxDQUFDQyxLQUFLLENBQUMsQ0FBRyxJQUFFLENBQUM7WUFDcENDLEtBQUssRUFBRUosR0FBRyxDQUFDSyxjQUFjLENBQUNDLE1BQU07WUFDaENDLE9BQU8sRUFBRUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxLQUFLLENBQUM7WUFDckNDLEdBQUcsRUFBRSxDQUFDO1FBQ1IsQ0FBQzs7SUFFSDFCLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFFMkIsTUFBTSxLQUFLQyxTQUFTLEVBQUUsQ0FBQztZQUN6QmhCLFNBQVMsQ0FBQ2UsTUFBTSxDQUFDRSxVQUFVLEdBQUcsR0FBRztRQUNuQyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0gxQiwrQ0FBSztRQUNKMkIsS0FBSyxFQUFFbkIsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQ3pCb0IsTUFBTSxFQUFFcEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQzFCRSxJQUFJLEVBQUVBLElBQUk7UUFDVm1CLE1BQU0sRUFBRSxDQUFDO1lBQ1BDLEdBQUcsRUFBRSxDQUFDO1lBQ05DLEtBQUssRUFBRSxFQUFFO1lBQ1RDLElBQUksRUFBRSxDQUFDO1lBQ1BDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsQ0FBQzs7d0ZBRUE3QixtREFBYTtnQkFBQzhCLGVBQWUsRUFBQyxDQUFLOzs7Ozs7d0ZBQ25DaEMsMkNBQUs7Z0JBQUNpQyxPQUFPLEVBQUMsQ0FBTTs7Ozs7O3dGQUNwQmhDLDJDQUFLOzs7Ozt3RkFDTEUsNkNBQU87Ozs7O3dGQUVQSiwwQ0FBSTtnQkFDSG1DLElBQUksRUFBQyxDQUFVO2dCQUNmRCxPQUFPLEVBQUMsQ0FBUztnQkFDakJFLE1BQU0sRUFBQyxDQUFTO2dCQUNoQkMsV0FBVyxFQUFFLENBQUM7Z0JBQ2RDLFNBQVMsRUFBRSxDQUFDO29CQUFDQyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxDQUFDOzs7Ozs7d0ZBRXBCdkMsMENBQUk7Z0JBQUNtQyxJQUFJLEVBQUMsQ0FBVTtnQkFBQ0QsT0FBTyxFQUFDLENBQU87Z0JBQUNFLE1BQU0sRUFBQyxDQUFTO2dCQUFDQyxXQUFXLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBRzNFLENBQUM7R0E1Q0toQyxVQUFVO0tBQVZBLFVBQVU7QUE4Q2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQvTGluZUNoYXJ0LnRzeD8zN2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExpbmVDaGFydCBhcyBDaGFydCxcbiAgTGluZSxcbiAgWEF4aXMsXG4gIFlBeGlzLFxuICBDYXJ0ZXNpYW5HcmlkLFxuICBUb29sdGlwLFxufSBmcm9tIFwicmVjaGFydHNcIjtcblxuaW50ZXJmYWNlIExpbmVDaGFydHNQcm9wcyB7XG4gIG1vdHM6IGFueTtcbn1cblxuY29uc3QgTGluZUNoYXJ0czogUmVhY3QuRkM8TGluZUNoYXJ0c1Byb3BzPiA9ICh7IG1vdHMgfSkgPT4ge1xuICBjb25zdCBbbW9iaWxlLCBzZXRNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvL1RPRE8gLSBDb3VudCBhZHZpc29yaWVzIHBlciBtb3QgYW5kIHRyYW5zZm9ybSBkYXRhIGZvciBkYXRlc1xuICBjb25zdCBkYXRhID0gbW90c1xuICAgIC5tYXAoKG1vdDogYW55KSA9PiAoe1xuICAgICAgbmFtZTogbW90LmNvbXBsZXRlZERhdGUuc3BsaXQoXCIuXCIpWzBdLFxuICAgICAgc2NvcmU6IG1vdC5yZnJBbmRDb21tZW50cy5sZW5ndGgsXG4gICAgICBhdmVyYWdlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KSxcbiAgICAgIGFtdDogMixcbiAgICB9KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldE1vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8IDY0MCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhcnRcbiAgICAgIHdpZHRoPXttb2JpbGUgPyAzNDAgOiA4MDB9XG4gICAgICBoZWlnaHQ9e21vYmlsZSA/IDMwMCA6IDM3MH1cbiAgICAgIGRhdGE9e2RhdGF9XG4gICAgICBtYXJnaW49e3tcbiAgICAgICAgdG9wOiA1LFxuICAgICAgICByaWdodDogMzAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogNSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgLz5cbiAgICAgIDxYQXhpcyBkYXRhS2V5PVwibmFtZVwiIC8+XG4gICAgICA8WUF4aXMgLz5cbiAgICAgIDxUb29sdGlwIC8+XG5cbiAgICAgIDxMaW5lXG4gICAgICAgIHR5cGU9XCJtb25vdG9uZVwiXG4gICAgICAgIGRhdGFLZXk9XCJhdmVyYWdlXCJcbiAgICAgICAgc3Ryb2tlPVwiI2U3NGMzY1wiXG4gICAgICAgIHN0cm9rZVdpZHRoPXszfVxuICAgICAgICBhY3RpdmVEb3Q9e3sgcjogOCB9fVxuICAgICAgLz5cbiAgICAgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJzY29yZVwiIHN0cm9rZT1cIiMyZWNjNzFcIiBzdHJva2VXaWR0aD17M30gLz5cbiAgICA8L0NoYXJ0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0cztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmVDaGFydCIsIkNoYXJ0IiwiTGluZSIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxpbmVDaGFydHMiLCJtb3RzIiwibW9iaWxlIiwic2V0TW9iaWxlIiwiZGF0YSIsIm1hcCIsIm1vdCIsIm5hbWUiLCJjb21wbGV0ZWREYXRlIiwic3BsaXQiLCJzY29yZSIsInJmckFuZENvbW1lbnRzIiwibGVuZ3RoIiwiYXZlcmFnZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFtdCIsIndpbmRvdyIsInVuZGVmaW5lZCIsImlubmVyV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInN0cm9rZURhc2hhcnJheSIsImRhdGFLZXkiLCJ0eXBlIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJhY3RpdmVEb3QiLCJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LineChart/LineChart.tsx\n");

/***/ })

});