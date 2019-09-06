import React, { Component } from 'react';
import Hero from './hero/hero.jsx';
import Widget from './widget/widget.jsx';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <div id="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </React.Fragment>
    );
  }
}