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

/***/ "./components/ScoreGauge/ScoreGauge.tsx":
/*!**********************************************!*\
  !*** ./components/ScoreGauge/ScoreGauge.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ \"./node_modules/react-countup/build/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar cleanPercentage = function(percentage) {\n    var tooLow = !Number.isFinite(+percentage) || percentage < 0;\n    var tooHigh = percentage > 100;\n    return tooLow ? 0 : tooHigh ? 100 : +percentage;\n};\nvar scoreMaker = function(percentage) {\n    switch(true){\n        case percentage < 0.3:\n            return 100 - percentage * 30;\n        case percentage < 0.6:\n            return 100 - percentage * 35;\n        case percentage < 0.9:\n            return 100 - percentage * 35;\n        case percentage < 1.3:\n            return 100 - percentage * 35;\n        case percentage < 1.6:\n            return 55 - percentage * 2;\n        case percentage < 1.9:\n            return 55 - percentage * 4;\n        case percentage < 2.4:\n            return 55 - percentage * 5;\n        case percentage < 3.2:\n            return 55 - percentage * 6;\n        case percentage < 4:\n            return 55 - percentage * 4;\n        case percentage >= 4 && percentage <= 6:\n            return 30 - percentage;\n        case percentage > 6 && percentage <= 10:\n            return 26 - percentage;\n        case percentage > 10:\n            return 0.4;\n        default:\n            return percentage;\n    }\n};\nvar getValues = function(percent) {\n    var score = percent * 10;\n    switch(true){\n        case score < 438:\n            return {\n                header: \"Poor\",\n                colour: \"#e67e22\"\n            };\n        case score >= 438 && score < 530:\n            return {\n                header: \"Fair\",\n                colour: \"#f1c40f\"\n            };\n        case score >= 530 && score < 670:\n            return {\n                header: \"Good\",\n                colour: \"#7bed9f\"\n            };\n        case score >= 670 && score < 810:\n            return {\n                header: \"Very Good\",\n                colour: \"#2ecc71\"\n            };\n        case score > 810:\n            return {\n                header: \"Excellent\",\n                colour: \"#27ae60\"\n            };\n        default:\n            return {\n                colour: \"#27ae60\",\n                header: \"None\"\n            };\n    }\n};\nvar ScoreGauge = function(param) {\n    var percentage = param.percentage, duration = param.duration, header = param.header, subHeader = param.subHeader, noDelay = param.noDelay, average = param.average, car = param.car;\n    _s();\n    var circ = 2 * Math.PI * 100;\n    var circTwo = 2 * Math.PI * 95;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), Percent = ref[0], setPercent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), PercentTwo = ref1[0], setPercentTwo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setPercent(scoreMaker(cleanPercentage(percentage)));\n            setPercentTwo(scoreMaker(cleanPercentage(average)));\n        }, 10);\n    }, []);\n    console.log(\"oer\", Percent, PercentTwo);\n    var colour = getValues(Percent);\n    var strokePct = (100 - Percent) * circ / 100;\n    var strokePctSecond = (100 - PercentTwo) * circTwo / 100;\n    var positive = (Percent - PercentTwo) * 10 > 0;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            justifyContent: \"center\",\n            display: \"flex\"\n        },\n        children: header && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"score-gauge\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    width: 230,\n                    height: 230,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                            transform: \"rotate(-90 113 100)\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                r: 100,\n                                cx: 100,\n                                cy: 100,\n                                fill: \"rgba(0, 0, 0, 0.274)\",\n                                strokeLinecap: \"round\",\n                                style: {\n                                    stroke: colour.colour,\n                                    transition: noDelay ? \"\" : \"all 1.5s\",\n                                    strokeWidth: \"0.2rem\",\n                                    strokeDasharray: circ,\n                                    strokeDashoffset: strokePct\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                            transform: \"rotate(-90 113 95)\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                r: 95,\n                                cx: 95,\n                                cy: 95,\n                                fill: \"rgba(0, 0, 0, 0.274)\",\n                                strokeLinecap: \"round\",\n                                style: {\n                                    stroke: \"white\",\n                                    transition: noDelay ? \"\" : \"all 1.5s\",\n                                    strokeWidth: \"0.2rem\",\n                                    strokeDasharray: circTwo,\n                                    strokeDashoffset: strokePctSecond\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"score-gauge-header\",\n                    children: header || header\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"score-gauge-text\",\n                    style: {\n                        color: colour.colour\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"flex\",\n                                fontWeight: \"400\"\n                            },\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    start: 0,\n                                    end: Percent * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        fontSize: \"12px\",\n                                        color: positive ? \"green\" : \"red\",\n                                        marginLeft: \"-5px\",\n                                        fontWeight: \"300\"\n                                    },\n                                    children: [\n                                        positive && \"+\",\n                                        ((Percent - PercentTwo) * 10).toFixed(0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 143,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                fontSize: \"14px\",\n                                textAlign: \"center\",\n                                fontWeight: \"300\",\n                                marginTop: 0,\n                                marginBottom: \"4px\"\n                            },\n                            children: colour.header\n                        }, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 163,\n                            columnNumber: 13\n                        }, _this),\n                        !subHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                fontSize: \"12px\",\n                                color: \"white\",\n                                textAlign: \"center\",\n                                fontWeight: \"300\"\n                            },\n                            children: [\n                                car && car,\n                                \" Average Score \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 183,\n                                    columnNumber: 44\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    start: 0,\n                                    end: PercentTwo * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 184,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 175,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"score-gauge-subheader\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: subHeader || subHeader\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 194,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n            lineNumber: 106,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, _this));\n};\n_s(ScoreGauge, \"NSTv9PFzbcHrKte8rtBzf9w1MSI=\");\n_c = ScoreGauge;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreGauge);\nvar _c;\n$RefreshReg$(_c, \"ScoreGauge\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njb3JlR2F1Z2UvU2NvcmVHYXVnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDUjs7O0FBRW5DLEdBQUssQ0FBQ0csZUFBZSxHQUFHLFFBQVEsQ0FBUEMsVUFBa0IsRUFBSyxDQUFDO0lBQy9DLEdBQUssQ0FBQ0MsTUFBTSxJQUFJQyxNQUFNLENBQUNDLFFBQVEsRUFBRUgsVUFBVSxLQUFLQSxVQUFVLEdBQUcsQ0FBQztJQUM5RCxHQUFLLENBQUNJLE9BQU8sR0FBR0osVUFBVSxHQUFHLEdBQUc7SUFDaEMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFHRyxPQUFPLEdBQUcsR0FBRyxJQUFJSixVQUFVO0FBQ2pELENBQUM7QUFFRCxHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUFRLENBQVBMLFVBQWtCLEVBQUssQ0FBQztJQUMxQyxNQUFNLENBQUUsSUFBSTtRQUNWLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEdBQUcsR0FBR0EsVUFBVSxHQUFHLEVBQUU7UUFDOUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsR0FBRztZQUNuQixNQUFNLENBQUMsR0FBRyxHQUFHQSxVQUFVLEdBQUcsRUFBRTtRQUM5QixJQUFJLENBQUNBLFVBQVUsR0FBRyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxHQUFHLEdBQUdBLFVBQVUsR0FBRyxFQUFFO1FBQzlCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEdBQUcsR0FBR0EsVUFBVSxHQUFHLEVBQUU7UUFDOUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsR0FBRztZQUNuQixNQUFNLENBQUMsRUFBRSxHQUFHQSxVQUFVLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUNBLFVBQVUsR0FBRyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxFQUFFLEdBQUdBLFVBQVUsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIs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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQyxDQUFDO0dBaklLRixVQUFVO0tBQVZBLFVBQVU7QUFtSWhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY29yZUdhdWdlL1Njb3JlR2F1Z2UudHN4PzQzNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvdW50VXAgZnJvbSBcInJlYWN0LWNvdW50dXBcIjtcblxuY29uc3QgY2xlYW5QZXJjZW50YWdlID0gKHBlcmNlbnRhZ2U6IG51bWJlcikgPT4ge1xuICBjb25zdCB0b29Mb3cgPSAhTnVtYmVyLmlzRmluaXRlKCtwZXJjZW50YWdlKSB8fCBwZXJjZW50YWdlIDwgMDtcbiAgY29uc3QgdG9vSGlnaCA9IHBlcmNlbnRhZ2UgPiAxMDA7XG4gIHJldHVybiB0b29Mb3cgPyAwIDogdG9vSGlnaCA/IDEwMCA6ICtwZXJjZW50YWdlO1xufTtcblxuY29uc3Qgc2NvcmVNYWtlciA9IChwZXJjZW50YWdlOiBudW1iZXIpID0+IHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgMC4zOlxuICAgICAgcmV0dXJuIDEwMCAtIHBlcmNlbnRhZ2UgKiAzMDtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAwLjY6XG4gICAgICByZXR1cm4gMTAwIC0gcGVyY2VudGFnZSAqIDM1O1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDAuOTpcbiAgICAgIHJldHVybiAxMDAgLSBwZXJjZW50YWdlICogMzU7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgMS4zOlxuICAgICAgcmV0dXJuIDEwMCAtIHBlcmNlbnRhZ2UgKiAzNTtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAxLjY6XG4gICAgICByZXR1cm4gNTUgLSBwZXJjZW50YWdlICogMjtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAxLjk6XG4gICAgICByZXR1cm4gNTUgLSBwZXJjZW50YWdlICogNDtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAyLjQ6XG4gICAgICByZXR1cm4gNTUgLSBwZXJjZW50YWdlICogNTtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAzLjI6XG4gICAgICByZXR1cm4gNTUgLSBwZXJjZW50YWdlICogNjtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCA0OlxuICAgICAgcmV0dXJuIDU1IC0gcGVyY2VudGFnZSAqIDQ7XG4gICAgY2FzZSBwZXJjZW50YWdlID49IDQgJiYgcGVyY2VudGFnZSA8PSA2OlxuICAgICAgcmV0dXJuIDMwIC0gcGVyY2VudGFnZTtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPiA2ICYmIHBlcmNlbnRhZ2UgPD0gMTA6XG4gICAgICByZXR1cm4gMjYgLSBwZXJjZW50YWdlO1xuICAgIGNhc2UgcGVyY2VudGFnZSA+IDEwOlxuICAgICAgcmV0dXJuIDAuNDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBlcmNlbnRhZ2U7XG4gIH1cbn07XG5cbmNvbnN0IGdldFZhbHVlcyA9IChwZXJjZW50OiBudW1iZXIpID0+IHtcbiAgY29uc3Qgc2NvcmUgPSBwZXJjZW50ICogMTA7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2Ugc2NvcmUgPCA0Mzg6XG4gICAgICByZXR1cm4geyBoZWFkZXI6IFwiUG9vclwiLCBjb2xvdXI6IFwiI2U2N2UyMlwiIH07XG4gICAgY2FzZSBzY29yZSA+PSA0MzggJiYgc2NvcmUgPCA1MzA6XG4gICAgICByZXR1cm4geyBoZWFkZXI6IFwiRmFpclwiLCBjb2xvdXI6IFwiI2YxYzQwZlwiIH07XG4gICAgY2FzZSBzY29yZSA+PSA1MzAgJiYgc2NvcmUgPCA2NzA6XG4gICAgICByZXR1cm4geyBoZWFkZXI6IFwiR29vZFwiLCBjb2xvdXI6IFwiIzdiZWQ5ZlwiIH07XG4gICAgY2FzZSBzY29yZSA+PSA2NzAgJiYgc2NvcmUgPCA4MTA6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IFwiVmVyeSBHb29kXCIsXG4gICAgICAgIGNvbG91cjogXCIjMmVjYzcxXCIsXG4gICAgICB9O1xuICAgIGNhc2Ugc2NvcmUgPiA4MTA6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IFwiRXhjZWxsZW50XCIsXG4gICAgICAgIGNvbG91cjogXCIjMjdhZTYwXCIsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyBjb2xvdXI6IFwiIzI3YWU2MFwiLCBoZWFkZXI6IFwiTm9uZVwiIH07XG4gIH1cbn07XG5cbmludGVyZmFjZSBTY29yZUdhdWdlUHJvcHMge1xuICBwZXJjZW50YWdlOiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIGhlYWRlcjogc3RyaW5nO1xuICBzdWJIZWFkZXI6IHN0cmluZztcbiAgbm9EZWxheT86IGJvb2xlYW47XG4gIGF2ZXJhZ2U6IGFueTtcbiAgY2FyPzogc3RyaW5nO1xufVxuXG5jb25zdCBTY29yZUdhdWdlOiBSZWFjdC5GQzxTY29yZUdhdWdlUHJvcHM+ID0gKHtcbiAgcGVyY2VudGFnZSxcbiAgZHVyYXRpb24sXG4gIGhlYWRlcixcbiAgc3ViSGVhZGVyLFxuICBub0RlbGF5LFxuICBhdmVyYWdlLFxuICBjYXIsXG59KSA9PiB7XG4gIGNvbnN0IGNpcmMgPSAyICogTWF0aC5QSSAqIDEwMDtcbiAgY29uc3QgY2lyY1R3byA9IDIgKiBNYXRoLlBJICogOTU7XG4gIGNvbnN0IFtQZXJjZW50LCBzZXRQZXJjZW50XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbUGVyY2VudFR3bywgc2V0UGVyY2VudFR3b10gPSB1c2VTdGF0ZSgxKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0UGVyY2VudChzY29yZU1ha2VyKGNsZWFuUGVyY2VudGFnZShwZXJjZW50YWdlKSkpO1xuICAgICAgc2V0UGVyY2VudFR3byhzY29yZU1ha2VyKGNsZWFuUGVyY2VudGFnZShhdmVyYWdlKSkpO1xuICAgIH0sIDEwKTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKFwib2VyXCIsIFBlcmNlbnQsIFBlcmNlbnRUd28pO1xuXG4gIGNvbnN0IGNvbG91ciA9IGdldFZhbHVlcyhQZXJjZW50KTtcbiAgY29uc3Qgc3Ryb2tlUGN0ID0gKCgxMDAgLSBQZXJjZW50KSAqIGNpcmMpIC8gMTAwO1xuXG4gIGNvbnN0IHN0cm9rZVBjdFNlY29uZCA9ICgoMTAwIC0gUGVyY2VudFR3bykgKiBjaXJjVHdvKSAvIDEwMDtcbiAgY29uc3QgcG9zaXRpdmUgPSAoUGVyY2VudCAtIFBlcmNlbnRUd28pICogMTAgPiAwO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAge2hlYWRlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZ2F1Z2VcIj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPXsyMzB9IGhlaWdodD17MjMwfT5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgJHtcIjExMyAxMDBcIn0pYH0+XG4gICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICByPXsxMDB9XG4gICAgICAgICAgICAgICAgY3g9ezEwMH1cbiAgICAgICAgICAgICAgICBjeT17MTAwfVxuICAgICAgICAgICAgICAgIGZpbGw9XCJyZ2JhKDAsIDAsIDAsIDAuMjc0KVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBjb2xvdXIuY29sb3VyLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9EZWxheSA/IFwiXCIgOiBcImFsbCAxLjVzXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIwLjJyZW1cIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogY2lyYyxcbiAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHN0cm9rZVBjdCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09e2Byb3RhdGUoLTkwICR7XCIxMTMgOTVcIn0pYH0+XG4gICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICByPXs5NX1cbiAgICAgICAgICAgICAgICBjeD17OTV9XG4gICAgICAgICAgICAgICAgY3k9ezk1fVxuICAgICAgICAgICAgICAgIGZpbGw9XCJyZ2JhKDAsIDAsIDAsIDAuMjc0KVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBub0RlbGF5ID8gXCJcIiA6IFwiYWxsIDEuNXNcIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjAuMnJlbVwiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBjaXJjVHdvLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogc3Ryb2tlUGN0U2Vjb25kLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWdhdWdlLWhlYWRlclwiPntoZWFkZXIgfHwgaGVhZGVyfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZ2F1Z2UtdGV4dFwiIHN0eWxlPXt7IGNvbG9yOiBjb2xvdXIuY29sb3VyIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZm9udFdlaWdodDogXCI0MDBcIiB9fT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICA8Q291bnRVcFxuICAgICAgICAgICAgICAgIHN0YXJ0PXswfVxuICAgICAgICAgICAgICAgIGVuZD17UGVyY2VudCAqIDEwfVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbiB8fCAwLjAwMX1cbiAgICAgICAgICAgICAgICBkZWNpbWFscz17MH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogcG9zaXRpdmUgPyBcImdyZWVuXCIgOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCItNXB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cG9zaXRpdmUgJiYgXCIrXCJ9XG4gICAgICAgICAgICAgICAgeygoUGVyY2VudCAtIFBlcmNlbnRUd28pICogMTApLnRvRml4ZWQoMCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjRweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y29sb3VyLmhlYWRlcn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIHshc3ViSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NhciAmJiBjYXJ9IEF2ZXJhZ2UgU2NvcmUgPGJyIC8+XG4gICAgICAgICAgICAgICAgPENvdW50VXBcbiAgICAgICAgICAgICAgICAgIHN0YXJ0PXswfVxuICAgICAgICAgICAgICAgICAgZW5kPXtQZXJjZW50VHdvICogMTB9XG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbj17ZHVyYXRpb24gfHwgMC4wMDF9XG4gICAgICAgICAgICAgICAgICBkZWNpbWFscz17MH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzY29yZS1nYXVnZS1zdWJoZWFkZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N1YkhlYWRlciB8fCBzdWJIZWFkZXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlR2F1Z2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb3VudFVwIiwiY2xlYW5QZXJjZW50YWdlIiwicGVyY2VudGFnZSIsInRvb0xvdyIsIk51bWJlciIsImlzRmluaXRlIiwidG9vSGlnaCIsInNjb3JlTWFrZXIiLCJnZXRWYWx1ZXMiLCJwZXJjZW50Iiwic2NvcmUiLCJoZWFkZXIiLCJjb2xvdXIiLCJTY29yZUdhdWdlIiwiZHVyYXRpb24iLCJzdWJIZWFkZXIiLCJub0RlbGF5IiwiYXZlcmFnZSIsImNhciIsImNpcmMiLCJNYXRoIiwiUEkiLCJjaXJjVHdvIiwiUGVyY2VudCIsInNldFBlcmNlbnQiLCJQZXJjZW50VHdvIiwic2V0UGVyY2VudFR3byIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwic3Ryb2tlUGN0Iiwic3Ryb2tlUGN0U2Vjb25kIiwicG9zaXRpdmUiLCJkaXYiLCJzdHlsZSIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0IiwiZyIsInRyYW5zZm9ybSIsImNpcmNsZSIsInIiLCJjeCIsImN5IiwiZmlsbCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2UiLCJ0cmFuc2l0aW9uIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0IiwiY29sb3IiLCJmb250V2VpZ2h0Iiwic3RhcnQiLCJlbmQiLCJkZWNpbWFscyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsInRvRml4ZWQiLCJwIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ScoreGauge/ScoreGauge.tsx\n");

/***/ })

});