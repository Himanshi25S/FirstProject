// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIsqFEce0MdmdqrJ9EhqUXqwwkcjKaQ80",
  authDomain: "medilink-d3404.firebaseapp.com",
  projectId: "medilink-d3404",
  storageBucket: "medilink-d3404.firebasestorage.app",
  messagingSenderId: "356531957166",
  appId: "1:356531957166:web:ebc6bc205f5a530ba7ec3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);