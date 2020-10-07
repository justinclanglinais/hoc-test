import React, {useState} from 'react';
import './App.css';
import Content from './components/Content.js'

function App () {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="App">
      <div>
        {loggedIn ? <h2>You are logged in!</h2> : <h2>You are logged out :(</h2>}
        <button onClick={() => setLoggedIn(!loggedIn)}>
          Toggle Login/Logout
        </button>
      </div>
      <div>
        {loaded ? <h2>Content is loaded</h2> : <h2>Content not loaded</h2>}
        <button onClick={() => setLoaded(!loaded)}>
          Toggle Content Loaded
        </button>
      </div>
      <Content loggedIn={loggedIn} loaded={loaded} />
    </div>
  );
}

export default App;
