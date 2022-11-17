import { routes } from './dictionary';

export const changeView = (hash) => {
  const divRoot = document.querySelector('#root');
  divRoot.innerHTML = '';

  switch (hash) {
    /* eslint default-case: ["error", { "commentPattern": "^skip\\sdefault" }] */
    case '#/': // en caso de que ese sea el hash va a mostrar esa página
      // las routes.home son el diccionario (objeto) creado al principio
      divRoot.appendChild(routes.home());
      break;
    case '#/register':
      divRoot.appendChild(routes.register());
      break;
    case '#/profile':
      divRoot.appendChild(routes.profile());
      break;
 // skip default case }
  }
};
