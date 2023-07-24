import { buildBlueprint,createElementFromBlueprint, objToArray } from "./tools"

// in optimal order
let text = {
  "menu": "The Baconorium Menu",
  "appetizers": [
    {
      "name": "A-List Film Reels Sliders",
      "description": "A star-studded cast of beef, cheese, and bacon come together in these slider sensations, creating a hit on every plate!"
    },
     {
      "name": "Footloose Popcorn Party",
      "description": "Get ready to dance with delight as you munch on this popcorn extravaganza, featuring the one and only Bacon's irresistible touch."
    },
     {
      "name": "Cinematic Loaded Potato Skins",
      "description": "Prepare for an explosive flavor experience with these loaded skins, each one a blockbuster of bacon goodness."
    },
     {
      "name": "Hollywood Star-Wrapped Asparagus",
      "description": "These bacon-wrapped divas of the vegetable world will grace your palate with their savory allure."
    },
     {
      "name": "Red-Carpet Nacho Extravaganza",
      "description": "Get your taste buds ready for a cinematic adventure, where bacon takes the lead role in this tantalizing nacho production."
    }
  ],
  "entrees": [
    {
      "name": "The Blockbuster Burger",
      "description": "This burger will have you singing praises with each bite, a symphony of bacon and beef like no other."
    },
    {
      "name": "The Movie Star Pizza",
      "description": "Bacon and pizza unite to form a powerful duo, delivering a blockbuster performance with every slice."
    },
    {
      "name": "Baconwood Chicken Alfredo",
      "description": "Let this bacon-infused chicken alfredo take you on a tasteful journey to the heart of Baconwood."
    },
    {
      "name": "The Bacon-BBQ Ribs",
      "description": "Brace yourself for a mouthwatering bacon fiesta, as these ribs take center stage with their bacon-tastic glaze."
    },
    {
      "name": "Bacon Sensation Tacos",
      "description": "These tacos will make you say, \"I can't handle the bacon!\" A taste explosion featuring Kevin Bacon's finest."
    }
  ],
  "sides": [
    {
      "name": "Bacon-Wrapped Asparagus Stars",
      "description": "These asparagus stars are wrapped in bacon, dancing their way onto your plate with delicious flair."
    },
    {
      "name": "The Bacon Connection Mac 'n' Cheese",
      "description": "An irresistible mac 'n' cheese with a bacon twist that'll have you coming back for take two!"
    },
    {
      "name": "Apollo Bacon-Potato Salad",
      "description": "Prepare for a cosmic flavor experience as bacon takes this potato salad to new heights."
    },
    {
      "name": "Bacon Reservoir Brussels Sprouts",
      "description": "These Brussels sprouts, starring bacon in a key role, will make you a fan of this Hollywood hit."
    },
    {
      "name": "Bacon's Star-Studded Garlic Bread",
      "description": "This garlic bread, adorned with bacon stardom, is destined to shine bright on your table."
    }
  ]
}

/* Adding a children: key to the blueprint keys' keys objects would cause a lot of redundencies.
*/
// Not in optimal order

let menuItem = {
  _count: 5,
  number: { hasText: true},
  name: { hasText: true},
  description: {hasText: true}
}

const blueprint = {
  h1_menu: {
    classes: ["menu-title"],
    "text": text.menu
  },
  ul_appetizers: {
    classes: ["menu-section"],
    children: {
      li_item: {
        count: 5,
        classes: ["menu-item"],
        children: {
          span_number: {
            classes: ["item-number"],
            "text": ['1','2','3','4','5']
          },
          p_name: {
            classes: ["item-name"],
            "text": text.appetizers
          },
          p_description: {
            classes: ["item-description"],
            "text": text.appetizers
          },
        },
      },
    },
  },
  ul_entrees: {
    classes: ["menu-section"],
    children: {
      li_item: {
        count: 5,
        classes: ["menu-item"],
        children: {
          span_number: {
            classes: ["item-number"],
            "text": ['1','2','3','4','5']
          },
          
          p_name: {
            classes: ["item-name"],
            "text": text.entrees
          },
          p_description: {
            classes: ["item-description"],
            "text": text.entrees
          },
        },
      },
    },
  },
  ul_sides: {
    classes: ["menu-section"],
    children: {
      li_item: {
        count: 5,
        classes: ["menu-item"],
        children: {
          span_number: {
            classes: ["item-number"],
            "text": ['1','2','3','4','5']
          },
          p_name: {
            classes: ["item-name"],
            "text": text.sides
          },
          p_description: {
            classes: ["item-description"],
            "text": text.sides
          },
        },
      },
    },
  },
};

let elementsObj = {}

let blueprintCopy = {...blueprint};

const buildPage = function(){
  const menuContainer = createElementFromBlueprint(blueprintCopy);
  // document.body.appendChild(menuContainer);

  return menuContainer;
}

let loadMenu = function(){
  let content = document.getElementById('content');
  let existingContainer = document.querySelector('.container');

  let testThing = objToArray(text);
  console.log(testThing);
  // const buildPage = function(){

    // console.log("Building menu");

    // fsdgs
    // elementsObj = buildBlueprint(menuBlueprint, text);
    // console.log(elementsObj);

    // console.log(elementsObj)
    // sgsdgd

    // container = document.createElement('div');
    // let title = document.createElement('h1');
    // elementsObj.menu.textContent = "Menu"

    // let menu = document.createElement('div');
    // container.classList.add('container');
    // let menuItems = [];
    // let sectionCount = -1;
    // let dishTypes = Object.keys(text);
    // for(let i = 0; i < 15; i++){
      // let newDiv = document.createElement('div');
      // let cornerNumber = document.createElement('p');
      // let dishNumber = (i%5)+1
      // cornerNumber.textContent = `${dishNumber}`;
      // if(dishNumber === 1){
      //   sectionCount++;
      //   let blankDiv = document.createElement('div');
      //   blankDiv.classList.add('spacer');
      //   menuItems.push(blankDiv);
        
      //   let dishType = document.createElement('h2');
      //   dishType.innerText = dishTypes[sectionCount].toUpperCase();
      //   menuItems.push(dishType);
      // }
      // let currentDish = text[dishTypes[sectionCount]][`${dishNumber}`];
      // let dishName = document.createElement('p');
      // let dishDescrip = document.createElement('p');
      // dishName.textContent = currentDish.name;
      // dishDescrip.textContent = currentDish.description;

      // newDiv.append(cornerNumber, dishName, dishDescrip);

      // let image = document.createElement('img');
      // image.src = 'https://picsum.photos/100/100'

      // let title = document.createElement('h3');
      // title.textContent = "a dish";

      // menuItems.push(newDiv);
    // }
    // menuItems.forEach((item) => menu.append(item));
    // container.append(title, menu);
  // }

  let menuPage = buildPage();

  if (!existingContainer){
    content.append(menuPage);
  } else {
    content.removeChild(existingContainer);
    content.append(menuPage);
  }
}

export { loadMenu }