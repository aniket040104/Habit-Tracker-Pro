import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
let loginPending = false;

export async function googleLogin() {
  if (loginPending) return;
  loginPending = true;

  try {
    await signInWithPopup(auth, provider);
  } finally {
    loginPending = false;
  }
}
