import { loadPage } from './loadPage.js'
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import { createTabNav } from './tabs.js';

let content = document.getElementById('content');

createTabNav();
loadPage();

let homeTab = document.querySelector('.homeTab');
let menuTab = document.querySelector('.menuTab');
let contactTab = document.querySelector('.contactTab');

homeTab.addEventListener('click', loadPage);
menuTab.addEventListener('click', loadMenu);
contactTab.addEventListener('click', loadContact);


