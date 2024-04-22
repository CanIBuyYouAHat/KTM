import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    // ENV
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and export it
export const db = getFirestore(app);