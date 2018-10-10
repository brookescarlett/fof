import React, { Component } from 'react';

import Slider from './components/slider'
import Content from './components/content'

import { data } from './api/data'

import './App.css';

export default class App extends Component {

  constructor() {
    super()
    this.state = {display: 0}
  }

  changeDisplay = (num) => {
    this.setState({ display: num })
  }

  render() {
    return (
     <div className="layout fixed top-0 left-0 right-0">
        <Slider data={data[this.state.display]} changeDisplay={this.changeDisplay}/>
        <Content data={data[this.state.display]}  />
     </div>
    );
  }
}
