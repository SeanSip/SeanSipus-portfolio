const hamburgerMenu = document.querySelector('.hamburgerMenu');
const menuItem = document.querySelectorAll('.select');
const navMenu = document.querySelector('.navMenu');
const logo = document.querySelector('.logo')
const closeText = document.querySelector('.closeTxt')


// open nav menu
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  navMenu.classList.toggle("open");
  logo.classList.toggle("open");
  closeText.classList.toggle("open")
});


// to close nav when nav menu option is clicked
for (i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    navMenu.classList.toggle("open");
    logo.classList.toggle("open");
    closeText.classList.toggle("open")
  })
}


//Typing animation 
const typed = new Typed(".typingAnimation", {
strings: ["Front-end","","Web Developer", "", "", ""],
typeSpeed: 40,
backSpeed: 45,
loop: true
});

const typedTwo = new Typed(".typingAnimationTwo", {
  strings: ["Sean", "ショーン"],
  typeSpeed: 120,
  backSpeed: 100,
  loop: true
  });