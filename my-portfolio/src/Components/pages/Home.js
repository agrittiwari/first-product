import React, { Fragment } from 'react'
import Nav from '../Nav'
import '../../App.css'


const Home = () => {
    return (
        <Fragment>
         <Nav/>

             <div style={container}>
         <button className="btn-1 ">Join</button>
                  </div>
        

        </Fragment>
    )
}

const container= {
    margin: 30,
    height: 80,
    fontSize:30,
  }


export default Home