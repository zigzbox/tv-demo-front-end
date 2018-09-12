import React, { Component } from 'react'
import './App.css'
import './demo.css'
import Shows from './Shows';


class TVdemo extends Component {
    state ={
        
    }
    handleOnClick = ()=>{
        this.setState({
            name: event.target.name,
            rating: event.target.rating,
            imgurl: event.target.imgurl

        })
    }

    showDeleted = () => {
        this.props.showDeleted
    }
    showSelected = () => {
        this.props.showSelected
    }
    saveShow = ()=>{
        this.props.saveShow
    }


    render() {
        return (
            <div>
                <Shows allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
                <div className='box'>
                    <ul>
                        <li><label htmlFor='name'>Name:<input type='text'></input></label></li>
                        <li><label htmlFor='rating'>Rating:<input type='text'></input></label></li>
                        <li><label htmlFor='imgurl'>Image URL:<input type='text'></input></label></li>
                        <li><button type='submit' onClick={this.props.saveShow}>Submit</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TVdemo