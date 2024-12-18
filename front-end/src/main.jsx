import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE9Xx9Aozo7RkynDYvT90DxWyx_0UVaMU",
  authDomain: "full-stack-react-502b4.firebaseapp.com",
  projectId: "full-stack-react-502b4",
  storageBucket: "full-stack-react-502b4.firebasestorage.app",
  messagingSenderId: "238544393228",
  appId: "1:238544393228:web:4431ad2f7ac74ad614ca29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
