import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaWFBFkPhqw3n5mrvLj8ZWI0wPlXDEEzI",
  authDomain: "habit-tracker-pro-c402a.firebaseapp.com",
  projectId: "habit-tracker-pro-c402a",
  storageBucket: "habit-tracker-pro-c402a.firebasestorage.app",
  messagingSenderId: "349957706915",
  appId: "1:349957706915:web:b02ec4d988017418c21b16",
  measurementId: "G-PHLJXHC855"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.warn("Firebase persistence could not be set:", error);
});
const db = getFirestore(app);

export { auth, db };

console.log("✅ Firebase Connected Successfully");