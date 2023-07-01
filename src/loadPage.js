let loadPage = function() {
  let content = document.getElementById('content');
  let existingContainer = document.querySelector('.container');
  let container;
  
  // Problem -- The container is being added multiple times. Container should be made once at a higher level, or checked in every file (higher level seems to me more in line with DRY). The directions said to handle tab switching in index

  const buildPage = function(){
    container = document.createElement('div');
    container.classList.add('container');
    let title = document.createElement('h1');
    title.textContent = "Kevin Bacon's Bacon Emporium";
    
    let hero = document.createElement('img');
    hero.src = 'https://picsum.photos/400/600'
    
    let para = document.createElement('p');
    para.textContent = "Welcome to Kevin Bacon's Bacon Emporium, where even the water has bacon!"
    
    container.append(title, hero, para);
  };

  if(!existingContainer){
    buildPage();
    content.append(container);
  } else {
    buildPage();
    content.removeChild(existingContainer);
    content.append(container);
  }
}

export { loadPage };