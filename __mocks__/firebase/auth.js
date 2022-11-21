console.log('estamos aquí');
export const getAuth = jest.fn();
export const createUserWithEmailAndPassword = jest.fn();
export const setDoc = jest.fn();
export const doc = jest.fn();
export const sendEmailVerification = jest.fn();

/*jest.fn((auth, email, password) => {
  Promise.resolve({ user: { email, password } });
});*/
