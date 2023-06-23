import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";    // for authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfXMkJSAH95kY-gxN56b5CJs5UVT4ONFg",
  authDomain: "bank-fs.firebaseapp.com",
  projectId: "bank-fs",
  storageBucket: "bank-fs.appspot.com",
  messagingSenderId: "886258479399",
  appId: "1:886258479399:web:a9a0fd0a9086e11b01f902"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);    // for authentication