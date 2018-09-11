import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import TVdemo from './manage'
import TVdemoPreview from './PreviewPage';
import './demo.css'
import NavSite from './NavSite';
class App extends Component {
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
