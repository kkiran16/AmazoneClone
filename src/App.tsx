import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Header from './Header'
import './App.css'
import Header from './Header'

function App(): React.ReactElement {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <p>Checkout</p>
          </Route>
          <Route path="/login">
            <p>Login</p>
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
