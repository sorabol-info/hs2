var stickymenu;



window.addEventListener("scroll", function()
{
    mobileNav = document.getElementsByClassName("menu-side")[0];
    mainContainer = document.getElementsByClassName("main-container")[0];
})
 

window.addEventListener("scroll", function(e)
{
    stickymenu = document.getElementsByClassName("menu-bar")[0];


    if(window.pageYOffset >= /*stickymenuOffset*/ 300)
    {
        stickymenu.classList.add("sticky");
        stickymenu.classList.add("fadeIn");
        // sideMenu.classList.add("fadeIn");

    }
    else if(window.pageYOffset /*< stickymenuOffset*/ < 300)
    {
        stickymenu.classList.remove("sticky");
        stickymenu.classList.remove("fadeIn");
        // sideMenu.classList.remove("fadeIn");       

    }

});
