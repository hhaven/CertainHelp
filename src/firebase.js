import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBHR7p_EqwC_3BvJCxjlEK_uOMT_j83pE",
    authDomain: "certainhelp-26d7e.firebaseapp.com",
    projectId: "certainhelp-26d7e",
    storageBucket: "certainhelp-26d7e.appspot.com",
    messagingSenderId: "579750326899",
    appId: "1:579750326899:web:460136c81ecb98158ef006",
    measurementId: "G-35ND4MGQX3"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const dba = getDatabase(app);

  export {db, dba, app};
