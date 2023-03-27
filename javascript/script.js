'use script';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BACKGROUND OVERLAY
const loadText = document.querySelector('.background__loading-text');
const backgroundOverlay = document.querySelector('.background__container');

/* initalise load at 0 */
let load = 0;
/* run function in an interval - every 20 miliseconds 
setInterval() repeatedly calls a function or executes a code snippet, with a fixed time delay 
between each call. */
let int = setInterval(backgroundOpacity, 20);

function backgroundOpacity() {
  /* take load value and increment by 1 */
  load++;
  /* should stop at 100% - because if loadvalue = greater than 99 - stop it*/
  if (load > 99) {
    /* stops interval - passing in int - which represents setInterval */
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  /* so applying the scale function which is written below - the in_min of 0 on load, in_max on load of 100,
  then out_min of 1 opacity down to out_max of 0 opacity */
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  backgroundOverlay.style.opacity = scale(load, 0, 100, 1, 0);
  /* make the z-index values of the overlay very low after the opacity is decreased */
  loadText.style.zIndex = scale(load, 0, 100, 6, -2);
  backgroundOverlay.style.zIndex = scale(load, 0, 100, 5, -2);
}

/* function from stack overflow - map range of numbers to another range of numbers - map 0 to 100 to
1 to 0 for the opacity */
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//HIDDEN SEARCH WIDGET
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__btn');

searchButton.addEventListener('click', () => {
  searchInput.classList.toggle('active');
  searchInput.focus();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PLAYERS CARDS
const panels = document.querySelectorAll('.panel');
/* querySelector all putting all panels into a node list */

panels.forEach((panel) => {
  /* want an event listener on each panel so if we click on it something happens */
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VIDEO JAVASCRIPT

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// COUNTER FOR YOUTH DEVELOPMENT
