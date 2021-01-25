import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCandidates } from '../store/actions';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/home';
import EmptyRoute from '../components/empty-route/emptyRoute';

class App extends Component {
  componentDidMount() {
    this.props.getCandidates();
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <div className="app__layout">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/past-trials"
              render={() => <EmptyRoute title="Past trial" />}
            />
            <Route
              path="/how-it-works"
              render={() => <EmptyRoute title="How It Works" />}
            />
            <Route
              path="/log-in-sign-in"
              render={() => <EmptyRoute title="Log In / Sign up" />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    candidates: state.candidates,
  };
};

export default connect(mapStateToProps, { getCandidates })(App);
