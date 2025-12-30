import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD5rgYt0MW-Bw4dDbiewtkKDhAymh_Ryx4",
  authDomain: "netflix-gpt-31e3c.firebaseapp.com",
  projectId: "netflix-gpt-31e3c",
  storageBucket: "netflix-gpt-31e3c.firebasestorage.app",
  messagingSenderId: "891096850170",
  appId: "1:891096850170:web:52e91660c9e641653df343"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);