// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8sPe6WzyfxyqaviJCC5kxYRmxZmgjK1I",
  authDomain: "linkedln-clone-6abee.firebaseapp.com",
  projectId: "linkedln-clone-6abee",
  storageBucket: "linkedln-clone-6abee.appspot.com",
  messagingSenderId: "143620613685",
  appId: "1:143620613685:web:3d4485cab636241569737c",
  measurementId: "G-X2TCX8MXLZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
