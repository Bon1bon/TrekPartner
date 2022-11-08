// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYtmuzxbUSM73VJ1FnNqqm_Qv07rcKRSM",
    authDomain: "trekpartner-416c9.firebaseapp.com",
    projectId: "trekpartner-416c9",
    storageBucket: "trekpartner-416c9.appspot.com",
    messagingSenderId: "356415324677",
    appId: "1:356415324677:web:565544691c942e36bd926c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };