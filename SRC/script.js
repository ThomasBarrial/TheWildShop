const togglebutton = document.getElementById("toggle-button");
const sidebar = document.getElementById("side-bar");
const menu = document.getElementById("menu");


togglebutton.addEventListener("click", show);

function show() {        
    sidebar.classList.toggle("active");
    if(menu.style.display != "none" ){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    };
}



