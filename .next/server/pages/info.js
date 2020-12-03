module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/info.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/info.js":
/*!***********************!*\
  !*** ./pages/info.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InfoPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/matteocavallo/Desktop/avvento-elis/pages/info.js\";\n\nfunction InfoPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    p: 4,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      mb: 4,\n      children: \"Info\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      color: \"gray.600\",\n      mb: 4,\n      fontSize: \"sm\",\n      children: \"PRIVACY POLICY\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      fontSize: \"xl\",\n      children: \"Tutti i contenuti all'interno di questa applicazione non vogliono essere in alcun modo offensivi o altro. Tutti i video e le immagini non sono e non verrano condivise con nessuno che non sia presente all'interno della crew dell'Elis. Ogni persona che ottiene l'accesso a questa app tramite il link 'https://avvento-elis-cs87dbnn9.vercel.app/' si ritiene responsabile della condivisione inopportuna. I dati sono salvati interamente su database Firebase e verranno eliminati il 31 di Dicembre (a patto di eventuali richieste).\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      color: \"gray.600\",\n      mt: 8,\n      mb: 4,\n      fontSize: \"sm\",\n      children: \"OPEN SOURCE\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      fontSize: \"xl\",\n      children: \"Il progetto non \\xE8 in alcun modo finanziato o commissionato. E' inoltre ben accetto qualsiasi tipo di miglioramento o aggiornamento: grafico o funzionale\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      color: \"gray.600\",\n      mt: 8,\n      mb: 4,\n      fontSize: \"sm\",\n      children: \"BRANCH\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n        direction: \"row\",\n        align: \"center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n          h: \"17px\",\n          src: \"/github.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          href: \"https://github.com/matteomad1011/avvento-elis\",\n          children: \"main\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n        w: \"80%\",\n        mt: 4\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      fontSize: \"md\",\n      children: [\"v0.2 - Powered by \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 27\n      }, this), \"@matteocavallo\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmZvLmpzPzhjYjgiXSwibmFtZXMiOlsiSW5mb1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFhZSxTQUFTQSxRQUFULEdBQW9CO0FBQ2pDLHNCQUNFLHFFQUFDLG9EQUFEO0FBQUssS0FBQyxFQUFFLENBQVI7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFTLFFBQUUsRUFBRSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyx3REFBRDtBQUFTLFdBQUssRUFBQyxVQUFmO0FBQTBCLFFBQUUsRUFBRSxDQUE5QjtBQUFpQyxjQUFRLEVBQUMsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUtFLHFFQUFDLDBEQUFEO0FBQVcsY0FBUSxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFlRSxxRUFBQyx3REFBRDtBQUFTLFdBQUssRUFBQyxVQUFmO0FBQTBCLFFBQUUsRUFBRSxDQUE5QjtBQUFpQyxRQUFFLEVBQUUsQ0FBckM7QUFBd0MsY0FBUSxFQUFDLElBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUFrQkUscUVBQUMsMERBQUQ7QUFBVyxjQUFRLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsZUF1QkUscUVBQUMsd0RBQUQ7QUFBUyxXQUFLLEVBQUMsVUFBZjtBQUEwQixRQUFFLEVBQUUsQ0FBOUI7QUFBaUMsUUFBRSxFQUFFLENBQXJDO0FBQXdDLGNBQVEsRUFBQyxJQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRixlQTBCRSxxRUFBQywwREFBRDtBQUFBLDZCQUNFLHFFQUFDLHNEQUFEO0FBQU8saUJBQVMsRUFBQyxLQUFqQjtBQUF1QixhQUFLLEVBQUMsUUFBN0I7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRDtBQUFPLFdBQUMsRUFBQyxNQUFUO0FBQWdCLGFBQUcsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMscURBQUQ7QUFBTSxjQUFJLEVBQUMsK0NBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRixlQWdDRSxxRUFBQyx1REFBRDtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVMsU0FBQyxFQUFDLEtBQVg7QUFBaUIsVUFBRSxFQUFFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENGLGVBbUNFLHFFQUFDLHFEQUFEO0FBQU0sY0FBUSxFQUFDLElBQWY7QUFBQSxvREFDb0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5Q0QiLCJmaWxlIjoiLi9wYWdlcy9pbmZvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXNwZWN0UmF0aW8sXG4gIEJveCxcbiAgQ2VudGVyLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEhlYWRpbmcsXG4gIEltYWdlLFxuICBMaW5rLFxuICBTdGFjayxcbiAgVGV4dCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb1BhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBwPXs0fT5cbiAgICAgIDxIZWFkaW5nIG1iPXs0fT5JbmZvPC9IZWFkaW5nPlxuICAgICAgPEhlYWRpbmcgY29sb3I9XCJncmF5LjYwMFwiIG1iPXs0fSBmb250U2l6ZT1cInNtXCI+XG4gICAgICAgIFBSSVZBQ1kgUE9MSUNZXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8Q29udGFpbmVyIGZvbnRTaXplPVwieGxcIj5cbiAgICAgICAgVHV0dGkgaSBjb250ZW51dGkgYWxsJ2ludGVybm8gZGkgcXVlc3RhIGFwcGxpY2F6aW9uZSBub24gdm9nbGlvbm8gZXNzZXJlXG4gICAgICAgIGluIGFsY3VuIG1vZG8gb2ZmZW5zaXZpIG8gYWx0cm8uIFR1dHRpIGkgdmlkZW8gZSBsZSBpbW1hZ2luaSBub24gc29ubyBlXG4gICAgICAgIG5vbiB2ZXJyYW5vIGNvbmRpdmlzZSBjb24gbmVzc3VubyBjaGUgbm9uIHNpYSBwcmVzZW50ZSBhbGwnaW50ZXJubyBkZWxsYVxuICAgICAgICBjcmV3IGRlbGwnRWxpcy4gT2duaSBwZXJzb25hIGNoZSBvdHRpZW5lIGwnYWNjZXNzbyBhIHF1ZXN0YSBhcHAgdHJhbWl0ZVxuICAgICAgICBpbCBsaW5rICdodHRwczovL2F2dmVudG8tZWxpcy1jczg3ZGJubjkudmVyY2VsLmFwcC8nIHNpIHJpdGllbmVcbiAgICAgICAgcmVzcG9uc2FiaWxlIGRlbGxhIGNvbmRpdmlzaW9uZSBpbm9wcG9ydHVuYS4gSSBkYXRpIHNvbm8gc2FsdmF0aVxuICAgICAgICBpbnRlcmFtZW50ZSBzdSBkYXRhYmFzZSBGaXJlYmFzZSBlIHZlcnJhbm5vIGVsaW1pbmF0aSBpbCAzMSBkaSBEaWNlbWJyZVxuICAgICAgICAoYSBwYXR0byBkaSBldmVudHVhbGkgcmljaGllc3RlKS5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEhlYWRpbmcgY29sb3I9XCJncmF5LjYwMFwiIG10PXs4fSBtYj17NH0gZm9udFNpemU9XCJzbVwiPlxuICAgICAgICBPUEVOIFNPVVJDRVxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPENvbnRhaW5lciBmb250U2l6ZT1cInhsXCI+XG4gICAgICAgIElsIHByb2dldHRvIG5vbiDDqCBpbiBhbGN1biBtb2RvIGZpbmFuemlhdG8gbyBjb21taXNzaW9uYXRvLiBFJyBpbm9sdHJlXG4gICAgICAgIGJlbiBhY2NldHRvIHF1YWxzaWFzaSB0aXBvIGRpIG1pZ2xpb3JhbWVudG8gbyBhZ2dpb3JuYW1lbnRvOiBncmFmaWNvIG9cbiAgICAgICAgZnVuemlvbmFsZVxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8SGVhZGluZyBjb2xvcj1cImdyYXkuNjAwXCIgbXQ9ezh9IG1iPXs0fSBmb250U2l6ZT1cInNtXCI+XG4gICAgICAgIEJSQU5DSFxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEltYWdlIGg9XCIxN3B4XCIgc3JjPVwiL2dpdGh1Yi5wbmdcIiAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWF0dGVvbWFkMTAxMS9hdnZlbnRvLWVsaXNcIj5tYWluPC9MaW5rPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Q2VudGVyPlxuICAgICAgICA8RGl2aWRlciB3PVwiODAlXCIgbXQ9ezR9PjwvRGl2aWRlcj5cbiAgICAgIDwvQ2VudGVyPlxuICAgICAgPFRleHQgZm9udFNpemU9XCJtZFwiPlxuICAgICAgICB2MC4yIC0gUG93ZXJlZCBieSA8YT48L2E+QG1hdHRlb2NhdmFsbG9cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/info.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });