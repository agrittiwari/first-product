import React from 'react'
import "../../App.css"

import {Link } from 'react-router-dom'




 const login = () => {
    return (
        <div>
          <nav className="navbar bg-dark">
     
      <ul>
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/register" >Register</Link></li>
        
      </ul>
    </nav>
    <section className="container">
      <div className="alert alert-danger">
        Invalid credentials
      </div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" action="dashboard.html">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register" >Sign Up</Link>
      </p>
    </section>
    
        </div>
    )
}
 
export default login