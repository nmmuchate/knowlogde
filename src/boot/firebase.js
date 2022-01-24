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

  // Initialize Firebase

  let fbApp = firebase.initializeApp(firebaseConfig);

  // firebase.analytics();

  let dbAuth = fbApp.auth();
  let dbFApp = fbApp.firestore();

  export {
    dbAuth,
    dbFApp
  }
