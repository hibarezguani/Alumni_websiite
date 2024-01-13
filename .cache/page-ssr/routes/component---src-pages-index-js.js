"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



const Index1 = () => {
  const onLOGOContainerClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)("/");
  }, []);
  const onAProposTextClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // Rediriger vers la page "about"
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)("/about"); // Assurez-vous que "/about" correspond à la route de votre page "about"
  }, []);
  const onContactUsTextClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // Sync "contact us" to the project
  }, []);
  const onSignInContainerClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // Sync "Sign In" to the project
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)("/signin");
  }, []);
  const onSignUpContainerClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // Sync "Sign Up" to the project
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)("/signup");
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "relative bg-white w-full overflow-hidden text-center text-2xl text-white font-inter h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "h-20 flex justify-between items-center px-4 sm:px-8 lg:px-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "cursor-pointer text-3xl font-semibold",
    onClick: onLOGOContainerClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#7D0909",
      fontSize: "40px",
      fontFamily: "Monoton"
    }
  }, "A| "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#7D0909",
      fontSize: "35px",
      fontFamily: "ABeeZee",
      fontWeight: "regular"
    },
    className: "font-abeezee"
  }, "Alumni")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex space-x-10 cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-light",
    onClick: onAProposTextClick,
    style: {
      color: "#7D0909",
      fontSize: "30px",
      fontFamily: "Inter",
      fontWeight: "lighter",
      textAlign: "center"
    }
  }, "A propos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: onContactUsTextClick,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: "#7D0909",
      fontSize: "30px",
      fontFamily: "Inter",
      fontWeight: "lighter"
    }
  }, "Contact us"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex space-x-8 cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-rosybrown font-semibold",
    onClick: onSignInContainerClick,
    style: {
      backgroundColor: "#7D0909",
      color: "#E1BFBA",
      borderRadius: "20px",
      fontFamily: "Inter",
      fontWeight: "bold",
      border: "none",
      padding: "12px 30px" // Espacement supplémentaire
    }
  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-mistyrose font-semibold",
    onClick: onSignUpContainerClick,
    style: {
      backgroundColor: "#6B4242",
      color: "#E1BFBA",
      borderRadius: "20px",
      fontFamily: "Inter",
      fontWeight: "bold",
      border: "none",
      padding: "12px 30px" // Espacement supplémentaire
    }
  }, "Sign Up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "w-full h-screen object-cover",
    alt: "",
    src: "pexels-george-pak-7973112.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'white',
      fontSize: '24px',
      fontFamily: 'Inter'
    }
  }, "Connectons les Histoires, Partageons le Pr\xE9sent! Bienvenue sur ALUMNI, l'Application des Anciens de l'UM5. "))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index1);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map