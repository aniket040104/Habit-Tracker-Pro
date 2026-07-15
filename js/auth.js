import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

console.log("auth.js loaded");

window.googleLogin = async function () {
  try {
    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    console.log("Saving user...");

    localStorage.setItem(
    "habitTrackerUser",
    JSON.stringify({
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photo: user.photoURL
   })
  );

console.log(localStorage.getItem("habitTrackerUser"));

    console.log("✅ Login Successful");
    console.log(user);

    location.reload();

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};