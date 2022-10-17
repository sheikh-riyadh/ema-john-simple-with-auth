import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='login-form-container'>
            <h1 className='form-title'>Please Sign Up</h1>
            <form action="">
                <div className="form-controler">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="form-controler">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="form-controler">
                    <label htmlFor="confirm">Confirm Passowrd</label>
                    <input type="password" name="confirm" />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p className='create-account'>Already have an account? <Link to='/login'>Login</Link></p>
                <span className='divider'> Or </span>
            </form>
            <button className='auth-google'><FontAwesomeIcon icon={faShoppingCart} /> Continue with google</button>
        </div>
    );
};

export default SignUp;