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
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nfunction add(accumulator, a) {\n    return accumulator + a;\n}\nvar LineCharts = function(param) {\n    var mots = param.mots, averageMots = param.averageMots;\n    console.log("mots", mots);\n    // console.log("averageMots", averageMots);\n    //TODO - Count advisories per mot and transform data for dates\n    var data = mots.map(function(mot) {\n        var avgMot = averageMots.map(function(newMot, index) {\n            if (newMot.completedDate === mot.completedDate.split(".")[0]) {\n                return newMot.score;\n            }\n            return 0;\n        });\n        var finalSum = avgMot.reduce(add, 0);\n        return {\n            name: mot.completedDate.split(".")[0],\n            "Your Score": mot.motScore,\n            "Average Score": finalSum || 0,\n            amt: 2\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, {\n            width: 100,\n            height: 270,\n            data: data.splice(0, 5),\n            margin: {\n                top: 5,\n                right: 30,\n                left: 0,\n                bottom: 5\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.CartesianGrid, {\n                    strokeDasharray: "4 4",\n                    stroke: "black"\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {\n                    dataKey: "name",\n                    stroke: "white"\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {\n                    stroke: "white"\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {}, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                    type: "monotone",\n                    dataKey: "Average Score",\n                    stroke: "white",\n                    strokeWidth: 2\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                    type: "monotone",\n                    dataKey: "Your Score",\n                    stroke: "#e74c3c",\n                    strokeWidth: 3\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n            lineNumber: 45,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this));\n};\n_c = LineCharts;\n/* harmony default export */ __webpack_exports__["default"] = (LineCharts);\nvar _c;\n$RefreshReg$(_c, "LineCharts");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmVDaGFydC9MaW5lQ2hhcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQU9pQjs7U0FPUk8sR0FBRyxDQUFDQyxXQUFtQixFQUFFQyxDQUFTLEVBQUUsQ0FBQztJQUM1QyxNQUFNLENBQUNELFdBQVcsR0FBR0MsQ0FBQztBQUN4QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxVQUFVLEdBQThCLFFBQVEsUUFBbUIsQ0FBQztRQUF6QkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLFdBQVcsU0FBWEEsV0FBVztJQUNoRUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTSxPQUFFSCxJQUFJO0lBQ3hCLEVBQTJDO0lBRTNDLEVBQThEO0lBQzlELEdBQUssQ0FBQ0ksSUFBSSxHQUFHSixJQUFJLENBQ2RLLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEdBQVEsRUFBSyxDQUFDO1FBQ2xCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixXQUFXLENBQUNJLEdBQUcsQ0FBQyxRQUFRLENBQVBHLE1BQVcsRUFBRUMsS0FBWSxFQUFLLENBQUM7WUFDN0QsRUFBRSxFQUFFRCxNQUFNLENBQUNFLGFBQWEsS0FBS0osR0FBRyxDQUFDSSxhQUFhLENBQUNDLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELE1BQU0sQ0FBQ0gsTUFBTSxDQUFDSSxLQUFLO1lBQ3hCLENBQUM7WUFDRCxNQUFNLENBQUMsQ0FBQztRQUNWLENBQUM7UUFFRCxHQUFLLENBQUNDLFFBQVEsR0FBR04sTUFBTSxDQUFDTyxNQUFNLENBQUNsQixHQUFHLEVBQUUsQ0FBQztRQUVyQyxNQUFNLENBQUMsQ0FBQztZQUNObUIsSUFBSSxFQUFFVCxHQUFHLENBQUNJLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDO1lBQ3BDLENBQVksYUFBRUwsR0FBRyxDQUFDVSxRQUFRO1lBQzFCLENBQWUsZ0JBQUVILFFBQVEsSUFBSSxDQUFDO1lBQzlCSSxHQUFHLEVBQUUsQ0FBQztRQUNSLENBQUM7SUFDSCxDQUFDO0lBRUgsTUFBTSw2RUFDSEMsQ0FBRzs4RkFDRDVCLCtDQUFLO1lBQ0o2QixLQUFLLEVBQUUsR0FBRztZQUNWQyxNQUFNLEVBQUUsR0FBRztZQUNYaEIsSUFBSSxFQUFFQSxJQUFJLENBQUNpQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdEJDLE1BQU0sRUFBRSxDQUFDO2dCQUNQQyxHQUFHLEVBQUUsQ0FBQztnQkFDTkMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1RDLElBQUksRUFBRSxDQUFDO2dCQUNQQyxNQUFNLEVBQUUsQ0FBQztZQUNYLENBQUM7OzRGQUVBaEMsbURBQWE7b0JBQUNpQyxlQUFlLEVBQUMsQ0FBSztvQkFBQ0MsTUFBTSxFQUFDLENBQU87Ozs7Ozs0RkFDbERwQywyQ0FBSztvQkFBQ3FDLE9BQU8sRUFBQyxDQUFNO29CQUFDRCxNQUFNLEVBQUMsQ0FBTzs7Ozs7OzRGQUNuQ25DLDJDQUFLO29CQUFDbUMsTUFBTSxFQUFDLENBQU87Ozs7Ozs0RkFDcEJqQyw2Q0FBTzs7Ozs7NEZBRVBKLDBDQUFJO29CQUNIdUMsSUFBSSxFQUFDLENBQVU7b0JBQ2ZELE9BQU8sRUFBQyxDQUFlO29CQUN2QkQsTUFBTSxFQUFDLENBQU87b0JBQ2RHLFdBQVcsRUFBRSxDQUFDOzs7Ozs7NEZBRWZ4QywwQ0FBSTtvQkFDSHVDLElBQUksRUFBQyxDQUFVO29CQUNmRCxPQUFPLEVBQUMsQ0FBWTtvQkFDcEJELE1BQU0sRUFBQyxDQUFTO29CQUNoQkcsV0FBVyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCLENBQUM7S0F6REtoQyxVQUFVO0FBMkRoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGluZUNoYXJ0L0xpbmVDaGFydC50c3g/MzdlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMaW5lQ2hhcnQgYXMgQ2hhcnQsXG4gIExpbmUsXG4gIFhBeGlzLFxuICBZQXhpcyxcbiAgQ2FydGVzaWFuR3JpZCxcbiAgVG9vbHRpcCxcbn0gZnJvbSBcInJlY2hhcnRzXCI7XG5cbmludGVyZmFjZSBMaW5lQ2hhcnRzUHJvcHMge1xuICBtb3RzOiBhbnk7XG4gIGF2ZXJhZ2VNb3RzOiBhbnk7XG59XG5cbmZ1bmN0aW9uIGFkZChhY2N1bXVsYXRvcjogbnVtYmVyLCBhOiBudW1iZXIpIHtcbiAgcmV0dXJuIGFjY3VtdWxhdG9yICsgYTtcbn1cblxuY29uc3QgTGluZUNoYXJ0czogUmVhY3QuRkM8TGluZUNoYXJ0c1Byb3BzPiA9ICh7IG1vdHMsIGF2ZXJhZ2VNb3RzIH0pID0+IHtcbiAgY29uc29sZS5sb2coXCJtb3RzXCIsIG1vdHMpO1xuICAvLyBjb25zb2xlLmxvZyhcImF2ZXJhZ2VNb3RzXCIsIGF2ZXJhZ2VNb3RzKTtcblxuICAvL1RPRE8gLSBDb3VudCBhZHZpc29yaWVzIHBlciBtb3QgYW5kIHRyYW5zZm9ybSBkYXRhIGZvciBkYXRlc1xuICBjb25zdCBkYXRhID0gbW90c1xuICAgIC5tYXAoKG1vdDogYW55KSA9PiB7XG4gICAgICBjb25zdCBhdmdNb3QgPSBhdmVyYWdlTW90cy5tYXAoKG5ld01vdDogYW55LCBpbmRleDpudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKG5ld01vdC5jb21wbGV0ZWREYXRlID09PSBtb3QuY29tcGxldGVkRGF0ZS5zcGxpdChcIi5cIilbMF0pIHtcbiAgICAgICAgICAgICByZXR1cm4gbmV3TW90LnNjb3JlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZpbmFsU3VtID0gYXZnTW90LnJlZHVjZShhZGQsIDApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBtb3QuY29tcGxldGVkRGF0ZS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgIFwiWW91ciBTY29yZVwiOiBtb3QubW90U2NvcmUsXG4gICAgICAgIFwiQXZlcmFnZSBTY29yZVwiOiBmaW5hbFN1bSB8fCAwLFxuICAgICAgICBhbXQ6IDIsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDaGFydFxuICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICBoZWlnaHQ9ezI3MH1cbiAgICAgICAgZGF0YT17ZGF0YS5zcGxpY2UoMCwgNSl9XG4gICAgICAgIG1hcmdpbj17e1xuICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICByaWdodDogMzAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBib3R0b206IDUsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjQgNFwiIHN0cm9rZT1cImJsYWNrXCIgLz5cbiAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJuYW1lXCIgc3Ryb2tlPVwid2hpdGVcIi8+XG4gICAgICAgIDxZQXhpcyBzdHJva2U9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxUb29sdGlwIC8+XG5cbiAgICAgICAgPExpbmVcbiAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgIGRhdGFLZXk9XCJBdmVyYWdlIFNjb3JlXCJcbiAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5lXG4gICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcbiAgICAgICAgICBkYXRhS2V5PVwiWW91ciBTY29yZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiI2U3NGMzY1wiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezN9XG4gICAgICAgIC8+XG4gICAgICA8L0NoYXJ0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0cztcbiJdLCJuYW1lcyI6WyJMaW5lQ2hhcnQiLCJDaGFydCIsIkxpbmUiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJhZGQiLCJhY2N1bXVsYXRvciIsImEiLCJMaW5lQ2hhcnRzIiwibW90cyIsImF2ZXJhZ2VNb3RzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtYXAiLCJtb3QiLCJhdmdNb3QiLCJuZXdNb3QiLCJpbmRleCIsImNvbXBsZXRlZERhdGUiLCJzcGxpdCIsInNjb3JlIiwiZmluYWxTdW0iLCJyZWR1Y2UiLCJuYW1lIiwibW90U2NvcmUiLCJhbXQiLCJkaXYiLCJ3aWR0aCIsImhlaWdodCIsInNwbGljZSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZSIsImRhdGFLZXkiLCJ0eXBlIiwic3Ryb2tlV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LineChart/LineChart.tsx\n'
      );

      /***/
    },
});
