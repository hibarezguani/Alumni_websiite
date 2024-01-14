// firebase.js (ou tout autre fichier pertinent)

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';

// Vérifiez si window est défini avant d'utiliser Firebase Analytics
let analytics = null;

if (typeof window !== 'undefined') {
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
  analytics = getAnalytics(app);
}

export default analytics;
