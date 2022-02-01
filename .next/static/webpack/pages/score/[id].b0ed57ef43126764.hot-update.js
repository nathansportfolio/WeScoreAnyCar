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
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nfunction add(accumulator, a) {\n    return accumulator + a;\n}\nvar LineCharts = function(param) {\n    var mots = param.mots, averageMots = param.averageMots;\n    console.log("mots", mots);\n    // console.log("averageMots", averageMots);\n    //TODO - Count advisories per mot and transform data for dates\n    var data = mots.sort(function(a, b) {\n        return a.completedDate.split(".")[0] - b.completedDate.split(".")[0];\n    }).map(function(mot) {\n        var avgMot = averageMots.map(function(newMot) {\n            if (newMot.completedDate === mot.completedDate.split(".")[0]) {\n                return newMot.score;\n            }\n            return 0;\n        });\n        var finalSum = avgMot.reduce(add, 0);\n        return {\n            name: mot.completedDate.split(".")[0],\n            "Your Score": mot.motScore,\n            "Average Score": finalSum || 0,\n            amt: 2\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, {\n            width: data.length * 65,\n            height: 270,\n            data: data,\n            margin: {\n                top: 5,\n                right: 30,\n                left: 0,\n                bottom: 5\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.CartesianGrid, {\n                    strokeDasharray: "4 4",\n                    stroke: "grey"\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {\n                    dataKey: "name",\n                    stroke: "white"\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {\n                    stroke: "white"\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {}, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                    type: "monotone",\n                    dataKey: "Average Score",\n                    stroke: "red",\n                    strokeWidth: 3,\n                    activeDot: {\n                        r: 8\n                    }\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                    type: "monotone",\n                    dataKey: "Your Score",\n                    stroke: "pink",\n                    strokeWidth: 3\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_c = LineCharts;\n/* harmony default export */ __webpack_exports__["default"] = (LineCharts);\nvar _c;\n$RefreshReg$(_c, "LineCharts");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmVDaGFydC9MaW5lQ2hhcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQU9pQjs7U0FPUk8sR0FBRyxDQUFDQyxXQUFtQixFQUFFQyxDQUFTLEVBQUUsQ0FBQztJQUM1QyxNQUFNLENBQUNELFdBQVcsR0FBR0MsQ0FBQztBQUN4QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxVQUFVLEdBQThCLFFBQVEsUUFBbUIsQ0FBQztRQUF6QkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLFdBQVcsU0FBWEEsV0FBVztJQUNoRUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTSxPQUFFSCxJQUFJO0lBQ3hCLEVBQTJDO0lBRTNDLEVBQThEO0lBQzlELEdBQUssQ0FBQ0ksSUFBSSxHQUFHSixJQUFJLENBQ2RLLElBQUksQ0FBQyxRQUFRLENBQUVQLENBQU0sRUFBRVEsQ0FBTSxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDUixDQUFDLENBQUNTLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDLElBQUlGLENBQUMsQ0FBQ0MsYUFBYSxDQUFDQyxLQUFLLENBQUMsQ0FBRyxJQUFFLENBQUM7SUFDckUsQ0FBQyxFQUNBQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFRLEVBQUssQ0FBQztRQUNsQixHQUFLLENBQUNDLE1BQU0sR0FBR1YsV0FBVyxDQUFDUSxHQUFHLENBQUMsUUFBUSxDQUFQRyxNQUFXLEVBQUssQ0FBQztZQUMvQyxFQUFFLEVBQUVBLE1BQU0sQ0FBQ0wsYUFBYSxLQUFLRyxHQUFHLENBQUNILGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDN0QsTUFBTSxDQUFDSSxNQUFNLENBQUNDLEtBQUs7WUFDckIsQ0FBQztZQUNELE1BQU0sQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUVELEdBQUssQ0FBQ0MsUUFBUSxHQUFHSCxNQUFNLENBQUNJLE1BQU0sQ0FBQ25CLEdBQUcsRUFBRSxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxDQUFDO1lBQ05vQixJQUFJLEVBQUVOLEdBQUcsQ0FBQ0gsYUFBYSxDQUFDQyxLQUFLLENBQUMsQ0FBRyxJQUFFLENBQUM7WUFDcEMsQ0FBWSxhQUFFRSxHQUFHLENBQUNPLFFBQVE7WUFDMUIsQ0FBZSxnQkFBRUgsUUFBUSxJQUFJLENBQUM7WUFDOUJJLEdBQUcsRUFBRSxDQUFDO1FBQ1IsQ0FBQztJQUNILENBQUM7SUFFSCxNQUFNLDZFQUNIQyxDQUFHOzhGQUNEN0IsK0NBQUs7WUFDSjhCLEtBQUssRUFBRWhCLElBQUksQ0FBQ2lCLE1BQU0sR0FBRyxFQUFFO1lBQ3ZCQyxNQUFNLEVBQUUsR0FBRztZQUNYbEIsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZtQixNQUFNLEVBQUUsQ0FBQztnQkFDUEMsR0FBRyxFQUFFLENBQUM7Z0JBQ05DLEtBQUssRUFBRSxFQUFFO2dCQUNUQyxJQUFJLEVBQUUsQ0FBQztnQkFDUEMsTUFBTSxFQUFFLENBQUM7WUFDWCxDQUFDOzs0RkFFQWpDLG1EQUFhO29CQUFDa0MsZUFBZSxFQUFDLENBQUs7b0JBQUNDLE1BQU0sRUFBQyxDQUFNOzs7Ozs7NEZBQ2pEckMsMkNBQUs7b0JBQUNzQyxPQUFPLEVBQUMsQ0FBTTtvQkFBQ0QsTUFBTSxFQUFDLENBQU87Ozs7Ozs0RkFDbkNwQywyQ0FBSztvQkFBQ29DLE1BQU0sRUFBQyxDQUFPOzs7Ozs7NEZBQ3BCbEMsNkNBQU87Ozs7OzRGQUVQSiwwQ0FBSTtvQkFDSHdDLElBQUksRUFBQyxDQUFVO29CQUNmRCxPQUFPLEVBQUMsQ0FBZTtvQkFDdkJELE1BQU0sRUFBQyxDQUFLO29CQUNaRyxXQUFXLEVBQUUsQ0FBQztvQkFDZEMsU0FBUyxFQUFFLENBQUM7d0JBQUNDLENBQUMsRUFBRSxDQUFDO29CQUFDLENBQUM7Ozs7Ozs0RkFFcEIzQywwQ0FBSTtvQkFDSHdDLElBQUksRUFBQyxDQUFVO29CQUNmRCxPQUFPLEVBQUMsQ0FBWTtvQkFDcEJELE1BQU0sRUFBQyxDQUFNO29CQUNiRyxXQUFXLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEIsQ0FBQztLQTdES2pDLFVBQVU7QUErRGhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQvTGluZUNoYXJ0LnRzeD8zN2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExpbmVDaGFydCBhcyBDaGFydCxcbiAgTGluZSxcbiAgWEF4aXMsXG4gIFlBeGlzLFxuICBDYXJ0ZXNpYW5HcmlkLFxuICBUb29sdGlwLFxufSBmcm9tIFwicmVjaGFydHNcIjtcblxuaW50ZXJmYWNlIExpbmVDaGFydHNQcm9wcyB7XG4gIG1vdHM6IGFueTtcbiAgYXZlcmFnZU1vdHM6IGFueTtcbn1cblxuZnVuY3Rpb24gYWRkKGFjY3VtdWxhdG9yOiBudW1iZXIsIGE6IG51bWJlcikge1xuICByZXR1cm4gYWNjdW11bGF0b3IgKyBhO1xufVxuXG5jb25zdCBMaW5lQ2hhcnRzOiBSZWFjdC5GQzxMaW5lQ2hhcnRzUHJvcHM+ID0gKHsgbW90cywgYXZlcmFnZU1vdHMgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIm1vdHNcIiwgbW90cyk7XG4gIC8vIGNvbnNvbGUubG9nKFwiYXZlcmFnZU1vdHNcIiwgYXZlcmFnZU1vdHMpO1xuXG4gIC8vVE9ETyAtIENvdW50IGFkdmlzb3JpZXMgcGVyIG1vdCBhbmQgdHJhbnNmb3JtIGRhdGEgZm9yIGRhdGVzXG4gIGNvbnN0IGRhdGEgPSBtb3RzXG4gICAgLnNvcnQoZnVuY3Rpb24gKGE6IGFueSwgYjogYW55KSB7XG4gICAgICByZXR1cm4gYS5jb21wbGV0ZWREYXRlLnNwbGl0KFwiLlwiKVswXSAtIGIuY29tcGxldGVkRGF0ZS5zcGxpdChcIi5cIilbMF07XG4gICAgfSlcbiAgICAubWFwKChtb3Q6IGFueSkgPT4ge1xuICAgICAgY29uc3QgYXZnTW90ID0gYXZlcmFnZU1vdHMubWFwKChuZXdNb3Q6IGFueSkgPT4ge1xuICAgICAgICBpZiAobmV3TW90LmNvbXBsZXRlZERhdGUgPT09IG1vdC5jb21wbGV0ZWREYXRlLnNwbGl0KFwiLlwiKVswXSkge1xuICAgICAgICAgIHJldHVybiBuZXdNb3Quc2NvcmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZmluYWxTdW0gPSBhdmdNb3QucmVkdWNlKGFkZCwgMCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG1vdC5jb21wbGV0ZWREYXRlLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgXCJZb3VyIFNjb3JlXCI6IG1vdC5tb3RTY29yZSxcbiAgICAgICAgXCJBdmVyYWdlIFNjb3JlXCI6IGZpbmFsU3VtIHx8IDAsXG4gICAgICAgIGFtdDogMixcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENoYXJ0XG4gICAgICAgIHdpZHRoPXtkYXRhLmxlbmd0aCAqIDY1fVxuICAgICAgICBoZWlnaHQ9ezI3MH1cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgbWFyZ2luPXt7XG4gICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgIHJpZ2h0OiAzMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJvdHRvbTogNSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiNCA0XCIgc3Ryb2tlPVwiZ3JleVwiIC8+XG4gICAgICAgIDxYQXhpcyBkYXRhS2V5PVwibmFtZVwiIHN0cm9rZT1cIndoaXRlXCIvPlxuICAgICAgICA8WUF4aXMgc3Ryb2tlPVwid2hpdGVcIiAvPlxuICAgICAgICA8VG9vbHRpcCAvPlxuXG4gICAgICAgIDxMaW5lXG4gICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcbiAgICAgICAgICBkYXRhS2V5PVwiQXZlcmFnZSBTY29yZVwiXG4gICAgICAgICAgc3Ryb2tlPVwicmVkXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD17M31cbiAgICAgICAgICBhY3RpdmVEb3Q9e3sgcjogOCB9fVxuICAgICAgICAvPlxuICAgICAgICA8TGluZVxuICAgICAgICAgIHR5cGU9XCJtb25vdG9uZVwiXG4gICAgICAgICAgZGF0YUtleT1cIllvdXIgU2NvcmVcIlxuICAgICAgICAgIHN0cm9rZT1cInBpbmtcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPXszfVxuICAgICAgICAvPlxuICAgICAgPC9DaGFydD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydHM7XG4iXSwibmFtZXMiOlsiTGluZUNoYXJ0IiwiQ2hhcnQiLCJMaW5lIiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiYWRkIiwiYWNjdW11bGF0b3IiLCJhIiwiTGluZUNoYXJ0cyIsIm1vdHMiLCJhdmVyYWdlTW90cyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic29ydCIsImIiLCJjb21wbGV0ZWREYXRlIiwic3BsaXQiLCJtYXAiLCJtb3QiLCJhdmdNb3QiLCJuZXdNb3QiLCJzY29yZSIsImZpbmFsU3VtIiwicmVkdWNlIiwibmFtZSIsIm1vdFNjb3JlIiwiYW10IiwiZGl2Iiwid2lkdGgiLCJsZW5ndGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2UiLCJkYXRhS2V5IiwidHlwZSIsInN0cm9rZVdpZHRoIiwiYWN0aXZlRG90IiwiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LineChart/LineChart.tsx\n'
      );

      /***/
    },
});
