import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCsQtEGGmC9RgauMPNJ8lMGpw_7oF7LU_s",

  authDomain: "vue2weatherapp.firebaseapp.com",

  projectId: "vue2weatherapp",

  storageBucket: "vue2weatherapp.appspot.com",

  messagingSenderId: "547724396090",

  appId: "1:547724396090:web:8f10365f24faecb4d4d703"

};


const app = firebase.initializeApp(firebaseConfig);

export default app.firestore()