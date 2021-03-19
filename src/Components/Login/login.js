import React, { useContext, useState } from "react";
import "./LoginForm.css";
import googleIcon from "../../images/google-icon.svg";
import fbIcon from "../../images/facebook-3.svg";
import firebase from "firebase"
import "firebase/auth"
import {firebaseConfig} from "./firebase.config"
import { UserContext } from "../../App";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [isNewUser, setIsNewUser] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleFeildChange = (e) => {
        let isFeildValid = true;
        if (e.target.name === "email") {
            isFeildValid = /\S+@\S+\.\S+/.test(e.target.value);
            setIsEmailValid(isFeildValid);
        }
        if (e.target.name === "password") {
            isFeildValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(e.target.value);
            setIsPasswordValid(isFeildValid);
        }
        if(isEmailValid && isPasswordValid){
            const newUserInfo = {...user}
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
    };


    // create account with password and email

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (isEmailValid && isPasswordValid && user.email && user.password) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    const { displayName, email, photoURL } = result.user;
                    const signedInUser = {
                        isSignedIn: true,
                        displayName: displayName,
                        email: email,
                        photoURL: photoURL,
                    };
                    setUser(signedInUser);
                    setLoggedInUser(signedInUser);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });
        }
    }





















    // sign in with google 
    const handleGoogleSignIn = () => {
        const GoogleProvider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                const {displayName, email, photoURL} = result.user
                const signedInUser = {
                    isSignedIn: true,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                };
                setUser(signedInUser)
                setLoggedInUser(signedInUser)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(error)
            });
    }


    // sign in with facebook 
    const handleFacebookSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }




    return (
        <div id="login-page">
            <div className="form-area">
                <h4>Login</h4>
                <form onClick={handleSubmitForm}>
                    <input name="email" onChange={handleFeildChange} className="form-control" type="text" placeholder=" Email" required />
                    {isEmailValid || <p className=" small text-danger">Enter a valid email</p>}

                    <input name="password" onChange={handleFeildChange} className="form-control" type="password" placeholder="Password" required />
                    {isPasswordValid || <p className=" small text-danger">password must contain 6 carachter and atleast 1 digit </p>}

                    <input className="form-control " type="submit" />

                    <p className="or-divider">or</p>

                    <div className="login-icons">
                        <img onClick={handleGoogleSignIn} src={googleIcon} alt="google icon" />
                        <img onClick={handleFacebookSignIn} src={fbIcon} alt="facebook icon" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
