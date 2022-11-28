import { auth } from '../lib/index';

export const viewForPost = () => {
  const user = auth.currentUser;
  const postDiv = document.createElement('div');
  postDiv.classList.add('fullBodyPost');
  postDiv.innerHTML = `
  <section class='grandpaDivForPost'>
    <img src="./img/backg02.png" id='upperBackground' class='upperBackground'  alt="noseve">
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
      <textarea id="post" class="textAreaPost"> Write your post... </textarea>
      <button class= "buttonPost">Post</button>
    </div>
    
    <div class="post-anteriores">aca van las publicaciones anteriores</div>
    <div class="post-anteriores">Esta es la mejor red social del mundo!</div>
    <img src="./img/paw1-01.png" id="downBackgroundPost" class='backPost' alt="noseve">
  </section>

`;

  return postDiv;
};
