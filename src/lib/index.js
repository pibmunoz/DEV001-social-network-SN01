import { doc, setDoc } from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  app,
  db,
} from '../firebase';

const auth = getAuth(app);

/**
 * Exporta constante que guarda data de usuarios usando su ID y crea documento en colección
 */
export const saveDataFromUsers = (fName, country, usersUid, email, password) => {
  const docs = doc(db, 'users', usersUid);
  setDoc(docs, {
    name: fName,
    countries: country,
    user: usersUid,
    emails: email,
    passwords: password,
  });
  // return saveDataFromUsers();
};

/**
 * Exporta constante que guarda data de usuarios cuando se registran con google y crea documento
 */
export const saveDataFromGoogle = (nameGoogle, usersId, emailGoogle) => {
  setDoc(doc(db, 'users', usersId), {
    name: nameGoogle,
    user: usersId,
    email: emailGoogle,
  });
};

/**
 * Envía correo de verificación de cuenta y emite alerta de que el correo fue enviado
 */
export const sendEmail = (currentUser) => {
  const promesa = sendEmailVerification(currentUser);
  return promesa;
};

/**
 * Exporta constante de registro + datos del usuario
 */
// eslint-disable-next-line max-len
export const submitRegister = (email, password) => createUserWithEmailAndPassword(auth, email, password);

/**
 * TODO: JSDO
 * Return a promise that sign in with Google
 */
export const googleLogIn = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

/**
 * Exporta constante que envía correo de reseteo de contraseña
 */
export const forgotPassword = (email) => sendPasswordResetEmail(auth, email);

/**
 * Exporta constante que permite al usuario ingresar con su correo y contraseña
 */
export const logInHome = (email, password) => signInWithEmailAndPassword(auth, email, password);
