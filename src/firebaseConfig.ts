import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXA13mcQuv0t9_ak5crgmKLzOr9J1ix54",
  authDomain: "to-do-react-firebase-27b16.firebaseapp.com",
  projectId: "to-do-react-firebase-27b16",
  storageBucket: "to-do-react-firebase-27b16.appspot.com",
  messagingSenderId: "419653396813",
  appId: "1:419653396813:web:72f943ddbcecb609a06f04",
  measurementId: "G-MCJ7NZ09EF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
