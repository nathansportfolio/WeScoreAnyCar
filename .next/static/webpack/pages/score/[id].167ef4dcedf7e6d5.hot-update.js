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
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar cleanPercentage = function(percentage) {\n    var tooLow = !Number.isFinite(+percentage) || percentage < 0;\n    var tooHigh = percentage > 100;\n    return tooLow ? 0 : tooHigh ? 100 : +percentage;\n};\nvar scoreMaker = function(percentage) {\n    switch(true){\n        case percentage < 0.3:\n            return 100 - percentage * 30;\n        case percentage < 0.6:\n            return 100 - percentage * 35;\n        case percentage < 0.9:\n            return 100 - percentage * 35;\n        case percentage < 1.3:\n            return 55 - percentage * 2;\n        case percentage < 1.6:\n            return 50 - percentage * 2;\n        case percentage < 1.9:\n            return 45 - percentage * 2;\n        case percentage < 2.4:\n            return 40 - percentage * 2;\n        case percentage < 3.2:\n            return 35 - percentage * 2;\n        case percentage < 4:\n            return 30 - percentage * 2;\n        case percentage > 4:\n            return 20 - percentage * 2;\n        default:\n            return percentage;\n    }\n};\nvar getValues = function(percent) {\n    var score = percent * 10;\n    switch(true){\n        case score < 438:\n            return {\n                header: "Poor",\n                colour: "#e67e22"\n            };\n        case score >= 438 && score < 530:\n            return {\n                header: "Fair",\n                colour: "#f1c40f"\n            };\n        case score >= 530 && score < 670:\n            return {\n                header: "Good",\n                colour: "#7bed9f"\n            };\n        case score >= 670 && score < 810:\n            return {\n                header: "Very Good",\n                colour: "#2ecc71"\n            };\n        case score > 810:\n            return {\n                header: "Excellent",\n                colour: "#27ae60"\n            };\n        default:\n            return {\n                colour: "#27ae60",\n                header: "None"\n            };\n    }\n};\nvar ScoreGauge = function(param) {\n    var percentage = param.percentage, duration = param.duration, header = param.header, subHeader = param.subHeader, noDelay = param.noDelay, average = param.average, car = param.car;\n    _s();\n    var circ = 2 * Math.PI * 100;\n    var circTwo = 2 * Math.PI * 95;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), Percent = ref[0], setPercent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), PercentTwo = ref1[0], setPercentTwo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setPercent(scoreMaker(cleanPercentage(percentage)));\n            setPercentTwo(scoreMaker(cleanPercentage(average)));\n        }, 10);\n    }, []);\n    console.log(\'oer\', Percent, PercentTwo);\n    var colour = getValues(Percent);\n    var strokePct = (100 - Percent) * circ / 100;\n    var strokePctSecond = (100 - PercentTwo) * circTwo / 100;\n    var positive = (Percent - PercentTwo) * 10 > 0;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        style: {\n            justifyContent: "center",\n            display: "flex"\n        },\n        children: header && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n            className: "score-gauge",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {\n                    width: 230,\n                    height: 230,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {\n                            transform: "rotate(-90 113 100)",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {\n                                r: 100,\n                                cx: 100,\n                                cy: 100,\n                                fill: "rgba(0, 0, 0, 0.274)",\n                                strokeLinecap: "round",\n                                style: {\n                                    stroke: colour.colour,\n                                    transition: noDelay ? "" : "all 1.5s",\n                                    strokeWidth: "0.2rem",\n                                    strokeDasharray: circ,\n                                    strokeDashoffset: strokePct\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {\n                            transform: "rotate(-90 113 95)",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {\n                                r: 95,\n                                cx: 95,\n                                cy: 95,\n                                fill: "rgba(0, 0, 0, 0.274)",\n                                strokeLinecap: "round",\n                                style: {\n                                    stroke: "white",\n                                    transition: noDelay ? "" : "all 1.5s",\n                                    strokeWidth: "0.2rem",\n                                    strokeDasharray: circTwo,\n                                    strokeDashoffset: strokePctSecond\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                lineNumber: 121,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-header",\n                    children: header || header\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 137,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-text",\n                    style: {\n                        color: colour.colour\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                            style: {\n                                display: "flex",\n                                fontWeight: "400"\n                            },\n                            children: [\n                                " ",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                                    start: 0,\n                                    end: Percent * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 141,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                                    style: {\n                                        fontSize: "12px",\n                                        color: positive ? "green" : "red",\n                                        marginLeft: "-5px",\n                                        fontWeight: "300"\n                                    },\n                                    children: [\n                                        positive && "+",\n                                        ((Percent - PercentTwo) * 10).toFixed(0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 147,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 139,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                            style: {\n                                fontSize: "14px",\n                                textAlign: "center",\n                                fontWeight: "300",\n                                marginTop: 0,\n                                marginBottom: "4px"\n                            },\n                            children: colour.header\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 159,\n                            columnNumber: 13\n                        }, _this),\n                        !subHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                            style: {\n                                fontSize: "12px",\n                                color: "white",\n                                textAlign: "center",\n                                fontWeight: "300"\n                            },\n                            children: [\n                                car && car,\n                                " Average Score ",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 179,\n                                    columnNumber: 44\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                                    start: 0,\n                                    end: PercentTwo * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 180,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 171,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 138,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-subheader",\n                    style: {\n                        textAlign: "center"\n                    },\n                    children: subHeader || subHeader\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 190,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n            lineNumber: 102,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n        lineNumber: 100,\n        columnNumber: 5\n    }, _this));\n};\n_s(ScoreGauge, "NSTv9PFzbcHrKte8rtBzf9w1MSI=");\n_c = ScoreGauge;\n/* harmony default export */ __webpack_exports__["default"] = (ScoreGauge);\nvar _c;\n$RefreshReg$(_c, "ScoreGauge");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njb3JlR2F1Z2UvU2NvcmVHYXVnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDUjs7O0FBRW5DLEdBQUssQ0FBQ0csZUFBZSxHQUFHLFFBQVEsQ0FBUEMsVUFBa0IsRUFBSyxDQUFDO0lBQy9DLEdBQUssQ0FBQ0MsTUFBTSxJQUFJQyxNQUFNLENBQUNDLFFBQVEsRUFBRUgsVUFBVSxLQUFLQSxVQUFVLEdBQUcsQ0FBQztJQUM5RCxHQUFLLENBQUNJLE9BQU8sR0FBR0osVUFBVSxHQUFHLEdBQUc7SUFDaEMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFHRyxPQUFPLEdBQUcsR0FBRyxJQUFJSixVQUFVO0FBQ2pELENBQUM7QUFFRCxHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUFRLENBQVBMLFVBQWtCLEVBQUssQ0FBQztJQUMxQyxNQUFNLENBQUUsSUFBSTtRQUNWLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEdBQUcsR0FBR0EsVUFBVSxHQUFHLEVBQUU7UUFDOUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsR0FBRztZQUNuQixNQUFNLENBQUMsR0FBRyxHQUFHQSxVQUFVLEdBQUcsRUFBRTtRQUM5QixJQUFJLENBQUNBLFVBQVUsR0FBRyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxHQUFHLEdBQUdBLFVBQVUsR0FBRyxFQUFFO1FBQzlCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEVBQUUsR0FBR0EsVUFBVSxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsR0FBRztZQUNuQixNQUFNLENBQUMsRUFBRSxHQUFHQSxVQUFVLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUNBLFVBQVUsR0FBRyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxFQUFFLEdBQUdBLFVBQVUsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIs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Qzs7d0NBRUF2QixRQUFRLElBQUksQ0FBRzswQ0FDYlQsT0FBTyxHQUFHRSxVQUFVLElBQUksRUFBRSxFQUFFb0MsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7b0dBRzNDQyxDQUFDOzRCQUNBNUIsS0FBSyxFQUFFLENBQUM7Z0NBQ055QixRQUFRLEVBQUUsQ0FBTTtnQ0FDaEJJLFNBQVMsRUFBRSxDQUFRO2dDQUNuQlIsVUFBVSxFQUFFLENBQUs7Z0NBQ2pCUyxTQUFTLEVBQUUsQ0FBQztnQ0FDWkMsWUFBWSxFQUFFLENBQUs7NEJBQ3JCLENBQUM7c0NBRUFyRCxNQUFNLENBQUNELE1BQU07Ozs7Ozt5QkFFZEksU0FBUyxnRkFDUmtCLENBQUc7NEJBQ0ZDLEtBQUssRUFBRSxDQUFDO2dDQUNOeUIsUUFBUSxFQUFFLENBQU07Z0NBQ2hCTCxLQUFLLEVBQUUsQ0FBTztnQ0FDZFMsU0FBUyxFQUFFLENBQVE7Z0NBQ25CUixVQUFVLEVBQUUsQ0FBSzs0QkFDbkIsQ0FBQzs7Z0NBRUFyQyxHQUFHLElBQUlBLEdBQUc7Z0NBQUMsQ0FBZTs0R0FBQ2dELENBQUU7Ozs7OzRHQUM3QmxFLHFEQUFPO29DQUNOd0QsS0FBSyxFQUFFLENBQUM7b0NBQ1JDLEdBQUcsRUFBRWhDLFVBQVUsR0FBRyxFQUFFO29DQUNwQlgsUUFBUSxFQUFFQSxRQUFRLElBQUksS0FBSztvQ0FDM0I0QyxRQUFRLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQU1sQnpCLENBQUc7b0JBQ0ZJLFNBQVMsRUFBQyxDQUF1QjtvQkFDakNILEtBQUssRUFBRSxDQUFDO3dCQUFDNkIsU0FBUyxFQUFFLENBQVE7b0JBQUMsQ0FBQzs4QkFFN0JoRCxTQUFTLElBQUlBLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5DLENBQUM7R0FqSUtGLFVBQVU7S0FBVkEsVUFBVTtBQW1JaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Njb3JlR2F1Z2UvU2NvcmVHYXVnZS50c3g/NDM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ291bnRVcCBmcm9tIFwicmVhY3QtY291bnR1cFwiO1xuXG5jb25zdCBjbGVhblBlcmNlbnRhZ2UgPSAocGVyY2VudGFnZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHRvb0xvdyA9ICFOdW1iZXIuaXNGaW5pdGUoK3BlcmNlbnRhZ2UpIHx8IHBlcmNlbnRhZ2UgPCAwO1xuICBjb25zdCB0b29IaWdoID0gcGVyY2VudGFnZSA+IDEwMDtcbiAgcmV0dXJuIHRvb0xvdyA/IDAgOiB0b29IaWdoID8gMTAwIDogK3BlcmNlbnRhZ2U7XG59O1xuXG5jb25zdCBzY29yZU1ha2VyID0gKHBlcmNlbnRhZ2U6IG51bWJlcikgPT4ge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAwLjM6XG4gICAgICByZXR1cm4gMTAwIC0gcGVyY2VudGFnZSAqIDMwO1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDAuNjpcbiAgICAgIHJldHVybiAxMDAgLSBwZXJjZW50YWdlICogMzU7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgMC45OlxuICAgICAgcmV0dXJuIDEwMCAtIHBlcmNlbnRhZ2UgKiAzNTtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAxLjM6XG4gICAgICByZXR1cm4gNTUgLSBwZXJjZW50YWdlICogMjtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAxLjY6XG4gICAgICByZXR1cm4gNTAgLSBwZXJjZW50YWdlICogMjtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAxLjk6XG4gICAgICByZXR1cm4gNDUgLSBwZXJjZW50YWdlICogMjtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAyLjQ6XG4gICAgICByZXR1cm4gNDAgLSBwZXJjZW50YWdlICogMjtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAzLjI6XG4gICAgICByZXR1cm4gMzUgLSBwZXJjZW50YWdlICogMjtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCA0OlxuICAgICAgcmV0dXJuIDMwIC0gcGVyY2VudGFnZSAqIDI7XG4gICAgY2FzZSBwZXJjZW50YWdlID4gNDpcbiAgICAgIHJldHVybiAyMCAtIHBlcmNlbnRhZ2UgKiAyO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcGVyY2VudGFnZTtcbiAgfVxufTtcblxuY29uc3QgZ2V0VmFsdWVzID0gKHBlcmNlbnQ6IG51bWJlcikgPT4ge1xuICBjb25zdCBzY29yZSA9IHBlcmNlbnQgKiAxMDtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBzY29yZSA8IDQzODpcbiAgICAgIHJldHVybiB7IGhlYWRlcjogXCJQb29yXCIsIGNvbG91cjogXCIjZTY3ZTIyXCIgfTtcbiAgICBjYXNlIHNjb3JlID49IDQzOCAmJiBzY29yZSA8IDUzMDpcbiAgICAgIHJldHVybiB7IGhlYWRlcjogXCJGYWlyXCIsIGNvbG91cjogXCIjZjFjNDBmXCIgfTtcbiAgICBjYXNlIHNjb3JlID49IDUzMCAmJiBzY29yZSA8IDY3MDpcbiAgICAgIHJldHVybiB7IGhlYWRlcjogXCJHb29kXCIsIGNvbG91cjogXCIjN2JlZDlmXCIgfTtcbiAgICBjYXNlIHNjb3JlID49IDY3MCAmJiBzY29yZSA8IDgxMDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogXCJWZXJ5IEdvb2RcIixcbiAgICAgICAgY29sb3VyOiBcIiMyZWNjNzFcIixcbiAgICAgIH07XG4gICAgY2FzZSBzY29yZSA+IDgxMDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogXCJFeGNlbGxlbnRcIixcbiAgICAgICAgY29sb3VyOiBcIiMyN2FlNjBcIixcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IGNvbG91cjogXCIjMjdhZTYwXCIsIGhlYWRlcjogXCJOb25lXCIgfTtcbiAgfVxufTtcblxuaW50ZXJmYWNlIFNjb3JlR2F1Z2VQcm9wcyB7XG4gIHBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgaGVhZGVyOiBzdHJpbmc7XG4gIHN1YkhlYWRlcjogc3RyaW5nO1xuICBub0RlbGF5PzogYm9vbGVhbjtcbiAgYXZlcmFnZTogYW55O1xuICBjYXI/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFNjb3JlR2F1Z2U6IFJlYWN0LkZDPFNjb3JlR2F1Z2VQcm9wcz4gPSAoe1xuICBwZXJjZW50YWdlLFxuICBkdXJhdGlvbixcbiAgaGVhZGVyLFxuICBzdWJIZWFkZXIsXG4gIG5vRGVsYXksXG4gIGF2ZXJhZ2UsXG4gIGNhcixcbn0pID0+IHtcbiAgY29uc3QgY2lyYyA9IDIgKiBNYXRoLlBJICogMTAwO1xuICBjb25zdCBjaXJjVHdvID0gMiAqIE1hdGguUEkgKiA5NTtcbiAgY29uc3QgW1BlcmNlbnQsIHNldFBlcmNlbnRdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtQZXJjZW50VHdvLCBzZXRQZXJjZW50VHdvXSA9IHVzZVN0YXRlKDEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRQZXJjZW50KHNjb3JlTWFrZXIoY2xlYW5QZXJjZW50YWdlKHBlcmNlbnRhZ2UpKSk7XG4gICAgICBzZXRQZXJjZW50VHdvKHNjb3JlTWFrZXIoY2xlYW5QZXJjZW50YWdlKGF2ZXJhZ2UpKSk7XG4gICAgfSwgMTApO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coJ29lcicsIFBlcmNlbnQsIFBlcmNlbnRUd28pXG5cbiAgY29uc3QgY29sb3VyID0gZ2V0VmFsdWVzKFBlcmNlbnQpO1xuICBjb25zdCBzdHJva2VQY3QgPSAoKDEwMCAtIFBlcmNlbnQpICogY2lyYykgLyAxMDA7XG5cbiAgY29uc3Qgc3Ryb2tlUGN0U2Vjb25kID0gKCgxMDAgLSBQZXJjZW50VHdvKSAqIGNpcmNUd28pIC8gMTAwO1xuICBjb25zdCBwb3NpdGl2ZSA9IChQZXJjZW50IC0gUGVyY2VudFR3bykgKiAxMCA+IDA7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICB7aGVhZGVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1nYXVnZVwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9ezIzMH0gaGVpZ2h0PXsyMzB9PlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAke1wiMTEzIDEwMFwifSlgfT5cbiAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIHI9ezEwMH1cbiAgICAgICAgICAgICAgICBjeD17MTAwfVxuICAgICAgICAgICAgICAgIGN5PXsxMDB9XG4gICAgICAgICAgICAgICAgZmlsbD1cInJnYmEoMCwgMCwgMCwgMC4yNzQpXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IGNvbG91ci5jb2xvdXIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBub0RlbGF5ID8gXCJcIiA6IFwiYWxsIDEuNXNcIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjAuMnJlbVwiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBjaXJjLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogc3Ryb2tlUGN0LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgJHtcIjExMyA5NVwifSlgfT5cbiAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIHI9ezk1fVxuICAgICAgICAgICAgICAgIGN4PXs5NX1cbiAgICAgICAgICAgICAgICBjeT17OTV9XG4gICAgICAgICAgICAgICAgZmlsbD1cInJnYmEoMCwgMCwgMCwgMC4yNzQpXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG5vRGVsYXkgPyBcIlwiIDogXCJhbGwgMS41c1wiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMC4ycmVtXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGNpcmNUd28sXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBzdHJva2VQY3RTZWNvbmQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZ2F1Z2UtaGVhZGVyXCI+e2hlYWRlciB8fCBoZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1nYXVnZS10ZXh0XCIgc3R5bGU9e3sgY29sb3I6IGNvbG91ci5jb2xvdXIgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIDxDb3VudFVwXG4gICAgICAgICAgICAgICAgc3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgZW5kPXtQZXJjZW50ICogMTB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249e2R1cmF0aW9uIHx8IDAuMDAxfVxuICAgICAgICAgICAgICAgIGRlY2ltYWxzPXswfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwb3NpdGl2ZSA/IFwiZ3JlZW5cIiA6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi01cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwb3NpdGl2ZSAmJiBcIitcIn1cbiAgICAgICAgICAgICAgICB7KChQZXJjZW50IC0gUGVyY2VudFR3bykgKiAxMCkudG9GaXhlZCgwKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNHB4XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb2xvdXIuaGVhZGVyfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgeyFzdWJIZWFkZXIgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2FyICYmIGNhcn0gQXZlcmFnZSBTY29yZSA8YnIgLz5cbiAgICAgICAgICAgICAgICA8Q291bnRVcFxuICAgICAgICAgICAgICAgICAgc3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgICBlbmQ9e1BlcmNlbnRUd28gKiAxMH1cbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbiB8fCAwLjAwMX1cbiAgICAgICAgICAgICAgICAgIGRlY2ltYWxzPXswfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjb3JlLWdhdWdlLXN1YmhlYWRlclwiXG4gICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3ViSGVhZGVyIHx8IHN1YkhlYWRlcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVHYXVnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvdW50VXAiLCJjbGVhblBlcmNlbnRhZ2UiLCJwZXJjZW50YWdlIiwidG9vTG93IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJ0b29IaWdoIiwic2NvcmVNYWtlciIsImdldFZhbHVlcyIsInBlcmNlbnQiLCJzY29yZSIsImhlYWRlciIsImNvbG91ciIsIlNjb3JlR2F1Z2UiLCJkdXJhdGlvbiIsInN1YkhlYWRlciIsIm5vRGVsYXkiLCJhdmVyYWdlIiwiY2FyIiwiY2lyYyIsIk1hdGgiLCJQSSIsImNpcmNUd28iLCJQZXJjZW50Iiwic2V0UGVyY2VudCIsIlBlcmNlbnRUd28iLCJzZXRQZXJjZW50VHdvIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJzdHJva2VQY3QiLCJzdHJva2VQY3RTZWNvbmQiLCJwb3NpdGl2ZSIsImRpdiIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJnIiwidHJhbnNmb3JtIiwiY2lyY2xlIiwiciIsImN4IiwiY3kiLCJmaWxsIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZSIsInRyYW5zaXRpb24iLCJzdHJva2VXaWR0aCIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJzdGFydCIsImVuZCIsImRlY2ltYWxzIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwidG9GaXhlZCIsInAiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ScoreGauge/ScoreGauge.tsx\n'
      );

      /***/
    },
});
