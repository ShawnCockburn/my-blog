import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider
} from "@react-firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGQUxJpA-xtQN993y7bJuPva15qnvLJBw",
  authDomain: "my-blog-da8f5.firebaseapp.com",
  projectId: "my-blog-da8f5",
  storageBucket: "my-blog-da8f5.appspot.com",
  messagingSenderId: "268398050838",
  appId: "1:268398050838:web:a8ae86a10797f80e593f37",
  measurementId: "G-Z1CQ7J4TX3"
};

const Auth = props => (
  <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
    {props.children}
  </FirebaseAuthProvider>
);

export default Auth;