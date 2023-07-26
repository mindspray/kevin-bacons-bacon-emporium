import { createElementFromBlueprint } from "./tools"

const text = {
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
      "name": "Bacon-Wrapped Asparagus Stars",
      "description": "These asparagus stars are wrapped in bacon, dancing their way onto your plate with delicious flair."
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
      "name": "Bacon Bliss Bombs",
      "description": "Irresistible bacon-wrapped cheddar and jalapeño bites baked to crispy perfection, served with a zesty chipotle dipping sauce."
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

const images = {
  app: [
    '01.png',
    '02.png',
    '03.png',
    '04.png',
    '05.png'
  ],
  entree: [
    '01.png',
    '02.png',
    '03.png',
    '04.png',
    '05.png'
  ],
  side: [
    '01.png',
    '02.png',
    '03.png',
    '04.png',
    '05.png'
  ]
}

/* 
  TEMPLATE:
  DOMElement_assetKey: {
    count: number of elements to produce
    classes: ["array", "of", "classes"]
    text: a string, an array of strings, or array of objects with string entries.
    href: a string, an array of strings, or array of objects with string entries containing links.
    children: { Another DOM Template }
  }
*/
const blueprint = {
  h1_menu: {
    classes: ["menu-title"],
    "text": text.menu
  },
  h2_appSectionTitle: {
    classes: ["section-title"],
    text: 'Appetizers'
  },
  ul_appetizers: {
    classes: ["menu-section"],
    children: {
      li_item: {
        count: 5,
        classes: ["menu-item"],
        children: {
          div_imageBox: {
            classes: ["item-picture-box"],
            carryParentCount: true,
            children: {
              img_menuImages:{
                classes: ['item-picture'],
                srcRoot: 'app',
                src: images.app
              }
            }
          },
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
  h2_entreeSectionTitle: {
    classes: ["section-title"],
    text: 'Entrees'
  },
  ul_entrees: {
    classes: ["menu-section"],
    children: {
      li_item: {
        count: 5,
        classes: ["menu-item"],
        children: {
          div_imageBox: {
            classes: ["item-picture-box"],
            carryParentCount: true,
            children: {
              img_menuImages:{
                classes: ['item-picture'],
                srcRoot: 'entree',
                src: images.entree
              }
            }
          },
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
  h2_sideSectionTitle: {
    classes: ["section-title"],
    text: 'Sides'
  },
  ul_sides: {
    classes: ["menu-section"],
    children: {
      li_item: {
        count: 5,
        classes: ["menu-item"],
        children: {
          div_imageBox: {
            classes: ["item-picture-box"],
            carryParentCount: true,
            children: {
              img_menuImages:{
                classes: ['item-picture'],
                srcRoot: 'side',
                src: images.side
              }
            }
          },
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

let menuPage;

const loadMenu = function(){
  const content = document.getElementById('content');
  const existingContainer = document.querySelector('.container');
  
  const buildPage = function(){
    const menuContainer = createElementFromBlueprint(blueprint);
  
    return menuContainer;
  }

  if (!menuPage) {
    menuPage = buildPage();
  }

  if (!existingContainer){
    content.append(menuPage);
  } else {
    content.removeChild(existingContainer);
    content.append(menuPage);
  }
}

export { loadMenu }