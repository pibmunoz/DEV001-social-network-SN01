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
