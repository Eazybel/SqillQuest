
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAuth,  signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBPyG1lI_NmJ7aBP4dwmFSvFL7HX4cdFJ0",
    authDomain: "register-a231d.firebaseapp.com",
    projectId: "register-a231d",
    storageBucket: "register-a231d.firebasestorage.app",
    messagingSenderId: "980304573084",
    appId: "1:980304573084:web:667298566f517265c5f359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
auth.languageCode="en"
const btn=document.getElementById("btn")
btn.onclick=(e)=>{
    e.preventDefault()
      const email=document.getElementById("email")
      const password=document.getElementById("password")
       signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
        window.location="./category.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }
 const provider=new GoogleAuthProvider()
  const google1=document.getElementById("google1")
  google1.onclick=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location="./category.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }