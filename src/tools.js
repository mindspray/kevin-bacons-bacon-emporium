let objToArray = function (data) {
  return Object.entries(data).reduce((r, [key, value]) => {
    if (typeof value === 'object' && !(value instanceof Array)) {
      r = r.concat(objToArray(value));
    }
    else { 
      console.log([key, value]);
      r.push([key, value]);
    }
    return r
  }, [])
}

let arrayToObj = function (arr){
  let obj = {}
  let counter = 1;

  arr.forEach((x, i) => {
    let key = x[0]
    let value = x[1]

    if (obj[key])

    if (obj[key]) {
      obj[`${key}${counter}`] = value;
    } else {
      obj[key] = value;
    }
  })

  return obj;
}


function createElements(element, classes, count = 1, curIndex = 0, text, textKey){
  let elements = [];

  // if (!(Array.isArray(text)) && typeof text[0] === 'object'){
  //   text[]
  // }

  // I suspect there is a problem with this count variable. I am trying to increment on each name and description object, but the count variable for those individual objects is 1 while the real count is on the parent object. Maybe use text array length instead, if it's an array, and if not use 1?
  for (let i = 0; i < count; i++){
    let el = document.createElement(element);
    el.classList.add(...classes);

    if(text){
      if (typeof text === 'string'){
        el.textContent = text;
      } else if (Array.isArray(text) && typeof text[0] === 'string'){
        el.textContent = text[curIndex];
      } else if (Array.isArray(text) && typeof text[0] === 'object'){
        let textObj = text[curIndex];
        el.textContent = textObj[textKey];
      }
    }

    elements.push(el);
  }

  return elements;
}

function createElementFromBlueprint(blueprint) {

  function createNestedElements(elementBlueprint,element, curIndex) {
    Object.keys(elementBlueprint).forEach((key, index) => {
      const elementName = key.split('_')[0];
      const textKey = key.split('_')[1];
      const elementDetails = elementBlueprint[key];
      const newElementsArray = createElements(elementName, elementDetails.classes, elementDetails.count, curIndex, elementDetails.text, textKey);

      newElementsArray.forEach((newElement, index)=> {
        if (elementDetails.children) {
          createNestedElements(elementDetails.children, newElement, index);
        }
  
        element.appendChild(newElement);
      })

    })
  }

  const container = document.createElement('div');
  container.classList.add('container');
  createNestedElements(blueprint, container);
  return container;
}

// // Call the function with the provided blueprint
// const menuContainer = createElementFromBlueprint(blueprint);

// // Append the created elements to the document body
// document.body.appendChild(menuContainer);


let buildBlueprint = function (pageBlueprint, textObj) {
  let elements = {};
  let textArr = objToArray(textObj);
  console.log(textArr);

  // let trimmedTextObj = arrayToObj(textArr);
  // console.log(trimmedTextObj);

  // ["div", "h1", ...]
  let blueprintKeys = Object.keys(pageBlueprint);

  blueprintKeys.forEach((blueprintKey) => {
    // ["container", "menuBox", "spacer", ...]
    let blueprintKeyKeys = Object.keys(pageBlueprint[blueprintKey]);

    blueprintKeyKeys.forEach((blueprintKeyKey) => {
      // { count: 15, hasText: true }
      let blueprintKeyKeyValue = pageBlueprint[blueprintKey][blueprintKeyKey];

      let count = blueprintKeyKeyValue.count ? blueprintKeyKeyValue.count : 1;
      let el;
      
      console.log(`creating ${count} ${blueprintKey}'s`);
      for(let i = 1; i <= count; i++){
        console.log(`round ${i}: ${blueprintKeyKey}`);
        el = document.createElement(blueprintKey);
        el.classList.add(blueprintKeyKey);
        el.classList.add(`${i}`);

        
        if (blueprintKeyKeyValue.hasText){
          /* I want to be able to pass in a string like "menu" or "name", or "description" coming from the pageBlueprint. That string should be a key to a value in textObj.
          
          Problem is, that string matches multiple keys.

          Can I make the string more specific?
           */
          el.textContent = textArr[textArr.indexOf(blueprintKeyKey)]
        }
        if (blueprintKeyKeyValue.isCounter) el.textContent = `${i}`;

        /* Maybe the opposite route? Search the textObj, and then assign its strings to element.textContents */

        /* What is it that I want to ultimately end up doing? I want to be able to take a blueprint object, generate the right format and number of elements. The object keys are element types, the keys' keys are class names.
        
        Problem is object are unique, however since I'm making multiple elements, the class names will be non unique.

        Object hold unique key names.
        Objects can hold multiple objects with the same key names.

        I am using the object to build multiple objects with the same name however. (p.name, p.name, p.name)

        Either I use this blueprint to create an object with unique numbered keys, or maybe an object with array 'key key values'. Or create an array of all the objects (tried this, very sloppy). Once I have an object of all unique names though, the problem transfers to the textObject. That object has multiple objects with the same keys inside it. So far I've created an array of all of it [["menu", "Menu"], ["name", "Bacon thing"], ["description", "has Bacon"],...]
        
        I then have
        
        */

        if (blueprintKeyKeyValue.count > 1) {
          elements[`${blueprintKeyKey}${i}`] = el;
        }
        else {
          elements[`${blueprintKeyKey}`] = el;
        }
      }

    });
  });
  
  // return an object with keys that match first level blueprint keys (container..),so elements.container returns the 'container' div element 
  return elements;
};

// const addContents = function(elementsAndBP, obj){
//   Object.values(elementsAndBP).forEach(element => {
//     if (element.hasText){
//       console.log(`${element} has text`);
//     }
//   })

//   Object.keys(elementsAndBP).forEach(elementName => {
//     if (Object.keys(obj).includes(elementName)){
//       elementsAndBP[elementName].textContent = obj[elementName];
//     }
//   })
// }

export { buildBlueprint, createElementFromBlueprint, objToArray };