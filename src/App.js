import React from 'react';
import './App.css';
import Content from './components/Content.js'

class App extends React.Component {
  state = {
    loggedIn : true
  }
  render () {
    return (
      <div className="App">
        <Content loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}

export default App;
