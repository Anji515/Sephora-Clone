
// import navbar
import {nav} from '../component/nav.js';
let navbar=document.getElementById('brandsNav');
navbar.innerHTML=nav();

// import footer
import {fot} from '../component/fot.js'
let foot=document.getElementById('footerNew');
foot.innerHTML=fot();




const alfabets= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','Y','#']

const brandsTop=document.getElementById('brandsTop');


let alftaData=alfabets.map((el)=>{
    return`
      <h1 class='Alfabets' data-id=${el.id} >${el}</h1>
    `
})

brandsTop.innerHTML=alftaData.join(' ');

// To get track top ALfabets 
const Alfabets=document.querySelectorAll('.Alfabets')
// console.log(Alfabets);
const divAlfa=document.querySelectorAll('.alfaBet p');

for(let alfa of Alfabets){
    // console.log('tags',alfa.target);
    alfa.addEventListener("click",(event)=>{ 
        // console.log(event.path[0])
        let id = event.target.innerText      ;
    //   console.log(event);
      console.log(id);
         for(let el of divAlfa){
        // console.log(el)
        // console.log(el.innerHTML)
            if(id==el.innerHTML){
            console.log(el);
            scrollTo.el
           }
      }
         //   console.log(mappings)
         //   goToItems(id);
     });
}


// To get track brands ALfabets 
let alfaDiv;

for(let alfa of divAlfa){
    // console.log('tags',alfa.target);
    alfa.addEventListener("click",(event)=>{ 
        // console.log(event.path[0])
      let id = event.target.innerText      ;
    //   console.log(goToItems);
    //   console.log(id);
      alfaDiv=id;
    //   addToCart(id);
     });
}




// Each p tag to go Items
const eachP=document.querySelectorAll('.cards p');
for(let el of eachP){
    el.style.cursor='pointer';
    
// MosueOver Events....
    el.addEventListener("mouseenter", () => { el.style.color = "rgb(75, 134, 243)"  });
    el.addEventListener("mouseenter", () => { el.style.fontSize = "16px"  });
    el.addEventListener("mouseenter", () => { el.style.textDecoration = "underline"  });
    el.addEventListener('mouseleave', () => { el.style.color = "black" });
    el.addEventListener('mouseleave', () => { el.style.fontSize = "14px" });
    el.addEventListener("mouseleave", () => { el.style.textDecoration = "none"  });

// Click Event to newPage...    
        el.addEventListener('click',()=>{
        window.location.href='./newPage.html';
    })
}

