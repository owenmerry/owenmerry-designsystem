import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAy9gosix4W-ACbBePWujPth2gECgjg0pw',
  authDomain: 'linkbuilder-v2.firebaseapp.com',
  databaseURL: 'https://linkbuilder-v2.firebaseio.com/',
  projectId: 'linkbuilder-v2',
  storageBucket: 'linkbuilder-v2.appspot.com',
  messagingSenderId: '984752876448',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const storageRoot = firebase.storage().ref();
export const storage = firebase.storage();

export default firebase;
