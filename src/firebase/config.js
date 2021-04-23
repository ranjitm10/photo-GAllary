import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDvluMwZa1xWlrL-bJlmT8e5K09xbHFvjA",
  authDomain: "photo-gallery-e0e28.firebaseapp.com",
  databaseURL: "https://pics-gallery-494a6-default-rtdb.firebaseio.com/"
  projectId: "photo-gallery-e0e28",
  storageBucket: "photo-gallery-e0e28.appspot.com",
  messagingSenderId: "138866529512",
  appId: "1:138866529512:web:91427c72c8fdcd6e15e55d"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };