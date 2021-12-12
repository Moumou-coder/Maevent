// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEgD7CH7kk671pzQqPSYWYyW-2TX7Dx_c",
    authDomain: "maevent-app.firebaseapp.com",
    projectId: "maevent-app",
    storageBucket: "maevent-app.appspot.com",
    messagingSenderId: "501750162955",
    appId: "1:501750162955:web:ec909974ad94da8771c90e"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

//export
export const fireDB = firebase.firestore();
export const fireAuth = firebase.auth();
export default firebase;
