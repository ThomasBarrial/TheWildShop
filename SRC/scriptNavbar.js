const togglebutton = document.getElementById("toggle-button");
const sidebar = document.getElementById("burgerNav");
const menu = document.getElementById("menu");


togglebutton.addEventListener("click", function(){
    sidebar.classList.toggle("active");
    show();
});

function show() {        


    if(menu.style.display != "none" ){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    };
}

if(screen.width < 900){
window.onload = show
}

