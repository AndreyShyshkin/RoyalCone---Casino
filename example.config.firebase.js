// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'QWERTY1234567890',
	authDomain: 'name.firebaseapp.com',
	projectId: 'name',
	storageBucket: 'name.appspot.com',
	messagingSenderId: '1234567890',
	appId: '1:1234567890:web:qwerty1234567890',
	measurementId: 'G-QWER1234',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
