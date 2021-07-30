import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBKJntEl9Jy4rvFbdpuaoqFDIZ_GGB1wt4",
  authDomain: "my-b9d50.firebaseapp.com",
  projectId: "my-b9d50",
  storageBucket: "my-b9d50.appspot.com",
  messagingSenderId: "846812325527",
  appId: "1:846812325527:web:4a6c3963ec689318ab6bd2"
};
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth}