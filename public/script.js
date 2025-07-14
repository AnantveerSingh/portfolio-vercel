const ham = document.getElementById('ham');
const hamMenu = document.getElementById('hamMenu');
ham.addEventListener('click',()=>{
    if (hamMenu.style.display === "block") {
        hamMenu.style.display = "none";
    } else {
        hamMenu.style.display = "block";
    }
})
if (window.innerWidth <= 600) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        hamMenu.style.display = "none"
    }
    prevScrollpos = currentScrollPos;
    }
}

window.addEventListener("resize", function(){
    if (hamMenu.style.display = "none"){
        hamMenu.style.display = "flex";
    }
    if(window.innerWidth < 600){
        hamMenu.style.display = "none"
    }
});