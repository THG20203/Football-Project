'use script';

//background blur
const loadText = document.querySelector('.background__loading-text');
const bg = document.querySelector('background__container');

/* initalise load at 0 */
let load = 0;
let int = setInterval(backgroundOpacity, 20);

function backgroundOpacity() {
  load++;
  /* should stop at 100% */
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//progress steps

//players cards
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

// video javascript
