const hamburgerToggle = document.querySelector(".showmenu");
const mobileNav = document.querySelector(".Sidemenu");
const closeMenu = document.querySelector(".closeMenu"); 

hamburgerToggle.addEventListener("click", function () {
    mobileNav.style.display = "block";
});


closeMenu.addEventListener("click" , function(){
    mobileNav.style.display = "none"; 
})