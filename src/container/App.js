import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCandidates } from '../store/actions';
import '../styles/App.scss';

class App extends Component {
  componentDidMount() {
    this.props.getCandidates();
  }

  render() {
    return (
      <header className="App-header">
        <h1>Zemoga test</h1>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    candidates: state.candidates,
  };
};

export default connect(mapStateToProps, { getCandidates })(App);
