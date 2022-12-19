import { showmessage } from "./popupMessage.js";
let addressEdit=document.querySelector("#editAddress");
let addInputs=document.querySelectorAll(".address input");
console.log(addInputs)
totallpay();
let see=document.querySelector("#see");
function totallpay(){
    let summ= localStorage.getItem("totalSum")||0;
    let totall=document.querySelectorAll(".totall");
    totall.forEach(function(item){
    item.innerHTML=`$${Number(summ).toFixed(2)}`
})
}

see.addEventListener("click",(event)=>{
    window.location.href="off.html";
})
addressEdit.addEventListener("click",(event)=>{
    if(addressEdit.innerText=="Edit"){
        addressEdit.innerText="Save";
        addInputs.forEach((item)=>{
            item.removeAttribute("readonly")
            item.setAttribute("style.border-color=black")
        })
    }else{
        addressEdit.innerText="Edit";
        addInputs.forEach((item)=>{
            item.setAttribute("readonly","true")
        })
    }
})

document.getElementById("place").addEventListener("click",function(){
    let cart=JSON.parse(localStorage.getItem("cartList"))||[];
    if(cart.length==0){
        showmessage("Cart is Empty","red","fa-xmark")
    }else{
        showmessage("Order Placed","green","fa-check")
        cart=[]
        localStorage.setItem("cartList",JSON.stringify(cart));
        localStorage.removeItem("totalSum");
        totallpay();
    }
    
})



























// let cardDetails=document.getElementById("cardDetails")
// let debitcard=document.querySelector("debitcard")
// cardDetails.addEventListener("click",(event)=>{
//     debitcard.innerHTML=`<div>
//     <div>
//     <input type=text placeholder=  Card Number limit=12></input>
//     </div>
//     <div>
//     <input type=number placeholder=  MM></input>
//     <input type=number placeholder=  YY></input>
//     <input type=number placeholder=  CVV></input>
//     </div>
//     <div>
//     <input type=text placeholder=  Name on the card></input>
//     <input></input>
//     </div>
//     </div>`
// })