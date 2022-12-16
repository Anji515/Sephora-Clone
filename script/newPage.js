import {nav} from '../component/nav.js';
let navbar=document.getElementById('newNav');
navbar.innerHTML=nav();

const newCards=document.getElementById('newCards');

// Fetch from API
async function getNewPro(){

    let res=await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/products?page=1&limit=25`);
    let data=await res.json();
    renderData(data);
    renderSort(data);
}
getNewPro()



let cartArr=JSON.parse(localStorage.getItem('cartList')) || [];

let loveArr=JSON.parse(localStorage.getItem('loveList')) || [];


function renderData(data){
    // console.log(data)
    newCards.innerHTML=null;

    let newData=data.map((el)=>{
        return` <div style='width:85%' class="eachCard">
            <img data-id=${el.id} src="${el.mainImage}" alt="">
            <h4 style='color:rgb(80, 63, 16)'>${el.brandName}</h4>
            <p style='color:rgb(82, 112, 125)' >${el.title}</p>
            <h3 style='color:rgb(80, 63, 16)' data-id=${el.id}>$ ${el.price}</h3>
            <p style='color:rgb(80, 63, 16)'>Rating : ${el.rating}</p>
            <p style='color:rgb(80, 63, 16)'>Reviews : ${el.reviews}</p>
           <div class='newLove'>
             <i data-id=${el.id} class="fa-regular fa-heart fa-2x"></i>
             <button class='newCart' data-id=${el.id}>Add To Cart</button>
           </div>
         </div>`
    });

       // AddTo cart event
    newCards.innerHTML=newData.join("");
    // console.log(newData)
    
    let image=document.querySelectorAll(".eachCard img");

    for(let images of image){
        images.style.width='55%';
        images.style.height='150px'
        }
    // console.log(image)
    // image.style.backgroundColor ='black'
    
   
    //   Cart Event
    let addToCartBtn= document.querySelectorAll(".newCart"); 
    for(let btn of addToCartBtn){
        btn.addEventListener("click",(event)=>{ 
            // console.log(event.path[0])
          let id = event.target.dataset.id;
          console.log(id);
          addToCart(id);
         });
      }


      // AddTo Love event
    let addToLove= document.querySelectorAll(".newLove i");
    // console.log(addToLove)
        
    for(let lvBtn of addToLove){
        lvBtn.addEventListener("click",(event)=>{ 
            // console.log(event.target)
           let id = event.target.dataset.id;
            // console.log("love",id);
            addToLoveList(id);
         });
      }
}


// Sorting part

function renderSort(data){

    console.log(data);
    
    let sortBtnLtH= document.getElementById("sortBtnLtH");

    sortBtnLtH.addEventListener('click',()=>{
        newCards.innerHTML=null
        let sortedData=data.sort((a,b)=>{
            return a.price-b.price
        })
        let sortings=sortedData.map((el)=>{
            return` <div style='width:85%' class="eachCard">
            <img data-id=${el.id} src="${el.mainImage}" alt="">
            <h4 style='color:rgb(80, 63, 16)'>${el.brandName}</h4>
            <p style='color:rgb(82, 112, 125)' >${el.title}</p>
            <h3 style='color:rgb(80, 63, 16)' data-id=${el.id}>$ ${el.price}</h3>
            <p style='color:rgb(80, 63, 16)'>Rating : ${el.rating}</p>
            <p style='color:rgb(80, 63, 16)'>Reviews : ${el.reviews}</p>
           <div class='newLove'>
             <i data-id=${el.id} class="fa-regular fa-heart fa-2x"></i>
             <button class='newCart' data-id=${el.id}>Add To Cart</button>
           </div>
         </div>`
        })

        newCards.innerHTML=sortings.join(' ');

        let image=document.querySelectorAll(".eachCard img");

        for(let images of image){
            images.style.width='55%';
            images.style.height='150px'
            }

                //   Cart Event
    let addToCartBtn= document.querySelectorAll(".newCart"); 
    for(let btn of addToCartBtn){
        btn.addEventListener("click",(event)=>{ 
            // console.log(event.path[0])
          let id = event.target.dataset.id;
          console.log(id);
          addToCart(id);
         });
      }


      // AddTo Love event
    let addToLove= document.querySelectorAll(".newLove i");
    // console.log(addToLove)
        
    for(let lvBtn of addToLove){
        lvBtn.addEventListener("click",(event)=>{ 
            // console.log(event.target)
           let id = event.target.dataset.id;
            // console.log("love",id);
            addToLoveList(id);
         });
      }
            

       })

    let sortBtnHtL= document.getElementById("sortBtnHtL"); 
       sortBtnHtL.addEventListener('click',()=>{
        newCards.innerHTML=null
        let sortedData=data.sort((a,b)=>{
            return b.price-a.price
        })
        let sortings1=sortedData.map((el)=>{
            return` <div style='width:85%' class="eachCard">
            <img data-id=${el.id} src="${el.mainImage}" alt="">
            <h4 style='color:rgb(80, 63, 16)'>${el.brandName}</h4>
            <p style='color:rgb(82, 112, 125)' >${el.title}</p>
            <h3 style='color:rgb(80, 63, 16)' data-id=${el.id}>$ ${el.price}</h3>
            <p style='color:rgb(80, 63, 16)'>Rating : ${el.rating}</p>
            <p style='color:rgb(80, 63, 16)'>Reviews : ${el.reviews}</p>
           <div class='newLove'>
             <i data-id=${el.id} class="fa-regular fa-heart fa-2x"></i>
             <button class='newCart' data-id=${el.id}>Add To Cart</button>
           </div>
         </div>`
        })

        newCards.innerHTML=sortings1.join(' ');

        let image=document.querySelectorAll(".eachCard img");

        for(let images of image){
            images.style.width='55%';
            images.style.height='150px'
            }

                //   Cart Event
    let addToCartBtn= document.querySelectorAll(".newCart"); 
    for(let btn of addToCartBtn){
        btn.addEventListener("click",(event)=>{ 
            // console.log(event.path[0])
          let id = event.target.dataset.id;
          console.log(id);
          addToCart(id);
         });
      }


      // AddTo Love event
    let addToLove= document.querySelectorAll(".newLove i");
    // console.log(addToLove)
        
    for(let lvBtn of addToLove){
        lvBtn.addEventListener("click",(event)=>{ 
            // console.log(event.target)
           let id = event.target.dataset.id;
            // console.log("love",id);
            addToLoveList(id);
         });
      }

       })

}




// Add to cart Function

async function addToCart(id){
	try {
		let cartRequest = await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/products/${id}`,{
            method : "PUT",
            headers : {
               "Content-Type" : "application/json",
            }
        });
        // console.log(cartRequest);
        if(cartRequest.ok){
			let res= await cartRequest.json();
            // console.log(res);
            cartArr.push(res);
        }
        localStorage.setItem('cartList',JSON.stringify(cartArr))
	}
	
	catch (error) {
		alert("You don't have access.")	
	}
}


// Add to loveList Function

async function addToLoveList(id){
	try {
		let loveRequest = await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/products/${id}`,{
            method : "PUT",
            headers : {
               "Content-Type" : "application/json",
            }
        });
        // console.log(loveRequest);
        
        if(loveRequest.ok){
			let res= await loveRequest.json();
            loveArr.push(res);
            // console.log(res);
        }
        localStorage.setItem('loveList',JSON.stringify(loveArr))
	}
	catch (error) {
		alert("You don't have access.")	
	}
}