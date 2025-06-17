// src/firebaseClient.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEZ,
    authDomain: process.env.VITE_FIREBASE_DOMAIZ,
    databaseURL: process.env.VITE_DATABASE_URL,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID,
    measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { setLogLevel } from "firebase/firestore";

// console.log(firebaseConfig);

setLogLevel('debug');
