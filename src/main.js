//vamos a hacer las rutas
import './firebase.js';
import {home} from './components/home.js';
import {register} from './components/register.js';



const root = document.getElementById("root");


const routes ={
    '/': home,
    '/register': register,
    //'#login': Login,
};

const onNavigate = (pathname) => {
    window.history.pushState (
        {},
        pathname,
        window.location,origin + pathname,
    );
    root.appendChild(routes[pathname]())
}

const component = routes[window.location.pathname];

root.appendChild(component());





/* 
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

 
    document.getElementById("buttonRegister").addEventListener("click", () => {
      return onNavigate("#register");
      }); */

//

/*const signUp = document.getElementById("signUp");
console.log()

signUp.addEventListener("click", (e)=>{
    e.preventDefault()

   const email= form["signUpEmail"];
   const password= form["signUpPassword"];
 console.log(email, password)
})*/

