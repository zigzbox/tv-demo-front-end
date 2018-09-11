import React, { Component } from 'react'
import './App.css'
import './demo.css'
import Shows from './Shows';


class TVdemo extends Component {
    state = {

    }
    deleteHandler = (event) => {
        this.setState({

        })
    }




    render() {
        return (
            <div>
              
                <Shows allowDelete={true}/>
            </div>
        )
    }
}

export default TVdemo