const newCards=document.getElementById('newCards');



async function getNewPro(){

    let res=await fetch(`https://63984905fe03352a94cb30eb.mockapi.io/products`);
    let data=await res.json();
    renderData(data);
}

getNewPro()


function renderData(data){
    console.log(data)
    newCards.innerHTML=null;

    let newData=data.map((el)=>{
        return` <div class="eachCard">
            <img src="${el.mainImage}" alt="">
            <h5>${el.brandName}</h5>
            <p>${el.title}</p>
            <h3>Price: ${el.price}</h3>
            <p>Rating: ${el.rating}</p>
         </div>`
    })
    newCards.innerHTML=newData.join("");

}