// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
export function firebaseConfig() {
  const config = {
    apiKey: "AIzaSyDxQTj2CDXBE6rYa4GxQ13RrNbYcTRAZ4Y",
    authDomain: "dashboardmg.firebaseapp.com",
    projectId: "dashboardmg",
    storageBucket: "dashboardmg.appspot.com",
    messagingSenderId: "28997425909",
    appId: "1:28997425909:web:92058328cb95ef481083bc",
    measurementId: "G-MYC7B15XJ6",
  };
  const app = initializeApp(config);
  const analytics = getAnalytics(app)
}

export function firebaseRegistrarUsuario(email, password) {
  createUserWithEmailAndPassword(getAuth(), email, password).then(
    (credenciales) => {
      //credenciales.user
    }
  );
}

export async function firebaseIniciarSesion(email, password) {
  try {
    let credenciales = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    //credenciales.user
  } catch (e) {
    return false;
  }
  return true;
}

export async function firebaseFindClients(coleccionBuscar) {
  let listado = [];
  let consulta = collection(getFirestore(), coleccionBuscar);
  let resultado = await getDocs(consulta);
  resultado.forEach(documento => {
    let objeto = documento.data()
    objeto.id = documento.id
    listado.push(objeto)
  })
  return listado;
}
