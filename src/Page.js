import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from 'pages/NotFound/NotFound'
import Login from 'pages/Login/Login'
import App from './App'

export default () => (
    <Router>
        <Switch>
            <Route
                exact
                path="/"
                render={() => <Redirect to="/app/dashboard/home" />}
            />
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" exact component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)
