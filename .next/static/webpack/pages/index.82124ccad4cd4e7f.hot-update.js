"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ScoreGauge/ScoreGauge.tsx":
/*!**********************************************!*\
  !*** ./components/ScoreGauge/ScoreGauge.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ \"./node_modules/react-countup/build/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar cleanPercentage = function(percentage) {\n    var tooLow = !Number.isFinite(+percentage) || percentage < 0;\n    var tooHigh = percentage > 100;\n    return tooLow ? 0 : tooHigh ? 100 : +percentage;\n};\nvar scoreMaker = function(percentage) {\n    switch(true){\n        case percentage < 0.3:\n            return 100 - percentage * 30 - 0.1;\n        case percentage < 0.6:\n            return 100 - percentage * 35;\n        case percentage < 0.9:\n            return 100 - percentage * 35;\n        case percentage < 1.3:\n            return 100 - percentage * 35;\n        case percentage < 1.6:\n            return 55 - percentage * 2;\n        case percentage < 1.9:\n            return 55 - percentage * 3;\n        case percentage < 2.4:\n            return 55 - percentage * 5;\n        case percentage < 3.2:\n            return 55 - percentage * 7;\n        case percentage < 4:\n            return 55 - percentage * 4;\n        case percentage >= 4 && percentage <= 6:\n            return 30 - percentage;\n        case percentage > 6 && percentage <= 10:\n            return 26 - percentage;\n        case percentage > 10:\n            return 0.4;\n        default:\n            return percentage;\n    }\n};\nvar getValues = function(percent) {\n    var score = percent * 10;\n    switch(true){\n        case score < 438:\n            return {\n                header: \"Poor\",\n                colour: \"#e67e22\"\n            };\n        case score >= 438 && score < 530:\n            return {\n                header: \"Fair\",\n                colour: \"#f1c40f\"\n            };\n        case score >= 530 && score < 670:\n            return {\n                header: \"Good\",\n                colour: \"#7bed9f\"\n            };\n        case score >= 670 && score < 810:\n            return {\n                header: \"Very Good\",\n                colour: \"#2ecc71\"\n            };\n        case score > 810:\n            return {\n                header: \"Excellent\",\n                colour: \"#27ae60\"\n            };\n        default:\n            return {\n                colour: \"#27ae60\",\n                header: \"None\"\n            };\n    }\n};\nvar ScoreGauge = function(param) {\n    var percentage = param.percentage, duration = param.duration, header = param.header, subHeader = param.subHeader, noDelay = param.noDelay, average = param.average, car = param.car;\n    _s();\n    var circ = 2 * Math.PI * 100;\n    var circTwo = 2 * Math.PI * 95;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), Percent = ref[0], setPercent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), PercentTwo = ref1[0], setPercentTwo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setPercent(scoreMaker(cleanPercentage(percentage)));\n            setPercentTwo(scoreMaker(cleanPercentage(average)));\n        }, 10);\n    }, []);\n    var colour = getValues(Percent);\n    var strokePct = (100 - Percent) * circ / 100;\n    var strokePctSecond = (100 - PercentTwo) * circTwo / 100;\n    var positive = (Percent - PercentTwo) * 10 > 0;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            justifyContent: \"center\",\n            display: \"flex\"\n        },\n        children: header && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"score-gauge\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    width: 230,\n                    height: 230,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                            transform: \"rotate(-90 113 100)\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                r: 100,\n                                cx: 100,\n                                cy: 100,\n                                fill: \"rgba(0, 0, 0, 0.274)\",\n                                strokeLinecap: \"round\",\n                                style: {\n                                    stroke: colour.colour,\n                                    transition: noDelay ? \"\" : \"all 1.5s\",\n                                    strokeWidth: \"0.2rem\",\n                                    strokeDasharray: circ,\n                                    strokeDashoffset: strokePct\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                            transform: \"rotate(-90 113 95)\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                r: 95,\n                                cx: 95,\n                                cy: 95,\n                                fill: \"rgba(0, 0, 0, 0.274)\",\n                                strokeLinecap: \"round\",\n                                style: {\n                                    stroke: \"white\",\n                                    transition: noDelay ? \"\" : \"all 1.5s\",\n                                    strokeWidth: \"0.2rem\",\n                                    strokeDasharray: circTwo,\n                                    strokeDashoffset: strokePctSecond\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"score-gauge-header\",\n                    children: header || header\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"score-gauge-text\",\n                    style: {\n                        color: colour.colour\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"flex\",\n                                fontWeight: \"400\"\n                            },\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    start: 0,\n                                    end: Percent * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 143,\n                                    columnNumber: 15\n                                }, _this),\n                                Percent - PercentTwo !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        fontSize: \"12px\",\n                                        color: positive ? \"#1abc9c\" : \"red\",\n                                        marginLeft: \"-5px\",\n                                        fontWeight: \"500\"\n                                    },\n                                    children: [\n                                        positive && \"+\",\n                                        ((Percent - PercentTwo) * 10).toFixed(0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                fontSize: \"14px\",\n                                textAlign: \"center\",\n                                fontWeight: \"300\",\n                                marginTop: 0,\n                                marginBottom: \"4px\"\n                            },\n                            children: colour.header\n                        }, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 163,\n                            columnNumber: 13\n                        }, _this),\n                        !subHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                fontSize: \"12px\",\n                                color: \"white\",\n                                textAlign: \"center\",\n                                fontWeight: \"300\"\n                            },\n                            children: [\n                                car && car,\n                                \" Average Score \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 183,\n                                    columnNumber: 44\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    start: 0,\n                                    end: PercentTwo * 10,\n                                    duration: duration || 0.001,\n                                    decimals: 0\n                                }, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                                    lineNumber: 184,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                            lineNumber: 175,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"score-gauge-subheader\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: subHeader || subHeader\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n                    lineNumber: 194,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n            lineNumber: 104,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/ScoreGauge/ScoreGauge.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, _this));\n};\n_s(ScoreGauge, \"NSTv9PFzbcHrKte8rtBzf9w1MSI=\");\n_c = ScoreGauge;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreGauge);\nvar _c;\n$RefreshReg$(_c, \"ScoreGauge\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njb3JlR2F1Z2UvU2NvcmVHYXVnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDUjs7O0FBRW5DLEdBQUssQ0FBQ0csZUFBZSxHQUFHLFFBQVEsQ0FBUEMsVUFBa0IsRUFBSyxDQUFDO0lBQy9DLEdBQUssQ0FBQ0MsTUFBTSxJQUFJQyxNQUFNLENBQUNDLFFBQVEsRUFBRUgsVUFBVSxLQUFLQSxVQUFVLEdBQUcsQ0FBQztJQUM5RCxHQUFLLENBQUNJLE9BQU8sR0FBR0osVUFBVSxHQUFHLEdBQUc7SUFDaEMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFHRyxPQUFPLEdBQUcsR0FBRyxJQUFJSixVQUFVO0FBQ2pELENBQUM7QUFFRCxHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUFRLENBQVBMLFVBQWtCLEVBQUssQ0FBQztJQUMxQyxNQUFNLENBQUUsSUFBSTtRQUNWLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEdBQUcsR0FBR0EsVUFBVSxHQUFHLEVBQUUsR0FBRyxHQUFHO1FBQ3BDLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEdBQUcsR0FBR0EsVUFBVSxHQUFHLEVBQUU7UUFDOUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsR0FBRztZQUNuQixNQUFNLENBQUMsR0FBRyxHQUFHQSxVQUFVLEdBQUcsRUFBRTtRQUM5QixJQUFJLENBQUNBLFVBQVUsR0FBRyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxHQUFHLEdBQUdBLFVBQVUsR0FBRyxFQUFFO1FBQzlCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEVBQUUsR0FBR0EsVUFBVSxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsR0FBRztZQUNuQixNQUFNLENBQUMsRUFBRSxHQUFHQSxVQUFVLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUNBLFVBQVUsR0FBRyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxFQUFFLEdBQUdBLFVBQVUsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEVBQUUsR0FBR0EsVUFBVSxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsQ0FBQztZQUNqQixNQUFNLENBQUMsRUFBRSxHQUFHQSxVQUFVLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUNBLFVBQVUsSUFBSSxDQUFDLElBQUlBLFVBQVUsSUFBSSxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxFQUFFLEdBQUdBLFVBQVU7UUFDeEIsSUFBSSxDQUFDQSxVQUFVLEdBQUcsQ0FBQyxJQUFJQSxVQUFVLElBQUksRUFBRTtZQUNyQyxNQUFNLENBQUMsRUFBRSxHQUFHQSxVQUFVO1FBQ3hCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEVBQUU7WUFDbEIsTUFBTSxDQUFDLEdBQUc7O1lBRVYsTUFBTSxDQUFDQSxVQUFVOztBQUV2QixDQUFDO0FBRUQsR0FBSyxDQUFDTSxTQUFTLEdBQUcsUUFBUSxDQUFQQyxPQUFlLEVBQUssQ0FBQztJQUN0QyxHQUFLLENBQUNDLEtBQUssR0FBR0QsT0FBTyxHQUFHLEVBQUU7SUFDMUIsTUFBTSxDQUFFLElBQUk7UUFDVixJQUFJLENBQUNDLEtBQUssR0FBRyxHQUFHO1lBQ2QsTUFBTSxDQUFDLENBQUM7Z0JBQUNDLE1BQU0sRUFBRSxDQUFNO2dCQUFFQyxNQUFNLEVBQUUsQ0FBUztZQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDRixLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRztZQUM5QixNQUFNLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQU07Z0JBQUVDLE1BQU0sRUFBRSxDQUFTO1lBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUNGLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssR0FBRyxHQUFHO1lBQzlCLE1BQU0sQ0FBQyxDQUFDO2dCQUFDQyxNQUFNLEVBQUUsQ0FBTTtnQkFBRUMsTUFBTSxFQUFFLENBQVM7WUFBQyxDQUFDO1FBQzlDLElBQUksQ0FBQ0YsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxHQUFHLEdBQUc7WUFDOUIsTUFBTSxDQUFDLENBQUM7Z0JBQ05DLE1BQU0sRUFBRSxDQUFXO2dCQUNuQkMsTUFBTSxFQUFFLENBQVM7WUFDbkIsQ0FBQztRQUNILElBQUksQ0FBQ0YsS0FBSyxHQUFHLEdBQUc7WUFDZCxNQUFNLENBQUMsQ0FBQztnQkFDTkMsTUFBTSxFQUFFLENBQVc7Z0JBQ25CQyxNQUFNLEVBQUUsQ0FBUztZQUNuQixDQUFDOztZQUVELE1BQU0sQ0FBQyxDQUFDO2dCQUFDQSxNQUFNLEVBQUUsQ0FBUztnQkFBRUQsTUFBTSxFQUFFLENBQU07WUFBQyxDQUFDOztBQUVsRCxDQUFDO0FBWUQsR0FBSyxDQUFDRSxVQUFVLEdBQThCLFFBQ3pDLFFBT0MsQ0FBQztRQVBMWCxVQUFVLFNBQVZBLFVBQVUsRUFDVlksUUFBUSxTQUFSQSxRQUFRLEVBQ1JILE1BQU0sU0FBTkEsTUFBTSxFQUNOSSxTQUFTLFNBQVRBLFNBQVMsRUFDVEMsT0FBTyxTQUFQQSxPQUFPLEVBQ1BDLE9BQU8sU0FBUEEsT0FBTyxFQUNQQyxHQUFHLFNBQUhBLEdBQUc7O0lBRUgsR0FBSyxDQUFDQyxJQUFJLEdBQUcsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEVBQUUsR0FBRyxHQUFHO0lBQzlCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxFQUFFLEdBQUcsRUFBRTtJQUNoQyxHQUFLLENBQXlCdkIsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBakN5QixPQUFPLEdBQWdCekIsR0FBVyxLQUF6QjBCLFVBQVUsR0FBSTFCLEdBQVc7SUFDekMsR0FBSyxDQUErQkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBdkMyQixVQUFVLEdBQW1CM0IsSUFBVyxLQUE1QjRCLGFBQWEsR0FBSTVCLElBQVc7SUFFL0NDLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2Y0QixVQUFVLENBQUMsUUFDZixHQURxQixDQUFDO1lBQ2hCSCxVQUFVLENBQUNqQixVQUFVLENBQUNOLGVBQWUsQ0FBQ0MsVUFBVTtZQUNoRHdCLGFBQWEsQ0FBQ25CLFVBQVUsQ0FBQ04sZUFBZSxDQUFDZ0IsT0FBTztRQUNsRCxDQUFDLEVBQUUsRUFBRTtJQUNQLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNMLE1BQU0sR0FBR0osU0FBUyxDQUFDZSxPQUFPO0lBQ2hDLEdBQUssQ0FBQ0ssU0FBUyxJQUFLLEdBQUcsR0FBR0wsT0FBTyxJQUFJSixJQUFJLEdBQUksR0FBRztJQUVoRCxHQUFLLENBQUNVLGVBQWUsSUFBSyxHQUFHLEdBQUdKLFVBQVUsSUFBSUgsT0FBTyxHQUFJLEdBQUc7SUFDNUQsR0FBSyxDQUFDUSxRQUFRLElBQUlQLE9BQU8sR0FBR0UsVUFBVSxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ2hELE1BQU0sNkVBQ0hNLENBQUc7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ0MsY0FBYyxFQUFFLENBQVE7WUFBRUMsT0FBTyxFQUFFLENBQU07UUFBQyxDQUFDO2tCQUN0RHZCLE1BQU0sZ0ZBQ0pvQixDQUFHO1lBQUNJLFNBQVMsRUFBQyxDQUFhOzs0RkFDekJDLENBQUc7b0JBQUNDLEtBQUssRUFBRSxHQUFHO29CQUFFQyxNQUFNLEVBQUUsR0FBRzs7b0dBQ3pCQyxDQUFDOzRCQUFDQyxTQUFTLEVBQUcsQ0FBd0I7a0hBQ3BDQyxDQUFNO2dDQUNMQyxDQUFDLEVBQUUsR0FBRztnQ0FDTkMsRUFBRSxFQUFFLEdBQUc7Z0NBQ1BDLEVBQUUsRUFBRSxHQUFHO2dDQUNQQyxJQUFJLEVBQUMsQ0FBc0I7Z0NBQzNCQyxhQUFhLEVBQUMsQ0FBTztnQ0FDckJkLEtBQUssRUFBRSxDQUFDO29DQUNOZSxNQUFNLEVBQUVuQyxNQUFNLENBQUNBLE1BQU07b0NBQ3JCb0MsVUFBVSxFQUFFaEMsT0FBTyxHQUFHLENBQUUsSUFBRyxDQUFVO29DQUNyQ2lDLFdBQVcsRUFBRSxDQUFRO29DQUNyQkMsZUFBZSxFQUFFL0IsSUFBSTtvQ0FDckJnQyxnQkFBZ0IsRUFBRXZCLFNBQVM7Z0NBQzdCLENBQUM7Ozs7Ozs7Ozs7O29HQUdKVyxDQUFDOzRCQUFDQyxTQUFTLEVBQUcsQ0FBdUI7a0hBQ25DQyxDQUFNO2dDQUNMQyxDQUFDLEVBQUUsRUFBRTtnQ0FDTEMsRUFBRSxFQUFFLEVBQUU7Z0NBQ05DLEVBQUUsRUFBRSxFQUFFO2dDQUNOQyxJQUFJLEVBQUMsQ0FBc0I7Z0NBQzNCQyxhQUFhLEVBQUMsQ0FBTztnQ0FDckJkLEtBQUssRUFBRSxDQUFDO29DQUNOZSxNQUFNLEVBQUUsQ0FBTztvQ0FDZkMsVUFBVSxFQUFFaEMsT0FBTyxHQUFHLENBQUUsSUFBRyxDQUFVO29DQUNyQ2lDLFdBQVcsRUFBRSxDQUFRO29DQUNyQkMsZUFBZSxFQUFFNUIsT0FBTztvQ0FDeEI2QixnQkFBZ0IsRUFBRXRCLGVBQWU7Z0NBQ25DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUlORSxDQUFHO29CQUFDSSxTQUFTLEVBQUMsQ0FBb0I7OEJBQUV4QixNQUFNLElBQUlBLE1BQU07Ozs7Ozs0RkFDcERvQixDQUFHO29CQUFDSSxTQUFTLEVBQUMsQ0FBa0I7b0JBQUNILEtBQUssRUFBRSxDQUFDO3dCQUFDb0IsS0FBSyxFQUFFeEMsTUFBTSxDQUFDQSxNQUFNO29CQUFDLENBQUM7O29HQUM5RG1CLENBQUc7NEJBQUNDLEtBQUssRUFBRSxDQUFDO2dDQUFDRSxPQUFPLEVBQUUsQ0FBTTtnQ0FBRW1CLFVBQVUsRUFBRSxDQUFLOzRCQUFDLENBQUM7O2dDQUMvQyxDQUFHOzRHQUNIckQscURBQU87b0NBQ05zRCxLQUFLLEVBQUUsQ0FBQztvQ0FDUkMsR0FBRyxFQUFFaEMsT0FBTyxHQUFHLEVBQUU7b0NBQ2pCVCxRQUFRLEVBQUVBLFFBQVEsSUFBSSxLQUFLO29DQUMzQjBDLFFBQVEsRUFBRSxDQUFDOzs7Ozs7Z0NBRVpqQyxPQUFPLEdBQUdFLFVBQVUsS0FBSyxDQUFDLGdGQUN4Qk0sQ0FBRztvQ0FDRkMsS0FBSyxFQUFFLENBQUM7d0NBQ055QixRQUFRLEVBQUUsQ0FBTTt3Q0FDaEJMLEtBQUssRUFBRXRCLFFBQVEsR0FBRyxDQUFTLFdBQUcsQ0FBSzt3Q0FDbkM0QixVQUFVLEVBQUUsQ0FBTTt3Q0FDbEJMLFVBQVUsRUFBRSxDQUFLO29DQUNuQixDQUFDOzt3Q0FFQXZCLFFBQVEsSUFBSSxDQUFHOzBDQUNiUCxPQUFPLEdBQUdFLFVBQVUsSUFBSSxFQUFFLEVBQUVrQyxPQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztvR0FJN0NDLENBQUM7NEJBQ0E1QixLQUFLLEVBQUUsQ0FBQztnQ0FDTnlCLFFBQVEsRUFBRSxDQUFNO2dDQUNoQkksU0FBUyxFQUFFLENBQVE7Z0NBQ25CUixVQUFVLEVBQUUsQ0FBSztnQ0FDakJTLFNBQVMsRUFBRSxDQUFDO2dDQUNaQyxZQUFZLEVBQUUsQ0FBSzs0QkFDckIsQ0FBQztzQ0FFQW5ELE1BQU0sQ0FBQ0QsTUFBTTs7Ozs7O3lCQUVkSSxTQUFTLGdGQUNSZ0IsQ0FBRzs0QkFDRkMsS0FBSyxFQUFFLENBQUM7Z0NBQ055QixRQUFRLEVBQUUsQ0FBTTtnQ0FDaEJMLEtBQUssRUFBRSxDQUFPO2dDQUNkUyxTQUFTLEVBQUUsQ0FBUTtnQ0FDbkJSLFVBQVUsRUFBRSxDQUFLOzRCQUNuQixDQUFDOztnQ0FFQW5DLEdBQUcsSUFBSUEsR0FBRztnQ0FBQyxDQUFlOzRHQUFDOEMsQ0FBRTs7Ozs7NEdBQzdCaEUscURBQU87b0NBQ05zRCxLQUFLLEVBQUUsQ0FBQztvQ0FDUkMsR0FBRyxFQUFFOUIsVUFBVSxHQUFHLEVBQUU7b0NBQ3BCWCxRQUFRLEVBQUVBLFFBQVEsSUFBSSxLQUFLO29DQUMzQjBDLFFBQVEsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBTWxCekIsQ0FBRztvQkFDRkksU0FBUyxFQUFDLENBQXVCO29CQUNqQ0gsS0FBSyxFQUFFLENBQUM7d0JBQUM2QixTQUFTLEVBQUUsQ0FBUTtvQkFBQyxDQUFDOzhCQUU3QjlDLFNBQVMsSUFBSUEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkMsQ0FBQztHQWpJS0YsVUFBVTtLQUFWQSxVQUFVO0FBbUloQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2NvcmVHYXVnZS9TY29yZUdhdWdlLnRzeD80MzU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb3VudFVwIGZyb20gXCJyZWFjdC1jb3VudHVwXCI7XG5cbmNvbnN0IGNsZWFuUGVyY2VudGFnZSA9IChwZXJjZW50YWdlOiBudW1iZXIpID0+IHtcbiAgY29uc3QgdG9vTG93ID0gIU51bWJlci5pc0Zpbml0ZSgrcGVyY2VudGFnZSkgfHwgcGVyY2VudGFnZSA8IDA7XG4gIGNvbnN0IHRvb0hpZ2ggPSBwZXJjZW50YWdlID4gMTAwO1xuICByZXR1cm4gdG9vTG93ID8gMCA6IHRvb0hpZ2ggPyAxMDAgOiArcGVyY2VudGFnZTtcbn07XG5cbmNvbnN0IHNjb3JlTWFrZXIgPSAocGVyY2VudGFnZTogbnVtYmVyKSA9PiB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDAuMzpcbiAgICAgIHJldHVybiAxMDAgLSBwZXJjZW50YWdlICogMzAgLSAwLjE7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgMC42OlxuICAgICAgcmV0dXJuIDEwMCAtIHBlcmNlbnRhZ2UgKiAzNTtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPCAwLjk6XG4gICAgICByZXR1cm4gMTAwIC0gcGVyY2VudGFnZSAqIDM1O1xuICAgIGNhc2UgcGVyY2VudGFnZSA8IDEuMzpcbiAgICAgIHJldHVybiAxMDAgLSBwZXJjZW50YWdlICogMzU7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgMS42OlxuICAgICAgcmV0dXJuIDU1IC0gcGVyY2VudGFnZSAqIDI7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgMS45OlxuICAgICAgcmV0dXJuIDU1IC0gcGVyY2VudGFnZSAqIDM7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgMi40OlxuICAgICAgcmV0dXJuIDU1IC0gcGVyY2VudGFnZSAqIDU7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgMy4yOlxuICAgICAgcmV0dXJuIDU1IC0gcGVyY2VudGFnZSAqIDc7XG4gICAgY2FzZSBwZXJjZW50YWdlIDwgNDpcbiAgICAgIHJldHVybiA1NSAtIHBlcmNlbnRhZ2UgKiA0O1xuICAgIGNhc2UgcGVyY2VudGFnZSA+PSA0ICYmIHBlcmNlbnRhZ2UgPD0gNjpcbiAgICAgIHJldHVybiAzMCAtIHBlcmNlbnRhZ2U7XG4gICAgY2FzZSBwZXJjZW50YWdlID4gNiAmJiBwZXJjZW50YWdlIDw9IDEwOlxuICAgICAgcmV0dXJuIDI2IC0gcGVyY2VudGFnZTtcbiAgICBjYXNlIHBlcmNlbnRhZ2UgPiAxMDpcbiAgICAgIHJldHVybiAwLjQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwZXJjZW50YWdlO1xuICB9XG59O1xuXG5jb25zdCBnZXRWYWx1ZXMgPSAocGVyY2VudDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHNjb3JlID0gcGVyY2VudCAqIDEwO1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIHNjb3JlIDwgNDM4OlxuICAgICAgcmV0dXJuIHsgaGVhZGVyOiBcIlBvb3JcIiwgY29sb3VyOiBcIiNlNjdlMjJcIiB9O1xuICAgIGNhc2Ugc2NvcmUgPj0gNDM4ICYmIHNjb3JlIDwgNTMwOlxuICAgICAgcmV0dXJuIHsgaGVhZGVyOiBcIkZhaXJcIiwgY29sb3VyOiBcIiNmMWM0MGZcIiB9O1xuICAgIGNhc2Ugc2NvcmUgPj0gNTMwICYmIHNjb3JlIDwgNjcwOlxuICAgICAgcmV0dXJuIHsgaGVhZGVyOiBcIkdvb2RcIiwgY29sb3VyOiBcIiM3YmVkOWZcIiB9O1xuICAgIGNhc2Ugc2NvcmUgPj0gNjcwICYmIHNjb3JlIDwgODEwOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBcIlZlcnkgR29vZFwiLFxuICAgICAgICBjb2xvdXI6IFwiIzJlY2M3MVwiLFxuICAgICAgfTtcbiAgICBjYXNlIHNjb3JlID4gODEwOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBcIkV4Y2VsbGVudFwiLFxuICAgICAgICBjb2xvdXI6IFwiIzI3YWU2MFwiLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgY29sb3VyOiBcIiMyN2FlNjBcIiwgaGVhZGVyOiBcIk5vbmVcIiB9O1xuICB9XG59O1xuXG5pbnRlcmZhY2UgU2NvcmVHYXVnZVByb3BzIHtcbiAgcGVyY2VudGFnZTogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBoZWFkZXI6IHN0cmluZztcbiAgc3ViSGVhZGVyOiBzdHJpbmc7XG4gIG5vRGVsYXk/OiBib29sZWFuO1xuICBhdmVyYWdlOiBhbnk7XG4gIGNhcj86IHN0cmluZztcbn1cblxuY29uc3QgU2NvcmVHYXVnZTogUmVhY3QuRkM8U2NvcmVHYXVnZVByb3BzPiA9ICh7XG4gIHBlcmNlbnRhZ2UsXG4gIGR1cmF0aW9uLFxuICBoZWFkZXIsXG4gIHN1YkhlYWRlcixcbiAgbm9EZWxheSxcbiAgYXZlcmFnZSxcbiAgY2FyLFxufSkgPT4ge1xuICBjb25zdCBjaXJjID0gMiAqIE1hdGguUEkgKiAxMDA7XG4gIGNvbnN0IGNpcmNUd28gPSAyICogTWF0aC5QSSAqIDk1O1xuICBjb25zdCBbUGVyY2VudCwgc2V0UGVyY2VudF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW1BlcmNlbnRUd28sIHNldFBlcmNlbnRUd29dID0gdXNlU3RhdGUoMSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFBlcmNlbnQoc2NvcmVNYWtlcihjbGVhblBlcmNlbnRhZ2UocGVyY2VudGFnZSkpKTtcbiAgICAgIHNldFBlcmNlbnRUd28oc2NvcmVNYWtlcihjbGVhblBlcmNlbnRhZ2UoYXZlcmFnZSkpKTtcbiAgICB9LCAxMCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjb2xvdXIgPSBnZXRWYWx1ZXMoUGVyY2VudCk7XG4gIGNvbnN0IHN0cm9rZVBjdCA9ICgoMTAwIC0gUGVyY2VudCkgKiBjaXJjKSAvIDEwMDtcblxuICBjb25zdCBzdHJva2VQY3RTZWNvbmQgPSAoKDEwMCAtIFBlcmNlbnRUd28pICogY2lyY1R3bykgLyAxMDA7XG4gIGNvbnN0IHBvc2l0aXZlID0gKFBlcmNlbnQgLSBQZXJjZW50VHdvKSAqIDEwID4gMDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgIHtoZWFkZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWdhdWdlXCI+XG4gICAgICAgICAgPHN2ZyB3aWR0aD17MjMwfSBoZWlnaHQ9ezIzMH0+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09e2Byb3RhdGUoLTkwICR7XCIxMTMgMTAwXCJ9KWB9PlxuICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgcj17MTAwfVxuICAgICAgICAgICAgICAgIGN4PXsxMDB9XG4gICAgICAgICAgICAgICAgY3k9ezEwMH1cbiAgICAgICAgICAgICAgICBmaWxsPVwicmdiYSgwLCAwLCAwLCAwLjI3NClcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogY29sb3VyLmNvbG91cixcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG5vRGVsYXkgPyBcIlwiIDogXCJhbGwgMS41c1wiLFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMC4ycmVtXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGNpcmMsXG4gICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBzdHJva2VQY3QsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAke1wiMTEzIDk1XCJ9KWB9PlxuICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgcj17OTV9XG4gICAgICAgICAgICAgICAgY3g9ezk1fVxuICAgICAgICAgICAgICAgIGN5PXs5NX1cbiAgICAgICAgICAgICAgICBmaWxsPVwicmdiYSgwLCAwLCAwLCAwLjI3NClcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9EZWxheSA/IFwiXCIgOiBcImFsbCAxLjVzXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIwLjJyZW1cIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogY2lyY1R3byxcbiAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHN0cm9rZVBjdFNlY29uZCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1nYXVnZS1oZWFkZXJcIj57aGVhZGVyIHx8IGhlYWRlcn08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWdhdWdlLXRleHRcIiBzdHlsZT17eyBjb2xvcjogY29sb3VyLmNvbG91ciB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgPENvdW50VXBcbiAgICAgICAgICAgICAgICBzdGFydD17MH1cbiAgICAgICAgICAgICAgICBlbmQ9e1BlcmNlbnQgKiAxMH1cbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17ZHVyYXRpb24gfHwgMC4wMDF9XG4gICAgICAgICAgICAgICAgZGVjaW1hbHM9ezB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtQZXJjZW50IC0gUGVyY2VudFR3byAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcG9zaXRpdmUgPyBcIiMxYWJjOWNcIiA6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTVweFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cG9zaXRpdmUgJiYgXCIrXCJ9XG4gICAgICAgICAgICAgICAgICB7KChQZXJjZW50IC0gUGVyY2VudFR3bykgKiAxMCkudG9GaXhlZCgwKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI0cHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvbG91ci5oZWFkZXJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7IXN1YkhlYWRlciAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYXIgJiYgY2FyfSBBdmVyYWdlIFNjb3JlIDxiciAvPlxuICAgICAgICAgICAgICAgIDxDb3VudFVwXG4gICAgICAgICAgICAgICAgICBzdGFydD17MH1cbiAgICAgICAgICAgICAgICAgIGVuZD17UGVyY2VudFR3byAqIDEwfVxuICAgICAgICAgICAgICAgICAgZHVyYXRpb249e2R1cmF0aW9uIHx8IDAuMDAxfVxuICAgICAgICAgICAgICAgICAgZGVjaW1hbHM9ezB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2NvcmUtZ2F1Z2Utc3ViaGVhZGVyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdWJIZWFkZXIgfHwgc3ViSGVhZGVyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY29yZUdhdWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ291bnRVcCIsImNsZWFuUGVyY2VudGFnZSIsInBlcmNlbnRhZ2UiLCJ0b29Mb3ciLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInRvb0hpZ2giLCJzY29yZU1ha2VyIiwiZ2V0VmFsdWVzIiwicGVyY2VudCIsInNjb3JlIiwiaGVhZGVyIiwiY29sb3VyIiwiU2NvcmVHYXVnZSIsImR1cmF0aW9uIiwic3ViSGVhZGVyIiwibm9EZWxheSIsImF2ZXJhZ2UiLCJjYXIiLCJjaXJjIiwiTWF0aCIsIlBJIiwiY2lyY1R3byIsIlBlcmNlbnQiLCJzZXRQZXJjZW50IiwiUGVyY2VudFR3byIsInNldFBlcmNlbnRUd28iLCJzZXRUaW1lb3V0Iiwic3Ryb2tlUGN0Iiwic3Ryb2tlUGN0U2Vjb25kIiwicG9zaXRpdmUiLCJkaXYiLCJzdHlsZSIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0IiwiZyIsInRyYW5zZm9ybSIsImNpcmNsZSIsInIiLCJjeCIsImN5IiwiZmlsbCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2UiLCJ0cmFuc2l0aW9uIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0IiwiY29sb3IiLCJmb250V2VpZ2h0Iiwic3RhcnQiLCJlbmQiLCJkZWNpbWFscyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsInRvRml4ZWQiLCJwIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ScoreGauge/ScoreGauge.tsx\n");

/***/ })

});