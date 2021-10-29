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

/***/ "./js/_app.js":
/*!********************!*\
  !*** ./js/_app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card_clickability_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-clickability.js */ \"./js/card-clickability.js\");\n/* harmony import */ var _card_clickability_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_card_clickability_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _no_js_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-js.js */ \"./js/no-js.js\");\n/* harmony import */ var _no_js_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_no_js_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prism_js_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prism-js.js */ \"./js/prism-js.js\");\n/* harmony import */ var _prism_js_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prism_js_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reading_progress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reading-progress.js */ \"./js/reading-progress.js\");\n/* harmony import */ var _reading_progress_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reading_progress_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scroll_to_top_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-to-top.js */ \"./js/scroll-to-top.js\");\n/* harmony import */ var _scroll_to_top_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scroll_to_top_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _search_post_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-post.js */ \"./js/search-post.js\");\n/* harmony import */ var _search_post_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_search_post_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _switch_theme_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switch-theme.js */ \"./js/switch-theme.js\");\n/* harmony import */ var _switch_theme_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_switch_theme_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _user_is_tabbing_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-is-tabbing.js */ \"./js/user-is-tabbing.js\");\n/* harmony import */ var _user_is_tabbing_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_user_is_tabbing_js__WEBPACK_IMPORTED_MODULE_8__);\nconsole.log('JS is up and running! 🚀')\n\n;\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://super-blog-11ty/./js/_app.js?");

/***/ }),

/***/ "./js/card-clickability.js":
/*!*********************************!*\
  !*** ./js/card-clickability.js ***!
  \*********************************/
