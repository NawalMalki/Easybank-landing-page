const hamburgerToggle = document.querySelector(".Menu");
const mobileNav = document.querySelector(".Side");
const Hide = document.querySelector(".hide"); 

hamburgerToggle.addEventListener("click", function () {
    mobileNav.style.display = "block";
});


Hide.addEventListener("click" , function(){
    mobileNav.style.display = "none"; 
})