import { Console } from "console";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-lhqrEwH8KNBTqSvVHAyTGrtgCATE30k",
  authDomain: "test-eba80.firebaseapp.com",
  projectId: "test-eba80",
  storageBucket: "test-eba80.appspot.com",
  messagingSenderId: "369797308376",
  appId: "1:369797308376:web:65dee5555417a5debd9cad"
};
const app = initializeApp(firebaseConfig);

document.querySelector("p#des").textContent = "Click to see the problems";
document.querySelector("button").addEventListener("click", () => {
    (async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {reason: "getsolved"});
        document.querySelector("p#output").textContent = `${response.length} solved problems`;
      })();
})

const auth = getAuth();
const signUpForm = document.querySelector("form#signup-form");
const signInForm = document.querySelector("form#signin-form");

function signUp() {
  const password = signUpForm.querySelector("password").textContent;
  const email= signUpForm.querySelector("email").textContent;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Sign-up successfully");
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode+":"+errorMessage);
      alert(errorMessage);
    });
}

function signIn() {
  const password = signInForm.querySelector("password").textContent;
  const email= signInForm.querySelector("email").textContent;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode+":"+errorMessage);
    alert(errorMessage);
  });

}