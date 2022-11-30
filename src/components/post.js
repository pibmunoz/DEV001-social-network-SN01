import { QuerySnapshot } from 'firebase/firestore';
import { savePost, getSavePosts, getPost } from '../lib/index';

export const viewForPost = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const postDiv = document.createElement('div');
  postDiv.classList.add('fullBodyPost');
  postDiv.innerHTML = `
  <section class='grandpaDivForPost'>
    <header class="headerOfPost">
      <div class='leftHeader'>
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <ul class="menu__box">
          <li><p class='menu__item'>Home</p></li>
          <li><p id="postSelect" class="menu__item">Posts</p></li>
          <li><p class="menu__item">Me</p></li>
          <li><p class="menu__item">Adoptions</p></li>
          <li><p class="menu__item"></p>Contact</li>
          </ul>
        </div>
      </div>
        <h2 class="helloForPost">Hi ${user.displayName}!</h2>
        <img src="${user.photoURL}" id='photoProfile' class= 'photoForPost'  alt="Imagen de perfil">
    </header>
    
    <div class="post">
      <h3>Post</h3>
      <label for="post"> </label>
      <textarea id= "inputPost" class= "textAreaPost" rows="6" cols="30"></textarea>
      <button id="buttonPost" class="buttonPost">Post</button>
      <button id="buttonShowPost" class="buttonPost">Show Post</button>
    </div>
    
    <div id="showPost" class="post-anteriores"></div>
    <div class="post-anteriores">Esta es la mejor red social del mundo!</div>
  </section>

`;
  let postArea = postDiv.querySelector('#showPost');

  postDiv.querySelector('#buttonPost').addEventListener('click', () => {
    const textAreaPost = postDiv.querySelector('#inputPost').value;
    const nameUser = user.displayName;
    const userUid = user.uid;
    const creationDatePost = Date.now();
    console.log(textAreaPost);
    savePost(textAreaPost, nameUser, userUid, creationDatePost);
    console.log(nameUser);
  });

  postDiv.querySelector('#buttonShowPost').addEventListener('click', async () => {
    getPost((QuerySnapshot) => {
      console.log('querySnapshot', QuerySnapshot);
      postArea = '';

    /*  const newPost = [];
      QuerySnapshot.forEach((doc) => {
        const data = doc.data;
        const idDoc = doc.id;
        newPost.push([data, {id: idDoc }]); */
    });
  });

  return postDiv;
};
