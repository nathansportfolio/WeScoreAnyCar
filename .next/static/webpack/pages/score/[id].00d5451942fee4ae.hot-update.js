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

/***/ "./components/Accordion/Accordion.tsx":
/*!********************************************!*\
  !*** ./components/Accordion/Accordion.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Accordion */ \"./node_modules/@mui/material/Accordion/index.js\");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AccordionSummary */ \"./node_modules/@mui/material/AccordionSummary/index.js\");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/AccordionDetails */ \"./node_modules/@mui/material/AccordionDetails/index.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar MotAccordion = function(param) {\n    var mots = param.mots;\n    var _this1 = _this;\n    console.log('res', mots);\n    return mots.map(function(mot, index) {\n        var _this2 = _this1;\n        var completedDate = mot.completedDate, motTestNumber = mot.motTestNumber, odometerUnit = mot.odometerUnit, odometerValue = mot.odometerValue, rfrAndComments = mot.rfrAndComments, testResult = mot.testResult;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            disableGutters: true,\n            style: {\n                backgroundColor: \"\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, void 0, void 0),\n                    \"aria-controls\": \"panel1a-content\",\n                    id: \"panel1a-header\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            display: \"flex\",\n                            justifyContent: \"space-between\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                children: [\n                                    completedDate,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Accordion/Accordion.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this1),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                style: {\n                                    color: testResult.toLowerCase() === \"passed\" ? \"green\" : \"red\"\n                                },\n                                children: testResult\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Accordion/Accordion.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, _this1),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Accordion/Accordion.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Accordion/Accordion.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: rfrAndComments.length > 0 && rfrAndComments.map(function(comment) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    children: [\n                                        comment.type,\n                                        comment.text\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Accordion/Accordion.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 14\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    children: [\n                                        \"Mileage: \",\n                                        odometerValue,\n                                        \" \",\n                                        odometerUnit,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Accordion/Accordion.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 11\n                                }, _this2),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    children: [\n                                        \"Mot Test: \",\n                                        motTestNumber\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Accordion/Accordion.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 11\n                                }, _this2)\n                            ]\n                        }, void 0, true);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Accordion/Accordion.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, index, true, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Accordion/Accordion.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this1));\n    });\n};\n_c = MotAccordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MotAccordion);\nvar _c;\n$RefreshReg$(_c, \"MotAccordion\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjY29yZGlvbi9BY2NvcmRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFDYztBQUNBO0FBQ0Y7QUFDVjs7QUFNakQsR0FBSyxDQUFDSyxZQUFZLEdBQWdDLFFBQVEsUUFBTSxDQUFDO1FBQVpDLElBQUksU0FBSkEsSUFBSTs7SUFDdkRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUssTUFBRUYsSUFBSTtJQUN2QixNQUFNLENBQUNBLElBQUksQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBUSxFQUFFQyxLQUFhLEVBQUssQ0FBQzs7UUFDNUMsR0FBSyxDQUNIQyxhQUFhLEdBTVhGLEdBQUcsQ0FOTEUsYUFBYSxFQUNiQyxhQUFhLEdBS1hILEdBQUcsQ0FMTEcsYUFBYSxFQUNiQyxZQUFZLEdBSVZKLEdBQUcsQ0FKTEksWUFBWSxFQUNaQyxhQUFhLEdBR1hMLEdBQUcsQ0FITEssYUFBYSxFQUNiQyxjQUFjLEdBRVpOLEdBQUcsQ0FGTE0sY0FBYyxFQUNkQyxVQUFVLEdBQ1JQLEdBQUcsQ0FETE8sVUFBVTtRQUVaLE1BQU0sNkVBQ0hqQiwrREFBUztZQUNSa0IsY0FBYyxFQUFFLElBQUk7WUFDcEJDLEtBQUssRUFBRSxDQUFDO2dCQUFDQyxlQUFlLEVBQUUsQ0FBRTtZQUFDLENBQUM7OzRGQUc3Qm5CLHNFQUFnQjtvQkFDZm9CLFVBQVUsOEVBQUdsQixzRUFBYztvQkFDM0JtQixDQUFhLGdCQUFDLENBQWlCO29CQUMvQkMsRUFBRSxFQUFDLENBQWdCOzBHQUVsQkMsQ0FBRzt3QkFDRkwsS0FBSyxFQUFFLENBQUM7NEJBQ05NLEtBQUssRUFBRSxDQUFNOzRCQUNiQyxPQUFPLEVBQUUsQ0FBTTs0QkFDZkMsY0FBYyxFQUFFLENBQWU7d0JBQ2pDLENBQUM7O3dHQUVBdkIsZ0VBQVU7O29DQUFFUSxhQUFhO29DQUFDLENBQUM7Ozs7Ozs7NEJBQWMsQ0FBRzt3R0FDNUNSLGdFQUFVO2dDQUNUZSxLQUFLLEVBQUUsQ0FBQztvQ0FDTlMsS0FBSyxFQUFFWCxVQUFVLENBQUNZLFdBQVcsT0FBTyxDQUFRLFVBQUcsQ0FBTyxTQUFHLENBQUs7Z0NBQ2hFLENBQUM7MENBRUFaLFVBQVU7Ozs7Ozs0QkFDQyxDQUFHOzs7Ozs7Ozs7Ozs7NEZBR3BCZixzRUFBZ0I7OEJBQ2JjLGNBQWMsQ0FBQ2MsTUFBTSxHQUFHLENBQUMsSUFBS2QsY0FBYyxDQUFDUCxHQUFHLENBQUMsUUFBUSxDQUFQc0IsT0FBVztzQ0FDN0QsTUFDVCxDQUFDOzs0R0FBVTNCLGdFQUFVOzt3Q0FDUjJCLE9BQU8sQ0FBQ0MsSUFBSTt3Q0FDWkQsT0FBTyxDQUFDRSxJQUFJOzs7Ozs7OzRHQUVqQjdCLGdFQUFVOzt3Q0FBQyxDQUNEO3dDQUFDVyxhQUFhO3dDQUFDLENBQUM7d0NBQUNELFlBQVk7d0NBQUUsQ0FBRzs7Ozs7Ozs0R0FFNUNWLGdFQUFVOzt3Q0FBQyxDQUFVO3dDQUFDUyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O1dBbENqQ0YsS0FBSzs7Ozs7SUF5Q2hCLENBQUM7QUFDSCxDQUFDO0tBekRLTixZQUFZO0FBMkRsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWNjb3JkaW9uL0FjY29yZGlvbi50c3g/YzY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0FjY29yZGlvblwiO1xuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uU3VtbWFyeVwiO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uRGV0YWlsc1wiO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcblxuaW50ZXJmYWNlIE1vdEFjY29yZGlvblByb3BzIHtcbiAgbW90czogYW55O1xufVxuXG5jb25zdCBNb3RBY2NvcmRpb246IFJlYWN0LkZDPE1vdEFjY29yZGlvblByb3BzPiA9ICh7IG1vdHMgfSkgPT4ge1xuICBjb25zb2xlLmxvZygncmVzJywgbW90cylcbiAgcmV0dXJuIG1vdHMubWFwKChtb3Q6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbXBsZXRlZERhdGUsXG4gICAgICBtb3RUZXN0TnVtYmVyLFxuICAgICAgb2RvbWV0ZXJVbml0LFxuICAgICAgb2RvbWV0ZXJWYWx1ZSxcbiAgICAgIHJmckFuZENvbW1lbnRzLFxuICAgICAgdGVzdFJlc3VsdCxcbiAgICB9ID0gbW90O1xuICAgIHJldHVybiAoXG4gICAgICA8QWNjb3JkaW9uXG4gICAgICAgIGRpc2FibGVHdXR0ZXJzPXt0cnVlfVxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiXCIgfX1cbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgID5cbiAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XG4gICAgICAgICAgYXJpYS1jb250cm9scz1cInBhbmVsMWEtY29udGVudFwiXG4gICAgICAgICAgaWQ9XCJwYW5lbDFhLWhlYWRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pntjb21wbGV0ZWREYXRlfSA8L1R5cG9ncmFwaHk+e1wiIFwifVxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogdGVzdFJlc3VsdC50b0xvd2VyQ2FzZSgpID09PSBcInBhc3NlZFwiID8gXCJncmVlblwiIDogXCJyZWRcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Rlc3RSZXN1bHR9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+e1wiIFwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgIHsocmZyQW5kQ29tbWVudHMubGVuZ3RoID4gMCkgJiYgcmZyQW5kQ29tbWVudHMubWFwKChjb21tZW50OmFueSkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgIHtjb21tZW50LnR5cGV9XG4gICAgICAgICAgICAgICB7Y29tbWVudC50ZXh0fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgIE1pbGVhZ2U6IHtvZG9tZXRlclZhbHVlfSB7b2RvbWV0ZXJVbml0fXtcIiBcIn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHk+TW90IFRlc3Q6IHttb3RUZXN0TnVtYmVyfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgXG4gICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgIDwvQWNjb3JkaW9uPlxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW90QWNjb3JkaW9uO1xuIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsIkFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25EZXRhaWxzIiwiRXhwYW5kTW9yZUljb24iLCJUeXBvZ3JhcGh5IiwiTW90QWNjb3JkaW9uIiwibW90cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtb3QiLCJpbmRleCIsImNvbXBsZXRlZERhdGUiLCJtb3RUZXN0TnVtYmVyIiwib2RvbWV0ZXJVbml0Iiwib2RvbWV0ZXJWYWx1ZSIsInJmckFuZENvbW1lbnRzIiwidGVzdFJlc3VsdCIsImRpc2FibGVHdXR0ZXJzIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJleHBhbmRJY29uIiwiYXJpYS1jb250cm9scyIsImlkIiwiZGl2Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiY29tbWVudCIsInR5cGUiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Accordion/Accordion.tsx\n");

/***/ })

});