// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABHjq0W6tsoMlpbmCHMKfwvmork95ThLY',
  authDomain: 'pawsfinder-2023.firebaseapp.com',
  projectId: 'pawsfinder-2023',
  storageBucket: 'pawsfinder-2023.appspot.com',
  messagingSenderId: '480435962787',
  appId: '1:480435962787:web:4cd31c67d1596423641016',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
