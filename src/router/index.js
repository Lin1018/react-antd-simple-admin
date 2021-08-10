import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routerConfig from './routerConfig';
import Login from '../pages/login'
import RouteComponent from '../components/RouteComponent'

class Router extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Switch>
          {
            routerConfig.map(router => {
              return (
                <Route
                  path={router.path}
                  exact={router.exact}
                  key={router.path}
                  component={
                    props => {
                      return  (
                        <RouteComponent {...props} router={router} />
                      )
                    }
                  }
                />
              )
            })
          }
          <Route path="/login" component={Login}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
 
export default Router;