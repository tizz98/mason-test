import React, { Component } from 'react';
import Mason, { Canvas } from 'mason-library';
import './App.css';

class App extends Component {
  componentDidMount() {
    Mason({
      apiKey:'ZLr4EYj8yAWv8qjt0IBTN16zziBwTYiICwjZvSuLI18=',
      projectId: '5cad0dcd475b830003630ed8',
    });
  }

  render() {
    return (
      <div className="App">
        <Canvas id="5cad29d7475b830003630fbf" />
      </div>
    );
  }
}

export default App;
