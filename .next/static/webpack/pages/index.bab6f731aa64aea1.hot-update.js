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
  /***/ "./pages/index.tsx":
    /*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ "./node_modules/next/dist/compiled/regenerator-runtime/runtime.js");\n/* harmony import */ var _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/lab/LoadingButton */ "./node_modules/@mui/lab/LoadingButton/index.js");\n/* harmony import */ var _mui_icons_material_DoubleArrow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/DoubleArrow */ "./node_modules/@mui/icons-material/DoubleArrow.js");\n/* harmony import */ var _components_ScoreGauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ScoreGauge */ "./components/ScoreGauge/index.ts");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/context */ "./context/context.tsx");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner/index.ts");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    inner: {\n        display: "inherit",\n        marginTop: "50px"\n    },\n    h3: {\n        color: "white"\n    },\n    button: {\n        backgroundColor: "white",\n        color: "black",\n        marginLeft: "10px",\n        maxHeight: "60px"\n    }\n};\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_5__.MainContext), setError = ref.setError, error = ref.error, setLoading = ref.setLoading, loading = ref.loading;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""), registration = ref1[0], setRegistration = ref1[1];\n    var HandleSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setError(false);\n                        setLoading(true);\n                        router.push("/score/".concat(registration));\n                    case 3:\n                    case "end":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function HandleSubmit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n        className: "mountain-background",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {\n                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                lineNumber: 39,\n                columnNumber: 19\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                className: "page-container",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                    className: "inner-page",\n                    style: style.inner,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ScoreGauge__WEBPACK_IMPORTED_MODULE_3__["default"], {\n                            duration: 0,\n                            percentage: 0.6,\n                            header: "Get a score",\n                            subHeader: "Based on the health of your car",\n                            noDelay: true,\n                            average: 0.3\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {\n                            style: {\n                                color: "white",\n                                textAlign: "center",\n                                marginBottom: "100px"\n                            },\n                            children: [\n                                "It\'s like a credit score...",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                                    lineNumber: 57,\n                                    columnNumber: 40\n                                }, _this),\n                                " but for your car"\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                            style: {\n                                display: "flex",\n                                justifyContent: "center"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {\n                                    id: "outlined-basic",\n                                    label: "Enter Registration",\n                                    variant: "filled",\n                                    sx: {\n                                        backgroundColor: "rgb(0.2, 0.3, 2, 0.6)",\n                                        borderRadius: "5px"\n                                    },\n                                    value: registration,\n                                    onChange: function(e) {\n                                        return setRegistration(e.target.value.toUpperCase());\n                                    },\n                                    helperText: error ? "No MOT Records Found to score" : "",\n                                    error: error\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8__["default"], {\n                                    endIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_DoubleArrow__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, void 0, void 0),\n                                    variant: "contained",\n                                    component: "span",\n                                    onClick: function() {\n                                        return HandleSubmit();\n                                    },\n                                    disabled: !registration,\n                                    style: style.button,\n                                    children: "Get Score"\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, "pFswNFBGZXcIPa6QD6HsCkI0k5Q=", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__["default"] = (Home);\nvar _c;\n$RefreshReg$(_c, "Home");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7d0NBQUt0QixNQUFNLENBQU5BLGVBQWUsQ0FBQ3NCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUNJLFdBQVc7O29DQUMzREMsVUFBVSxFQUFFOUIsS0FBSyxHQUFHLENBQStCLGlDQUFHLENBQUU7b0NBQ3hEQSxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs0R0FFYm5CLDhEQUFhO29DQUNaa0QsT0FBTyw4RUFBR2pELHVFQUFlO29DQUN6QndDLE9BQU8sRUFBQyxDQUFXO29DQUNuQlUsU0FBUyxFQUFDLENBQU07b0NBQ2hCQyxPQUFPLEVBQUUsUUFBUTt3Q0FBRjNCLE1BQU0sQ0FBTkEsWUFBWTs7b0NBQzNCNEIsUUFBUSxHQUFHOUIsWUFBWTtvQ0FDdkJoQixLQUFLLEVBQUVBLEtBQUssQ0FBQ00sTUFBTTs4Q0FDcEIsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixDQUFDO0dBOURLSSxJQUFJOztRQUVPYixrREFBUzs7O0tBRnBCYSxJQUFJO0FBZ0VWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkaW5nQnV0dG9uIGZyb20gXCJAbXVpL2xhYi9Mb2FkaW5nQnV0dG9uXCI7XG5pbXBvcnQgRG91YmxlQXJyb3dJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0RvdWJsZUFycm93XCI7XG5pbXBvcnQgU2NvcmVHYXVnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TY29yZUdhdWdlXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBNYWluQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcblxuY29uc3Qgc3R5bGU6IGFueSA9IHtcbiAgaW5uZXI6IHtcbiAgICBkaXNwbGF5OiBcImluaGVyaXRcIixcbiAgICBtYXJnaW5Ub3A6IFwiNTBweFwiLFxuICB9LFxuICBoMzogeyBjb2xvcjogXCJ3aGl0ZVwiIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXG4gICAgbWF4SGVpZ2h0OiBcIjYwcHhcIixcbiAgfSxcbn07XG5cbmludGVyZmFjZSBIb21lUHJvcHMge31cblxuY29uc3QgSG9tZTogUmVhY3QuRkM8SG9tZVByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgeyBzZXRFcnJvciwgZXJyb3IsIHNldExvYWRpbmcsIGxvYWRpbmcgfSA9IHVzZUNvbnRleHQoTWFpbkNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3JlZ2lzdHJhdGlvbiwgc2V0UmVnaXN0cmF0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IEhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICByb3V0ZXIucHVzaChgL3Njb3JlLyR7cmVnaXN0cmF0aW9ufWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3VudGFpbi1iYWNrZ3JvdW5kXCI+XG4gICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1wYWdlXCIgc3R5bGU9e3N0eWxlLmlubmVyfT5cbiAgICAgICAgICA8U2NvcmVHYXVnZVxuICAgICAgICAgICAgZHVyYXRpb249ezB9XG4gICAgICAgICAgICBwZXJjZW50YWdlPXswLjZ9XG4gICAgICAgICAgICBoZWFkZXI9XCJHZXQgYSBzY29yZVwiXG4gICAgICAgICAgICBzdWJIZWFkZXI9XCJCYXNlZCBvbiB0aGUgaGVhbHRoIG9mIHlvdXIgY2FyXCJcbiAgICAgICAgICAgIG5vRGVsYXk9e3RydWV9XG4gICAgICAgICAgICBhdmVyYWdlPXswLjN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDNcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEl0J3MgbGlrZSBhIGNyZWRpdCBzY29yZS4uLjxicj48L2JyPiBidXQgZm9yIHlvdXIgY2FyXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW50ZXIgUmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigwLjIsIDAuMywgMiwgMC42KVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFsdWU9e3JlZ2lzdHJhdGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWdpc3RyYXRpb24oZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKSl9XG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9yID8gXCJObyBNT1QgUmVjb3JkcyBGb3VuZCB0byBzY29yZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMb2FkaW5nQnV0dG9uXG4gICAgICAgICAgICAgIGVuZEljb249ezxEb3VibGVBcnJvd0ljb24gLz59XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gSGFuZGxlU3VibWl0KCl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshcmVnaXN0cmF0aW9ufVxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHZXQgU2NvcmVcbiAgICAgICAgICAgIDwvTG9hZGluZ0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiTG9hZGluZ0J1dHRvbiIsIkRvdWJsZUFycm93SWNvbiIsIlNjb3JlR2F1Z2UiLCJUZXh0RmllbGQiLCJ1c2VSb3V0ZXIiLCJNYWluQ29udGV4dCIsIlNwaW5uZXIiLCJzdHlsZSIsImlubmVyIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImgzIiwiY29sb3IiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5MZWZ0IiwibWF4SGVpZ2h0IiwiSG9tZSIsInNldEVycm9yIiwiZXJyb3IiLCJzZXRMb2FkaW5nIiwibG9hZGluZyIsInJvdXRlciIsInJlZ2lzdHJhdGlvbiIsInNldFJlZ2lzdHJhdGlvbiIsIkhhbmRsZVN1Ym1pdCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJkdXJhdGlvbiIsInBlcmNlbnRhZ2UiLCJoZWFkZXIiLCJzdWJIZWFkZXIiLCJub0RlbGF5IiwiYXZlcmFnZSIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImJyIiwianVzdGlmeUNvbnRlbnQiLCJpZCIsImxhYmVsIiwidmFyaWFudCIsInN4IiwiYm9yZGVyUmFkaXVzIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0b1VwcGVyQ2FzZSIsImhlbHBlclRleHQiLCJlbmRJY29uIiwiY29tcG9uZW50Iiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n'
      );

      /***/
    },
});
