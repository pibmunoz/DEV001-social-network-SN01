import {submitRegister} from '../lib/index.js'

export const viewForRegister = () => {
    const registerDiv = document.createElement('div');
    /*const formCreate = document.createElement('form');
    const inputEmail = document.createElement('input');
    const signUpButton = document.createElement('button');

    registerDiv.appendChild(formCreate);
    formCreate.appendChild(inputEmail);
    registerDiv.appendChild(signUpButton);*/



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
            <input  type= "text" class="input2" id="signUpPasswordConf" placeholder="Confirm your password"> 
        </div>
        <div class ="buttonsRegisterForRow">
            <button class="buttonSignUp" id="signUp">Sign Up</button>
            
        </div>
          
    </form>
    <button class="return" id="return">Return</button>
    
  </section>
 
   `

    registerDiv.innerHTML= registerText
    //seleccionamos el boton y funciona con template string cuando se usa querySelector y se coloca dentro de una variable
    const returnToHome = registerDiv.querySelector('#return'); 
    returnToHome.addEventListener("click", ()=>{
    window.location.hash= '#/'
  })
    


    registerDiv.querySelector("#formRegister").addEventListener("submit", (e)=>{
        e.preventDefault();
    let email= registerDiv.querySelector('#signUpEmail').value;
    let password= registerDiv.querySelector('#signUpPassword').value;
    let fName= registerDiv.querySelector('#fName').value
    let country= registerDiv.querySelector('#signUpCountry').value
    console.log(email,password, fName, country)
    //window.location.hash= '#/profile'
    

    let passwordConf= registerDiv.querySelector('#signUpPasswordConf').value;
    if (password != passwordConf){
        alert('contraseña incorrecta')
    }
    if (email,password, fName, country == '') {
        alert('fill the empty inputs')

    }
    else {
        submitRegister(email,password, fName, country)
    }
   })




    return registerDiv;

    

}

