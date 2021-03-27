import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdmiXTh0ri5t8YHqknAQGiEONlWvdzE_8",
    authDomain: "clone-4a8b1.firebaseapp.com",
    projectId: "clone-4a8b1",
    storageBucket: "clone-4a8b1.appspot.com",
    messagingSenderId: "128898856373",
    appId: "1:128898856373:web:f189d1806f2c2e0a2cd5fc",
    measurementId: "G-CFBEF0059M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db ,auth, provider };