// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_lzokjDnbAbk-yKKXhjneuo1wlFSFdgw",
  authDomain: "job-porto.firebaseapp.com",
  projectId: "job-porto",
  storageBucket: "job-porto.appspot.com",
  messagingSenderId: "288215593451",
  appId: "1:288215593451:web:d3650c5c879154b11529ae",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});

export const db = getFirestore(firebaseApp);
export const auth = getAuth();
export const  signInWithGooglePopup = () => signInWithPopup(auth, provider);

