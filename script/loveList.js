// import navbar
import {nav} from '../component/nav.js';
let navbar=document.getElementById('loveNav');
navbar.innerHTML=nav();

// import Footer
import {fot} from '../component/fot.js'
let foot=document.getElementById('footerNew');
foot.innerHTML=fot();



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


// rendering Love list
let loveArr = JSON.parse(localStorage.getItem('loveList')) || [];

const loveCount=document.getElementById('loveCount');

loveCount.innerHTML=loveArr.length;

const loveData=document.getElementById('loveData')
const showMsg=document.getElementById('h1Tag');

console.log(loveArr)

if(loveArr.length === 0){
    showMsg.style.display='block';
    showMsg.style.color='rgb(40, 37, 212)';
    showMsg.style.height='250px';
    showMsg.style.width='100%';
    showMsg.style.display='flex'
    showMsg.style.alignItems='center'
    showMsg.style.justifyContent='center'
      
}

function fetchLove(Arr){
try {
    
    let newData=Arr.map((el)=>{
        return` <div style='width:85%' class="eachCard">
            <img data-id=${el.id} src="${el.mainImage}" alt="">
            <h4 style='color:rgb(80, 63, 16)'>${el.brandName}</h4>
            <p style='color:rgb(82, 112, 125)' >${el.title.length<=20?el.title:el.title.substring(0,20)+'...'}</p>
            <h3 style='color:rgb(80, 63, 16)' data-id=${el.id}>$ ${el.price}</h3>
            <p style='color:rgb(80, 63, 16)'>Rating : ${el.rating}</p>
            <p style='color:rgb(80, 63, 16)'>Reviews : ${el.reviews}</p>
             <button class='remLove' data-id=${el.id}>Remove Item</button>
         </div>`
    });
         
    loveData.innerHTML = newData.join(' ');

    let image=document.querySelectorAll(".eachCard img");

    for(let images of image){
        images.style.width='55%';
        images.style.height='150px'
        }
        //   remove Item Event
        
        let removeBtn= document.querySelectorAll(".remLove"); 
        for(let btn of removeBtn){
            btn.addEventListener("click",(event)=>{ 
                console.log(event)
              let id = event.target.dataset.id;
              console.log(id);
              removeLove(id);
              window.location.reload()
             });
          }

} catch (error) {
    alert('Something went wrong!')
}
    
}

fetchLove(loveArr);
// console.log('loveArr:', loveArr)


function removeLove(id){
    let remData = loveArr.filter((el)=>{
       return el.id != id;
    })
    localStorage.setItem('loveList',JSON.stringify(remData));
    fetchLove(remData)
}