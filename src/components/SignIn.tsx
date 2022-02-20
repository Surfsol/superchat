import firebase from 'firebase/app'
import React from "react";

interface Props{
    signInGoogle: () => void
}

const SignIn: React.FC<Props> = (signInGoogle) => {

    return(
        <div onClick={()=>{signInGoogle}}> Sign in with Google </div>
    )
}
export default SignIn