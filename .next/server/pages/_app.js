/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Drawer/Drawer.tsx":
/*!**************************************!*\
  !*** ./components/Drawer/Drawer.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Drawer */ \"@mui/material/Drawer\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/List */ \"@mui/material/List\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Divider */ \"@mui/material/Divider\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItem */ \"@mui/material/ListItem\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"@mui/material/ListItemIcon\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemText */ \"@mui/material/ListItemText\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Home */ \"@mui/icons-material/Home\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ManageAccounts */ \"@mui/icons-material/ManageAccounts\");\n/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"@mui/icons-material/Logout\");\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Login */ \"@mui/icons-material/Login\");\n/* harmony import */ var _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Assignment */ \"@mui/icons-material/Assignment\");\n/* harmony import */ var _mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/Close */ \"@mui/icons-material/Close\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../context/context */ \"./context/context.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst myComponents = {\n    \"Get A Score\": {\n        icon: (_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9___default()),\n        path: \"/\"\n    },\n    \"Sign in\": {\n        icon: (_mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_12___default()),\n        path: \"/login\"\n    },\n    Register: {\n        icon: (_mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_14___default()),\n        path: \"/register\"\n    },\n    \"My Account\": {\n        icon: (_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_10___default()),\n        path: \"/account\"\n    },\n    Favourites: {\n        icon: (_mui_icons_material_Assignment__WEBPACK_IMPORTED_MODULE_14___default()),\n        path: \"/favourites\"\n    },\n    Logout: {\n        icon: (_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_11___default()),\n        path: \"/\"\n    }\n};\nconst DrawerComponent = ()=>{\n    const { drawer , toggleDrawer , user  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_context_context__WEBPACK_IMPORTED_MODULE_17__.MainContext);\n    const dynamicIcons = (text)=>{\n        const Icon = myComponents[text][\"icon\"];\n        const Path = myComponents[text][\"path\"];\n        let logout = false;\n        if (text === \"Logout\") logout = true;\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_13___default()), {\n            href: Path,\n            // onClick={() => (logout ? props.logout() : \"\")}\n            style: {\n                textDecoration: \"none\",\n                color: \"white\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_6___default()), {\n                button: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, {\n                            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        primary: text\n                    }, void 0, false, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, text, true, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        }, text, false, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined));\n    };\n    const list = (anchor)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {\n            sx: {\n                width: anchor === \"top\" || anchor === \"bottom\" ? \"auto\" : 200\n            },\n            role: \"presentation\",\n            onClick: ()=>toggleDrawer()\n            ,\n            onKeyDown: ()=>toggleDrawer()\n            ,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_List__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        \"Get A Score\"\n                    ].map((text)=>dynamicIcons(text)\n                    )\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_List__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: user.ss ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"My Account\",\n                            \"Favourites\",\n                            \"Logout\"\n                        ].map((text)=>dynamicIcons(text)\n                        )\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"Sign in\",\n                            \"Register\"\n                        ].map((text)=>dynamicIcons(text)\n                        )\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n            lineNumber: 60,\n            columnNumber: 5\n        }, undefined)\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3___default()), {\n            anchor: \"left\",\n            open: drawer,\n            onClose: ()=>toggleDrawer()\n            ,\n            color: \"red\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_15___default()), {\n                    size: \"large\",\n                    edge: \"start\",\n                    \"aria-label\": \"menu\",\n                    sx: {\n                        width: \"20px\",\n                        marginLeft: \"23px\",\n                        marginTop: \"10px\",\n                        color: \"white\"\n                    },\n                    onClick: ()=>toggleDrawer()\n                    ,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_16___default()), {}, void 0, false, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                list(\"left\")\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/Drawer/Drawer.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerComponent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdlci9EcmF3ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDSztBQUNNO0FBQ0o7QUFDTTtBQUNFO0FBQ1E7QUFDQTtBQUNWO0FBQ29CO0FBQ2hCO0FBQ0Y7QUFDUjtBQUNzQjtBQUNWO0FBQ0o7QUFDTTtBQUVuRCxLQUFLLENBQUNpQixZQUFZLEdBQWdCLENBQUM7SUFDakMsQ0FBYSxjQUFFLENBQUM7UUFBQ0MsSUFBSSxFQUFFVixpRUFBSTtRQUFFVyxJQUFJLEVBQUUsQ0FBRztJQUFDLENBQUM7SUFDeEMsQ0FBUyxVQUFFLENBQUM7UUFBQ0QsSUFBSSxFQUFFUCxtRUFBSztRQUFFUSxJQUFJLEVBQUUsQ0FBUTtJQUFDLENBQUM7SUFDMUNDLFFBQVEsRUFBRSxDQUFDO1FBQUNGLElBQUksRUFBRUwsd0VBQWM7UUFBRU0sSUFBSSxFQUFFLENBQVc7SUFBQyxDQUFDO0lBQ3JELENBQVksYUFBRSxDQUFDO1FBQUNELElBQUksRUFBRVQsNEVBQWM7UUFBRVUsSUFBSSxFQUFFLENBQVU7SUFBQyxDQUFDO0lBQ3hERSxVQUFVLEVBQUUsQ0FBQztRQUFDSCxJQUFJLEVBQUVMLHdFQUFjO1FBQUVNLElBQUksRUFBRSxDQUFhO0lBQUMsQ0FBQztJQUN6RFQsTUFBTSxFQUFFLENBQUM7UUFBQ1EsSUFBSSxFQUFFUixvRUFBTTtRQUFFUyxJQUFJLEVBQUUsQ0FBRztJQUFDLENBQUM7QUFDckMsQ0FBQztBQVFELEtBQUssQ0FBQ0csZUFBZSxPQUF5QyxDQUFDO0lBQzdELEtBQUssQ0FBQyxDQUFDLENBQUNDLE1BQU0sR0FBRUMsWUFBWSxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxHQUFHekIsNkNBQWdCLENBQUNnQiwwREFBVztJQUVuRSxLQUFLLENBQUNXLFlBQVksSUFBSUMsSUFBWSxHQUFLLENBQUM7UUFDdEMsS0FBSyxDQUFDQyxJQUFJLEdBQUdaLFlBQVksQ0FBQ1csSUFBSSxFQUFFLENBQU07UUFDdEMsS0FBSyxDQUFDRSxJQUFJLEdBQUdiLFlBQVksQ0FBQ1csSUFBSSxFQUFFLENBQU07UUFDdEMsR0FBRyxDQUFDRyxNQUFNLEdBQUcsS0FBSztRQUNsQixFQUFFLEVBQUVILElBQUksS0FBSyxDQUFRLFNBQUVHLE1BQU0sR0FBRyxJQUFJO1FBQ3BDLE1BQU0sNkVBQ0huQiw0REFBSTtZQUVIb0IsSUFBSSxFQUFFRixJQUFJO1lBQ1YsRUFBaUQ7WUFDakRHLEtBQUssRUFBRSxDQUFDO2dCQUFDQyxjQUFjLEVBQUUsQ0FBTTtnQkFBRUMsS0FBSyxFQUFFLENBQU87WUFBQyxDQUFDO2tHQUVoRDlCLCtEQUFRO2dCQUFDK0IsTUFBTTs7Z0dBQ2I5QixtRUFBWTs4R0FDVnVCLElBQUk7Ozs7Ozs7Ozs7Z0dBRU50QixtRUFBWTt3QkFBQzhCLE9BQU8sRUFBRVQsSUFBSTs7Ozs7OztlQUpQQSxJQUFJOzs7OztXQUxyQkEsSUFBSTs7Ozs7SUFhZixDQUFDO0lBRUQsS0FBSyxDQUFDVSxJQUFJLElBQUlDLE1BQWMsK0VBQ3pCdEMsMERBQUc7WUFDRnVDLEVBQUUsRUFBRSxDQUFDO2dCQUFDQyxLQUFLLEVBQUVGLE1BQU0sS0FBSyxDQUFLLFFBQUlBLE1BQU0sS0FBSyxDQUFRLFVBQUcsQ0FBTSxRQUFHLEdBQUc7WUFBQyxDQUFDO1lBQ3JFRyxJQUFJLEVBQUMsQ0FBYztZQUNuQkMsT0FBTyxNQUFRbkIsWUFBWTs7WUFDM0JvQixTQUFTLE1BQVFwQixZQUFZOzs7NEZBRTVCckIsMkRBQUk7OEJBQUUsQ0FBQzt3QkFBQSxDQUFhO29CQUFBLENBQUMsQ0FBQzBDLEdBQUcsRUFBRWpCLElBQUksR0FBS0QsWUFBWSxDQUFDQyxJQUFJOzs7Ozs7OzRGQUNyRHhCLDhEQUFPOzs7Ozs0RkFDUEQsMkRBQUk7OEJBQ0ZzQixJQUFJLENBQUNxQixFQUFFO2tDQUVILENBQUM7NEJBQUEsQ0FBWTs0QkFBRSxDQUFZOzRCQUFFLENBQVE7d0JBQUEsQ0FBQyxDQUFDRCxHQUFHLEVBQUVqQixJQUFJLEdBQy9DRCxZQUFZLENBQUNDLElBQUk7OztrQ0FJbEIsQ0FBQzs0QkFBQSxDQUFTOzRCQUFFLENBQVU7d0JBQUEsQ0FBQyxDQUFDaUIsR0FBRyxFQUFFakIsSUFBSSxHQUFLRCxZQUFZLENBQUNDLElBQUk7Ozs7Ozs7Ozs7Ozs7OztJQU1sRSxNQUFNLDZFQUNIbUIsQ0FBRzs4RkFDRDdDLDZEQUFNO1lBQ0xxQyxNQUFNLEVBQUUsQ0FBTTtZQUNkUyxJQUFJLEVBQUV6QixNQUFNO1lBQ1owQixPQUFPLE1BQVF6QixZQUFZOztZQUMzQlcsS0FBSyxFQUFDLENBQUs7OzRGQUVWckIsa0VBQVU7b0JBQ1RvQyxJQUFJLEVBQUMsQ0FBTztvQkFDWkMsSUFBSSxFQUFDLENBQU87b0JBQ1pDLENBQVUsYUFBQyxDQUFNO29CQUNqQlosRUFBRSxFQUFFLENBQUM7d0JBQ0hDLEtBQUssRUFBRSxDQUFNO3dCQUNiWSxVQUFVLEVBQUUsQ0FBTTt3QkFDbEJDLFNBQVMsRUFBRSxDQUFNO3dCQUNqQm5CLEtBQUssRUFBRSxDQUFPO29CQUNoQixDQUFDO29CQUNEUSxPQUFPLE1BQVFuQixZQUFZOzswR0FFMUJULG1FQUFLOzs7Ozs7Ozs7O2dCQUVQdUIsSUFBSSxDQUFDLENBQU07Ozs7Ozs7Ozs7OztBQUlwQixDQUFDO0FBRUQsaUVBQWVoQixlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZXNjb3JlYW55Y2FyLy4vY29tcG9uZW50cy9EcmF3ZXIvRHJhd2VyLnRzeD9mNDA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRHJhd2VyXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaXN0XCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9EaXZpZGVyXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIjtcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1JY29uXCI7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvSG9tZVwiO1xuaW1wb3J0IE1hbmFnZUFjY291bnRzIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01hbmFnZUFjY291bnRzXCI7XG5pbXBvcnQgTG9nb3V0IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dFwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ2luXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaW5rXCI7XG5pbXBvcnQgQXNzaWdubWVudEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXNzaWdubWVudFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IENsb3NlIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlXCI7XG5pbXBvcnQgeyBNYWluQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2NvbnRleHRcIjtcblxuY29uc3QgbXlDb21wb25lbnRzOiBMb29zZU9iamVjdCA9IHtcbiAgXCJHZXQgQSBTY29yZVwiOiB7IGljb246IEhvbWUsIHBhdGg6IFwiL1wiIH0sXG4gIFwiU2lnbiBpblwiOiB7IGljb246IExvZ2luLCBwYXRoOiBcIi9sb2dpblwiIH0sXG4gIFJlZ2lzdGVyOiB7IGljb246IEFzc2lnbm1lbnRJY29uLCBwYXRoOiBcIi9yZWdpc3RlclwiIH0sXG4gIFwiTXkgQWNjb3VudFwiOiB7IGljb246IE1hbmFnZUFjY291bnRzLCBwYXRoOiBcIi9hY2NvdW50XCIgfSxcbiAgRmF2b3VyaXRlczogeyBpY29uOiBBc3NpZ25tZW50SWNvbiwgcGF0aDogXCIvZmF2b3VyaXRlc1wiIH0sXG4gIExvZ291dDogeyBpY29uOiBMb2dvdXQsIHBhdGg6IFwiL1wiIH0sXG59O1xuXG5pbnRlcmZhY2UgTG9vc2VPYmplY3Qge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBEcmF3ZXJDb21wb25lbnRQcm9wcyB7fVxuXG5jb25zdCBEcmF3ZXJDb21wb25lbnQ6IFJlYWN0LkZDPERyYXdlckNvbXBvbmVudFByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgeyBkcmF3ZXIsIHRvZ2dsZURyYXdlciwgdXNlciB9ID0gUmVhY3QudXNlQ29udGV4dChNYWluQ29udGV4dCk7XG5cbiAgY29uc3QgZHluYW1pY0ljb25zID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IEljb24gPSBteUNvbXBvbmVudHNbdGV4dF1bXCJpY29uXCJdO1xuICAgIGNvbnN0IFBhdGggPSBteUNvbXBvbmVudHNbdGV4dF1bXCJwYXRoXCJdO1xuICAgIGxldCBsb2dvdXQgPSBmYWxzZTtcbiAgICBpZiAodGV4dCA9PT0gXCJMb2dvdXRcIikgbG9nb3V0ID0gdHJ1ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmtcbiAgICAgICAga2V5PXt0ZXh0fVxuICAgICAgICBocmVmPXtQYXRofVxuICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiAobG9nb3V0ID8gcHJvcHMubG9nb3V0KCkgOiBcIlwiKX1cbiAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XG4gICAgICA+XG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXt0ZXh0fT5cbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPEljb24gLz5cbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBsaXN0ID0gKGFuY2hvcjogc3RyaW5nKSA9PiAoXG4gICAgPEJveFxuICAgICAgc3g9e3sgd2lkdGg6IGFuY2hvciA9PT0gXCJ0b3BcIiB8fCBhbmNob3IgPT09IFwiYm90dG9tXCIgPyBcImF1dG9cIiA6IDIwMCB9fVxuICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEcmF3ZXIoKX1cbiAgICAgIG9uS2V5RG93bj17KCkgPT4gdG9nZ2xlRHJhd2VyKCl9XG4gICAgPlxuICAgICAgPExpc3Q+e1tcIkdldCBBIFNjb3JlXCJdLm1hcCgodGV4dCkgPT4gZHluYW1pY0ljb25zKHRleHQpKX08L0xpc3Q+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPExpc3Q+XG4gICAgICAgIHt1c2VyLnNzID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7W1wiTXkgQWNjb3VudFwiLCBcIkZhdm91cml0ZXNcIiwgXCJMb2dvdXRcIl0ubWFwKCh0ZXh0KSA9PlxuICAgICAgICAgICAgICBkeW5hbWljSWNvbnModGV4dClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD57W1wiU2lnbiBpblwiLCBcIlJlZ2lzdGVyXCJdLm1hcCgodGV4dCkgPT4gZHluYW1pY0ljb25zKHRleHQpKX08Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L0JveD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIGFuY2hvcj17XCJsZWZ0XCJ9XG4gICAgICAgIG9wZW49e2RyYXdlcn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gdG9nZ2xlRHJhd2VyKCl9XG4gICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgID5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjIzcHhcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRHJhd2VyKCl9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICB7bGlzdChcImxlZnRcIil9XG4gICAgICA8L0RyYXdlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlckNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkRyYXdlciIsIkxpc3QiLCJEaXZpZGVyIiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJIb21lIiwiTWFuYWdlQWNjb3VudHMiLCJMb2dvdXQiLCJMb2dpbiIsIkxpbmsiLCJBc3NpZ25tZW50SWNvbiIsIkljb25CdXR0b24iLCJDbG9zZSIsIk1haW5Db250ZXh0IiwibXlDb21wb25lbnRzIiwiaWNvbiIsInBhdGgiLCJSZWdpc3RlciIsIkZhdm91cml0ZXMiLCJEcmF3ZXJDb21wb25lbnQiLCJkcmF3ZXIiLCJ0b2dnbGVEcmF3ZXIiLCJ1c2VyIiwidXNlQ29udGV4dCIsImR5bmFtaWNJY29ucyIsInRleHQiLCJJY29uIiwiUGF0aCIsImxvZ291dCIsImhyZWYiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJidXR0b24iLCJwcmltYXJ5IiwibGlzdCIsImFuY2hvciIsInN4Iiwid2lkdGgiLCJyb2xlIiwib25DbGljayIsIm9uS2V5RG93biIsIm1hcCIsInNzIiwiZGl2Iiwib3BlbiIsIm9uQ2xvc2UiLCJzaXplIiwiZWRnZSIsImFyaWEtbGFiZWwiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Drawer/Drawer.tsx\n");

