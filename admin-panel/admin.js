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

function def(){
    contents.classList.add('view')
}
def()


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
    console.log(obj)
})

async function postProducts(obj){
   try {
    let res = await fetch('https://63984905fe03352a94cb30eb.mockapi.io/products',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
       })
       if(res.ok){
        alert('Product Added Sucessfully')
       }else{
        alert('Error While Adding Products')
       }
   } catch (error) {
    alert('Error While Adding Products')
   } 
   
}

dltproducts.addEventListener('submit',(event)=>{
    event.preventDefault()
    let id =  document.querySelector("#Product-id").value
    console.log(id)
    deleteRequest(id)
})

async function deleteRequest(id){
    try {
        let res = await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/products/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(res.ok){
            alert("Product Removed")
        }else{
            alert('Unable to delete products')
        }
    } catch (error) {
        alert('Unable to delete products')
    }
}


async function fetchAdminProducts(){
 let res = await fetch ('https://63984905fe03352a94cb30eb.mockapi.io/products')
 let data = await res.json()
 console.log(data)
 renderData(data)
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
    //console.log(newData)
    adminproduct.innerHTML=newData
}