// Firebase configuration will go here
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaWFBFkPhqw3n5mrvLj8ZWI0wPLXDEEZI",
  authDomain: "habit-tracker-pro-c402a.firebaseapp.com",
  projectId: "habit-tracker-pro-c402a",
  storageBucket: "habit-tracker-pro-c402a.firebasestorage.app",
  messagingSenderId: "349957706915",
  appId: "1:349957706915:web:b02ec4d988017418c21b16",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("✅ Firebase Connected Successfully");