import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDFy3JD_RqM9btZNxjJUqrLbtCrPmaHXog",
    authDomain: "bicycles-e5cdd.firebaseapp.com",
    projectId: "bicycles-e5cdd",
    storageBucket: "bicycles-e5cdd.appspot.com",
    messagingSenderId: "284690469115",
    appId: "1:284690469115:web:bdf3e965ed72c50046205e"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
