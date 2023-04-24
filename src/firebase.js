// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYGf9BFccWEuWlWMW9TkRsS161bwNyFZ4",
  authDomain: "realtor-clone-react-f2eeb.firebaseapp.com",
  projectId: "realtor-clone-react-f2eeb",
  storageBucket: "realtor-clone-react-f2eeb.appspot.com",
  messagingSenderId: "418422611353",
  appId: "1:418422611353:web:af97fd078f8c796f520708"
};

// Initialize Firebase
  initializeApp(firebaseConfig);

  export const db = getFirestore()