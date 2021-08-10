import { Route, Switch } from 'react-router-dom'
import Container from './Container'

function RouteComponent(props) {
  console.log(props)
  return (
    <Switch>
      {
        <Route component={
          () => {
            return (
              <Container {...props} component={props.router.component}></Container>
            )
          }
        } />
      }
    </Switch>
  );
}
 
export default RouteComponent;