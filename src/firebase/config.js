import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDNIQC1DAH7Xyrsf7V9YVKmNyu6iR-nfqQ",
  authDomain: "pics-gallery-494a6.firebaseapp.com",
  databaseURL: "https://pics-gallery-494a6-default-rtdb.firebaseio.com",
  projectId: "pics-gallery-494a6",
  storageBucket: "pics-gallery-494a6.appspot.com",
  messagingSenderId: "796456090364",
  appId: "1:796456090364:web:40c5a4557e248fa073b579",
  measurementId: "G-XV1L15QB2R"
};


firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };