import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Modal from '../../layout/Modal/Modal';




import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <RankingPage />
        <Modal show={isCreatingMission}>
          <MissionEditor
            onCancel={this.resetCreateMission}
            onSubmit={this.resetCreateMission}
          />
        </Modal>
      </div>
    );
  }
}

export default App;
