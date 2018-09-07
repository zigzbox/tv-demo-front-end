import React, { Component } from 'react'
import NavSite from './NavSite';
import './App.css'
import TVdemoPreview from './TVdemoPreview';

class TVdemo extends Component {


    render() {
        return (
            <div>
                <TVdemoPreview selectHandler={this.showSelected} deleteHandler={this.showDeleted} />               
                 <header>
                    <NavSite />
                </header>
                <div>
                    <h2>Shows</h2>
                    <ul>
                        <li>
                            <label>Thunder Cats *NEW*</label>
                            <button onClick={this.props.selectHandler}></button>
                        </li>
                        <li>
                            <label>Gary and his demons</label>
                            <button onClick={this.props.selectHandler}></button>
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