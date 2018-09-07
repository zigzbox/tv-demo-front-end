import React, { Component } from 'react'
import NavSite from './NavSite';
import './App.css'
import Shows from './Shows';

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
                            <button onClick={Shows}></button>
                        </li>
                        <li>
                            <label>Gary and his demons</label>
                            <button  onClick={Shows}></button>
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