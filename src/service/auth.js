import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { Router } from "react-router-dom";

export function setAuthErrorCode(errorCode) {
  // TODO: errorCode 한글화 작업
  const AUTH_ERROR_CODE = {
    "auth/admin-restricted-operation": "ADMIN_ONLY_OPERATION",
    "auth/argument-error": "ARGUMENT_ERROR",
    "auth/app-not-authorized": "APP_NOT_AUTHORIZED",
    "auth/app-not-installed": "APP_NOT_INSTALLED",
    "auth/captcha-check-failed": "CAPTCHA_CHECK_FAILED",
    "auth/code-expired": "CODE_EXPIRED",
    "auth/cordova-not-ready": "CORDOVA_NOT_READY",
    "auth/cors-unsupported": "CORS_UNSUPPORTED",
    "auth/credential-already-in-use": "CREDENTIAL_ALREADY_IN_USE",
    "auth/custom-token-mismatch": "CREDENTIAL_MISMATCH",
    "auth/requires-recent-login": "CREDENTIAL_TOO_OLD_LOGIN_AGAIN",
    "auth/dependent-sdk-initialized-before-auth":
      "DEPENDENT_SDK_INIT_BEFORE_AUTH",
    "auth/dynamic-link-not-activated": "DYNAMIC_LINK_NOT_ACTIVATED",
    "auth/email-change-needs-verification": "EMAIL_CHANGE_NEEDS_VERIFICATION",
    "auth/email-already-in-use": "EMAIL_EXISTS",
    "auth/emulator-config-failed": "EMULATOR_CONFIG_FAILED",
    "auth/expired-action-code": "EXPIRED_OOB_CODE",
    "auth/cancelled-popup-request": "EXPIRED_POPUP_REQUEST",
    "auth/internal-error": "비밀번호를 입력해주세요",
    "auth/invalid-api-key": "INVALID_API_KEY",
    "auth/invalid-app-credential": "INVALID_APP_CREDENTIAL",
    "auth/invalid-app-id": "INVALID_APP_ID",
    "auth/invalid-user-token": "INVALID_AUTH",
    "auth/invalid-auth-event": "INVALID_AUTH_EVENT",
    "auth/invalid-cert-hash": "INVALID_CERT_HASH",
    "auth/invalid-verification-code": "INVALID_CODE",
    "auth/invalid-continue-uri": "INVALID_CONTINUE_URI",
    "auth/invalid-cordova-configuration": "INVALID_CORDOVA_CONFIGURATION",
    "auth/invalid-custom-token": "INVALID_CUSTOM_TOKEN",
    "auth/invalid-dynamic-link-domain": "INVALID_DYNAMIC_LINK_DOMAIN",
    "auth/invalid-email": "이메일을 입력해주세요",
    "auth/invalid-emulator-scheme": "INVALID_EMULATOR_SCHEME",
    "auth/invalid-credential": "INVALID_IDP_RESPONSE",
    "auth/invalid-message-payload": "INVALID_MESSAGE_PAYLOAD",
    "auth/invalid-multi-factor-session": "INVALID_MFA_SESSION",
    "auth/invalid-oauth-client-id": "INVALID_OAUTH_CLIENT_ID",
    "auth/invalid-oauth-provider": "INVALID_OAUTH_PROVIDER",
    "auth/invalid-action-code": "INVALID_OOB_CODE",
    "auth/unauthorized-domain": "INVALID_ORIGIN",
    "auth/wrong-password": "비밀번호가 틀렸습니다.",
    "auth/invalid-persistence-type": "INVALID_PERSISTENCE",
    "auth/invalid-phone-number": "INVALID_PHONE_NUMBER",
    "auth/invalid-provider-id": "INVALID_PROVIDER_ID",
    "auth/invalid-recipient-email": "INVALID_RECIPIENT_EMAIL",
    "auth/invalid-sender": "INVALID_SENDER",
    "auth/invalid-verification-id": "INVALID_SESSION_INFO",
    "auth/invalid-tenant-id": "INVALID_TENANT_ID",
    "auth/multi-factor-info-not-found": "MFA_INFO_NOT_FOUND",
    "auth/multi-factor-auth-required": "MFA_REQUIRED",
    "auth/missing-android-pkg-name": "MISSING_ANDROID_PACKAGE_NAME",
    "auth/missing-app-credential": "MISSING_APP_CREDENTIAL",
    "auth/auth-domain-config-required": "MISSING_AUTH_DOMAIN",
    "auth/missing-verification-code": "MISSING_CODE",
    "auth/missing-continue-uri": "MISSING_CONTINUE_URI",
    "auth/missing-iframe-start": "MISSING_IFRAME_START",
    "auth/missing-ios-bundle-id": "MISSING_IOS_BUNDLE_ID",
    "auth/missing-or-invalid-nonce": "MISSING_OR_INVALID_NONCE",
    "auth/missing-multi-factor-info": "MISSING_MFA_INFO",
    "auth/missing-multi-factor-session": "MISSING_MFA_SESSION",
    "auth/missing-phone-number": "MISSING_PHONE_NUMBER",
    "auth/missing-verification-id": "MISSING_SESSION_INFO",
    "auth/app-deleted": "MODULE_DESTROYED",
    "auth/account-exists-with-different-credential": "NEED_CONFIRMATION",
    "auth/network-request-failed": "NETWORK_REQUEST_FAILED",
    "auth/null-user": "NULL_USER",
    "auth/no-auth-event": "NO_AUTH_EVENT",
    "auth/no-such-provider": "NO_SUCH_PROVIDER",
    "auth/operation-not-allowed": "OPERATION_NOT_ALLOWED",
    "auth/operation-not-supported-in-this-environment":
      "OPERATION_NOT_SUPPORTED",
    "auth/popup-blocked": "POPUP_BLOCKED",
    "auth/popup-closed-by-user": "POPUP_CLOSED_BY_USER",
    "auth/provider-already-linked": "PROVIDER_ALREADY_LINKED",
    "auth/quota-exceeded": "QUOTA_EXCEEDED",
    "auth/redirect-cancelled-by-user": "REDIRECT_CANCELLED_BY_USER",
    "auth/redirect-operation-pending": "REDIRECT_OPERATION_PENDING",
    "auth/rejected-credential": "REJECTED_CREDENTIAL",
    "auth/second-factor-already-in-use": "SECOND_FACTOR_ALREADY_ENROLLED",
    "auth/maximum-second-factor-count-exceeded": "SECOND_FACTOR_LIMIT_EXCEEDED",
    "auth/tenant-id-mismatch": "TENANT_ID_MISMATCH",
    "auth/timeout": "TIMEOUT",
    "auth/user-token-expired": "TOKEN_EXPIRED",
    "auth/too-many-requests": "잠시 후에 재시도해주세요.",
    "auth/unauthorized-continue-uri": "UNAUTHORIZED_DOMAIN",
    "auth/unsupported-first-factor": "UNSUPPORTED_FIRST_FACTOR",
    "auth/unsupported-persistence-type": "UNSUPPORTED_PERSISTENCE",
    "auth/unsupported-tenant-operation": "UNSUPPORTED_TENANT_OPERATION",
    "auth/unverified-email": "인증되지 않은 이메일입니다.",
    "auth/user-cancelled": "USER_CANCELLED",
    "auth/user-not-found": "가입되지 않은 이메일입니다.",
    "auth/user-disabled": "사용 정지된 계정입니다.",
    "auth/user-mismatch": "USER_MISMATCH",
    "auth/user-signed-out": "USER_SIGNED_OUT",
    "auth/weak-password": "패스워드는 6자리 이상으로 설정해주세요.",
    "auth/web-storage-unsupported":
      "서비스 이용을 위해 최신 브라우저 사용해주세요.",
    "auth/already-initialized": "ALREADY_INITIALIZED",
  };
  return AUTH_ERROR_CODE[errorCode];
}

//로그인
// export async function signInWithEmailPassword(email, password) {
//   // [START auth_signin_password]
//   const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

//   const auth = getAuth();
//   await signInWithEmailAndPassword(auth, email, password)
//     .then((result) => {
//       console.log(`await result user: ${result.user.email}`);

//       console.log(`await result operationType: ${result.operationType}`);
//       // alert("로그인성공");
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("sign in");
//       console.log(`errorCode: ${errorCode} /errorMessage: ${errorMessage} `);
//     });
//   // [END auth_signin_password]
// }

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

// export function signOut() {
//   const auth = getAuth();
//   console.log("로그아웃");
//   return auth.signOut();
// }
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
