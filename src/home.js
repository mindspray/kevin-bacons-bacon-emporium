import { createElementFromBlueprint } from "./tools";

const text = {
  title: "Kevin Bacon's Bacon Emporium",
  tagline: 'Where even the water has bacon!',
  intro:
    'Step into the sizzling spotlight of flavor at "Kevin Bacon\'s Bacon Emporium" – where we\'re Footloose with our love for bacon! Be mesmerized by a culinary experience that\'s Six Degrees of Deliciousness, as we pay homage to the legendary Kevin Bacon and his iconic roles both on and off the silver screen. Our Emporium is a haven for bacon enthusiasts, as well as Bacon enthusiasts. Where taste buds dance with delight as they revel in the symphony of crispy, savory notes. Seize this opportunity and indulge in the Bacon Emporium experience that will have you shouting, "Kevin Bacon, you\'ve done it again!"',
};

/* 
  TEMPLATE:
  DOMElement_assetKey: {
    count: number of elements to produce
    classes: ["array", "of", "classes"]
    text: a string, an array of strings, or array of objects with string entries. 
    children: an object with any children.
  }
*/
const blueprint = {
  div_hero: {
    classes: ["hero"],
    children: {
      div_heroLeft: {
        classes: ["hero-left"],
        children: {
          h1_title: {
            classes: ["title"],
            text: text.title
          },
          p_tagline: {
            classes: ['tagline'],
            text: text.tagline
          },
          p_intro: {
            classes: ['intro'],
            text: text.intro
          }
        }
      },
      div_heroRight: {
        classes: ["hero-right"],
        children: {
          img_heroImg: {
            classes: ['hero-img'],
            src: './images/hero-splash.png'
          }
        }
      }
    }
  }
}

let homePage;

const loadHome = function () {
  const content = document.getElementById('content');
  const existingContainer = document.querySelector('.container');
  
  const buildPage = function(){
    const homeContainer = createElementFromBlueprint(blueprint);
  
    return homeContainer;
  }

  if (!homePage){
    homePage = buildPage();
  }

  if (!existingContainer){
    content.append(homePage);
  } else {
    content.removeChild(existingContainer);
    content.append(homePage);
  }
};

export { loadHome };