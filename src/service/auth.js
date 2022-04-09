import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export function signInWithEmailPassword() {
  const email = "test@example.com";
  const password = "hunter2";

  // [START auth_signin_password]
  const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
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

export function signUpWithEmailPassword() {
  const email = "daejeon@example.com";
  const password = "1234567";

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("sign Up");
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

export default signInWithEmailPassword;

// import { emit } from "process";
// import { authService } from "./firebase";

// //회원가입
// const signUp = (email, password) => {
//   return authService.createUserWithEmailAndPassword(
//     authService,
//     email,
//     password
//   );
// };

// //로그인
// export const signIn = (email, password) => {
//   return authService.signInWithEmailAndPassword(authService, email, password);
// };

// export default signUp;

// [SNIPPET_REGISTRY disabled]
// [SNIPPETS_SEPARATION enabled]
