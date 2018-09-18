import React, { Component, Fragment } from 'react'
import './App.css'
import './demo.css'
import Shows from './Shows';


class TVdemo extends Component {
    state = {
        name: '',
        rating: '',
        imgurl: ''

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
        this.setState({
        show: this.state.name
        })
    }
    renderShows = () => {
        return (
            
                <Shows name={this.state.show.name} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
        )
    }

    render() {
        return (
            <div>
                <div>
                    <h3>
                        Shows
                    </h3>
                    {this.renderShows}

                </div>
                <form>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input id='name' type='text' value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                        <label htmlFor='rating'>Rating:</label>
                        <input id='rating' type='text' value={this.state.rating} />
                    </div>
                    <div>
                        <label htmlFor='imageurl'>Image URL:</label>
                        <input id='imageurl' type='text' value={this.state.imageurl} />
                    </div>

                </form>
                <button onClick={this.saveShow}>Submit</button>
            </div>
        )
    }
}

export default TVdemo