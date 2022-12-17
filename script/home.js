import {nav} from '../component/nav.js'
let navbar=document.getElementById('navbar_reusable');
navbar.innerHTML=nav();

import {fot} from '../component/fot.js'
let foot=document.getElementById('footer');
foot.innerHTML=fot();

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
}
prev.addEventListener('click',()=>{
    slider.scrollLeft -=1000;
})
next.addEventListener('click',()=>{
    slider.scrollLeft +=1000;
})


const choose = document.querySelector('.choose');
const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');
let ChooseArr = [
    {
        img:"https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Soft Liquid Blush",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2419786-main-zoom.jpg?imwidth=166",
        tag:"Charlotte Tilbury",
        content:"Hollywood Flawless Filter",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s1966258-main-zoom.jpg?pb=2020-03-allure-readers-choice-2019&imwidth=166",
        tag:"Laneige",
        content:"Lip Sleeping Masks(Vit-C)",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2419786-main-zoom.jpg?imwidth=166",
        tag:"Anastasis Beverly Hills",
        content:"Luminous Foundation",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2629475-main-zoom.jpg?imwidth=166",
        tag:"Rare Beauty by Selena Gomez",
        content:"Positive Light silky hoghlighter",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2500874-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        tag:"TULA Skincare",
        content:"Brightening Treatment Drops Triple Vit-C",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2282788-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        tag:"SEPHORA COLLECTION",
        content:"Clean Lip Balm & Scrub",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2036408-main-zoom.jpg?imwidth=166",
        tag:"Anastasia Beverly Hills",
        content:" Liqiud Lipstick",
    }
]
render_choose_products(ChooseArr);
function render_choose_products(arr){
    arr.forEach(el => {
        // console.log(el);
        let main_div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.img;
        let p1 = document.createElement('p');
        p1.innerHTML = el.tag;
        p1.style.fontWeight="600";
        let p2 = document.createElement('p');
        p2.innerHTML = el.content;

        main_div.append(img,p1,p2);

        choose.append(main_div)
    });

}
prev2.addEventListener('click',()=>{
    choose.scrollLeft -=1000;
})
next2.addEventListener('click',()=>{
    choose.scrollLeft +=1000;
})
const just = document.querySelector('.just');
const prev3 = document.querySelector('.prev3');
const next3 = document.querySelector('.next3');
let justArr = [
    {
        img:"https://www.sephora.com/productimages/sku/s2623171-main-zoom.jpg?imwidth=166",
        tag:"Dior",
        content:"Capture Totale Anit-aging",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2612919-main-zoom.jpg?imwidth=166",
        tag:"Artist Couture",
        content:"Nudes Matte Masterpiece",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2579985-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=166",
        tag:"SEPHORA COLLECTION",
        content:"Wishing you Skincare kit",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2633287-main-zoom.jpg?imwidth=166",
        tag:"beautyblender",
        content:"Besties Glitter",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2481596-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        tag:"Drunk Elephant",
        content:"Day Dream Vit C+ Serum",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2595452-main-zoom.jpg?imwidth=166",
        tag:"Shiseido",
        content:"Ultimune Strong Duo",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2623643-main-zoom.jpg?imwidth=166",
        tag:"Estee Lauder",
        content:"Repair+Renew Skincare Wonders",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2615813-main-zoom.jpg?imwidth=166",
        tag:"BeautyBio",
        content:"Head-To-Toe After GLO Set",
    }
]
render_choose_justDropped(justArr);
function render_choose_justDropped(arr){
    arr.forEach(el => {
        // console.log(el);
        let main_div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.img;
        let p1 = document.createElement('p');
        p1.innerHTML = el.tag;
        p1.style.fontWeight="600";
        let p2 = document.createElement('p');
        p2.innerHTML = el.content;

        main_div.append(img,p1,p2);

        just.append(main_div)
    });

}

prev3.addEventListener('click',()=>{
    just.scrollLeft -=1000;
})
next3.addEventListener('click',()=>{
    just.scrollLeft +=1000;
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
        // console.log(el);
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
    beauty.scrollLeft -=1000;
})
next4.addEventListener('click',()=>{
    beauty.scrollLeft +=1000;
})

const present = document.querySelector('.present');
const prev5 = document.querySelector('.prev5');
const next5 = document.querySelector('.next5');
prev5.addEventListener('click',()=>{
    present.scrollLeft -=1000;
})
next5.addEventListener('click',()=>{
    present.scrollLeft +=1000;
})

const present2 = document.querySelector('.present2');
const prev6 = document.querySelector('.prev6');
const next6 = document.querySelector('.next6');
prev6.addEventListener('click',()=>{
    present2.scrollLeft -=1000;
})
next6.addEventListener('click',()=>{
    present2.scrollLeft +=1000;
})

