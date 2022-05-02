//import { initializeApp } from 'firebase/app';
//import { getFirestore } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_XzmAhfeJkNPmcl3cfZL1mSjp84l-LmI",
    authDomain: "linkedin-clone-yt-bc6e5.firebaseapp.com",
    projectId: "linkedin-clone-yt-bc6e5",
    storageBucket: "linkedin-clone-yt-bc6e5.appspot.com",
    messagingSenderId: "891776997674",
    appId: "1:891776997674:web:cfb4e22c66b9a8dc876653"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };