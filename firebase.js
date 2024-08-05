// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC2rdKb9u0HrFy-5Z5xQdA7_9M3cHTE3Y",
  authDomain: "inventoryimanagement.firebaseapp.com",
  projectId: "inventoryimanagement",
  storageBucket: "inventoryimanagement.appspot.com",
  messagingSenderId: "848848044013",
  appId: "1:848848044013:web:6bde138d50215cd03cb1e4",
  measurementId: "G-Q1KKZH9XY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}