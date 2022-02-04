"use strict";
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
exports.id = "pages/api/handler/[email]";
exports.ids = ["pages/api/handler/[email]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./pages/api/handler/[email].js":
/*!**************************************!*\
  !*** ./pages/api/handler/[email].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user */ \"./services/user.ts\");\n/* harmony import */ var _services_mongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/mongo */ \"./services/mongo.js\");\n\n\n\nasync function handler(req, res) {\n    // switch the methods\n    switch(req.method){\n        case \"GET\":\n            {\n                return getSaved(req, res);\n            }\n    }\n};\nasync function getSaved(req, res) {\n    const { email  } = req.query;\n    console.log('res', email);\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://james:Jamied123@cars.natt5.mongodb.net/cars?retryWrites=true&w=majority\");\n    try {\n        const client = await _services_mongo__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        const db = client.db(\"cars\");\n        const user = await db.collection(\"users\").findOne({\n            email\n        });\n        console.log('resss', user);\n        return res.json({\n            message: JSON.parse(JSON.stringify(user)),\n            success: true\n        });\n    } catch (error) {\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaGFuZGxlci9bZW1haWxdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBQ2U7QUFDSztBQUVwQyxlQUFlRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsRUFBcUI7SUFDckIsTUFBTSxDQUFFRCxHQUFHLENBQUNFLE1BQU07UUFFaEIsSUFBSSxDQUFDLENBQUs7WUFBRSxDQUFDO2dCQUNYLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSCxHQUFHLEVBQUVDLEdBQUc7WUFDMUIsQ0FBQzs7QUFHTCxDQUFDO2VBRWNFLFFBQVEsQ0FBQ0gsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUNqQyxLQUFLLENBQUMsQ0FBQyxDQUFDRyxLQUFLLEVBQUMsQ0FBQyxHQUFHSixHQUFHLENBQUNLLEtBQUs7SUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUssTUFBRUgsS0FBSztJQUN4QixLQUFLLENBQUNSLHVEQUFnQixDQUNwQixDQUF1RjtJQUd6RixHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ2EsTUFBTSxHQUFHLEtBQUssQ0FBQ1gsdURBQWE7UUFDaEMsS0FBSyxDQUFDWSxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQU07UUFFM0IsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDRCxFQUFFLENBQ2xCRSxVQUFVLENBQUMsQ0FBTyxRQUNsQkMsT0FBTyxDQUFDLENBQUM7WUFDVFQsS0FBSztRQUNOLENBQUM7UUFFREUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTyxRQUFFSSxJQUFJO1FBRXpCLE1BQU0sQ0FBQ1YsR0FBRyxDQUFDYSxJQUFJLENBQUMsQ0FBQztZQUNmQyxPQUFPLEVBQUVDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1AsSUFBSTtZQUN2Q1EsT0FBTyxFQUFFLElBQUk7UUFDakIsQ0FBQztJQUNMLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDbkIsR0FBRyxDQUFDYSxJQUFJLENBQUMsQ0FBQztZQUNmQyxPQUFPLEVBQUUsR0FBRyxDQUFDTSxLQUFLLENBQUNELEtBQUssRUFBRUwsT0FBTztZQUNqQ0ksT0FBTyxFQUFFLEtBQUs7UUFDaEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VzY29yZWFueWNhci8uL3BhZ2VzL2FwaS9oYW5kbGVyL1tlbWFpbF0uanM/MGNmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy91c2VyXCI7XG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvbW9uZ29cIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvLyBzd2l0Y2ggdGhlIG1ldGhvZHNcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICBcbiAgICBjYXNlIFwiR0VUXCI6IHtcbiAgICAgIHJldHVybiBnZXRTYXZlZChyZXEsIHJlcyk7XG4gICAgfVxuXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U2F2ZWQocmVxLCByZXMpIHtcbiAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLnF1ZXJ5XG4gIGNvbnNvbGUubG9nKCdyZXMnLCBlbWFpbClcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vamFtZXM6SmFtaWVkMTIzQGNhcnMubmF0dDUubW9uZ29kYi5uZXQvY2Fycz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcbiAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiY2Fyc1wiKTtcblxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiXG4gICAgICAgIC5jb2xsZWN0aW9uKFwidXNlcnNcIilcbiAgICAgICAgLmZpbmRPbmUoe1xuICAgICAgICAgZW1haWxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zb2xlLmxvZygncmVzc3MnLCB1c2VyKVxuXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgICAgbWVzc2FnZTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1c2VyKSksXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICBtZXNzYWdlOiBuZXcgRXJyb3IoZXJyb3IpLm1lc3NhZ2UsXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlVzZXJNb2RlbCIsImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZ2V0U2F2ZWQiLCJlbWFpbCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJjbGllbnQiLCJkYiIsInVzZXIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImpzb24iLCJtZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/handler/[email].js\n");

/***/ }),

