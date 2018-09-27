import React, { Component } from 'react'
import Shows from './Shows'
import PropTypes from 'prop-types'


class TVdemoPreview extends Component {
    static propTypes ={
        Shows: PropTypes.array.isRequired,
        Show: PropTypes.object.isRequired
    }

    state ={
        selectedShow:{
            name: '',
            rating: '',
            imageUrl: ''
        }
    }

    showSelected = () =>{
        this.setState({
            selectedShow:{
                name: this.props.Show.name,
                rating: this.props.Show.rating,
                imageUrl: this.props.Show.imageUrl
            }
        })
    }

    renderDelete = () => {
        if (this.props.allowDelete === true) {
            return (
                <button onClick={this.props.deleteHandler}>-</button>

            )
        }
    }

    

    render() {
        return (
            <div>

                <main>
                    <Shows />
                </main>
            </div>
        )

    }
}

export default TVdemoPreview