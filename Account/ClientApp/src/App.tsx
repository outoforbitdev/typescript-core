import React, { Component } from 'react';
import { TextField } from './core/Components';
import { PasswordField } from './core/Components/PasswordField';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <div>
              <TextField clearable />
              <PasswordField showable />
          </div>
    );
  }
}
