let loadMenu = function(){
  let content = document.getElementById('content');
  let existingContainer = document.querySelector('.container');
  let container;

  const buildPage = function(){
    container = document.createElement('div');
    let menu = document.createElement('div');
    container.classList.add('container');
    let menuItems = [];
    for(let i = 0; i < 6; i++){
      let newDiv = document.createElement('div');
      let cornerNumber = document.createElement('p');
      cornerNumber.textContent = `${i+1}`;
      newDiv.append(cornerNumber);
      menuItems.push(newDiv);
    }
    menuItems.forEach((item) => menu.append(item));
    container.append(menu);
  }

  if (!existingContainer){
    buildPage();
    content.append(container);
  } else {
    buildPage();
    content.removeChild(existingContainer);
    content.append(container);

  }

  // container.innerHTML = "";
}

export { loadMenu }