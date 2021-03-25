import React, { useState } from 'react';
import './App.css';
import store from './store';

function App() {
  const [state, setState] = useState(store);

    return (
    <div className="App">
      <header className="App-header">
        Feelings Accordion
      </header>
      <main>
        <ul className="core-feelings">
          {state.feelings1.map(feeling => <li>{feeling.name}</li>)}
        </ul>

      </main>
    </div>
  );
}

export default App;
