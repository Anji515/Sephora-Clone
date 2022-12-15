// import nav from './component/nav.js';
// let navbar=document.getElementById('navbar');
// navbar.innerHTML=nav();
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


const choose = document.querySelector('.choose');
const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');
let ChooseArr = [
    {
        img:"https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2419786-main-zoom.jpg?imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2404721-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s1802412-main-zoom.jpg?imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2031391-main-zoom.jpg?imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2404721-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2362168-main-zoom.jpg?imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    }
]
render_choose_products(ChooseArr);
function render_choose_products(arr){
    arr.forEach(el => {
        console.log(el);
        let main_div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.img;
        let p1 = document.createElement('p');
        p1.innerHTML = el.tag;
        let p2 = document.createElement('p');
        p2.innerHTML = el.content;

        main_div.append(img,p1,p2);

        choose.append(main_div)
    });

}
prev2.addEventListener('click',()=>{
    choose.scrollLeft -=350;
})
next2.addEventListener('click',()=>{
    choose.scrollLeft +=350;
})
const just = document.querySelector('.just');
const prev3 = document.querySelector('.prev3');
const next3 = document.querySelector('.next3');
let justArr = [
    {
        img:"https://www.sephora.com/productimages/sku/s2600187-main-zoom.jpg?imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2619849-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2621456-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2563831-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2614733-main-zoom.jpg?imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2614923-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2620532-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Pinch Liquid Blush",
    }
]
render_choose_justDropped(justArr);
function render_choose_justDropped(arr){
    arr.forEach(el => {
        console.log(el);
        let main_div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.img;
        let p1 = document.createElement('p');
        p1.innerHTML = el.tag;
        let p2 = document.createElement('p');
        p2.innerHTML = el.content;

        main_div.append(img,p1,p2);

        just.append(main_div)
    });

}

prev3.addEventListener('click',()=>{
    just.scrollLeft -=350;
})
next3.addEventListener('click',()=>{
    just.scrollLeft +=350;
})

const beauty = document.querySelector('.beauty');
const prev4 = document.querySelector('.prev4');
const next4 = document.querySelector('.next4');
let beautyArr= [
   {
    img:"./images/beauty1.png",
    b1:"APPLY"
   },
   {
    img:"./images/beauty2-0.png",
    b1:"APPLY"
   },
   {
    img:"./images/beauty3.png",
    b1:"APPLY"
   },
   {
    img:"./images/beauty4.png",
    b1:"APPLY"
   },
   {
    img:"./images/beauty5.png",
    b1:"APPLY"
   },
   {
    img:"./images/beauty7.png",
    b1:"APPLY"
   },
   {
    img:"./images/beauty8.png",
    b1:"APPLY"
   },
   {
    img:"./images/beauty9.png",
    b1:"APPLY"
   },
]
render_choose_beautyOffer(beautyArr);
function render_choose_beautyOffer(arr){
    arr.forEach(el => {
        console.log(el);
        let main_div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.img;
        let b1 = document.createElement('button');
        b1.innerHTML = el.b1;

        main_div.append(img,b1);

        beauty.append(main_div)
    });

}
prev4.addEventListener('click',()=>{
    beauty.scrollLeft -=350;
})
next4.addEventListener('click',()=>{
    beauty.scrollLeft +=350;
})

const present = document.querySelector('.present');
const prev5 = document.querySelector('.prev5');
const next5 = document.querySelector('.next5');
prev5.addEventListener('click',()=>{
    present.scrollLeft -=350;
})
next5.addEventListener('click',()=>{
    present.scrollLeft +=350;
})

const present2 = document.querySelector('.present2');
const prev6 = document.querySelector('.prev6');
const next6 = document.querySelector('.next6');
prev6.addEventListener('click',()=>{
    present2.scrollLeft -=350;
})
next6.addEventListener('click',()=>{
    present2.scrollLeft +=350;
})