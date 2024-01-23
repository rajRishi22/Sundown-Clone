const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var a=document.querySelector("#elem1");
var b=a.getAttribute("data-image");
console.log(b);




function page4Animation(){
    var elemC=document.querySelector("#elem-container");
    var fix=document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter",function(){
        fix.style.display="block";
    })
    elemC.addEventListener("mouseleave",function(){
        fix.style.display="none";
    })
    
    var elems =document.querySelectorAll(".elem");
    
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image= e.getAttribute("data-image");
            fix.style.backgroundImage=`url(${image})`;
        })
    });
}

function SwiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          draggable:true,
        },
      });
}
SwiperAnimation();
page4Animation();


var menu=document.querySelector("nav h3");
var full=document.querySelector("#full-scr");
var navimg=document.querySelector("nav img");
var flag=0;
menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top="20%";
        navimg.style.opacity=1;
        flag=1;
    }else{
        full.style.top="-100%";
        navimg.style.opacity=1;
        flag=0;
    }
   
})