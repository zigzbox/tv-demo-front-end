import React, { Component } from 'react'
import './App.css'
import './demo.css'
import Shows from './Shows';


class TVdemo extends Component {
    state = {
        name: ''

    }
    // handleOnClick = ()=>{
    //     this.setState({
    //         name: event.target.name,
    //         rating: event.target.rating,
    //         imgurl: event.target.imgurl

    //     })
    //  }
    handleNameChange = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({
            name: event.target.value

        })

    }

    showDeleted = () => {
        this.props.showDeleted
    }
    showSelected = () => {
        this.props.showSelected
    }
    saveShow = () => {
        this.props.saveShow
    }


    render() {
        return (
            <div>
                <Shows allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />

                <form className='box'>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input id='name' type='text' value={this.state.name} onChange={this.handleNameChange} />
                    </div>

                </form>
                <button onClick={this.saveShow}>Submit</button>
            </div>
        )
    }
}

export default TVdemo