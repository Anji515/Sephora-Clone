import { showmessage } from "./popupMessage.js";
let baseUrl="https://63984905fe03352a94cb30eb.mockapi.io/"
let sform=document.querySelector(".signup-wrapper form");
sform.addEventListener("submit",async(e)=>{
    e.preventDefault()
    document.querySelector(".signup-wrapper form input[type=submit]").value="Wait...";
    document.querySelector(".signup-wrapper form input[type=submit]").style="cursor: not-allowed;";
    let object={};
    let role=document.querySelector("#role").value;
    let inputs=document.querySelectorAll(".signup-wrapper form input");
    object.username=inputs[0].value;
    object.email=inputs[1].value;
    object.password=inputs[2].value;
    if(role=="user"){
        let data=await checkUser(object,"user")
        document.querySelector(".signup-wrapper form input[type=submit]").value="Sign up";
        document.querySelector(".signup-wrapper form input[type=submit]").style="cursor: normal;"
    }else{
        let data=await checkUser(object,"admin")
        document.querySelector(".signup-wrapper form input[type=submit]").value="Sign up";
        document.querySelector(".signup-wrapper form input[type=submit]").style="cursor: normal;"
    }
    
});

async function checkUser(obj,type){
    let text;
    type=="user"?text="User":text="Admin"
    try{
        let data=await fetch(baseUrl+type)
    let res=await data.json();
        let is=false
        res.forEach(item => {
            if(item.email==obj.email){
                is=true;
            }
        });
        if(!is){
            obj.id=res.length+1;
            let userdata=await fetch(baseUrl+type,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            })
            let signupres=await userdata.json();
            showmessage(`${text} created successfully`,"green","fa-check")
        }else{
            showmessage(`${text} already exists!`,"red","fa-xmark")
        }
        
    
    
    }catch(error){
        showmessage("Oops!something went wrong","red","fa-xmark")
        console.log(error)
    }
    
}