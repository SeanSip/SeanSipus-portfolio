const hamburgerMenu = document.querySelector('.hamburgerMenu');
const menuItem = document.querySelectorAll('.select');
const navMenu = document.querySelector('.navMenu');
const ul = document.querySelector('ul:not([class])');
const logo = document.querySelector('.logo');



// open nav menu
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  navMenu.classList.toggle("open");
  logo.classList.toggle("open");
  ul.classList.toggle("open");
});


// to close nav when nav menu option is clicked
for (i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    navMenu.classList.toggle("open");
    logo.classList.toggle("open");
    ul.classList.toggle("open");
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

  //Scroll events 
  const fades = document.querySelectorAll(".fadeIn");
  const sliders = document.querySelectorAll(".slideIn")

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -350px 0px"
  };

  const appearOnScroll = new IntersectionObserver 
  (function(
    entries
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.toggle("appear");
        appearOnScroll.unobserve(entry.target);
      } 
    });
  },
  appearOptions);

fades.forEach(fade => {
  appearOnScroll.observe(fade);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});