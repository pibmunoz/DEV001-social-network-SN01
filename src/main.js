import { changeView } from './view';

const initSpa = () => {
  // le damos un hash cuando recien se ingresa a la pagina
  if (window.location.hash === '') {
    window.location.hash = '#/';
  }
  // Muestra la vista de acuerdo al hash en el que se encuentra, muestra home

  changeView(window.location.hash);
  return window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
};
// cuando la pagina esta completamente cargada gatilla el initSpa
window.addEventListener('load', initSpa);

export const changeHash = (hash) => {
  window.location.hash = hash;
};
