/* eslint-disable arrow-body-style */
/**
 *
 * @jest-environment jsdom
 */
// importamos la funcion que vamos a testear
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  /*  setDoc,
  db,
  doc,
  getFirestore, */
} from 'firebase/auth';
// import {

// } from 'firebase/firestore';
import {
  submitRegister, sendEmail, forgotPassword, logInHome, googleLogIn, saveDataFromUsers,
} from '../src/lib/index';
import { viewForRegister } from '../src/components/register';
import { viewForHome } from '../src/components/home';

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
  it('Tenemos boton de submit', () => {
    const bodyRegister = viewForRegister();
    const botonSubmit = bodyRegister.querySelector('#signUp');
    expect(botonSubmit.outerHTML).toBe('<button class="buttonSignUp" id="signUp">Sign Up</button>');
  });
  it('cambia de hash y retorna a home', () => {
    const registerDiv = viewForRegister();
    // const changeHash = jest.fn();
    // changeHash();
    viewForRegister();
    const buttonReturnToHome = registerDiv.querySelector('#return');
    expect(window.location.hash).toBe('#/register');
    buttonReturnToHome.click();
    expect(window.location.hash).toBe('#/');
  });
  it('se llama a changeHash desde botón return', () => {
    const changeHash = jest.fn();
    changeHash();
    const registerDiv = viewForRegister();
    const buttonReturnToHome = registerDiv.querySelector('#return');
    buttonReturnToHome.click();
    expect(changeHash).toHaveBeenCalledTimes(1);
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

  describe('elemento .root existe en el HTML', () => {
    beforeAll(() => {
      document.body.innerHTML = '<div class="root" id="root"></div>';
    });
    it('debería existir elemento .root', () => {
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
  it('deberia llamar correctamente createUserWithEmailAndPassword', () => {
    createUserWithEmailAndPassword.mockImplementationOnce((auth, email, password) => {
      expect(email).toBe('test@test.test');
      expect(password).toBe('123');
      // return Promise.resolve({ user: { email, password } });
    });
    submitRegister('test@test.test', '123');
  });
});

describe('envioCorreoVerificacion', () => {
  it('debería ser una función', () => {
    expect(typeof sendEmail).toBe('function');
  });
  it('deberia llamar correctamente sendEmailVerification', () => {
    sendEmailVerification.mockImplementationOnce((currentUser) => {
      expect(currentUser).toBe('testUser');
      // return Promise.resolve();
    });
    /* window.addEventListener('hashchange', () => {
      expect(window.location.hash).toBe('#/');
      done();
    }); */
    sendEmail('testUser');
  });
});
// test de forgotPassword
describe('forgotPassword', () => {
  it('deberia ser una función', () => {
    expect(typeof forgotPassword).toBe('function');
  });
  it('forgotPassword llama correctamente a sendPasswordResetEmail', () => {
    sendPasswordResetEmail.mockImplementationOnce((auth, email) => {
      expect(email).toBe('test@test.test');
      // return Promise.resolve();
    });
    forgotPassword('test@test.test');
  });
});
// test de logInHome
// describe('logInHome');

describe('logInHome', () => {
  it('debería ser una función', () => {
    expect(typeof logInHome).toBe('function');
  });
  it('deberia llamar correctamente signInWithEmailAndPassword', () => {
    signInWithEmailAndPassword.mockImplementationOnce((auth, email, password) => {
      expect(email).toBe('test@test.test');
      expect(password).toBe('123');
      // return Promise.resolve({ user: { email, password } });
    });
    logInHome('test@test.test', '123');
  });
  it('have an alert', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    expect(window.alert).toBeDefined();
    await expect(Promise.reject(new Error('auth/wrong-password'))).rejects.toThrow(
      'auth/wrong-password',
    );
  });
});

// viewForHome
describe('viewForHome', () => {
  it('debería ser una función', () => {
    expect(typeof logInHome).toBe('function');
  });
  it('Tenemos boton de login en HTML', () => {
    const bodyHome = viewForHome();
    const buttonSignIn = bodyHome.querySelector('#buttonSignIn');
    expect(buttonSignIn.outerHTML).toBe('<button class="buttonSignIn" id="buttonSignIn">Sign In</button>');
  });
  it('Tenemos boton de register', () => {
    const bodyHome = viewForHome();
    const buttonSignUp = bodyHome.querySelector('#buttonRegister');
    expect(buttonSignUp.outerHTML).toBe('<button id="buttonRegister" class="buttonRegister">Register</button>');
  });
  it('Tenemos boton de forgotPassword', () => {
    const bodyHome = viewForHome();
    const buttonForgotPassword = bodyHome.querySelector('#forgotPassword');
    expect(buttonForgotPassword.outerHTML).toBe('<button class="forgotPassword" id="forgotPassword">Forgot Password</button>');
  });
  it('Tenemos boton de loginGoogle', () => {
    const bodyHome = viewForHome();
    const buttonGoogleLogIn = bodyHome.querySelector('#googleIcon');
    expect(buttonGoogleLogIn.outerHTML).toBe('<img class="iconoGoogle" id="googleIcon" src="/img/google.svg" alt="google">');
  });
  // POR REVISAR
  it('cambia de hash y retorna a login', () => {
    const homeDiv = viewForHome();
    const buttonReturnToLogin = homeDiv.querySelector('#buttonSignIn');
    console.log(window.location.hash);
    expect(window.location.hash).toBe('#/');
    // const clickEvent = new Event('click');
    buttonReturnToLogin.click();
    return Promise.resolve(expect(window.location.hash).toBe('#/profile'));
  });
});

// aqui va el test a logIn with Google
describe('googleLogIn', () => {
  it('debería ser una función', () => {
    expect(typeof googleLogIn).toBe('function');
  });
  // ----------------------Inicio prueba 2 ---------------
  it('deberia llamar correctamente  signInWithPopup', () => {
    signInWithPopup.mockImplementationOnce((auth, provider) => {
      // const provider = jest.fn(new GoogleAuthProvider());
      // expect(provider).toHaveBeenCalled();
      expect(provider).toStrictEqual(new GoogleAuthProvider());
      return Promise.resolve({ user: { provider } });
    });
    window.addEventListener('hashchange', () => {
      expect(window.location.hash).toBe('#/profile');
    });
    googleLogIn();
  });
  // ----------------------Fin prueba 2----------------
});
/* // saveDataFromUsers
describe('saveDataFromUsers', () => {
  it('debería ser una función', () => {
    expect(typeof saveDataFromUsers).toBe('function');
  });
  it('debería llamar correctamente a', () => {
    expect(saveDataFromUsers).toBe('');
  });
});

// saveDataFromGoogle
describe('saveDataFromGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof saveDataFromGoogle).toBe('function');
  });
  it('debería llamar correctamente a', () => {
    expect(saveDataFromG).toBe('');
  });
});
 */
/* import { createUserWithEmailAndPassword } from 'firebase/auth';
import { submitRegister } from '../src/lib/index.js';

jest.mock('firebase/auth');

describe.only('submitRegister', () => {
  it('debería ser una función', () => {
    expect(typeof submitRegister).toBe('function');
  });
  it('deberia llamar correctamente userwithEmailAndPassword', () => {
    createUserWithEmailAndPassword.mockImplementationOnce((auth, email, password) => {
      expect(email).toBe('test@test.testo');
      expect(password).toBe('123');
      return Promise.resolve({ user: { email, password } });
    });
    submitRegister('test@test.test', '123');
  });
  it('deberia regresar error', () => {
    // esto es si no esta habilitado jsdom ... sí lo tenemos habilitado.
    global.alert = (mensaje) => { expect(mensaje).toBe('el correo electronico ya esta registrado');
};
    createUserWithEmailAndPassword.mockImplementationOnce((auth, email, password) => {
      return Promise.reject({ tiene que tener un texto--como lo que espera el catch });
    });

    expect(typeof submitRegister).toBe('function');
  });
}); */
