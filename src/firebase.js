import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAbvZJKieleGgxDpUJbL_KUiGkON5iuOjo",
  authDomain: "cordion-notes.firebaseapp.com",
  databaseURL: "https://cordion-notes-default-rtdb.firebaseio.com",
  projectId: "cordion-notes",
  storageBucket: "cordion-notes.appspot.com",
  messagingSenderId: "967045518154",
  appId: "1:967045518154:web:f56b90c5811fbef33d27b3",
  measurementId: "G-3480B8F912"
});

const db = firebase.database().ref("Cordion");
const auth = firebase.auth();

export { firebase, db, auth };
