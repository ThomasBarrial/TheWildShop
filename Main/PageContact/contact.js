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


  function reload () {
      document.location.reload();
  }


  function openPage(event){
    const search = document.getElementById("inputSearch").value;
    if( search === "cap" || search === "Cap" || search === "CAp" || search === "CAP"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/Page Produit/WildCap/product.html","_self");
    }
    else if(search === "mug" || search === "Mug" || search === "MUg" || search === "MUG" || search === "cup" || search === "Cup" || search === "CUp" || search === "CUP"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/Page Produit/WildMug/product.html","_self");
    }
    else if(search === "t-shirt" || search === "T-shirt" || search === "T-Shirt" || search === "tshirt" || search === "Tshirt"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/Page Produit/WildShirt/product.html","_self");
    }
    else if(search === "stylo" || search === "Stylo" || search === "pen" || search === "Pen" || search === "PEn" || search === "PEN"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/Page Produit/Stylo/product.html","_self");
    }
    else if(search === "plant" || search === "Plant" || search === "bonsai" || search === "Bonsai" || search === "WildBonsai" || search === "wildbonsai" || search === "Wildbonsai" || search === "wildBonsai" || search === "Wild Bonsai" || search === "wild Bonsai" || search === "wild bonsai" || search === "Wild bonsai"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/Page Produit/BANZAI/product.html","_self");
    }
    else if(search === "flask" || search === "Flask" || search === "gourd" || search === "Gourd"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/Page Produit/Gourde/product.html","_self");
    }
    else if(search === "Basile" || search === "The pro player" || search === "The best quality" || search === "The best of the BEST"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/Page Produit/Bazile/product.html","_self");
    }
    else if(search === "Clément" || search === "The beginner"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/Page Produit/Clément/product.html","_self");
    }
    else if(search === "sticker" || search === "Stickers" || search === "Sticker" || search === "stickers"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/Page Produit/Stickers/product.html","_self");
    } 
    else if(search === "signin" || search === "SignIn" || search === "signIn" || search === "Signin" || search === "Sign In" || search === "sign in" || search === "sign In" || search === "Sign in"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/SignInPage/singIn.html","_self");
    }
    else if(search === "Login" || search === "LogIn" || search === "logIn" || search === "login"){
        window.open("/Users/thomas/Desktop/TheWildShop/Main/LogIn/login.html","_self");
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