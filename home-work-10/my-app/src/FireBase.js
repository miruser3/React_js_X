import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk71U52gu2e7YazU3dvLF7-uoiHRyLOhQ",
  authDomain: "last-firebase-e3514.firebaseapp.com",
  projectId: "last-firebase-e3514",
  storageBucket: "last-firebase-e3514.appspot.com",
  messagingSenderId: "1089399469214",
  appId: "1:1089399469214:web:b7cb5ff01309f2817d778f",
  measurementId: "G-Q1GL253H01"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();