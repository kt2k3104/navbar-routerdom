// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU2LuCpt6pxxht8a4kdPgoj9p82Kfu0U0",
  authDomain: "fir-crud-16-4.firebaseapp.com",
  databaseURL:
    "https://fir-crud-16-4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-crud-16-4",
  storageBucket: "fir-crud-16-4.appspot.com",
  messagingSenderId: "170877011373",
  appId: "1:170877011373:web:47f97b4e16b2bf09fa8d24",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
