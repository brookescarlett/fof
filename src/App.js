import React, { Component } from 'react';
import Slider from './components/slider'
import Content from './components/content'

import './App.css';

class App extends Component {
  render() {
    return (
     <div className="fixed top-0 left-0 right-0 bottom-0">
        <Content />
        <Slider />
     </div>
    );
  }
}

export default App;
