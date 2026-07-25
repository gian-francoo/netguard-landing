import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPRJdsKorgobf0-ng70f4rj1j0Eo6H-gw",
  authDomain: "netguard-landing.firebaseapp.com",
  projectId: "netguard-landing",
  storageBucket: "netguard-landing.firebasestorage.app",
  messagingSenderId: "404312478338",
  appId: "1:404312478338:web:1ff5f4793b868d49865a9b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);