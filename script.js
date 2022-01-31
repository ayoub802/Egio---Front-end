const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

var content1=document.getElementById('content1');
var content2=document.getElementById('content2');
var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');

function opencom(){
    content1.style.transform="translateX(0%)";
    content2.style.transform="translateX(100%)";
    content1.style.transitionDelay = "0.3s"
    content2.style.transitionDelay = "0"
    btn1.style.borderBottom=".2rem solid #3ab39b";
    btn2.style.borderBottom="none";
}
function opendet(){
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(0%)";
    content2.style.transitionDelay = "0.3s";
    content1.style.transitionDelay = "0";
    btn2.style.borderBottom=".2rem solid #3ab39b";
    btn1.style.borderBottom="none";
}

let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
var swiper = new Swiper(".product-imgs .img-select", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});
