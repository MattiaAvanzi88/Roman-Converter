import React, { Component } from 'react';
import './App.css';
import romanConverter from './utils/roman-converter';
import romanMap from './utils/roman-map';
import Converter from './Converter';

class App extends Component {

  render() {
    const romanConv = romanConverter(romanMap);
    return (
      <div className="App"> 
        <Converter 
            converter={romanConv}
          />
      </div>
    );
  }
}

export default App;
