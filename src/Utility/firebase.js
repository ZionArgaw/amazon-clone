import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQi7qivbJA9SfYuBc-J1-iRGc69INlGbU",
  authDomain: "clone-ea32f.firebaseapp.com",
  projectId: "clone-ea32f",
  storageBucket: "clone-ea32f.appspot.com",
  messagingSenderId: "622130311828",
  appId: "1:622130311828:web:a4bc632998e50f47703a81"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();


// import firebase from "firebase/compat/app";
// import {getAuth} from 'firebase/auth';
// import "firebase/compat/firestore"
// import "firebase/compat/auth"