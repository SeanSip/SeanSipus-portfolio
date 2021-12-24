const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navMenu = document.querySelector('.navMenu');

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  
})

// document.querySelector(".hamburgerMenu").onclick = function (event) {
//     const hamburgerMenu = document.querySelector('.hamburgerMenu');
//     const navMenu = document.querySelector('.navMenu');

//     hamburgerMenu.classList.toggle("active");
//     navMenu.classList.toggle("active");


//     e.preventDefault();
// }