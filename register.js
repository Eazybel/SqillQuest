import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    onAuthStateChanged
  } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBPyG1lI_NmJ7aBP4dwmFSvFL7HX4cdFJ0",
    authDomain: "register-a231d.firebaseapp.com",
    projectId: "register-a231d",
    storageBucket: "register-a231d.appspot.com",
    messagingSenderId: "980304573084",
    appId: "1:980304573084:web:667298566f517265c5f359"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = "en";

  const btn = document.getElementById("btn");
  const hider = document.getElementById("hider");
  const wrapper = document.getElementById("wrapper");
  const header = document.getElementById("header");
  const google = document.getElementById("google");

  btn.onclick = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        header.innerHTML = `Account created successfully`;
        header.style.color = "green";
        btn.style.display = "none";
        hider.style.display = "block";
        wrapper.style.display = "none";
      })
      .catch((error) => {
        header.innerHTML = `Error: ${error.message}`;
        header.style.color = "red";
      });
  };

  hider.onclick = () => {
    window.location = "./index.html";
  };

  const provider = new GoogleAuthProvider();

  google.onclick = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      signInWithRedirect(auth, provider);
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          window.location = "./category.html";
        })
        .catch((error) => {
          header.innerHTML = `Google Sign-in Error: ${error.message}`;
          header.style.color = "red";
        });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location = "./category.html";
    }
  });
