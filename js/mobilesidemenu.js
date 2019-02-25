let mobileNav;
let mainContainer;
let openMenuBtn;


window.addEventListener("load", function(){
    mobileNav = document.getElementsByClassName("menu-side")[0];
    mainContainer = document.getElementsByClassName("main-container")[0];
    openMenuBtn = document.getElementsByClassName("menu-side-open-icon")[0];
})
function isMobile() { // 모바일 환경 체크
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

window.addEventListener("scroll", function(){ // 모바일 환경, 가로 767미만일 경우 실행
    if(isMobile() || window.innerWidth < 767)
    {
        if(window.pageYOffset >= 300)
        {
            openMenuBtn.style.color = "#a2a2a2";
        }
        else if(window.pageYOffset < 300)
        {
            openMenuBtn.style.color = "white";
        }
    }
})

// window.addEventListener("keydown", function(e)
// {
//     this.console.log(e);
// })

function openNav()
{

    console.log(mainContainer);
    mobileNav.style.width = "100%";
}

function closeNav()
{
    mobileNav.style.width = "0";
}