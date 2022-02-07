"use strict";
(() => {
var exports = {};
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 2325:
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
function generateScrapped(cleanedMotVehicles) {
    const scrappedTotal = cleanedMotVehicles.filter((vehicle)=>vehicle.scrapped > 65000
    );
    let scrappedTotalNum = 0;
    scrappedTotal.map((vehicle)=>{
        scrappedTotalNum += vehicle.scrapped;
    });
    const completeScrappedValue = scrappedTotalNum / scrappedTotal.length;
    const numberOfScrapped = scrappedTotal.length;
    return {
        completeScrappedValue,
        numberOfScrapped
    };
}
function generateMotScoresByYear(mots) {
    let scoreGen = 0;
    return mots.map((mot, index)=>{
        const currentYear = mot.completedDate.split(".")[0];
        let nextYear;
        if (mots[index + 1]) {
            nextYear = mots[index + 1].completedDate.split(".")[0];
        } else {
            return {
                ...mot,
                scoreGen,
                completedDate: currentYear
            };
        }
        if (currentYear === nextYear) {
            scoreGen += mot.scoreGen;
            return false;
        } else {
            return {
                ...mot,
                scoreGen,
                completedDate: currentYear
            };
        }
    }).filter((mot)=>mot !== false
    );
}
function generateAverageMots(motYears, cleanedMotVehicles) {
    return motYears.map((year)=>{
        const collectedMotsOneYear = cleanedMotVehicles.map((car)=>({
                ...car,
                mots: car.mots.filter((mot)=>mot.completedDate === year
                )
            })
        );
        let sumOfMotScores = 0;
        collectedMotsOneYear.forEach((car)=>{
            if (car.mots[0]) sumOfMotScores += car.mots[0].score;
        });
        return {
            completedDate: year,
            score: parseFloat((sumOfMotScores / collectedMotsOneYear.length).toFixed(2))
        };
    });
}
async function getVehicleData(req, res) {
    const { registration  } = req.query;
    const [motResponse, taxResponse, connected] = await Promise.all([
        (0,_services_motCalls__WEBPACK_IMPORTED_MODULE_0__/* .MotApiCall */ .t)(registration),
        (0,_services_taxApi__WEBPACK_IMPORTED_MODULE_1__/* .taxApi */ .o)(registration),
        (0,_services_newMongo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(), 
    ]);
    const response = {
        ...motResponse,
        ...taxResponse
    };
    const vehicles = await connected.db.collection("vehicles").find({
        make: response.make,
        model: response.model,
        fuelType: response.fuelType.charAt(0).toUpperCase() + response.fuelType.slice(1).toLowerCase()
    }).limit(5000).toArray();
    const cleanedMotVehicles = vehicles.map((vehicle)=>({
            ...vehicle,
            mots: JSON.parse(vehicle.mots).filter((mot)=>mot !== false
            )
        })
    );
    const { completeScrappedValue , numberOfScrapped  } = generateScrapped(cleanedMotVehicles);
    const collectMotsScoresByYear = generateMotScoresByYear(response.motTests);
    const motYears = collectMotsScoresByYear.map((mot)=>mot.completedDate
    );
    const collection = generateAverageMots(motYears, cleanedMotVehicles);
    let avgScoreCounter = 0;
    collection.map((mot)=>avgScoreCounter += mot.score
    );
    const props = {
        vehicleString: {
            ...response,
            motChartTests: collectMotsScoresByYear
        },
        averageVehicle: {
            averageMots: collection,
            avgScore: parseFloat((avgScoreCounter / collection.length).toFixed(2)),
            avgScrapped: completeScrappedValue.toFixed(0),
            numberOfScrapped
        }
    };
    return res.json({
        message: JSON.parse(JSON.stringify(props)),
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
var __webpack_exports__ = __webpack_require__.X(0, [244,356], () => (__webpack_exec__(2325)));
module.exports = __webpack_exports__;

})();