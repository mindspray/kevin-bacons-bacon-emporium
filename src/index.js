import { loadHome } from './home.js'
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import { createTabNav } from './tabs.js';

createTabNav();
loadHome();

let homeTab = document.querySelector('.homeTab');
let menuTab = document.querySelector('.menuTab');
let contactTab = document.querySelector('.contactTab');

homeTab.addEventListener('click', loadHome);
menuTab.addEventListener('click', loadMenu);
contactTab.addEventListener('click', loadContact);