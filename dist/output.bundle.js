/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes/route */ \"./src/routes/route.js\");\n\nwindow.addEventListener(\"load\", _routes_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nwindow.addEventListener(\"hashchange\", _routes_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/pages/error404.js":
/*!*******************************!*\
  !*** ./src/pages/error404.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Error404 = () => {\n  location.hash = \"/error404\";\n  const view = `\n        <h1>ERROR 404</h1>\n        <img src=\"../src/assets/images/error404.jfif\" class=\"card-img-top\" class=\"card-img-top\">\n    `;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error404);\n\n//# sourceURL=webpack:///./src/pages/error404.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Home = () => {\n  const view = `<div class=\"pos-f-t \">\n    <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n      <div class=\"bg-dark p-4\">\n        \n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n      <a class=\"navbar-brand\" href=\"./index.html\">Gamers.vg</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#/Catalogo\">Catalogo</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Pricing</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Dropdown link\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n      </div>\n    </div>\n    <nav class=\"navbar navbar-dark bg-secondary\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    </nav>\n  </div>`;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/pages/home.js?");

/***/ }),

/***/ "./src/routes/route.js":
/*!*****************************!*\
  !*** ./src/routes/route.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_error404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/error404 */ \"./src/pages/error404.js\");\n/* harmony import */ var _templates_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/header */ \"./src/templates/header.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.js\");\n\n\n\n\n\nconst routes = {\n  \"/\": _pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  \"/error404\": _pages_error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\nconst router = async () => {\n  const content = document.getElementById(\"Hola\");\n  const head = document.getElementById(\"head\");\n  head.innerHTML = await Object(_templates_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  let hash = Object(_utils_getHash__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  let route = await Object(_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(hash);\n  let render = routes[route] ? routes[route] : _pages_error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  content.innerHTML = await render();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/route.js?");

/***/ }),

/***/ "./src/templates/header.js":
/*!*********************************!*\
  !*** ./src/templates/header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst header = () => {\n  const view = `<div class=\"pos-f-t \">\n    <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n      <div class=\"bg-dark p-4\">\n        \n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n      <a class=\"navbar-brand\" href=\"\">Gamers.vg</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item \">\n            <a class=\"nav-link\" href=\"\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#/catalogo\">Catalogo</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#/noticias\">Noticias</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#/error404\">Tienda</a>\n          </li>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n      </div>\n    </div>\n    <nav class=\"navbar navbar-dark bg-secondary\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\" aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    </nav>\n  </div>`;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n//# sourceURL=webpack:///./src/templates/header.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getHash = () => location.hash.slice(1).toLocaleLowerCase().split(\"/\")[1] || \"/\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getHash);\n\n//# sourceURL=webpack:///./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/resolveRoutes.js":
/*!************************************!*\
  !*** ./src/utils/resolveRoutes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst resolveRutes = route => {\n  if (route.length <= 3) {\n    let validRoute = route === \"/\" ? route : \"/:id\";\n    return validRoute;\n  }\n\n  return `/${route}`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolveRutes);\n\n//# sourceURL=webpack:///./src/utils/resolveRoutes.js?");

/***/ })

/******/ });