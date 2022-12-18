import { showmessage } from "./popupMessage.js";
let baseUrl="https://63984905fe03352a94cb30eb.mockapi.io/"
let sform=document.querySelector(".signup-wrapper form");
let user_redirect_link="./home.html";
let admin_redirect_link="./admin-panel/admin.html"
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
            if(item.email==obj.email || item.username==obj.username){
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


//Login function

let login_form=document.querySelector(".login-wrapper form");
login_form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    document.querySelector(".login-wrapper form input[type=submit]").value="Wait...";
    document.querySelector(".login-wrapper form input[type=submit]").style="cursor: not-allowed;";
    let object={};
    let role=document.querySelector("#loginrole").value;
    let inputs=document.querySelectorAll(".login-wrapper form input");
    object.username=inputs[0].value;
    object.password=inputs[1].value;
    if(role=="user"){
        let data=await loginUser(object,"user")
        document.querySelector(".login-wrapper form input[type=submit]").value="Login";
        document.querySelector(".login-wrapper form input[type=submit]").style="cursor: normal;"
    }else{
        let data=await loginUser(object,"admin")
        document.querySelector(".login-wrapper form input[type=submit]").value="Login";
        document.querySelector(".login-wrapper form input[type=submit]").style="cursor: normal;"
    }
    
});

async function loginUser(obj,type){
    let text;
    type=="user"?text="User":text="Admin"
    try{
        let data=await fetch(baseUrl+type)
    let res=await data.json();
        let is=false
        let user_data_loggedin;
        res.forEach(item => {
            if(item.username==obj.username && item.password==obj.password){
                is=true;
                user_data_loggedin=item;
            }
        });
        if(is){
            if(type=="user"){
                showmessage(`Welcome ${obj.username}!`,"green","fa-check");
                sessionStorage.setItem("loggedin-userid",user_data_loggedin.id);
                setTimeout(()=>{
                    window.location.href=user_redirect_link;
                },100)
            }else{
                showmessage(`Welcome ${obj.username} to the admin page!`,"green","fa-check");
                sessionStorage.setItem("loggedin-adminid",user_data_loggedin.id);
                setTimeout(()=>{
                    window.location.href=admin_redirect_link;
                },100)
            }
           
        }else{
            showmessage(`Wrong credentials!`,"red","fa-xmark")
        }
        
    
    
    }catch(error){
        showmessage("Oops!something went wrong","red","fa-xmark")
        console.log(error)
    }
    
}