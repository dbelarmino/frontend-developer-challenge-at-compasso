import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:username" component={Detail} />
    </Switch>
  </BrowserRouter>
)

export default Routes
