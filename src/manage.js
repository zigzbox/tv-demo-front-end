import React, { Component } from 'react'
import './App.css'
import './demo.css'
import Shows from './Shows';


class TVdemo extends Component {
    showDeleted = () => {
        this.props.showDeleted
    }
    showSelected = () => {
        this.props.showSelected
    }



    render() {
        return (
            <div>
                <Shows allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
                <div className='box'>
                    <ul>
                        <li><input type='text'></input></li>
                        <li><input type='text'></input></li>
                        <li><image url='image src'>-</image></li>
                        <button type='submit'>Submit</button>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TVdemo