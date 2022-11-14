import { changeView } from './view.js';


const initSpa = () => {

    if (window.location.hash === '') { /*le damos un hash cuando recien se ingresa a la pagina*/ 
      window.location.hash = '#/';
      }
   changeView(window.location.hash) /*va a mostrar la vista de acuerdo al hash en el que se encuentra, en este caso es tenemos stablecido que muestre home*/ 
    return window.addEventListener('hashchange', () => { 
      changeView(window.location.hash)});
  
  };
  
  window.addEventListener('DOMContentLoaded', initSpa); //cuando la pagina esta completamente cargada gatilla el initSpa