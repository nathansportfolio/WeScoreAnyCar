"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app", {
  /***/ "./context/context.tsx":
    /*!*****************************!*\
  !*** ./context/context.tsx ***!
  \*****************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MainContext": function() { return /* binding */ MainContext; },\n/* harmony export */   "MainProvider": function() { return /* binding */ MainProvider; }\n/* harmony export */ });\n/* harmony import */ var _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ "./node_modules/next/dist/compiled/regenerator-runtime/runtime.js");\n/* harmony import */ var _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_motCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/motCalls */ "./services/motCalls.ts");\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase */ "./services/firebase.js");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");\n/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strings */ "./context/strings.ts");\n/* harmony import */ var _utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useLocalStorage */ "./utils/useLocalStorage.tsx");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i["return"] != null) _i["return"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === "string") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === "Object" && o.constructor) n = o.constructor.name;\n    if (n === "Map" || n === "Set") return Array.from(n);\n    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NullFunction = function() {\n    return;\n};\n_c = NullFunction;\nvar MainContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n    user: {},\n    vehicle: {},\n    drawer: false,\n    loading: false,\n    error: false,\n    getScore: NullFunction,\n    login: NullFunction,\n    setError: NullFunction,\n    setVehicle: NullFunction,\n    toggleDrawer: NullFunction,\n    setLoading: NullFunction,\n    register: NullFunction,\n    logout: NullFunction,\n    googleLogin: NullFunction,\n    passwordReset: NullFunction\n});\nvar MainProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref5[0], setLoading = ref5[1];\n    var ref1 = _slicedToArray((0,_utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__["default"])("user", {}), 2), user = ref1[0], setUser = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        registration: "sample reg"\n    }), vehicle1 = ref2[0], setVehicle = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), drawer = ref3[0], setDrawer = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), error = ref4[0], setError = ref4[1];\n    _services_firebase__WEBPACK_IMPORTED_MODULE_4__["default"];\n    var getScore = function() {\n        var _ref = _asyncToGenerator(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(registration) {\n            var response;\n            return _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_services_motCalls__WEBPACK_IMPORTED_MODULE_3__.MotApiCall)(registration);\n                    case 2:\n                        response = _ctx.sent;\n                        setVehicle(JSON.parse(response));\n                    case 4:\n                    case "end":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getScore(registration) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var login = function() {\n        var _ref = _asyncToGenerator(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email, password) {\n            var auth, ref, _user, displayName, uid, accessToken;\n            return _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLoading(true);\n                        auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();\n                        _ctx.prev = 2;\n                        _ctx.next = 5;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithEmailAndPassword)(auth, email, password);\n                    case 5:\n                        ref = _ctx.sent;\n                        _user = ref.user;\n                        displayName = _user.displayName;\n                        uid = _user.uid;\n                        accessToken = _user.accessToken;\n                        setUser({\n                            email: email,\n                            displayName: displayName,\n                            uid: uid,\n                            accessToken: accessToken\n                        });\n                        setLoading(false);\n                        return _ctx.abrupt("return", false);\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx["catch"](2);\n                        setLoading(false);\n                        if (!(_ctx.t0.message === _strings__WEBPACK_IMPORTED_MODULE_6__["default"].USER_NOT_FOUND)) {\n                            _ctx.next = 20;\n                            break;\n                        }\n                        return _ctx.abrupt("return", "User not found");\n                    case 20:\n                        if (!(_ctx.t0.message === _strings__WEBPACK_IMPORTED_MODULE_6__["default"].INCORRECT_PASSWORD)) {\n                            _ctx.next = 22;\n                            break;\n                        }\n                        return _ctx.abrupt("return", "Incorrect Password");\n                    case 22:\n                        if (!(_ctx.t0.message === _strings__WEBPACK_IMPORTED_MODULE_6__["default"].TOO_MANY_ATTEMPTS)) {\n                            _ctx.next = 24;\n                            break;\n                        }\n                        return _ctx.abrupt("return", "Too many attempts. Please try again in a few minutes..");\n                    case 24:\n                        return _ctx.abrupt("return", _ctx.t0.message);\n                    case 25:\n                    case "end":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    15\n                ]\n            ]);\n        }));\n        return function login(email, password) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var googleLogin = function() {\n        var _ref = _asyncToGenerator(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var auth, provider, _currentUser, displayName, uid, accessToken, email;\n            return _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();\n                        provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuthProvider();\n                        _ctx.prev = 2;\n                        _ctx.next = 5;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithPopup)(auth, provider);\n                    case 5:\n                        _currentUser = auth.currentUser, displayName = _currentUser.displayName, uid = _currentUser.uid, accessToken = _currentUser.accessToken, email = _currentUser.email;\n                        setUser({\n                            email: email,\n                            displayName: displayName,\n                            uid: uid,\n                            accessToken: accessToken\n                        });\n                        return _ctx.abrupt("return", false);\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx["catch"](2);\n                        return _ctx.abrupt("return", _ctx.t0.message);\n                    case 13:\n                    case "end":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    10\n                ]\n            ]);\n        }));\n        return function googleLogin() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var passwordReset = function() {\n        var _ref = _asyncToGenerator(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var email, auth, _args = arguments;\n            return _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        email = _args.length > 0 && _args[0] !== void 0 ? _args[0] : user.email;\n                        auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();\n                        console.log(\'e\', email);\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.sendPasswordResetEmail)(auth, email);\n                    case 6:\n                        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.info(\'Email Sent!\', {\n                            position: "top-right",\n                            autoClose: 5000,\n                            hideProgressBar: false,\n                            closeOnClick: true,\n                            pauseOnHover: true,\n                            draggable: true,\n                            progress: undefined\n                        });\n                        return _ctx.abrupt("return", false);\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx["catch"](3);\n                        return _ctx.abrupt("return", _ctx.t0.message);\n                    case 13:\n                    case "end":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    10\n                ]\n            ]);\n        }));\n        return function passwordReset() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var register = function() {\n        var _ref = _asyncToGenerator(_Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email, password, displayName) {\n            var auth, ref, _user, uid, accessToken;\n            return _Users_Nathandoore_Downloads_WeScoreAnyCar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLoading(true);\n                        auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();\n                        _ctx.next = 4;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.createUserWithEmailAndPassword)(auth, email, password);\n                    case 4:\n                        ref = _ctx.sent;\n                        _user = ref.user;\n                        uid = _user.uid;\n                        accessToken = _user.accessToken;\n                        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.updateProfile)(auth.currentUser, {\n                            displayName: displayName\n                        });\n                        setUser({\n                            email: email,\n                            displayName: displayName,\n                            uid: uid,\n                            accessToken: accessToken\n                        });\n                        setLoading(false);\n                        return _ctx.abrupt("return", true);\n                    case 12:\n                    case "end":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function register(email, password, displayName) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MainContext.Provider, {\n        value: {\n            user: user,\n            vehicle: vehicle1,\n            drawer: drawer,\n            loading: loading,\n            error: error,\n            setLoading: function(value) {\n                return setLoading(value);\n            },\n            setError: function(value) {\n                return setError(value);\n            },\n            toggleDrawer: function() {\n                return setDrawer(!drawer);\n            },\n            getScore: getScore,\n            setVehicle: function(vehicle) {\n                return setVehicle(vehicle);\n            },\n            login: function(email, password) {\n                return login(email, password);\n            },\n            googleLogin: googleLogin,\n            register: function(email, password, displayName) {\n                return register(email, password, displayName);\n            },\n            logout: function() {\n                setUser({});\n                return true;\n            },\n            passwordReset: passwordReset\n        },\n        children: children\n    }, void 0, false, {\n        fileName: "/Users/Nathandoore/Downloads/WeScoreAnyCar/context/context.tsx",\n        lineNumber: 158,\n        columnNumber: 5\n    }, _this));\n};\n_s(MainProvider, "syptL4qrtE2dB96g+JABOXX2xfU=", false, function() {\n    return [\n        _utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__["default"]\n    ];\n});\n_c1 = MainProvider;\nvar _c, _c1;\n$RefreshReg$(_c, "NullFunction");\n$RefreshReg$(_c1, "MainProvider");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CO2dCQUM3RGYsTUFBTSxDQUFOQSxRQUFRLENBQUNZLEtBQUssRUFBRUMsUUFBUSxFQUFFRSxXQUFXOztZQUN2Q2QsTUFBTSxFQUFFLFFBQ2hCLEdBRHNCLENBQUM7Z0JBQ2JLLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDO1lBQ0RILGFBQWEsRUFBYkEsYUFBYTtRQUNmLENBQUM7a0JBRUFFLFFBQVE7Ozs7OztBQUdmLENBQUM7R0E3SFlELFlBQVk7O1FBRUNuQiw4REFBZTs7O01BRjVCbUIsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2NvbnRleHQudHN4P2YxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vdEFwaUNhbGwgfSBmcm9tIFwiLi4vc2VydmljZXMvbW90Q2FsbHNcIjtcbmltcG9ydCBhcHAgZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlXCI7XG5pbXBvcnQge1xuICB1cGRhdGVQcm9maWxlLFxuICBnZXRBdXRoLFxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduSW5XaXRoUG9wdXAsXG4gIEdvb2dsZUF1dGhQcm92aWRlcixcbiAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBzdHJpbmdzIGZyb20gXCIuL3N0cmluZ3NcIjtcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSBcIi4uL3V0aWxzL3VzZUxvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmludGVyZmFjZSBNYWluQ29udGV4dFR5cGUge1xuICB1c2VyOiBhbnk7XG4gIHZlaGljbGU6IGFueTtcbiAgZHJhd2VyOiBib29sZWFuO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBnZXRTY29yZTogRnVuY3Rpb247XG4gIGxvZ2luOiBGdW5jdGlvbjtcbiAgc2V0VmVoaWNsZTogRnVuY3Rpb247XG4gIHRvZ2dsZURyYXdlcjogRnVuY3Rpb247XG4gIHNldEVycm9yOiBGdW5jdGlvbjtcbiAgZXJyb3I6IGJvb2xlYW47XG4gIHNldExvYWRpbmc6IEZ1bmN0aW9uO1xuICByZWdpc3RlcjogRnVuY3Rpb247XG4gIGxvZ291dDogRnVuY3Rpb247XG4gIGdvb2dsZUxvZ2luOiBGdW5jdGlvbjtcbiAgcGFzc3dvcmRSZXNldDogRnVuY3Rpb247XG59XG5cbmludGVyZmFjZSBNYWluQ29udGV4dFByb3BzIHt9XG5cbmNvbnN0IE51bGxGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuO1xufTtcblxuZXhwb3J0IGNvbnN0IE1haW5Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxNYWluQ29udGV4dFR5cGU+KHtcbiAgdXNlcjoge30sXG4gIHZlaGljbGU6IHt9LFxuICBkcmF3ZXI6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IGZhbHNlLFxuICBnZXRTY29yZTogTnVsbEZ1bmN0aW9uLFxuICBsb2dpbjogTnVsbEZ1bmN0aW9uLFxuICBzZXRFcnJvcjogTnVsbEZ1bmN0aW9uLFxuICBzZXRWZWhpY2xlOiBOdWxsRnVuY3Rpb24sXG4gIHRvZ2dsZURyYXdlcjogTnVsbEZ1bmN0aW9uLFxuICBzZXRMb2FkaW5nOiBOdWxsRnVuY3Rpb24sXG4gIHJlZ2lzdGVyOiBOdWxsRnVuY3Rpb24sXG4gIGxvZ291dDogTnVsbEZ1bmN0aW9uLFxuICBnb29nbGVMb2dpbjogTnVsbEZ1bmN0aW9uLFxuICBwYXNzd29yZFJlc2V0OiBOdWxsRnVuY3Rpb24sXG59KTtcblxuZXhwb3J0IGNvbnN0IE1haW5Qcm92aWRlcjogUmVhY3QuRkM8TWFpbkNvbnRleHRQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlTG9jYWxTdG9yYWdlKFwidXNlclwiLCB7fSk7XG4gIGNvbnN0IFt2ZWhpY2xlLCBzZXRWZWhpY2xlXSA9IHVzZVN0YXRlKHsgcmVnaXN0cmF0aW9uOiBcInNhbXBsZSByZWdcIiB9KTtcbiAgY29uc3QgW2RyYXdlciwgc2V0RHJhd2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGFwcDtcblxuICBjb25zdCBnZXRTY29yZSA9IGFzeW5jIChyZWdpc3RyYXRpb246IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTW90QXBpQ2FsbChyZWdpc3RyYXRpb24pO1xuICAgIHNldFZlaGljbGUoSlNPTi5wYXJzZShyZXNwb25zZSkpO1xuICB9O1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdXNlcjogeyBkaXNwbGF5TmFtZSwgdWlkLCBhY2Nlc3NUb2tlbiB9LFxuICAgICAgfTogeyB1c2VyOiBhbnkgfSA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICBhdXRoLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgICk7XG5cbiAgICAgIHNldFVzZXIoeyBlbWFpbCwgZGlzcGxheU5hbWUsIHVpZCwgYWNjZXNzVG9rZW4gfSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UgPT09IHN0cmluZ3MuVVNFUl9OT1RfRk9VTkQpIHtcbiAgICAgICAgcmV0dXJuIFwiVXNlciBub3QgZm91bmRcIjtcbiAgICAgIH1cbiAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gc3RyaW5ncy5JTkNPUlJFQ1RfUEFTU1dPUkQpIHtcbiAgICAgICAgcmV0dXJuIFwiSW5jb3JyZWN0IFBhc3N3b3JkXCI7XG4gICAgICB9XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UgPT09IHN0cmluZ3MuVE9PX01BTllfQVRURU1QVFMpIHtcbiAgICAgICAgcmV0dXJuIFwiVG9vIG1hbnkgYXR0ZW1wdHMuIFBsZWFzZSB0cnkgYWdhaW4gaW4gYSBmZXcgbWludXRlcy4uXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdvb2dsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcik7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1cnJlbnRVc2VyOiB7IGRpc3BsYXlOYW1lLCB1aWQsIGFjY2Vzc1Rva2VuLCBlbWFpbCB9LFxuICAgICAgfTogeyBjdXJyZW50VXNlcjogYW55IH0gPSBhdXRoO1xuICAgICAgc2V0VXNlcih7IGVtYWlsLCBkaXNwbGF5TmFtZSwgdWlkLCBhY2Nlc3NUb2tlbiB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgcmV0dXJuIGVyci5tZXNzYWdlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwYXNzd29yZFJlc2V0ID0gYXN5bmMgKGVtYWlsOnN0cmluZyA9IHVzZXIuZW1haWwpID0+IHtcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuICAgIGNvbnNvbGUubG9nKCdlJywgZW1haWwpXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwoYXV0aCwgZW1haWwpO1xuICAgICAgdG9hc3QuaW5mbygnRW1haWwgU2VudCEnLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nXG4gICkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgYXV0aDogeyBjdXJyZW50VXNlcjogYW55IH0gPSBnZXRBdXRoKCk7XG4gICAgY29uc3Qge1xuICAgICAgdXNlcjogeyB1aWQsIGFjY2Vzc1Rva2VuIH0sXG4gICAgfTogLy8gQHRzLWlnbm9yZVxuICAgIHsgdXNlcjogYW55IH0gPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcbiAgICB1cGRhdGVQcm9maWxlKGF1dGguY3VycmVudFVzZXIsIHtcbiAgICAgIGRpc3BsYXlOYW1lLFxuICAgIH0pO1xuXG4gICAgc2V0VXNlcih7IGVtYWlsLCBkaXNwbGF5TmFtZSwgdWlkLCBhY2Nlc3NUb2tlbiB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNYWluQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdXNlcixcbiAgICAgICAgdmVoaWNsZSxcbiAgICAgICAgZHJhd2VyLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgc2V0TG9hZGluZzogKHZhbHVlOiBib29sZWFuKSA9PiBzZXRMb2FkaW5nKHZhbHVlKSxcbiAgICAgICAgc2V0RXJyb3I6ICh2YWx1ZTogYm9vbGVhbikgPT4gc2V0RXJyb3IodmFsdWUpLFxuICAgICAgICB0b2dnbGVEcmF3ZXI6ICgpID0+IHNldERyYXdlcighZHJhd2VyKSxcbiAgICAgICAgZ2V0U2NvcmUsXG4gICAgICAgIHNldFZlaGljbGU6ICh2ZWhpY2xlOiBhbnkpID0+IHNldFZlaGljbGUodmVoaWNsZSksXG4gICAgICAgIGxvZ2luOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gbG9naW4oZW1haWwsIHBhc3N3b3JkKSxcbiAgICAgICAgZ29vZ2xlTG9naW4sXG4gICAgICAgIHJlZ2lzdGVyOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgZGlzcGxheU5hbWU6IHN0cmluZykgPT5cbiAgICAgICAgICByZWdpc3RlcihlbWFpbCwgcGFzc3dvcmQsIGRpc3BsYXlOYW1lKSxcbiAgICAgICAgbG9nb3V0OiAoKSA9PiB7XG4gICAgICAgICAgc2V0VXNlcih7fSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkUmVzZXQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01haW5Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJNb3RBcGlDYWxsIiwiYXBwIiwidXBkYXRlUHJvZmlsZSIsImdldEF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzdHJpbmdzIiwidXNlTG9jYWxTdG9yYWdlIiwidG9hc3QiLCJOdWxsRnVuY3Rpb24iLCJNYWluQ29udGV4dCIsInVzZXIiLCJ2ZWhpY2xlIiwiZHJhd2VyIiwibG9hZGluZyIsImVycm9yIiwiZ2V0U2NvcmUiLCJsb2dpbiIsInNldEVycm9yIiwic2V0VmVoaWNsZSIsInRvZ2dsZURyYXdlciIsInNldExvYWRpbmciLCJyZWdpc3RlciIsImxvZ291dCIsImdvb2dsZUxvZ2luIiwicGFzc3dvcmRSZXNldCIsIk1haW5Qcm92aWRlciIsImNoaWxkcmVuIiwic2V0VXNlciIsInJlZ2lzdHJhdGlvbiIsInNldERyYXdlciIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiZW1haWwiLCJwYXNzd29yZCIsImF1dGgiLCJkaXNwbGF5TmFtZSIsInVpZCIsImFjY2Vzc1Rva2VuIiwibWVzc2FnZSIsIlVTRVJfTk9UX0ZPVU5EIiwiSU5DT1JSRUNUX1BBU1NXT1JEIiwiVE9PX01BTllfQVRURU1QVFMiLCJwcm92aWRlciIsImN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsImluZm8iLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/context.tsx\n'
      );

      /***/
    },
});
