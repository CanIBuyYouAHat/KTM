import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8HMkKdBYwhLikLH_1yrbzNYyCHBGbSbc",
    authDomain: "kanban-419004.firebaseapp.com",
    projectId: "kanban-419004",
    storageBucket: "kanban-419004.appspot.com",
    messagingSenderId: "429632002537",
    appId: "1:429632002537:web:7a80e56c1099f4cef91378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and export it
export const db = getFirestore(app);