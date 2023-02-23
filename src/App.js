import React from 'react';
import FeedCard from './components/FeedCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redneck Feed</h1>
      </header>
      <div>
        <FeedCard />
      </div>
    </div>
    
  );
}

export default App;
