import React, { useContext, useState } from "react";
import "./LoginForm.css";
import googleIcon from "../../images/google-icon.svg";
import fbIcon from "../../images/facebook-3.svg";
import { UserContext } from "../../App";
import { createAccoutWithPassword, loginFrameworkInit, loginWithPassword, signInwithFacebook, signInWithGogle, updateUserInfo } from "./loginManager";
import { useHistory, useLocation } from "react-router";


const Login = () => {
    const [isNewUser, setIsNewUser] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isPasswordMatch, setIsPasswordMatch ] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        retypePassword:""
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    loginFrameworkInit();

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
        if (e.target.name === "retypePassword"){
            if(user.password === e.target.value){
                setIsPasswordMatch(true)
            }else if(user.password !== e.target.value){
                setIsPasswordMatch(false)
            }
        }
            if (isEmailValid && isPasswordValid) {
                const newUserInfo = { ...user };
                newUserInfo[e.target.name] = e.target.value;
                setUser(newUserInfo);
            }
    };

    //Handle form submit
    const handleFormSubmit = (e) => {
        if (isNewUser && isEmailValid && isPasswordValid && user.email && user.password && isPasswordMatch) {
            createAccoutWithPassword(user.email, user.password).then((res) => {
                updateUserInfo(user.name);
                res &&
                    loginWithPassword(user.email, user.password).then((res) => {
                        setResponse(res, true);
                    });
            });
        }
        if (!isNewUser && isEmailValid && isPasswordValid && user.email && user.password) {
            loginWithPassword(user.email, user.password)
                .then((res) => {
                    setResponse(res,true)
                })
        }
        e.preventDefault();
    };

    // Handle Google sign in
    const handleGoogleSignIn = () => {
        signInWithGogle()?.then((res) => {
            setResponse(res, true);
        });
    };

    // handle facebook sign in
    const handleFbSignIn = () => {
        signInwithFacebook()?.then((res) => {
            setResponse(res, true);
        });
    };

    // handle response
    const setResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        };
    };

    
    return (
        <div id="login-page">
            <div className="form-area">
                <h4>Login</h4>
                <form onSubmit={handleFormSubmit}>
                    {isNewUser && (
                        <>
                            <input name="name" onChange={handleFeildChange} className="form-control" type="text" placeholder=" Name" required />
                        </>
                    )}

                    <input name="email" onChange={handleFeildChange} className="form-control" type="text" placeholder=" Email" required />
                    {isEmailValid || <p className=" small text-danger">Enter a valid email</p>}

                    <input name="password" onChange={handleFeildChange} className="form-control" type="password" placeholder="Password" required />
                    {isPasswordValid || <p className=" small text-danger">password must contain 6 carachter and atleast 1 digit </p>}

                    {isNewUser && (
                        <>
                            <input name="retypePassword" onChange={handleFeildChange} className="form-control" type="text" placeholder=" Re-type Password" required />
                            {!isPasswordMatch && <span className="small text-danger">password Doesn't Match</span> }
                        </>
                    )}

                    <input className="form-control " value={isNewUser?"Register":"login"} type="submit" />
                    {loggedInUser?.error && <span className="small text-danger">{loggedInUser?.errorMessage}</span>}
                </form>
                <p className="or-divider">or</p>
                <div className="login-icons">
                    <img onClick={handleGoogleSignIn} src={googleIcon} alt="google icon" />
                    <img onClick={handleFbSignIn} src={fbIcon} alt="facebook icon" />
                    {isNewUser ? (
                        <p className="switch">
                            Already have a account <span onClick={() => setIsNewUser(false)}> login </span>{" "}
                        </p>
                    ) : (
                        <p className="switch">
                            New User <span onClick={() => setIsNewUser(true)}>sign up</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
