import { doc, updateDoc } from 'firebase/firestore';
import {
  getStorage, ref, uploadBytesResumable, getDownloadURL,
} from 'firebase/storage';
import { auth, updatePhoto } from '../lib/index';
import { db } from '../firebase';

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
   <input type="file" accept="image/png image/jpeg" id="updatePhoto">Aqui podemos subir la foto</input>
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

  // Input con type file y ID updatePhoto
  const photoForProfile = profileDiv.querySelector('#updatePhoto');

  // Escucha evento de cambio
  photoForProfile.addEventListener('change', (event) => {
    // Selecciona la propiedad de files del target evento
    const fileList = event.target.files;
    // Selecciona el primer elemento de fileList
    // y muestra sólo la propiedad name, que es la ruta del archivo
    const newPhoto = fileList[0].name;
    console.log(fileList[0]);
    console.log(profileDiv.querySelector('#photoProfile'));
    // Guarda en constante usersRef la referencia a la colección
    const usersRef = doc(db, 'users', auth.currentUser.uid);
    // Guarda en constante la función getStorage
    const storage = getStorage();

    // Metadata del archivo esperado
    /** @type {any} */
    const metadata = {
      contentType: 'image/jpeg',
    };
    // Referencia en el storage, tipo 'images/rutadelafoto'
    const storageRef = ref(storage, `images/${newPhoto}`);
    // Sube la foto a la referencia anterior
    const uploadTask = uploadBytesResumable(storageRef, fileList[0], metadata);
    // Promesa, sube la foto y actualiza el doc del usuario agregando el photoURL nuevo
    //  + actualiza perfil del usuario
    getDownloadURL(uploadTask.snapshot.ref)
      .then((downloadURL) => {
        console.log('File available at', downloadURL);
        updateDoc(usersRef, {
          photoURL: downloadURL,
        });
        profileDiv.querySelector('#photoProfile').src = downloadURL;
        updatePhoto(auth.currentUser, downloadURL);
        return downloadURL;
      });
  });
  return profileDiv;
};
