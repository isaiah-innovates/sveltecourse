// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFhWyDrYZIO6eOW88fCWTYShemEIcRuao",
  authDomain: "sveltecourse-21d6d.firebaseapp.com",
  projectId: "sveltecourse-21d6d",
  storageBucket: "sveltecourse-21d6d.appspot.com",
  messagingSenderId: "746758127975",
  appId: "1:746758127975:web:5ea0a62f1176aa66a5efc2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();