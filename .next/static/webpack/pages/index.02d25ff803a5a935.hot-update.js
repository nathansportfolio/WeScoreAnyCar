"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index", {
  /***/ "./components/ScoreGauge/ScoreGauge.tsx":
    /*!**********************************************!*\
  !*** ./components/ScoreGauge/ScoreGauge.tsx ***!
  \**********************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar cleanPercentage = function(percentage) {\n    var tooLow = !Number.isFinite(+percentage) || percentage < 0;\n    var tooHigh = percentage > 100;\n    return tooLow ? 0 : tooHigh ? 100 : +percentage;\n};\nvar scoreMaker = function(percentage) {\n    switch(true){\n        case percentage < 0.3:\n            return 100 - percentage * 10;\n        case percentage < 0.6:\n            return 80 - percentage * 5;\n        case percentage < 0.9:\n            return 65 - percentage * 5;\n        case percentage < 1.3:\n            return 55 - percentage * 2;\n        case percentage < 1.6:\n            return 50 - percentage * 2;\n        case percentage < 1.9:\n            return 45 - percentage * 2;\n        case percentage < 2.4:\n            return 40 - percentage * 2;\n        case percentage < 3.2:\n            return 35 - percentage * 2;\n        case percentage < 4:\n            return 30 - percentage * 2;\n        case percentage > 4:\n            return 20 - percentage * 2;\n        default:\n            return percentage;\n    }\n};\nvar getValues = function(percent) {\n    var score = percent * 10;\n    switch(true){\n        case score < 438:\n            return {\n                header: "Poor",\n                colour: "#e67e22"\n            };\n        case score >= 438 && score < 530:\n            return {\n                header: "Fair",\n                colour: "#f1c40f"\n            };\n        case score >= 530 && score < 670:\n            return {\n                header: "Good",\n                colour: "#7bed9f"\n            };\n        case score >= 670 && score < 810:\n            return {\n                header: "Very Good",\n                colour: "#2ecc71"\n            };\n        case score > 810:\n            return {\n                header: "Excellent",\n                colour: "#27ae60"\n            };\n        default:\n            return {\n                colour: "#27ae60",\n                header: "None"\n            };\n    }\n};\nvar ScoreGauge = function(param) {\n    var percentage = param.percentage, duration = param.duration, header = param.header, subHeader = param.subHeader, noDelay = param.noDelay, average = param.average, car = param.car;\n    _s();\n    var circ = 2 * Math.PI * 100;\n    var circTwo = 2 * Math.PI * 95;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), Percent = ref[0], setPercent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), PercentTwo = ref1[0], setPercentTwo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setPercent(scoreMaker(cleanPercentage(percentage)));\n            setPercentTwo(scoreMaker(cleanPercentage(average)));\n        }, 10);\n    }, []);\n    console.log(\'oer\', Percent, PercentTwo);\n    var colour = getValues(Percent);\n    var strokePct = (100 - Percent) * circ / 100;\n    var strokePctSecond = (100 - PercentTwo) * circTwo / 100;\n    var positive = (Percent - PercentTwo) * 10 > 0;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        style: {\n            justifyContent: "center",\n            display: "flex"\n        },\n        children: header && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n            className: "score-gauge",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {\n                    width: 230,\n                    height: 230,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {\n                            transform: "rotate(-90 113 100)",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {\n                                r: 100,\n                                cx: 100,\n                                cy: 100,\n                                fill: "rgba(0, 0, 0, 0.274)",\n                                strokeLinecap: "round",\n                                style: {\n                                    stroke: colour.colour,\n                                    transition: noDelay ? "" : "all 1.5s",\n                                    strokeWidth: "0.2rem",\n                                    strokeDasharray: circ,\n                                    strokeDashoffset: strokePct\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {\n                            transform: "rotate(-90 113 95)",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {\n                                r: 95,\n                                cx: 95,\n                                cy: 95,\n                                fill: "rgba(0, 0, 0, 0.274)",\n                                strokeLinecap: "round",\n                                style: {\n                                    stroke: "white",\n                                    transition: noDelay ? "" : "all 1.5s",\n                                    strokeWidth: "0.2rem",\n                                    strokeDasharray: circTwo,\n                                    strokeDashoffset: strokePctSecond\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                lineNumber: 121,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-header",\n                    children: header || header\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 137,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-text",\n                    style: {\n                        color: colour.colour\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                            style: {\n                                display: "flex",\n                                fontWeight: "400"\n                            },\n                            children: [\n                                " ",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                                    start: 0,\n                                    end: Percent * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 141,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                                    style: {\n                                        fontSize: "12px",\n                                        color: positive ? "green" : "red",\n                                        marginLeft: "-5px",\n                                        fontWeight: "300"\n                                    },\n                                    children: [\n                                        positive && "+",\n                                        ((Percent - PercentTwo) * 10).toFixed(0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 147,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 139,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                            style: {\n                                fontSize: "14px",\n                                textAlign: "center",\n                                fontWeight: "300",\n                                marginTop: 0,\n                                marginBottom: "4px"\n                            },\n                            children: colour.header\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 159,\n                            columnNumber: 13\n                        }, _this),\n                        !subHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                            style: {\n                                fontSize: "12px",\n                                color: "white",\n                                textAlign: "center",\n                                fontWeight: "300"\n                            },\n                            children: [\n                                car && car,\n                                " Average Score ",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 179,\n                                    columnNumber: 44\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                                    start: 0,\n                                    end: PercentTwo * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 180,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 171,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 138,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-subheader",\n                    style: {\n                        textAlign: "center"\n                    },\n                    children: subHeader || subHeader\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 190,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n            lineNumber: 102,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n        lineNumber: 100,\n        columnNumber: 5\n    }, _this));\n};\n_s(ScoreGauge, "NSTv9PFzbcHrKte8rtBzf9w1MSI=");\n_c = ScoreGauge;\n/* harmony default export */ __webpack_exports__["default"] = (ScoreGauge);\nvar _c;\n$RefreshReg$(_c, "ScoreGauge");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njb3JlR2F1Z2UvU2NvcmVHYXVnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDUjs7O0FBRW5DLEdBQUssQ0FBQ0csZUFBZSxHQUFHLFFBQVEsQ0FBUEMsVUFBa0IsRUFBSyxDQUFDO0lBQy9DLEdBQUssQ0FBQ0MsTUFBTSxJQUFJQyxNQUFNLENBQUNDLFFBQVEsRUFBRUgsVUFBVSxLQUFLQSxVQUFVLEdBQUcsQ0FBQztJQUM5RCxHQUFLLENBQUNJLE9BQU8sR0FBR0osVUFBVSxHQUFHLEdBQUc7SUFDaEMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFHRyxPQUFPLEdBQUcsR0FBRyxJQUFJSixVQUFVO0FBQ2pELENBQUM7QUFFRCxHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUFRLENBQVBMLFVBQWtCLEVBQUssQ0FBQztJQUMxQyxNQUFNLENBQUUsSUFBSTtRQUNWLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEdBQUcsR0FBR0EsVUFBVSxHQUFHLEVBQUU7UUFDOUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsR0FBRztZQUNuQixNQUFNLENBQUMsRUFBRSxHQUFHQSxVQUFVLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUNBLFVBQVUsR0FBRyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxFQUFFLEdBQUdBLFVBQVUsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEVBQUUsR0FBR0EsVUFBVSxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsR0FBRztZQUNuQixNQUFNLENBQUMsRUFBRSxHQUFHQSxVQUFVLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUNBLFVBQVUsR0FBRyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxFQUFFLEdBQUdBLFVBQVUsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIs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Qzs7d0NBRUF2QixRQUFRLElBQUksQ0FBRzswQ0FDYlQsT0FBTyxHQUFHRSxVQUFVLElBQUksRUFBRSxFQUFFb0MsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7b0dBRzNDQyxDQUFDOzRCQUNBNUIsS0FBSyxFQUFFLENBQUM7Z0NBQ055QixRQUFRLEVBQUUsQ0FBTTtnQ0FDaEJJLFNBQVMsRUFBRSxDQUFRO2dDQUNuQlIsVUFBVSxFQUFFLENBQUs7Z0NBQ2pCUyxTQUFTLEVBQUUsQ0FBQztnQ0FDWkMsWUFBWSxFQUFFLENBQUs7NEJBQ3JCLENBQUM7c0NBRUFyRCxNQUFNLENBQUNELE1BQU07Ozs7Ozt5QkFFZEksU0FBUyxnRkFDUmtCLENBQUc7NEJBQ0ZDLEtBQUssRUFBRSxDQUFDO2dDQUNOeUIsUUFBUSxFQUFFLENBQU07Z0NBQ2hCTCxLQUFLLEVBQUUsQ0FBTztnQ0FDZFMsU0FBUyxFQUFFLENBQVE7Z0NBQ25CUixVQUFVLEVBQUUsQ0FBSzs0QkFDbkIsQ0FBQzs7Z0NBRUFyQyxHQUFHLElBQUlBLEdBQUc7Z0NBQUMsQ0FBZTs0R0FBQ2dELENBQUU7Ozs7OzRHQUM3QmxFLHFEQUFPO29DQUNOd0QsS0FBSyxFQUFFLENBQUM7b0NBQ1JDLEdBQUcsRUFBRWhDLFVBQVUsR0FBRyxFQUFFO29DQUNwQlgsUUFBUSxFQUFFQSxRQUFRLElBQUksS0FBSztvQ0FDM0I0QyxRQUFRLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQU1sQnpCLENBQUc7b0JBQ0ZJLFNBQVMsRUFBQyxDQUF1QjtvQkFDakNILEtBQUssRUFBRSxDQUFDO3dCQUFDNkIsU0FBUyxFQUFFLENBQVE7b0JBQUMsQ0FBQzs4QkFFN0JoRCxTQUFTLElBQUlBLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5DLENBQUM7R0FqSUtGLFVBQVU7S0FBVkEsVUFBVTtBQW1JaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Njb3JlR2F1Z2UvU2NvcmVHYXVnZS50c3g/NDM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ291bnRVcCBmcm9tIFwicmVhY3QtY291bnR1cFwiO1xuXG5jb25zdCBjbGVhblBlcmNlbnRhZ2UgPSAocGVyY2VudGFnZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHRvb0xvdyA9ICFOdW1iZXIuaXNGaW5pdGUoK3BlcmNlbnRhZ2UpIHx8IHBlcmNlbnRhZ2UgPCAwO1xuICBjb25zdCB0b29IaWdoID0gcGVyY2VudGFnZSA+IDEwMDtcbiAgcmV0dXJuIHRvb0xvdyA/IDAgOiB0b29IaWdoID8gMTAwIDogK3BlcmNlbnRhZ2U7XG59O1xuXG5jb25zdCBzY29yZU1ha2VyID0gKHBlcmNlbnRhZ2U6IG51bWJlcikgPT4ge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAwLjM6XG4gICAgICByZXR1cm4gMTAwIC0gcGVyY2VudGFnZSAqIDEwO1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDAuNjpcbiAgICAgIHJldHVybiA4MCAtIHBlcmNlbnRhZ2UgKiA1O1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDAuOTpcbiAgICAgIHJldHVybiA2NSAtIHBlcmNlbnRhZ2UgKiA1O1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDEuMzpcbiAgICAgIHJldHVybiA1NSAtIHBlcmNlbnRhZ2UgKiAyO1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDEuNjpcbiAgICAgIHJldHVybiA1MCAtIHBlcmNlbnRhZ2UgKiAyO1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDEuOTpcbiAgICAgIHJldHVybiA0NSAtIHBlcmNlbnRhZ2UgKiAyO1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDIuNDpcbiAgICAgIHJldHVybiA0MCAtIHBlcmNlbnRhZ2UgKiAyO1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDMuMjpcbiAgICAgIHJldHVybiAzNSAtIHBlcmNlbnRhZ2UgKiAyO1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDQ6XG4gICAgICByZXR1cm4gMzAgLSBwZXJjZW50YWdlICogMjtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPiA0OlxuICAgICAgcmV0dXJuIDIwIC0gcGVyY2VudGFnZSAqIDI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwZXJjZW50YWdlO1xuICB9XG59O1xuXG5jb25zdCBnZXRWYWx1ZXMgPSAocGVyY2VudDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHNjb3JlID0gcGVyY2VudCAqIDEwO1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIHNjb3JlIDwgNDM4OlxuICAgICAgcmV0dXJuIHsgaGVhZGVyOiBcIlBvb3JcIiwgY29sb3VyOiBcIiNlNjdlMjJcIiB9O1xuICAgIGNhc2Ugc2NvcmUgPj0gNDM4ICYmIHNjb3JlIDwgNTMwOlxuICAgICAgcmV0dXJuIHsgaGVhZGVyOiBcIkZhaXJcIiwgY29sb3VyOiBcIiNmMWM0MGZcIiB9O1xuICAgIGNhc2Ugc2NvcmUgPj0gNTMwICYmIHNjb3JlIDwgNjcwOlxuICAgICAgcmV0dXJuIHsgaGVhZGVyOiBcIkdvb2RcIiwgY29sb3VyOiBcIiM3YmVkOWZcIiB9O1xuICAgIGNhc2Ugc2NvcmUgPj0gNjcwICYmIHNjb3JlIDwgODEwOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBcIlZlcnkgR29vZFwiLFxuICAgICAgICBjb2xvdXI6IFwiIzJlY2M3MVwiLFxuICAgICAgfTtcbiAgICBjYXNlIHNjb3JlID4gODEwOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBcIkV4Y2VsbGVudFwiLFxuICAgICAgICBjb2xvdXI6IFwiIzI3YWU2MFwiLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgY29sb3VyOiBcIiMyN2FlNjBcIiwgaGVhZGVyOiBcIk5vbmVcIiB9O1xuICB9XG59O1xuXG5pbnRlcmZhY2UgU2NvcmVHYXVnZVByb3BzIHtcbiAgcGVyY2VudGFnZTogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBoZWFkZXI6IHN0cmluZztcbiAgc3ViSGVhZGVyOiBzdHJpbmc7XG4gIG5vRGVsYXk/OiBib29sZWFuO1xuICBhdmVyYWdlOiBhbnk7XG4gIGNhcj86IHN0cmluZztcbn1cblxuY29uc3QgU2NvcmVHYXVnZTogUmVhY3QuRkM8U2NvcmVHYXVnZVByb3BzPiA9ICh7XG4gIHBlcmNlbnRhZ2UsXG4gIGR1cmF0aW9uLFxuICBoZWFkZXIsXG4gIHN1YkhlYWRlcixcbiAgbm9EZWxheSxcbiAgYXZlcmFnZSxcbiAgY2FyLFxufSkgPT4ge1xuICBjb25zdCBjaXJjID0gMiAqIE1hdGguUEkgKiAxMDA7XG4gIGNvbnN0IGNpcmNUd28gPSAyICogTWF0aC5QSSAqIDk1O1xuICBjb25zdCBbUGVyY2VudCwgc2V0UGVyY2VudF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW1BlcmNlbnRUd28sIHNldFBlcmNlbnRUd29dID0gdXNlU3RhdGUoMSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFBlcmNlbnQoc2NvcmVNYWtlcihjbGVhblBlcmNlbnRhZ2UocGVyY2VudGFnZSkpKTtcbiAgICAgIHNldFBlcmNlbnRUd28oc2NvcmVNYWtlcihjbGVhblBlcmNlbnRhZ2UoYXZlcmFnZSkpKTtcbiAgICB9LCAxMCk7XG4gIH0sIFtdKTtcblxuICBjb25zb2xlLmxvZygnb2VyJywgUGVyY2VudCwgUGVyY2VudFR3bylcblxuICBjb25zdCBjb2xvdXIgPSBnZXRWYWx1ZXMoUGVyY2VudCk7XG4gIGNvbnN0IHN0cm9rZVBjdCA9ICgoMTAwIC0gUGVyY2VudCkgKiBjaXJjKSAvIDEwMDtcblxuICBjb25zdCBzdHJva2VQY3RTZWNvbmQgPSAoKDEwMCAtIFBlcmNlbnRUd28pICogY2lyY1R3bykgLyAxMDA7XG4gIGNvbnN0IHBvc2l0aXZlID0gKFBlcmNlbnQgLSBQZXJjZW50VHdvKSAqIDEwID4gMDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgIHtoZWFkZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWdhdWdlXCI+XG4gICAgICAgICAgPHN2ZyB3aWR0aD17MjMwfSBoZWlnaHQ9ezIzMH0+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09e2Byb3RhdGUoLTkwICR7XCIxMTMgMTAwXCJ9KWB9PlxuICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgcj17MTAwfVxuICAgICAgICAgICAgICAgIGN4PXsxMDB9XG4gICAgICAgICAgICAgICAgY3k9ezEwMH1cbiAgICAgICAgICAgICAgICBmaWxsPVwicmdiYSgwLCAwLCAwLCAwLjI3NClcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogY29sb3VyLmNvbG91cixcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG5vRGVsYXkgPyBcIlwiIDogXCJhbGwgMS41c1wiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMC4ycmVtXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGNpcmMsXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBzdHJva2VQY3QsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAke1wiMTEzIDk1XCJ9KWB9PlxuICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgcj17OTV9XG4gICAgICAgICAgICAgICAgY3g9ezk1fVxuICAgICAgICAgICAgICAgIGN5PXs5NX1cbiAgICAgICAgICAgICAgICBmaWxsPVwicmdiYSgwLCAwLCAwLCAwLjI3NClcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9EZWxheSA/IFwiXCIgOiBcImFsbCAxLjVzXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIwLjJyZW1cIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogY2lyY1R3byxcbiAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHN0cm9rZVBjdFNlY29uZCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1nYXVnZS1oZWFkZXJcIj57aGVhZGVyIHx8IGhlYWRlcn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWdhdWdlLXRleHRcIiBzdHlsZT17eyBjb2xvcjogY29sb3VyLmNvbG91ciB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgPENvdW50VXBcbiAgICAgICAgICAgICAgICBzdGFydD17MH1cbiAgICAgICAgICAgICAgICBlbmQ9e1BlcmNlbnQgKiAxMH1cbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17ZHVyYXRpb24gfHwgMC4wMDF9XG4gICAgICAgICAgICAgICAgZGVjaW1hbHM9ezB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHBvc2l0aXZlID8gXCJncmVlblwiIDogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTVweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Bvc2l0aXZlICYmIFwiK1wifVxuICAgICAgICAgICAgICAgIHsoKFBlcmNlbnQgLSBQZXJjZW50VHdvKSAqIDEwKS50b0ZpeGVkKDApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI0cHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvbG91ci5oZWFkZXJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7IXN1YkhlYWRlciAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYXIgJiYgY2FyfSBBdmVyYWdlIFNjb3JlIDxiciAvPlxuICAgICAgICAgICAgICAgIDxDb3VudFVwXG4gICAgICAgICAgICAgICAgICBzdGFydD17MH1cbiAgICAgICAgICAgICAgICAgIGVuZD17UGVyY2VudFR3byAqIDEwfVxuICAgICAgICAgICAgICAgICAgZHVyYXRpb249e2R1cmF0aW9uIHx8IDAuMDAxfVxuICAgICAgICAgICAgICAgICAgZGVjaW1hbHM9ezB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2NvcmUtZ2F1Z2Utc3ViaGVhZGVyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdWJIZWFkZXIgfHwgc3ViSGVhZGVyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY29yZUdhdWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ291bnRVcCIsImNsZWFuUGVyY2VudGFnZSIsInBlcmNlbnRhZ2UiLCJ0b29Mb3ciLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInRvb0hpZ2giLCJzY29yZU1ha2VyIiwiZ2V0VmFsdWVzIiwicGVyY2VudCIsInNjb3JlIiwiaGVhZGVyIiwiY29sb3VyIiwiU2NvcmVHYXVnZSIsImR1cmF0aW9uIiwic3ViSGVhZGVyIiwibm9EZWxheSIsImF2ZXJhZ2UiLCJjYXIiLCJjaXJjIiwiTWF0aCIsIlBJIiwiY2lyY1R3byIsIlBlcmNlbnQiLCJzZXRQZXJjZW50IiwiUGVyY2VudFR3byIsInNldFBlcmNlbnRUd28iLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInN0cm9rZVBjdCIsInN0cm9rZVBjdFNlY29uZCIsInBvc2l0aXZlIiwiZGl2Iiwic3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsImciLCJ0cmFuc2Zvcm0iLCJjaXJjbGUiLCJyIiwiY3giLCJjeSIsImZpbGwiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlIiwidHJhbnNpdGlvbiIsInN0cm9rZVdpZHRoIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsImNvbG9yIiwiZm9udFdlaWdodCIsInN0YXJ0IiwiZW5kIiwiZGVjaW1hbHMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJ0b0ZpeGVkIiwicCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ScoreGauge/ScoreGauge.tsx\n'
      );

      /***/
    },
});
