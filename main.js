import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCffMLklX8YT6Ns-Wz9_8ajTr4jp55pRf8",
    authDomain: "login-signup-18385.firebaseapp.com",
    projectId: "login-signup-18385",
    storageBucket: "login-signup-18385.appspot.com",
    messagingSenderId: "1050432810765",
    appId: "1:1050432810765:web:7c9199156f0f59bc374a44",
    measurementId: "G-4CLDH4SR7X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


onAuthStateChanged(auth, (user) => {
    if (user) {
        if (!user.emailVerified) {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    // Email verification sent!
                    console.log("Email Sent");
                    document.getElementById('db').style.display = "block";
                    // ...
                });
        }
        else {
            document.getElementById('azaan').style.display = "block";
            document.getElementById('db').style.display = "none";
        }
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});
const btn = document.getElementById('log')
btn.addEventListener('click', () => {

    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = './index.html';
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
})