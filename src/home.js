import { buildBlueprint, objToArray } from "./tools";

let text = {
  title: "Kevin Bacon's Bacon Emporium",
  tagline: 'Where even the water has bacon!',
  intro:
    'Step into the sizzling spotlight of flavor at "Kevin Bacon\'s Bacon Emporium" – where we\'re Footloose with our love for bacon! Be mesmerized by a culinary experience that\'s Six Degrees of Deliciousness, as we pay homage to the legendary Kevin Bacon and his iconic roles both on and off the silver screen. Our Emporium is a haven for bacon enthusiasts, as well as Bacon enthusiasts. Where taste buds dance with delight as they revel in the symphony of crispy, savory notes. Seize this opportunity and indulge in the Bacon Emporium experience that will have you shouting, "Kevin Bacon, you\'ve done it again!"',
};

let loadHome = function () {
  let content = document.getElementById('content');
  let existingContainer = document.querySelector('.container');

  let homeBlueprint = {
    div: {
      container: {},
      hero: {},
      heroLeft: {},
      heroRight: {},
    },
    h1: { title: { hasText: true } },
    img: { heroImg: {} },
    p: {
      tagline: { hasText: true },
      intro: { hasText: true },
    },
  };
  
  let elementsObj = {};
  const buildPage = function () {
    // create Object with elements, e.g. { container: div.container, title: h1.title }
    let keysArray = objToArray(text);
    console.log(keysArray);
    elementsObj = buildBlueprint(homeBlueprint,  text);
    console.log({elementsObj});

    // Add contents to elements
    // addContents(elementsObj, text);
    elementsObj.heroImg.src = 'https://picsum.photos/400/600';

    // Add elements to DOM
    elementsObj.heroLeft.append(elementsObj.title, elementsObj.tagline, elementsObj.intro);
    elementsObj.heroRight.append(elementsObj.heroImg);
    elementsObj.hero.append(elementsObj.heroLeft, elementsObj.heroRight);
    elementsObj.container.append(elementsObj.hero);
  };

  if (!existingContainer) {
    buildPage();
    content.append(elementsObj.container);
  } else {
    buildPage();
    content.removeChild(existingContainer);
    content.append(elementsObj.container);
  }
};

export { loadHome };