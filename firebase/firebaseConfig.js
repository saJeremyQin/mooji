// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics, getDatabase } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDIFCHIpfjp1lg_IVB5m28JZKfhIInCxwA",
  authDomain: "mooji-dev.firebaseapp.com",
  projectId: "mooji-dev",
  storageBucket: "mooji-dev.appspot.com",
  messagingSenderId: "790351394642",
  appId: "1:790351394642:web:41988a1c7d8b139f46ac8b",
  measurementId: "G-R5N703SDFV",
  databaseURL: "https://mooji-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);