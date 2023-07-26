/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\n\nconst text = {\n  title: \"Contact us\",\n  contact: \"Want to reach us? Call (555) 123-4567\"\n}\n\n/* \n  TEMPLATE:\n  DOMElement_assetKey: {\n    count: number of elements to produce\n    classes: [\"array\", \"of\", \"classes\"]\n    text: a string, an array of strings, or array of objects with string entries.\n    children: { Another DOM Template }\n  }\n*/\nconst blueprint = {\n  h1_title: {\n    classes: ['contact-title'],\n    text: text.title\n  },\n  div_contactImgBox: {\n    classes: ['contact-image-box'],\n    children: {\n      img_contactImg: {\n        classes: ['contact-image'],\n        src: './images/contact.png'\n      },\n    }\n  },\n  p_contact: {\n    classes: ['contact'],\n    text: text.contact\n  }\n}\n\nlet contactPage;\n\nconst loadContact = function() {\n  let content = document.getElementById('content');\n  let existingContainer = document.querySelector('.container');\n\n  const buildPage = function(){\n    const contactContainer = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElementFromBlueprint)(blueprint);\n    return contactContainer;\n  };\n\n  if (!contactPage){\n    contactPage = buildPage();\n  }\n\n  if (!existingContainer){\n    content.append(menuPage);\n  } else {\n    content.removeChild(existingContainer);\n    content.append(contactPage);\n  }\n}\n\n\n\n//# sourceURL=webpack://odins-diner/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\n\nconst text = {\n  title: \"Kevin Bacon's Bacon Emporium\",\n  tagline: 'Where even the water has bacon!',\n  intro:\n    'Step into the sizzling spotlight of flavor at \"Kevin Bacon\\'s Bacon Emporium\" – where we\\'re Footloose with our love for bacon! Be mesmerized by a culinary experience that\\'s Six Degrees of Deliciousness, as we pay homage to the legendary Kevin Bacon and his iconic roles both on and off the silver screen. Our Emporium is a haven for bacon enthusiasts, as well as Bacon enthusiasts. Where taste buds dance with delight as they revel in the symphony of crispy, savory notes. Seize this opportunity and indulge in the Bacon Emporium experience that will have you shouting, \"Kevin Bacon, you\\'ve done it again!\"',\n};\n\n/* \n  TEMPLATE:\n  DOMElement_assetKey: {\n    count: number of elements to produce\n    classes: [\"array\", \"of\", \"classes\"]\n    text: a string, an array of strings, or array of objects with string entries. \n    children: an object with any children.\n  }\n*/\nconst blueprint = {\n  div_hero: {\n    classes: [\"hero\"],\n    children: {\n      div_heroLeft: {\n        classes: [\"hero-left\"],\n        children: {\n          h1_title: {\n            classes: [\"title\"],\n            text: text.title\n          },\n          p_tagline: {\n            classes: ['tagline'],\n            text: text.tagline\n          },\n          p_intro: {\n            classes: ['intro'],\n            text: text.intro\n          }\n        }\n      },\n      div_heroRight: {\n        classes: [\"hero-right\"],\n        children: {\n          img_heroImg: {\n            classes: ['hero-img'],\n            src: './images/hero-splash.png'\n          }\n        }\n      }\n    }\n  }\n}\n\nlet homePage;\n\nconst loadHome = function () {\n  const content = document.getElementById('content');\n  const existingContainer = document.querySelector('.container');\n  \n  const buildPage = function(){\n    const homeContainer = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElementFromBlueprint)(blueprint);\n  \n    return homeContainer;\n  }\n\n  if (!homePage){\n    homePage = buildPage();\n  }\n\n  if (!existingContainer){\n    content.append(homePage);\n  } else {\n    content.removeChild(existingContainer);\n    content.append(homePage);\n  }\n};\n\n\n\n//# sourceURL=webpack://odins-diner/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.js */ \"./src/tabs.js\");\n\n\n\n\n\n(0,_tabs_js__WEBPACK_IMPORTED_MODULE_3__.createTabNav)();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\nlet homeTab = document.getElementById('home-tab');\nlet menuTab = document.getElementById('menu-tab');\nlet contactTab = document.getElementById('contact-tab');\n\nhomeTab.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome);\nmenuTab.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu);\ncontactTab.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact);\n\n//# sourceURL=webpack://odins-diner/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\n\nconst text = {\n  \"menu\": \"The Baconorium Menu\",\n  \"appetizers\": [\n    {\n      \"name\": \"A-List Film Reels Sliders\",\n      \"description\": \"A star-studded cast of beef, cheese, and bacon come together in these slider sensations, creating a hit on every plate!\"\n    },\n     {\n      \"name\": \"Footloose Popcorn Party\",\n      \"description\": \"Get ready to dance with delight as you munch on this popcorn extravaganza, featuring the one and only Bacon's irresistible touch.\"\n    },\n     {\n      \"name\": \"Cinematic Loaded Potato Skins\",\n      \"description\": \"Prepare for an explosive flavor experience with these loaded skins, each one a blockbuster of bacon goodness.\"\n    },\n     {\n      \"name\": \"Bacon-Wrapped Asparagus Stars\",\n      \"description\": \"These asparagus stars are wrapped in bacon, dancing their way onto your plate with delicious flair.\"\n    },\n     {\n      \"name\": \"Red-Carpet Nacho Extravaganza\",\n      \"description\": \"Get your taste buds ready for a cinematic adventure, where bacon takes the lead role in this tantalizing nacho production.\"\n    }\n  ],\n  \"entrees\": [\n    {\n      \"name\": \"The Blockbuster Burger\",\n      \"description\": \"This burger will have you singing praises with each bite, a symphony of bacon and beef like no other.\"\n    },\n    {\n      \"name\": \"The Movie Star Pizza\",\n      \"description\": \"Bacon and pizza unite to form a powerful duo, delivering a blockbuster performance with every slice.\"\n    },\n    {\n      \"name\": \"Baconwood Chicken Alfredo\",\n      \"description\": \"Let this bacon-infused chicken alfredo take you on a tasteful journey to the heart of Baconwood.\"\n    },\n    {\n      \"name\": \"The Bacon-BBQ Ribs\",\n      \"description\": \"Brace yourself for a mouthwatering bacon fiesta, as these ribs take center stage with their bacon-tastic glaze.\"\n    },\n    {\n      \"name\": \"Bacon Sensation Tacos\",\n      \"description\": \"These tacos will make you say, \\\"I can't handle the bacon!\\\" A taste explosion featuring Kevin Bacon's finest.\"\n    }\n  ],\n  \"sides\": [\n    {\n      \"name\": \"Bacon Bliss Bombs\",\n      \"description\": \"Irresistible bacon-wrapped cheddar and jalapeño bites baked to crispy perfection, served with a zesty chipotle dipping sauce.\"\n    },\n    {\n      \"name\": \"The Bacon Connection Mac 'n' Cheese\",\n      \"description\": \"An irresistible mac 'n' cheese with a bacon twist that'll have you coming back for take two!\"\n    },\n    {\n      \"name\": \"Apollo Bacon-Potato Salad\",\n      \"description\": \"Prepare for a cosmic flavor experience as bacon takes this potato salad to new heights.\"\n    },\n    {\n      \"name\": \"Bacon Reservoir Brussels Sprouts\",\n      \"description\": \"These Brussels sprouts, starring bacon in a key role, will make you a fan of this Hollywood hit.\"\n    },\n    {\n      \"name\": \"Bacon's Star-Studded Garlic Bread\",\n      \"description\": \"This garlic bread, adorned with bacon stardom, is destined to shine bright on your table.\"\n    }\n  ]\n}\n\nconst images = {\n  app: [\n    '01.png',\n    '02.png',\n    '03.png',\n    '04.png',\n    '05.png'\n  ],\n  entree: [\n    '01.png',\n    '02.png',\n    '03.png',\n    '04.png',\n    '05.png'\n  ],\n  side: [\n    '01.png',\n    '02.png',\n    '03.png',\n    '04.png',\n    '05.png'\n  ]\n}\n\n/* \n  TEMPLATE:\n  DOMElement_assetKey: {\n    count: number of elements to produce\n    classes: [\"array\", \"of\", \"classes\"]\n    text: a string, an array of strings, or array of objects with string entries.\n    href: a string, an array of strings, or array of objects with string entries containing links.\n    children: { Another DOM Template }\n  }\n*/\nconst blueprint = {\n  h1_menu: {\n    classes: [\"menu-title\"],\n    \"text\": text.menu\n  },\n  h2_appSectionTitle: {\n    classes: [\"section-title\"],\n    text: 'Appetizers'\n  },\n  ul_appetizers: {\n    classes: [\"menu-section\"],\n    children: {\n      li_item: {\n        count: 5,\n        classes: [\"menu-item\"],\n        children: {\n          div_imageBox: {\n            classes: [\"item-picture-box\"],\n            carryParentCount: true,\n            children: {\n              img_menuImages:{\n                classes: ['item-picture'],\n                srcRoot: 'app',\n                src: images.app\n              }\n            }\n          },\n          span_number: {\n            classes: [\"item-number\"],\n            \"text\": ['1','2','3','4','5']\n          },\n          p_name: {\n            classes: [\"item-name\"],\n            \"text\": text.appetizers\n          },\n          p_description: {\n            classes: [\"item-description\"],\n            \"text\": text.appetizers\n          },\n        },\n      },\n    },\n  },\n  h2_entreeSectionTitle: {\n    classes: [\"section-title\"],\n    text: 'Entrees'\n  },\n  ul_entrees: {\n    classes: [\"menu-section\"],\n    children: {\n      li_item: {\n        count: 5,\n        classes: [\"menu-item\"],\n        children: {\n          div_imageBox: {\n            classes: [\"item-picture-box\"],\n            carryParentCount: true,\n            children: {\n              img_menuImages:{\n                classes: ['item-picture'],\n                srcRoot: 'entree',\n                src: images.entree\n              }\n            }\n          },\n          span_number: {\n            classes: [\"item-number\"],\n            \"text\": ['1','2','3','4','5']\n          },\n          p_name: {\n            classes: [\"item-name\"],\n            \"text\": text.entrees\n          },\n          p_description: {\n            classes: [\"item-description\"],\n            \"text\": text.entrees\n          },\n        },\n      },\n    },\n  },\n  h2_sideSectionTitle: {\n    classes: [\"section-title\"],\n    text: 'Sides'\n  },\n  ul_sides: {\n    classes: [\"menu-section\"],\n    children: {\n      li_item: {\n        count: 5,\n        classes: [\"menu-item\"],\n        children: {\n          div_imageBox: {\n            classes: [\"item-picture-box\"],\n            carryParentCount: true,\n            children: {\n              img_menuImages:{\n                classes: ['item-picture'],\n                srcRoot: 'side',\n                src: images.side\n              }\n            }\n          },\n          span_number: {\n            classes: [\"item-number\"],\n            \"text\": ['1','2','3','4','5']\n          },\n          p_name: {\n            classes: [\"item-name\"],\n            \"text\": text.sides\n          },\n          p_description: {\n            classes: [\"item-description\"],\n            \"text\": text.sides\n          },\n        },\n      },\n    },\n  },\n};\n\nlet menuPage;\n\nconst loadMenu = function(){\n  const content = document.getElementById('content');\n  const existingContainer = document.querySelector('.container');\n  \n  const buildPage = function(){\n    const menuContainer = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElementFromBlueprint)(blueprint);\n  \n    return menuContainer;\n  }\n\n  if (!menuPage) {\n    menuPage = buildPage();\n  }\n\n  if (!existingContainer){\n    content.append(menuPage);\n  } else {\n    content.removeChild(existingContainer);\n    content.append(menuPage);\n  }\n}\n\n\n\n//# sourceURL=webpack://odins-diner/./src/menu.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTabNav: () => (/* binding */ createTabNav)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\nconst text = {\n  \"links\": ['HOME', 'MENU', 'CONTACT']\n}\n/* \n  TEMPLATE:\n  DOMElement_textKey: {\n    count: number of elements to produce\n    classes: [\"array\", \"of\", \"classes\"]\n    text: a string, an array of strings, or array of objects with string entries.\n    children: { Another DOM Template }\n  }\n*/\nconst blueprint = {\n  nav_navBar: {\n    classes: ['nav-bar'],\n    children: {\n      ul_navigation: {\n        classes: ['nav-list'],\n        children: {\n          li_item: {\n            count: 3,\n            classes: ['nav-item'],\n            children: {\n              a_links: {\n                classes: ['item-text'],\n                text: text.links,\n                ids: [\n                  'home-tab',\n                  'menu-tab',\n                  'contact-tab'],\n                href: ['#']\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n}\n\nlet navBar;\n\nlet createTabNav = function(){\n  let content = document.getElementById('content');\n  // let header = document.createElement('header');\n  // header.classList.add('header');\n\n  // let nav = document.createElement('nav');\n  // let logobox = document.createElement('div');\n  // let logo = document.createElement('img');\n  // let ul = document.createElement('ul');\n  // let tabs = ['home', 'menu', 'contact'];\n\n  // logo.src = \n\n  // tabs.forEach((tab) => {\n  //   let li = document.createElement('li');\n  //   li.textContent = tab;\n  //   li.classList.add(`${tab}Tab`);\n  //   ul.append(li);\n  // })\n\n  // nav.append(ul);\n  // header.append(nav);\n\n  const buildPage = function(){\n    const navBar = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElementFromBlueprint)(blueprint,{ containerType: 'header'});\n\n    return navBar;\n  }\n\n  let header = buildPage();\n  content.append(header);\n}\n\n\n\n//# sourceURL=webpack://odins-diner/./src/tabs.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElementFromBlueprint: () => (/* binding */ createElementFromBlueprint),\n/* harmony export */   objToArray: () => (/* binding */ objToArray)\n/* harmony export */ });\nlet objToArray = function (data) {\n  return Object.entries(data).reduce((r, [key, value]) => {\n    if (typeof value === 'object' && !(value instanceof Array)) {\n      r = r.concat(objToArray(value));\n    }\n    else { \n      console.log([key, value]);\n      r.push([key, value]);\n    }\n    return r\n  }, [])\n}\n\nlet arrayToObj = function (arr){\n  let obj = {}\n  let counter = 1;\n\n  arr.forEach((x, i) => {\n    let key = x[0]\n    let value = x[1]\n\n    if (obj[key])\n\n    if (obj[key]) {\n      obj[`${key}${counter}`] = value;\n    } else {\n      obj[key] = value;\n    }\n  })\n\n  return obj;\n}\n\n\nfunction createElements(element, details, index, assetKey, parentBlueprint){\n  let ids = details.ids;\n  let classes = details.classes;\n  let count = details.count || 1;\n  let text = details.text;\n  let images = details.src;\n  let curIndex = index.curIndex;\n  let carriedIndex = index.carriedIndex;\n  \n  let links = details.href;\n\n  let elements = [];\n\n  /* IMPORTANT NOTE REGARDING TEMPLATE:\n    Be sure the textObjects or hrefObjects use the assetKey as the key for the corresponding blueprint object.\n  */\n\n  for (let i = 0; i < count; i++){\n    let el = document.createElement(element);\n    el.classList.add(...classes);\n\n    if(ids){\n      if(typeof ids === 'string'){\n        el.id = ids;\n      } else if (Array.isArray(ids) && typeof ids[0] === 'string'){\n        el.id = ids[curIndex];\n      }\n    }\n\n    if(text){\n      if (typeof text === 'string'){\n        el.textContent = text;\n      } else if (Array.isArray(text) && typeof text[0] === 'string'){\n        el.textContent = text[curIndex];\n      } else if (Array.isArray(text) && typeof text[0] === 'object'){\n        let textObj = text[curIndex];\n        el.textContent = textObj[assetKey];\n      }\n    }\n\n    if (images){\n      let imagesRoot = details.srcRoot;\n      let imagesPath = `./images/${imagesRoot}-images/${imagesRoot}-${images[carriedIndex]}`;\n      let imagesThumbPath = `images/thumb-${curIndex}.png`\n\n      console.log({images});\n\n      if (typeof images === 'string'){\n        el.src = images;\n      } else if (Array.isArray(images) && typeof images[0] === 'string') {\n        el.src = `${imagesPath}`;\n      } else if (Array.isArray(images) && typeof images[0] === 'object'){\n        el.src = `${imagesPath}`;\n      }\n    }\n\n    if (links){\n      if (typeof links === 'string'){\n        el.src = links;\n      } else if (Array.isArray(links) && typeof links[0] === 'string'){\n        el.src = links[curIndex];\n      } else if (Array.isArray(links) && typeof links[0] === 'object'){\n        let linksObj = links[curIndex];\n        el.src = linksObj[assetKey];\n      }\n    }\n\n    elements.push(el);\n  }\n\n  return elements;\n}\n\nfunction createElementFromBlueprint(blueprint, {containerType = \"div\", className = \"nonegiven\"} = {}) {\n\n  function createNestedElements(elementBlueprint,element, curIndex, carriedIndex) {\n    Object.keys(elementBlueprint).forEach((key, index) => {\n      const elementName = key.split('_')[0];\n      const assetKey = key.split('_')[1];\n      const elementDetails = elementBlueprint[key];\n\n      let newElementsArray;\n      if (carriedIndex != undefined){\n        newElementsArray = createElements(elementName, elementDetails, {curIndex, carriedIndex}, assetKey, elementBlueprint);\n      } else {\n\n        newElementsArray = createElements(elementName, elementDetails, {curIndex}, assetKey, elementBlueprint);\n      }\n\n      newElementsArray.forEach((newElement, index)=> {\n        if (elementDetails.children) {\n          if (elementDetails.carryParentCount){\n            createNestedElements(elementDetails.children, newElement, index, curIndex);\n          } else {\n            createNestedElements(elementDetails.children, newElement, index);\n          }\n        }\n  \n        element.appendChild(newElement);\n      })\n\n    })\n  }\n\n  let container;\n\n  if (containerType === \"container\" || containerType === \"div\"){\n    container = document.createElement('div');\n    if (className === \"nonegiven\") {\n      container.classList.add('container');\n    }\n  } else if (containerType === \"header\"){\n    container = document.createElement('header');\n    if(className === \"nonegiven\") {\n      container.classList.add('header');\n    }\n  }else if (containerType === \"footer\"){\n    container = document.createElement('footer');\n    if(className === \"nonegiven\") {\n      container.classList.add('footer');\n    }\n  }else if (containerType === \"section\"){\n    container = document.createElement('section');\n    if(className === \"nonegiven\") {\n      container.classList.add('section');\n    }\n  }\n\n  if (!(className === \"nonegiven\")){\n    container.classList.add(className);\n  }\n  createNestedElements(blueprint, container);\n  return container;\n}\n\n\n\n//# sourceURL=webpack://odins-diner/./src/tools.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;