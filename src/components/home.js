import { logInHome, googleLogIn, forgotPassword } from '../lib/index';
// Constante que contiene el template de la vista de home
export const viewForHome = () => {
  const homeDiv = document.createElement('div');
  const button = document.createElement('button');

  homeDiv.classList.add('cuerpo');
  button.classList.add('buton');

  button.innerText = 'Hola';
  const textHome = `  <section class="homeDivi">
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
      <button class="forgotPassword" id="forgotPassword">Forgot Password</button>
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
</section>
<div class="doggy">
  <img  class="imgFooter" src="./img/puppy1.png" alt="Puppy2">
  </div>
 `;

  homeDiv.innerHTML = textHome;

  // Selecciona elemento eyePassword desde homeDiv que permite mostrar el password oculto
  homeDiv.querySelector('#eyePassword').addEventListener('click', () => {
    const typePassword = homeDiv.querySelector('#password');

    if (typePassword.type === 'password') {
      typePassword.type = 'text';
    } else {
      typePassword.type = 'password';
    }
  });

  // para dar click en el button register
  const forChangeViewToRegister = homeDiv.querySelector('#buttonRegister');

  forChangeViewToRegister.addEventListener('click', () => {
    // al hacer click hacemos cambio de hash :)
    window.location.hash = '#/register';
  });

  // LogIn de usuario, según value de input email y password, confirma que existan
  homeDiv.querySelector('#buttonSignIn').addEventListener('click', () => {
    const email = homeDiv.querySelector('#signInButton').value;
    const password = homeDiv.querySelector('#password').value;
    console.log(email, password);
    logInHome(email, password);
  });
  // Si usuario hace click en botón google, llama a la función googleLogIn() que loguea con google
  homeDiv.querySelector('#googleIcon').addEventListener('click', () => {
    googleLogIn();
    console.log('google auth');
  });

  // olvidaste tu contraseña
  homeDiv.querySelector('#forgotPassword').addEventListener('click', (e) => {
    e.preventDefault();
    const email = homeDiv.querySelector('#signInButton').value;
    // console.log(email)
    if (email === '') {
      alert('insert your email in the input call email');
    } else {
      forgotPassword(email);
    }
  });
  return homeDiv;
};
