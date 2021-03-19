import React, { useState } from "react";
import "./LoginForm.css";
import googleIcon from "../../images/google-icon.svg";
import fbIcon from "../../images/facebook-3.svg";
import firebase from "firebase"
import "firebase/auth"



const Login = () => {
    const [isNewUser, setIsNewUser] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
    });


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


    // sign in with google 
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
    }



    return (
        <div id="login-page">
            <div className="form-area">
                <h4>Login</h4>
                <form>
                    <input name="email" onChange={handleFeildChange} className="form-control" type="text" placeholder=" Email" />
                    {isEmailValid || <p className=" small text-danger">Enter a valid email</p>}

                    <input name="password" onChange={handleFeildChange} className="form-control" type="password" placeholder="Password" />
                    {isPasswordValid || <p className=" small text-danger">password must contain 6 carachter and atleast 1 digit </p>}

                    <input className="form-control " type="submit" />

                    <p className="or-divider">or</p>

                    <div className="login-icons">
                        <img onClick={handleGoogleSignIn} src={googleIcon} alt="google icon" />
                        <img src={fbIcon} alt="facebook icon" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
