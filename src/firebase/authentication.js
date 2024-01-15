import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "./configuration";

const provider = new GoogleAuthProvider();

export async function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user created: ", user);
    })
    .catch((error) => {
      console.error("Signup error: ", error.code, error.message);
    });
}

export async function signin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user logged in: ", user);
    })
    .catch((error) => {
      console.error("Signin error: ", error.code, error.message);
    });
}

export async function logout() {
  signOut(auth)
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.error("Logout error: ", error.code, error.message);
    });
}

export async function googleAuth() {
  await signInWithRedirect(auth, provider);
}

// Google OAuth token can be retrived by calling getRedirectResult when your page loads:

// import { getRedirectResult } from "firebase/auth";
// getRedirectResult(auth)
//   .then((result) => {
//     const user = result.user;
//     console.log("user logged in: ", user);
//   })
//   .catch((error) => {
//     console.error("Google auth error: ", error.code, error.message);
//     console.error("email: ", error.customData.email);
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     console.error("AuthCredential: ", credential);
//   });

// The recommended way to get the current user is by setting an observer on the Auth object:

// import { onAuthStateChanged } from "firebase/auth";
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("isLoggedIn: ", user);
//     return true;
//   } else {
//     return null;
//   }
// });
