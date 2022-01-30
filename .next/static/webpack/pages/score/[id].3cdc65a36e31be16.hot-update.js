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
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar cleanPercentage = function(percentage) {\n    var tooLow = !Number.isFinite(+percentage) || percentage < 0;\n    var tooHigh = percentage > 100;\n    return tooLow ? 0 : tooHigh ? 100 : +percentage;\n};\nvar getValues = function(percent) {\n    var score = percent * 10;\n    switch(true){\n        case score < 438:\n            return {\n                header: "Poor",\n                colour: "#e67e22"\n            };\n            break;\n        case score >= 438 && score < 530:\n            return {\n                header: "Fair",\n                colour: "#f1c40f"\n            };\n            break;\n        case score >= 530 && score < 670:\n            return {\n                header: "Good",\n                colour: "#7bed9f"\n            };\n            break;\n        case score >= 670 && score < 810:\n            return {\n                header: "Very Good",\n                colour: "#2ecc71"\n            };\n            break;\n        case score > 810:\n            return {\n                header: "Excellent",\n                colour: "#27ae60"\n            };\n            break;\n        default:\n            return {\n                colour: "#27ae60",\n                header: "None"\n            };\n    }\n};\nvar ScoreGauge = function(param) {\n    var percentage = param.percentage, duration = param.duration, header = param.header, subHeader = param.subHeader, noDelay = param.noDelay, average = param.average, car = param.car;\n    _s();\n    var circ = 2 * Math.PI * 100;\n    var circTwo = 2 * Math.PI * 95;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), Percent = ref[0], setPercent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), PercentTwo = ref1[0], setPercentTwo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setPercent(cleanPercentage(percentage));\n            setPercentTwo(cleanPercentage(average));\n        }, 10);\n    }, []);\n    var colour = getValues(Percent);\n    var strokePct = (100 - Percent) * circ / 100;\n    var strokePctSecond = (100 - PercentTwo) * circTwo / 100;\n    var positive = (Percent - PercentTwo) * 10 > 0;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        style: {\n            justifyContent: "center",\n            display: "flex"\n        },\n        children: header && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n            className: "score-gauge",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {\n                    width: 230,\n                    height: 230,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {\n                            transform: "rotate(-90 113 100)",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {\n                                r: 100,\n                                cx: 100,\n                                cy: 100,\n                                fill: "rgba(0, 0, 0, 0.274)",\n                                strokeLinecap: "round",\n                                style: {\n                                    stroke: colour.colour,\n                                    transition: noDelay ? "" : "all 1.5s",\n                                    strokeWidth: "0.2rem",\n                                    strokeDasharray: circ,\n                                    strokeDashoffset: strokePct\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {\n                            transform: "rotate(-90 113 95)",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {\n                                r: 95,\n                                cx: 95,\n                                cy: 95,\n                                fill: "rgba(0, 0, 0, 0.274)",\n                                strokeLinecap: "round",\n                                style: {\n                                    stroke: "white",\n                                    transition: noDelay ? "" : "all 1.5s",\n                                    strokeWidth: "0.2rem",\n                                    strokeDasharray: circTwo,\n                                    strokeDashoffset: strokePctSecond\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-header",\n                    children: header || header\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-text",\n                    style: {\n                        color: colour.colour\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                            style: {\n                                display: "flex",\n                                fontWeight: "400"\n                            },\n                            children: [\n                                " ",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                                    start: 0,\n                                    end: Percent * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                                    style: {\n                                        fontSize: "12px",\n                                        color: positive ? "green" : "red",\n                                        marginLeft: "-5px",\n                                        fontWeight: "300"\n                                    },\n                                    children: [\n                                        positive && "+",\n                                        ((Percent - PercentTwo) * 10).toFixed(0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                            style: {\n                                fontSize: "14px",\n                                textAlign: "center",\n                                fontWeight: "300",\n                                marginTop: 0,\n                                marginBottom: "4px"\n                            },\n                            children: "Bad"\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 135,\n                            columnNumber: 13\n                        }, _this),\n                        !subHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                            style: {\n                                fontSize: "12px",\n                                color: "white",\n                                textAlign: "center",\n                                fontWeight: "300"\n                            },\n                            children: [\n                                car && car,\n                                " Average Score ",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 155,\n                                    columnNumber: 44\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                                    start: 0,\n                                    end: PercentTwo * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                                    lineNumber: 156,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                            lineNumber: 147,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "score-gauge-subheader",\n                    style: {\n                        textAlign: "center"\n                    },\n                    children: subHeader || subHeader\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n                    lineNumber: 166,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n            lineNumber: 78,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx",\n        lineNumber: 76,\n        columnNumber: 5\n    }, _this));\n};\n_s(ScoreGauge, "NSTv9PFzbcHrKte8rtBzf9w1MSI=");\n_c = ScoreGauge;\n/* harmony default export */ __webpack_exports__["default"] = (ScoreGauge);\nvar _c;\n$RefreshReg$(_c, "ScoreGauge");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njb3JlR2F1Z2UvU2NvcmVHYXVnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDUjs7O0FBRW5DLEdBQUssQ0FBQ0csZUFBZSxHQUFHLFFBQVEsQ0FBUEMsVUFBa0IsRUFBSyxDQUFDO0lBQy9DLEdBQUssQ0FBQ0MsTUFBTSxJQUFJQyxNQUFNLENBQUNDLFFBQVEsRUFBRUgsVUFBVSxLQUFLQSxVQUFVLEdBQUcsQ0FBQztJQUM5RCxHQUFLLENBQUNJLE9BQU8sR0FBR0osVUFBVSxHQUFHLEdBQUc7SUFDaEMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFHRyxPQUFPLEdBQUcsR0FBRyxJQUFJSixVQUFVO0FBQ2pELENBQUM7QUFFRCxHQUFLLENBQUNLLFNBQVMsR0FBRyxRQUFRLENBQVBDLE9BQWUsRUFBSyxDQUFDO0lBQ3RDLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRCxPQUFPLEdBQUcsRUFBRTtJQUMxQixNQUFNLENBQUUsSUFBSTtRQUNWLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEdBQUc7WUFDZCxNQUFNLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQU07Z0JBQUVDLE1BQU0sRUFBRSxDQUFTO1lBQUMsQ0FBQztZQUM1QyxLQUFLO1FBQ1AsSUFBSSxDQUFDRixLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRztZQUM5QixNQUFNLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQU07Z0JBQUVDLE1BQU0sRUFBRSxDQUFTO1lBQUMsQ0FBQztZQUM1QyxLQUFLO1FBQ1AsSUFBSSxDQUFDRixLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRztZQUM5QixNQUFNLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQU07Z0JBQUVDLE1BQU0sRUFBRSxDQUFTO1lBQUMsQ0FBQztZQUM1QyxLQUFLO1FBQ1AsSUFBSSxDQUFDRixLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcs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ZS50c3g/NDM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ291bnRVcCBmcm9tIFwicmVhY3QtY291bnR1cFwiO1xuXG5jb25zdCBjbGVhblBlcmNlbnRhZ2UgPSAocGVyY2VudGFnZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHRvb0xvdyA9ICFOdW1iZXIuaXNGaW5pdGUoK3BlcmNlbnRhZ2UpIHx8IHBlcmNlbnRhZ2UgPCAwO1xuICBjb25zdCB0b29IaWdoID0gcGVyY2VudGFnZSA+IDEwMDtcbiAgcmV0dXJuIHRvb0xvdyA/IDAgOiB0b29IaWdoID8gMTAwIDogK3BlcmNlbnRhZ2U7XG59O1xuXG5jb25zdCBnZXRWYWx1ZXMgPSAocGVyY2VudDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHNjb3JlID0gcGVyY2VudCAqIDEwO1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIHNjb3JlIDwgNDM4OlxuICAgICAgcmV0dXJuIHsgaGVhZGVyOiBcIlBvb3JcIiwgY29sb3VyOiBcIiNlNjdlMjJcIiB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBzY29yZSA+PSA0MzggJiYgc2NvcmUgPCA1MzA6XG4gICAgICByZXR1cm4geyBoZWFkZXI6IFwiRmFpclwiLCBjb2xvdXI6IFwiI2YxYzQwZlwiIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIHNjb3JlID49IDUzMCAmJiBzY29yZSA8IDY3MDpcbiAgICAgIHJldHVybiB7IGhlYWRlcjogXCJHb29kXCIsIGNvbG91cjogXCIjN2JlZDlmXCIgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2Ugc2NvcmUgPj0gNjcwICYmIHNjb3JlIDwgODEwOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBcIlZlcnkgR29vZFwiLFxuICAgICAgICBjb2xvdXI6IFwiIzJlY2M3MVwiLFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2Ugc2NvcmUgPiA4MTA6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IFwiRXhjZWxsZW50XCIsXG4gICAgICAgIGNvbG91cjogXCIjMjdhZTYwXCIsXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IGNvbG91cjogXCIjMjdhZTYwXCIsIGhlYWRlcjogXCJOb25lXCIgfTtcbiAgfVxufTtcblxuaW50ZXJmYWNlIFNjb3JlR2F1Z2VQcm9wcyB7XG4gIHBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgaGVhZGVyOiBzdHJpbmc7XG4gIHN1YkhlYWRlcjogc3RyaW5nO1xuICBub0RlbGF5PzogYm9vbGVhbjtcbiAgYXZlcmFnZTogYW55O1xuICBjYXI/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFNjb3JlR2F1Z2U6IFJlYWN0LkZDPFNjb3JlR2F1Z2VQcm9wcz4gPSAoe1xuICBwZXJjZW50YWdlLFxuICBkdXJhdGlvbixcbiAgaGVhZGVyLFxuICBzdWJIZWFkZXIsXG4gIG5vRGVsYXksXG4gIGF2ZXJhZ2UsXG4gIGNhcixcbn0pID0+IHtcbiAgY29uc3QgY2lyYyA9IDIgKiBNYXRoLlBJICogMTAwO1xuICBjb25zdCBjaXJjVHdvID0gMiAqIE1hdGguUEkgKiA5NTtcbiAgY29uc3QgW1BlcmNlbnQsIHNldFBlcmNlbnRdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtQZXJjZW50VHdvLCBzZXRQZXJjZW50VHdvXSA9IHVzZVN0YXRlKDEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRQZXJjZW50KGNsZWFuUGVyY2VudGFnZShwZXJjZW50YWdlKSk7XG4gICAgICBzZXRQZXJjZW50VHdvKGNsZWFuUGVyY2VudGFnZShhdmVyYWdlKSk7XG4gICAgfSwgMTApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29sb3VyID0gZ2V0VmFsdWVzKFBlcmNlbnQpO1xuICBjb25zdCBzdHJva2VQY3QgPSAoKDEwMCAtIFBlcmNlbnQpICogY2lyYykgLyAxMDA7XG5cbiAgY29uc3Qgc3Ryb2tlUGN0U2Vjb25kID0gKCgxMDAgLSBQZXJjZW50VHdvKSAqIGNpcmNUd28pIC8gMTAwO1xuICBjb25zdCBwb3NpdGl2ZSA9IChQZXJjZW50IC0gUGVyY2VudFR3bykgKiAxMCA+IDA7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICB7aGVhZGVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1nYXVnZVwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9ezIzMH0gaGVpZ2h0PXsyMzB9PlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAke1wiMTEzIDEwMFwifSlgfT5cbiAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIHI9ezEwMH1cbiAgICAgICAgICAgICAgICBjeD17MTAwfVxuICAgICAgICAgICAgICAgIGN5PXsxMDB9XG4gICAgICAgICAgICAgICAgZmlsbD1cInJnYmEoMCwgMCwgMCwgMC4yNzQpXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IGNvbG91ci5jb2xvdXIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBub0RlbGF5ID8gXCJcIiA6IFwiYWxsIDEuNXNcIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjAuMnJlbVwiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBjaXJjLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogc3Ryb2tlUGN0LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgJHtcIjExMyA5NVwifSlgfT5cbiAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIHI9ezk1fVxuICAgICAgICAgICAgICAgIGN4PXs5NX1cbiAgICAgICAgICAgICAgICBjeT17OTV9XG4gICAgICAgICAgICAgICAgZmlsbD1cInJnYmEoMCwgMCwgMCwgMC4yNzQpXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG5vRGVsYXkgPyBcIlwiIDogXCJhbGwgMS41c1wiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMC4ycmVtXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGNpcmNUd28sXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBzdHJva2VQY3RTZWNvbmQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZ2F1Z2UtaGVhZGVyXCI+e2hlYWRlciB8fCBoZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1nYXVnZS10ZXh0XCIgc3R5bGU9e3sgY29sb3I6IGNvbG91ci5jb2xvdXIgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIDxDb3VudFVwXG4gICAgICAgICAgICAgICAgc3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgZW5kPXtQZXJjZW50ICogMTB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249e2R1cmF0aW9uIHx8IDAuMDAxfVxuICAgICAgICAgICAgICAgIGRlY2ltYWxzPXswfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwb3NpdGl2ZSA/IFwiZ3JlZW5cIiA6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi01cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwb3NpdGl2ZSAmJiBcIitcIn1cbiAgICAgICAgICAgICAgICB7KChQZXJjZW50IC0gUGVyY2VudFR3bykgKiAxMCkudG9GaXhlZCgwKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNHB4XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJhZFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgeyFzdWJIZWFkZXIgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2FyICYmIGNhcn0gQXZlcmFnZSBTY29yZSA8YnIgLz5cbiAgICAgICAgICAgICAgICA8Q291bnRVcFxuICAgICAgICAgICAgICAgICAgc3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgICBlbmQ9e1BlcmNlbnRUd28gKiAxMH1cbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbiB8fCAwLjAwMX1cbiAgICAgICAgICAgICAgICAgIGRlY2ltYWxzPXswfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjb3JlLWdhdWdlLXN1YmhlYWRlclwiXG4gICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3ViSGVhZGVyIHx8IHN1YkhlYWRlcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVHYXVnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvdW50VXAiLCJjbGVhblBlcmNlbnRhZ2UiLCJwZXJjZW50YWdlIiwidG9vTG93IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJ0b29IaWdoIiwiZ2V0VmFsdWVzIiwicGVyY2VudCIsInNjb3JlIiwiaGVhZGVyIiwiY29sb3VyIiwiU2NvcmVHYXVnZSIsImR1cmF0aW9uIiwic3ViSGVhZGVyIiwibm9EZWxheSIsImF2ZXJhZ2UiLCJjYXIiLCJjaXJjIiwiTWF0aCIsIlBJIiwiY2lyY1R3byIsIlBlcmNlbnQiLCJzZXRQZXJjZW50IiwiUGVyY2VudFR3byIsInNldFBlcmNlbnRUd28iLCJzZXRUaW1lb3V0Iiwic3Ryb2tlUGN0Iiwic3Ryb2tlUGN0U2Vjb25kIiwicG9zaXRpdmUiLCJkaXYiLCJzdHlsZSIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0IiwiZyIsInRyYW5zZm9ybSIsImNpcmNsZSIsInIiLCJjeCIsImN5IiwiZmlsbCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2UiLCJ0cmFuc2l0aW9uIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0IiwiY29sb3IiLCJmb250V2VpZ2h0Iiwic3RhcnQiLCJlbmQiLCJkZWNpbWFscyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsInRvRml4ZWQiLCJwIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ScoreGauge/ScoreGauge.tsx\n'
      );

      /***/
    },
});
