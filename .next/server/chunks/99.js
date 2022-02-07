"use strict";
exports.id = 99;
exports.ids = [99];
exports.modules = {

/***/ 3099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Spinner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__(1223);
;// CONCATENATED MODULE: ./components/Spinner/Spinner.tsx


const Spinner = ({})=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "spinner-bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "centered",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    color: "white",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_loader_spinner_.MutatingDots, {
                            width: "100",
                            color: "#3498db",
                            ariaLabel: "loading"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Fetching your score..."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        style: {
                            paddingTop: "20px"
                        },
                        children: "(This can take 5-10 seconds)"
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Spinner_Spinner = (Spinner);

;// CONCATENATED MODULE: ./components/Spinner/index.ts

/* harmony default export */ const components_Spinner = (Spinner_Spinner);


/***/ })

};
;