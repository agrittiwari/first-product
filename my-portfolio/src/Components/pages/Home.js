import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'



const Home = () => {
    return (
        <Fragment>
            <nav className="navbar bg-dark">
     
      <ul>
       
        <li><Link to="/register" >Register</Link></li>
        <li><Link to="/login" >Login</Link></li>
      </ul>
    </nav>
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
                            Build your profile/portfolio, your personal web space , 
                            your personal showcase
          </p>
          <div className="buttons">
                            <Link to="/register" className="btn-1 btn-primary">Make your Portfolio</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
            

           
        

        </Fragment>
    )
}

// const container= {
//     margin: 30,
//     height: 80,
//     fontSize:30,
//   }


export default Home