import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal, ModalHeader } from './Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(show) {
    this.setState({ show: show !== undefined ? show : !this.state.show });
  }

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
        <button onClick={() => this.toggleModal()}>show modal</button>
        <Modal toggle={this.toggleModal} show={this.state.show}>
          <ModalHeader>
            <span>I'm a header</span>
            <button onClick={() => this.toggleModal(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>
          <p>Modal Body!!!</p>
        </Modal>
      </div>
    );
  }
}

export default App;
