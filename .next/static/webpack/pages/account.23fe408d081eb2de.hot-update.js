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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/lab/LoadingButton */ \"./node_modules/@mui/lab/LoadingButton/index.js\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./context/context.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    inner: {\n        display: \"flex\",\n        marginTop: \"50px\"\n    },\n    h3: {\n        color: \"white\"\n    },\n    button: {\n        backgroundColor: \"#34495e\",\n        color: \"white\",\n        marginLeft: \"10px\"\n    },\n    buttonFb: {\n        backgroundColor: \"#3498db\",\n        color: \"white\",\n        marginLeft: \"10px\"\n    },\n    buttonGl: {\n        backgroundColor: \"#e74c3c\",\n        color: \"white\",\n        marginLeft: \"10px\"\n    },\n    card: {\n        padding: \"10px\",\n        width: \"350px\",\n        backgroundColor: \"white\",\n        marginBottom: \"50px\",\n        borderRadius: \"3px\",\n        maxWidth: \"90%\",\n        textAlign: \"center\",\n        boxShadow: \"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px\"\n    }\n};\nvar Login = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__.MainContext), user = ref.user, loading = ref.loading, setLoading = ref.setLoading, passwordReset = ref.passwordReset;\n    var handleSubmit = function() {\n        setLoading(true);\n        passwordReset();\n        setLoading(false);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mountain-background\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mountain-filter\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inner-page\",\n                    style: style.inner,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: style.card,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Your Account\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: user.displayName\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: user.email\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                variant: \"contained\",\n                                component: \"span\",\n                                sx: {\n                                    width: \"250px\"\n                                },\n                                onClick: function() {\n                                    return handleSubmit();\n                                },\n                                loading: loading,\n                                loadingPosition: \"start\",\n                                disabled: loading,\n                                style: style.button,\n                                children: \"Send Reset Password Eamil\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/account.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this));\n};\n_s(Login, \"6kOUm4g7LXLjFDbvJanuUREuoAg=\");\n_c = Login;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRDWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnQudHN4PzlhNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vdEFwaUNhbGwgfSBmcm9tIFwiLi4vc2VydmljZXMvbW90Q2FsbHNcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTG9hZGluZ0J1dHRvbiBmcm9tIFwiQG11aS9sYWIvTG9hZGluZ0J1dHRvblwiO1xuaW1wb3J0IHsgTWFpbkNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XG5cbmNvbnN0IHN0eWxlOiBhbnkgPSB7XG4gIGlubmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbiAgfSxcbiAgaDM6IHsgY29sb3I6IFwid2hpdGVcIiB9LFxuICBidXR0b246IHsgYmFja2dyb3VuZENvbG9yOiBcIiMzNDQ5NWVcIiwgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfSxcbiAgYnV0dG9uRmI6IHsgYmFja2dyb3VuZENvbG9yOiBcIiMzNDk4ZGJcIiwgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfSxcbiAgYnV0dG9uR2w6IHsgYmFja2dyb3VuZENvbG9yOiBcIiNlNzRjM2NcIiwgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfSxcbiAgY2FyZDoge1xuICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgIHdpZHRoOiBcIjM1MHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjUwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgbWF4V2lkdGg6IFwiOTAlXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGJveFNoYWRvdzpcbiAgICAgIFwicmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4XCIsXG4gIH0sXG59O1xuXG5pbnRlcmZhY2UgTG9naW5Qcm9wcyB7fVxuXG5jb25zdCBMb2dpbjogUmVhY3QuRkM8TG9naW5Qcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlciwgbG9hZGluZywgc2V0TG9hZGluZywgcGFzc3dvcmRSZXNldCB9ID0gdXNlQ29udGV4dChNYWluQ29udGV4dCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgcGFzc3dvcmRSZXNldCgpXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW91bnRhaW4tYmFja2dyb3VuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3VudGFpbi1maWx0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItcGFnZVwiIHN0eWxlPXtzdHlsZS5pbm5lcn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5jYXJkfT5cbiAgICAgICAgICAgICAgPGgxPllvdXIgQWNjb3VudDwvaDE+XG4gICAgICAgICAgICAgIDxwPnt1c2VyLmRpc3BsYXlOYW1lfTwvcD5cbiAgICAgICAgICAgICAgPHA+e3VzZXIuZW1haWx9PC9wPlxuICAgICAgICAgICAgICA8TG9hZGluZ0J1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiBcIjI1MHB4XCIgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoKX1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgIGxvYWRpbmdQb3NpdGlvbj1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2VuZCBSZXNldCBQYXNzd29yZCBFYW1pbFxuICAgICAgICAgICAgICA8L0xvYWRpbmdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTW90QXBpQ2FsbChcIkJENjNTT0VcIik7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgdmVoaWNsZTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpIH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJMb2FkaW5nQnV0dG9uIiwiTWFpbkNvbnRleHQiLCJzdHlsZSIsImlubmVyIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImgzIiwiY29sb3IiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5MZWZ0IiwiYnV0dG9uRmIiLCJidXR0b25HbCIsImNhcmQiLCJwYWRkaW5nIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImJveFNoYWRvdyIsIkxvZ2luIiwidXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGFzc3dvcmRSZXNldCIsImhhbmRsZVN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJ2YXJpYW50IiwiY29tcG9uZW50Iiwic3giLCJvbkNsaWNrIiwibG9hZGluZ1Bvc2l0aW9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/account.tsx\n");

/***/ })

});