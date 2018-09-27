import React, { Component, Fragment } from 'react'
import './demo.css'
import Shows from './Shows';
import './App.css'
import Proptypes from 'prop-types'


class TVdemo extends Component {
    static propTypes = {
        Shows: Proptypes.array.isRequired,
        Show: Proptypes.object.isRequired,
        ShowDeleted: Proptypes.func.isRequired,
        saveShow: Proptypes.func.isRequired
    }


    state = {
        name: '',
        rating: '',
        imageUrl: '',

    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value

        })

    }

    showDeleted = () => {
        this.setState({
            show: {
                name: this.state.show.name
            }
        })
    }
    showSelected = () => {
        this.setState({
            name: this.props.Show.name,
            ratingInProgress: this.props.Show.rating,
            imageUrl: this.props.Show.imageurl
        })
    }
    saveShow = () => {
        this.setState({
            name: '',
            rating: '',
            imageUrl: ''
        })

        this.props.saveShow({
            name: this.state.name,
            rating: Number(this.state.rating),
            imageUrl: this.state.imageUrl
        })
    }

    showDeleted = () => {
        this.props.showDeleted()

    }

    handleRatingChange = (event) => {
        this.setState({
            rating: event.target.value
        })
    }

    renderShows = () => {
        return (

            <Shows key={i} name={Show.name} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
        )
    }

    render() {
        return (
            <div>
                <div>
                    <h3>
                        Shows
                    </h3>
                    {/* <Shows name={this.state.show.name} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} saveShowHandler={this.saveShow} /> */}

                    {this.renderShows()}

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