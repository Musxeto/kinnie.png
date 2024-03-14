// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Import App component
import App from "./App";

// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3m0rVorA3dpFzpMdLbzli9ZZGdR5MZe8",
  authDomain: "muspng-dcaf1.firebaseapp.com",
  projectId: "muspng-dcaf1",
  storageBucket: "muspng-dcaf1.appspot.com",
  messagingSenderId: "49935984600",
  appId: "1:49935984600:web:93a5e098e07a145000f4ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Render the app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
