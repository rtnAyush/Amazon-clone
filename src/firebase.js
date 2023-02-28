// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBukjkrBd7f-NxBjW5hmNI0lpcZMyD1IZ8",
    authDomain: "clone-ak21.firebaseapp.com",
    projectId: "clone-ak21",
    storageBucket: "clone-ak21.appspot.com",
    messagingSenderId: "228692370385",
    appId: "1:228692370385:web:602a694baa73f6420df6f0",
    measurementId: "G-L82C65SQZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

export { app, auth };