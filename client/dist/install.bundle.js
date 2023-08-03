/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("var butInstall = document.getElementById('buttonInstall');\nfunction beforeInstallPrompt(event) {\n  event.preventDefault();\n  window.deferredPrompt = event;\n  butInstall.classList.remove('hidden');\n}\nfunction buttonClick() {\n  if (!window.deferredPrompt) return;\n  window.deferredPrompt.prompt();\n  window.deferredPrompt = null;\n  butInstall.classList.add('hidden');\n}\nfunction appInstalled() {\n  window.deferredPrompt = null;\n}\nwindow.addEventListener('beforeinstallprompt', beforeInstallPrompt);\nbutInstall.addEventListener('click', buttonClick);\nwindow.addEventListener('appinstalled', appInstalled);\n\n//# sourceURL=webpack://jate-client/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;