import React, { Component } from 'react'
import Shows from './Shows';

class TVdemoPreview extends Component {
    
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
              
                <main>
                    <Shows/>
                </main>
            </div>
        )

    }
}

export default TVdemoPreview