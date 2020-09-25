
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDgt9MOflgCIqrPrxPpAuI7ISWK5taSTKw",
    authDomain: "facebook-clone-23c2b.firebaseapp.com",
    databaseURL: "https://facebook-clone-23c2b.firebaseio.com",
    projectId: "facebook-clone-23c2b",
    storageBucket: "facebook-clone-23c2b.appspot.com",
    messagingSenderId: "717012833845",
    appId: "1:717012833845:web:d5b2c8a62917cfa7a4c37c",
    measurementId: "G-9XZ7JWPJVN",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;
