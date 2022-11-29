import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function LoginPage({isLoggedIn, setIsLoggedIn, setUserInformation}){
    const [errors,setErrors] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) navigate('/');
    }, [isLoggedIn]);

    const loginUser = useCallback((e) => {
        e.preventDefault();
    }, []);
    
    const signUpUser = useCallback(
        (e) => {
            e.preventDefault();
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setIsLoggedIn(true);
                    setUserInformation({
                        email: user.email,
                        displayName: user.displayName,
                        uid: user.uid,
                        accessToken: user.accessToken,
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.warn({error, errorCode, errorMessage});
                    setErrors(errorMessage);
                });
    }, [setIsLoggedIn, setUserInformation]);
         

    return(
    <>
    <Header setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation}/>    
    <div className="PageWrapper">
        <h1>Login</h1>
        <LoginForm loginUser = {loginUser}/>
    </div>
    </>
    );
}

export default LoginPage;