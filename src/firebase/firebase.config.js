// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1kKBYpHizOHMu25FhPf3u3EFFk8caTCw",
    authDomain: "ema-john-simple-with-aut-74f35.firebaseapp.com",
    projectId: "ema-john-simple-with-aut-74f35",
    storageBucket: "ema-john-simple-with-aut-74f35.appspot.com",
    messagingSenderId: "850980459042",
    appId: "1:850980459042:web:ae9bbbba069d7f9ae9307b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app