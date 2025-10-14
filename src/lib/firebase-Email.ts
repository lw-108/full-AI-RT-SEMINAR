import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCa9t7opZ5fs7zbxZEJp_Qxb7mirQspQ4Y",
    authDomain: "seminar-emails-2affe.firebaseapp.com",
    projectId: "seminar-emails-2affe",
    storageBucket: "seminar-emails-2affe.firebasestorage.app",
    messagingSenderId: "849432321693",
    appId: "1:849432321693:web:77369193a18ddf5c8c7e74",
    measurementId: "G-24M31JT12T"
};

// Initialize Firebase with a unique name for the second app
const emailApp = initializeApp(firebaseConfig, "email-app");
const analytics = getAnalytics(emailApp);

// Export Firestore instance for email storage
export const emailDb = getFirestore(emailApp);

// Export the app instance if needed elsewhere
export default emailApp;