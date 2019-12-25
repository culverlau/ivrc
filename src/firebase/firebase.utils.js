import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnES70zzFHBc2yuqDmjrDFiOEGb5DEze0",
  authDomain: "shop-project-ecfbc.firebaseapp.com",
  databaseURL: "https://shop-project-ecfbc.firebaseio.com",
  projectId: "shop-project-ecfbc",
  storageBucket: "shop-project-ecfbc.appspot.com",
  messagingSenderId: "848282889502",
  appId: "1:848282889502:web:4ac86a55d68463a40f2d0f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase