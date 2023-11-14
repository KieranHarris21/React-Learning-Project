// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =  { apiKey            : "AIzaSyA0aEM6KCYQFFZXzoRNb8QjXV_0-5V9uXE"
                        , authDomain        : "test-project-88648.firebaseapp.com"
                        , projectId         : "test-project-88648"
                        , storageBucket     : "test-project-88648.appspot.com"
                        , messagingSenderId : "283598845234"
                        , appId             : "1:283598845234:web:5902e4ab274aac6ce2d32b"
                        };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);