const sell = document.querySelector('.sell');
const prev7 = document.querySelector('.prev7');
const next7 = document.querySelector('.next7');
let sellArr = [
    {
        img:"https://www.sephora.com/productimages/sku/s2606085-main-zoom.jpg?imwidth=166",
        tag:"Charloote Tilbury",
        content:"Airbruch Flawless Powder",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=166",
        tag:"Nars",
        content:"Skincare Foundation",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2518934-main-zoom.jpg?imwidth=166",
        tag:"SEPHORA COLLECTION",
        content:"Rare beauty by Selena Gomez",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2368447-main-zoom.jpg?imwidth=166",
        tag:"Charlotte Tilbury",
        content:"Flawless Setting Spray",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2118867-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        tag:"Olaplex",
        content:"No .4 Shampoo",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2595452-main-zoom.jpg?imwidth=166",
        tag:"Shiseido",
        content:"Ultimune Strong Duo",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2623643-main-zoom.jpg?imwidth=166",
        tag:"Estee Lauder",
        content:"Repair+Renew Skincare Wonders",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2615813-main-zoom.jpg?imwidth=166",
        tag:"BeautyBio",
        content:"Head-To-Toe After GLO Set",
    }
]
sellingArr(sellArr);
function sellingArr(data){
data.forEach(el=>{
    let div = document.createElement('div')
    let img=document.createElement('img');
    img.src=el.img;
    let p =document.createElement('p');
    p.innerHTML=el.tag;
    p.style.fontWeight="600";
    let p2 =document.createElement('p');
    p2.innerHTML=el.content;
    div.append(img,p,p2);
    sell.append(div)
})
}
prev7.addEventListener('click',()=>{
    sell.scrollLeft -=1000;
})
next7.addEventListener('click',()=>{
    sell.scrollLeft +=1000;
})

const inside = document.querySelector('.inside');
const prev8 = document.querySelector('.prev8');
const next8 = document.querySelector('.next8');

let insideArr = [
    {
        img:"https://www.sephora.com/productimages/sku/s2623171-main-zoom.jpg?imwidth=166",
        tag:"Dior",
        content:"Capture Totale Anit-aging",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2481596-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        tag:"Drunk Elephant",
        content:"Day Dream Vit C+ Serum",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2595452-main-zoom.jpg?imwidth=166",
        tag:"Shiseido",
        content:"Ultimune Strong Duo",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2623643-main-zoom.jpg?imwidth=166",
        tag:"Estee Lauder",
        content:"Repair Skincare Wonders",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2615813-main-zoom.jpg?imwidth=166",
        tag:"BeautyBio",
        content:"Head-To-Toe After GLO Set",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2606085-main-zoom.jpg?imwidth=166",
        tag:"Charloote Tilbury",
        content:"Airbruch Flawless Powder",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=166",
        tag:"Nars",
        content:"Skincare Foundation",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2518934-main-zoom.jpg?imwidth=166",
        tag:"SEPHORA COLLECTION",
        content:"RareBeauty by SelenaGomez",
    },
        {
            img:"https://www.sephora.com/productimages/sku/s2612919-main-zoom.jpg?imwidth=166",
            tag:"Artist Couture",
            content:"Nudes Matte Masterpiece",
        },
        {
            img:"https://www.sephora.com/productimages/sku/s2579985-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=166",
            tag:"SEPHORA COLLECTION",
            content:"Wishing you Skincare kit",
        },
        {
            img:"https://www.sephora.com/productimages/sku/s2633287-main-zoom.jpg?imwidth=166",
            tag:"beautyblender",
            content:"Besties Glitter",
        },
    {
        img:"https://www.sephora.com/productimages/sku/s2368447-main-zoom.jpg?imwidth=166",
        tag:"Charlotte Tilbury",
        content:"Flawless Setting Spray",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2118867-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        tag:"Olaplex",
        content:"No .4 Shampoo",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2595452-main-zoom.jpg?imwidth=166",
        tag:"Shiseido",
        content:"Ultimune Strong Duo",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2623643-main-zoom.jpg?imwidth=166",
        tag:"Estee Lauder",
        content:"Repair Skincare Wonders",
    },
    {
        img:"https://www.sephora.com/productimages/sku/s2615813-main-zoom.jpg?imwidth=166",
        tag:"BeautyBio",
        content:"Head-To-Toe Glow",
    }
]

InsiderArr(insideArr);
function InsiderArr(data){
data.forEach(el=>{
//    console.log(el)
let div = document.createElement('div')
let img = document.createElement('img');
img.src=el.img;
let p =document.createElement('p');
p.innerHTML=el.tag;
p.style.fontWeight="600";
let p2 =document.createElement('p');
p2.innerHTML=el.content;
let p3 =document.createElement('p');
p3.innerHTML="100 Points";
p3.style.fontWeight="600";
let a = document.createElement('a');
a.href="signupLogin.html"
a.innerHTML= "Sign In To Access";
a.className="access1"
div.append(img,p,p2,p3,a);
inside.append(div)
})
}
prev8.addEventListener('click',()=>{
    inside.scrollLeft -=1000;
})
next8.addEventListener('click',()=>{
    inside.scrollLeft +=1000;
})

