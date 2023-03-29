

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAJDL5aDFZVZaykgX4uEoLydyNyKe_MGx0",
  authDomain: "multimart-bd5c9.firebaseapp.com",
  projectId: "multimart-bd5c9",
  storageBucket: "multimart-bd5c9.appspot.com",
  messagingSenderId: "951067172150",
  appId: "1:951067172150:web:86fbfb77252902556a6797"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)


export default app;