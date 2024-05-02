
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyACjN7mzN_4SSg0dlXpwvmN2A4Vi-Lsm3c",
  authDomain: "petrock-1b83f.firebaseapp.com",
  databaseURL: "https://petrock-1b83f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "petrock-1b83f",
  storageBucket: "petrock-1b83f.appspot.com",
  messagingSenderId: "538877432774",
  appId: "1:538877432774:web:8e45887b1e066ec35698c7",
  measurementId: "G-JHNK2HCZ8Z"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db