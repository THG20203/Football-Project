'use script';

//progress steps

//players cards
const panels = document.querySelectorAll('.panel');
// querySelector all putting all panels into a node list

panels.forEach((panel) => {
  // want an event listener on each panel so if we click on it something happens
  panel.addEventListener('click', () => {
    /* before we add a class of active - remove the class of active on all the others 
    so we're going to use a function called removeActiveClasses we'll create below */
    removeActiveClasses();
    /* panel.classList gives me a list of the classes, but also have methods
    on the classList like 'add', can specifically add a class */
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
