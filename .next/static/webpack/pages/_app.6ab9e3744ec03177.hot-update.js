"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Drawer/Drawer.tsx":
/*!**************************************!*\
  !*** ./components/Drawer/Drawer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Drawer */ \"./node_modules/@mui/material/Drawer/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/Divider/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"./node_modules/@mui/material/ListItemIcon/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Home */ \"./node_modules/@mui/icons-material/Home.js\");\n/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ManageAccounts */ \"./node_modules/@mui/icons-material/ManageAccounts.js\");\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"./node_modules/@mui/icons-material/Logout.js\");\n/* harmony import */ var _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Login */ \"./node_modules/@mui/icons-material/Login.js\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Link */ \"./node_modules/@mui/material/Link/index.js\");\n/* harmony import */ var _mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Assignment */ \"./node_modules/@mui/icons-material/Assignment.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/Close */ \"./node_modules/@mui/icons-material/Close.js\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/context */ \"./context/context.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar myComponents = {\n    \"Get A Score\": {\n        icon: _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        path: \"/\"\n    },\n    \"Sign in\": {\n        icon: _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        path: \"/login\"\n    },\n    Register: {\n        icon: _mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        path: \"/register\"\n    },\n    \"My Account\": {\n        icon: _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        path: \"/account\"\n    },\n    Favourites: {\n        icon: _mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        path: \"/favourites\"\n    },\n    Logout: {\n        icon: _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        path: \"/\"\n    }\n};\nvar DrawerComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_context_context__WEBPACK_IMPORTED_MODULE_2__.MainContext), drawer = ref.drawer, toggleDrawer = ref.toggleDrawer, user = ref.user;\n    var dynamicIcons = function(text) {\n        var Icon = myComponents[text][\"icon\"];\n        var Path = myComponents[text][\"path\"];\n        var logout = false;\n        if (text === \"Logout\") logout = true;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            href: Path,\n            // onClick={() => (logout ? props.logout() : \"\")}\n            style: {\n                textDecoration: \"none\",\n                color: \"white\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                button: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        primary: text\n                    }, void 0, false, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this1)\n                ]\n            }, text, true, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this1)\n        }, text, false, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, _this1));\n    };\n    var list = function(anchor) {\n        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            sx: {\n                width: anchor === \"top\" || anchor === \"bottom\" ? \"auto\" : 200\n            },\n            role: \"presentation\",\n            onClick: function() {\n                return toggleDrawer();\n            },\n            onKeyDown: function() {\n                return toggleDrawer();\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    children: [\n                        \"Get A Score\"\n                    ].map(function(text) {\n                        return dynamicIcons(text);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 7\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    children: user.ss ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"My Account\",\n                            \"Favourites\",\n                            \"Logout\"\n                        ].map(function(text) {\n                            return dynamicIcons(text);\n                        })\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"Sign in\",\n                            \"Register\"\n                        ].map(function(text) {\n                            return dynamicIcons(text);\n                        })\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n            lineNumber: 60,\n            columnNumber: 5\n        }, _this1);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n            anchor: \"left\",\n            open: drawer,\n            onClose: function() {\n                return toggleDrawer();\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                    size: \"large\",\n                    edge: \"start\",\n                    \"aria-label\": \"menu\",\n                    sx: {\n                        width: \"20px\",\n                        marginLeft: \"23px\",\n                        marginTop: \"10px\"\n                    },\n                    onClick: function() {\n                        return toggleDrawer();\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                        sx: {\n                            color: 'white'\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, _this),\n                list(\"left\")\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this));\n};\n_s(DrawerComponent, \"74krQuXqnwx4Xm04SThS9iBK4oo=\");\n_c = DrawerComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DrawerComponent);\nvar _c;\n$RefreshReg$(_c, \"DrawerComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL19OX0UvLi9jb21wb25lbnRzL0RyYXdlci9EcmF3ZXIudHN4P2Y0MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IERyYXdlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9EcmF3ZXJcIjtcbmltcG9ydCBMaXN0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0RpdmlkZXJcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUljb25cIjtcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Ib21lXCI7XG5pbXBvcnQgTWFuYWdlQWNjb3VudHMgZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWFuYWdlQWNjb3VudHNcIjtcbmltcG9ydCBMb2dvdXQgZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0XCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTG9naW5cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAbXVpL21hdGVyaWFsL0xpbmtcIjtcbmltcG9ydCBBc3NpZ25tZW50SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Bc3NpZ25tZW50XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCI7XG5pbXBvcnQgQ2xvc2UgZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VcIjtcbmltcG9ydCB7IE1haW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY29udGV4dFwiO1xuXG5jb25zdCBteUNvbXBvbmVudHM6IExvb3NlT2JqZWN0ID0ge1xuICBcIkdldCBBIFNjb3JlXCI6IHsgaWNvbjogSG9tZSwgcGF0aDogXCIvXCIgfSxcbiAgXCJTaWduIGluXCI6IHsgaWNvbjogTG9naW4sIHBhdGg6IFwiL2xvZ2luXCIgfSxcbiAgUmVnaXN0ZXI6IHsgaWNvbjogQXNzaWdubWVudEljb24sIHBhdGg6IFwiL3JlZ2lzdGVyXCIgfSxcbiAgXCJNeSBBY2NvdW50XCI6IHsgaWNvbjogTWFuYWdlQWNjb3VudHMsIHBhdGg6IFwiL2FjY291bnRcIiB9LFxuICBGYXZvdXJpdGVzOiB7IGljb246IEFzc2lnbm1lbnRJY29uLCBwYXRoOiBcIi9mYXZvdXJpdGVzXCIgfSxcbiAgTG9nb3V0OiB7IGljb246IExvZ291dCwgcGF0aDogXCIvXCIgfSxcbn07XG5cbmludGVyZmFjZSBMb29zZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIERyYXdlckNvbXBvbmVudFByb3BzIHt9XG5cbmNvbnN0IERyYXdlckNvbXBvbmVudDogUmVhY3QuRkM8RHJhd2VyQ29tcG9uZW50UHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCB7IGRyYXdlciwgdG9nZ2xlRHJhd2VyLCB1c2VyIH0gPSBSZWFjdC51c2VDb250ZXh0KE1haW5Db250ZXh0KTtcblxuICBjb25zdCBkeW5hbWljSWNvbnMgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgSWNvbiA9IG15Q29tcG9uZW50c1t0ZXh0XVtcImljb25cIl07XG4gICAgY29uc3QgUGF0aCA9IG15Q29tcG9uZW50c1t0ZXh0XVtcInBhdGhcIl07XG4gICAgbGV0IGxvZ291dCA9IGZhbHNlO1xuICAgIGlmICh0ZXh0ID09PSBcIkxvZ291dFwiKSBsb2dvdXQgPSB0cnVlO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlua1xuICAgICAgICBrZXk9e3RleHR9XG4gICAgICAgIGhyZWY9e1BhdGh9XG4gICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IChsb2dvdXQgPyBwcm9wcy5sb2dvdXQoKSA6IFwiXCIpfVxuICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgID5cbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e3RleHR9PlxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGxpc3QgPSAoYW5jaG9yOiBzdHJpbmcpID0+IChcbiAgICA8Qm94XG4gICAgICBzeD17eyB3aWR0aDogYW5jaG9yID09PSBcInRvcFwiIHx8IGFuY2hvciA9PT0gXCJib3R0b21cIiA/IFwiYXV0b1wiIDogMjAwIH19XG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURyYXdlcigpfVxuICAgICAgb25LZXlEb3duPXsoKSA9PiB0b2dnbGVEcmF3ZXIoKX1cbiAgICA+XG4gICAgICA8TGlzdD57W1wiR2V0IEEgU2NvcmVcIl0ubWFwKCh0ZXh0KSA9PiBkeW5hbWljSWNvbnModGV4dCkpfTwvTGlzdD5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8TGlzdD5cbiAgICAgICAge3VzZXIuc3MgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtbXCJNeSBBY2NvdW50XCIsIFwiRmF2b3VyaXRlc1wiLCBcIkxvZ291dFwiXS5tYXAoKHRleHQpID0+XG4gICAgICAgICAgICAgIGR5bmFtaWNJY29ucyh0ZXh0KVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PntbXCJTaWduIGluXCIsIFwiUmVnaXN0ZXJcIl0ubWFwKCh0ZXh0KSA9PiBkeW5hbWljSWNvbnModGV4dCkpfTwvPlxuICAgICAgICApfVxuICAgICAgPC9MaXN0PlxuICAgIDwvQm94PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgYW5jaG9yPXtcImxlZnRcIn1cbiAgICAgICAgb3Blbj17ZHJhd2VyfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB0b2dnbGVEcmF3ZXIoKX1cbiAgICAgID5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjIzcHhcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCJcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURyYXdlcigpfVxuICAgICAgICA+XG4gICAgICAgICAgPENsb3NlIHN4PXt7IGNvbG9yOiAnd2hpdGUnIH19Lz5cbiAgICAgICAgPC9JY29uQnV0dG9uID5cbiAgICAgICAge2xpc3QoXCJsZWZ0XCIpfVxuICAgICAgPC9EcmF3ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJEcmF3ZXIiLCJMaXN0IiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwiSG9tZSIsIk1hbmFnZUFjY291bnRzIiwiTG9nb3V0IiwiTG9naW4iLCJMaW5rIiwiQXNzaWdubWVudEljb24iLCJJY29uQnV0dG9uIiwiQ2xvc2UiLCJNYWluQ29udGV4dCIsIm15Q29tcG9uZW50cyIsImljb24iLCJwYXRoIiwiUmVnaXN0ZXIiLCJGYXZvdXJpdGVzIiwiRHJhd2VyQ29tcG9uZW50IiwidXNlQ29udGV4dCIsImRyYXdlciIsInRvZ2dsZURyYXdlciIsInVzZXIiLCJkeW5hbWljSWNvbnMiLCJ0ZXh0IiwiSWNvbiIsIlBhdGgiLCJsb2dvdXQiLCJocmVmIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiYnV0dG9uIiwicHJpbWFyeSIsImxpc3QiLCJhbmNob3IiLCJzeCIsIndpZHRoIiwicm9sZSIsIm9uQ2xpY2siLCJvbktleURvd24iLCJtYXAiLCJzcyIsImRpdiIsIm9wZW4iLCJvbkNsb3NlIiwic2l6ZSIsImVkZ2UiLCJhcmlhLWxhYmVsIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Drawer/Drawer.tsx\n");

/***/ })

});