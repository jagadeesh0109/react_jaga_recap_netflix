// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkFRTnd0W5WXShEZiPByMbwzWrls2Qs18",
  authDomain: "jaga-netflix.firebaseapp.com",
  projectId: "jaga-netflix",
  storageBucket: "jaga-netflix.firebasestorage.app",
  messagingSenderId: "141863214538",
  appId: "1:141863214538:web:8a751ff57d2a394c7d8333",
  measurementId: "G-R3QZVKTT1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);