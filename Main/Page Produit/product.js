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
  


  function incrementValue()
{
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('quantity').value = value;
    }
}


function decrementValue()
{
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('quantity').value = value;
    }

}

