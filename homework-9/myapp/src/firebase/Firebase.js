import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyApW5yJcRFV4At07bCC8yZ9WzGhsUkEN_o",
    authDomain: "fir-myapp-5c6e1.firebaseapp.com",
    databaseURL: "https://fir-myapp-5c6e1-default-rtdb.firebaseio.com",
    projectId: "fir-myapp-5c6e1",
    storageBucket: "fir-myapp-5c6e1.appspot.com",
    messagingSenderId: "661237016883",
    appId: "1:661237016883:web:137f1a7a96629d89dff646"
};
const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();