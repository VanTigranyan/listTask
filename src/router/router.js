import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListContainer from '../containers/listContainer';

class Router extends React.Component {

  render() {
    return (
    <BrowserRouter>

        <Switch>
          <Route exact path="/" component={ ListContainer } />
        </Switch>

    </BrowserRouter>
  )

  }
}



export default Router;