/***/ }),

/***/ "./components/Drawer/index.ts":
/*!************************************!*\
  !*** ./components/Drawer/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer */ \"./components/Drawer/Drawer.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Drawer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdlci9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QjtBQUU3QixpRUFBZUEsK0NBQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlc2NvcmVhbnljYXIvLi9jb21wb25lbnRzL0RyYXdlci9pbmRleC50cz8zYzhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmF3ZXIgZnJvbSBcIi4vRHJhd2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcbiJdLCJuYW1lcyI6WyJEcmF3ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Drawer/index.ts\n");

/***/ }),

/***/ "./components/NavigationBar/NavigationBar.tsx":
/*!****************************************************!*\
  !*** ./components/NavigationBar/NavigationBar.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Drawer */ \"./components/Drawer/index.ts\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/context */ \"./context/context.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst NavigationBar = ()=>{\n    const { drawer , toggleDrawer , user  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_context_context__WEBPACK_IMPORTED_MODULE_11__.MainContext);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Drawer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    position: \"fixed\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                size: \"large\",\n                                edge: \"start\",\n                                color: \"inherit\",\n                                \"aria-label\": \"menu\",\n                                sx: {\n                                    mr: 2\n                                },\n                                onClick: ()=>toggleDrawer()\n                                ,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                component: \"div\",\n                                sx: {\n                                    flexGrow: 1,\n                                    fontWeight: 600,\n                                    width: \"100vw\",\n                                    textAlign: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/\",\n                                    style: {\n                                        color: \"white\",\n                                        textDecoration: \"none\"\n                                    },\n                                    children: [\n                                        \"WeScoreAnyCar.com\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                component: \"div\",\n                                sx: {\n                                    flexGrow: 0,\n                                    fontWeight: 200\n                                },\n                                children: user.name ? user.name : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                    href: \"/login\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        variant: \"outlined\",\n                                        style: {\n                                            color: \"white\",\n                                            borderColor: \"white\"\n                                        },\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/components/NavigationBar/NavigationBar.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIvTmF2aWdhdGlvbkJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1c7QUFDTjtBQUNRO0FBQ007QUFDQTtBQUNGO0FBQ2pCO0FBQ1c7QUFDSjtBQUNjO0FBSW5ELEtBQUssQ0FBQ1csYUFBYSxPQUF1QyxDQUFDO0lBQ3pELEtBQUssQ0FBQyxDQUFDLENBQUNDLE1BQU0sR0FBRUMsWUFBWSxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxHQUFHZCw2Q0FBZ0IsQ0FBQ1UsMERBQVc7SUFFbkUsTUFBTTs7d0ZBRURILCtDQUFNOzs7Ozt3RkFDTkwsMERBQUc7c0dBQ0RELDZEQUFNO29CQUFDZSxRQUFRLEVBQUMsQ0FBTzswR0FDckJiLDhEQUFPOzt3R0FDTEUsaUVBQVU7Z0NBQ1RZLElBQUksRUFBQyxDQUFPO2dDQUNaQyxJQUFJLEVBQUMsQ0FBTztnQ0FDWkMsS0FBSyxFQUFDLENBQVM7Z0NBQ2ZDLENBQVUsYUFBQyxDQUFNO2dDQUNqQkMsRUFBRSxFQUFFLENBQUM7b0NBQUNDLEVBQUUsRUFBRSxDQUFDO2dDQUFDLENBQUM7Z0NBQ2JDLE9BQU8sTUFBUVYsWUFBWTs7c0hBRTFCUCxpRUFBUTs7Ozs7Ozs7Ozt3R0FHVkYsaUVBQVU7Z0NBQ1RvQixTQUFTLEVBQUMsQ0FBSztnQ0FDZkgsRUFBRSxFQUFFLENBQUM7b0NBQ0hJLFFBQVEsRUFBRSxDQUFDO29DQUNYQyxVQUFVLEVBQUUsR0FBRztvQ0FDZkMsS0FBSyxFQUFFLENBQU87b0NBQ2RDLFNBQVMsRUFBRSxDQUFRO2dDQUNyQixDQUFDO3NIQUVBbkIsNERBQUk7b0NBQUNvQixJQUFJLEVBQUMsQ0FBRztvQ0FBQ0MsS0FBSyxFQUFFLENBQUM7d0NBQUNYLEtBQUssRUFBRSxDQUFPO3dDQUFFWSxjQUFjLEVBQUUsQ0FBTTtvQ0FBQyxDQUFDOzt3Q0FBRSxDQUMvQzt3Q0FBQyxDQUFHOzs7Ozs7Ozs7Ozs7d0dBSXhCM0IsaUVBQVU7Z0NBQUNvQixTQUFTLEVBQUMsQ0FBSztnQ0FBQ0gsRUFBRSxFQUFFLENBQUM7b0NBQUNJLFFBQVEsRUFBRSxDQUFDO29DQUFFQyxVQUFVLEVBQUUsR0FBRztnQ0FBQyxDQUFDOzBDQUM3RFosSUFBSSxDQUFDa0IsSUFBSSxHQUNSbEIsSUFBSSxDQUFDa0IsSUFBSSwrRUFFUnZCLDREQUFJO29DQUFDb0IsSUFBSSxFQUFDLENBQVE7MEhBQ2hCckIsNkRBQU07d0NBQ0x5QixPQUFPLEVBQUMsQ0FBVTt3Q0FDbEJILEtBQUssRUFBRSxDQUFDOzRDQUFDWCxLQUFLLEVBQUUsQ0FBTzs0Q0FBRWUsV0FBVyxFQUFFLENBQU87d0NBQUMsQ0FBQztrREFDaEQsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNsQixDQUFDO0FBRUQsaUVBQWV2QixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZXNjb3JlYW55Y2FyLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyL05hdmlnYXRpb25CYXIudHN4P2MyYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51XCI7XG5pbXBvcnQgRHJhd2VyIGZyb20gXCIuLi9EcmF3ZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQG11aS9tYXRlcmlhbC9MaW5rXCI7XG5pbXBvcnQgeyBNYWluQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2NvbnRleHRcIjtcblxuaW50ZXJmYWNlIE5hdmlnYXRpb25CYXJQcm9wcyB7fVxuXG5jb25zdCBOYXZpZ2F0aW9uQmFyOiBSZWFjdC5GQzxOYXZpZ2F0aW9uQmFyUHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCB7IGRyYXdlciwgdG9nZ2xlRHJhd2VyLCB1c2VyIH0gPSBSZWFjdC51c2VDb250ZXh0KE1haW5Db250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RHJhd2VyIC8+XG4gICAgICA8Qm94PlxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcbiAgICAgICAgICAgICAgc3g9e3sgbXI6IDIgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRHJhd2VyKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgV2VTY29yZUFueUNhci5jb217XCIgXCJ9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDAsIGZvbnRXZWlnaHQ6IDIwMCB9fT5cbiAgICAgICAgICAgICAge3VzZXIubmFtZSA/IChcbiAgICAgICAgICAgICAgICB1c2VyLm5hbWVcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJvcmRlckNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJJY29uQnV0dG9uIiwiTWVudUljb24iLCJEcmF3ZXIiLCJCdXR0b24iLCJMaW5rIiwiTWFpbkNvbnRleHQiLCJOYXZpZ2F0aW9uQmFyIiwiZHJhd2VyIiwidG9nZ2xlRHJhd2VyIiwidXNlciIsInVzZUNvbnRleHQiLCJwb3NpdGlvbiIsInNpemUiLCJlZGdlIiwiY29sb3IiLCJhcmlhLWxhYmVsIiwic3giLCJtciIsIm9uQ2xpY2siLCJjb21wb25lbnQiLCJmbGV4R3JvdyIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsInRleHRBbGlnbiIsImhyZWYiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwibmFtZSIsInZhcmlhbnQiLCJib3JkZXJDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavigationBar/NavigationBar.tsx\n");

