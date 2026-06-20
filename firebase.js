import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getDatabase,
  ref,
  push
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "afinanceira-copa.firebaseapp.com",
  databaseURL: "https://afinanceira-copa-default-rtdb.firebaseio.com",
  projectId: "afinanceira-copa",
  storageBucket: "afinanceira-copa.firebasestorage.app",
  messagingSenderId: "1093540254408",
  appId: "1:1093540254408:web:1d9d8d41a4aa373ee1cbfd"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export { ref, push };