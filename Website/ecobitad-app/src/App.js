import React from 'react';
import './App.css';
import Users from './components/Users';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> API DE USUARIOS </h1>
      </header>
      <main>
      < Users
        name = "Jimena"
        last_name = "Flores"
      />
      < Products />
      </main>
    </div>
  );
}

export default App;
