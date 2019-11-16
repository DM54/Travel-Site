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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./app/assets/scripts/modules/MobileMenu.js\");\n/* harmony import */ var _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/RevealOnScroll */ \"./app/assets/scripts/modules/RevealOnScroll.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _modules_stickyHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/stickyHeader */ \"./app/assets/scripts/modules/stickyHeader.js\");\n/* harmony import */ var _modules_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Modal */ \"./app/assets/scripts/modules/Modal.js\");\n\n\n\n\n\nvar mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); //var revealOnScroll = new RevealOnScroll();\n\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"](!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".feature-item\"), \"85%\");\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"](!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".testimonial\"), \"60%\");\nvar StickyHeader = new _modules_stickyHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar modal = new _modules_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nalert(\"Hello, this is just a test.\");\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/MobileMenu.js":
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/MobileMenu.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar MobileMenu =\n/*#__PURE__*/\nfunction () {\n  function MobileMenu() {\n    _classCallCheck(this, MobileMenu);\n\n    this.siteHeader = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".site-header\");\n    this.menuIcon = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".site-header__menu-icon\");\n    this.menuContent = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".site-header__menu-content\");\n    this.events();\n  }\n\n  _createClass(MobileMenu, [{\n    key: \"events\",\n    value: function events() {\n      this.menuIcon.click(this.toggleTheMenu.bind(this));\n    }\n  }, {\n    key: \"toggleTheMenu\",\n    value: function toggleTheMenu() {\n      this.menuContent.toggleClass(\"site-header__menu-content--is-visible\");\n      this.siteHeader.toggleClass(\"site-header--is-expanded\");\n      this.menuIcon.toggleClass(\"site-header__menu-icon--close-x\");\n    }\n  }]);\n\n  return MobileMenu;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/MobileMenu.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Modal.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/Modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Modal =\n/*#__PURE__*/\nfunction () {\n  function Modal() {\n    _classCallCheck(this, Modal);\n\n    this.openModalButton = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".open-modal\");\n    this.modal = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".modal\");\n    this.closeModalButton = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".modal__close\");\n    this.events();\n  }\n\n  _createClass(Modal, [{\n    key: \"events\",\n    value: function events() {\n      //clicking the open modal button\n      this.openModalButton.click(this.openModal.bind(this)); //clicking the x close modal button\n\n      this.closeModalButton.click(this.closeModal.bind(this)); //pushes any key\n\n      !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document).keyup(this.keyPresshandler.bind(this));\n    }\n  }, {\n    key: \"keyPresshandler\",\n    value: function keyPresshandler(e) {\n      if (e.keyCode == 27) {\n        this.closeModal();\n      }\n    }\n  }, {\n    key: \"openModal\",\n    value: function openModal() {\n      this.modal.addClass(\"modal--is-visible\");\n      return false;\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal() {\n      this.modal.removeClass(\"modal--is-visible\");\n    }\n  }]);\n\n  return Modal;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Modal.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/RevealOnScroll.js":
/*!******************************************************!*\
  !*** ./app/assets/scripts/modules/RevealOnScroll.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../../../node_modules/waypoints/lib/noframework.waypoints'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar RevealOnScroll =\n/*#__PURE__*/\nfunction () {\n  function RevealOnScroll(els, offset) {\n    _classCallCheck(this, RevealOnScroll);\n\n    this.itemsToReveal = els;\n    this.hideInitially();\n    this.offsetPercentage = offset;\n    this.createWaypoints();\n  }\n\n  _createClass(RevealOnScroll, [{\n    key: \"hideInitially\",\n    value: function hideInitially() {\n      this.itemsToReveal.addClass(\"reveal-item\");\n    }\n  }, {\n    key: \"createWaypoints\",\n    value: function createWaypoints() {\n      var that = this;\n      this.itemsToReveal.each(function () {\n        var currentItem = this;\n        new Waypoint({\n          element: currentItem,\n          handler: function handler() {\n            !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(currentItem).addClass(\"reveal-item--is-visible\");\n          },\n          offset: that.offsetPercentage\n        });\n      });\n    }\n  }]);\n\n  return RevealOnScroll;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RevealOnScroll);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/RevealOnScroll.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/stickyHeader.js":
/*!****************************************************!*\
  !*** ./app/assets/scripts/modules/stickyHeader.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../../../node_modules/waypoints/lib/noframework.waypoints'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery-smooth-scroll'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar stickyHeader =\n/*#__PURE__*/\nfunction () {\n  function stickyHeader() {\n    _classCallCheck(this, stickyHeader);\n\n    this.lazyImages = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".lazyload\");\n    this.siteHeader = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".site-header\");\n    this.headerTriggerElement = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".large-hero__title\");\n    this.createHeaderWaypoint();\n    this.pageSections = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".page-section\");\n    this.headerLinks = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".primary-nav a\");\n    this.createPageSectionWaypoint();\n    this.addSmoothScrolling();\n    this.refreshWaypoints();\n  }\n\n  _createClass(stickyHeader, [{\n    key: \"refreshWaypoints\",\n    value: function refreshWaypoints() {\n      this.lazyImages.on('load', function () {\n        Waypoint.resfreshAll();\n      });\n    }\n  }, {\n    key: \"addSmoothScrolling\",\n    value: function addSmoothScrolling() {\n      this.headerLinks.smoothScroll();\n    }\n  }, {\n    key: \"createHeaderWaypoint\",\n    value: function createHeaderWaypoint() {\n      var that = this;\n      new Waypoint({\n        element: this.headerTriggerElement[0],\n        handler: function handler(direction) {\n          that.siteHeader.toggleClass(\"site-header--dark\");\n          that.headerLinks.removeClass(\"is-current-link\");\n        }\n      });\n    }\n    /*createHeaderWaypoint(){\r\n    \tvar that = this;\r\n    \tnew Waypoint({\r\n    \t\telement: this.headerTriggerElement[0],\r\n    \t\thandler: function(direction){\r\n    \t\t\tif(direction === \"down\"){\r\n    \t\t\t\tthat.siteHeader.addClass(\"site-header--dark\");\r\n    \t\t\t}else{\r\n    \t\t\t\tthat.siteHeader.removeClass(\"site-header--dark\");\r\n    \t\t\t}\r\n    \t\t}\r\n    \t});\r\n    }*/\n\n  }, {\n    key: \"createPageSectionWaypoint\",\n    value: function createPageSectionWaypoint() {\n      var that = this;\n      this.pageSections.each(function () {\n        var currentPageSections = this;\n        new Waypoint({\n          element: currentPageSections,\n          handler: function handler(direction) {\n            if (direction === \"down\") {\n              var matchingheaderlink = currentPageSections.getAttribute(\"data-matching-link\");\n              that.headerLinks.removeClass(\"is-current-link\");\n              !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(matchingheaderlink).addClass(\"is-current-link\");\n            }\n          },\n          offset: \"18%\"\n        });\n        new Waypoint({\n          element: currentPageSections,\n          handler: function handler(direction) {\n            if (direction === \"up\") {\n              var matchingheaderlink = currentPageSections.getAttribute(\"data-matching-link\");\n              that.headerLinks.removeClass(\"is-current-link\");\n              !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(matchingheaderlink).addClass(\"is-current-link\");\n            }\n          },\n          offset: \"-40%\"\n        });\n      });\n    }\n  }]);\n\n  return stickyHeader;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stickyHeader);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/stickyHeader.js?");

/***/ })

/******/ });