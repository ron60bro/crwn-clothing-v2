import {initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import{
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
}from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDG_Xn3CGLBnyrsOj0NBHNlugG3FtbTSsk",
    authDomain: "crwn-clothing-db-811be.firebaseapp.com",
    projectId: "crwn-clothing-db-811be",
    storageBucket: "crwn-clothing-db-811be.appspot.com",
    messagingSenderId: "493244233458",
    appId: "1:493244233458:web:2f5dddeffded4148ed826b",
    measurementId: "G-2ZHDB361ME"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app)
  const provider= new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  })
  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)

  export const db=getFirestore();

  export const createUserDocumentFromAuth=async(userAuth)=>{
        const userDocRef=doc(db,"users",userAuth.uid)
        console.log(userDocRef)
        const userSnapshot= await getDoc(userDocRef)
        console.log(userSnapshot)
        // console.log(userSnapshot.exists())
        if(!userSnapshot.exists()){
           const{displayName,email}=userAuth ;
           const createdAt= new Date()
           try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
           }catch(error){
                console.log(error,"error")
           }
        }
        return userDocRef;
  }