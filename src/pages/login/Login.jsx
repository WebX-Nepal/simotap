import React from 'react'
import "./login.css"
import { logo, fb_logo, google_logo, phone_logo } from '../../assets/pictures'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
        <div className='loginPage'>

            <div className='nav'>
                <div>
                <Link to="/">
                <img src={logo} alt="logo" className='loginLogo'/> 
                
                </Link>
                
                
                <div className="bar"></div> <h2>Create Account</h2></div>
                <img src={logo} alt="logo" className='loginLogo2' />

            </div>
            <main>
            <Link to="/" style={{textDecoration:"none"}}>
        <button className='buttonss'>Exit</button>
        </Link>
                <h1>CHOOSE A METHOD</h1>
                <div className="loginTypes">
                    <div className="fb_login butn"><img src={fb_logo} alt="fb_logo" /><p>Login with Facebook</p></div>
                    <div className="google_login butn"><img src={google_logo} alt="google_logo" /><p>Login with Google</p></div>
                    <div className="phone_login butn"><img src={phone_logo} alt="phone_logo" /><p>Login with Number</p></div>
                </div>
                <h2>Already have an account?</h2>
            </main>
        </div>
        </>
    )
}

export default Login