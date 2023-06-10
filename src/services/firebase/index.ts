// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCiqebuXByWWKit5FuHpD2uEkTJhv8S0pA',
  authDomain: 'app-song-music.firebaseapp.com',
  projectId: 'app-song-music',
  storageBucket: 'app-song-music.appspot.com',
  messagingSenderId: '791295894613',
  appId: '1:791295894613:web:671daad80addad66f9a0dc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);
