const hamburgerMenu = document.querySelector(".hamburgerMenu");
const menuItem = document.querySelectorAll(".select");
const navMenu = document.querySelector(".navMenu");
const ul = document.querySelector("ul:not([class])");
const logo = document.querySelector(".logo");

// open nav menu
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  navMenu.classList.toggle("open");
  logo.classList.toggle("open");
  ul.classList.toggle("open");
});

// to close nav when nav menu option is clicked
for (i = 0; i < menuItem.length; i++) {
  // for loop used to determine the length of the menuItems options and adds event listener of on click to each menu item that will listen for a click, and onced clicked will run the toggle classList items inside loop.
  menuItem[i].addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    navMenu.classList.toggle("open");
    logo.classList.toggle("open");
    ul.classList.toggle("open");
  });
}

// simple function for the dropdown menu that when the user selects an option from drop-down menu; the 'downloadFile' function is called with the selected file name as the argument by getting the HTML option's value and passing into the function's argument (fileName)
const downloadFile = (fileName) => {
  if (fileName) {
    window.open("./assets/" + fileName, "_blank");
    // to open in a new browser window
    document.getElementById("templateSelection").value = "";
    // resets the value of the drop-down menu back to the original option when user makes a selection
  }
};

//Typing animation using a JS plugin
const typed = new Typed(".typingAnimation", {
  strings: ["Front-end", "", "Web Developer", "", "Freelancer", "", ""],
  typeSpeed: 25,
  backSpeed: 55,
  loop: true,
});

const typedTwo = new Typed(".typingAnimationTwo", {
  strings: ["Sean", "ショーン"],
  typeSpeed: 120,
  backSpeed: 100,
  loop: true,
});

//Scroll events
const fades = document.querySelectorAll(".fadeIn");
const sliders = document.querySelectorAll(".slideIn");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -350px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.toggle("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

fades.forEach((fade) => {
  appearOnScroll.observe(fade);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
