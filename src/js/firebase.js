import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCjjAHk-3KavWhcKdbfvMwkiMsUsRKPDU",
    authDomain: "noteballs-e0951.firebaseapp.com",
    projectId: "noteballs-e0951",
    storageBucket: "noteballs-e0951.appspot.com",
    messagingSenderId: "1059869752224",
    appId: "1:1059869752224:web:6626dacdb96f36d89b42c5"
}


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}