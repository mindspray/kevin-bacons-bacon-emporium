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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nlet loadContact = function() {\n  let content = document.getElementById('content');\n  let existingContainer = document.querySelector('.container');\n  let container;\n  \n  // Problem -- The container is being added multiple times. Container should be made once at a higher level, or checked in every file (higher level seems to me more in line with DRY). The directions said to handle tab switching in index\n\n  const buildPage = function(){\n    container = document.createElement('div');\n    container.classList.add('container');\n    let title = document.createElement('h1');\n    title.textContent = \"Contact us\";\n    \n    let hero = document.createElement('img');\n    hero.src = 'https://picsum.photos/600/200'\n    \n    let para = document.createElement('p');\n    para.textContent = \"Want to reach us? Call (555) 123-4567\"\n    \n    container.append(title, hero, para);\n  };\n\n  if(!existingContainer){\n    buildPage();\n    content.append(container);\n  } else {\n    buildPage();\n    content.removeChild(existingContainer);\n    content.append(container);\n  }\n}\n\n\n\n//# sourceURL=webpack://odins-diner/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\n\nlet text = {\n  title: \"Kevin Bacon's Bacon Emporium\",\n  tagline: 'Where even the water has bacon!',\n  intro:\n    'Step into the sizzling spotlight of flavor at \"Kevin Bacon\\'s Bacon Emporium\" – where we\\'re Footloose with our love for bacon! Be mesmerized by a culinary experience that\\'s Six Degrees of Deliciousness, as we pay homage to the legendary Kevin Bacon and his iconic roles both on and off the silver screen. Our Emporium is a haven for bacon enthusiasts, as well as Bacon enthusiasts. Where taste buds dance with delight as they revel in the symphony of crispy, savory notes. Seize this opportunity and indulge in the Bacon Emporium experience that will have you shouting, \"Kevin Bacon, you\\'ve done it again!\"',\n};\n\nlet loadHome = function () {\n  let content = document.getElementById('content');\n  let existingContainer = document.querySelector('.container');\n\n  let homeBlueprint = {\n    div: {\n      container: {},\n      hero: {},\n      heroLeft: {},\n      heroRight: {},\n    },\n    h1: { title: { hasText: true } },\n    img: { heroImg: {} },\n    p: {\n      tagline: { hasText: true },\n      intro: { hasText: true },\n    },\n  };\n  \n  let elementsObj = {};\n  const buildPage = function () {\n    // create Object with elements, e.g. { container: div.container, title: h1.title }\n    let keysArray = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.objToArray)(text);\n    console.log(keysArray);\n    elementsObj = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.buildBlueprint)(homeBlueprint,  text);\n    console.log({elementsObj});\n\n    // Add contents to elements\n    // addContents(elementsObj, text);\n    elementsObj.heroImg.src = 'https://picsum.photos/400/600';\n\n    // Add elements to DOM\n    elementsObj.heroLeft.append(elementsObj.title, elementsObj.tagline, elementsObj.intro);\n    elementsObj.heroRight.append(elementsObj.heroImg);\n    elementsObj.hero.append(elementsObj.heroLeft, elementsObj.heroRight);\n    elementsObj.container.append(elementsObj.hero);\n  };\n\n  if (!existingContainer) {\n    buildPage();\n    content.append(elementsObj.container);\n  } else {\n    buildPage();\n    content.removeChild(existingContainer);\n    content.append(elementsObj.container);\n  }\n};\n\n\n\n//# sourceURL=webpack://odins-diner/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.js */ \"./src/tabs.js\");\n\n\n\n\n\n(0,_tabs_js__WEBPACK_IMPORTED_MODULE_3__.createTabNav)();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\nlet homeTab = document.querySelector('.homeTab');\nlet menuTab = document.querySelector('.menuTab');\nlet contactTab = document.querySelector('.contactTab');\n\nhomeTab.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome);\nmenuTab.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu);\ncontactTab.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact);\n\n//# sourceURL=webpack://odins-diner/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\n\n// in optimal order\nlet text = {\n  \"menu\": \"The Baconorium Menu\",\n  \"appetizers\": [\n    {\n      \"name\": \"A-List Film Reels Sliders\",\n      \"description\": \"A star-studded cast of beef, cheese, and bacon come together in these slider sensations, creating a hit on every plate!\"\n    },\n     {\n      \"name\": \"Footloose Popcorn Party\",\n      \"description\": \"Get ready to dance with delight as you munch on this popcorn extravaganza, featuring the one and only Bacon's irresistible touch.\"\n    },\n     {\n      \"name\": \"Cinematic Loaded Potato Skins\",\n      \"description\": \"Prepare for an explosive flavor experience with these loaded skins, each one a blockbuster of bacon goodness.\"\n    },\n     {\n      \"name\": \"Hollywood Star-Wrapped Asparagus\",\n      \"description\": \"These bacon-wrapped divas of the vegetable world will grace your palate with their savory allure.\"\n    },\n     {\n      \"name\": \"Red-Carpet Nacho Extravaganza\",\n      \"description\": \"Get your taste buds ready for a cinematic adventure, where bacon takes the lead role in this tantalizing nacho production.\"\n    }\n  ],\n  \"entrees\": [\n    {\n      \"name\": \"The Blockbuster Burger\",\n      \"description\": \"This burger will have you singing praises with each bite, a symphony of bacon and beef like no other.\"\n    },\n    {\n      \"name\": \"The Movie Star Pizza\",\n      \"description\": \"Bacon and pizza unite to form a powerful duo, delivering a blockbuster performance with every slice.\"\n    },\n    {\n      \"name\": \"Baconwood Chicken Alfredo\",\n      \"description\": \"Let this bacon-infused chicken alfredo take you on a tasteful journey to the heart of Baconwood.\"\n    },\n    {\n      \"name\": \"The Bacon-BBQ Ribs\",\n      \"description\": \"Brace yourself for a mouthwatering bacon fiesta, as these ribs take center stage with their bacon-tastic glaze.\"\n    },\n    {\n      \"name\": \"Bacon Sensation Tacos\",\n      \"description\": \"These tacos will make you say, \\\"I can't handle the bacon!\\\" A taste explosion featuring Kevin Bacon's finest.\"\n    }\n  ],\n  \"sides\": [\n    {\n      \"name\": \"Bacon-Wrapped Asparagus Stars\",\n      \"description\": \"These asparagus stars are wrapped in bacon, dancing their way onto your plate with delicious flair.\"\n    },\n    {\n      \"name\": \"The Bacon Connection Mac 'n' Cheese\",\n      \"description\": \"An irresistible mac 'n' cheese with a bacon twist that'll have you coming back for take two!\"\n    },\n    {\n      \"name\": \"Apollo Bacon-Potato Salad\",\n      \"description\": \"Prepare for a cosmic flavor experience as bacon takes this potato salad to new heights.\"\n    },\n    {\n      \"name\": \"Bacon Reservoir Brussels Sprouts\",\n      \"description\": \"These Brussels sprouts, starring bacon in a key role, will make you a fan of this Hollywood hit.\"\n    },\n    {\n      \"name\": \"Bacon's Star-Studded Garlic Bread\",\n      \"description\": \"This garlic bread, adorned with bacon stardom, is destined to shine bright on your table.\"\n    }\n  ]\n}\n\n/* Adding a children: key to the blueprint keys' keys objects would cause a lot of redundencies.\n*/\n// Not in optimal order\n\nlet menuItem = {\n  _count: 5,\n  number: { hasText: true},\n  name: { hasText: true},\n  description: {hasText: true}\n}\n\nconst blueprint = {\n  h1_menu: {\n    classes: [\"menu-title\"],\n    \"text\": text.menu\n  },\n  ul_appetizers: {\n    classes: [\"menu-section\"],\n    children: {\n      li_item: {\n        count: 5,\n        classes: [\"menu-item\"],\n        children: {\n          span_number: {\n            classes: [\"item-number\"],\n            \"text\": ['1','2','3','4','5']\n          },\n          p_name: {\n            classes: [\"item-name\"],\n            \"text\": text.appetizers\n          },\n          p_description: {\n            classes: [\"item-description\"],\n            \"text\": text.appetizers\n          },\n        },\n      },\n    },\n  },\n  ul_entrees: {\n    classes: [\"menu-section\"],\n    children: {\n      li_item: {\n        count: 5,\n        classes: [\"menu-item\"],\n        children: {\n          span_number: {\n            classes: [\"item-number\"],\n            \"text\": ['1','2','3','4','5']\n          },\n          \n          p_name: {\n            classes: [\"item-name\"],\n            \"text\": text.entrees\n          },\n          p_description: {\n            classes: [\"item-description\"],\n            \"text\": text.entrees\n          },\n        },\n      },\n    },\n  },\n  ul_sides: {\n    classes: [\"menu-section\"],\n    children: {\n      li_item: {\n        count: 5,\n        classes: [\"menu-item\"],\n        children: {\n          span_number: {\n            classes: [\"item-number\"],\n            \"text\": ['1','2','3','4','5']\n          },\n          p_name: {\n            classes: [\"item-name\"],\n            \"text\": text.sides\n          },\n          p_description: {\n            classes: [\"item-description\"],\n            \"text\": text.sides\n          },\n        },\n      },\n    },\n  },\n};\n\nlet elementsObj = {}\n\nlet blueprintCopy = {...blueprint};\n\nconst buildPage = function(){\n  const menuContainer = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.createElementFromBlueprint)(blueprintCopy);\n  // document.body.appendChild(menuContainer);\n\n  return menuContainer;\n}\n\nlet loadMenu = function(){\n  let content = document.getElementById('content');\n  let existingContainer = document.querySelector('.container');\n\n  let testThing = (0,_tools__WEBPACK_IMPORTED_MODULE_0__.objToArray)(text);\n  console.log(testThing);\n  // const buildPage = function(){\n\n    // console.log(\"Building menu\");\n\n    // fsdgs\n    // elementsObj = buildBlueprint(menuBlueprint, text);\n    // console.log(elementsObj);\n\n    // console.log(elementsObj)\n    // sgsdgd\n\n    // container = document.createElement('div');\n    // let title = document.createElement('h1');\n    // elementsObj.menu.textContent = \"Menu\"\n\n    // let menu = document.createElement('div');\n    // container.classList.add('container');\n    // let menuItems = [];\n    // let sectionCount = -1;\n    // let dishTypes = Object.keys(text);\n    // for(let i = 0; i < 15; i++){\n      // let newDiv = document.createElement('div');\n      // let cornerNumber = document.createElement('p');\n      // let dishNumber = (i%5)+1\n      // cornerNumber.textContent = `${dishNumber}`;\n      // if(dishNumber === 1){\n      //   sectionCount++;\n      //   let blankDiv = document.createElement('div');\n      //   blankDiv.classList.add('spacer');\n      //   menuItems.push(blankDiv);\n        \n      //   let dishType = document.createElement('h2');\n      //   dishType.innerText = dishTypes[sectionCount].toUpperCase();\n      //   menuItems.push(dishType);\n      // }\n      // let currentDish = text[dishTypes[sectionCount]][`${dishNumber}`];\n      // let dishName = document.createElement('p');\n      // let dishDescrip = document.createElement('p');\n      // dishName.textContent = currentDish.name;\n      // dishDescrip.textContent = currentDish.description;\n\n      // newDiv.append(cornerNumber, dishName, dishDescrip);\n\n      // let image = document.createElement('img');\n      // image.src = 'https://picsum.photos/100/100'\n\n      // let title = document.createElement('h3');\n      // title.textContent = \"a dish\";\n\n      // menuItems.push(newDiv);\n    // }\n    // menuItems.forEach((item) => menu.append(item));\n    // container.append(title, menu);\n  // }\n\n  let menuPage = buildPage();\n\n  if (!existingContainer){\n    content.append(menuPage);\n  } else {\n    content.removeChild(existingContainer);\n    content.append(menuPage);\n  }\n}\n\n\n\n//# sourceURL=webpack://odins-diner/./src/menu.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTabNav: () => (/* binding */ createTabNav)\n/* harmony export */ });\nlet createTabNav = function(){\n  let content = document.getElementById('content');\n  let header = document.createElement('header');\n  header.classList.add('header');\n\n  let nav = document.createElement('nav');\n  let logobox = document.createElement('div');\n  let logo = document.createElement('img');\n  let ul = document.createElement('ul');\n  let tabs = ['home', 'menu', 'contact'];\n\n  logo.src = \n\n  tabs.forEach((tab) => {\n    let li = document.createElement('li');\n    li.textContent = tab;\n    li.classList.add(`${tab}Tab`);\n    ul.append(li);\n  })\n\n  nav.append(ul);\n  header.append(nav);\n  content.append(header);\n}\n\n\n\n//# sourceURL=webpack://odins-diner/./src/tabs.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildBlueprint: () => (/* binding */ buildBlueprint),\n/* harmony export */   createElementFromBlueprint: () => (/* binding */ createElementFromBlueprint),\n/* harmony export */   objToArray: () => (/* binding */ objToArray)\n/* harmony export */ });\nlet objToArray = function (data) {\n  return Object.entries(data).reduce((r, [key, value]) => {\n    if (typeof value === 'object' && !(value instanceof Array)) {\n      r = r.concat(objToArray(value));\n    }\n    else { \n      console.log([key, value]);\n      r.push([key, value]);\n    }\n    return r\n  }, [])\n}\n\nlet arrayToObj = function (arr){\n  let obj = {}\n  let counter = 1;\n\n  arr.forEach((x, i) => {\n    let key = x[0]\n    let value = x[1]\n\n    if (obj[key])\n\n    if (obj[key]) {\n      obj[`${key}${counter}`] = value;\n    } else {\n      obj[key] = value;\n    }\n  })\n\n  return obj;\n}\n\n\nfunction createElements(element, classes, count = 1, curIndex = 0, text, textKey){\n  let elements = [];\n\n  // if (!(Array.isArray(text)) && typeof text[0] === 'object'){\n  //   text[]\n  // }\n\n  // I suspect there is a problem with this count variable. I am trying to increment on each name and description object, but the count variable for those individual objects is 1 while the real count is on the parent object. Maybe use text array length instead, if it's an array, and if not use 1?\n  for (let i = 0; i < count; i++){\n    let el = document.createElement(element);\n    el.classList.add(...classes);\n\n    if(text){\n      if (typeof text === 'string'){\n        el.textContent = text;\n      } else if (Array.isArray(text) && typeof text[0] === 'string'){\n        el.textContent = text[curIndex];\n      } else if (Array.isArray(text) && typeof text[0] === 'object'){\n        let textObj = text[curIndex];\n        el.textContent = textObj[textKey];\n      }\n    }\n\n    elements.push(el);\n  }\n\n  return elements;\n}\n\nfunction createElementFromBlueprint(blueprint) {\n\n  function createNestedElements(elementBlueprint,element, curIndex) {\n    Object.keys(elementBlueprint).forEach((key, index) => {\n      const elementName = key.split('_')[0];\n      const textKey = key.split('_')[1];\n      const elementDetails = elementBlueprint[key];\n      const newElementsArray = createElements(elementName, elementDetails.classes, elementDetails.count, curIndex, elementDetails.text, textKey);\n\n      newElementsArray.forEach((newElement, index)=> {\n        if (elementDetails.children) {\n          createNestedElements(elementDetails.children, newElement, index);\n        }\n  \n        element.appendChild(newElement);\n      })\n\n    })\n  }\n\n  const container = document.createElement('div');\n  container.classList.add('container');\n  createNestedElements(blueprint, container);\n  return container;\n}\n\n// // Call the function with the provided blueprint\n// const menuContainer = createElementFromBlueprint(blueprint);\n\n// // Append the created elements to the document body\n// document.body.appendChild(menuContainer);\n\n\nlet buildBlueprint = function (pageBlueprint, textObj) {\n  let elements = {};\n  let textArr = objToArray(textObj);\n  console.log(textArr);\n\n  // let trimmedTextObj = arrayToObj(textArr);\n  // console.log(trimmedTextObj);\n\n  // [\"div\", \"h1\", ...]\n  let blueprintKeys = Object.keys(pageBlueprint);\n\n  blueprintKeys.forEach((blueprintKey) => {\n    // [\"container\", \"menuBox\", \"spacer\", ...]\n    let blueprintKeyKeys = Object.keys(pageBlueprint[blueprintKey]);\n\n    blueprintKeyKeys.forEach((blueprintKeyKey) => {\n      // { count: 15, hasText: true }\n      let blueprintKeyKeyValue = pageBlueprint[blueprintKey][blueprintKeyKey];\n\n      let count = blueprintKeyKeyValue.count ? blueprintKeyKeyValue.count : 1;\n      let el;\n      \n      console.log(`creating ${count} ${blueprintKey}'s`);\n      for(let i = 1; i <= count; i++){\n        console.log(`round ${i}: ${blueprintKeyKey}`);\n        el = document.createElement(blueprintKey);\n        el.classList.add(blueprintKeyKey);\n        el.classList.add(`${i}`);\n\n        \n        if (blueprintKeyKeyValue.hasText){\n          /* I want to be able to pass in a string like \"menu\" or \"name\", or \"description\" coming from the pageBlueprint. That string should be a key to a value in textObj.\n          \n          Problem is, that string matches multiple keys.\n\n          Can I make the string more specific?\n           */\n          el.textContent = textArr[textArr.indexOf(blueprintKeyKey)]\n        }\n        if (blueprintKeyKeyValue.isCounter) el.textContent = `${i}`;\n\n        /* Maybe the opposite route? Search the textObj, and then assign its strings to element.textContents */\n\n        /* What is it that I want to ultimately end up doing? I want to be able to take a blueprint object, generate the right format and number of elements. The object keys are element types, the keys' keys are class names.\n        \n        Problem is object are unique, however since I'm making multiple elements, the class names will be non unique.\n\n        Object hold unique key names.\n        Objects can hold multiple objects with the same key names.\n\n        I am using the object to build multiple objects with the same name however. (p.name, p.name, p.name)\n\n        Either I use this blueprint to create an object with unique numbered keys, or maybe an object with array 'key key values'. Or create an array of all the objects (tried this, very sloppy). Once I have an object of all unique names though, the problem transfers to the textObject. That object has multiple objects with the same keys inside it. So far I've created an array of all of it [[\"menu\", \"Menu\"], [\"name\", \"Bacon thing\"], [\"description\", \"has Bacon\"],...]\n        \n        I then have\n        \n        */\n\n        if (blueprintKeyKeyValue.count > 1) {\n          elements[`${blueprintKeyKey}${i}`] = el;\n        }\n        else {\n          elements[`${blueprintKeyKey}`] = el;\n        }\n      }\n\n    });\n  });\n  \n  // return an object with keys that match first level blueprint keys (container..),so elements.container returns the 'container' div element \n  return elements;\n};\n\n// const addContents = function(elementsAndBP, obj){\n//   Object.values(elementsAndBP).forEach(element => {\n//     if (element.hasText){\n//       console.log(`${element} has text`);\n//     }\n//   })\n\n//   Object.keys(elementsAndBP).forEach(elementName => {\n//     if (Object.keys(obj).includes(elementName)){\n//       elementsAndBP[elementName].textContent = obj[elementName];\n//     }\n//   })\n// }\n\n\n\n//# sourceURL=webpack://odins-diner/./src/tools.js?");

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