"use strict";
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ MotApiCall)
/* harmony export */ });
/* unused harmony export getScores */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const MOT_API_ADDRESS = "https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=";
const TOKEN = "mc5vxMFDUn8GDjWVHfW636FgFPJ7XmsCkQ1OoBdd";
const HEADERS = {
    headers: {
        "x-api-key": TOKEN,
        Accept: "application/json+v6",
        "Content-Type": "applicaiton/json"
    }
};
const MotApiCall = async (registration)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(MOT_API_ADDRESS + registration, HEADERS);
        const vehicle = data[0];
        const veh = getScores(vehicle);
        return veh;
    } catch (err) {
        console.log("error", err);
        return {
            registration: "",
            engineSize: "",
            fuelType: "",
            make: "",
            model: "",
            motTests: [],
            primaryColour: "",
            firstUsedDate: "",
            score: 100
        };
    }
};
const getScores = (vehicle)=>{
    let score = 0;
    const motTests = vehicle.motTests.map((mot)=>{
        let advisories = 0;
        let dangerous = 0;
        let fail = 0;
        let major = 0;
        let minor = 0;
        let user = 0;
        let prs = 0;
        mot.rfrAndComments.map((comment)=>{
            if (comment.type.toLowerCase() === "advisory") advisories++;
            if (comment.type.toLowerCase() === "fail") fail++;
            if (comment.type.toLowerCase() === "major") major++;
            if (comment.type.toLowerCase() === "minor") minor++;
            if (comment.type.toLowerCase() === "user entered") user++;
            if (comment.type.toLowerCase() === "prs") prs++;
            if (comment.type.toLowerCase() === "dangerous") dangerous++;
            else if (comment.dangerous) dangerous++;
        });
        const motScore = calculateScore(advisories, fail, dangerous, major, minor, user, prs);
        score += motScore;
        return {
            ...mot,
            motScore
        };
    });
    const currentYear = new Date().getFullYear();
    const age = currentYear - vehicle.firstUsedDate.split(".")[0];
    return {
        ...vehicle,
        motTests,
        score: parseFloat((score / age).toFixed(2))
    };
};
const calculateScore = (advisories, fail, dangerous, major, minor, user, prs)=>{
    return advisories * 0.5 + minor + major * 1.5 + dangerous * 3 + user + fail * 2 + prs;
};


/***/ }),

/***/ 9677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ taxApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const TOKEN = "zwG0SnyNMl95KkE4lyd4A6zblMKRKknr3HinEpnP";
const ADDRESS = "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles";
const HEADERS = {
    headers: {
        "x-api-key": TOKEN,
        Accept: "application/json",
        "Content-Type": "applicaiton/json"
    }
};
const taxApi = async (registrationNumber)=>{
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(ADDRESS, {
            registrationNumber
        }, HEADERS);
        return data;
    } catch (err) {}
};


/***/ })

};
;