//coded by rajmal
import React from 'react'
import "./SignIn.css"

function SignIn() {
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input  type="email" placeholder="Email" />
        <input  type="password" placeholder="Password" />
        <button type="submit">
          Sign In
        </button>
        <h1>OR</h1>
        <input type="text" placeholder="Name" />
        <input  type="email" placeholder="Email" />
        <input  type="password" placeholder="Password" />
        <button type="submit">
          Sign Up
        </button>
        </form>
        <div className="link">
          <h4>Engilsh(USA)</h4>
          <ul>
            <li>Help</li>
            <li>Privacy</li>
            <li>Terms</li>
            </ul>
        </div>
    </div>
  )
}

export default SignIn
