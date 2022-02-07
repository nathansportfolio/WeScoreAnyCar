"use strict";
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 5843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ScoreGauge)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./components/ScoreGauge/ScoreGauge.tsx



const cleanPercentage = (percentage)=>{
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};
const scoreMaker = (percentage)=>{
    switch(true){
        case percentage < 0.3:
            return 100 - percentage * 30 - 0.1;
        case percentage < 0.6:
            return 100 - percentage * 35;
        case percentage < 0.9:
            return 100 - percentage * 35;
        case percentage < 1.3:
            return 100 - percentage * 35;
        case percentage < 1.6:
            return 55 - percentage * 2;
        case percentage < 1.9:
            return 55 - percentage * 3;
        case percentage < 2.4:
            return 55 - percentage * 5;
        case percentage < 3.2:
            return 55 - percentage * 7;
        case percentage < 4:
            return 55 - percentage * 4;
        case percentage >= 4 && percentage <= 6:
            return 30 - percentage;
        case percentage > 6 && percentage <= 10:
            return 26 - percentage;
        case percentage > 10:
            return 0.4;
        default:
            return percentage;
    }
};
const getValues = (percent)=>{
    const score = percent * 10;
    switch(true){
        case score < 438:
            return {
                header: "Poor",
                colour: "#e67e22"
            };
        case score >= 438 && score < 530:
            return {
                header: "Fair",
                colour: "#f1c40f"
            };
        case score >= 530 && score < 670:
            return {
                header: "Good",
                colour: "#7bed9f"
            };
        case score >= 670 && score < 810:
            return {
                header: "Very Good",
                colour: "#2ecc71"
            };
        case score > 810:
            return {
                header: "Excellent",
                colour: "#27ae60"
            };
        default:
            return {
                colour: "#27ae60",
                header: "None"
            };
    }
};
const ScoreGauge = ({ percentage , duration , header , subHeader , noDelay , average , car ,  })=>{
    const circ = 2 * Math.PI * 100;
    const circTwo = 2 * Math.PI * 95;
    const { 0: Percent , 1: setPercent  } = (0,external_react_.useState)(1);
    const { 0: PercentTwo , 1: setPercentTwo  } = (0,external_react_.useState)(1);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setPercent(scoreMaker(cleanPercentage(percentage)));
            setPercentTwo(scoreMaker(cleanPercentage(average)));
        }, 10);
    }, []);
    const colour = getValues(Percent);
    const strokePct = (100 - Percent) * circ / 100;
    const strokePctSecond = (100 - PercentTwo) * circTwo / 100;
    const positive = (Percent - PercentTwo) * 10 > 0;
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: header && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "score-gauge",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    width: 230,
                    height: 230,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                            transform: `rotate(-90 ${"113 100"})`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                r: 100,
                                cx: 100,
                                cy: 100,
                                fill: "rgba(0, 0, 0, 0.274)",
                                strokeLinecap: "round",
                                style: {
                                    stroke: colour.colour,
                                    transition: noDelay ? "" : "all 1.5s",
                                    strokeWidth: "0.2rem",
                                    strokeDasharray: circ,
                                    strokeDashoffset: strokePct
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                            transform: `rotate(-90 ${"113 95"})`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                r: 95,
                                cx: 95,
                                cy: 95,
                                fill: "rgba(0, 0, 0, 0.274)",
                                strokeLinecap: "round",
                                style: {
                                    stroke: "white",
                                    transition: noDelay ? "" : "all 1.5s",
                                    strokeWidth: "0.2rem",
                                    strokeDasharray: circTwo,
                                    strokeDashoffset: strokePctSecond
                                }
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "score-gauge-header",
                    children: header || header
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "score-gauge-text",
                    style: {
                        color: colour.colour
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                display: "flex",
                                fontWeight: "400"
                            },
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                    start: 0,
                                    end: Percent * 10,
                                    duration: duration || 0.001,
                                    decimals: 0
                                }),
                                Percent - PercentTwo !== 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        fontSize: "12px",
                                        color: positive ? "#1abc9c" : "red",
                                        marginLeft: "-5px",
                                        fontWeight: "700"
                                    },
                                    children: [
                                        positive && "+",
                                        ((Percent - PercentTwo) * 10).toFixed(0)
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "14px",
                                textAlign: "center",
                                fontWeight: "300",
                                marginTop: 0,
                                marginBottom: "4px"
                            },
                            children: colour.header
                        }),
                        !subHeader && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                fontSize: "12px",
                                color: "white",
                                textAlign: "center",
                                fontWeight: "300"
                            },
                            children: [
                                car && car,
                                " Average Score ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                    start: 0,
                                    end: PercentTwo * 10,
                                    duration: duration || 0.001,
                                    decimals: 0
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "score-gauge-subheader",
                    style: {
                        textAlign: "center"
                    },
                    children: subHeader || subHeader
                })
            ]
        })
    }));
};
/* harmony default export */ const ScoreGauge_ScoreGauge = (ScoreGauge);

;// CONCATENATED MODULE: ./components/ScoreGauge/index.ts

/* harmony default export */ const components_ScoreGauge = (ScoreGauge_ScoreGauge);


/***/ })

};
;