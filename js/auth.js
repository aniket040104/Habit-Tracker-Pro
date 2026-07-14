import { auth } from "./firebase.js";

console.log("auth.js loaded");
import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

window.googleLogin = async function () {
  try {
    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    console.log("✅ Login Successful");

    console.log(user);

  } catch (error) {

    console.error(error);

    alert(error.message);

  }
};