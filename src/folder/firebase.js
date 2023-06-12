import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAcKwchbwoFwmiXMiBGrVj4ZPyQybVhrqA",
    authDomain: "login-app-e25de.firebaseapp.com",
    projectId: "login-app-e25de",
    storageBucket: "login-app-e25de.appspot.com",
    messagingSenderId: "1060982681422",
    appId: "1:1060982681422:web:26ede9f0fd6d303a2a781f",
    databaseURL:"https://login-app-e25de-default-rtdb.firebaseio.com/",
  };



const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };

  // export const app = initializeApp(firebaseConfig)