import firebase from "firebase/compat/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_IN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export const initializeApp = firebase.initializeApp(firebaseConfig);

// export const authService = firebase.auth();
