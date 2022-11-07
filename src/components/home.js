//pág de inicio

export const home = () => {
    const homeDiv = document.createElement('div');

    const text = `  <section class="homeDivi">
    <div class="logo1">
      <img class= "logo" src="./img/pawsfinder.png" alt="Logo">
    </div>
  
    <div class="mainBox"> 
        <img  class="iconoEmail" src="/img/iconoEmail_Mesa.png" alt= "icono email">
        <input  type= "email" class="input1" placeholder="E-mail"> 
        <img src= "" alt= "">
        <input type="password" class="input1" placeholder="Password">
        <button class="buttonSignIn">Sign In</button>
        <p><span class="text1">Doesn’t have an account yet? </span> <a class="text2" href="/register.js">Register here</a></p>
        <div class="login2">
          <p>Or login with</p>
          <a href="">Google</a>
          <a href="">Facebook</a>
        </div> 
    </div>
    <footer class="footer1">
    <img  class="imgFooter" src="./img/puppy_22.png" alt="Puppy2">
  </footer>
  </section>
 
   `

    homeDiv.innerHTML= text

    return homeDiv;

}