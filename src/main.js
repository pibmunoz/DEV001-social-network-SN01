//vamos a hacer las rutas
import {home} from './components/home.js'

const divRoot = document.getElementById("root");

const routes ={
    '/':home,
    //  '/register': Register,
    //'/login': Login,
}

const component = routes[window.location.pathname];
divRoot.appendChild(component());
