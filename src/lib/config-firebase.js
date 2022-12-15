import { initializeApp } from './export.js';

const firebaseConfig = {
  apiKey: "AIzaSyA6RHRqWYHtHSaUskAadYJVU4xP9G9QTCg",
  authDomain: "empire-movie.firebaseapp.com",
  projectId: "empire-movie",
  storageBucket: "empire-movie.appspot.com",
  messagingSenderId: "512913223035",
  appId: "1:512913223035:web:a7b4b7bc95fcaf3d4ae1de"
};

export const app = initializeApp(firebaseConfig);