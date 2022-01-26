// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB-sGCSXrKcP1ZiZ909qAAnZi-DXoax5As',
	authDomain: 'chatz-ea610.firebaseapp.com',
	projectId: 'chatz-ea610',
	storageBucket: 'chatz-ea610.appspot.com',
	messagingSenderId: '528316341999',
	appId: '1:528316341999:web:615ff8fe5fb1e85a1f051a',
	measurementId: 'G-JZW7219XHC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
