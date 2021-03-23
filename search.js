function openPage(){
    const search = document.getElementById("inputSearch").value;
    if( search === "cap"  || search === "Cap"  || search === "CAp" || search === "CAP"){
        window.open("#.html","_self");
    }
    else if(search === "mug" || search === "Mug" || search === "MUg" || search === "MUG" || search === "cup" || search === "Cup" || search === "CUp" || search === "CUP"){
        window.open("#.html","_self");
    }
    else if(search === "t-shirt" || search === "T-shirt" || search === "T-Shirt" || search === "tshirt" || search === "Tshirt"){
        window.open("#.html","_self");
    }
    else if(search === "stylo" || search === "Stylo" || search === "pen" || search === "Pen" || search === "PEn" || search === "PEN"){
        window.open("#.html","_self");
    }
    else if(search === "plant" || search === "Plant"){
        window.open("#.html","_self");
    }
    else if(search === "flask" || search === "Flask" || search === "gourd" || search === "Gourd"){
        window.open("#.html","_self");
    }
    else if(search === "Basile" || search === "The pro player" || search === "The best quality" || search === "The best of the BEST"){
        window.open("#.html","_self");
    }
    else if(search === "Clément" || search === "The beginner"){
        window.open("#.html","_self");
    }
    else if(search === "sticker" || search === "Stickers" || search === "Sticker" || search === "stickers"){
        window.open("#.html","_self");
    }
    else {
        alert("Page not found, please search something else ;)")
    }
}

openPage()