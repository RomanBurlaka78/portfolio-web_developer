/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\r\n// let menuLink = document.querySelectorAll(\".menu__link\");\r\n\r\n// menuLink.forEach(function(item){\r\n//     item.addEventListener(\"click\", function() {\r\n//         item.style.color = \"red\"; \r\n//     })\r\n// })\r\n\r\n\n\n//# sourceURL=webpack://bvroman/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/navbar.js":
/*!*********************************!*\
  !*** ./src/assets/js/navbar.js ***!
  \*********************************/
/***/ (function() {

eval("// menu\r\nfunction burgerMenu() {\r\n    const menu = document.querySelector('.menu__body');\r\nconst menuBtn = document.querySelector('.menu__icon');\r\n\r\nconst body = document.body;\r\nif(menu && menuBtn) {\r\n    menuBtn.addEventListener('click', ()=> {\r\n        menu.classList.toggle('active');\r\n        menuBtn.classList.toggle('active');\r\n        body.classList.toggle('lock');\r\n\r\n    })\r\n    menu.querySelectorAll('.menu__link').forEach(link => {\r\n        link.addEventListener('click', () => {\r\n            menu.classList.remove('active');\r\n            menuBtn.classList.remove('active');\r\n            body.classList.remove('lock');\r\n\r\n        } )\r\n    \r\n    \r\n    })\r\n    \r\n    \r\n\r\n}\r\n\r\n};\r\n\r\nburgerMenu();\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bvroman/./src/assets/js/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/navbar.js"]();
/******/ 	
/******/ })()
;