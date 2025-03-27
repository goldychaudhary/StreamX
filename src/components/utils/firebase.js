// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVo-uWcY6D9KE7GbeRVsuDE1AjBrdiW64",
  authDomain: "streamx-269b5.firebaseapp.com",
  projectId: "streamx-269b5",
  storageBucket: "streamx-269b5.firebasestorage.app",
  messagingSenderId: "715557939597",
  appId: "1:715557939597:web:488a01703582a429fd35c4",
  measurementId: "G-YWF7THXMD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();