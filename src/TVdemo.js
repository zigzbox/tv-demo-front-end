import React, { Component } from 'react'
import NavSite from './NavSite';
import './App.css'

class TVdemo extends Component {
    render() {
        return (
            <div>
                <header>
                    <NavSite/>
                </header>
                <div>
                    <h2>Shows</h2>
                    <ul>
                        <li>
                            <label>Thunder Cats *NEW*</label>
                            <button></button>
                        </li>
                        <li>
                            <label>Gary and his demons</label>
                            <button></button>
                        </li>
                    </ul>
                </div>
                <div>
                    <preview></preview>
                </div>

            </div>
        )
    }
}

export default TVdemo