import React, { useState } from 'react'
import "../../App.css"

import {Link } from 'react-router-dom'


const Register = () =>
{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2:''
  })

  const {name, email, password, password2} = formData
 
  const onSubmit= e => 
  {
    if (password !== password2) {
      alert('password do not match')
    }
    setFormData({ ...formData, [e.target.name]:[e.target.value]});
 }
    return (
        <div>
    <nav className="navbar bg-dark">
     <ul>
        <li><Link to="/" >HomePage</Link></li>
        <li><Link to="/login" >Login</Link></li>
      </ul>
    </nav>
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" >
        <div className="form-group">
              <input type="text" placeholder="Name" name="name"
                value= {name}    onChange={onSubmit}  required />
        </div>
        <div className="form-group">
              <input type="email" placeholder="Email Address"
          value={email} onChange={onSubmit}     name="email" />
          
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={onSubmit}    
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={onSubmit}    
          />
        </div>
        <input type="submit" className="btn btn-primary" onSubmit={onSubmit} value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login" >Sign In</Link>
      </p>
    </section>
            
        </div>
    )
}

export default Register
