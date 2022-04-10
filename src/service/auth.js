import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { Router } from "react-router-dom";

//로그인
export function signInWithEmailPassword(email, password) {
  // [START auth_signin_password]
  const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result);
      // Signed in
      // const user = userCredential.user;
      // console.log(user);
      // alert("로그인성공");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("sign in");
      console.log(`errorCode: ${errorCode} /errorMessage: ${errorMessage} `);
    });
  // [END auth_signin_password]
}

//회원가입
export function signUpWithEmailPassword(email, password) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // ...
      console.log(userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`errorCode+ ${errorCode} | errorMessage ${errorMessage}`);

      // ..
    });
}

export function sendEmailVerification() {
  // [START auth_send_email_verification]
  const { getAuth, sendEmailVerification } = require("firebase/auth");

  const auth = getAuth();
  sendEmailVerification(auth.currentUser).then(() => {
    // Email verification sent!
    // ...
  });
  // [END auth_send_email_verification]
}

export function sendPasswordReset() {
  const email = "sam@example.com";

  // [START auth_send_password_reset]
  const { getAuth, sendPasswordResetEmail } = require("firebase/auth");

  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  // [END auth_send_password_reset]
}

// 닉네임 설정
export function updateUserInfo(nickname) {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: nickname,
  })
    .then(() => {
      // Profile updated!
      // ...
      console.log(auth.currentUser.displayName);
    })
    .catch((error) => {
      // An error occurred
      // ...
      console.log(error);
    });
}

export function signOut() {
  const auth = getAuth();
  console.log("로그아웃");
  return auth.signOut();
}
export function loginStatus() {
  const auth = getAuth();
  return auth;
  // TODO: 아래 코드 사용 방법 알아야함.
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log("user: ", user);
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     // ...
  //     return user;
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });
}
