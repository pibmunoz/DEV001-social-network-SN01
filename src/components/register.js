import { submitRegister } from '../lib/index.js';

// Constante que contiene el template de la vista de registro
export const viewForRegister = () => {
  const registerDiv = document.createElement('div');
  registerDiv.classList.add('fullBodyOfRegister');

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
          
    </form>
    <div class ="buttonsRegisterForRow">
            <button class="buttonSignUp" id="signUp">Sign Up</button>
            <button class="return" id="return">Return</button>
        </div>
    
    
  </section>
 
   `;
  registerDiv.innerHTML = registerText;
  // seleccionamos el boton y funciona con template string cuando se usa querySelector
  // Botón de retorno a la vista de home
  const returnToHome = registerDiv.querySelector('#return');
  returnToHome.addEventListener('click', () => {
    window.location.hash = '#/';
  });
  // Guarda values de inputs de registro
  registerDiv.querySelector('#signUp').addEventListener('click', (e) => {
    e.preventDefault();

    const email = registerDiv.querySelector('#signUpEmail').value;
    const password = registerDiv.querySelector('#signUpPassword').value;
    const fName = registerDiv.querySelector('#fName').value;
    const country = registerDiv.querySelector('#signUpCountry').value;
    // Sección de validación de campos, contraseñas sean idénticas y que los campos no estén vacíos
    // antes de enviar el registro
    const passwordConf = registerDiv.querySelector('#signUpPasswordConf').value;
    if (password !== passwordConf) {
      alert("Password doesn't match");
    }
    if (email === '' || password === '' || fName === '' || country === '') {
      alert('Fill the empty inputs');
    } else {
      submitRegister(email, password, fName, country);
    }
  });
  return registerDiv;
};
