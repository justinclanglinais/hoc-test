import React from 'react';
import './App.css';
import Content from './components/Content.js'

class App extends React.Component {
  state = {
    loggedIn : true,
    loaded : false
  }
  render () {
    return (
      <div className="App">
        <div>
          {this.state.loggedIn ? <h2>You are logged in!</h2> : <h2>You are logged out :(</h2>}
          <button onClick={() => this.setState({loggedIn : !this.state.loggedIn})}>
            Toggle Login/Logout
          </button>
        </div>
        <div>
        {this.state.loaded ? <h2>Content is loaded</h2> : <h2>Content not loaded</h2>}
          <button onClick={() => this.setState({loaded : !this.state.loaded})}>
            Toggle Content Loaded
          </button>
        </div>
        <Content loggedIn={this.state.loggedIn} loaded={this.state.loaded} />
      </div>
    );
  }
}

export default App;
