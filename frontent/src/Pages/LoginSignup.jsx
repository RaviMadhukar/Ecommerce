import React from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Your Name'/>
          <input type="emsil" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continue, I agree to the term of use & privacy policy.</p>
        </div>
        <button>Continue</button>
        <p className="logingsignup-login">
           Already have an account? <span>Login Here</span>
        </p>
      </div>
    </div>
  )
}
