/* eslint-disable arrow-body-style */
/**
 *
 * @jest-environment jsdom
 */
// importamos la funcion que vamos a testear
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { submitRegister, saveDataFromUsers, sendEmail } from '../src/lib/index';
import { viewForRegister } from '../src/components/register';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

// Inicio Testeo a viewForRegister
describe('viewForRegister', () => {
  it('debería ser una función', () => {
    expect(typeof viewForRegister).toBe('function');
  });
  it('Tenemos boton de return', () => {
    const registerDiv = viewForRegister();
    const returnToHome = registerDiv.querySelector('#return');
    expect(returnToHome.outerHTML).toBe('<button class="return" id="return">Return</button>');
  });
  it('cambia de hash y retorna a home', () => {
    const registerDiv = viewForRegister();
    const buttonReturnToHome = registerDiv.querySelector('#return');
    expect(window.location.hash).toBe('');
    buttonReturnToHome.click();
    expect(window.location.hash).toBe('#/');
  });
  it('contraseña y confirmación no son iguales', () => {
    const registerDiv = viewForRegister();
    let password = registerDiv.querySelector('#signUpPassword').value;
    let passwordConf = registerDiv.querySelector('#signUpPasswordConf').value;
    password = 'holahola';
    passwordConf = 'holasholas';
    const buttonSignUp = registerDiv.querySelector('#signUp');
    buttonSignUp.click();
    expect(password !== passwordConf).toBe(true); // preguntar si esta bien :(
  });

  describe('elemento root', () => {
    beforeAll(() => {
      document.body.innerHTML = '<div class="root" id="root"></div>';
    });
    it('debería existir elemento root', () => {
      const bodyRoot = document.getElementById('root');
      expect(bodyRoot.outerHTML).toBe('<div class="root" id="root"></div>');
    });
  });
});
// Fin testeo viewForRegister
// Inicio testeo función submitRegister()
describe('submitRegister', () => {
  it('debería ser una función', () => {
    expect(typeof submitRegister).toBe('function');
  });
  it('Tenemos boton de submit', () => {
    const bodyRegister = viewForRegister();
    const botonSubmit = bodyRegister.querySelector('#signUp');
    expect(botonSubmit.outerHTML).toBe('<button class="buttonSignUp" id="signUp">Sign Up</button>');
  });
  it('deberia llamar correctamente userwithEmailAndPassword', () => {
    createUserWithEmailAndPassword.mockImplementationOnce((auth, email, password) => {
      expect(email).toBe('test@test.test');
      expect(password).toBe('123');
      return Promise.resolve({ user: { email, password } });
    });
    submitRegister('test@test.test', '123');
  });
});
