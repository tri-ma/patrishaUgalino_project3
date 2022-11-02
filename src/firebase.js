// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBAxKA46KQMJCh7qPWnz2LSO7pv0he2Q4g",

    authDomain: "white-rabbit-1b098.firebaseapp.com",

    projectId: "white-rabbit-1b098",

    storageBucket: "white-rabbit-1b098.appspot.com",

    messagingSenderId: "915811279631",

    appId: "1:915811279631:web:455f3e771e24711fc2d47a",

    measurementId: "G-R3X1CF1VF0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);