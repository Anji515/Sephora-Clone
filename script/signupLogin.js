import { showmessage } from "./popupMessage.js";
console.log(1)
let sform=document.querySelector(".signup-wrapper form");
console.log(sform)
sform.addEventListener("submit",(e)=>{
    e.preventDefault()
    showmessage()
})