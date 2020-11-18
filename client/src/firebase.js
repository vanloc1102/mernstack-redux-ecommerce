import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh3GOYd_aVkuRc1kCAA5C3UvaHuF7RLFI",
    authDomain: "ecommerce-7e672.firebaseapp.com",
    databaseURL: "https://ecommerce-7e672.firebaseio.com",
    projectId: "ecommerce-7e672",
    storageBucket: "ecommerce-7e672.appspot.com",
    messagingSenderId: "39635264487",
    appId: "1:39635264487:web:301c90614d440b031cd342",
    measurementId: "G-MZ6E0W6FPC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
