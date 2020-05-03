import React from 'react';
import './App.scss';
import AppRouter from "./components/main/AppRouter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AppRouter></AppRouter> 
      </header>
    </div>
  );
}

export default App;
