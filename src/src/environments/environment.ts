// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB7ZYvi14uLieDzPSEfRGmCS-xPuwB_lNc',
  authDomain: 'socialmediamusic-a95e5.firebaseapp.com',
  databaseURL: 'https://socialmediamusic-a95e5-default-rtdb.firebaseio.com',
  projectId: 'socialmediamusic-a95e5',
  storageBucket: 'socialmediamusic-a95e5.appspot.com',
  messagingSenderId: '762498216990',
  appId: '1:762498216990:web:0f01b9130f41cfb1ec2a0f',
  measurementId: 'G-T761MH88HL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
