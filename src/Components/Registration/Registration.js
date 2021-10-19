import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'
import useAuth from '../LoginHooks/useAuth';

const Registration = () => {
    const {SigninUsingGoogle}=useAuth()
    return (
<div className='register-form'>
            <div>
            <h2>create Account</h2>
            
            <form onSubmit="">
                <input type="text " placeholder='enter your name:' />
                <br />
                <input type="email" name="email" id=""  placeholder='enter your email'/>
                <br />
                <input type="number" name="number" id=""  placeholder='enter your phone number:'/>
                <br />
                <input type="password" name="password" id="" placeholder='enter your password'/>
                <br />
                <input className='bg-primary m-5' type="submit" value="submit"  ></input>
            </form>
            <p>Already A Account??<Link to='/login'>Login</Link></p>
            <div>-------------or----------</div>
                <button onClick={SigninUsingGoogle} className='bg-primary m-5'>Google Signin</button>
            </div>
        </div>
    );
};

export default Registration;