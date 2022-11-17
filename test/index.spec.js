/**
 * @jest-environment jsdom
 */
// importamos la funcion que vamos a testear
import { submitRegister } from '../src/lib/index';
import { viewForRegister } from '../src/components/register';

jest.mock('../src/main.js');
jest.mock('../src/lib/index.js');
// configurando firebase moc
/* const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore,
);
*/
describe('submitRegister', () => {
  it('debería ser una función', () => {
    expect(typeof submitRegister).toBe('function');
  });
  it('Tenemos boton de submit', () => {
    const bodyRegister = viewForRegister();
    const botonSubmit = bodyRegister.querySelector('#signUp');
    expect(botonSubmit).not.toBeNull();
  });
  it('Tenemos boton de return', () => {
    const registerDiv = viewForRegister();
    const returnToHome = registerDiv.querySelector('#return');
    expect(returnToHome).not.toBeNull();
  });
  it('cambia de hash', () => {
    const registerDiv = viewForRegister();
    const buttonReturnToHome = registerDiv.querySelector('#return');
    const returnToHome = buttonReturnToHome.addEventListener('click', () => {
      window.location.hash = '#/';
    });
    expect(returnToHome).toHaveReturnedWith('#/');
  });
  // it('Tenemos boton de submit!', () => {
  //   submitRegister('gabrilaavd@gmail.com', '123456', 'Gabriela', 'Chile')
  //     .then((result) => {
  //       expect(result.email).toBe('gabrilaavd@gmail.com');
  //     });
  // });
});
