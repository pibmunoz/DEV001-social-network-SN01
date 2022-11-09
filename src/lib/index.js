// aqui exportaras las funciones que necesites
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyABHjq0W6tsoMlpbmCHMKfwvmork95ThLY",
    authDomain: "pawsfinder-2023.firebaseapp.com",
    projectId: "pawsfinder-2023",
    storageBucket: "pawsfinder-2023.appspot.com",
    messagingSenderId: "480435962787",
    appId: "1:480435962787:web:4cd31c67d1596423641016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);  
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
});

/* export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
 */