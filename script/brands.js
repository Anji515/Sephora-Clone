import {nav} from '../component/nav.js';
let navbar=document.getElementById('brandsNav');
navbar.innerHTML=nav();


const alfabets= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#']

const brandsTop=document.getElementById('brandsTop');


let alftaData=alfabets.map((el)=>{
    return`
      <h1 class='Alfabets' data-id=${el.id} >${el}</h1>
    `
})

brandsTop.innerHTML=alftaData.join(' ');

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

