"use strict";
exports.id = "component---src-pages-about-js";
exports.ids = ["component---src-pages-about-js"];
exports.modules = {

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const Navbar = () => {
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const onLOGOContainerClick = () => {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)('/');
    setSelected('');
  };
  const onAProposTextClick = () => {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)('/about');
    setSelected('about');
  };
  const onContactUsTextClick = () => {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)('/contactus');
    setSelected('contact');
  };
  const onSignInContainerClick = () => {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)('/signin');
    setSelected('');
  };
  const onSignUpContainerClick = () => {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)('/signup');
    setSelected('');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-20 flex justify-between items-center px-4 sm:px-8 lg:px-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cursor-pointer text-3xl font-semibold",
    onClick: onLOGOContainerClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: "#7D0909",
      fontSize: "40px",
      fontFamily: "Monoton"
    }
  }, "A| "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: "#7D0909",
      fontSize: "35px",
      fontFamily: "ABeeZee",
      fontWeight: "regular"
    },
    className: "font-abeezee"
  }, "Alumni")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-10 cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `font-light ${selected === 'about' ? 'underline' : ''}`,
    onClick: onAProposTextClick,
    style: {
      textDecoration: selected === 'about' ? 'underline' : 'none',
      color: '#7D0909',
      fontSize: '30px',
      fontFamily: 'Inter',
      fontWeight: 'lighter',
      textAlign: 'center'
    }
  }, "A propos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `font-light ${selected === 'contact' ? 'underline' : ''}`,
    onClick: onContactUsTextClick,
    style: {
      textDecoration: selected === 'contact' ? 'underline' : 'none',
      color: '#7D0909',
      fontSize: '30px',
      fontFamily: 'Inter',
      fontWeight: 'lighter',
      textAlign: 'center'
    }
  }, "Contact us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-8 cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Sign Up")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/pages/about.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/about.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ "./src/components/navbar.js");


const AboutPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative bg-white w-full overflow-hidden text-center text-2xl text-white font-inter h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-center h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-2/3 mx-8 text-left flex  justify-center h-full mt-64"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-4 text-center",
    style: {
      color: 'black'
    }
  }, "ALUMNI est bien plus qu'une application ; c'est votre lien essentiel avec la communaut\xE9 des anciens \xE9l\xE8ves de l'Universit\xE9 Mohammed V de Rabat. Notre plateforme facilite la cr\xE9ation de votre identit\xE9 acad\xE9mique et professionnelle, permettant de partager votre parcours, cr\xE9er un CV interactif et de connecter avec d'autres anciens \xE9l\xE8ves. Rejoignez-nous pour \xE9largir vos horizons et faire partie d'une communaut\xE9 engag\xE9e !")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-1/3 mx-8 my-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "mx-auto h-auto max-h-85 object-cover",
    alt: "Votre image",
    src: "/pic.jpeg"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map