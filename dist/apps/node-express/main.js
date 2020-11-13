(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/node-express/src/main.tsx":
/*!****************************************!*\
  !*** ./apps/node-express/src/main.tsx ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _react_static_src_app_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../react-static/src/app/app */ "./apps/react-static/src/app/app.tsx");







var app = express__WEBPACK_IMPORTED_MODULE_0__();
app.use(express__WEBPACK_IMPORTED_MODULE_0__["static"](path__WEBPACK_IMPORTED_MODULE_3__["resolve"](__dirname, '../../../dist/apps/react-static')));
app.get('*', function (req, res) {
    var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__["ServerStyleSheet"]();
    try {
        var styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
        var _app = react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"](sheet.collectStyles(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_react_static_src_app_app__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
    }
    catch (error) {
        console.error('render to string error');
    }
    finally {
        sheet.seal();
    }
    var indexFile = path__WEBPACK_IMPORTED_MODULE_3__["resolve"](__dirname, '../../../dist/apps/react-static/index.html');
    fs__WEBPACK_IMPORTED_MODULE_4__["readFile"](indexFile, 'utf8', function (err, data) {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }
        res.header('Content-Type', 'text/html');
        return res.send(data.replace('<div id="root"></div>', "<div id=\"root\">".concat(app, "</div>")));
    });
});
var port = process.env.port || 3333;
var server = app.listen(port, function () {
    console.log("Listening at http://localhost:".concat(port, "/"));
});
server.on('error', console.error);


/***/ }),

/***/ "./apps/react-static/src/app/app.tsx":
/*!*******************************************!*\
  !*** ./apps/react-static/src/app/app.tsx ***!
  \*******************************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

 // import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';
// import { Route, Link } from 'react-router-dom';
var StyledApp = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "app__StyledApp",
    componentId: "l162tb-0"
})(["font-family:sans-serif;min-width:300px;max-width:600px;margin:50px auto;.gutter-left{margin-left:9px;}.col-span-2{grid-column:span 2;}.flex display:flex;justify-content:center;}header{background-color:#143055;text-align:center;}h1{text-align:center;margin-left:18px;font-size:24px;}h2{text-align:center;font-size:20px;margin:40px 0 10px 0;}.resources{text-align:center;list-style:none;padding:0;display:grid;grid-gap:9px;grid-template-columns:1fr 1fr;}.resource{color:#0094ba;height:36px;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0.12);border-radius:4px;padding:3px 9px;text-decoration:none;}.resource:hover{background-color:rgba(68,138,255,0.04);}pre{padding:9px;border-radius:4px;background-color:black;color:#eee;}details{border-radius:4px;color:#333;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0.12);padding:3px 9px;margin-bottom:9px;}summary{outline:none;height:36px;line-height:36px;}.github-star-container{margin-top:12px;line-height:20px;}.github-star-container a{display:flex;align-items:center;text-decoration:none;color:#333;}.github-star-badge{color:#24292e;display:flex;align-items:center;font-size:12px;border:1px solid rgba(27,31,35,0.2);background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600;}.github-star-badge:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:rgba(27,31,35,0.35);background-position:-0.5em;}.github-star-badge .material-icons{height:16px;width:16px;margin-right:4px;}"]);
if (typeof window === 'undefined') {
    global.window = {};
}
var App = function App() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./app.styled-components file.
     */
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledApp, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "flex"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to react-static!")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Resources & Tools"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Thank you for using and showing some \u2665 for Nx."), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex github-star-container"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/nrwl/nx",
        target: "_blank",
        rel: "noopener noreferrer"
    }, ' ', "If you like Nx, please give it a star:", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "github-star-badge"
    }, "Star"))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are some links to help you get started."), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "resources"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "col-span-2"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "resource flex",
        href: "https://connect.nrwl.io/app/courses/nx-workspaces/intro"
    }, "Nx video course")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "col-span-2"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "resource flex",
        href: "https://nx.dev/react/getting-started/what-is-nx"
    }, "Nx video tutorial")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "col-span-2"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "resource flex",
        href: "https://nx.dev/react/tutorial/01-create-application"
    }, "Interactive tutorial")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "col-span-2"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "resource flex",
        href: "https://nx.app/"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 120 120",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z",
        fill: "#0E2039"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z",
        fill: "white"
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gutter-left"
    }, "Nx Cloud")))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Next Steps"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are some things you can do with Nx."), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
        open: true
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "Add UI library"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, "# Generate UI lib\nnx g @nrwl/react:lib ui\n\n# Add a component\nnx g @nrwl/react:component xyz --project ui")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "View dependency graph"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, "nx dep-graph")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "Run affected commands"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, "# see what's been affected by changes\nnx affected:dep-graph\n\n# run tests for current changes\nnx affected:test\n\n# run e2e tests for current changes\nnx affected:e2e\n  "))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./apps/node-express/src/main.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/edouard/work/poc-nx-react/apps/node-express/src/main.tsx */"./apps/node-express/src/main.tsx");


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map