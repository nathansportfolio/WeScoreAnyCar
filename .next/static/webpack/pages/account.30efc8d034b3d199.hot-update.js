"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./pages/account.tsx":
/*!***************************!*\
  !*** ./pages/account.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/lab/LoadingButton */ \"./node_modules/@mui/lab/LoadingButton/index.js\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./context/context.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    inner: {\n        display: \"flex\",\n        marginTop: \"50px\"\n    },\n    h3: {\n        color: \"white\"\n    },\n    button: {\n        backgroundColor: \"#34495e\",\n        color: \"white\",\n        marginLeft: \"10px\"\n    },\n    buttonFb: {\n        backgroundColor: \"#3498db\",\n        color: \"white\",\n        marginLeft: \"10px\"\n    },\n    buttonGl: {\n        backgroundColor: \"#e74c3c\",\n        color: \"white\",\n        marginLeft: \"10px\"\n    },\n    card: {\n        padding: \"10px\",\n        width: \"350px\",\n        backgroundColor: \"white\",\n        marginBottom: \"50px\",\n        borderRadius: \"3px\",\n        maxWidth: \"90%\",\n        textAlign: \"center\",\n        boxShadow: \"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px\"\n    }\n};\nvar Login = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.MainContext).user;\n    var handleSubmit = function() {\n        setLoading(true);\n        setLoading(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mountain-background\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mountain-filter\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inner-page\",\n                    style: style.inner,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: style.card,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Your Account\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: user.displayName\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: user.email\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                variant: \"contained\",\n                                component: \"span\",\n                                sx: {\n                                    width: \"250px\"\n                                },\n                                onClick: function() {\n                                    return handleSubmit();\n                                },\n                                loading: loading,\n                                loadingPosition: \"start\",\n                                disabled: loading,\n                                style: style.button,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this));\n};\n_s(Login, \"TbghK51CEFcOXmaz1H9HwkWTGSw=\");\n_c = Login;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNjb3VudC50c3g/OWE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW90QXBpQ2FsbCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9tb3RDYWxsc1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBMb2FkaW5nQnV0dG9uIGZyb20gXCJAbXVpL2xhYi9Mb2FkaW5nQnV0dG9uXCI7XG5pbXBvcnQgeyBNYWluQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcblxuY29uc3Qgc3R5bGU6IGFueSA9IHtcbiAgaW5uZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBtYXJnaW5Ub3A6IFwiNTBweFwiLFxuICB9LFxuICBoMzogeyBjb2xvcjogXCJ3aGl0ZVwiIH0sXG4gIGJ1dHRvbjogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM0NDk1ZVwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9LFxuICBidXR0b25GYjogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM0OThkYlwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9LFxuICBidXR0b25HbDogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2U3NGMzY1wiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9LFxuICBjYXJkOiB7XG4gICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgd2lkdGg6IFwiMzUwcHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiNTBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBtYXhXaWR0aDogXCI5MCVcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCJyZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHhcIixcbiAgfSxcbn07XG5cbmludGVyZmFjZSBMb2dpblByb3BzIHt9XG5cbmNvbnN0IExvZ2luOiBSZWFjdC5GQzxMb2dpblByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChNYWluQ29udGV4dCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3VudGFpbi1iYWNrZ3JvdW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdW50YWluLWZpbHRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1wYWdlXCIgc3R5bGU9e3N0eWxlLmlubmVyfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNhcmR9PlxuICAgICAgICAgICAgICA8aDE+WW91ciBBY2NvdW50PC9oMT5cbiAgICAgICAgICAgICAgPHA+e3VzZXIuZGlzcGxheU5hbWV9PC9wPlxuICAgICAgICAgICAgICA8cD57dXNlci5lbWFpbH08L3A+XG4gICAgICAgICAgICAgIDxMb2FkaW5nQnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMjUwcHhcIiB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfVxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgbG9hZGluZ1Bvc2l0aW9uPVwic3RhcnRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L0xvYWRpbmdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTW90QXBpQ2FsbChcIkJENjNTT0VcIik7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgdmVoaWNsZTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpIH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkxvYWRpbmdCdXR0b24iLCJNYWluQ29udGV4dCIsInN0eWxlIiwiaW5uZXIiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwiaDMiLCJjb2xvciIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkxlZnQiLCJidXR0b25GYiIsImJ1dHRvbkdsIiwiY2FyZCIsInBhZGRpbmciLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJhZGl1cyIsIm1heFdpZHRoIiwidGV4dEFsaWduIiwiYm94U2hhZG93IiwiTG9naW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXIiLCJoYW5kbGVTdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwidmFyaWFudCIsImNvbXBvbmVudCIsInN4Iiwib25DbGljayIsImxvYWRpbmdQb3NpdGlvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/account.tsx\n");

/***/ })

});