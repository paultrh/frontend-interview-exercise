import React, { Component } from 'react';

import './styles';

import PROFILES from './profiles.json';

import Ranking from './components/Ranking/Ranking';
import Modal from './components/Modal';
import UserInfo from './components/UserInfo';


class App extends Component {
  state = {
    profiles: [],
    modalVisible: false,
    user: {
        picture: null,
        name: '',
        points: 0
    },
  };

  componentWillMount() {
    this.setState({
      profiles: PROFILES,
    });
  }

  showModal = (selectedUser) => {
      this.setState({
          user: selectedUser,
          modalVisible: true
      })
  }

  hideModal = () => {
      this.setState({modalVisible: false})
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <Ranking
          profiles={this.state.profiles}
          onSelectProfile={this.showModal}
        />
        <Modal
            show={this.state.modalVisible}
            onHide={this.hideModal}>
          <UserInfo
            picture={user.picture}
            name={user.name}
            points={user.points}
          />
        </Modal>
      </div>
    );
  }
}

export default App;
