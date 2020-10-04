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
        {this.state.loggedIn ? <h2>You are logged in!</h2> : <h2>You are logged out :(</h2>}
        <button onClick={() => this.setState({loggedIn : !this.state.loggedIn})}>
          Toggle Login/Logout
        </button>
        <Content loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}

export default App;
