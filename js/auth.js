import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

console.log("auth.js loaded");

window.googleLogin = async function () {
  try {
    console.log("STEP 1");

    const result = await signInWithPopup(auth, provider);

    console.log("STEP 2");

    const user = result.user;

    console.log("STEP 3", user);

    localStorage.setItem(
      "habit-tracker-pro:profile",
      JSON.stringify({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL
      })
    );

    console.log("STEP 4");

    console.log(localStorage.getItem("habit-tracker-pro:profile"));

    console.log("STEP 5");

    location.reload();

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};