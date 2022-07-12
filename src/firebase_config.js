import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA-unF_rOC7wF5RhjAEwyP-5CSHKS2UpPA",
  authDomain: "fir-tutorial-727fa.firebaseapp.com",
  projectId: "fir-tutorial-727fa",
  storageBucket: "fir-tutorial-727fa.appspot.com",
  messagingSenderId: "204265436472",
  appId: "1:204265436472:web:559e06e9137e8bab097dcd",
  measurementId: "G-NTWWD7TTQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);