/***/ }),

/***/ "./components/NavigationBar/index.ts":
/*!*******************************************!*\
  !*** ./components/NavigationBar/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationBar */ \"./components/NavigationBar/NavigationBar.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NavigationBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFM0MsaUVBQWVBLHNEQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZXNjb3JlYW55Y2FyLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyL2luZGV4LnRzPzQ0MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4vTmF2aWdhdGlvbkJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xuIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25CYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavigationBar/index.ts\n");

/***/ }),

/***/ "./context/context.tsx":
/*!*****************************!*\
  !*** ./context/context.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainContext\": () => (/* binding */ MainContext),\n/* harmony export */   \"MainProvider\": () => (/* binding */ MainProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_motCalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/motCalls */ \"./services/motCalls.ts\");\n\n\n\nconst NullFunction = ()=>{\n    return;\n};\nconst MainContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: {},\n    vehicle: {},\n    drawer: false,\n    loading: false,\n    error: false,\n    getScore: NullFunction,\n    login: NullFunction,\n    setError: NullFunction,\n    setVehicle: NullFunction,\n    toggleDrawer: NullFunction\n});\nconst MainProvider = ({ children  })=>{\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: vehicle1 , 1: setVehicle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        registration: \"sample reg\"\n    });\n    const { 0: drawer , 1: setDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getScore = async (registration)=>{\n        const response = await (0,_services_motCalls__WEBPACK_IMPORTED_MODULE_2__.MotApiCall)(registration);\n        setVehicle(JSON.parse(response));\n    };\n    const login = (email, password)=>{\n        setLoading(true);\n        setTimeout(()=>{\n            setUser({\n                firstName: \"Nathan\",\n                email\n            });\n            setLoading(false);\n        }, 1000);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContext.Provider, {\n        value: {\n            user,\n            vehicle: vehicle1,\n            drawer,\n            loading,\n            error,\n            setError: (value)=>setError(value)\n            ,\n            toggleDrawer: ()=>setDrawer(!drawer)\n            ,\n            getScore,\n            setVehicle: (vehicle)=>setVehicle(vehicle)\n            ,\n            login: (email, password)=>login(email, password)\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/context/context.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0U7QUFpQmpELEtBQUssQ0FBQ0csWUFBWSxPQUFTLENBQUM7SUFDMUIsTUFBTTtBQUNSLENBQUM7QUFFTSxLQUFLLENBQUNDLFdBQVcsaUJBQUdKLG9EQUFhLENBQWtCLENBQUM7SUFDekRLLElBQUksRUFBRSxDQUFDLENBQUM7SUFDUkMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNYQyxNQUFNLEVBQUUsS0FBSztJQUNiQyxPQUFPLEVBQUUsS0FBSztJQUNkQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxRQUFRLEVBQUVQLFlBQVk7SUFDdEJRLEtBQUssRUFBRVIsWUFBWTtJQUNuQlMsUUFBUSxFQUFFVCxZQUFZO0lBQ3RCVSxVQUFVLEVBQUVWLFlBQVk7SUFDeEJXLFlBQVksRUFBRVgsWUFBWTtBQUM1QixDQUFDO0FBRU0sS0FBSyxDQUFDWSxZQUFZLElBQWdDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3pFLEtBQUssTUFBRVIsT0FBTyxNQUFFUyxVQUFVLE1BQUloQiwrQ0FBUSxDQUFDLEtBQUs7SUFDNUMsS0FBSyxNQUFFSSxJQUFJLE1BQUVhLE9BQU8sTUFBSWpCLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLEtBQUssTUFBRUssUUFBTyxNQUFFTyxVQUFVLE1BQUlaLCtDQUFRLENBQUMsQ0FBQztRQUFDa0IsWUFBWSxFQUFFLENBQVk7SUFBQyxDQUFDO0lBQ3JFLEtBQUssTUFBRVosTUFBTSxNQUFFYSxTQUFTLE1BQUluQiwrQ0FBUSxDQUFDLEtBQUs7SUFDMUMsS0FBSyxNQUFFUSxLQUFLLE1BQUVHLFFBQVEsTUFBSVgsK0NBQVEsQ0FBQyxLQUFLO0lBRXhDLEtBQUssQ0FBQ1MsUUFBUSxVQUFVUyxZQUFvQixHQUFLLENBQUM7UUFDaEQsS0FBSyxDQUFDRSxRQUFRLEdBQUcsS0FBSyxDQUFDbkIsOERBQVUsQ0FBQ2lCLFlBQVk7UUFDOUNOLFVBQVUsQ0FBQ1MsSUFBSSxDQUFDQyxLQUFLLENBQUNGLFFBQVE7SUFDaEMsQ0FBQztJQUVELEtBQUssQ0FBQ1YsS0FBSyxJQUFJYSxLQUFhLEVBQUVDLFFBQWdCLEdBQUssQ0FBQztRQUNsRFIsVUFBVSxDQUFDLElBQUk7UUFFZlMsVUFBVSxLQUFPLENBQUM7WUFDaEJSLE9BQU8sQ0FBQyxDQUFDO2dCQUFDUyxTQUFTLEVBQUUsQ0FBUTtnQkFBRUgsS0FBSztZQUFDLENBQUM7WUFDdENQLFVBQVUsQ0FBQyxLQUFLO1FBQ2xCLENBQUMsRUFBRSxJQUFJO0lBQ1QsQ0FBQztJQUVELE1BQU0sNkVBQ0hiLFdBQVcsQ0FBQ3dCLFFBQVE7UUFDbkJDLEtBQUssRUFBRSxDQUFDO1lBQ054QixJQUFJO1lBQ0pDLE9BQU8sRUFBUEEsUUFBTztZQUNQQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsS0FBSztZQUNMRyxRQUFRLEdBQUdpQixLQUFjLEdBQUtqQixRQUFRLENBQUNpQixLQUFLOztZQUM1Q2YsWUFBWSxNQUFRTSxTQUFTLEVBQUViLE1BQU07O1lBQ3JDRyxRQUFRO1lBQ1JHLFVBQVUsR0FBR1AsT0FBWSxHQUFLTyxVQUFVLENBQUNQLE9BQU87O1lBQ2hESyxLQUFLLEdBQUdhLEtBQWEsRUFBRUMsUUFBZ0IsR0FBS2QsS0FBSyxDQUFDYSxLQUFLLEVBQUVDLFFBQVE7UUFDbkUsQ0FBQztrQkFFQVQsUUFBUTs7Ozs7O0FBR2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlc2NvcmVhbnljYXIvLi9jb250ZXh0L2NvbnRleHQudHN4P2YxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vdEFwaUNhbGwgfSBmcm9tIFwiLi4vc2VydmljZXMvbW90Q2FsbHNcIjtcblxuaW50ZXJmYWNlIE1haW5Db250ZXh0VHlwZSB7XG4gIHVzZXI6IGFueTtcbiAgdmVoaWNsZTogYW55O1xuICBkcmF3ZXI6IGJvb2xlYW47XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGdldFNjb3JlOiBGdW5jdGlvbjtcbiAgbG9naW46IEZ1bmN0aW9uO1xuICBzZXRWZWhpY2xlOiBGdW5jdGlvbjtcbiAgdG9nZ2xlRHJhd2VyOiBGdW5jdGlvbjtcbiAgc2V0RXJyb3I6IEZ1bmN0aW9uO1xuICBlcnJvcjogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIE1haW5Db250ZXh0UHJvcHMge31cblxuY29uc3QgTnVsbEZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm47XG59O1xuXG5leHBvcnQgY29uc3QgTWFpbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PE1haW5Db250ZXh0VHlwZT4oe1xuICB1c2VyOiB7fSxcbiAgdmVoaWNsZToge30sXG4gIGRyYXdlcjogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogZmFsc2UsXG4gIGdldFNjb3JlOiBOdWxsRnVuY3Rpb24sXG4gIGxvZ2luOiBOdWxsRnVuY3Rpb24sXG4gIHNldEVycm9yOiBOdWxsRnVuY3Rpb24sXG4gIHNldFZlaGljbGU6IE51bGxGdW5jdGlvbixcbiAgdG9nZ2xlRHJhd2VyOiBOdWxsRnVuY3Rpb24sXG59KTtcblxuZXhwb3J0IGNvbnN0IE1haW5Qcm92aWRlcjogUmVhY3QuRkM8TWFpbkNvbnRleHRQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbdmVoaWNsZSwgc2V0VmVoaWNsZV0gPSB1c2VTdGF0ZSh7IHJlZ2lzdHJhdGlvbjogXCJzYW1wbGUgcmVnXCIgfSk7XG4gIGNvbnN0IFtkcmF3ZXIsIHNldERyYXdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldFNjb3JlID0gYXN5bmMgKHJlZ2lzdHJhdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBNb3RBcGlDYWxsKHJlZ2lzdHJhdGlvbik7XG4gICAgc2V0VmVoaWNsZShKU09OLnBhcnNlKHJlc3BvbnNlKSk7XG4gIH07XG5cbiAgY29uc3QgbG9naW4gPSAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFVzZXIoeyBmaXJzdE5hbWU6IFwiTmF0aGFuXCIsIGVtYWlsIH0pO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIHZlaGljbGUsXG4gICAgICAgIGRyYXdlcixcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIHNldEVycm9yOiAodmFsdWU6IGJvb2xlYW4pID0+IHNldEVycm9yKHZhbHVlKSxcbiAgICAgICAgdG9nZ2xlRHJhd2VyOiAoKSA9PiBzZXREcmF3ZXIoIWRyYXdlciksXG4gICAgICAgIGdldFNjb3JlLFxuICAgICAgICBzZXRWZWhpY2xlOiAodmVoaWNsZTogYW55KSA9PiBzZXRWZWhpY2xlKHZlaGljbGUpLFxuICAgICAgICBsb2dpbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IGxvZ2luKGVtYWlsLCBwYXNzd29yZCksXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01haW5Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJNb3RBcGlDYWxsIiwiTnVsbEZ1bmN0aW9uIiwiTWFpbkNvbnRleHQiLCJ1c2VyIiwidmVoaWNsZSIsImRyYXdlciIsImxvYWRpbmciLCJlcnJvciIsImdldFNjb3JlIiwibG9naW4iLCJzZXRFcnJvciIsInNldFZlaGljbGUiLCJ0b2dnbGVEcmF3ZXIiLCJNYWluUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldExvYWRpbmciLCJzZXRVc2VyIiwicmVnaXN0cmF0aW9uIiwic2V0RHJhd2VyIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJlbWFpbCIsInBhc3N3b3JkIiwic2V0VGltZW91dCIsImZpcnN0TmFtZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/context.tsx\n");

