import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import TVdemo from './manage'
import TVdemoPreview from './PreviewPage';
import './demo.css'
import NavSite from './NavSite';
class App extends Component {
  state = {
    Show: {
      name: '',
      rating: '',
      imageUrl: ''
    },
    Shows: []
  }

  showDeleted = () => {
    this.setState({
      Show: {
        name: '',
        rating: '',
        imageUrl: ''
      }
    })
  }

  saveShow = (showToSave) => {
    this.setState(
      (prevState) => ({
        Shows: [...prevState.Shows, {
          name: showToSave.name,
          rating: showToSave.rating,
          imageUrl: showToSave.imageUrl
        }]
      })
    )
  }

  renderManage = () => {
    return (<manage tvShows={this.state.tvShows} tvShow={this.state.tvShow} tvShowDeleted={this.tvShowDeleted} saveTVShow={this.saveTVShow} />)
  }

  renderTVdemoPreview = () => {
    return (<TVdemoPreview tvShows={this.state.tvShows} tvShow={this.state.tvShow} />)
  }
  render() {
    return (
      <div>
        <header>
          <NavSite />
        </header>
        <Switch>
          <Route exact path='/' component={TVdemo} />
          <Route path='/TVdemoPreview' component={TVdemoPreview} />
        </Switch>



      </div>
    )
  }
}

export default App;
