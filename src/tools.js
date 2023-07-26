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


function createElements(element, details, index, assetKey, parentBlueprint){
  let ids = details.ids;
  let classes = details.classes;
  let count = details.count || 1;
  let text = details.text;
  let images = details.src;
  let curIndex = index.curIndex;
  let carriedIndex = index.carriedIndex;
  
  let links = details.href;

  let elements = [];

  /* IMPORTANT NOTE REGARDING TEMPLATE:
    Be sure the textObjects or hrefObjects use the assetKey as the key for the corresponding blueprint object.
  */

  for (let i = 0; i < count; i++){
    let el = document.createElement(element);
    el.classList.add(...classes);

    if(ids){
      if(typeof ids === 'string'){
        el.id = ids;
      } else if (Array.isArray(ids) && typeof ids[0] === 'string'){
        el.id = ids[curIndex];
      }
    }

    if(text){
      if (typeof text === 'string'){
        el.textContent = text;
      } else if (Array.isArray(text) && typeof text[0] === 'string'){
        el.textContent = text[curIndex];
      } else if (Array.isArray(text) && typeof text[0] === 'object'){
        let textObj = text[curIndex];
        el.textContent = textObj[assetKey];
      }
    }

    if (images){
      let imagesRoot = details.srcRoot;
      let imagesPath = `./images/${imagesRoot}-images/${imagesRoot}-${images[carriedIndex]}`;
      let imagesThumbPath = `images/thumb-${curIndex}.png`

      console.log({images});

      if (typeof images === 'string'){
        el.src = images;
      } else if (Array.isArray(images) && typeof images[0] === 'string') {
        el.src = `${imagesPath}`;
      } else if (Array.isArray(images) && typeof images[0] === 'object'){
        el.src = `${imagesPath}`;
      }
    }

    if (links){
      if (typeof links === 'string'){
        el.src = links;
      } else if (Array.isArray(links) && typeof links[0] === 'string'){
        el.src = links[curIndex];
      } else if (Array.isArray(links) && typeof links[0] === 'object'){
        let linksObj = links[curIndex];
        el.src = linksObj[assetKey];
      }
    }

    elements.push(el);
  }

  return elements;
}

function createElementFromBlueprint(blueprint, {containerType = "div", className = "nonegiven"} = {}) {

  function createNestedElements(elementBlueprint,element, curIndex, carriedIndex) {
    Object.keys(elementBlueprint).forEach((key, index) => {
      const elementName = key.split('_')[0];
      const assetKey = key.split('_')[1];
      const elementDetails = elementBlueprint[key];

      let newElementsArray;
      if (carriedIndex != undefined){
        newElementsArray = createElements(elementName, elementDetails, {curIndex, carriedIndex}, assetKey, elementBlueprint);
      } else {

        newElementsArray = createElements(elementName, elementDetails, {curIndex}, assetKey, elementBlueprint);
      }

      newElementsArray.forEach((newElement, index)=> {
        if (elementDetails.children) {
          if (elementDetails.carryParentCount){
            createNestedElements(elementDetails.children, newElement, index, curIndex);
          } else {
            createNestedElements(elementDetails.children, newElement, index);
          }
        }
  
        element.appendChild(newElement);
      })

    })
  }

  let container;

  if (containerType === "container" || containerType === "div"){
    container = document.createElement('div');
    if (className === "nonegiven") {
      container.classList.add('container');
    }
  } else if (containerType === "header"){
    container = document.createElement('header');
    if(className === "nonegiven") {
      container.classList.add('header');
    }
  }else if (containerType === "footer"){
    container = document.createElement('footer');
    if(className === "nonegiven") {
      container.classList.add('footer');
    }
  }else if (containerType === "section"){
    container = document.createElement('section');
    if(className === "nonegiven") {
      container.classList.add('section');
    }
  }

  if (!(className === "nonegiven")){
    container.classList.add(className);
  }
  createNestedElements(blueprint, container);
  return container;
}

export { createElementFromBlueprint, objToArray };