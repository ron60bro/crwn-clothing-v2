
import { useEffect } from "react";
import { getRedirectResult ,createUserWithEmailAndPassword } from "firebase/auth";


import { auth,signInWithGooglePopup,signInWithGoogleRedirect} from "../../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
const SignIn=()=>{
    // useEffect(async()=>{
    //     const response= await getRedirectResult(auth)
    //     console.log(response)
    // },[])
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
      const userDocRef= await createUserDocumentFromAuth(user)
    }
    // const logGoogleRedirectUser=async()=>{
    //     const{user}=await signInWithGoogleRedirect();
    //     console.log({user})
    // }
    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup</button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}> Sign in with Google Redirect</button> */}
        </div>
    )
}
export default SignIn