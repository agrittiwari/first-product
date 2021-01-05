import React from 'react'
import '../../../App.css'


const Member = () => {

    state ={
        name:'',
        portfolio:'',
        github:'',    
    }



    return (
        <div className="member-container">
            <h1>{this.state.name}</h1>
            <h2>{this.state.portfolio}</h2>
            <h2>{this.state.github}</h2>
            
        </div>
    )
}

export default Member
