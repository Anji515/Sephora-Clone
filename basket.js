import {nav} from '../component/nav.js';
let cartbox=document.querySelector(".box1-2-2");

let cart=JSON.parse(localStorage.getItem("cartList"))||[];
console.log(cart)
cartlist(cart)


let navbar=document.getElementById('newNav');
navbar.innerHTML=nav();

let cardProgram=document.querySelector("#saveBtn>button");
console.log(cardProgram)
cardProgram.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href="off.html";
})
let checkout=document.querySelector("#checkoutBtn");
checkout.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href="payment.html";
})
let newArrivals=document.getElementById("newArrivals");
newArrivals.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href="index.html";
})

function cartlist(arr){
    document.getElementById("totalitem").innerText=arr.length;
    let sum=0;
    if(arr.length==0){
        cartbox.innerHTML=`<p>Your basket is currently empty.</p>
        <button id="newArrivals">Shop New Arrivals</button>`
    }else{
        let cartItem=arr.map((item)=>{
            sum+=+item.price;
            return `<div class="item">
            <div class="image"><img src=${item.mainImage}>
            <select id=select>
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option></select></div>
            <div class="detail"><h3>${item.brandName}</h3>
            <p>${item.title}</p></div>
            <div class="price"><p>$${item.price}</p>
            <button class=removebtn data-id=${item.id}>Remove</button></div>
            </div>`
        })
        cartbox.innerHTML=cartItem.join("");
    }
    document.getElementById("estimatedTotal").innerText=`$${sum.toFixed(2)}`
    document.getElementById("totalprice").innerText=`$${sum.toFixed(2)}`
    let removebtn=document.querySelectorAll(".removebtn");
removebtn.forEach((item)=>{
    item.addEventListener("click",function(){
        console.dir(this)
        let id=this.dataset.id
        for(let i=0;i<cart.length;i++){
            if(cart[i].id==id){
                cart.splice(i,1);
                cartlist(cart);
                localStorage.setItem("cartList",JSON.stringify(cart));
                break;
            }
        }
    })
})
}