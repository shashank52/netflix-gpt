// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjLvXfKLnKzgcSxLWt9TmBuM9x_HzdozY",
  authDomain: "netflixgpt-a5f51.firebaseapp.com",
  projectId: "netflixgpt-a5f51",
  storageBucket: "netflixgpt-a5f51.appspot.com",
  messagingSenderId: "299038127689",
  appId: "1:299038127689:web:0016248f5419b929713198",
  measurementId: "G-6NZBKTN5J0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
