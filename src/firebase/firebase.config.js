import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDU7RI1kDYJPDyoTc1sBWD1AIqjJaJAaws",
  authDomain: "oclm-app.firebaseapp.com",
  databaseURL: "https://oclm-app-default-rtdb.firebaseio.com",
  projectId: "oclm-app",
  storageBucket: "oclm-app.appspot.com",
  messagingSenderId: "214816355050",
  appId: "1:214816355050:web:734967380eda6ef01d1d93",
  measurementId: "G-1EWBZF0739",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firestore;
