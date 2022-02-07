"use strict";
(() => {
var exports = {};
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 9687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Accordion)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@mui/material/Accordion"
const Accordion_namespaceObject = require("@mui/material/Accordion");
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AccordionSummary"
const AccordionSummary_namespaceObject = require("@mui/material/AccordionSummary");
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AccordionDetails"
const AccordionDetails_namespaceObject = require("@mui/material/AccordionDetails");
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ExpandMore"
const ExpandMore_namespaceObject = require("@mui/icons-material/ExpandMore");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: ./components/Accordion/Accordion.tsx






const MotAccordion = ({ mots  })=>{
    return mots.map((mot, index1)=>{
        const { completedDate , motTestNumber , odometerUnit , odometerValue , rfrAndComments , testResult ,  } = mot;
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
            disableGutters: true,
            style: {
                backgroundColor: "transparent",
                color: "black"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((AccordionSummary_default()), {
                    expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {
                        style: {
                            color: "black"
                        }
                    }),
                    "aria-controls": "panel1a-content",
                    id: "panel1a-header",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                children: [
                                    completedDate,
                                    " "
                                ]
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                style: {
                                    fontWeight: "500",
                                    color: testResult.toLowerCase() === "passed" ? "green" : "red"
                                },
                                children: testResult
                            }),
                            " "
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AccordionDetails_default()), {
                    children: [
                        rfrAndComments.length > 0 ? rfrAndComments.sort((a, b)=>a.type < b.type ? 1 : -1
                        ).map((comment, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            fontWeight: "bold"
                                        },
                                        children: comment.type
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            fontSize: "14px"
                                        },
                                        children: comment.text
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            }, index)
                        ) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                fontWeight: "bold"
                            },
                            children: " No Advisories "
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                color: "black"
                            },
                            children: [
                                "Mileage: ",
                                odometerValue,
                                " ",
                                odometerUnit,
                                " Mot Test: ",
                                motTestNumber
                            ]
                        })
                    ]
                })
            ]
        }, index1));
    });
};
/* harmony default export */ const Accordion = (MotAccordion);

;// CONCATENATED MODULE: ./components/Accordion/index.ts

/* harmony default export */ const components_Accordion = (Accordion);


/***/ }),

/***/ 9289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_LineChart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "recharts"
const external_recharts_namespaceObject = require("recharts");
;// CONCATENATED MODULE: ./components/LineChart/LineChart.tsx


function add(accumulator, a) {
    return accumulator + a;
}
const LineCharts = ({ mots , averageMots  })=>{
    //TODO - Count advisories per mot and transform data for dates
    const data = mots.map((mot)=>{
        const avgMot = averageMots.map((newMot)=>{
            if (newMot.completedDate === mot.completedDate.split(".")[0]) {
                return newMot.score;
            }
            return 0;
        });
        const finalSum = avgMot.reduce(add, 0);
        return {
            name: mot.completedDate.split(".")[0],
            "Your Score": mot.motScore,
            "Average Score": finalSum || 0,
            amt: 2
        };
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-centered ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recharts_namespaceObject.LineChart, {
            width: 310,
            height: 270,
            data: data.splice(0, 5).reverse(),
            margin: {
                top: 5,
                right: 30,
                left: -30,
                bottom: 5
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_namespaceObject.CartesianGrid, {
                    strokeDasharray: "4 4",
                    stroke: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_namespaceObject.XAxis, {
                    dataKey: "name",
                    stroke: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_namespaceObject.YAxis, {
                    stroke: "black"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_namespaceObject.Tooltip, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_namespaceObject.Line, {
                    type: "monotone",
                    dataKey: "Average Score",
                    stroke: "black",
                    strokeWidth: 2
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_namespaceObject.Line, {
                    type: "monotone",
                    dataKey: "Your Score",
                    stroke: "#e74c3c",
                    strokeWidth: 3
                })
            ]
        })
    }));
};
/* harmony default export */ const LineChart = (LineCharts);

;// CONCATENATED MODULE: ./components/LineChart/index.ts

/* harmony default export */ const components_LineChart = (LineChart);


/***/ }),

/***/ 7971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MileageDisplay)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./components/MileageDisplay/MileageDisplay.tsx


const MileageDisplay = ({ mileage , numberOfScrapped ,  })=>{
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: mileage > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mileage-score-container",
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: mileage.toString().split("").map((number, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mileage-display-number",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                start: 0,
                                end: parseInt(number),
                                duration: 2,
                                decimals: 0
                            })
                        }, index)
                    )
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mileage-sub-text",
                    children: "Average Life Expectancy (mi)"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "mileage-sub-text",
                    children: [
                        "*Based off ",
                        numberWithCommas(numberOfScrapped * 10),
                        " scrapped cars"
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const MileageDisplay_MileageDisplay = (MileageDisplay);

;// CONCATENATED MODULE: ./components/MileageDisplay/index.ts

/* harmony default export */ const components_MileageDisplay = (MileageDisplay_MileageDisplay);


/***/ }),

