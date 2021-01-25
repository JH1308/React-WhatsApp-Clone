import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZB0nFFFdgB8B4LTi-p_5Kt6RxgOq5kS4",
    authDomain: "whatsapp-clone-1013d.firebaseapp.com",
    projectId: "whatsapp-clone-1013d",
    storageBucket: "whatsapp-clone-1013d.appspot.com",
    messagingSenderId: "357366644211",
    appId: "1:357366644211:web:7faa77f521d2fbc3196686",
    measurementId: "G-H9E5E8J4EF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;