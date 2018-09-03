import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class NavSite extends Component {
    render(){
        return(
            <nav>
                <Link to='/TVdemoPreview'>Preview</Link>
                <Link to='/TVdemo'>Shows</Link>
            </nav>
        )
    }
}

export default NavSite