/***/ }),

/***/ "./layouts/Site.tsx":
/*!**************************!*\
  !*** ./layouts/Site.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavigationBar */ \"./components/NavigationBar/index.ts\");\n\n\n\n\nconst Site = ({ content  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `font-content text-skin-primary overflow-hidden `,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"WeScoreAnyCar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/layouts/Site.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"//TODO: SEO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/layouts/Site.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        type: \"text/javascript\",\n                        src: \"https://api.getcandid.com/scripts/widget.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/layouts/Site.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://use.fontawesome.com/releases/v5.6.1/css/all.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/layouts/Site.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/layouts/Site.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"awsrum\",\n                src: \"/js/aws/awsrum.js\",\n                async: true,\n                strategy: \"beforeInteractive\",\n                onError: (e)=>{\n                    console.error(\"Script failed to load\", e);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/layouts/Site.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/layouts/Site.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/layouts/Site.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/layouts/Site.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Site);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXRzL1NpdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNJO0FBQ3VCO0FBTXZELEtBQUssQ0FBQ0csSUFBSSxJQUF5QixDQUFDLENBQUNDLE9BQU8sRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNsRCxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsR0FBRywrQ0FBK0M7O3dGQUM3RE4sa0RBQUk7O2dHQUNGTyxDQUFLO2tDQUFDLENBQWE7Ozs7OztnR0FDbkJDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDTCxPQUFPLEVBQUMsQ0FBYTs7Ozs7O2dHQUU3Q00sQ0FBTTt3QkFDTEMsS0FBSzt3QkFDTEMsSUFBSSxFQUFDLENBQWlCO3dCQUN0QkMsR0FBRyxFQUFDLENBQTZDOzs7Ozs7Z0dBRWxEQyxDQUFJO3dCQUNIQyxHQUFHLEVBQUMsQ0FBWTt3QkFDaEJDLElBQUksRUFBQyxDQUF5RDs7Ozs7Ozs7Ozs7O3dGQUdqRWYsb0RBQU07Z0JBQ0xnQixFQUFFLEVBQUMsQ0FBUTtnQkFDWEosR0FBRyxFQUFDLENBQW1CO2dCQUN2QkYsS0FBSztnQkFDTE8sUUFBUSxFQUFDLENBQW1CO2dCQUM1QkMsT0FBTyxHQUFHQyxDQUFVLEdBQUssQ0FBQztvQkFDeEJDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQXVCLHdCQUFFRixDQUFDO2dCQUMxQyxDQUFDOzs7Ozs7d0ZBRUZsQixpRUFBYTs7Ozs7d0ZBQ2JxQixDQUFJOzBCQUFFbkIsT0FBTzs7Ozs7Ozs7Ozs7O0FBR3BCLENBQUM7QUFFRCxpRUFBZUQsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VzY29yZWFueWNhci8uL2xheW91dHMvU2l0ZS50c3g/NTIzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhclwiO1xuXG5pbnRlcmZhY2UgU2l0ZVByb3BzIHtcbiAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBTaXRlOiBSZWFjdC5GQzxTaXRlUHJvcHM+ID0gKHsgY29udGVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bmb250LWNvbnRlbnQgdGV4dC1za2luLXByaW1hcnkgb3ZlcmZsb3ctaGlkZGVuIGB9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XZVNjb3JlQW55Q2FyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIi8vVE9ETzogU0VPXCIgLz5cblxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2FwaS5nZXRjYW5kaWQuY29tL3NjcmlwdHMvd2lkZ2V0LmpzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjYuMS9jc3MvYWxsLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U2NyaXB0XG4gICAgICAgIGlkPVwiYXdzcnVtXCJcbiAgICAgICAgc3JjPVwiL2pzL2F3cy9hd3NydW0uanNcIlxuICAgICAgICBhc3luY1xuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcbiAgICAgICAgb25FcnJvcj17KGU6IHVua25vd24pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2NyaXB0IGZhaWxlZCB0byBsb2FkXCIsIGUpO1xuICAgICAgICB9fVxuICAgICAgPjwvU2NyaXB0PlxuICAgICAgPE5hdmlnYXRpb25CYXIgLz5cbiAgICAgIDxtYWluPntjb250ZW50fTwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGU7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlNjcmlwdCIsIk5hdmlnYXRpb25CYXIiLCJTaXRlIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJzY3JpcHQiLCJhc3luYyIsInR5cGUiLCJzcmMiLCJsaW5rIiwicmVsIiwiaHJlZiIsImlkIiwic3RyYXRlZ3kiLCJvbkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layouts/Site.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./context/context.tsx\");\n/* harmony import */ var _layouts_Site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Site */ \"./layouts/Site.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_context__WEBPACK_IMPORTED_MODULE_2__.MainProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Site__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, void 0, void 0)\n        }, void 0, false, {\n            fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Nathandoore/Downloads/WeScoreAnyCar/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUVtQjtBQUNUO1NBRS9CRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLDZFQUNISiwwREFBWTs4RkFDVkMscURBQVU7WUFBQ0ksT0FBTyw4RUFBR0YsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBR25ELENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VzY29yZWFueWNhci8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBNYWluUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgU2l0ZUxheW91dCBmcm9tIFwiLi4vbGF5b3V0cy9TaXRlXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8TWFpblByb3ZpZGVyPlxuICAgICAgPFNpdGVMYXlvdXQgY29udGVudD17PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPn0gLz5cbiAgICA8L01haW5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiTWFpblByb3ZpZGVyIiwiU2l0ZUxheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./services/motCalls.ts":
