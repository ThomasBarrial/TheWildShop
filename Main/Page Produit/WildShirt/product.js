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

const couleur1 = document.querySelector('.whiteColorButton');
const couleur2 = document.querySelector('.blackColorButton');
const couleur3 = document.querySelector('.coralColorButton');


couleur2.addEventListener('click', () => {
    document.querySelector('.productImg').src = "Images/Produit/TasseNoir.webp";  
});

couleur1.addEventListener('click', () => {
    document.querySelector('.productImg').src = "Images/Produit/TasseBlanche.webp";  
});

couleur3.addEventListener('click', () => {
    document.querySelector('.productImg').src = "Images/Produit/TasseRose.webp";  
});

function openPage(event){
    const search = document.getElementById("inputSearch").value;
    if( search === "cap" || search === "Cap" || search === "CAp" || search === "CAP"){
        window.open("../WildCap/product.html","_self");
    }
    else if(search === "mug" || search === "Mug" || search === "MUg" || search === "MUG" || search === "cup" || search === "Cup" || search === "CUp" || search === "CUP"){
        window.open("../WildMug/product.html","_self");
    }
    else if(search === "t-shirt" || search === "T-shirt" || search === "T-Shirt" || search === "tshirt" || search === "Tshirt"){
        window.open("../WildShirt/product.html","_self");
    }
    else if(search === "stylo" || search === "Stylo" || search === "pen" || search === "Pen" || search === "PEn" || search === "PEN"){
        window.open("../Stylo/product.html","_self");
    }
    else if(search === "plant" || search === "Plant" || search === "bonsai" || search === "Bonsai" || search === "WildBonsai" || search === "wildbonsai" || search === "Wildbonsai" || search === "wildBonsai" || search === "Wild Bonsai" || search === "wild Bonsai" || search === "wild bonsai" || search === "Wild bonsai"){
        window.open("../BANZAI/product.html","_self");
    }
    else if(search === "flask" || search === "Flask" || search === "gourd" || search === "Gourd"){
        window.open("../Gourde/product.html","_self");
    }
    else if(search === "Basile" || search === "The pro player" || search === "The best quality" || search === "The best of the BEST"){
        window.open("../Bazile/product.html","_self");
    }
    else if(search === "Clément" || search === "The beginner"){
        window.open("../Clément/product.html","_self");
    }
    else if(search === "sticker" || search === "Stickers" || search === "Sticker" || search === "stickers"){
        window.open("../Stickers/product.html","_self");
    } 
    else if(search === "signin" || search === "SignIn" || search === "signIn" || search === "Signin" || search === "Sign In" || search === "sign in" || search === "sign In" || search === "Sign in"){
        window.open("../SignInPage/singIn.html","_self");
    }
    else if(search === "Login" || search === "LogIn" || search === "logIn" || search === "login"){
        window.open("../LogIn/login.html","_self");
    }
     else if( search === ""){

    }
    else if( search != "cap" ||
             search != "Cap" ||
             search != "CAp" || 
             search != "CAP" || 
             search != "mug" || 
             search != "Mug" || 
             search != "MUg" || 
             search != "MUG" || 
             search != "cup" || 
             search != "Cup" || 
             search != "CUp" || 
             search != "CUP" || 
             search != "t-shirt" || 
             search != "T-shirt" || 
             search != "T-Shirt" || 
             search != "tshirt" || 
             search != "Tshirt" || 
             search != "stylo" || 
             search != "Stylo" || 
             search != "pen" || 
             search != "Pen" || 
             search != "PEn" || 
             search != "PEN" || 
             search != "plant" || 
             search != "Plant" || 
             search != "bonsai" || 
             search != "Bonsai" || 
             search != "WildBonsai" || 
             search != "wildbonsai" || 
             search != "Wildbonsai" || 
             search != "wildBonsai" || 
             search != "Wild Bonsai" || 
             search != "wild Bonsai" || 
             search != "wild bonsai" || 
             search != "Wild bonsai" || 
             search != "flask" || 
             search != "Flask" || 
             search != "gourd" || 
             search != "Gourd" || 
             search != "Basile" || 
             search != "The pro player" || 
             search != "The best quality" || 
             search != "The best of the BEST" || 
             search != "Clément" || 
             search != "The beginner" || 
             search != "sticker" || 
             search != "Stickers" || 
             search != "Sticker" || 
             search != "stickers"){
        alert("Page not found, please search something else ;)")
    }
    event.preventDefault();
}

document.getElementById('inputSearch').onkeydown = function(e){
    if(e.keyCode == 13){
      openPage(event);
      event.preventDefault()
    }
 };