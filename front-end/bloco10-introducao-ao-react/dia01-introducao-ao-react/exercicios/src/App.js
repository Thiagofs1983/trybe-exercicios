import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arr = ['eu', 'agora', 'entendi', 'graças', 'ao', 'Gustavo']

class App extends React.Component {
  render() {
    
    return (
      <ol>
        {arr.map((element) => Task(element))}
      </ol>
    )
  }
}

export default App;
