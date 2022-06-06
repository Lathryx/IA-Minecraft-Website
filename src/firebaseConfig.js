import firebase from 'firebase'; 

const config = {
    apiKey: "AIzaSyD3Y8fH37ffsc35Q2IfuYMJjypwkmnT5aM",
    authDomain: "ia-minecraft.firebaseapp.com",
    projectId: "ia-minecraft",
    storageBucket: "ia-minecraft.appspot.com",
    messagingSenderId: "669508770771",
    appId: "1:669508770771:web:614c0d954d1bb8e397ed26",
    measurementId: "G-Z3VFN7R59M"
};

// Initialize Firebase 
firebase.initializeApp(config); 
firebase.analytics();

export default firebase; 