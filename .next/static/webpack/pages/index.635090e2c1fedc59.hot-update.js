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
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ "./node_modules/next/dist/compiled/regenerator-runtime/runtime.js");\n/* harmony import */ var _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/lab/LoadingButton */ "./node_modules/@mui/lab/LoadingButton/index.js");\n/* harmony import */ var _mui_icons_material_DoubleArrow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/DoubleArrow */ "./node_modules/@mui/icons-material/DoubleArrow.js");\n/* harmony import */ var _components_ScoreGauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ScoreGauge */ "./components/ScoreGauge/index.ts");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/context */ "./context/context.tsx");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner/index.ts");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    inner: {\n        display: "inherit",\n        marginTop: "50px"\n    },\n    button: {\n        backgroundColor: "white",\n        color: "black",\n        marginLeft: "10px",\n        maxHeight: "60px"\n    }\n};\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_5__.MainContext), setError = ref.setError, error = ref.error, setLoading = ref.setLoading, loading = ref.loading;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""), registration = ref1[0], setRegistration = ref1[1];\n    var HandleSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setError(false);\n                        setLoading(true);\n                        router.push("/score/".concat(registration));\n                    case 3:\n                    case "end":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function HandleSubmit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n        className: "mountain-background",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {\n                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                lineNumber: 38,\n                columnNumber: 19\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                className: "page-container",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                    className: "inner-page",\n                    style: style.inner,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ScoreGauge__WEBPACK_IMPORTED_MODULE_3__["default"], {\n                            duration: 0,\n                            percentage: 0.2,\n                            header: "Get a score",\n                            subHeader: "",\n                            noDelay: true,\n                            average: 1.2\n                        }, void 0, false, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {\n                            className: "text-white text-centered",\n                            style: {\n                                marginBottom: "100px"\n                            },\n                            children: [\n                                "It\'s like a credit score...",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                                    lineNumber: 55,\n                                    columnNumber: 40\n                                }, _this),\n                                " but for your car"\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                            style: {\n                                display: "flex",\n                                justifyContent: "center"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {\n                                    id: "outlined-basic",\n                                    label: "Enter Registration",\n                                    variant: "filled",\n                                    sx: {\n                                        backgroundColor: "rgb(0.2, 0.3, 2, 0.6)",\n                                        borderRadius: "5px"\n                                    },\n                                    value: registration,\n                                    onChange: function(e) {\n                                        return setRegistration(e.target.value.toUpperCase());\n                                    },\n                                    helperText: error ? "No MOT Records Found to score" : "",\n                                    error: error\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8__["default"], {\n                                    endIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_DoubleArrow__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, void 0, void 0),\n                                    variant: "contained",\n                                    component: "span",\n                                    onClick: function() {\n                                        return HandleSubmit();\n                                    },\n                                    disabled: !registration,\n                                    style: style.button,\n                                    children: "Get Score"\n                                }, void 0, false, {\n                                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/index.tsx",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, "pFswNFBGZXcIPa6QD6HsCkI0k5Q=", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__["default"] = (Home);\nvar _c;\n$RefreshReg$(_c, "Home");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ007QUFDVztBQUNaO0FBQ0Y7QUFDUjtBQUNTO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLEdBQUssQ0FBQ1MsS0FBSyxHQUFRLENBQUM7SUFDbEJDLEtBQUssRUFBRSxDQUFDO1FBQ05DLE9BQU8sRUFBRSxDQUFTO1FBQ2xCQyxTQUFTLEVBQUUsQ0FBTTtJQUNuQixDQUFDO0lBQ0RDLE1BQU0sRUFBRSxDQUFDO1FBQ1BDLGVBQWUsRUFBRSxDQUFPO1FBQ3hCQyxLQUFLLEVBQUUsQ0FBTztRQUNkQyxVQUFVLEVBQUUsQ0FBTTtRQUNsQkMsU0FBUyxFQUFFLENBQU07SUFDbkIsQ0FBQztBQUNILENBQUM7QUFJRCxHQUFLLENBQUNDLElBQUksR0FBd0IsUUFDbEMsR0FEd0MsQ0FBQzs7SUFDdkMsR0FBSyxDQUE0Q2pCLEdBQXVCLEdBQXZCQSxpREFBVSxDQUFDTSx5REFBVyxHQUEvRFksUUFBUSxHQUFpQ2xCLEdBQXVCLENBQWhFa0IsUUFBUSxFQUFFQyxLQUFLLEdBQTBCbkIsR0FBdUIsQ0FBdERtQixLQUFLLEVBQUVDLFVBQVUsR0FBY3BCLEdBQXVCLENBQS9Db0IsVUFBVSxFQUFFQyxPQUFPLEdBQUtyQixHQUF1QixDQUFuQ3FCLE9BQU87SUFDNUMsR0FBSyxDQUFDQyxNQUFNLEdBQUdqQixzREFBUztJQUN4QixHQUFLLENBQW1DTixJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE1Q3dCLFlBQVksR0FBcUJ4QixJQUFZLEtBQS9CeUIsZUFBZSxHQUFJekIsSUFBWTtJQUVwRCxHQUFLLENBQUMwQixZQUFZOzJMQUFHLFFBQVEsV0FBSSxDQUFDOzs7O3dCQUNoQ1AsUUFBUSxDQUFDLEtBQUs7d0JBQ2RFLFVBQVUsQ0FBQyxJQUFJO3dCQUNmRSxNQUFNLENBQUNJLElBQUksQ0FBRSxDQUFPLFNBQWUsT0FBYkgsWUFBWTs7Ozs7O1FBQ3BDLENBQUM7d0JBSktFLFlBQVk7Ozs7SUFNbEIsTUFBTSw2RUFDSEUsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBcUI7O1lBQ2pDUCxPQUFPLGdGQUFLZCwyREFBTzs7Ozs7d0ZBQ25Cb0IsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWdCO3NHQUM1QkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQVk7b0JBQUNwQixLQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FBSzs7b0dBQzNDTiw4REFBVTs0QkFDVDBCLFFBQVEsRUFBRSxDQUFDOzRCQUNYQyxVQUFVLEVBQUUsR0FBRzs0QkFDZkMsTUFBTSxFQUFDLENBQWE7NEJBQ3BCQyxTQUFTLEVBQUMsQ0FBRTs0QkFDWkMsT0FBTyxFQUFFLElBQUk7NEJBQ2JDLE9BQU8sRUFBRSxHQUFHOzs7Ozs7b0dBRWJDLENBQUU7NEJBQ0hQLFNBQVMsRUFBQyxDQUEwQjs0QkFDbENwQixLQUFLLEVBQUUsQ0FBQztnQ0FDTjRCLFlBQVksRUFBRSxDQUFPOzRCQUN2QixDQUFDOztnQ0FDRixDQUM0Qjs0R0FBQ0MsQ0FBRTs7Ozs7Z0NBQU0sQ0FDdEM7Ozs7Ozs7b0dBQ0NWLENBQUc7NEJBQUNuQixLQUFLLEVBQUUsQ0FBQztnQ0FBQ0UsT0FBTyxFQUFFLENBQU07Z0NBQUU0QixjQUFjLEVBQUUsQ0FBUTs0QkFBQyxDQUFDOzs0R0FDdERsQywrREFBUztvQ0FDUm1DLEVBQUUsRUFBQyxDQUFnQjtvQ0FDbkJDLEtBQUssRUFBQyxDQUFvQjtvQ0FDMUJDLE9BQU8sRUFBQyxDQUFRO29DQUNoQkMsRUFBRSxFQUFFLENBQUM7d0NBQ0g3QixlQUFlLEVBQUUsQ0FBdUI7d0NBQ3hDOEIsWUFBWSxFQUFFLENBQUs7b0NBQ3JCLENBQUM7b0NBQ0RDLEtBQUssRUFBRXJCLFlBQVk7b0NBQ25Cc0IsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzt3Q0FBS3RCLE1BQU0sQ0FBTkEsZUFBZSxDQUFDc0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQ0ksV0FBVzs7b0NBQzNEQyxVQUFVLEVBQUU5QixLQUFLLEdBQUcsQ0FBK0IsaUNBQUcsQ0FBRTtvQ0FDeERBLEtBQUssRUFBRUEsS0FBSzs7Ozs7OzRHQUVibEIsOERBQWE7b0NBQ1ppRCxPQUFPLDhFQUFHaEQsdUVBQWU7b0NBQ3pCdUMsT0FBTyxFQUFDLENBQVc7b0NBQ25CVSxTQUFTLEVBQUMsQ0FBTTtvQ0FDaEJDLE9BQU8sRUFBRSxRQUFRO3dDQUFGM0IsTUFBTSxDQUFOQSxZQUFZOztvQ0FDM0I0QixRQUFRLEdBQUc5QixZQUFZO29DQUN2QmYsS0FBSyxFQUFFQSxLQUFLLENBQUNJLE1BQU07OENBQ3BCLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVosQ0FBQztHQTdES0ssSUFBSTs7UUFFT1osa0RBQVM7OztLQUZwQlksSUFBSTtBQStEViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZ0J1dHRvbiBmcm9tIFwiQG11aS9sYWIvTG9hZGluZ0J1dHRvblwiO1xuaW1wb3J0IERvdWJsZUFycm93SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Eb3VibGVBcnJvd1wiO1xuaW1wb3J0IFNjb3JlR2F1Z2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2NvcmVHYXVnZVwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTWFpbkNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XG5cbmNvbnN0IHN0eWxlOiBhbnkgPSB7XG4gIGlubmVyOiB7XG4gICAgZGlzcGxheTogXCJpbmhlcml0XCIsXG4gICAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcbiAgICBtYXhIZWlnaHQ6IFwiNjBweFwiLFxuICB9LFxufTtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7fVxuXG5jb25zdCBIb21lOiBSZWFjdC5GQzxIb21lUHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCB7IHNldEVycm9yLCBlcnJvciwgc2V0TG9hZGluZywgbG9hZGluZyB9ID0gdXNlQ29udGV4dChNYWluQ29udGV4dCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbcmVnaXN0cmF0aW9uLCBzZXRSZWdpc3RyYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgSGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHJvdXRlci5wdXNoKGAvc2NvcmUvJHtyZWdpc3RyYXRpb259YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdW50YWluLWJhY2tncm91bmRcIj5cbiAgICAgIHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXBhZ2VcIiBzdHlsZT17c3R5bGUuaW5uZXJ9PlxuICAgICAgICAgIDxTY29yZUdhdWdlXG4gICAgICAgICAgICBkdXJhdGlvbj17MH1cbiAgICAgICAgICAgIHBlcmNlbnRhZ2U9ezAuMn1cbiAgICAgICAgICAgIGhlYWRlcj1cIkdldCBhIHNjb3JlXCJcbiAgICAgICAgICAgIHN1YkhlYWRlcj1cIlwiXG4gICAgICAgICAgICBub0RlbGF5PXt0cnVlfVxuICAgICAgICAgICAgYXZlcmFnZT17MS4yfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgzXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlcmVkXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMDBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJdCdzIGxpa2UgYSBjcmVkaXQgc2NvcmUuLi48YnI+PC9icj4gYnV0IGZvciB5b3VyIGNhclxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0gPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbnRlciBSZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDAuMiwgMC4zLCAyLCAwLjYpXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YWx1ZT17cmVnaXN0cmF0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlZ2lzdHJhdGlvbihlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpKX1cbiAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3IgPyBcIk5vIE1PVCBSZWNvcmRzIEZvdW5kIHRvIHNjb3JlXCIgOiBcIlwifVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExvYWRpbmdCdXR0b25cbiAgICAgICAgICAgICAgZW5kSWNvbj17PERvdWJsZUFycm93SWNvbiAvPn1cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBIYW5kbGVTdWJtaXQoKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFyZWdpc3RyYXRpb259XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdldCBTY29yZVxuICAgICAgICAgICAgPC9Mb2FkaW5nQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJMb2FkaW5nQnV0dG9uIiwiRG91YmxlQXJyb3dJY29uIiwiU2NvcmVHYXVnZSIsIlRleHRGaWVsZCIsInVzZVJvdXRlciIsIk1haW5Db250ZXh0IiwiU3Bpbm5lciIsInN0eWxlIiwiaW5uZXIiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwibWF4SGVpZ2h0IiwiSG9tZSIsInNldEVycm9yIiwiZXJyb3IiLCJzZXRMb2FkaW5nIiwibG9hZGluZyIsInJvdXRlciIsInJlZ2lzdHJhdGlvbiIsInNldFJlZ2lzdHJhdGlvbiIsIkhhbmRsZVN1Ym1pdCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJkdXJhdGlvbiIsInBlcmNlbnRhZ2UiLCJoZWFkZXIiLCJzdWJIZWFkZXIiLCJub0RlbGF5IiwiYXZlcmFnZSIsImgzIiwibWFyZ2luQm90dG9tIiwiYnIiLCJqdXN0aWZ5Q29udGVudCIsImlkIiwibGFiZWwiLCJ2YXJpYW50Iiwic3giLCJib3JkZXJSYWRpdXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRvVXBwZXJDYXNlIiwiaGVscGVyVGV4dCIsImVuZEljb24iLCJjb21wb25lbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n'
      );

      /***/
    },
});
