import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import Bundle from './Bundle'
import Loading from 'components/Loading/Loading'

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home'
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1'
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter'
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo'
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound'
import Login from 'bundle-loader?lazy&name=notFound!pages/Login/Login'

const asyncComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
)

export default class Routers extends Component {
  render () {
    return (
      <Switch>
        <Route
          exact
          path="/app/dashboard/home"
          component={asyncComponent(Home)}
        />
        <Route path="/app/self/page1" component={asyncComponent(Page1)} />
        <Route path="/app/self/counter" component={asyncComponent(Counter)} />
        <Route path="/app/self/userinfo" component={asyncComponent(UserInfo)} />
        <Route path="/app/self/login" component={asyncComponent(Login)} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    )
  }
}
