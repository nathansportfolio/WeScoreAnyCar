"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 4184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./services/models/user.ts

const savedSchema = new (external_mongoose_default()).Schema({
    registration: {
        type: String,
        required: true
    },
    engineSize: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    primaryColour: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    avgScore: {
        type: Number,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    }
});
let userSchema = new (external_mongoose_default()).Schema({
    email: String,
    saved: [
        savedSchema
    ]
}, {
    typeKey: "$type"
});
/* harmony default export */ const models_user = ((external_mongoose_default()).models.User || external_mongoose_default().model("User", userSchema));

;// CONCATENATED MODULE: ./pages/api/user/index.js


async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case "POST":
            {
                return addUser(req, res);
            }
        case "PUT":
            {
                return updateSaved(req, res);
            }
        case "DELETE":
            {
                return deletedSaved(req, res);
            }
    }
};
async function addUser(req, res) {
    await external_mongoose_default().connect(process.env.MONGODB_URI);
    try {
        let response = new models_user({
            email: req.body,
            saved: []
        });
        response.save();
        return res.json({
            message: response,
            success: false
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
async function updateSaved(req, res) {
    const { email , registration , engineSize , fuelType , make , model , primaryColour , score , avgScore , mileage ,  } = JSON.parse(req.body);
    await external_mongoose_default().connect(process.env.MONGODB_URI);
    try {
        const user = await models_user.updateOne({
            email
        }, {
            $push: {
                saved: {
                    registration,
                    engineSize,
                    fuelType,
                    make,
                    model,
                    primaryColour,
                    score,
                    avgScore,
                    mileage
                }
            }
        }, {
            upsert: true,
            runValidators: true
        }, function(err, doc) {});
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
async function deletedSaved(req, res) {
    const { email , registration , engineSize , fuelType , make , model , primaryColour , score , avgScore , mileage ,  } = JSON.parse(req.body);
    await external_mongoose_default().connect(process.env.MONGODB_URI);
    try {
        const user = await models_user.updateOne({
            email
        }, {
            $pull: {
                saved: {
                    registration,
                    engineSize,
                    fuelType,
                    make,
                    model,
                    primaryColour,
                    score,
                    avgScore,
                    mileage
                }
            }
        }, {
            upsert: true,
            runValidators: true
        }, function(err, doc) {});
        return res.json({
            message: user,
            success: false
        });
    } catch (error) {
        // return an error
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4184));
module.exports = __webpack_exports__;

})();