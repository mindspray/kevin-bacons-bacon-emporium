import { createElementFromBlueprint } from "./tools";

const text = {
  title: "Contact us",
  contact: "Want to reach us? Call (555) 123-4567"
}

/* 
  TEMPLATE:
  DOMElement_assetKey: {
    count: number of elements to produce
    classes: ["array", "of", "classes"]
    text: a string, an array of strings, or array of objects with string entries.
    children: { Another DOM Template }
  }
*/
const blueprint = {
  h1_title: {
    classes: ['contact-title'],
    text: text.title
  },
  div_contactImgBox: {
    classes: ['contact-image-box'],
    children: {
      img_contactImg: {
        classes: ['contact-image'],
        src: './images/contact.png'
      },
    }
  },
  p_contact: {
    classes: ['contact'],
    text: text.contact
  }
}

let contactPage;

const loadContact = function() {
  let content = document.getElementById('content');
  let existingContainer = document.querySelector('.container');

  const buildPage = function(){
    const contactContainer = createElementFromBlueprint(blueprint);
    return contactContainer;
  };

  if (!contactPage){
    contactPage = buildPage();
  }

  if (!existingContainer){
    content.append(menuPage);
  } else {
    content.removeChild(existingContainer);
    content.append(contactPage);
  }
}

export { loadContact };