//vamos a hacer las rutas
import {home} from './components/home.js'
import {register} from './components/register.js';

const divRoot = document.getElementById("root");

const routes ={
    '/': home,
    '#register': register,
    //'#login': Login,
}

export const onNavigate = (pathname) => {
    divRoot.innerHTML="";
     window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
     );

     

     divRoot.appendChild(routes[pathname]())
 };

 window.onpopstate = () => {
    divRoot.appendChild(component());

 }
 
const component = routes[window.location.pathname];
divRoot.appendChild(component());

window.addEventListener('hashchange', (e) =>{
onNavigate(location.hash)

})

 

/* const router = (route) => {
    divRoot.innerHTML = '';
    switch (route) {
      case '/#home': { return container.appendChild(components.home()); }
      case '/#register': { return }}
    }   */