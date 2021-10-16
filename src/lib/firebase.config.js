import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBTquiwVQa_dgNsr8w1225HVUgS0QpGnps",
  authDomain: "aniclone-adedb.firebaseapp.com",
  projectId: "aniclone-adedb",
  storageBucket: "aniclone-adedb.appspot.com",
  messagingSenderId: "270235468414",
  appId: "1:270235468414:web:2adf8cee077a5e7f59ce2f",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
