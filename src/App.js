
import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TVdemo from './TVdemo'
import TVdemoPreview from './TVdemoPreview';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/TVdemo' component={TVdemo} />
            <Route path='/TVdemoPreview' component={TVdemoPreview} />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
