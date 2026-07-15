window.googleLogin = async function () {
  try {
    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    localStorage.setItem(
      "habitTrackerUser",
      JSON.stringify({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    );

    console.log("✅ Login Successful");
    console.log(user);

    location.reload();

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};