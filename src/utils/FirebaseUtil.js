// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseConfig() {
  const config = {
    apiKey: "AIzaSyDxQTj2CDXBE6rYa4GxQ13RrNbYcTRAZ4Y",
    authDomain: "dashboardmg.firebaseapp.com",
    projectId: "dashboardmg",
    storageBucket: "dashboardmg.appspot.com",
    messagingSenderId: "28997425909",
    appId: "1:28997425909:web:92058328cb95ef481083bc",
    measurementId: "G-MYC7B15XJ6"
  };
  
  // Initialize Firebase
  const app = initializeApp(config);
  //const analytics = getAnalytics(app);
}

export function firebaseRegistrarUsuario(email, password) {
  createUserWithEmailAndPassword(getAuth(), email, password)
  .then(credenciales => {
    //credenciales.user
  })
}

export  async function firebaseIniciarSesion(email, password) {
  try {
    let credenciales = await signInWithEmailAndPassword(getAuth(), email, password)
    //credenciales.user
  } catch (e) {
    return false;
  }
  return true
}
