import { showmessage } from "./popupMessage.js";
let addressEdit=document.querySelector("#editAddress");
let addInputs=document.querySelectorAll(".address input");
console.log(addInputs)

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
    }
})