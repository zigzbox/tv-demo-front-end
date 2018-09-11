import React, { Component } from 'react'

class Shows extends Component {
    
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
             {this.renderDelete()}
            </div>
        )
    }
}

export default Shows