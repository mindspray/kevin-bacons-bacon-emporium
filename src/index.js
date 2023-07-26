import { loadHome } from './home.js'
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import { createTabNav } from './tabs.js';

createTabNav();
loadHome();

let homeTab = document.getElementById('home-tab');
let menuTab = document.getElementById('menu-tab');
let contactTab = document.getElementById('contact-tab');

homeTab.addEventListener('click', loadHome);
menuTab.addEventListener('click', loadMenu);
contactTab.addEventListener('click', loadContact);