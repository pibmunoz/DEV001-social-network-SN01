import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, AuthErrorCodes, sendEmailVerification, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from 'firebase/auth';
import { app, db } from '../firebase';
import {doc,setDoc} from 'firebase/firestore'; 

const auth = getAuth(app);

//aqui guardamos base de datos x usuario usando su ID
export  let saveDataFromUsers= (fName, country, usersUid, email, password)=>{
    console.log("holis")

    setDoc(doc(db, 'users', usersUid),{
      name: fName,
      country: country,
      user: usersUid,
      email: email,
      password: password,
    })
  
}



let saveDataFromGoogle= (nameGoogle, usersId, emailGoogle)=>{
// Crea nuevo documento en cloud firestore con la data del usuario
  setDoc(doc(db, 'users', usersId),{
    name: nameGoogle,
    user: usersId,
    email: emailGoogle,
  })}  

// Envía correo de verificación de cuenta y emite alerta de que el correo fue enviado
let sendEmail= (auth)=>{
  //let actionCodeSettings= 'https://pawsfinder-2023.firebaseapp.com/__/auth/action?mode=action&oobCode=code'
console.log(auth.currentUser)
sendEmailVerification(auth.currentUser)
.then(() => {
  alert("Email verification sent!")
  window.location.hash = '#/'
});
}


// Exporta constante de registro + datos del usuario
export let submitRegister = (email, password, fName, country) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let usersUid= userCredential.user.uid;
      saveDataFromUsers(fName, country, usersUid, email, password);
      sendEmail(auth)
      
      
      return userCredential.user;

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
        //agregue un mensaje de que el correo ya esta en uso en caso de que quieran volverse a registrar con el mismo
      if (error.code.includes("auth/email-already-in-use")){
        alert("el correo electronico ya esta registrado")
      }

     
      // ..
    });

}

// Exporta variable ingreso con google. Que luego del logIn, lleva al usuario a la página de perfil
export let googleLogIn= ()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    let usersId= user.uid;
    let nameGoogle= user.displayName
    let emailGoogle= user.email
    console.log(usersId, nameGoogle, emailGoogle)
    saveDataFromGoogle(nameGoogle, usersId, emailGoogle);
    
    
    
    window.location.hash= '#/profile';
  

    return user 
    // ...
})
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
   // const email = error.customData.email;
    // The AuthCredential type that was used.
    const credentialError = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorCode, errorMessage, credentialError)
  });
} 
// Exporta constante que envía correo de reseteo de contraseña
export const forgotPassword = (email)=>{

sendPasswordResetEmail(auth, email)
  .then(() => {
     alert('Password reset email sent!')
     console.log(email)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
}

// Exporta constante que permite al usuario ingresar con su correo y contraseña
export let logInHome = (email, password) => {

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      let emailUser= userCredential.email
      console.log(emailUser)
      //forgotPassword(emailUser)

      window.location.hash = '#/profile'
      return user
      // ...
      //const emailRestPassword= user.email
    })
    .catch((error) => {

      if (error.code === AuthErrorCodes.INVALID_PASSWORD || error.code === AuthErrorCodes.USER_DELETED) {
          alert('El E-mail o la contraseña son incorrectos')
        
      } else {
        alert('no has ingresado nada');
      }
    });
}


