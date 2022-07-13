import { useState } from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import FormInput from "../components/form-input/form-input.component";
import "./sign-up-form.styles.scss"
import Button from "../components/button/button.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
// import FormInput from "../components/form-input/form-input.component";
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields, "fields");

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }




  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("password do not match");
      return;
    }

    try{
       
        const {user}=await createUserWithEmailAndPassword(email,password)
            // console.log(response,"response")
            await createUserDocumentFromAuth(user,{displayName});
        resetFormFields()
    }catch(error){
            if(error.code==='auth/email-already-in-use'){
                alert('Cannot create user, email already in use')
            }
            console.log("user creation encounter an error",error)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="'sign-up-container">
        <h2>Don't have an account?</h2>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <FormInput
        label="Display Name"
        inputOptions={{
            required:true,
            type:"text",
            onChange:handleChange,
            name:"displayName",
            value:displayName
        }}
         
        />
        <label>Email</label>
        <FormInput
        inputOptions={{
            required:true,
            type:"email",
            onChange:handleChange,
            name:"email",
            value:email
        }}
         
        />
       
     
        <label>Password</label>
        <FormInput
        inputOptions={{
            required:true,
            type:"password",
            onChange:handleChange,
            name:"password",
            value:password
        }}
         
        
        />
        <label>Confirm Password</label>
        <FormInput
        inputOptions={{
            required:true,
            type:"password",
            onChange:handleChange,
            name:"confirmPassword",
            value:confirmPassword
        }}
         
        />
       
        <Button buttonType='inverted'type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
