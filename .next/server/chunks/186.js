"use strict";
exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ MainContext),
/* harmony export */   "l": () => (/* binding */ MainProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_motCalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5368);
/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6813);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(401);
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2066);
/* harmony import */ var _utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1638);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_4__, _services_firebase__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_4__, _services_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const NullFunction = ()=>{
    return;
};
const MainContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    user: {},
    vehicle: {},
    saved: [],
    drawer: false,
    loading: false,
    error: false,
    getScore: NullFunction,
    login: NullFunction,
    setError: NullFunction,
    setVehicle: NullFunction,
    toggleDrawer: NullFunction,
    setLoading: NullFunction,
    register: NullFunction,
    logout: NullFunction,
    googleLogin: NullFunction,
    passwordReset: NullFunction,
    savedToggle: NullFunction,
    removeSaved: NullFunction,
    sortSaved: NullFunction
});
const MainProvider = ({ children  })=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [user, setUser] = (0,_utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("user", {});
    const { 0: vehicle1 , 1: setVehicle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        registration: "sample reg"
    });
    const { 0: drawer , 1: setDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [saved1, setSaved] = (0,_utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("saved", []);
    _services_firebase__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
    const getScore = async (registration)=>{
        const response = await (0,_services_motCalls__WEBPACK_IMPORTED_MODULE_2__/* .MotApiCall */ .t)(registration);
        setVehicle(JSON.parse(response));
    };
    const login = async (email, password)=>{
        setLoading(true);
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
        try {
            const { user: { displayName , uid , accessToken  } ,  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithEmailAndPassword)(auth, email, password);
            let monogoResponse = await fetch("/api/user/" + email, {
                method: "GET"
            });
            let data = await monogoResponse.json();
            const { message: { saved  } ,  } = data;
            setUser({
                email,
                displayName,
                uid,
                accessToken,
                saved
            });
            setLoading(false);
            return false;
        } catch (err) {
            setLoading(false);
            if (err.message === _strings__WEBPACK_IMPORTED_MODULE_5__/* ["default"].USER_NOT_FOUND */ .Z.USER_NOT_FOUND) {
                return "User not found";
            }
            if (err.message === _strings__WEBPACK_IMPORTED_MODULE_5__/* ["default"].INCORRECT_PASSWORD */ .Z.INCORRECT_PASSWORD) {
                return "Incorrect Password";
            }
            if (err.message === _strings__WEBPACK_IMPORTED_MODULE_5__/* ["default"].TOO_MANY_ATTEMPTS */ .Z.TOO_MANY_ATTEMPTS) {
                return "Too many attempts. Please try again in a few minutes..";
            }
            return err.message;
        }
    };
    const googleLogin = async ()=>{
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider();
        try {
            const res = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithRedirect)(auth, provider);
            JSON.stringify(res);
            const { currentUser: { displayName , uid , accessToken , email  } ,  } = auth;
            setUser({
                email,
                displayName,
                uid,
                accessToken
            });
            return false;
        } catch (err) {
            return err.message;
        }
    };
    const passwordReset = async (email = user.email)=>{
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
        try {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.sendPasswordResetEmail)(auth, email);
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.info("Email Sent!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            return false;
        } catch (err) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("No Account Found", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            return err.message;
        }
    };
    const register = async (email, password, displayName)=>{
        setLoading(true);
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
        const { user: { uid , accessToken  } ,  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.createUserWithEmailAndPassword)(auth, email, password);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.updateProfile)(auth.currentUser, {
            displayName
        });
        setUser({
            email,
            displayName,
            uid,
            accessToken,
            saved: []
        });
        setLoading(false);
        return true;
    };
    const savedToggle = async (car)=>{
        const { vehicleString: { registration , engineSize , fuelType , make , model , primaryColour , score , motTests ,  } , averageVehicle: { avgScore  } ,  } = car;
        setLoading(true);
        if (!user.email) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.info("Please Login first ", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            return;
        }
        const foundDuplicate = user.saved.filter((vehicle)=>vehicle.registration === registration
        );
        if (foundDuplicate.length) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("You already have this vehicle saved", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            return;
        }
        try {
            await fetch("/api/user", {
                method: "PUT",
                body: JSON.stringify({
                    email: user.email,
                    registration,
                    engineSize,
                    fuelType,
                    make,
                    model,
                    primaryColour,
                    score,
                    avgScore,
                    mileage: parseInt(motTests[0].odometerValue)
                })
            });
            setUser({
                ...user,
                saved: [
                    ...user.saved,
                    {
                        registration,
                        engineSize,
                        fuelType,
                        make,
                        model,
                        primaryColour,
                        score,
                        avgScore,
                        mileage: parseInt(motTests[0].odometerValue)
                    }, 
                ]
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success("Added", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            setLoading(false);
        } catch (err) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Failed...", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            console.log("er", err);
            setLoading(false);
        }
    };
    const removeSaved = async (car)=>{
        const { registration , engineSize , fuelType , make , model , primaryColour , score , avgScore , mileage ,  } = car;
        setLoading(true);
        try {
            await fetch("/api/user", {
                method: "DELETE",
                body: JSON.stringify({
                    email: user.email,
                    registration,
                    engineSize,
                    fuelType,
                    make,
                    model,
                    primaryColour,
                    score,
                    avgScore,
                    mileage
                })
            });
            const saved = user.saved.filter((vehicle)=>vehicle.registration !== registration
            );
            setUser({
                ...user,
                saved
            });
            setLoading(false);
        } catch (err) {
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Failed...", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            setLoading(false);
        }
    };
    const sortSaved = (value)=>{
        const vehicles = user.saved;
        if (value === "SH") {
            vehicles.sort((a, b)=>{
                return a.score - b.score;
            });
        }
        if (value === "SL") {
            vehicles.sort((a, b)=>{
                return b.score - a.score;
            });
        }
        if (value === "MH") {}
        if (value === "ML") {}
        setUser({
            ...user,
            saved: vehicles
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MainContext.Provider, {
        value: {
            user,
            vehicle: vehicle1,
            saved: saved1,
            drawer,
            loading,
            error,
            setLoading: (value)=>setLoading(value)
            ,
            setError: (value)=>setError(value)
            ,
            toggleDrawer: ()=>setDrawer(!drawer)
            ,
            getScore,
            setVehicle: (vehicle)=>setVehicle(vehicle)
            ,
            login: (email, password)=>login(email, password)
            ,
            googleLogin,
            register: (email, password, displayName)=>register(email, password, displayName)
            ,
            logout: ()=>{
                setUser({});
                localStorage.clear();
                return true;
            },
            passwordReset,
            savedToggle,
            removeSaved,
            sortSaved
        },
        children: children
    }));
};

});

