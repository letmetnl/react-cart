import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJHjBB0gyYvgye6d1n4H6K2ziUDtIZbRY",
  authDomain: "cart-f7c11.firebaseapp.com",
  databaseURL: "https://cart-f7c11.firebaseio.com",
  projectId: "cart-f7c11",
  storageBucket: "cart-f7c11.appspot.com",
  messagingSenderId: "1030343983605",
  appId: "1:1030343983605:web:198d3b408f3917ae36e0bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
