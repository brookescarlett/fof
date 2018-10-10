import React, { Component } from 'react';

import Slider from './components/slider'
import Content from './components/content'

import { data } from './api/data'

import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {display: 0}
  }

  changeDisplay = (num) => {
    this.setState({ display: num })
  }

  render() {
    console.log(data)
    return (
     <div className="fixed top-0 left-0 right-0 bottom-0">
        <Content data={data[this.state.display]}  />
        <Slider data={data[this.state.display]} changeDisplay={this.changeDisplay}/>
     </div>
    );
  }
}

export default App;
