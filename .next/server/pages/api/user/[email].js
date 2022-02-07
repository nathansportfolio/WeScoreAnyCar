"use strict";
(() => {
var exports = {};
exports.id = 321;
exports.ids = [321];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 3310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _services_newMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1244);

async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case "GET":
            {
                return getSaved(req, res);
            }
    }
};
async function getSaved(req, res) {
    const { email  } = req.query;
    try {
        const connected = await (0,_services_newMongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        const user = await connected.db.collection("users").findOne({
            email
        });
        return res.json({
            message: JSON.parse(JSON.stringify(user)),
            success: true
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [244], () => (__webpack_exec__(3310)));
module.exports = __webpack_exports__;

})();