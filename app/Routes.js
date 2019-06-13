/* eslint flowtype-errors/show-errors: 0 */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import CreateDreamPage from './containers/CreateDreamPage';
import CounterPage from './containers/CounterPage';
import TrackersPage from './containers/TrackersPage';
import TrackerPage from './containers/TrackerPage';
import Navigation from './components/Navgation/Navigation';

class Routes extends Component<Props> {
  render() {
    const { location } = this.props;
    console.log(location.pathname);
    return (
      <App>
        {location.pathname !== '/' ? <Navigation /> : null}
        <Switch>
          <Route path={routes.COUNTER} component={CounterPage} exact />
          <Route path={routes.HOME} component={HomePage} exact />
          <Route path={routes.LOGIN} component={LoginPage} exact />
          <Route path={routes.CREATEDREAM} component={CreateDreamPage} exact />
          <Route path={routes.TRACKERS} component={TrackersPage} exact />
          <Route path={routes.TRACKER} component={TrackerPage} exact />
        </Switch>
      </App>
    );
  }
}

export default withRouter(Routes);
