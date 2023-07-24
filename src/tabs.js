let createTabNav = function(){
  let content = document.getElementById('content');
  let header = document.createElement('header');
  header.classList.add('header');

  let nav = document.createElement('nav');
  let logobox = document.createElement('div');
  let logo = document.createElement('img');
  let ul = document.createElement('ul');
  let tabs = ['home', 'menu', 'contact'];

  logo.src = 

  tabs.forEach((tab) => {
    let li = document.createElement('li');
    li.textContent = tab;
    li.classList.add(`${tab}Tab`);
    ul.append(li);
  })

  nav.append(ul);
  header.append(nav);
  content.append(header);
}

export { createTabNav }