/***/ "./services/mongo.js":
/*!***************************!*\
  !*** ./services/mongo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://james:Jamied123@cars.natt5.mongodb.net/cars?retryWrites=true&w=majority\";\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!uri) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9tb25nby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDQyxHQUFHLEdBQ1AsQ0FBdUY7QUFDekYsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNmQyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCQyxlQUFlLEVBQUUsSUFBSTtBQUN2QixDQUFDO0FBRUQsR0FBRyxDQUFDQyxNQUFNO0FBQ1YsR0FBRyxDQUFDQyxhQUFhO0FBRWpCLEVBQUUsR0FBR0wsR0FBRyxFQUFFLENBQUM7SUFDVCxLQUFLLENBQUMsR0FBRyxDQUFDTSxLQUFLLENBQUMsQ0FBeUM7QUFDM0QsQ0FBQztBQUVELEVBQUUsRUFoQkYsSUFnQjBDLEVBQUUsQ0FBQztJQUMzQyxFQUErRDtJQUMvRCxFQUE2RTtJQUM3RSxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQW1CLEVBQUUsQ0FBQztRQUNoQ0osTUFBTSxHQUFHLEdBQUcsQ0FBQ0wsZ0RBQVcsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPO1FBQ3JDTSxNQUFNLENBQUNDLG1CQUFtQixHQUFHSixNQUFNLENBQUNLLE9BQU87SUFDN0MsQ0FBQztJQUNESixhQUFhLEdBQUdFLE1BQU0sQ0FBQ0MsbUJBQW1CO0FBQzVDLENBQUMsTUFBTSxFQUlOO0FBRUQsRUFBaUU7QUFDakUsRUFBOEQ7QUFDOUQsaUVBQWVILGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlc2NvcmVhbnljYXIvLi9zZXJ2aWNlcy9tb25nby5qcz9iMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgdXJpID1cbiAgXCJtb25nb2RiK3NydjovL2phbWVzOkphbWllZDEyM0BjYXJzLm5hdHQ1Lm1vbmdvZGIubmV0L2NhcnM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XG5jb25zdCBvcHRpb25zID0ge1xuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbn07XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKCF1cmkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsXCIpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XG59IGVsc2Uge1xuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsIm9wdGlvbnMiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/mongo.js\n");

/***/ }),

/***/ "./services/user.ts":
/*!**************************!*\
  !*** ./services/user.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst savedSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    registration: {\n        type: String,\n        required: true\n    },\n    engineSize: {\n        type: String,\n        required: true\n    },\n    fuelType: {\n        type: String,\n        required: true\n    },\n    make: {\n        type: String,\n        required: true\n    },\n    model: {\n        type: String,\n        required: true\n    },\n    primaryColour: {\n        type: String,\n        required: true\n    },\n    score: {\n        type: Number,\n        required: true\n    },\n    avgScore: {\n        type: Number,\n        required: true\n    }\n});\nlet userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: String,\n    saved: [\n        savedSchema\n    ]\n}, {\n    typeKey: \"$type\"\n});\nlet user = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy91c2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLFdBQVcsR0FBRyxHQUFHLENBQUNELHdEQUFlLENBQUMsQ0FBQztJQUN2Q0csWUFBWSxFQUFFLENBQUM7UUFDYkMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREMsVUFBVSxFQUFFLENBQUM7UUFDWEgsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREUsUUFBUSxFQUFFLENBQUM7UUFDVEosSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREcsSUFBSSxFQUFFLENBQUM7UUFDTEwsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREksS0FBSyxFQUFFLENBQUM7UUFDTk4sSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREssYUFBYSxFQUFFLENBQUM7UUFDZFAsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDRE0sS0FBSyxFQUFFLENBQUM7UUFDTlIsSUFBSSxFQUFFUyxNQUFNO1FBQ1pQLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDRFEsUUFBUSxFQUFFLENBQUM7UUFDVFYsSUFBSSxFQUFFUyxNQUFNO1FBQ1pQLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBRyxDQUFDUyxVQUFVLEdBQUcsR0FBRyxDQUFDZix3REFBZSxDQUNsQyxDQUFDO0lBQ0NnQixLQUFLLEVBQUVYLE1BQU07SUFDYlksS0FBSyxFQUFFLENBQUNoQjtRQUFBQSxXQUFXO0lBQUEsQ0FBQztBQUN0QixDQUFDLEVBQ0QsQ0FBQztJQUFDaUIsT0FBTyxFQUFFLENBQU87QUFBQyxDQUFDO0FBR3RCLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHbkIscURBQWMsQ0FBQyxDQUFNLE9BQUVlLFVBQVUsS0FBS2YscURBQWMsQ0FBQyxDQUFNO0FBRXRFLGlFQUFlbUIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlc2NvcmVhbnljYXIvLi9zZXJ2aWNlcy91c2VyLnRzPzc0ODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBzYXZlZFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICByZWdpc3RyYXRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGVuZ2luZVNpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGZ1ZWxUeXBlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBtYWtlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBtb2RlbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgcHJpbWFyeUNvbG91cjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgc2NvcmU6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGF2Z1Njb3JlOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxufSk7XG5cbmxldCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIGVtYWlsOiBTdHJpbmcsXG4gICAgc2F2ZWQ6IFtzYXZlZFNjaGVtYV0sXG4gIH0sXG4gIHsgdHlwZUtleTogXCIkdHlwZVwiIH1cbik7XG5cbmxldCB1c2VyID0gbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJykgXG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInNhdmVkU2NoZW1hIiwiU2NoZW1hIiwicmVnaXN0cmF0aW9uIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW5naW5lU2l6ZSIsImZ1ZWxUeXBlIiwibWFrZSIsIm1vZGVsIiwicHJpbWFyeUNvbG91ciIsInNjb3JlIiwiTnVtYmVyIiwiYXZnU2NvcmUiLCJ1c2VyU2NoZW1hIiwiZW1haWwiLCJzYXZlZCIsInR5cGVLZXkiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/handler/[email].js"));
module.exports = __webpack_exports__;

})();