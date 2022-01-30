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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ \"./node_modules/react-countup/build/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar cleanPercentage = function(percentage) {\n    var tooLow = !Number.isFinite(+percentage) || percentage < 0;\n    var tooHigh = percentage > 100;\n    return tooLow ? 0 : tooHigh ? 100 : +percentage;\n};\nvar scoreMaker = function(percentage) {\n    switch(true){\n        case percentage < 0.3:\n            return 100 - percentage * 30;\n        case percentage < 0.6:\n            return 100 - percentage * 35;\n        case percentage < 0.9:\n            return 100 - percentage * 35;\n        case percentage < 1.3:\n            return 100 - percentage * 35;\n        case percentage < 1.6:\n            return 55 - percentage * 2;\n        case percentage < 1.9:\n            return 55 - percentage * 3;\n        case percentage < 2.4:\n            return 55 - percentage * 5;\n        case percentage < 3.2:\n            return 55 - percentage * 5;\n        case percentage < 4:\n            return 55 - percentage * 4;\n        case percentage > 4 && percentage <= 6:\n            return 30 - percentage;\n        case percentage > 6 && percentage <= 10:\n            return 26 - percentage;\n        case percentage > 10:\n            return 0.4;\n        default:\n            return percentage;\n    }\n};\nvar getValues = function(percent) {\n    var score = percent * 10;\n    switch(true){\n        case score < 438:\n            return {\n                header: \"Poor\",\n                colour: \"#e67e22\"\n            };\n        case score >= 438 && score < 530:\n            return {\n                header: \"Fair\",\n                colour: \"#f1c40f\"\n            };\n        case score >= 530 && score < 670:\n            return {\n                header: \"Good\",\n                colour: \"#7bed9f\"\n            };\n        case score >= 670 && score < 810:\n            return {\n                header: \"Very Good\",\n                colour: \"#2ecc71\"\n            };\n        case score > 810:\n            return {\n                header: \"Excellent\",\n                colour: \"#27ae60\"\n            };\n        default:\n            return {\n                colour: \"#27ae60\",\n                header: \"None\"\n            };\n    }\n};\nvar ScoreGauge = function(param) {\n    var percentage = param.percentage, duration = param.duration, header = param.header, subHeader = param.subHeader, noDelay = param.noDelay, average = param.average, car = param.car;\n    _s();\n    var circ = 2 * Math.PI * 100;\n    var circTwo = 2 * Math.PI * 95;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), Percent = ref[0], setPercent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), PercentTwo = ref1[0], setPercentTwo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setPercent(scoreMaker(cleanPercentage(percentage)));\n            setPercentTwo(scoreMaker(cleanPercentage(average)));\n        }, 10);\n    }, []);\n    console.log(\"oer\", Percent, PercentTwo);\n    var colour = getValues(Percent);\n    var strokePct = (100 - Percent) * circ / 100;\n    var strokePctSecond = (100 - PercentTwo) * circTwo / 100;\n    var positive = (Percent - PercentTwo) * 10 > 0;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            justifyContent: \"center\",\n            display: \"flex\"\n        },\n        children: header && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"score-gauge\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    width: 230,\n                    height: 230,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                            transform: \"rotate(-90 113 100)\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                r: 100,\n                                cx: 100,\n                                cy: 100,\n                                fill: \"rgba(0, 0, 0, 0.274)\",\n                                strokeLinecap: \"round\",\n                                style: {\n                                    stroke: colour.colour,\n                                    transition: noDelay ? \"\" : \"all 1.5s\",\n                                    strokeWidth: \"0.2rem\",\n                                    strokeDasharray: circ,\n                                    strokeDashoffset: strokePct\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                            transform: \"rotate(-90 113 95)\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                r: 95,\n                                cx: 95,\n                                cy: 95,\n                                fill: \"rgba(0, 0, 0, 0.274)\",\n                                strokeLinecap: \"round\",\n                                style: {\n                                    stroke: \"white\",\n                                    transition: noDelay ? \"\" : \"all 1.5s\",\n                                    strokeWidth: \"0.2rem\",\n                                    strokeDasharray: circTwo,\n                                    strokeDashoffset: strokePctSecond\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"score-gauge-header\",\n                    children: header || header\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"score-gauge-text\",\n                    style: {\n                        color: colour.colour\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"flex\",\n                                fontWeight: \"400\"\n                            },\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    start: 0,\n                                    end: Percent * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        fontSize: \"12px\",\n                                        color: positive ? \"green\" : \"red\",\n                                        marginLeft: \"-5px\",\n                                        fontWeight: \"300\"\n                                    },\n                                    children: [\n                                        positive && \"+\",\n                                        ((Percent - PercentTwo) * 10).toFixed(0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 143,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                fontSize: \"14px\",\n                                textAlign: \"center\",\n                                fontWeight: \"300\",\n                                marginTop: 0,\n                                marginBottom: \"4px\"\n                            },\n                            children: colour.header\n                        }, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 163,\n                            columnNumber: 13\n                        }, _this),\n                        !subHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                fontSize: \"12px\",\n                                color: \"white\",\n                                textAlign: \"center\",\n                                fontWeight: \"300\"\n                            },\n                            children: [\n                                car && car,\n                                \" Average Score \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 183,\n                                    columnNumber: 44\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    start: 0,\n                                    end: PercentTwo * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 184,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 175,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"score-gauge-subheader\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: subHeader || subHeader\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 194,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n            lineNumber: 106,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, _this));\n};\n_s(ScoreGauge, \"NSTv9PFzbcHrKte8rtBzf9w1MSI=\");\n_c = ScoreGauge;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreGauge);\nvar _c;\n$RefreshReg$(_c, \"ScoreGauge\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njb3JlR2F1Z2UvU2NvcmVHYXVnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDUjs7O0FBRW5DLEdBQUssQ0FBQ0csZUFBZSxHQUFHLFFBQVEsQ0FBUEMsVUFBa0IsRUFBSyxDQUFDO0lBQy9DLEdBQUssQ0FBQ0MsTUFBTSxJQUFJQyxNQUFNLENBQUNDLFFBQVEsRUFBRUgsVUFBVSxLQUFLQSxVQUFVLEdBQUcsQ0FBQztJQUM5RCxHQUFLLENBQUNJLE9BQU8sR0FBR0osVUFBVSxHQUFHLEdBQUc7SUFDaEMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFHRyxPQUFPLEdBQUcsR0FBRyxJQUFJSixVQUFVO0FBQ2pELENBQUM7QUFFRCxHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUFRLENBQVBMLFVBQWtCLEVBQUssQ0FBQztJQUMxQyxNQUFNLENBQUUsSUFBSTtRQUNWLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEdBQUcsR0FBR0EsVUFBVSxHQUFHLEVBQUU7UUFDOUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsR0FBRztZQUNuQixNQUFNLENBQUMsR0FBRyxHQUFHQSxVQUFVLEdBQUcsRUFBRTtRQUM5QixJQUFJLENBQUNBLFVBQVUsR0FBRyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxHQUFHLEdBQUdBLFVBQVUsR0FBRyxFQUFFO1FBQzlCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEdBQUcsR0FBR0EsVUFBVSxHQUFHLEVBQUU7UUFDOUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsR0FBRztZQUNuQixNQUFNLENBQUMsRUFBRSxHQUFHQSxVQUFVLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUNBLFVBQVUsR0FBRyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxFQUFFLEdBQUdBLFVBQVUsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIs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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQyxDQUFDO0dBaklLRixVQUFVO0tBQVZBLFVBQVU7QUFtSWhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY29yZUdhdWdlL1Njb3JlR2F1Z2UudHN4PzQzNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvdW50VXAgZnJvbSBcInJlYWN0LWNvdW50dXBcIjtcblxuY29uc3QgY2xlYW5QZXJjZW50YWdlID0gKHBlcmNlbnRhZ2U6IG51bWJlcikgPT4ge1xuICBjb25zdCB0b29Mb3cgPSAhTnVtYmVyLmlzRmluaXRlKCtwZXJjZW50YWdlKSB8fCBwZXJjZW50YWdlIDwgMDtcbiAgY29uc3QgdG9vSGlnaCA9IHBlcmNlbnRhZ2UgPiAxMDA7XG4gIHJldHVybiB0b29Mb3cgPyAwIDogdG9vSGlnaCA/IDEwMCA6ICtwZXJjZW50YWdlO1xufTtcblxuY29uc3Qgc2NvcmVNYWtlciA9IChwZXJjZW50YWdlOiBudW1iZXIpID0+IHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgMC4zOlxuICAgICAgcmV0dXJuIDEwMCAtIHBlcmNlbnRhZ2UgKiAzMDtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAwLjY6XG4gICAgICByZXR1cm4gMTAwIC0gcGVyY2VudGFnZSAqIDM1O1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDAuOTpcbiAgICAgIHJldHVybiAxMDAgLSBwZXJjZW50YWdlICogMzU7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgMS4zOlxuICAgICAgcmV0dXJuIDEwMCAtIHBlcmNlbnRhZ2UgKiAzNTtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAxLjY6XG4gICAgICByZXR1cm4gNTUgLSBwZXJjZW50YWdlICogMjtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAxLjk6XG4gICAgICByZXR1cm4gNTUgLSBwZXJjZW50YWdlICogMztcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAyLjQ6XG4gICAgICByZXR1cm4gNTUgLSBwZXJjZW50YWdlICogNTtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAzLjI6XG4gICAgICByZXR1cm4gNTUgLSBwZXJjZW50YWdlICogNTtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCA0OlxuICAgICAgcmV0dXJuIDU1IC0gcGVyY2VudGFnZSAqIDQ7XG4gICAgY2FzZSBwZXJjZW50YWdlID4gNCAmJiBwZXJjZW50YWdlIDw9IDY6XG4gICAgICByZXR1cm4gMzAgLSBwZXJjZW50YWdlO1xuICAgIGNhc2UgcGVyY2VudGFnZSA+IDYgJiYgcGVyY2VudGFnZSA8PSAxMDpcbiAgICAgIHJldHVybiAyNiAtIHBlcmNlbnRhZ2U7XG4gICAgY2FzZSBwZXJjZW50YWdlID4gMTA6XG4gICAgICByZXR1cm4gMC40O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcGVyY2VudGFnZTtcbiAgfVxufTtcblxuY29uc3QgZ2V0VmFsdWVzID0gKHBlcmNlbnQ6IG51bWJlcikgPT4ge1xuICBjb25zdCBzY29yZSA9IHBlcmNlbnQgKiAxMDtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBzY29yZSA8IDQzODpcbiAgICAgIHJldHVybiB7IGhlYWRlcjogXCJQb29yXCIsIGNvbG91cjogXCIjZTY3ZTIyXCIgfTtcbiAgICBjYXNlIHNjb3JlID49IDQzOCAmJiBzY29yZSA8IDUzMDpcbiAgICAgIHJldHVybiB7IGhlYWRlcjogXCJGYWlyXCIsIGNvbG91cjogXCIjZjFjNDBmXCIgfTtcbiAgICBjYXNlIHNjb3JlID49IDUzMCAmJiBzY29yZSA8IDY3MDpcbiAgICAgIHJldHVybiB7IGhlYWRlcjogXCJHb29kXCIsIGNvbG91cjogXCIjN2JlZDlmXCIgfTtcbiAgICBjYXNlIHNjb3JlID49IDY3MCAmJiBzY29yZSA8IDgxMDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogXCJWZXJ5IEdvb2RcIixcbiAgICAgICAgY29sb3VyOiBcIiMyZWNjNzFcIixcbiAgICAgIH07XG4gICAgY2FzZSBzY29yZSA+IDgxMDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogXCJFeGNlbGxlbnRcIixcbiAgICAgICAgY29sb3VyOiBcIiMyN2FlNjBcIixcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IGNvbG91cjogXCIjMjdhZTYwXCIsIGhlYWRlcjogXCJOb25lXCIgfTtcbiAgfVxufTtcblxuaW50ZXJmYWNlIFNjb3JlR2F1Z2VQcm9wcyB7XG4gIHBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgaGVhZGVyOiBzdHJpbmc7XG4gIHN1YkhlYWRlcjogc3RyaW5nO1xuICBub0RlbGF5PzogYm9vbGVhbjtcbiAgYXZlcmFnZTogYW55O1xuICBjYXI/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFNjb3JlR2F1Z2U6IFJlYWN0LkZDPFNjb3JlR2F1Z2VQcm9wcz4gPSAoe1xuICBwZXJjZW50YWdlLFxuICBkdXJhdGlvbixcbiAgaGVhZGVyLFxuICBzdWJIZWFkZXIsXG4gIG5vRGVsYXksXG4gIGF2ZXJhZ2UsXG4gIGNhcixcbn0pID0+IHtcbiAgY29uc3QgY2lyYyA9IDIgKiBNYXRoLlBJICogMTAwO1xuICBjb25zdCBjaXJjVHdvID0gMiAqIE1hdGguUEkgKiA5NTtcbiAgY29uc3QgW1BlcmNlbnQsIHNldFBlcmNlbnRdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtQZXJjZW50VHdvLCBzZXRQZXJjZW50VHdvXSA9IHVzZVN0YXRlKDEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRQZXJjZW50KHNjb3JlTWFrZXIoY2xlYW5QZXJjZW50YWdlKHBlcmNlbnRhZ2UpKSk7XG4gICAgICBzZXRQZXJjZW50VHdvKHNjb3JlTWFrZXIoY2xlYW5QZXJjZW50YWdlKGF2ZXJhZ2UpKSk7XG4gICAgfSwgMTApO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coXCJvZXJcIiwgUGVyY2VudCwgUGVyY2VudFR3byk7XG5cbiAgY29uc3QgY29sb3VyID0gZ2V0VmFsdWVzKFBlcmNlbnQpO1xuICBjb25zdCBzdHJva2VQY3QgPSAoKDEwMCAtIFBlcmNlbnQpICogY2lyYykgLyAxMDA7XG5cbiAgY29uc3Qgc3Ryb2tlUGN0U2Vjb25kID0gKCgxMDAgLSBQZXJjZW50VHdvKSAqIGNpcmNUd28pIC8gMTAwO1xuICBjb25zdCBwb3NpdGl2ZSA9IChQZXJjZW50IC0gUGVyY2VudFR3bykgKiAxMCA+IDA7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICB7aGVhZGVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1nYXVnZVwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9ezIzMH0gaGVpZ2h0PXsyMzB9PlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAke1wiMTEzIDEwMFwifSlgfT5cbiAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIHI9ezEwMH1cbiAgICAgICAgICAgICAgICBjeD17MTAwfVxuICAgICAgICAgICAgICAgIGN5PXsxMDB9XG4gICAgICAgICAgICAgICAgZmlsbD1cInJnYmEoMCwgMCwgMCwgMC4yNzQpXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IGNvbG91ci5jb2xvdXIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBub0RlbGF5ID8gXCJcIiA6IFwiYWxsIDEuNXNcIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjAuMnJlbVwiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBjaXJjLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogc3Ryb2tlUGN0LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgJHtcIjExMyA5NVwifSlgfT5cbiAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIHI9ezk1fVxuICAgICAgICAgICAgICAgIGN4PXs5NX1cbiAgICAgICAgICAgICAgICBjeT17OTV9XG4gICAgICAgICAgICAgICAgZmlsbD1cInJnYmEoMCwgMCwgMCwgMC4yNzQpXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG5vRGVsYXkgPyBcIlwiIDogXCJhbGwgMS41c1wiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMC4ycmVtXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGNpcmNUd28sXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBzdHJva2VQY3RTZWNvbmQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZ2F1Z2UtaGVhZGVyXCI+e2hlYWRlciB8fCBoZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1nYXVnZS10ZXh0XCIgc3R5bGU9e3sgY29sb3I6IGNvbG91ci5jb2xvdXIgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIDxDb3VudFVwXG4gICAgICAgICAgICAgICAgc3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgZW5kPXtQZXJjZW50ICogMTB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249e2R1cmF0aW9uIHx8IDAuMDAxfVxuICAgICAgICAgICAgICAgIGRlY2ltYWxzPXswfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwb3NpdGl2ZSA/IFwiZ3JlZW5cIiA6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIi01cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwb3NpdGl2ZSAmJiBcIitcIn1cbiAgICAgICAgICAgICAgICB7KChQZXJjZW50IC0gUGVyY2VudFR3bykgKiAxMCkudG9GaXhlZCgwKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNHB4XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb2xvdXIuaGVhZGVyfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgeyFzdWJIZWFkZXIgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2FyICYmIGNhcn0gQXZlcmFnZSBTY29yZSA8YnIgLz5cbiAgICAgICAgICAgICAgICA8Q291bnRVcFxuICAgICAgICAgICAgICAgICAgc3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgICBlbmQ9e1BlcmNlbnRUd28gKiAxMH1cbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbiB8fCAwLjAwMX1cbiAgICAgICAgICAgICAgICAgIGRlY2ltYWxzPXswfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjb3JlLWdhdWdlLXN1YmhlYWRlclwiXG4gICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3ViSGVhZGVyIHx8IHN1YkhlYWRlcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVHYXVnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvdW50VXAiLCJjbGVhblBlcmNlbnRhZ2UiLCJwZXJjZW50YWdlIiwidG9vTG93IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJ0b29IaWdoIiwic2NvcmVNYWtlciIsImdldFZhbHVlcyIsInBlcmNlbnQiLCJzY29yZSIsImhlYWRlciIsImNvbG91ciIsIlNjb3JlR2F1Z2UiLCJkdXJhdGlvbiIsInN1YkhlYWRlciIsIm5vRGVsYXkiLCJhdmVyYWdlIiwiY2FyIiwiY2lyYyIsIk1hdGgiLCJQSSIsImNpcmNUd28iLCJQZXJjZW50Iiwic2V0UGVyY2VudCIsIlBlcmNlbnRUd28iLCJzZXRQZXJjZW50VHdvIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJzdHJva2VQY3QiLCJzdHJva2VQY3RTZWNvbmQiLCJwb3NpdGl2ZSIsImRpdiIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJnIiwidHJhbnNmb3JtIiwiY2lyY2xlIiwiciIsImN4IiwiY3kiLCJmaWxsIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZSIsInRyYW5zaXRpb24iLCJzdHJva2VXaWR0aCIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJzdGFydCIsImVuZCIsImRlY2ltYWxzIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwidG9GaXhlZCIsInAiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ScoreGauge/ScoreGauge.tsx\n");

/***/ })

});