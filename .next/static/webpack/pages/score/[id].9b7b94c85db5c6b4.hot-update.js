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
  /***/ "./components/ScoreGauge/ScoreGauge.tsx":
    /*!**********************************************!*\
  !*** ./components/ScoreGauge/ScoreGauge.tsx ***!
  \**********************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar cleanPercentage = function(percentage) {\n    var tooLow = !Number.isFinite(+percentage) || percentage < 0;\n    var tooHigh = percentage > 100;\n    return tooLow ? 0 : tooHigh ? 100 : +percentage;\n};\nvar getValues = function(percent) {\n    var score = percent * 10;\n    switch(true){\n        case score < 438:\n            return {\n                header: "Poor",\n                colour: "#e67e22"\n            };\n            break;\n        case score >= 438 && score < 530:\n            return {\n                header: "Fair",\n                colour: "#f1c40f"\n            };\n            break;\n        case score >= 530 && score < 670:\n            return {\n                header: "Good",\n                colour: "#7bed9f"\n            };\n            break;\n        case score >= 670 && score < 810:\n            return {\n                header: "Very Good",\n                colour: "#2ecc71"\n            };\n            break;\n        case score > 810:\n            return {\n                header: "Excellent",\n                colour: "#27ae60"\n            };\n            break;\n        default:\n            return {\n                colour: "#27ae60",\n                header: "None"\n            };\n    }\n};\nvar ScoreGauge = function(param) {\n    var percentage = param.percentage, duration = param.duration, header = param.header, subHeader = param.subHeader, noDelay = param.noDelay, average = param.average, car = param.car;\n    _s();\n    var circ = 2 * Math.PI * 100;\n    var circTwo = 2 * Math.PI * 95;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), Percent = ref[0], setPercent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), PercentTwo = ref1[0], setPercentTwo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setPercent(cleanPercentage(percentage));\n            setPercentTwo(cleanPercentage(average));\n        }, 10);\n    }, []);\n    var colour = getValues(Percent);\n    var strokePct = (100 - Percent) * circ / 100;\n    var strokePctSecond = (100 - PercentTwo) * circTwo / 100;\n    var positive = (Percent - PercentTwo) * 10 > 0;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        style: {\n            justifyContent: "center",\n            display: "flex"\n        },\n        children: header && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n            className: "score-gauge",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {\n                    width: 230,\n                    height: 230,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {\n                            transform: "rotate(-90 113 100)",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {\n                                r: 100,\n                                cx: 100,\n                                cy: 100,\n                                fill: "rgba(0, 0, 0, 0.274)",\n                                strokeLinecap: "round",\n                                style: {\n                                    stroke: colour.colour,\n                                    transition: noDelay ? "" : "all 1.5s",\n                                    strokeWidth: "0.2rem",\n                                    strokeDasharray: circ,\n                                    strokeDashoffset: strokePct\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {\n                            transform: "rotate(-90 113 95)",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {\n                                r: 95,\n                                cx: 95,\n                                cy: 95,\n                                fill: "rgba(0, 0, 0, 0.274)",\n                                strokeLinecap: "round",\n                                style: {\n                                    stroke: \'white\',\n                                    transition: noDelay ? "" : "all 1.5s",\n                                    strokeWidth: "0.2rem",\n                                    strokeDasharray: circTwo,\n                                    strokeDashoffset: strokePctSecond\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 96,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-header",\n                    children: header || header\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-text",\n                    style: {\n                        color: colour.colour\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                            style: {\n                                display: \'flex\',\n                                fontWeight: \'400\'\n                            },\n                            children: [\n                                " ",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                                    start: 0,\n                                    end: Percent * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 115,\n                                    columnNumber: 63\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                                    style: {\n                                        fontSize: \'12px\',\n                                        color: positive ? \'green\' : \'red\',\n                                        marginLeft: \'-5px\',\n                                        fontWeight: \'300\'\n                                    },\n                                    children: [\n                                        positive && \'+\',\n                                        ((Percent - PercentTwo) * 10).toFixed(0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 115,\n                            columnNumber: 12\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                            style: {\n                                fontSize: \'10px\'\n                            },\n                            children: "Bad"\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 121,\n                            columnNumber: 85\n                        }, _this),\n                        !subHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                            style: {\n                                fontSize: \'12px\',\n                                color: \'white\',\n                                textAlign: \'center\',\n                                fontWeight: \'300\'\n                            },\n                            children: [\n                                car && car,\n                                " Average Score",\n                                " ",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 123,\n                                    columnNumber: 46\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                                    start: 0,\n                                    end: PercentTwo * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 124,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 122,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-subheader",\n                    style: {\n                        textAlign: "center"\n                    },\n                    children: subHeader || subHeader\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 134,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n            lineNumber: 78,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n        lineNumber: 76,\n        columnNumber: 5\n    }, _this));\n};\n_s(ScoreGauge, "NSTv9PFzbcHrKte8rtBzf9w1MSI=");\n_c = ScoreGauge;\n/* harmony default export */ __webpack_exports__["default"] = (ScoreGauge);\nvar _c;\n$RefreshReg$(_c, "ScoreGauge");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njb3JlR2F1Z2UvU2NvcmVHYXVnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDUjs7O0FBRW5DLEdBQUssQ0FBQ0csZUFBZSxHQUFHLFFBQVEsQ0FBUEMsVUFBa0IsRUFBSyxDQUFDO0lBQy9DLEdBQUssQ0FBQ0MsTUFBTSxJQUFJQyxNQUFNLENBQUNDLFFBQVEsRUFBRUgsVUFBVSxLQUFLQSxVQUFVLEdBQUcsQ0FBQztJQUM5RCxHQUFLLENBQUNJLE9BQU8sR0FBR0osVUFBVSxHQUFHLEdBQUc7SUFDaEMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFHRyxPQUFPLEdBQUcsR0FBRyxJQUFJSixVQUFVO0FBQ2pELENBQUM7QUFFRCxHQUFLLENBQUNLLFNBQVMsR0FBRyxRQUFRLENBQVBDLE9BQWUsRUFBSyxDQUFDO0lBQ3RDLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRCxPQUFPLEdBQUcsRUFBRTtJQUMxQixNQUFNLENBQUUsSUFBSTtRQUNWLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEdBQUc7WUFDZCxNQUFNLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQU07Z0JBQUVDLE1BQU0sRUFBRSxDQUFTO1lBQUMsQ0FBQztZQUM1QyxLQUFLO1FBQ1AsSUFBSSxDQUFDRixLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRztZQUM5QixNQUFNLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQU07Z0JBQUVDLE1BQU0sRUFBRSxDQUFTO1lBQUMsQ0FBQztZQUM1QyxLQUFLO1FBQ1AsSUFBSSxDQUFDRixLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRztZQUM5QixNQUFNLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQU07Z0JBQUVDLE1BQU0sRUFBRSxDQUFTO1lBQUMsQ0FBQztZQUM1QyxLQUFLO1FBQ1AsSUFBSSxDQUFDRixLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcs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QUFVLEVBQUUsQ0FBSztvQ0FBQSxDQUFDOzt3Q0FDdEd2QixRQUFRLElBQUksQ0FBRzswQ0FBSVAsT0FBTyxHQUFHRSxVQUFVLElBQUUsRUFBRSxFQUFFa0MsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7b0dBQWVDLENBQUM7NEJBQUM1QixLQUFLLEVBQUUsQ0FBQ3lCO2dDQUFBQSxRQUFRLEVBQUUsQ0FBTTs0QkFBQSxDQUFDO3NDQUFFLENBQUc7Ozs7Ozt5QkFDdkcxQyxTQUFTLGdGQUFLZ0IsQ0FBRzs0QkFBQ0MsS0FBSyxFQUFFLENBQUN5QjtnQ0FBQUEsUUFBUSxFQUFFLENBQU07Z0NBQUVMLEtBQUssRUFBRSxDQUFPO2dDQUFFUyxTQUFTLEVBQUUsQ0FBUTtnQ0FBRVIsVUFBVSxFQUFFLENBQUs7NEJBQUEsQ0FBQzs7Z0NBQ2xHbkMsR0FBRyxJQUFJQSxHQUFHO2dDQUFDLENBQWM7Z0NBQUMsQ0FBRzs0R0FBRTRDLENBQUU7Ozs7OzRHQUNuQzdELHFEQUFPO29DQUNOcUQsS0FBSyxFQUFFLENBQUM7b0NBQ1JDLEdBQUcsRUFBRTlCLFVBQVUsR0FBRyxFQUFFO29DQUNwQlgsUUFBUSxFQUFFQSxRQUFRLElBQUksS0FBSztvQ0FDM0IwQyxRQUFRLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQU1kekIsQ0FBRztvQkFDRkksU0FBUyxFQUFDLENBQXVCO29CQUNqQ0gsS0FBSyxFQUFFLENBQUM7d0JBQUM2QixTQUFTLEVBQUUsQ0FBUTtvQkFBQyxDQUFDOzhCQUU3QjlDLFNBQVMsSUFBSUEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkMsQ0FBQztHQS9GS0YsVUFBVTtLQUFWQSxVQUFVO0FBaUdoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2NvcmVHYXVnZS9TY29yZUdhdWdlLnRzeD80MzU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb3VudFVwIGZyb20gXCJyZWFjdC1jb3VudHVwXCI7XG5cbmNvbnN0IGNsZWFuUGVyY2VudGFnZSA9IChwZXJjZW50YWdlOiBudW1iZXIpID0+IHtcbiAgY29uc3QgdG9vTG93ID0gIU51bWJlci5pc0Zpbml0ZSgrcGVyY2VudGFnZSkgfHwgcGVyY2VudGFnZSA8IDA7XG4gIGNvbnN0IHRvb0hpZ2ggPSBwZXJjZW50YWdlID4gMTAwO1xuICByZXR1cm4gdG9vTG93ID8gMCA6IHRvb0hpZ2ggPyAxMDAgOiArcGVyY2VudGFnZTtcbn07XG5cbmNvbnN0IGdldFZhbHVlcyA9IChwZXJjZW50OiBudW1iZXIpID0+IHtcbiAgY29uc3Qgc2NvcmUgPSBwZXJjZW50ICogMTA7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2Ugc2NvcmUgPCA0Mzg6XG4gICAgICByZXR1cm4geyBoZWFkZXI6IFwiUG9vclwiLCBjb2xvdXI6IFwiI2U2N2UyMlwiIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIHNjb3JlID49IDQzOCAmJiBzY29yZSA8IDUzMDpcbiAgICAgIHJldHVybiB7IGhlYWRlcjogXCJGYWlyXCIsIGNvbG91cjogXCIjZjFjNDBmXCIgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2Ugc2NvcmUgPj0gNTMwICYmIHNjb3JlIDwgNjcwOlxuICAgICAgcmV0dXJuIHsgaGVhZGVyOiBcIkdvb2RcIiwgY29sb3VyOiBcIiM3YmVkOWZcIiB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBzY29yZSA+PSA2NzAgJiYgc2NvcmUgPCA4MTA6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IFwiVmVyeSBHb29kXCIsXG4gICAgICAgIGNvbG91cjogXCIjMmVjYzcxXCIsXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBzY29yZSA+IDgxMDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogXCJFeGNlbGxlbnRcIixcbiAgICAgICAgY29sb3VyOiBcIiMyN2FlNjBcIixcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgY29sb3VyOiBcIiMyN2FlNjBcIiwgaGVhZGVyOiBcIk5vbmVcIiB9O1xuICB9XG59O1xuXG5pbnRlcmZhY2UgU2NvcmVHYXVnZVByb3BzIHtcbiAgcGVyY2VudGFnZTogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBoZWFkZXI6IHN0cmluZztcbiAgc3ViSGVhZGVyOiBzdHJpbmc7XG4gIG5vRGVsYXk/OiBib29sZWFuO1xuICBhdmVyYWdlOiBhbnlcbiAgY2FyPzogc3RyaW5nXG59XG5cbmNvbnN0IFNjb3JlR2F1Z2U6IFJlYWN0LkZDPFNjb3JlR2F1Z2VQcm9wcz4gPSAoe1xuICBwZXJjZW50YWdlLFxuICBkdXJhdGlvbixcbiAgaGVhZGVyLFxuICBzdWJIZWFkZXIsXG4gIG5vRGVsYXksXG4gIGF2ZXJhZ2UsXG4gIGNhclxufSkgPT4ge1xuICBjb25zdCBjaXJjID0gMiAqIE1hdGguUEkgKiAxMDA7XG4gIGNvbnN0IGNpcmNUd28gPSAyICogTWF0aC5QSSAqIDk1O1xuICBjb25zdCBbUGVyY2VudCwgc2V0UGVyY2VudF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW1BlcmNlbnRUd28sIHNldFBlcmNlbnRUd29dID0gdXNlU3RhdGUoMSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFBlcmNlbnQoY2xlYW5QZXJjZW50YWdlKHBlcmNlbnRhZ2UpKTtcbiAgICAgIHNldFBlcmNlbnRUd28oY2xlYW5QZXJjZW50YWdlKGF2ZXJhZ2UpKTtcbiAgICB9LCAxMCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjb2xvdXIgPSBnZXRWYWx1ZXMoUGVyY2VudCk7XG4gIGNvbnN0IHN0cm9rZVBjdCA9ICgoMTAwIC0gUGVyY2VudCkgKiBjaXJjKSAvIDEwMDtcblxuICBjb25zdCBzdHJva2VQY3RTZWNvbmQgPSAoKDEwMCAtIFBlcmNlbnRUd28pICogY2lyY1R3bykgLyAxMDA7XG4gIGNvbnN0IHBvc2l0aXZlID0gKChQZXJjZW50IC0gUGVyY2VudFR3bykqMTApID4gMFxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAge2hlYWRlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZ2F1Z2VcIj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPXsyMzB9IGhlaWdodD17MjMwfT5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgJHtcIjExMyAxMDBcIn0pYH0+XG4gICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICByPXsxMDB9XG4gICAgICAgICAgICAgICAgY3g9ezEwMH1cbiAgICAgICAgICAgICAgICBjeT17MTAwfVxuICAgICAgICAgICAgICAgIGZpbGw9XCJyZ2JhKDAsIDAsIDAsIDAuMjc0KVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBjb2xvdXIuY29sb3VyLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9EZWxheSA/IFwiXCIgOiBcImFsbCAxLjVzXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIwLjJyZW1cIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogY2lyYyxcbiAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHN0cm9rZVBjdCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAke1wiMTEzIDk1XCJ9KWB9PlxuICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgcj17OTV9XG4gICAgICAgICAgICAgICAgY3g9ezk1fVxuICAgICAgICAgICAgICAgIGN5PXs5NX1cbiAgICAgICAgICAgICAgICBmaWxsPVwicmdiYSgwLCAwLCAwLCAwLjI3NClcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG5vRGVsYXkgPyBcIlwiIDogXCJhbGwgMS41c1wiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMC4ycmVtXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGNpcmNUd28sXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBzdHJva2VQY3RTZWNvbmQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZ2F1Z2UtaGVhZGVyXCI+e2hlYWRlciB8fCBoZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1nYXVnZS10ZXh0XCIgc3R5bGU9e3tjb2xvcjogY29sb3VyLmNvbG91cn19PlxuICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmb250V2VpZ2h0OiAnNDAwJ319PiA8Q291bnRVcFxuICAgICAgICAgICAgICBzdGFydD17MH1cbiAgICAgICAgICAgICAgZW5kPXtQZXJjZW50ICogMTB9XG4gICAgICAgICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbiB8fCAwLjAwMX1cbiAgICAgICAgICAgICAgZGVjaW1hbHM9ezB9XG4gICAgICAgICAgICAvPjxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzEycHgnLCBjb2xvcjogcG9zaXRpdmUgPyAnZ3JlZW4nIDogJ3JlZCcsIG1hcmdpbkxlZnQ6ICctNXB4JywgZm9udFdlaWdodDogJzMwMCd9fT5cbiAgICAgICAgICAgICAgeyBwb3NpdGl2ZSAmJiAnKyd9eygoUGVyY2VudCAtIFBlcmNlbnRUd28pKjEwKS50b0ZpeGVkKDApfTwvZGl2PjwvZGl2PjxwIHN0eWxlPXt7Zm9udFNpemU6ICcxMHB4J319PkJhZDwvcD5cbiAgICAgICAgICAgIHshc3ViSGVhZGVyICYmIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJ3doaXRlJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFdlaWdodDogJzMwMCd9fT5cbiAgICAgICAgICAgICAge2NhciAmJiBjYXJ9IEF2ZXJhZ2UgU2NvcmV7XCIgXCJ9PGJyLz5cbiAgICAgICAgICAgIDxDb3VudFVwXG4gICAgICAgICAgICAgIHN0YXJ0PXswfVxuICAgICAgICAgICAgICBlbmQ9e1BlcmNlbnRUd28gKiAxMH1cbiAgICAgICAgICAgICAgZHVyYXRpb249e2R1cmF0aW9uIHx8IDAuMDAxfVxuICAgICAgICAgICAgICBkZWNpbWFscz17MH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzY29yZS1nYXVnZS1zdWJoZWFkZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N1YkhlYWRlciB8fCBzdWJIZWFkZXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlR2F1Z2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb3VudFVwIiwiY2xlYW5QZXJjZW50YWdlIiwicGVyY2VudGFnZSIsInRvb0xvdyIsIk51bWJlciIsImlzRmluaXRlIiwidG9vSGlnaCIsImdldFZhbHVlcyIsInBlcmNlbnQiLCJzY29yZSIsImhlYWRlciIsImNvbG91ciIsIlNjb3JlR2F1Z2UiLCJkdXJhdGlvbiIsInN1YkhlYWRlciIsIm5vRGVsYXkiLCJhdmVyYWdlIiwiY2FyIiwiY2lyYyIsIk1hdGgiLCJQSSIsImNpcmNUd28iLCJQZXJjZW50Iiwic2V0UGVyY2VudCIsIlBlcmNlbnRUd28iLCJzZXRQZXJjZW50VHdvIiwic2V0VGltZW91dCIsInN0cm9rZVBjdCIsInN0cm9rZVBjdFNlY29uZCIsInBvc2l0aXZlIiwiZGl2Iiwic3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsImciLCJ0cmFuc2Zvcm0iLCJjaXJjbGUiLCJyIiwiY3giLCJjeSIsImZpbGwiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlIiwidHJhbnNpdGlvbiIsInN0cm9rZVdpZHRoIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsImNvbG9yIiwiZm9udFdlaWdodCIsInN0YXJ0IiwiZW5kIiwiZGVjaW1hbHMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJ0b0ZpeGVkIiwicCIsInRleHRBbGlnbiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ScoreGauge/ScoreGauge.tsx\n'
      );

      /***/
    },
});