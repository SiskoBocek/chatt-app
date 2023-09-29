import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtSZooPXSXRqQTA3-7d3EcXBny1MJDtCk",
    authDomain: "blog-vue3-f095c.firebaseapp.com",
    projectId: "blog-vue3-f095c",
    storageBucket: "blog-vue3-f095c.appspot.com",
    messagingSenderId: "712114358392",
    appId: "1:712114358392:web:cc00b0849abe9c4544c58d"
  };

  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, timestamp, projectAuth };