import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();