/*!******************************!*\
  !*** ./services/motCalls.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MotApiCall\": () => (/* binding */ MotApiCall)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MOT_API_ADDRESS = \"https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=\";\nconst TOKEN = \"mc5vxMFDUn8GDjWVHfW636FgFPJ7XmsCkQ1OoBdd\";\nconst HEADERS = {\n    headers: {\n        \"x-api-key\": TOKEN,\n        Accept: \"application/json+v6\",\n        \"Content-Type\": \"applicaiton/json\"\n    }\n};\nconst MotApiCall = async (registration)=>{\n    try {\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MOT_API_ADDRESS + registration, HEADERS);\n        return data[0];\n    } catch (err) {\n        console.log(\"error\", err);\n        return {\n            registration: \"\",\n            engineSize: \"\",\n            fuelType: \"\",\n            make: \"\",\n            model: \"\",\n            motTests: [],\n            primaryColour: \"\",\n            firstUsedDate: \"\"\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9tb3RDYWxscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFekIsS0FBSyxDQUFDQyxlQUFlLEdBQ25CLENBQThFO0FBQ2hGLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQTBDO0FBQ3hELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDZkMsT0FBTyxFQUFFLENBQUM7UUFDUixDQUFXLFlBQUVGLEtBQUs7UUFDbEJHLE1BQU0sRUFBRSxDQUFxQjtRQUM3QixDQUFjLGVBQUUsQ0FBa0I7SUFDcEMsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUNDLFVBQVUsVUFBVUMsWUFBb0IsR0FBSyxDQUFDO0lBQ3pELEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNSLGdEQUFTLENBQUNDLGVBQWUsR0FBR00sWUFBWSxFQUFFSixPQUFPO1FBQ3hFLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsS0FBSyxFQUFFRSxHQUFHLEVBQUUsQ0FBQztRQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFPLFFBQUVGLEdBQUc7UUFDeEIsTUFBTSxDQUFDLENBQUM7WUFDTkgsWUFBWSxFQUFFLENBQUU7WUFDaEJNLFVBQVUsRUFBRSxDQUFFO1lBQ2RDLFFBQVEsRUFBRSxDQUFFO1lBQ1pDLElBQUksRUFBRSxDQUFFO1lBQ1JDLEtBQUssRUFBRSxDQUFFO1lBQ1RDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDWkMsYUFBYSxFQUFFLENBQUU7WUFDakJDLGFBQWEsRUFBRSxDQUFFO1FBQ25CLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlc2NvcmVhbnljYXIvLi9zZXJ2aWNlcy9tb3RDYWxscy50cz81NDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgTU9UX0FQSV9BRERSRVNTID1cbiAgXCJodHRwczovL2JldGEuY2hlY2stbW90LnNlcnZpY2UuZ292LnVrL3RyYWRlL3ZlaGljbGVzL21vdC10ZXN0cz9yZWdpc3RyYXRpb249XCI7XG5jb25zdCBUT0tFTiA9IFwibWM1dnhNRkRVbjhHRGpXVkhmVzYzNkZnRlBKN1htc0NrUTFPb0JkZFwiO1xuY29uc3QgSEVBREVSUyA9IHtcbiAgaGVhZGVyczoge1xuICAgIFwieC1hcGkta2V5XCI6IFRPS0VOLFxuICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uK3Y2XCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhaXRvbi9qc29uXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTW90QXBpQ2FsbCA9IGFzeW5jIChyZWdpc3RyYXRpb246IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KE1PVF9BUElfQUREUkVTUyArIHJlZ2lzdHJhdGlvbiwgSEVBREVSUyk7XG4gICAgcmV0dXJuIGRhdGFbMF07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnaXN0cmF0aW9uOiBcIlwiLFxuICAgICAgZW5naW5lU2l6ZTogXCJcIixcbiAgICAgIGZ1ZWxUeXBlOiBcIlwiLFxuICAgICAgbWFrZTogXCJcIixcbiAgICAgIG1vZGVsOiBcIlwiLFxuICAgICAgbW90VGVzdHM6IFtdLFxuICAgICAgcHJpbWFyeUNvbG91cjogXCJcIixcbiAgICAgIGZpcnN0VXNlZERhdGU6IFwiXCIsXG4gICAgfTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIk1PVF9BUElfQUREUkVTUyIsIlRPS0VOIiwiSEVBREVSUyIsImhlYWRlcnMiLCJBY2NlcHQiLCJNb3RBcGlDYWxsIiwicmVnaXN0cmF0aW9uIiwiZGF0YSIsImdldCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlbmdpbmVTaXplIiwiZnVlbFR5cGUiLCJtYWtlIiwibW9kZWwiLCJtb3RUZXN0cyIsInByaW1hcnlDb2xvdXIiLCJmaXJzdFVzZWREYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/motCalls.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/icons-material/Assignment":
