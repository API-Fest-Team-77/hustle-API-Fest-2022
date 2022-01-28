// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDy1hg3fTjr9DEVtX_7s_jqHcl3Kj2VEMs",
    authDomain: "twitter-clone-9313d.firebaseapp.com",
    projectId: "twitter-clone-9313d",
    storageBucket: "twitter-clone-9313d.appspot.com",
    messagingSenderId: "976264331313",
    appId: "1:976264331313:web:881c7c7daa8f0f045dd510",
    measurementId: "G-C968WWWTLH"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db; 