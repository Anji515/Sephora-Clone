import {nav} from '../component/nav.js';
let navbar=document.getElementById('newNav');
navbar.innerHTML=nav();


import {fot} from '../component/fot.js'
let foot=document.getElementById('footerNew');
foot.innerHTML=fot();

const newCards=document.getElementById('newCards');

// // redirect to Lovelist
// const goToLove=document.getElementById('goToLove');
// goToLove.style.cursor='pointer';
// goToLove.addEventListener('click',()=>{
//     window.location.href='./loveList.html'
// })

// // redirect to homePage
// const logo=document.getElementById('logo');
// logo.style.cursor='pointer';
// logo.addEventListener('click',()=>{
//     window.location.href='./home.html'
// })

// // redirect to cartPage
// const goToCart=document.getElementById('goToCart');
// goToCart.style.cursor='pointer';
// goToCart.addEventListener('click',()=>{
//     window.location.href='./basket.html'
// })

// // redirect to signInPage
// const goToSignin=document.getElementById('goToSignin');
// goToSignin.style.cursor='pointer';
// goToSignin.addEventListener('click',()=>{
//     window.location.href='./signupLogin.html';
// })


// Fetch from API
async function getNewPro(){

    let res=await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/products?page=1&limit=28`);
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
            <p style='color:rgb(82, 112, 125)' >${el.title.length<=20?el.title:el.title.substring(0,20)+'...'}</p>
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
            btn.style.backgroundColor='rgb(219, 25, 200)'
            btn.style.color='black'
            btn.innerHTML="Added To Cart"
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
             lvBtn.classList.remove('fa-regular') 
             lvBtn.classList.add('fa-solid'); 
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
        //   console.log(id);
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
// let cartCount=0;
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
            let isPresent=false;
           for(let i=0; i<cartArr.length; i++){
            if(cartArr[i].title == res.title){
               isPresent=true;
               break;
            }
           }
           if(!isPresent){
            cartArr.push(res);
            localStorage.setItem('cartList',JSON.stringify(cartArr))
           }else {
            alert('Cart Item already present in Cart!');
           }   
        }
        
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


// sortRating data from High to Low
const sortHtoLoRating=document.getElementById('sortHtoLoRating')
sortHtoLoRating.addEventListener('click',sortRating)

async function sortRating(){

    let res=await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/products?page=1&limit=25&sortBy=rating&order=desc`);
    let data=await res.json();
    renderData(data)
}


// sortRating data from Low to Low

const sortLtoHRating=document.getElementById('sortLtoHRating')
sortLtoHRating.addEventListener('click',sortRating1)

async function sortRating1(){

    let res=await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/products?page=1&limit=25&sortBy=rating&order=asc`);
    let data=await res.json();
    renderData(data)
}



// Filter part

const Filter=document.querySelector('#newSelect');

Filter.addEventListener('change',async ()=>{
    let res=await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/products`);
    let data=await res.json();
    console.log('data:', Filter.value)
    if(Filter.value==""){
        renderData(data)
    }else{
        let filtData=data.filter((el)=>{
            return el.brandName == Filter.value;
        })
        console.log(filtData)
        renderData(filtData)
    }
})