export const register = () => {
    const registerDiv = document.createElement('div');

    registerDiv.classList.add("fullBodyOfRegister")

    const registerText = `  <section class="registerBody">
    <div class="headRegister">
      <img class= "logo2" src="./img/pawsfinder.png" alt="Logo">
      
    </div>
    <div class="toAlignSignUpAndForm">
    <h1 class= "signUp">Sign Up </h1>
    <form class="formRegister">
        <div class="infoForm">
            <label for="fName">Name</label>
            <input  type= "text" class="input2" id="fName" placeholder="Your name, e.g: John Doe"> 
         </div>
         <hr class="formLines">
        <div class="infoForm">
            <label for="fEmail">E-mail</label>
            <input  type= "email" class="input2" placeholder="Your mail, e.g: someone@gmail.com"> 
        </div>
        <div class="infoForm">
            <label for="fPhone">Phone</label>
            <input  type= "phone" class="input2" placeholder="Your Tel, e.g:5541866643"> 
        </div>
        <div class="infoForm">
            <label for="fPassword">Password</label>
            <input  type= "text" class="input2" placeholder="Enter a password: only letters and numbers">
        </div>
        <div class="infoForm">
            <label for="fConfPassword">Confirm password</label>
            <input  type= "text" class="input2" placeholder="Confirm your password"> 
        </div>
        <button class="buttonSignUp">Sign Up</button>

          
    </form>
    </div>
  </section>
 
   `

    registerDiv.insertAdjacentHTML("beforeend", registerText)

    return registerDiv;

}