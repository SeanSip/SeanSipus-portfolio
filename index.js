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

  //Scroll events 

  const fades = document.querySelectorAll(".fadeIn");
  const sliders = document.querySelectorAll(".slideIn")

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -550px 0px"
  };

  const appearOnScroll = new IntersectionObserver 
  (function(
    entries
  ) {
    entries.forEach(entry => {
      console.log(entry.target);
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      } else {
        entry.target.classList.remove("appear");
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