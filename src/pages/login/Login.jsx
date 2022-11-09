import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className="cover">
      <h1>Admin Login</h1>
      <div className="textInput">
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      </div>
    </div>
  )
}

export default Login