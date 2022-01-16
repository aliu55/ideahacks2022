// note: using the new Modular SDK (v9) syntax
// which does have the firebase.database() syntax
// as shown in most vid tutorials but instead uses a new syntax 

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCncpJIQxwGf9CvOw1uWm7L9W6i9JJevCQ",
  authDomain: "fir-test-506f8.firebaseapp.com",
  databaseURL: "https://fir-test-506f8-default-rtdb.firebaseio.com",
  projectId: "fir-test-506f8",
  storageBucket: "fir-test-506f8.appspot.com",
  messagingSenderId: "129532984249",
  appId: "1:129532984249:web:c1f8714b462ed3340e1468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;