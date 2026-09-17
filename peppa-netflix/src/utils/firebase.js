// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm6hRitCdCdlPr6rZYrkoh7QnnOcWHQEc",
  authDomain: "jaga-netflix-fresh.firebaseapp.com",
  projectId: "jaga-netflix-fresh",
  storageBucket: "jaga-netflix-fresh.firebasestorage.app",
  messagingSenderId: "358821412466",
  appId: "1:358821412466:web:ac0bf56a4c668002c24ceb",
  measurementId: "G-PKP9YX8GT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line 
const analytics = getAnalytics(app);

export const auth = getAuth(); // since this is common in many places writing this in a common place