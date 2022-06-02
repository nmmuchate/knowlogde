import { boot } from 'quasar/wrappers'

import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/firestore'

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {

    apiKey: "AIzaSyCsWLT8oWX1vqCx0GWamsqZjcMG8gzyqAA",

    authDomain: "knowlodge.firebaseapp.com",

    projectId: "knowlodge",

    storageBucket: "knowlodge.appspot.com",

    messagingSenderId: "138174809427",

    appId: "1:138174809427:web:403b2add3f939e466bcda6",

    measurementId: "G-7ELPNG2NJB"

  };

  // To help us with debugging later!
  if (!firebaseConfig.apiKey) throw new Error('Missing firebase credential: apikey');
  if (!firebaseConfig.authDomain) throw new Error('Missing firebase credential: authDomain');
  if (!firebaseConfig.projectId) throw new Error('Missing firebase credential:projectId');
  if (!firebaseConfig.storageBucket) throw new Error('Missing firebase credential: storageBucket');
  if (!firebaseConfig.messagingSenderId) throw new Error('Missing firebase credential: messagingSenderId');
  if (!firebaseConfig.appId) throw new Error('Missing firebase credential: appId');
  if (!firebaseConfig.measurementId) throw new Error('Missing firebase credential: measurementId');

  // Initialize Firebase

  let fbApp = firebase.initializeApp(firebaseConfig);

  // firebase.analytics();

  let dbAuth = fbApp.auth();
  let dbFApp = fbApp.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {
    dbAuth,
    dbFApp,
    fbApp,
    provider
  }
