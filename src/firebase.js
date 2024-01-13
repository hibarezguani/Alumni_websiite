// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-yJP01U_KXJvYhd-9INpwKSlZo6YySjs",
  authDomain: "alumni-47d55.firebaseapp.com",
  projectId: "alumni-47d55",
  storageBucket: "alumni-47d55.appspot.com",
  messagingSenderId: "447074767374",
  appId: "1:447074767374:web:233f1df0b67e90ea3ae25f",
  measurementId: "G-4GG4BRHZHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);