/*!*************************************************!*\
  !*** external "@mui/icons-material/Assignment" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Assignment");

/***/ }),

/***/ "@mui/icons-material/Close":
/*!********************************************!*\
  !*** external "@mui/icons-material/Close" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ "@mui/icons-material/Home":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Home" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ "@mui/icons-material/Login":
/*!********************************************!*\
  !*** external "@mui/icons-material/Login" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Login");

/***/ }),

/***/ "@mui/icons-material/Logout":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Logout" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ "@mui/icons-material/ManageAccounts":
/*!*****************************************************!*\
  !*** external "@mui/icons-material/ManageAccounts" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ManageAccounts");

/***/ }),

/***/ "@mui/icons-material/Menu":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Menu" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Divider":
/*!****************************************!*\
  !*** external "@mui/material/Divider" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ "@mui/material/Drawer":
/*!***************************************!*\
  !*** external "@mui/material/Drawer" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/Link":
/*!*************************************!*\
  !*** external "@mui/material/Link" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ "@mui/material/List":
/*!*************************************!*\
  !*** external "@mui/material/List" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ "@mui/material/ListItem":
/*!*****************************************!*\
  !*** external "@mui/material/ListItem" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ "@mui/material/ListItemIcon":
/*!*********************************************!*\
  !*** external "@mui/material/ListItemIcon" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ "@mui/material/ListItemText":
/*!*********************************************!*\
  !*** external "@mui/material/ListItemText" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();