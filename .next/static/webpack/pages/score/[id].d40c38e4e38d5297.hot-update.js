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
  /***/ "./components/LineChart/LineChart.tsx":
    /*!********************************************!*\
  !*** ./components/LineChart/LineChart.tsx ***!
  \********************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nfunction add(accumulator, a) {\n    return accumulator + a;\n}\nvar LineCharts = function(param) {\n    var mots = param.mots, averageMots = param.averageMots;\n    console.log("mots", mots);\n    // console.log("averageMots", averageMots);\n    //TODO - Count advisories per mot and transform data for dates\n    var data = mots.map(function(mot) {\n        var avgMot = averageMots.map(function(newMot, index) {\n            if (newMot.completedDate === mot.completedDate.split(".")[0]) {\n                return newMot.score;\n            }\n            return 0;\n        });\n        var finalSum = avgMot.reduce(add, 0);\n        return {\n            name: mot.completedDate.split(".")[0],\n            "Your Score": mot.motScore,\n            "Average Score": finalSum || 0,\n            amt: 2\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, {\n            width: 330,\n            height: 270,\n            data: data.splice(0, 5).reverse(),\n            margin: {\n                top: 5,\n                right: 30,\n                left: -30,\n                bottom: 5\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.CartesianGrid, {\n                    strokeDasharray: "4 4",\n                    stroke: "black"\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {\n                    dataKey: "name",\n                    stroke: "white"\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {\n                    stroke: "white"\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {}, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                    type: "monotone",\n                    dataKey: "Average Score",\n                    stroke: "white",\n                    strokeWidth: 2\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                    type: "monotone",\n                    dataKey: "Your Score",\n                    stroke: "#e74c3c",\n                    strokeWidth: 3\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n            lineNumber: 45,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this));\n};\n_c = LineCharts;\n/* harmony default export */ __webpack_exports__["default"] = (LineCharts);\nvar _c;\n$RefreshReg$(_c, "LineCharts");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmVDaGFydC9MaW5lQ2hhcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQU9pQjs7U0FPUk8sR0FBRyxDQUFDQyxXQUFtQixFQUFFQyxDQUFTLEVBQUUsQ0FBQztJQUM1QyxNQUFNLENBQUNELFdBQVcsR0FBR0MsQ0FBQztBQUN4QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxVQUFVLEdBQThCLFFBQVEsUUFBbUIsQ0FBQztRQUF6QkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLFdBQVcsU0FBWEEsV0FBVztJQUNoRUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTSxPQUFFSCxJQUFJO0lBQ3hCLEVBQTJDO0lBRTNDLEVBQThEO0lBQzlELEdBQUssQ0FBQ0ksSUFBSSxHQUFHSixJQUFJLENBQ2RLLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEdBQVEsRUFBSyxDQUFDO1FBQ2xCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixXQUFXLENBQUNJLEdBQUcsQ0FBQyxRQUFRLENBQVBHLE1BQVcsRUFBRUMsS0FBWSxFQUFLLENBQUM7WUFDN0QsRUFBRSxFQUFFRCxNQUFNLENBQUNFLGFBQWEsS0FBS0osR0FBRyxDQUFDSSxhQUFhLENBQUNDLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELE1BQU0sQ0FBQ0gsTUFBTSxDQUFDSSxLQUFLO1lBQ3hCLENBQUM7WUFDRCxNQUFNLENBQUMsQ0FBQztRQUNWLENBQUM7UUFFRCxHQUFLLENBQUNDLFFBQVEsR0FBR04sTUFBTSxDQUFDTyxNQUFNLENBQUNsQixHQUFHLEVBQUUsQ0FBQztRQUVyQyxNQUFNLENBQUMsQ0FBQztZQUNObUIsSUFBSSxFQUFFVCxHQUFHLENBQUNJLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDO1lBQ3BDLENBQVksYUFBRUwsR0FBRyxDQUFDVSxRQUFRO1lBQzFCLENBQWUsZ0JBQUVILFFBQVEsSUFBSSxDQUFDO1lBQzlCSSxHQUFHLEVBQUUsQ0FBQztRQUNSLENBQUM7SUFDSCxDQUFDO0lBRUgsTUFBTSw2RUFDSEMsQ0FBRzs4RkFDRDVCLCtDQUFLO1lBQ0o2QixLQUFLLEVBQUUsR0FBRztZQUNWQyxNQUFNLEVBQUUsR0FBRztZQUNYaEIsSUFBSSxFQUFFQSxJQUFJLENBQUNpQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRUMsT0FBTztZQUMvQkMsTUFBTSxFQUFFLENBQUM7Z0JBQ1BDLEdBQUcsRUFBRSxDQUFDO2dCQUNOQyxLQUFLLEVBQUUsRUFBRTtnQkFDVEMsSUFBSSxHQUFHLEVBQUU7Z0JBQ1RDLE1BQU0sRUFBRSxDQUFDO1lBQ1gsQ0FBQzs7NEZBRUFqQyxtREFBYTtvQkFBQ2tDLGVBQWUsRUFBQyxDQUFLO29CQUFDQyxNQUFNLEVBQUMsQ0FBTzs7Ozs7OzRGQUNsRHJDLDJDQUFLO29CQUFDc0MsT0FBTyxFQUFDLENBQU07b0JBQUNELE1BQU0sRUFBQyxDQUFPOzs7Ozs7NEZBQ25DcEMsMkNBQUs7b0JBQUNvQyxNQUFNLEVBQUMsQ0FBTzs7Ozs7OzRGQUNwQmxDLDZDQUFPOzs7Ozs0RkFFUEosMENBQUk7b0JBQ0h3QyxJQUFJLEVBQUMsQ0FBVTtvQkFDZkQsT0FBTyxFQUFDLENBQWU7b0JBQ3ZCRCxNQUFNLEVBQUMsQ0FBTztvQkFDZEcsV0FBVyxFQUFFLENBQUM7Ozs7Ozs0RkFFZnpDLDBDQUFJO29CQUNId0MsSUFBSSxFQUFDLENBQVU7b0JBQ2ZELE9BQU8sRUFBQyxDQUFZO29CQUNwQkQsTUFBTSxFQUFDLENBQVM7b0JBQ2hCRyxXQUFXLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEIsQ0FBQztLQXpES2pDLFVBQVU7QUEyRGhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQvTGluZUNoYXJ0LnRzeD8zN2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExpbmVDaGFydCBhcyBDaGFydCxcbiAgTGluZSxcbiAgWEF4aXMsXG4gIFlBeGlzLFxuICBDYXJ0ZXNpYW5HcmlkLFxuICBUb29sdGlwLFxufSBmcm9tIFwicmVjaGFydHNcIjtcblxuaW50ZXJmYWNlIExpbmVDaGFydHNQcm9wcyB7XG4gIG1vdHM6IGFueTtcbiAgYXZlcmFnZU1vdHM6IGFueTtcbn1cblxuZnVuY3Rpb24gYWRkKGFjY3VtdWxhdG9yOiBudW1iZXIsIGE6IG51bWJlcikge1xuICByZXR1cm4gYWNjdW11bGF0b3IgKyBhO1xufVxuXG5jb25zdCBMaW5lQ2hhcnRzOiBSZWFjdC5GQzxMaW5lQ2hhcnRzUHJvcHM+ID0gKHsgbW90cywgYXZlcmFnZU1vdHMgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIm1vdHNcIiwgbW90cyk7XG4gIC8vIGNvbnNvbGUubG9nKFwiYXZlcmFnZU1vdHNcIiwgYXZlcmFnZU1vdHMpO1xuXG4gIC8vVE9ETyAtIENvdW50IGFkdmlzb3JpZXMgcGVyIG1vdCBhbmQgdHJhbnNmb3JtIGRhdGEgZm9yIGRhdGVzXG4gIGNvbnN0IGRhdGEgPSBtb3RzXG4gICAgLm1hcCgobW90OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGF2Z01vdCA9IGF2ZXJhZ2VNb3RzLm1hcCgobmV3TW90OiBhbnksIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICBpZiAobmV3TW90LmNvbXBsZXRlZERhdGUgPT09IG1vdC5jb21wbGV0ZWREYXRlLnNwbGl0KFwiLlwiKVswXSkge1xuICAgICAgICAgICAgIHJldHVybiBuZXdNb3Quc2NvcmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZmluYWxTdW0gPSBhdmdNb3QucmVkdWNlKGFkZCwgMCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG1vdC5jb21wbGV0ZWREYXRlLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgXCJZb3VyIFNjb3JlXCI6IG1vdC5tb3RTY29yZSxcbiAgICAgICAgXCJBdmVyYWdlIFNjb3JlXCI6IGZpbmFsU3VtIHx8IDAsXG4gICAgICAgIGFtdDogMixcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENoYXJ0XG4gICAgICAgIHdpZHRoPXszMzB9XG4gICAgICAgIGhlaWdodD17MjcwfVxuICAgICAgICBkYXRhPXtkYXRhLnNwbGljZSgwLCA1KS5yZXZlcnNlKCl9XG4gICAgICAgIG1hcmdpbj17e1xuICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICByaWdodDogMzAsXG4gICAgICAgICAgbGVmdDogLTMwLFxuICAgICAgICAgIGJvdHRvbTogNSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiNCA0XCIgc3Ryb2tlPVwiYmxhY2tcIiAvPlxuICAgICAgICA8WEF4aXMgZGF0YUtleT1cIm5hbWVcIiBzdHJva2U9XCJ3aGl0ZVwiLz5cbiAgICAgICAgPFlBeGlzIHN0cm9rZT1cIndoaXRlXCIgLz5cbiAgICAgICAgPFRvb2x0aXAgLz5cblxuICAgICAgICA8TGluZVxuICAgICAgICAgIHR5cGU9XCJtb25vdG9uZVwiXG4gICAgICAgICAgZGF0YUtleT1cIkF2ZXJhZ2UgU2NvcmVcIlxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgLz5cbiAgICAgICAgPExpbmVcbiAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgIGRhdGFLZXk9XCJZb3VyIFNjb3JlXCJcbiAgICAgICAgICBzdHJva2U9XCIjZTc0YzNjXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD17M31cbiAgICAgICAgLz5cbiAgICAgIDwvQ2hhcnQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnRzO1xuIl0sIm5hbWVzIjpbIkxpbmVDaGFydCIsIkNoYXJ0IiwiTGluZSIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsImFkZCIsImFjY3VtdWxhdG9yIiwiYSIsIkxpbmVDaGFydHMiLCJtb3RzIiwiYXZlcmFnZU1vdHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1hcCIsIm1vdCIsImF2Z01vdCIsIm5ld01vdCIsImluZGV4IiwiY29tcGxldGVkRGF0ZSIsInNwbGl0Iiwic2NvcmUiLCJmaW5hbFN1bSIsInJlZHVjZSIsIm5hbWUiLCJtb3RTY29yZSIsImFtdCIsImRpdiIsIndpZHRoIiwiaGVpZ2h0Iiwic3BsaWNlIiwicmV2ZXJzZSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZSIsImRhdGFLZXkiLCJ0eXBlIiwic3Ryb2tlV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LineChart/LineChart.tsx\n'
      );

      /***/
    },
});
