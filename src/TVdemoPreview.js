import React, { Component } from 'react'
import NavSite from './NavSite';
import './App.css'

class TVdemoPreview extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {
            return (
                <button>-</button>
                
            )
        }
    }
    render() {
        return (
            <div>
                <header>
                    <NavSite />
                </header>
                <div>
                    <h2>SHOWS</h2>
                    <p>Preview location place holder.</p>
                    <ul>
                        <li>
                            <label>Thunder Cats *NEW*</label>
                            <button onClick={this.props.selectHandler}>-</button>
                        </li>
                        <li>
                            <label>Gary and his demons</label>
                            <button onClick={this.props.selectHandler}>-</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>SHOWNAME</h1>
                    <h1>RATING</h1>
                    <img src="https://static.vrv.co/imgsrv/display/thumbnail/640x360/catalog/mondo/d35d9647ba1fe3e79521a75628e4b23e.jpg" />
                </div>

            </div>
        )

    }
}

export default TVdemoPreview