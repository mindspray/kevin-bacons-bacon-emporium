import { createElementFromBlueprint } from "./tools";
const text = {
  "links": ['HOME', 'MENU', 'CONTACT']
}
/* 
  TEMPLATE:
  DOMElement_textKey: {
    count: number of elements to produce
    classes: ["array", "of", "classes"]
    text: a string, an array of strings, or array of objects with string entries.
    children: { Another DOM Template }
  }
*/
const blueprint = {
  nav_navBar: {
    classes: ['nav-bar'],
    children: {
      ul_navigation: {
        classes: ['nav-list'],
        children: {
          li_item: {
            count: 3,
            classes: ['nav-item'],
            children: {
              a_links: {
                classes: ['item-text'],
                text: text.links,
                ids: [
                  'home-tab',
                  'menu-tab',
                  'contact-tab'],
                href: ['#']
              }
            }
          }
        }
      }
    }
  }

}

let navBar;

let createTabNav = function(){
  let content = document.getElementById('content');
  // let header = document.createElement('header');
  // header.classList.add('header');

  // let nav = document.createElement('nav');
  // let logobox = document.createElement('div');
  // let logo = document.createElement('img');
  // let ul = document.createElement('ul');
  // let tabs = ['home', 'menu', 'contact'];

  // logo.src = 

  // tabs.forEach((tab) => {
  //   let li = document.createElement('li');
  //   li.textContent = tab;
  //   li.classList.add(`${tab}Tab`);
  //   ul.append(li);
  // })

  // nav.append(ul);
  // header.append(nav);

  const buildPage = function(){
    const navBar = createElementFromBlueprint(blueprint,{ containerType: 'header'});

    return navBar;
  }

  let header = buildPage();
  content.append(header);
}

export { createTabNav }