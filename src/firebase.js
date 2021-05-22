import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_96-m9li1cg1Ob7DwJtV33iHzwxUNIuo",
    authDomain: "twitter-clone-19eb2.firebaseapp.com",
    projectId: "twitter-clone-19eb2",
    storageBucket: "twitter-clone-19eb2.appspot.com",
    messagingSenderId: "827855964403",
    appId: "1:827855964403:web:604dd4c9b8dcb9b8f14f86",
    measurementId: "G-Z5V5XE52K6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;