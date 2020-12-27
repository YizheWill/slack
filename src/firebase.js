import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCuPhY7hAyeQZ5xGKP8TmiyDur6lcH_7H0',
  authDomain: 'slack-afc1a.firebaseapp.com',
  databaseURL: 'https://slack-afc1a.firebaseio.com',
  projectId: 'slack-afc1a',
  storageBucket: 'slack-afc1a.appspot.com',
  messagingSenderId: '567861670318',
  appId: '1:567861670318:web:7133a779a00204e38ad83f',
  measurementId: 'G-3RX5KGQBPM',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
