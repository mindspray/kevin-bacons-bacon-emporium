let createTabNav = function(){
  let content = document.getElementById('content');

  let nav = document.createElement('nav');
  let ul = document.createElement('ul');
  let tabs = ['home', 'menu', 'contact'];

  tabs.forEach((tab) => {
    let li = document.createElement('li');
    li.textContent = tab;
    li.classList.add(`${tab}Tab`);
    ul.append(li);
  })

  nav.append(ul);

  content.append(nav);
}

export { createTabNav }