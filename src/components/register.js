import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {auth} from "../firebase.js";
import { onNavigate } from "../main.js"; 

export const register = () => {

    const divRegister = document.createElement('div');
    const inputMail = document.createElement('input');

    const buttonRegister2 = document.createElement('button');
    
    buttonRegister2.textContent = 'Register';
  
    div.append(buttonRegister2, inputMail)
  
    return divRegister; 
};

    //const registerDiv = document.createElement('div');
    /*const formCreate = document.createElement('form');
    const inputEmail = document.createElement('input');
    const signUpButton = document.createElement('button');

    registerDiv.appendChild(formCreate);
    formCreate.appendChild(inputEmail);
    registerDiv.appendChild(signUpButton);*/

/* 

    registerDiv.classList.add("fullBodyOfRegister")

    const registerText = `  <section class="registerBody">
    <div class="headRegister">
      <img class= "logo2" src="./img/pawsfinder.png" alt="Logo">
      
    </div>
    <form class="formRegister" id="formRegister">
    <h1 class= "signUp">Sign Up </h1>
    <div class="underline-title"></div>
        <div class="infoForm">
            <label for="fName">Name</label>
            <input  type= "text" class="input2" id="fName" placeholder="Your name, e.g: John Doe"> 
         </div>
        <div class="infoForm">
            <label for="fEmail">E-mail</label>
            <input  type= "email" class="input2" id="signUpEmail" placeholder="Your mail, e.g: someone@gmail.com"> 
        </div>
        <div class="infoForm">
            <label for="fCountry">Country</label>
            <input  type="country" class="input2" id="signUpCountry" placeholder="Your country, e.g:Chile"> 
        </div>
        <div class="infoForm">
            <label for="fPassword">Password</label>
            <input  type= "text" class="input2" id="signUpPassword" placeholder="Enter a password: only letters and numbers">
        </div>
        <div class="infoForm">
            <label for="fConfPassword">Confirm password</label>
            <input  type= "text" class="input2" placeholder="Confirm your password"> 
        </div>
        <div class ="buttonsRegisterForRow">
            <button class="buttonSignUp" id="signUp">Sign Up</button>
            <button class="return" id="return">Return</button>
        </div>
          
    </form>
    
  </section>
 
   `

    registerDiv.innerHTML= registerText
    
    
    
let formforRegister= registerDiv.querySelector("#formRegister");
console.log(formforRegister)

formforRegister.addEventListener("submit", async (e)=>{
    e.preventDefault()
    const displayName = formforRegister["fName"].value;
    //const country = formforRegister["signUpCountry"].value;
   const email= formforRegister["signUpEmail"].value;
   const password= formforRegister["signUpPassword"].value;
 console.log( email, password)

 try{
    const user=await createUserWithEmailAndPassword(auth, email,password);
    console.log(user)
    return result.user.updateProfile({
        displayName: document.getElementById("name").value
      })
 } catch(error){
    console.log(error)
 }
});





    return registerDiv;

    

}

 */
