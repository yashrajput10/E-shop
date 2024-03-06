import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDyp9KD-fHTPDV5Ve6rbK1NkLN6OOE-Spo",
  authDomain: "e-commerce-eab92.firebaseapp.com",
  projectId: "e-commerce-eab92",
  storageBucket: "e-commerce-eab92.appspot.com",
  messagingSenderId: "984942339152",
  appId: "1:984942339152:web:47e8e9be5c2078938f1d55"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }