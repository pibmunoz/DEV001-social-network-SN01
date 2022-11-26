import { auth } from '../lib/index';

export const viewForProfile = () => {
  const user = auth.currentUser;
  // console.log(user.displayName);
  const profileDiv = document.createElement('div');
  profileDiv.classList.add('allViewForProfile');

  profileDiv.innerHTML = `<section class='grandpaForProfile'>
  <img src="./img/backg02.png" id='upperBackground' class='upperBackground'  alt="noseve">
  <div class="hamburger-menu">
  <input id="menu__toggle" type="checkbox" />
  <label class="menu__btn" for="menu__toggle">
    <span></span>
  </label>

  <ul class="menu__box">
    <li><a class="menu__item" href="#">Home</a></li>
    <li><a class="menu__item" href="#">Posts</a></li>
    <li><a class="menu__item" href="#">Me</a></li>
    <li><a class="menu__item" href="#">Adoptions</a></li>
    <li><a class="menu__item" href="#"></a>Contact</li>
  </ul>
</div>

    <form class="formProfile" id="formProfile">
    <div class="headerProfile">
    <img src="${user.photoURL}" id='photoProfile' class= 'photoForProfile'  alt="AQUI VA LA IMAGEN DE LA FOTO QUE VAMOS A SUBIR EN input">
   <input type="file" accept="image/png" image/jpeg" id="updatePhoto">Aqui podemos subir la foto</input>
        <div class="profileFormDivDad">
        <h1 class= "nameForProfile"> ${user.displayName} </h1>
    </div>
    </div>

        <div class="profileFormDiv"></div>
        <label for="namePet">Name</label>
        <input  type= "text" class="inputProfile" id="namePet" placeholder="Pet name"> 
         </div>        
        <div class="profileFormDiv"></div>
            <label for="type">Type</label>
            <input  type= "text" class="inputProfile" id="type" placeholder="Type, e.g: Cat"> 
         </div>
        <div class="profileFormDiv">
            <label for="age">Age</label>
            <input  type= "number" class="inputProfile" id="age" placeholder="Age"> 
        </div>
        <div class="profileFormDiv">
            <label for="location">Location</label>
            <input  type="text" class="inputProfile" id="location" placeholder="Your location"> 
        </div>
        <div class="profileFormDiv">
            <label for="caretaker">Caretaker</label>
            <input  type= "text" class="inputProfile" id="caretaker" placeholder= "Caretaker Name">
        </div>
        <div class="profileFormDiv">
            <label for="description">Description</label>
            <textarea id="description" class="inputProfile" placeholder= "..."></textarea>
            </div>
        </div>
          
    </form>
    <div class ="buttonsProfile">
            <button class="buttonProfile" id="buttonEdit">Edit</button>
            <button class="buttonProfile" id="buttonSave">Save</button>
        </div>
    <img src="./img/backg01.png" id='backgroundIconsDown' class='backgroundIconsDown'  alt="noseve">
  </section>
`;

  const photoForProfile = profileDiv.querySelector('#updatePhoto').value;
  console.log(photoForProfile);

  return profileDiv;
};
