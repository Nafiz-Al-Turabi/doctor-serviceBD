// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzHSwfo7wIT1ik0PHEgbccOElLV5qR21c",
  authDomain: "doctor-service-bd-cb695.firebaseapp.com",
  projectId: "doctor-service-bd-cb695",
  storageBucket: "doctor-service-bd-cb695.appspot.com",
  messagingSenderId: "206475708219",
  appId: "1:206475708219:web:39c12dc7dd92078169591e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;