const titulo = document.querySelector("#titulo");
const montaña = document.querySelector("#montañas");
const perrito = document.querySelector("#perrito");
const hojas = document.querySelector("#hojas");

window.addEventListener("scroll", (event)=>{
    let scrolly = window.scrollY;
    
    titulo.style.right = scrolly * 2 + "px";
    montaña.style.bottom = scrolly * -1 +"px";
    perrito.style.bottom = scrolly * 1 + "px";
    hojas.style.top = scrolly *1 + "px"; 
})