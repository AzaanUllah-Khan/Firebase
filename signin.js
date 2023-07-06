import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

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
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

var btn = document.getElementById('btn');
btn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href = './main.html'
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
})
// Initialize Firebase
const googlebtn = document.getElementById("google")
googlebtn.addEventListener("click", () => {
    // signInWithRedirect(auth, provider);
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            window.location.href = "./main.html"
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage);
            // ...
        });

})
