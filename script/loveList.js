
import {nav} from '../component/nav.js';
let navbar=document.getElementById('loveNav');
navbar.innerHTML=nav();

// redirect to Lovelist
const goToLove=document.getElementById('goToLove');
goToLove.style.cursor='pointer';
goToLove.addEventListener('click',()=>{
    window.location.href='./loveList.html'
})

// redirect to homePage
const logo=document.getElementById('logo');
logo.style.cursor='pointer';
logo.addEventListener('click',()=>{
    window.location.href='./home.html'
})

// redirect to cartPage
const goToCart=document.getElementById('goToCart');
goToCart.style.cursor='pointer';
goToCart.addEventListener('click',()=>{
    window.location.href='./basket.html'
})

// redirect to signInPage
const goToSignin=document.getElementById('goToSignin');
goToSignin.style.cursor='pointer';
goToSignin.addEventListener('click',()=>{
    window.location.href='./signupLogin.html';
})


// rendering Love list
let loveArr = JSON.parse(localStorage.getItem('loveList')) || [];

const loveData=document.getElementById('loveData')

function fetchLove(){
    let newData=loveArr.map((el)=>{
        return` <div style='width:85%' class="eachCard">
            <img data-id=${el.id} src="${el.mainImage}" alt="">
            <h4 style='color:rgb(80, 63, 16)'>${el.brandName}</h4>
            <p style='color:rgb(82, 112, 125)' >${el.title}</p>
            <h3 style='color:rgb(80, 63, 16)' data-id=${el.id}>$ ${el.price}</h3>
            <p style='color:rgb(80, 63, 16)'>Rating : ${el.rating}</p>
            <p style='color:rgb(80, 63, 16)'>Reviews : ${el.reviews}</p>
             <button class='remLove' data-id=${el.id}>Remove</button>
         </div>`
    });
         
    loveData.innerHTML = newData.join(' ');

    let image=document.querySelectorAll(".eachCard img");

    for(let images of image){
        images.style.width='55%';
        images.style.height='150px'
        }
        //   Cart Event
        // <button class='lToCart' data-id=${el.id}>Add To Cart</button>
        // let addToCartBtn= document.querySelectorAll(".lToCart"); 
        // for(let btn of addToCartBtn){
        //     btn.addEventListener("click",(event)=>{ 
        //         // console.log(event.path[0])
        //       let id = event.target.dataset.id;
        //     //   console.log(id);
        //     //   addToCart(id);
        //      });
        //   }
}

fetchLove();


// async function addToCart(id){
// 	try {
// 		let cartRequest = await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/products/${id}`,{
//             method : "PUT",
//             headers : {
//                "Content-Type" : "application/json",
//             }
//         });
//         console.log(cartRequest);
//         if(cartRequest.ok){
// 			let res= await cartRequest.json();
//             loveArr.push(res);
            
//         }
//         // console.log(loveArr)
//         localStorage.setItem('cartList',JSON.stringify(loveArr))
// 	}
	
// 	catch (error) {
// 		alert("You don't have access.")	
// 	}
// }

