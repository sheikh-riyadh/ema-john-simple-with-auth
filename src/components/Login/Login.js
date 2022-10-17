import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Login.css'

const Login = () => {
    return (
        <div className='login-form-container'>
            <h1 className='form-title'>Please login</h1>
            <form action="">
                <div className="form-controler">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="form-controler">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p className='create-account'>New ema john? <Link to='/sign-up'>Create New Account</Link></p>
                <span className='divider'> Or </span>
            </form>
            <button className='auth-google'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Continue with google</button>
        </div>
    );
};

export default Login; <h1>This is login</h1>