/***/ }),

/***/ 2066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const USER_NOT_FOUND = "Firebase: Error (auth/user-not-found).";
const INCORRECT_PASSWORD = "Firebase: Error (auth/wrong-password).";
const TOO_MANY_ATTEMPTS = "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    USER_NOT_FOUND,
    INCORRECT_PASSWORD,
    TOO_MANY_ATTEMPTS
});


/***/ }),

/***/ 6813:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__]);
firebase_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const firebaseConfig = {
    apiKey: "AIzaSyCzpAxb46yJsKyvoFP_UVth1xaO-tnbYfc",
    authDomain: "wescoreanycar.firebaseapp.com",
    projectId: "wescoreanycar",
    storageBucket: "wescoreanycar.appspot.com",
    messagingSenderId: "1009212115608",
    appId: "1:1009212115608:web:05a919c1e1e7919c9fdeed",
    measurementId: "G-43XNK2KX74"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

});

/***/ }),

/***/ 5368:
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

/***/ 1638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const { 0: storedValue , 1: setStoredValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{
        try {
            // Get from local storage by key
            if (typeof localStorage !== "undefined") {
                const item = localStorage.getItem(key);
                // Parse stored json or if none return initialValue
                return item ? JSON.parse(item) : initialValue;
            } else {
                return initialValue;
            }
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value)=>{
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (typeof localStorage !== "undefined") {
                localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [
        storedValue,
        setValue
    ];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalStorage);


/***/ })

};
;