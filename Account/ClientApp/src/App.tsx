import React, { Component } from 'react';
import { TextField } from './core/Components';
import { Modal } from './core/Components/Modal';
import { PasswordField } from './core/Components/PasswordField';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <Modal
              closable={true}
              accept={"Accept"}
              cancel={"Cancel"}
          >
              Content
          </Modal>
    );
  }
}
