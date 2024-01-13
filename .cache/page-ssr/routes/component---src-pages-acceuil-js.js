"use strict";
exports.id = "component---src-pages-acceuil-js";
exports.ids = ["component---src-pages-acceuil-js"];
exports.modules = {

/***/ "./src/pages/acceuil.js?export=default":
/*!*********************************************!*\
  !*** ./src/pages/acceuil.js?export=default ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



const Accueil = () => {
  const onPublicationContainerClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)("/add-post");
  }, []);
  const onSortDownImageClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)("/accuei-vous");
  }, []);
  const onReseauContainerClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)("/resaux");
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "min-h-screen bg-cover bg-center",
    style: {
      backgroundImage: "url('/rectangle-32@2x.png')"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between bg-dimgray-200 bg-opacity-60 text-white h-1/4 px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[2.31rem] font-inter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-3.31rem font-monoton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "A|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-meie-script text-black"
  }, ` `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-abeezee"
  }, "Alumni")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cursor-pointer",
    onClick: onSortDownImageClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "w-6 h-6 mr-2",
    src: "/search@2x.png",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[1.94rem] font-inter"
  }, "Recherche")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cursor-pointer",
    onClick: () => (0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)("/accueil")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "w-6 h-6 mr-2",
    src: "/home.svg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[2.31rem] font-bold"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cursor-pointer",
    onClick: onReseauContainerClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "w-6 h-6 mr-2",
    src: "/people@2x.png",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[1.94rem] font-inter"
  }, "R\xE9seau")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-10 h-10 bg-rosybrown-100 rounded-full mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-black text-center"
  }, "N")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cursor-pointer",
    onClick: onSortDownImageClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "w-4 h-4",
    src: "/sort-down@2x.png",
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-center h-3/4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-xl p-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-light mb-6 cursor-pointer",
    onClick: onPublicationContainerClick
  }, "Cr\xE9ez une publication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-16 h-16 bg-rosybrown-100 rounded-full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[2.38rem] text-maroon-100 font-ledger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inline-block w-10 h-10"
  }, "N"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accueil);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-acceuil-js.js.map