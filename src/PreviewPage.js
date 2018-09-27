import React, { Component } from 'react'
import Shows from './Shows'
import PropTypes from 'prop-types'


class TVdemoPreview extends Component {
    static propTypes = {
        Shows: PropTypes.array.isRequired,
        Show: PropTypes.object.isRequired
    }

    state = {
        selectedShow: {
            name: '',
            rating: '',
            imageUrl: ''
        }
    }

    showSelected = () => {
        this.setState({
            selectedShow: {
                name: this.props.Show.name,
                rating: this.props.Show.rating,
                imageUrl: this.props.Show.imageUrl
            }
        })
    }

    renderShows = () => {
        const filteredShows = this.props.Shows.filter(
            (Show) => {
                return Show.rating < 5
            }
        )
        return filteredShows.map((Show, i) => {
            return (
                <Shows key={i} name={Show.name} selectHandler={this.showSelected} />
            )
        })
    }

    calculateAvgRating = () => {
        if (this.props.Shows.length < 1) {
            return 0
        } else if (this.props.Shows.length === 1) {
            return this.props.Shows[0].rating
        }
        const sumOfRating = this.props.Shows.reduce(
            (preValue, currentValue) => {
                return (preValue.rating || preValue) + currentValue.rating
            }

        )
        const avgRating = sumOfRating / this.props.Shows.length
        return Math.round(avgRating * 10) / 10
    }


    render() {
        return (
            <main>
                <section>
                    <h2>Shows</h2>
                    <h3>Avg Rating: {this.calculateAvgRating()}</h3>
                    {this.renderTVShows()}
                </section>
                <section>
                    <div>
                        <h2>{this.state.selectedTVShow.name}</h2>
                        <h2>Rating: {this.state.selectedTVShow.rating}</h2>
                    </div>
                    <img src={this.state.selectedTVShow.imageUrl} alt="Preview of TV Show" />
                </section>
            </main>
        )

    }
}

export default TVdemoPreview