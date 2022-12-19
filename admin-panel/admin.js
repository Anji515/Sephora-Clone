import { showmessage } from "../script/popupMessage.js";


let insert = document.querySelector("#insertbtn")
let deletebtn = document.querySelector("#deletebtn")
let dlt = document.querySelector("#dltn")
let modal1 = document.querySelector("#modal1")
let modal2 = document.querySelector("#modal2")
let close = document.querySelector("#close")
let clos = document.querySelector("#clos")
let addproducts = document.querySelector("#addproducts")
let dltproducts = document.querySelector("#dltproducts")
let dashbtn = document.querySelector("#dashbtn")
let contents = document.querySelector(".contents")
let adminproduct = document.querySelector('#admin-product')
let value = document.querySelector(".nav-opt strong")
let logout = document.querySelector("#logout")
let totalPro = document.querySelector("#total-products h3")
let user = document.querySelector("#profit h3")

adminName()


function def(){
    contents.classList.add('view')
}
def()

no_Admin()
async function no_Admin(){
    let res = await fetch("https://63984905fe03352a94cb30eb.mockapi.io/user")
    let data = await res.json()
    let noOfUser = data.length
    console.log(noOfUser)
    user.innerHTML = noOfUser
}



dashbtn.addEventListener('click',()=>{
    modal1.classList.remove('show')
    modal2.classList.remove('show')
    contents.classList.add('view')

})


insert.addEventListener('click',()=>{
    modal1.classList.add("show")
    modal2.classList.remove('show')
    contents.classList.remove('view')
})



 close.addEventListener('click',()=>{
        modal1.classList.remove('show')
        contents.classList.add('view')
 })


deletebtn.addEventListener('click',()=>{
    modal2.classList.add("show")
    modal1.classList.remove('show')
    contents.classList.remove('view')
})

clos.addEventListener('click',()=>{
    modal2.classList.remove('show')
    contents.classList.add('view')
})

addproducts.addEventListener("submit",(event)=>{
    event.preventDefault()
    let obj = {}
    let items = document.querySelectorAll("#addproducts input")
    for(let i=0;i<items.length-1;i++){
        obj[items[i].id] = items[i].value
    }
    postProducts(obj)
    postProducts2(obj)
    console.log(obj)
})

async function postProducts(obj){
   try {
    let res = await fetch('https://63984905fe03352a94cb30eb.mockapi.io/adpro',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
       })
       if(res.ok){
        showmessage("Product Added Sucessfully","green","fa-check")
       }else{
        
        showmessage("Unable to add Product","red","fa-xmark")
       }
   } catch (error) {
    showmessage("Unable to add Product","red","fa-xmark")
   } 
   
}


async function postProducts2(obj){
    try {
     let res = await fetch('https://63984905fe03352a94cb30eb.mockapi.io/products',{
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify(obj)
        })
        if(res.ok){
         showmessage("Product Added Sucessfully","green","fa-check")
        }else{
         
         showmessage("Unable to add Product","red","fa-xmark")
        }
    } catch (error) {
     showmessage("Unable to add Product","red","fa-xmark")
    } 
    
 }








dltproducts.addEventListener('submit',(event)=>{
    event.preventDefault()
    let id =  document.querySelector("#Product-id").value
    console.log(id)
    deleteRequest(id)
    deleteRequest2(id)
})

async function deleteRequest(id){
    try {
        let res = await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/adpro/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(res.ok){
            showmessage("Product removed Sucessfully","green","fa-check")
        }else{
            showmessage("Unable to delete products","red","fa-xmark") 
        }
    } catch (error) {
        showmessage("Unable to delete products","red","fa-xmark")
    }
}


async function deleteRequest2(id){
    try {
        let res = await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/adpro/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(res.ok){
            showmessage("Product removed Sucessfully","green","fa-check")
        }else{
            showmessage("Unable to delete products","red","fa-xmark") 
        }
    } catch (error) {
        showmessage("Unable to delete products","red","fa-xmark")
    }
}


async function fetchAdminProducts(){
 let res = await fetch ('https://63984905fe03352a94cb30eb.mockapi.io/adpro')
 let data = await res.json()

 console.log(data)
 renderData(data)
alv(data.length)
}

fetchAdminProducts()


function renderData(data){
    adminproduct.innerHTML=null
    let newData = data.map((item)=>{
        return `
      <div class="product-card">
      <div id="img">
          <img src=${item.mainImage} alt="">
      </div>
      <p>Product-id:${item.id}</p>
      <p>${item.brandName}</p>
      
      </div>
        `
    }).join(" ")
    
    adminproduct.innerHTML=newData
}

async function adminName(){
    let name = sessionStorage.getItem("loggedin-adminid")||null
   if(name==0||name==null){
    window.location.href = "../signupLogin.html"
   }else{
    let res = await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/admin/${name}`)
    let data = await  res.json()
    value.innerHTML = `Hello ${data.username}!`
   }

}

logout.addEventListener("click",()=>{
  sessionStorage.setItem("loggedin-adminid",0)
  adminName()
})

function alv(value){
    totalPro.innerHTML = value
}

