'use strict';

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const menuItem = document.querySelectorAll('.select');
const navMenu = document.querySelector('.navMenu');
const ul = document.querySelector('ul:not([class])');
const logo = document.querySelector('.logo');
const editor = document.querySelector('.editor');
const lines = editor.querySelectorAll('.codeText, p, h3');
const closeBtn = document.querySelector('.close');
const minimizeBtn = document.querySelector('.minimize');
const expandBtn = document.querySelector('.expand');
const codeContainer = document.querySelector('.codeContainer');
const editorReplacement = document.querySelector('.editorReplacement');
const editorLine = document.querySelector('.editorLine');

let lineNumber = 1;
lines.forEach(line => {
  const lineNumberElement = document.createElement('span');

  if (lineNumber >= 10) {
    lineNumberElement.classList.add('lineNumber', 'doubleDigit');
  } else {
    lineNumberElement.classList.add('lineNumber');
  }

  lineNumberElement.textContent = `${lineNumber} `;
  line.before(lineNumberElement);

  lineNumber++;
});

// Assigning toggle variable for menu items
const toggleNavMenu = function () {
  hamburgerMenu.classList.toggle('open');
  navMenu.classList.toggle('open');
  logo.classList.toggle('open');
  ul.classList.toggle('open');
  stopScroll();
};

// Function to prevent user from scrolling through website in background while the navMenu is open
const stopScroll = () =>
  navMenu.classList.contains('open')
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

// open nav menu using toggle variable's function
hamburgerMenu.addEventListener('click', toggleNavMenu);

// to close nav when nav menu option is clicked, using for loop to increment over each menu item element and adding the event listener to each element
for (let i = 0; i < menuItem.length; i++) {
  // close nav menu using toggle variable's function
  menuItem[i].addEventListener('click', toggleNavMenu);
}

// Adding focusable elements inside of the nav menu when open so that keyboard accessible users can't focus on elements outside of the nav menu
const focusableNavElements = navMenu.querySelectorAll(
  '.navMenu a[href], .navMenu button, .hamburgerMenu'
);
const firstFocusableNavElement = focusableNavElements[0];
const lastFocusableNavElement =
  focusableNavElements[focusableNavElements.length - 1];
document.addEventListener('focusin', function (e) {
  if (!navMenu.contains(e.target) && e.target !== hamburgerMenu) {
    firstFocusableNavElement.focus();
  }
});
console.log(focusableNavElements);

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
  [
    'Front-end',
    '',
    'Web Developer',
    '',
    '',
    '',
    'フロント エンド',
    '',
    'ウェブ 開発者',
    '',
    '',
    '',
  ],
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

// Function to toggle between open and close for about me text editor buttons
function toggleEditor() {
  if (codeContainer.style.display === 'none') {
    codeContainer.style.display = 'block';
    editorReplacement.style.display = 'none';
    editorReplacement.style.scale = '0%';
    editorLine.style.display = 'block';
  } else {
    codeContainer.style.display = 'none';
    editorReplacement.style.display = 'flex';
    editorReplacement.style.scale = '100%';
    editorLine.style.display = 'none';
  }
}

// Event listeners for about me buttons
closeBtn.addEventListener('click', toggleEditor);
minimizeBtn.addEventListener('click', toggleEditor);
expandBtn.addEventListener('click', toggleEditor);
