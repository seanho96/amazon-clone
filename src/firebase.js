import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA_zUuC5xKRBKO7xkTtiLMAS3T5dunMNkM',
  authDomain: 'frontend-504ec.firebaseapp.com',
  databaseURL: 'https://frontend-504ec.firebaseio.com',
  projectId: 'frontend-504ec',
  storageBucket: 'frontend-504ec.appspot.com',
  messagingSenderId: '288883204244',
  appId: '1:288883204244:web:13d8f611c2f725c4e89481',
  measurementId: 'G-RJEBB1YYFM',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
