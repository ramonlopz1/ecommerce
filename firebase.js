// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
  apiKey: "AIzaSyAi8JnpeZxIuO2TiaDp0hnu7-4oqGBUagM",
  authDomain: "ecommerce-rmndev.firebaseapp.com",
  projectId: "ecommerce-rmndev",
  storageBucket: "ecommerce-rmndev.appspot.com",
  messagingSenderId: "423510615060",
  appId: "1:423510615060:web:59e082da6cce859ac13301",
  measurementId: "G-MGB43L12T3",
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

