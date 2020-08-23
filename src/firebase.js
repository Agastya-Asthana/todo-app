import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBdA-vAtrJDBPltGfTu1MMdYSQkwO2k6do",
    authDomain: "todo-app-61d1c.firebaseapp.com",
    databaseURL: "https://todo-app-61d1c.firebaseio.com",
    projectId: "todo-app-61d1c",
    storageBucket: "todo-app-61d1c.appspot.com",
    messagingSenderId: "810108655179",
    appId: "1:810108655179:web:4f9e78fd6e8ee60d939fce",
    measurementId: "G-QF34290VNC"
      
});

const db = firebaseApp.firestore();

export default db;