import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Shows extends Component {

    renderDelete = () => {

        if (this.props.allowDelete === true) {
            return (
                <button onClick={this.props.deleteHandler}>-</button>
            )
        }
    }
    render() {
        return (
            <div className='column'>
                {this.renderDelete()}
                <button onClick={this.props.selectHandler} />
            </div>
        )
    }
}

export default Shows