/***/ 6225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ScoreGauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5843);
/* harmony import */ var _components_MileageDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7971);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9289);
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9687);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4186);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_context__WEBPACK_IMPORTED_MODULE_8__]);
_context_context__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const style = {
    card: {
        textAlign: "center",
        marginTop: "30px"
    },
    taxCard: {
        display: "flex",
        justifyContent: "space-between",
        height: "30px"
    },
    inner: {
        display: "flex",
        justifyContent: "center"
    },
    header: {
        marginLeft: "30px",
        color: "white"
    },
    h2: {
        textAlign: "left",
        marginLeft: "auto",
        marginRight: "auto",
        color: "white",
        maxWidth: "800px"
    },
    startAgain: {
        width: "100vw",
        position: "absolute",
        textAlign: "right",
        color: "white",
        top: "60px",
        right: "5px"
    },
    aTag: {
        textDecoration: "none",
        color: "#f1c40f"
    }
};
const Score = ({ vehicleString , averageVehicle  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { setError , setLoading , savedToggle , user  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_8__/* .MainContext */ .T);
    const { registration , engineSize , fuelType , make , model , motTests , primaryColour , firstUsedDate , motChartTests , score , taxStatus , taxDueDate , revenueWeight , wheelplan , dateOfLastV5CIssued , co2Emissions ,  } = vehicleString;
    const { averageMots , avgScore , avgScrapped , numberOfScrapped  } = averageVehicle;
    const firstCard = {
        icon: "fas fa-car",
        firstCol: [
            {
                title: "Registration",
                value: registration
            },
            {
                title: "Make",
                value: make
            },
            {
                title: "Model",
                value: model
            }, 
        ],
        secondCol: [
            {
                title: "Fuel",
                value: fuelType
            },
            {
                title: "Colour",
                value: primaryColour
            },
            {
                title: "Engine",
                value: engineSize
            }, 
        ]
    };
    const secondCard = {
        icon: "fas fa-car",
        firstCol: [
            {
                title: "Taxed Status",
                value: taxStatus
            },
            {
                title: "Tax Due Date",
                value: taxDueDate
            }, 
        ],
        secondCol: [
            {
                title: "Emissions",
                value: co2Emissions + ' (co2)'
            },
            {
                title: "Tax Code",
                value: "12W"
            }, 
        ]
    };
    const thirdCard = {
        icon: "fas fa-car",
        firstCol: [
            {
                title: "Weight",
                value: revenueWeight + "kg"
            },
            {
                title: "Last V5 generated",
                value: dateOfLastV5CIssued
            }, 
        ],
        secondCol: [
            {
                title: "Wheel Base",
                value: wheelplan
            }, 
        ]
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (!registration) {
            setLoading(false);
            setError(true);
            router.push("/");
        }
    }, []);
    const CarDetailsCard = (properties)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "scrore-card",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        height: "105px",
                        width: "105px",
                        marginTop: "30px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        backgroundColor: "",
                        borderRadius: "60px",
                        boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            padding: "26px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: `${properties.icon} fa-4x`
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex space-between",
                    style: {
                        paddingLeft: "30px",
                        paddingRight: "30px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: properties.firstCol.map((details, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: style.card,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: details.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-light",
                                            children: details.value
                                        })
                                    ]
                                }, index)
                            )
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: properties.secondCol.map((details, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: style.card,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: details.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-light",
                                            children: details.value
                                        })
                                    ]
                                }, index)
                            )
                        })
                    ]
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "WeScoreAnyCar - ",
                            registration
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "WeScoreAnyCar - Score"
                    }, "score"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Score your vehicle, and find out how your car compares to others. It's like a credit score for your car."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mountain-background",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mountain-filter",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "page-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "score-shelf",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: style.inner,
                                    className: "inner-page",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "score-and-mileage-container",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "gauges",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        justifyContent: "center",
                                                        display: "flex"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ScoreGauge__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                        duration: 1,
                                                        average: avgScore,
                                                        percentage: score,
                                                        header: "Your score",
                                                        subHeader: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MileageDisplay__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                mileage: avgScrapped,
                                                numberOfScrapped: numberOfScrapped
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "score-container-chunk",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "score-headers",
                                        style: style.header,
                                        children: [
                                            make,
                                            " ",
                                            model,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "inline-block text-light",
                                                children: registration
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "score-card-container",
                                        children: [
                                            CarDetailsCard(firstCard),
                                            CarDetailsCard(secondCard),
                                            CarDetailsCard(thirdCard)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "score-headers",
                                style: style.header,
                                children: [
                                    " ",
                                    "How is your car doing?",
                                    " "
                                ]
                            }),
                            motTests.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mot-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-centered",
                                        children: "Last 5 year MOT scores"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LineChart__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        mots: motChartTests,
                                        averageMots: averageMots
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-between",
                                        style: {
                                            padding: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    color: "#e74c3c"
                                                },
                                                children: " -Your Score-"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    color: "black"
                                                },
                                                children: "-Average Score-"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mot-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Your MOT History"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mot-entry-container",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Accordion__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            mots: motTests
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "know-car-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Know your car, save this information"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "contained",
                                        onClick: ()=>savedToggle({
                                                vehicleString,
                                                averageVehicle
                                            })
                                        ,
                                        children: [
                                            " ",
                                            "Save car"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
const getServerSideProps = async ({ params  })=>{
    if (params) {
        if (params.id) {
            const STAGING = false;
            let response = await fetch(STAGING ? "http://localhost:3000/api/vehicles/" + params.id.toString() : "https://we-score-any-car-gageclgar-nathansportfolio.vercel.app/api/vehicles/" + params.id.toString(), {
                method: "GET"
            });
            const { message  } = await response.json();
            return {
                props: message
            };
        }
    }
    throw new Error("Required parameters not provided");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);

});

/***/ }),

/***/ 6829:
/***/ ((module) => {

module.exports = require("@mui/lab/LoadingButton");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [186,843], () => (__webpack_exec__(6225)));
module.exports = __webpack_exports__;

})();