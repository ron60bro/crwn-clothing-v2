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
  const googleProvider= new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:"select_account"
  })
  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider)
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider)
  export const db=getFirestore();

  export const createUserDocumentFromAuth=async(userAuth,additionalInformation={})=>{

    // if(!userAuth) return;
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
                createdAt,
                ...additionalInformation
            })
           }catch(error){
                console.log(error,"error")
           }
        }
        return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;
       
    
    return await createAuthUserWithEmailAndPassword(auth,email,password) 

  }