/***/ (() => {

eval("/* ----------------------------\n  Card clickability\n  (all card area is clickable and go to the main link, all links are still clickable)\n---------------------------- */\n\nconst cards = document.querySelectorAll('.j-card')\n\nif (cards) {\n  for (let card of cards) {\n    const mainLink = card.querySelector('.j-card__main-link')\n    const clickableElements = Array.from(card.querySelectorAll('a'))\n\n    card.addEventListener('click', function(e) {\n      handleClick(e, mainLink)\n    }, false)\n\n    clickableElements.forEach((ele) =>\n      ele.addEventListener('click', (e) => e.stopPropagation())\n    )\n  }\n}\n\nfunction handleClick(e, mainLink) {\n  const isTextSelected = window.getSelection().toString()\n  if (!isTextSelected) {\n    mainLink.click()\n  }\n}\n\n\n//# sourceURL=webpack://super-blog-11ty/./js/card-clickability.js?");

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/***/ (() => {

eval("/* ----------------------------\n  Open/Close mobile menu\n---------------------------- */\n\nconst checkbox = document.querySelector(\".c-header__toggle\")\nif (checkbox) {\n  checkbox.addEventListener('change', function() {\n    document.body.classList.toggle(\"is-menu-open\")\n  })\n}\n\n\n//# sourceURL=webpack://super-blog-11ty/./js/menu.js?");

/***/ }),

/***/ "./js/no-js.js":
/*!*********************!*\
  !*** ./js/no-js.js ***!
  \*********************/
/***/ (() => {

eval("/* ----------------------------\n  Remove \"no-js\"\n  By default, in <html> markup we add \"no-js\" class that will be removed when JS is running.\n---------------------------- */\n\ndocument.documentElement.classList.remove('no-js')\n\n\n//# sourceURL=webpack://super-blog-11ty/./js/no-js.js?");

/***/ }),

/***/ "./js/prism-js.js":
/*!************************!*\
  !*** ./js/prism-js.js ***!
  \************************/
/***/ (() => {

eval("/* ----------------------------\n  Add in snippets using PrismJS:\n  - copy button\n  - language\n  https://www.tomspencer.dev/blog/2018/09/14/adding-click-to-copy-buttons-to-a-hugo-powered-blog/\n---------------------------- */\n(function() {\n  'use strict'\n\n  if(!document.queryCommandSupported('copy')) {\n    return\n  }\n\n  function flashCopyMessage(el, msg) {\n    el.textContent = msg\n    setTimeout(function() {\n      el.textContent = 'Copy'\n    }, 1000)\n  }\n\n  function selectText(node) {\n    const selection = window.getSelection()\n    const range = document.createRange()\n    range.selectNodeContents(node)\n    selection.removeAllRanges()\n    selection.addRange(range)\n    return selection\n  }\n\n  function addCopyButton(containerEl) {\n    const copyButton = document.createElement(\"button\")\n    copyButton.className = \"c-code__copy-button\"\n    copyButton.textContent = \"Copy\"\n\n    const codeEl = containerEl.firstElementChild\n    copyButton.addEventListener('click', function() {\n      try {\n        const selection = selectText(codeEl)\n        document.execCommand('copy')\n        selection.removeAllRanges()\n\n        flashCopyMessage(copyButton, 'Copied!')\n      } catch(e) {\n        console && console.log(e)\n        flashCopyMessage(copyButton, 'Failed :\\'(')\n      }\n    })\n\n    containerEl.appendChild(copyButton)\n  }\n\n  function addLanguage(containerEl, lang) {\n    const language = document.createElement(\"p\")\n    language.className = \"c-code__lang\"\n    language.textContent = lang\n    containerEl.appendChild(language)\n  }\n\n  function wrap(el, wrapper) {\n    el.parentNode.insertBefore(wrapper, el)\n    wrapper.appendChild(el)\n  }\n\n  // Add copy button to code blocks\n  const highlightBlocks = document.querySelectorAll(\"pre[class^=language-]\")\n\n  for (let block of highlightBlocks) {\n    const newNode = document.createElement('div')\n    newNode.className = 'c-code j-code'\n    wrap(block, newNode)\n\n    const lang = block.className.replace('language-', '') // exmple: twig\n    addLanguage(block, lang)\n  }\n\n  Array.prototype.forEach.call(highlightBlocks, addCopyButton)\n})()\n\n\n//# sourceURL=webpack://super-blog-11ty/./js/prism-js.js?");

/***/ }),

/***/ "./js/reading-progress.js":
/*!********************************!*\
  !*** ./js/reading-progress.js ***!
  \********************************/
/***/ (() => {

eval("/* ----------------------------\n  Reading progress in article content\n---------------------------- */\n\nconst progressEl = document.querySelector('.j-reading-progress')\nconst progressValueEl = document.querySelector('.j-reading-progress__value')\nconst articleEl = document.querySelector('.j-article-section__content')\nconst articleHeight = articleEl ? articleEl.clientHeight : undefined\nconst offset = 0;\n\nfunction updateProgress() {\n  const scrollTop = document.documentElement.scrollTop\n  const scrollPercent = Math.round((scrollTop - offset) / articleHeight * 100)\n\n  progressValueEl.style.width = `${scrollPercent}%`\n  progressEl.classList.toggle('is-sticky-on-top', articleEl.getBoundingClientRect().top < 0)\n  // console.log('scrollPercent ', scrollPercent)\n}\n\nif (articleEl) {\n  document.addEventListener('scroll', _.throttle(updateProgress, 400))\n}\n\n\n//# sourceURL=webpack://super-blog-11ty/./js/reading-progress.js?");

/***/ }),

/***/ "./js/scroll-to-top.js":
/*!*****************************!*\
  !*** ./js/scroll-to-top.js ***!
  \*****************************/
/***/ (() => {

eval("/* ----------------------------\n  Scroll to top in TIL section\n---------------------------- */\n\nconst backToTopLink = document.querySelector('.j-back-to-top')\n\nfunction addBackToLink() {\n  const scrollTop = document.documentElement.scrollTop\n  backToTopLink.classList.toggle('is-active', scrollTop > 2000)\n}\n\nif (backToTopLink) {\n  document.addEventListener('scroll', _.throttle(addBackToLink, 400))\n}\n\n\n//# sourceURL=webpack://super-blog-11ty/./js/scroll-to-top.js?");

/***/ }),

/***/ "./js/search-post.js":
/*!***************************!*\
  !*** ./js/search-post.js ***!
  \***************************/
/***/ (() => {

eval("/* ----------------------------\n  Search post\n---------------------------- */\n\nconst searchInput = document.querySelector('.j-search__input');\n\nfunction searchPost () {\n  const searchValue = searchInput.value.toLocaleLowerCase()\n  const noResultText = document.querySelector('.j-search__no-results')\n  let hasResults = false\n\n  const cards = document.querySelectorAll('.c-card')\n  for (const post of cards) {\n    const title = post.querySelector('.c-card__title-heading')\n    const abstract = post.querySelector('.c-card__abstract')\n\n    if (title.textContent.toLocaleLowerCase().includes(searchValue) || abstract.textContent.toLocaleLowerCase().includes(searchValue)) {\n      // show the post\n      title.closest('.j-search__item').classList.remove('u-hidden');\n      hasResults = true\n    } else {\n      // hide the post\n      title.closest('.j-search__item').classList.add('u-hidden');\n    }\n  }\n\n  if (hasResults) {\n    noResultText.classList.add('u-hidden')\n  } else {\n    noResultText.classList.remove('u-hidden')\n  }\n}\n\n// trigger search post at search input change\n\nif (searchInput) { // if the DOM not exists\n  searchInput.oninput = function() {\n    searchPost();\n  };\n}\n\n\n//# sourceURL=webpack://super-blog-11ty/./js/search-post.js?");

/***/ }),

/***/ "./js/switch-theme.js":
/*!****************************!*\
  !*** ./js/switch-theme.js ***!
  \****************************/
/***/ (() => {

eval("/* ----------------------------\n  Switch theme (light/dark mode)\n---------------------------- */\nconst switchTheme = (e) => {\n  const theme = e.target.checked ? 'dark' : 'light'\n  document.documentElement.setAttribute('data-theme', theme)\n  localStorage.setItem('theme', theme)\n}\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n  const toggleSwitch = document.querySelector('.j-theme-switcher input[type=\"checkbox\"]')\n  // const currentTheme = localStorage.getItem('theme') || 'light'\n  // document.documentElement.setAttribute('data-theme', currentTheme)\n\n  if (currentTheme === 'dark') {\n    toggleSwitch.checked = true\n  }\n\n  if(toggleSwitch) {\n    toggleSwitch.addEventListener('change', switchTheme, false)\n  }\n})\n\n\n//# sourceURL=webpack://super-blog-11ty/./js/switch-theme.js?");

/***/ }),

/***/ "./js/user-is-tabbing.js":
/*!*******************************!*\
  !*** ./js/user-is-tabbing.js ***!
  \*******************************/
/***/ (() => {

eval("/* ----------------------------\n  User is tabbing\n  (identifying keyboard navigators)\n---------------------------- */\n\n(function () {\n  function handleFirstTab(e) {\n    if (e.keyCode === 9) {\n      // the \"I am a keyboard user\" key\n      document.body.classList.add('user-is-tabbing')\n      window.removeEventListener('keydown', handleFirstTab)\n    }\n  }\n  window.addEventListener('keydown', handleFirstTab)\n})()\n\n\n//# sourceURL=webpack://super-blog-11ty/./js/user-is-tabbing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/_app.js");
/******/ 	
/******/ })()
;