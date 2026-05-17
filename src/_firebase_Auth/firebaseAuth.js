
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbxSxnQRm1otUcZjV17AGXoRgx1DD-S40",
  authDomain: "wandernext-da00a.firebaseapp.com",
  projectId: "wandernext-da00a",
  storageBucket: "wandernext-da00a.firebasestorage.app",
  messagingSenderId: "188330959447",
  appId: "1:188330959447:web:5d7b4363adc07628da7912"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;