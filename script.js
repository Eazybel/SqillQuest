import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// 🔧 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBPyG1lI_NmJ7aBP4dwmFSvFL7HX4cdFJ0",
  authDomain: "register-a231d.firebaseapp.com",
  projectId: "register-a231d",
  storageBucket: "register-a231d.appspot.com", // 🔁 fixed incorrect domain
  messagingSenderId: "980304573084",
  appId: "1:980304573084:web:667298566f517265c5f359"
};

// 🚀 Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";

// 📨 Email/Password Sign-In
document.getElementById("btn").onclick = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location = "./category.html";
    })
    .catch((error) => {
      console.error("Email Sign-In Error:", error.code, error.message);
      alert("Wrong Credential Try Again")
    });
};

// ⚙️ Google Auth Setup
const provider = new GoogleAuthProvider();
const google1 = document.getElementById("google1");

google1.onclick = () => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {
    signInWithRedirect(auth, provider);
  } else {
    signInWithPopup(auth, provider)
      .then((result) => {
        window.location = "./category.html";
      })
      .catch((error) => {
        console.error("Popup Auth Error:", error.code, error.message);
      });
  }
};

// 🔁 Handle Redirect Result (for mobile users)
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      window.location = "./category.html";
    }
  })
  .catch((error) => {
    console.error("Redirect Error:", error.code, error.message);
  });
