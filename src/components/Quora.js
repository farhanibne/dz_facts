import React from 'react'
import '../css/Quora.css'
import Feed from './Feed'
import Navbar from './Navbar'


function Quora() {
    return (
        <div className="quora">
            

        
            <Navbar/>
            <div className="quora__content">
                <Feed/>
              
            </div>
        </div>
    )
}

export default Quora
