"use strict";
exports.id = "component---src-pages-mode-de-passe-oublie-js";
exports.ids = ["component---src-pages-mode-de-passe-oublie-js"];
exports.modules = {

/***/ "./src/pages/mode-de-passe-oublie.js?export=default":
/*!**********************************************************!*\
  !*** ./src/pages/mode-de-passe-oublie.js?export=default ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const ModeDePasseOublie = () => {
  const um5Domain = '@um5.ac.ma'; // Le domaine UM5
  const {
    0: emailPrefix,
    1: setEmailPrefix
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleSubmit = e => {
    e.preventDefault();
    // Simulation de l'envoi du code de vérification
    sendVerificationCode();
  };
  const sendVerificationCode = () => {
    // Simulation de l'envoi du code de vérification à l'adresse e-mail
    console.log(`Envoi du code de vérification à : ${emailPrefix}${um5Domain}`);

    // Simulation d'un délai pour l'envoi du code et redirection
    setTimeout(() => {
      // Simulation de la génération d'un code à 4 chiffres
      const verificationCode = Math.floor(1000 + Math.random() * 9000);
      console.log("Code de vérification :", verificationCode);

      // Redirection vers la page de vérification avec le code dans l'URL
      (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)(`/verification?code=${verificationCode}`);
    }, 2000); // Simulation d'un délai de 2 secondes (2000 millisecondes)
  };

  const handleSignInClick = () => {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)("/signin");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-11/12 flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "max-w-md bg-white p-8 rounded-lg shadow-lg",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-4xl font-bold text-center mb-8",
    style: {
      color: "#7D0909",
      fontFamily: "Inter",
      fontWeight: "bold"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      textDecoration: "underline"
    }
  }, "Mode de passe oubli\xE9 ?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: "10px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email",
    className: "mb-4 font-bold",
    style: {
      color: "#956464",
      fontFamily: "Inter",
      fontWeight: "medium",
      fontSize: "1.2rem"
    }
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "email",
    type: "text",
    value: emailPrefix,
    onChange: e => setEmailPrefix(e.target.value),
    placeholder: `prenom_nom`,
    className: "p-2 mr-2 rounded-l-md",
    style: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      backgroundColor: "#E1BFBA",
      color: "#FFFFFF",
      fontFamily: "Inter",
      fontWeight: "light",
      border: "none",
      outline: "none",
      height: "2.5rem",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "p-2 rounded-r-md bg-gray-500 text-white font-bold",
    style: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      backgroundColor: "rgba(225, 191, 186, 0.41)",
      color: "#000000",
      fontFamily: "Inter",
      fontWeight: "light",
      border: "none",
      outline: "none",
      height: "2.5rem"
    }
  }, um5Domain))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-red-900 text-center"
  }, "Nous enverrons un code de v\xE9rification \xE0 cette adresse e-mail si un compte Alumni existant correspond."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "w-full  align-center font-semibold py-2 px-4 rounded-md transition-all duration-300 cursor-pointer",
    style: {
      backgroundColor: "#7D0909",
      // Couleur de fond
      color: "#E1BFBA",
      // Couleur du texte
      textAlign: "center",
      // Centrer le texte
      border: "none",
      // Supprimer la bordure
      outline: "none" // Supprimer la bordure du focus
    }
  }, "Envoyer le code de v\xE9rification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: "8px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm "
  }, "Remembered your password? ", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "underline cursor-pointer",
    onClick: handleSignInClick,
    style: {
      color: "#7D0909",
      fontFamily: "Inter",
      fontWeight: "light",
      textDecoration: "underline"
    }
  }, "Sign In")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-1/12 flex flex-col items-center justify-center relative bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute top-0 right-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "w-12 h-12",
    src: "/chapeau.jpeg",
    alt: "Your Logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute flex flex-col items-center justify-center right-0",
    style: {
      color: "#7D0909",
      fontFamily: "Lexend Tera",
      fontWeight: "regular",
      fontSize: "0.65rem",
      top: "50px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Alumni")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute h-full w-1 bg-black top-0 right-14",
    style: {
      backgroundColor: "#6B4242"
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModeDePasseOublie);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-mode-de-passe-oublie-js.js.map