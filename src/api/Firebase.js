import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCP-LTJ-aHMly9OuyvZ3FFHu63e6EQTabQ",
    authDomain: "crud-textiles.firebaseapp.com",
    projectId: "crud-textiles",
    storageBucket: "crud-textiles.appspot.com",
    databaseURL: 'https://crud-textiles-default-rtdb.firebaseio.com/',
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);