import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateDynamoDBButton from './components/CreateDynamoDBButton';
import DeleteDynamoDBButton from './components/DeleteDynamoDBButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* The button for creating a DynamoDB table */}
        <CreateDynamoDBButton />
        <p></p>
        <DeleteDynamoDBButton />
      </header>
    </div>
    
  );
}

export default App;
