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
                <button>-</button>
            </div>
        )
    }
}

export default Shows