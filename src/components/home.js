import { logInHome, googleLogIn } from "../lib/index";

export const viewForHome = () => {
  
  const homeDiv = document.createElement('div');
  const button = document.createElement('button')

  homeDiv.classList.add("cuerpo")
  button.classList.add("buton")

  button.innerText="hola"
  let textHome = `  <section class="homeDivi">
  <div class="logo1">
    <img class= "logo" src="./img/pawsfinder.png" alt="Logo">
  </div>
  <div class="mainBox">
      <div class= "input-wrapper">
        <input  type= "email" class="input1" id="signInButton" placeholder="E-mail">
        <img  class="iconoEmail" src="/img/email.png" alt= "icono email">
      </div>
      <div class= "input-wrapper">
        <input id="password" type="password" class="input1" placeholder="Password">
        <img class="iconoPassword" src= "/img/password.png" alt= "password">
        <img class="iconoPasswordEye" id='eyePassword'  src= "/img/eye.png" alt= "showPassword">
        </div>
      <button class="buttonSignIn" id="buttonSignIn">Sign In</button>
      <p class="registerText"><span class="text1">Doesn't have an account yet? </span> 
      <button id="buttonRegister" class= "buttonRegister">Register</button></p>
      <div class="login2">
        <div class="acomodo">
        <hr> <p>Or login with</p> <hr>
        </div>
        <div class="google">
        <img class="iconoGoogle" id='googleIcon' src= "/img/google.svg" alt= "google">
        <div class = "circle" id= "circle"></div>
        </div>
      </div>
      
  </div>
  <div class="doggy">
  <img  class="imgFooter" src="./img/puppy1.png" alt="Puppy2">
  </div>
</section>
 `

 homeDiv.innerHTML=textHome


//para mostrar el password oculto

homeDiv.querySelector('#eyePassword').addEventListener('click', ()=>{
  let typePassword = homeDiv.querySelector('#password')

  if (typePassword.type == 'password'){
    typePassword.type = 'text'
  } else {
    typePassword.type= 'password'
  }

})
  

  
//para dar click en el button register
 const forChangeViewToRegister= homeDiv.querySelector('#buttonRegister');

 forChangeViewToRegister.addEventListener('click', () =>{ //al hacer click hacemos cambio de hash :) 
 window.location.hash= '#/register'
 })

 homeDiv.querySelector("#buttonSignIn").addEventListener("click", (e)=>{
  
  let email= homeDiv.querySelector('#signInButton').value;
  let password= homeDiv.querySelector('#password').value;
  console.log(email,password)
  logInHome(email,password)

})

homeDiv.querySelector('#googleIcon').addEventListener("click", ()=>{
  googleLogIn()
  console.log("google auth")
})


  return homeDiv;

}