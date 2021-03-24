// MAIN NAV //
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      //toogle nav
      nav.classList.toggle('nav-active');
      
      //animate links
      navLinks.forEach((link, index)=>{
          if(link.style.animation) {
              link.style.animation = ''
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
          }
      });

      //burger animation
      burger.classList.toggle('toggle');
  });
 
}

navSlide();




// STORE NAV //

const togglebutton = document.getElementById("toggle-button");
const sidebar = document.getElementById("side-bar");

togglebutton.addEventListener("click", show);

function show() {
  sidebar.classList.toggle("active");
}

/// REMOVE SIDE BAR IF CLICK ON MAIN CONTENT ///

const content = document.querySelector(".content");

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});