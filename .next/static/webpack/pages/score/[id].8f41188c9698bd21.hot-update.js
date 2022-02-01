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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nfunction add(accumulator, a) {\n    return accumulator + a;\n}\nvar LineCharts = function(param) {\n    var mots = param.mots, averageMots = param.averageMots;\n    console.log(\"mots\", mots);\n    // console.log(\"averageMots\", averageMots);\n    //TODO - Count advisories per mot and transform data for dates\n    var data = mots.sort(function(a, b) {\n        return a.completedDate.split(\".\")[0] - b.completedDate.split(\".\")[0];\n    }).map(function(mot) {\n        var avgMot = averageMots.map(function(newMot) {\n            if (newMot.completedDate === mot.completedDate.split(\".\")[0]) {\n                return newMot.score;\n            }\n            return 0;\n        });\n        var finalSum = avgMot.reduce(add, 0);\n        return {\n            name: mot.completedDate.split(\".\")[0],\n            \"Your Score\": mot.motScore,\n            \"Average Score\": finalSum || 0,\n            amt: 2\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, {\n            width: data.length * 65,\n            height: 270,\n            data: data,\n            margin: {\n                top: 5,\n                right: 30,\n                left: 0,\n                bottom: 5\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.CartesianGrid, {\n                    strokeDasharray: \"0\"\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {\n                    dataKey: \"name\"\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {}, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {}, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                    type: \"monotone\",\n                    dataKey: \"Average Score\",\n                    stroke: \"red\",\n                    strokeWidth: 3,\n                    activeDot: {\n                        r: 8\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {\n                    type: \"monotone\",\n                    dataKey: \"Your Score\",\n                    stroke: \"pink\",\n                    strokeWidth: 3\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/LineChart/LineChart.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_c = LineCharts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineCharts);\nvar _c;\n$RefreshReg$(_c, \"LineCharts\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmVDaGFydC9MaW5lQ2hhcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQU9pQjs7U0FPUk8sR0FBRyxDQUFDQyxXQUFtQixFQUFFQyxDQUFTLEVBQUUsQ0FBQztJQUM1QyxNQUFNLENBQUNELFdBQVcsR0FBR0MsQ0FBQztBQUN4QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxVQUFVLEdBQThCLFFBQVEsUUFBbUIsQ0FBQztRQUF6QkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLFdBQVcsU0FBWEEsV0FBVztJQUNoRUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTSxPQUFFSCxJQUFJO0lBQ3hCLEVBQTJDO0lBRTNDLEVBQThEO0lBQzlELEdBQUssQ0FBQ0ksSUFBSSxHQUFHSixJQUFJLENBQ2RLLElBQUksQ0FBQyxRQUFRLENBQUVQLENBQU0sRUFBRVEsQ0FBTSxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDUixDQUFDLENBQUNTLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDLElBQUlGLENBQUMsQ0FBQ0MsYUFBYSxDQUFDQyxLQUFLLENBQUMsQ0FBRyxJQUFFLENBQUM7SUFDckUsQ0FBQyxFQUNBQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFRLEVBQUssQ0FBQztRQUNsQixHQUFLLENBQUNDLE1BQU0sR0FBR1YsV0FBVyxDQUFDUSxHQUFHLENBQUMsUUFBUSxDQUFQRyxNQUFXLEVBQUssQ0FBQztZQUMvQyxFQUFFLEVBQUVBLE1BQU0sQ0FBQ0wsYUFBYSxLQUFLRyxHQUFHLENBQUNILGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDN0QsTUFBTSxDQUFDSSxNQUFNLENBQUNDLEtBQUs7WUFDckIsQ0FBQztZQUNELE1BQU0sQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUVELEdBQUssQ0FBQ0MsUUFBUSxHQUFHSCxNQUFNLENBQUNJLE1BQU0sQ0FBQ25CLEdBQUcsRUFBRSxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxDQUFDO1lBQ05vQixJQUFJLEVBQUVOLEdBQUcsQ0FBQ0gsYUFBYSxDQUFDQyxLQUFLLENBQUMsQ0FBRyxJQUFFLENBQUM7WUFDcEMsQ0FBWSxhQUFFRSxHQUFHLENBQUNPLFFBQVE7WUFDMUIsQ0FBZSxnQkFBRUgsUUFBUSxJQUFJLENBQUM7WUFDOUJJLEdBQUcsRUFBRSxDQUFDO1FBQ1IsQ0FBQztJQUNILENBQUM7SUFFSCxNQUFNLDZFQUNIQyxDQUFHOzhGQUNEN0IsK0NBQUs7WUFDSjhCLEtBQUssRUFBRWhCLElBQUksQ0FBQ2lCLE1BQU0sR0FBRyxFQUFFO1lBQ3ZCQyxNQUFNLEVBQUUsR0FBRztZQUNYbEIsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZtQixNQUFNLEVBQUUsQ0FBQztnQkFDUEMsR0FBRyxFQUFFLENBQUM7Z0JBQ05DLEtBQUssRUFBRSxFQUFFO2dCQUNUQyxJQUFJLEVBQUUsQ0FBQztnQkFDUEMsTUFBTSxFQUFFLENBQUM7WUFDWCxDQUFDOzs0RkFFQWpDLG1EQUFhO29CQUFDa0MsZUFBZSxFQUFDLENBQUc7Ozs7Ozs0RkFDakNwQywyQ0FBSztvQkFBQ3FDLE9BQU8sRUFBQyxDQUFNOzs7Ozs7NEZBQ3BCcEMsMkNBQUs7Ozs7OzRGQUNMRSw2Q0FBTzs7Ozs7NEZBRVBKLDBDQUFJO29CQUNIdUMsSUFBSSxFQUFDLENBQVU7b0JBQ2ZELE9BQU8sRUFBQyxDQUFlO29CQUN2QkUsTUFBTSxFQUFDLENBQUs7b0JBQ1pDLFdBQVcsRUFBRSxDQUFDO29CQUNkQyxTQUFTLEVBQUUsQ0FBQzt3QkFBQ0MsQ0FBQyxFQUFFLENBQUM7b0JBQUMsQ0FBQzs7Ozs7OzRGQUVwQjNDLDBDQUFJO29CQUNIdUMsSUFBSSxFQUFDLENBQVU7b0JBQ2ZELE9BQU8sRUFBQyxDQUFZO29CQUNwQkUsTUFBTSxFQUFDLENBQU07b0JBQ2JDLFdBQVcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QixDQUFDO0tBN0RLakMsVUFBVTtBQStEaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpbmVDaGFydC9MaW5lQ2hhcnQudHN4PzM3ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTGluZUNoYXJ0IGFzIENoYXJ0LFxuICBMaW5lLFxuICBYQXhpcyxcbiAgWUF4aXMsXG4gIENhcnRlc2lhbkdyaWQsXG4gIFRvb2x0aXAsXG59IGZyb20gXCJyZWNoYXJ0c1wiO1xuXG5pbnRlcmZhY2UgTGluZUNoYXJ0c1Byb3BzIHtcbiAgbW90czogYW55O1xuICBhdmVyYWdlTW90czogYW55O1xufVxuXG5mdW5jdGlvbiBhZGQoYWNjdW11bGF0b3I6IG51bWJlciwgYTogbnVtYmVyKSB7XG4gIHJldHVybiBhY2N1bXVsYXRvciArIGE7XG59XG5cbmNvbnN0IExpbmVDaGFydHM6IFJlYWN0LkZDPExpbmVDaGFydHNQcm9wcz4gPSAoeyBtb3RzLCBhdmVyYWdlTW90cyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwibW90c1wiLCBtb3RzKTtcbiAgLy8gY29uc29sZS5sb2coXCJhdmVyYWdlTW90c1wiLCBhdmVyYWdlTW90cyk7XG5cbiAgLy9UT0RPIC0gQ291bnQgYWR2aXNvcmllcyBwZXIgbW90IGFuZCB0cmFuc2Zvcm0gZGF0YSBmb3IgZGF0ZXNcbiAgY29uc3QgZGF0YSA9IG1vdHNcbiAgICAuc29ydChmdW5jdGlvbiAoYTogYW55LCBiOiBhbnkpIHtcbiAgICAgIHJldHVybiBhLmNvbXBsZXRlZERhdGUuc3BsaXQoXCIuXCIpWzBdIC0gYi5jb21wbGV0ZWREYXRlLnNwbGl0KFwiLlwiKVswXTtcbiAgICB9KVxuICAgIC5tYXAoKG1vdDogYW55KSA9PiB7XG4gICAgICBjb25zdCBhdmdNb3QgPSBhdmVyYWdlTW90cy5tYXAoKG5ld01vdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChuZXdNb3QuY29tcGxldGVkRGF0ZSA9PT0gbW90LmNvbXBsZXRlZERhdGUuc3BsaXQoXCIuXCIpWzBdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ld01vdC5zY29yZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmaW5hbFN1bSA9IGF2Z01vdC5yZWR1Y2UoYWRkLCAwKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbW90LmNvbXBsZXRlZERhdGUuc3BsaXQoXCIuXCIpWzBdLFxuICAgICAgICBcIllvdXIgU2NvcmVcIjogbW90Lm1vdFNjb3JlLFxuICAgICAgICBcIkF2ZXJhZ2UgU2NvcmVcIjogZmluYWxTdW0gfHwgMCxcbiAgICAgICAgYW10OiAyLFxuICAgICAgfTtcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q2hhcnRcbiAgICAgICAgd2lkdGg9e2RhdGEubGVuZ3RoICogNjV9XG4gICAgICAgIGhlaWdodD17MjcwfVxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICBtYXJnaW49e3tcbiAgICAgICAgICB0b3A6IDUsXG4gICAgICAgICAgcmlnaHQ6IDMwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYm90dG9tOiA1LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIwXCIgLz5cbiAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJuYW1lXCIgLz5cbiAgICAgICAgPFlBeGlzIC8+XG4gICAgICAgIDxUb29sdGlwIC8+XG5cbiAgICAgICAgPExpbmVcbiAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgIGRhdGFLZXk9XCJBdmVyYWdlIFNjb3JlXCJcbiAgICAgICAgICBzdHJva2U9XCJyZWRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPXszfVxuICAgICAgICAgIGFjdGl2ZURvdD17eyByOiA4IH19XG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5lXG4gICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcbiAgICAgICAgICBkYXRhS2V5PVwiWW91ciBTY29yZVwiXG4gICAgICAgICAgc3Ryb2tlPVwicGlua1wiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezN9XG4gICAgICAgIC8+XG4gICAgICA8L0NoYXJ0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0cztcbiJdLCJuYW1lcyI6WyJMaW5lQ2hhcnQiLCJDaGFydCIsIkxpbmUiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJhZGQiLCJhY2N1bXVsYXRvciIsImEiLCJMaW5lQ2hhcnRzIiwibW90cyIsImF2ZXJhZ2VNb3RzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzb3J0IiwiYiIsImNvbXBsZXRlZERhdGUiLCJzcGxpdCIsIm1hcCIsIm1vdCIsImF2Z01vdCIsIm5ld01vdCIsInNjb3JlIiwiZmluYWxTdW0iLCJyZWR1Y2UiLCJuYW1lIiwibW90U2NvcmUiLCJhbXQiLCJkaXYiLCJ3aWR0aCIsImxlbmd0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInN0cm9rZURhc2hhcnJheSIsImRhdGFLZXkiLCJ0eXBlIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJhY3RpdmVEb3QiLCJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LineChart/LineChart.tsx\n");

/***/ })

});