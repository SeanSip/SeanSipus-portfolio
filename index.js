const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navMenu = document.querySelector('.navMenu');
const logo = document.querySelector('.logo')
const navClose = document.querySelector('.navMenu')


/* opens the modal for website navigation via the section anchor tag links when the hamburger icon is clicked */
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  logo.classList.toggle("active");
})

/* closes the hamburger menu navigation overlay modal when an anchor tag link is clicked */
navClose.addEventListener("click", () => {
  navClose.classList.remove("active");
  // toggles the hamburger menu icon from an X back to hamburger menu when an anchor link is clicked
  hamburgerMenu.classList.toggle("active");
  // this function makes sure to remove the icon from the navigation overlay modal when in mobile view
  logo.classList.toggle("active");
})

//Typing animation 
const typed = new Typed(".typingAnimation", {
strings: ["Front", "End", "Web", "Developer"],
typeSpeed: 120,
backSpeed: 45,
loop: true
});