import { viewForHome } from './components/home';
import { viewForRegister } from './components/register';
import { viewForProfile } from './components/profile';

// aqui van las rutas, del lado izquiero el nombre que le asignamos y en changeView y lado
// derecho el nombre de la funcion a la cual va a corresponder (es su valor)
export const routes = {
  home: viewForHome,
  register: viewForRegister,
  profile: viewForProfile,
};
