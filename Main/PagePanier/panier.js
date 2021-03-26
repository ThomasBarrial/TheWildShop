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

  //QuantityBtnOne

function incrementValueOne()
{
    var value = parseInt(document.querySelector('#quantityOne').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.querySelector('#quantityOne').value = value;
    }
}


function decrementValueOne()
{
    var value = parseInt(document.querySelector('#quantityOne').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.querySelector('#quantityOne').value = value;
    }

}

//QuantityBtnTwo

function incrementValueTwo()
{
    var value = parseInt(document.querySelector('#quantityTwo').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.querySelector('#quantityTwo').value = value;
    }
}


function decrementValueTwo()
{
    var value = parseInt(document.querySelector('#quantityTwo').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.querySelector('#quantityTwo').value = value;
    }

}

//QuantityBtnThree

function incrementValueThree()
{
    var value = parseInt(document.querySelector('#quantityThree').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.querySelector('#quantityThree').value = value;
    }
}


function decrementValueThree()
{
    var value = parseInt(document.querySelector('#quantityThree').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.querySelector('#quantityThree').value = value;
    }

}

// Change of price One

function changePriceOne() {
    const quantity = document.querySelector('#quantityOne').value;
    const price = document.querySelector('#priceOne').textContent;
    const newPrice = document.createElement('p');
    const realPrice = document.getElementById('realPriceOne');
    const originPrice = document.getElementById('originPriceOne');


    const quantityPrice = quantity * price;

    newPrice.textContent = Math.round(quantityPrice * 100) / 100;
    newPrice.id = "originPriceOne";

    realPrice.replaceChild(newPrice, originPrice)
}

// Change of price Two

function changePriceTwo() {
    const quantity = document.querySelector('#quantityTwo').value;
    const price = document.querySelector('#priceTwo').textContent;
    const newPrice = document.createElement('p');
    const realPrice = document.getElementById('realPriceTwo');
    const originPrice = document.getElementById('originPriceTwo');


    const quantityPrice = quantity * price;

    newPrice.textContent = Math.round(quantityPrice * 100) / 100;
    newPrice.id = "originPriceTwo";

    realPrice.replaceChild(newPrice, originPrice)
}

// Change of price Three

function changePriceThree() {
    const quantity = document.querySelector('#quantityThree').value;
    const price = document.querySelector('#priceThree').textContent;
    const newPrice = document.createElement('p');
    const realPrice = document.getElementById('realPriceThree');
    const originPrice = document.getElementById('originPriceThree');


    const quantityPrice = quantity * price;

    newPrice.textContent = Math.round(quantityPrice * 100) / 100;
    newPrice.id = "originPriceThree";

    realPrice.replaceChild(newPrice, originPrice)
}

// Change Total Price

function totalPrice() {
    //Constante
    const originPriceOne = parseInt(document.getElementById('originPriceOne').textContent, 10);
    const originPriceTwo = parseInt(document.getElementById('originPriceTwo').textContent, 10);
    const originPriceThree = parseInt(document.getElementById('originPriceThree').textContent, 10);

    const priceHt = document.getElementById('priceHt');
    const newPriceHt = document.createElement('p')
    const totalHt = document.getElementById('priceTT');

    const priceTax = document.getElementById('priceTax');
    const newPriceTax = document.createElement('p');
    const association = document.getElementById('priceTT2');

    const totalPrice = document.getElementById('totalPrice');
    const newTotalPrice = document.createElement('p');
    const totaux = document.getElementById('priceTT3');

    //Calcul
    const priceOutTax = Math.round((originPriceOne + originPriceTwo + originPriceThree) * 100) / 100;
    const priceWithTax = priceOutTax * (3/100);
    const total = priceOutTax + priceWithTax; 

    //Création nouveaux prix
    newPriceHt.textContent = Math.round(priceOutTax * 100) / 100;
    newPriceHt.id = "priceHt";

    newPriceTax.textContent = Math.round(priceWithTax * 100) / 100;
    newPriceTax.id = "priceTax";

    newTotalPrice.textContent = Math.round(total * 100) / 100;
    newTotalPrice.id = "totalPrice";

    //Remplacement des valeurs
    totalHt.replaceChild(newPriceHt, priceHt);
    association.replaceChild(newPriceTax, priceTax);
    totaux.replaceChild(newTotalPrice, totalPrice);
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

 