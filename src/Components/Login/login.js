import React from 'react';
import { useForm } from 'react-hook-form';
import "./LoginForm.css"

const Login = () => {
    const { register, handleSubmit , errors } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div id="login-page">
            <div className="form-area">
                <h4>Login</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control " name="firstName" ref={register({ required: true, maxLength: 20 })} placeholder=" Email" />
                    {errors.firstName && "First name is required"}
                    <input className="form-control " name="age" type="password" ref={register({ min: 18, max: 99 })} placeholder="Password" />
                    <input className="form-control " type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;