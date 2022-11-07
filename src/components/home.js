//pág de inicio

export const home = () => {
    const homeDiv = document.createElement('div');
    const logo = document.createElement("div");
    const img = document.createElement("img");
    const inputName = document.createElement('input');
    const inputPassword = document.createElement('input');
    const buttonLogin = document.createElement('button');

    //<img src="./assets/images/DRAGONITE.png" alt="pokemon-dragonite" class="img-pokemon-header" />
   

    img.classList.add('logo')
    homeDiv.classList.add("homeDiv")
    inputName.textContent = 'E-mail';
    inputPassword.textContent = 'Password';
    buttonLogin.textContent = 'Sign In';
    img.src= '/pawsfinder.png'

    homeDiv.appendChild(img)
    homeDiv.appendChild(inputName);
    homeDiv.appendChild(inputPassword);
    homeDiv.appendChild(buttonLogin);
    

    return homeDiv;

}