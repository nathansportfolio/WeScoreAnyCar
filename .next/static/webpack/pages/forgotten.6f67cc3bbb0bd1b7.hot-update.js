"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forgotten", {
  /***/ "./pages/forgotten.tsx":
    /*!*****************************!*\
  !*** ./pages/forgotten.tsx ***!
  \*****************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ "./node_modules/next/dist/compiled/regenerator-runtime/runtime.js");\n/* harmony import */ var _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/lab/LoadingButton */ "./node_modules/@mui/lab/LoadingButton/index.js");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/context */ "./context/context.tsx");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    inner: {\n        display: "flex",\n        marginTop: "50px"\n    },\n    h3: {\n        color: "white"\n    },\n    button: {\n        backgroundColor: "#34495e",\n        color: "white",\n        marginLeft: "10px"\n    },\n    buttonFb: {\n        backgroundColor: "#3498db",\n        color: "white",\n        marginLeft: "10px"\n    },\n    buttonGl: {\n        backgroundColor: "#e74c3c",\n        color: "white",\n        marginLeft: "10px"\n    },\n    card: {\n        padding: "10px",\n        width: "350px",\n        backgroundColor: "white",\n        marginBottom: "50px",\n        borderRadius: "3px",\n        maxWidth: "90%",\n        textAlign: "center",\n        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"\n    }\n};\nvar Login = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), errors = ref2[0], setErrors = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__.MainContext), login = ref3.login, loading = ref3.loading, googleLogin = ref3.googleLogin;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var error;\n            return _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setErrors([]);\n                        _ctx.next = 3;\n                        return login(email, password);\n                    case 3:\n                        error = _ctx.sent;\n                        if (!error) router.push("/");\n                        else setErrors([\n                            error\n                        ]);\n                    case 5:\n                    case "end":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleGoogle = function() {\n        var _ref = _asyncToGenerator(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var error;\n            return _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setErrors([]);\n                        _ctx.next = 3;\n                        return googleLogin();\n                    case 3:\n                        error = _ctx.sent;\n                        if (!error) router.push("/");\n                        else setErrors([\n                            error\n                        ]);\n                    case 5:\n                    case "end":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleGoogle() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n        className: "mountain-background",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n            className: "mountain-filter",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                className: "page-container",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                    className: "inner-page",\n                    style: style.inner,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                        style: style.card,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {\n                                children: "Forgotten Password"\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/forgotten.tsx",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, _this),\n                            errors.length > 0 && errors.map(function(error) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {\n                                    style: {\n                                        color: "red"\n                                    },\n                                    children: error\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/forgotten.tsx",\n                                    lineNumber: 64,\n                                    columnNumber: 39\n                                }, _this1);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                                label: "Email",\n                                type: "email",\n                                variant: "filled",\n                                color: "success",\n                                sx: {\n                                    color: "white",\n                                    width: "250px"\n                                },\n                                value: email,\n                                onChange: function(e) {\n                                    return setEmail(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/forgotten.tsx",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_6__["default"], {\n                                variant: "contained",\n                                component: "span",\n                                sx: {\n                                    width: "250px",\n                                    padding: \'5px\'\n                                },\n                                onClick: function() {\n                                    return handleSubmit();\n                                },\n                                loading: loading,\n                                loadingPosition: "start",\n                                disabled: loading,\n                                style: style.button,\n                                children: "Send Reset Link"\n                            }, void 0, false, {\n                                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/forgotten.tsx",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/forgotten.tsx",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/forgotten.tsx",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/forgotten.tsx",\n                lineNumber: 59,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/forgotten.tsx",\n            lineNumber: 58,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/forgotten.tsx",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this));\n};\n_s(Login, "vC87xYGSMY5H21aNXAiwHi02pDU=", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Login;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__["default"] = (Login);\nvar _c;\n$RefreshReg$(_c, "Login");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBTztvQ0FBRUQsT0FBTyxFQUFFLENBQUs7Z0NBQUMsQ0FBQztnQ0FDdENxQyxPQUFPLEVBQUUsUUFBUTtvQ0FBRm5CLE1BQU0sQ0FBTkEsWUFBWTs7Z0NBQzNCSCxPQUFPLEVBQUVBLE9BQU87Z0NBQ2hCdUIsZUFBZSxFQUFDLENBQU87Z0NBQ3ZCQyxRQUFRLEVBQUV4QixPQUFPO2dDQUNqQjNCLEtBQUssRUFBRUEsS0FBSyxDQUFDTSxNQUFNOzBDQUNwQixDQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kLENBQUM7R0ExREthLEtBQUs7O1FBTU1wQixrREFBUzs7O0tBTnBCb0IsS0FBSzs7QUFrRVgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3Jnb3R0ZW4udHN4P2Q2NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vdEFwaUNhbGwgfSBmcm9tIFwiLi4vc2VydmljZXMvbW90Q2FsbHNcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTG9hZGluZ0J1dHRvbiBmcm9tIFwiQG11aS9sYWIvTG9hZGluZ0J1dHRvblwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCB7IE1haW5Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IEdvb2dsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR29vZ2xlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3Qgc3R5bGU6IGFueSA9IHtcbiAgaW5uZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBtYXJnaW5Ub3A6IFwiNTBweFwiLFxuICB9LFxuICBoMzogeyBjb2xvcjogXCJ3aGl0ZVwiIH0sXG4gIGJ1dHRvbjogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM0NDk1ZVwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9LFxuICBidXR0b25GYjogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM0OThkYlwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9LFxuICBidXR0b25HbDogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2U3NGMzY1wiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9LFxuICBjYXJkOiB7XG4gICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgd2lkdGg6IFwiMzUwcHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiNTBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICBtYXhXaWR0aDogXCI5MCVcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgYm94U2hhZG93OlxuICAgICAgXCJyZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHhcIixcbiAgfSxcbn07XG5cbmludGVyZmFjZSBMb2dpblByb3BzIHt9XG5cbmNvbnN0IExvZ2luOiBSZWFjdC5GQzxMb2dpblByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlPEFycmF5PHN0cmluZz4+KFtdKTtcblxuICBjb25zdCB7IGxvZ2luLCBsb2FkaW5nLCBnb29nbGVMb2dpbiB9ID0gdXNlQ29udGV4dChNYWluQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRFcnJvcnMoW10pO1xuICAgIGNvbnN0IGVycm9yID0gYXdhaXQgbG9naW4oZW1haWwsIHBhc3N3b3JkKTtcbiAgICBpZiAoIWVycm9yKSByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgZWxzZSBzZXRFcnJvcnMoW2Vycm9yXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlR29vZ2xlID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldEVycm9ycyhbXSk7XG4gICAgY29uc3QgZXJyb3IgPSBhd2FpdCBnb29nbGVMb2dpbigpO1xuICAgIGlmICghZXJyb3IpIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICBlbHNlIHNldEVycm9ycyhbZXJyb3JdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW91bnRhaW4tYmFja2dyb3VuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3VudGFpbi1maWx0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItcGFnZVwiIHN0eWxlPXtzdHlsZS5pbm5lcn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5jYXJkfT5cbiAgICAgICAgICAgICAgPGgxPkZvcmdvdHRlbiBQYXNzd29yZDwvaDE+XG4gICAgICAgICAgICAgIHtlcnJvcnMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIGVycm9ycy5tYXAoKGVycm9yKSA9PiA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57ZXJyb3J9PC9wPil9XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgc3g9e3sgY29sb3I6IFwid2hpdGVcIiwgd2lkdGg6IFwiMjUwcHhcIiB9fVxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPExvYWRpbmdCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogXCIyNTBweFwiLCBwYWRkaW5nOiAnNXB4JyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfVxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgbG9hZGluZ1Bvc2l0aW9uPVwic3RhcnRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZW5kIFJlc2V0IExpbmtcbiAgICAgICAgICAgICAgPC9Mb2FkaW5nQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IE1vdEFwaUNhbGwoXCJCRDYzU09FXCIpO1xuXG4gIHJldHVybiB7IHByb3BzOiB7IHZlaGljbGU6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJMb2FkaW5nQnV0dG9uIiwiVGV4dEZpZWxkIiwiTWFpbkNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJzdHlsZSIsImlubmVyIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImgzIiwiY29sb3IiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5MZWZ0IiwiYnV0dG9uRmIiLCJidXR0b25HbCIsImNhcmQiLCJwYWRkaW5nIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImJveFNoYWRvdyIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJsb2dpbiIsImxvYWRpbmciLCJnb29nbGVMb2dpbiIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImVycm9yIiwicHVzaCIsImhhbmRsZUdvb2dsZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGVuZ3RoIiwibWFwIiwicCIsImxhYmVsIiwidHlwZSIsInZhcmlhbnQiLCJzeCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY29tcG9uZW50Iiwib25DbGljayIsImxvYWRpbmdQb3NpdGlvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/forgotten.tsx\n'
      );

      /***/
    },
});
