import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA77_ZO4OO5M3VerH1Rfx0T5sLHxT232Wc",
    authDomain: "nina-d-c.firebaseapp.com",
    projectId: "nina-d-c",
    storageBucket: "nina-d-c.appspot.com",
    messagingSenderId: "1090427707795",
    appId: "1:1090427707795:web:ce2dd78769ab2e71a28866"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;