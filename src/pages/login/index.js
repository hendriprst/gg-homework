import React from 'react'
import './styles.css'
import { loginUrl } from '../auth'

export const Login = () => {
  return (
    <div className="login">
      <h1 className="title">Listening is 
        <br /><span>Everything</span>
      </h1>
      <a href={loginUrl} className="btn_login">LOGIN</a>
    </div>
  )
}

export default Login;