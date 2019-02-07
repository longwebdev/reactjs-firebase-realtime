import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDLDwp9aLwWGceXaJCoLHmsHZq3OJtutlY",
    authDomain: "long-demo-marioplan.firebaseapp.com",
    databaseURL: "https://long-demo-marioplan.firebaseio.com",
    projectId: "long-demo-marioplan",
    storageBucket: "long-demo-marioplan.appspot.com",
    messagingSenderId: "712999305798"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
