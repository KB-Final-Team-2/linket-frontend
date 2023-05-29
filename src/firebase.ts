// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as _db from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnRG1QPQUYgD9DYpqtHy7J_sLknevS29A",
  authDomain: "linket-chat.firebaseapp.com",
  projectId: "linket-chat",
  storageBucket: "linket-chat.appspot.com",
  messagingSenderId: "556079828689",
  appId: "1:556079828689:web:8600ba7786b686ec8f7ff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = _db.getFirestore(app);

export {app, db, _db};