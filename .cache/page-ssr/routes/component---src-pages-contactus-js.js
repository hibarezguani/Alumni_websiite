"use strict";
exports.id = "component---src-pages-contactus-js";
exports.ids = ["component---src-pages-contactus-js"];
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

/***/ "./src/pages/contactus.js?export=default":
/*!***********************************************!*\
  !*** ./src/pages/contactus.js?export=default ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ "./src/components/navbar.js");


const ContactUs = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative bg-cover bg-center h-screen",
    style: {
      backgroundImage: "url('/contact.jpg')"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative grid grid-cols-2 h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gray-200 bg-opacity-75 p-8 flex flex-col items-center justify-center w-1/2 mx-auto mt-20 h-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-6",
    style: {
      color: '#000000',
      fontSize: '1rem',
      fontFamily: 'Inter',
      fontWeight: "bold"
    }
  }, "CONTACT US"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/phone.svg",
    alt: "Phone Icon",
    className: "w-6 h-6 mr-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      color: '#000000',
      fontSize: '1rem',
      fontFamily: 'Inter'
    }
  }, " +212631115257"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/email.svg",
    alt: "Email Icon",
    className: "w-6 h-6 mr-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      color: '#000000',
      fontSize: '1rem',
      fontFamily: 'Inter'
    }
  }, "rezguanihiba012@gmail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative p-8 flex flex-col items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl font-bold mb-4",
    style: {
      color: "#7D0909"
    }
  }, "Tell us how we can help you"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-6 w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "name",
    style: {
      color: "#000000"
    }
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    className: "w-full p-2 border rounded"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4 w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email",
    style: {
      color: "#000000"
    }
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    className: "w-full p-2 border rounded"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4 w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message",
    style: {
      color: "#000000"
    }
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "message",
    name: "message",
    rows: "4",
    className: "w-full p-2 border rounded"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "bg-blue-500 text-white px-4 py-2 rounded cursor-pointer",
    style: {
      backgroundColor: "#7D0909",
      color: "#E1BFBA"
    }
  }, "Send")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUs);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contactus-js.js.map