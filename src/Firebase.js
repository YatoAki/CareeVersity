import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const config = require('./config')
const apiKey = process.env.API_KEY || config.apiKey

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "careeversity.firebaseapp.com",
    projectId: "careeversity",
    storageBucket: "careeversity.appspot.com",
    messagingSenderId: "790995999590",
    appId: "1:790995999590:web:3ee5806905f9645b20c6a7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;