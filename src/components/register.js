export const register = () => {
    const registerDiv = document.createElement('div');

    registerDiv.classList.add("fullBodyOfRegister")

    const registerText = `  <section class="registerBody">
    <div class="logo1">
      <img class= "logo" src="./img/pawsfinder.png" alt="Logo">
      <h1 class= "signUp">Sign Up </h1>
    </div>
  
    <form class="formRegister">
        <div class="infoForm">
            <label for="fName">Name</label>
            <input  type= "text" class="input1" id="fName" placeholder="Your name, e.g: John Doe"> 
         </div>
        <div class="infoForm">
            <label for="fEmail">E-mail</label>
            <input  type= "email" class="input1" placeholder="Your mail, e.g: someone@gmail.com"> 
        </div>
        <div class="infoForm">
            <label for="fPhone">Phone</label>
            <input  type= "phone" class="input1" placeholder="Your Tel, e.g:5541866643"> 
        </div>
        <div class="infoForm">
            <label for="fPassword">Password</label>
            <input  type= "text" class="input1" placeholder="Enter a password: only letters and numbers">
        </div>
        <div class="infoForm">
            <label for="fConfPassword">Confirm password</label>
            <input  type= "text" class="input1" placeholder="Confirm your password"> 
        </div>
        <button class="buttonSignUp">Sign Up</button>

          
    </form>
    
  </section>
 
   `

    registerDiv.insertAdjacentHTML("beforeend", registerText)

    return registerDiv;

}