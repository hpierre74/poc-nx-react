(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

 // import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';
// import { Route, Link } from 'react-router-dom';

const StyledApp = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "app__StyledApp",
  componentId: "l162tb-0"
})(["font-family:sans-serif;min-width:300px;max-width:600px;margin:50px auto;.gutter-left{margin-left:9px;}.col-span-2{grid-column:span 2;}.flex display:flex;justify-content:center;}header{background-color:#143055;text-align:center;}h1{text-align:center;margin-left:18px;font-size:24px;}h2{text-align:center;font-size:20px;margin:40px 0 10px 0;}.resources{text-align:center;list-style:none;padding:0;display:grid;grid-gap:9px;grid-template-columns:1fr 1fr;}.resource{color:#0094ba;height:36px;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0.12);border-radius:4px;padding:3px 9px;text-decoration:none;}.resource:hover{background-color:rgba(68,138,255,0.04);}pre{padding:9px;border-radius:4px;background-color:black;color:#eee;}details{border-radius:4px;color:#333;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0.12);padding:3px 9px;margin-bottom:9px;}summary{outline:none;height:36px;line-height:36px;}.github-star-container{margin-top:12px;line-height:20px;}.github-star-container a{display:flex;align-items:center;text-decoration:none;color:#333;}.github-star-badge{color:#24292e;display:flex;align-items:center;font-size:12px;border:1px solid rgba(27,31,35,0.2);background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600;}.github-star-badge:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:rgba(27,31,35,0.35);background-position:-0.5em;}.github-star-badge .material-icons{height:16px;width:16px;margin-right:4px;}"]);

if (typeof window === 'undefined') {
  global.window = {};
}

const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.styled-components file.
   */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledApp, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to react-static!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Resources & Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Thank you for using and showing some \u2665 for Nx."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex github-star-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/nrwl/nx",
    target: "_blank",
    rel: "noopener noreferrer"
  }, ' ', "If you like Nx, please give it a star:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "github-star-badge"
  }, "Star"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are some links to help you get started."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "resources"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "resource flex",
    href: "https://connect.nrwl.io/app/courses/nx-workspaces/intro"
  }, "Nx video course")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "resource flex",
    href: "https://nx.dev/react/getting-started/what-is-nx"
  }, "Nx video tutorial")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "resource flex",
    href: "https://nx.dev/react/tutorial/01-create-application"
  }, "Interactive tutorial")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "resource flex",
    href: "https://nx.app/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 120 120",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z",
    fill: "#0E2039"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z",
    fill: "white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "gutter-left"
  }, "Nx Cloud")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Next Steps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are some things you can do with Nx."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    open: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "Add UI library"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, `# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "View dependency graph"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, `nx dep-graph`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "Run affected commands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, `# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
  `))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");

 // import { BrowserRouter } from 'react-router-dom';


Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["hydrate"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/edouard/work/poc-nx-react/apps/react-static/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map