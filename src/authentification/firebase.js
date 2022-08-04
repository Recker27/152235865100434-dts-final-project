// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWb96fj7c6TyB7liZAiculQzDd-B45nEA",
  authDomain: "gggaming-38033.firebaseapp.com",
  projectId: "gggaming-38033",
  storageBucket: "gggaming-38033.appspot.com",
  messagingSenderId: "166991247874",
  appId: "1:166991247874:web:b7dcac7f7b528cec74c51b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// function
// register user
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const registeredUserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("user yang terdaftar:", registeredUserCredential.user);
  } catch (error) {
    console.log("error code:", error.code);
    console.log("error msg:", error.message);
  }
};

// login user
const loginUserWithEmailAndPassword = async (email, password) => {
  try {
    const loggedInUser = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("user yang login saat ini:", loggedInUser.user);
  } catch (error) {
    console.log("error code:", error.code);
    console.log("error msg:", error.message);
  }
};

// reset password
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log("error code:", error.code);
    console.log("error msg:", error.message);
  }
};
// logout user
const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("error code:", error.code);
    console.log("error msg:", error.message);
  }
};

export {
  registerWithEmailAndPassword,
  loginUserWithEmailAndPassword,
  resetPassword,
  logoutUser,
};
