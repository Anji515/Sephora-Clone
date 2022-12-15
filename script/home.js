// CAROUSEL 
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');
let obj ={
    1:"./images/giftUnder25.png",
    2:"./images/latest lineup.png",
    3:"./images/newCleanBeauty.png",
    4:"./images/new.png",
    5:"./images/perfume1.png",
    6:"./images/skincare.png",
}
for(let i=0;i<6;i++){
    let img = document.createElement('img');
    img.src=obj[i];
    slider.append(img)
//     slider.innerHTML=`<img src=${obj[i]}`;
}
prev.addEventListener('click',()=>{
    slider.scrollLeft -=550;
})
next.addEventListener('click',()=>{
    slider.scrollLeft +=550;
})


// import nav from './component/nav.js';
// let navbar=document.getElementById('navbar');
// navbar.innerHTML=nav();