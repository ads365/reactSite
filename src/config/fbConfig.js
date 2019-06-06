import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAHgap2SXDOuNciLL7MhEnjv60CeuYQEqA",
  authDomain: "mysiteapp-97d5a.firebaseapp.com",
  databaseURL: "https://mysiteapp-97d5a.firebaseio.com",
  projectId: "mysiteapp-97d5a",
  storageBucket: "mysiteapp-97d5a.appspot.com",
  messagingSenderId: "468760102079",
  appId: "1:468760102079:web:8d49db5a986e1db1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
