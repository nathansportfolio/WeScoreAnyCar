"use strict";
(() => {
var exports = {};
exports.id = 559;
exports.ids = [559];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 3360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _services_motCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(611);
/* harmony import */ var _services_taxApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9677);
/* harmony import */ var _services_newMongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1244);



async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case "GET":
            {
                return getVehicleData(req, res);
            }
    }
};
async function getVehicleData(req, res) {
    const { registration  } = req.query;
    const motResponse = await (0,_services_motCalls__WEBPACK_IMPORTED_MODULE_0__/* .MotApiCall */ .t)(registration);
    return res.json({
        message: JSON.parse(JSON.stringify(motResponse)),
        success: true
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [244,356], () => (__webpack_exec__(3360)));
module.exports = __webpack_exports__;

})();