import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, AuthErrorCodes, sendEmailVerification, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app, db } from '../firebase';
import {  doc, setDoc} from "firebase/firestore"; 






//aqui guardamos base de datos x usuario usando su ID
export  let saveDataFromUsers= (fName, country, usersUid)=>{
    console.log("holis")

    setDoc(doc(db, 'users', usersUid),{
      fName: fName,
      country: country,
      user: usersUid,
    })
  
}

//aqui enviamos un correo para verificación
let sendEmail= (auth)=>{
  //let actionCodeSettings= 'https://pawsfinder-2023.firebaseapp.com/__/auth/action?mode=action&oobCode=code'
console.log(auth.currentUser)
sendEmailVerification(auth.currentUser)
.then(() => {
  prompt("Email verification sent!")
  // ...
});
}



export let submitRegister = (email, password, fName, country) => {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let usersUid= userCredential.user.uid;
      saveDataFromUsers(fName, country, usersUid);
      sendEmail(auth)
      
      return userCredential.user;

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

}

//aqui haremos el ingreso con google

export let googleLogIn= ()=>{
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.hash= '#/profile'
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


export let logInHome = (email, password) => {
  const auth = getAuth(app);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      window.location.hash = '#/profile'
      return user
      // ...
    })
    .catch((error) => {

      if (error.code === AuthErrorCodes.INVALID_PASSWORD || error.code === AuthErrorCodes.USER_DELETED) {
          alert('El E-mail o la contraseña son incorrectos')
        
      } else {
        alert('no haz ingresado nada');
      }





    });
}