import React, { Component } from 'react'
import Shows from './Shows';

class TVdemoPreview extends Component {

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