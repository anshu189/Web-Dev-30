var hambtn=document.querySelector(".ham-menu")
var header=document.querySelector(".header")

hambtn.addEventListener("click", function(){
    header.classList.toggle("active")
})