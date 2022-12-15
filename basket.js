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
