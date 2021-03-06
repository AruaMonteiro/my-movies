import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Movies from './Movies/Movies';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Movies} />
    </Switch>
  )
}

export default App