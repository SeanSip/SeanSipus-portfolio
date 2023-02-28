'use strict';

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const menuItem = document.querySelectorAll('.select');
const navMenu = document.querySelector('.navMenu');
const ul = document.querySelector('ul:not([class])');
const logo = document.querySelector('.logo');

// Assigning toggle variable for menu items
const toggleNavMenu = function () {
  hamburgerMenu.classList.toggle('open');
  navMenu.classList.toggle('open');
  logo.classList.toggle('open');
  ul.classList.toggle('open');
};

// open nav menu using toggle variable's function
hamburgerMenu.addEventListener('click', toggleNavMenu);

// to close nav when nav menu option is clicked, using for loop to increment over each menu item element and adding the event listener to each element
for (let i = 0; i < menuItem.length; i++) {
  // close nav menu using toggle variable's function
  menuItem[i].addEventListener('click', toggleNavMenu);
}

// simple function for the dropdown menu that when the user selects an option from drop-down menu; the 'openFile' function is called with the selected file name as the argument by getting the HTML option's value and passing into the function's argument (fileName)
const openFile = function (fileName) {
  if (fileName) {
    window.open('./assets/' + fileName, '_blank'); // to open in a new browser window
    document.getElementById('templateSelection').value = ''; // resets the value of the drop-down menu back to the original option when user makes a selection by setting value to an empty string
  }
};

// Storing my typing animations into a variable function with parameters containing a class selector argument, and a list of object properties argument for a JS Typing Animation Plugin
const typingAnimations = function (selector, strings, typeSpeed, backSpeed) {
  return new Typed(selector, {
    strings,
    typeSpeed,
    backSpeed,
    loop: true,
  });
};

// passing in the arguments to the typing animation function's parameters
const typingAnimationOne = typingAnimations(
  '.typingAnimation',
  ['Front-end', '', 'Web Developer', '', '', ''],
  25,
  55
);
const typingAnimationTwo = typingAnimations(
  '.typingAnimationTwo',
  ['Sean', 'ショーン'],
  120,
  100
);

//Creating scroll events using the Intersection Observer Javascript API for the projects section to create an animation for the project text and project images

const fades = document.querySelectorAll('.fadeIn'); // For text fading in
const sliders = document.querySelectorAll('.slideIn'); // For images sliding from side into position

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -350px 0px',
};

const appearOnScroll = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.toggle('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

fades.forEach(fade => {
  appearOnScroll.observe(fade);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
