import React, {Component} from 'react';
import './App.css';
import Comp from './Comp';

class App extends Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
    }
    this.printConsole1 = this.printConsole1.bind(this);
  }
  printConsole1 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  getButtonCollor(num) {
    return num % 2 === 0 ? 'green' : 'blue';
  }

  printConsole2 () { console.log('teste2') };
  printConsole3 () { console.log('teste3') };
  //const printConsole2 = () => console.log('Teste2');
  //const printConsole3 = () => console.log('Teste3');
  render() {
    const { numeroDeCliques } = this.state
    return (
      <div>
        <Comp headline='Conteúdo this' />
        <button onClick={this.printConsole1} style={{ backgroundColor: this.getButtonCollor(numeroDeCliques)}}>{this.state.numeroDeCliques}</button>
        <button onClick={this.printConsole2}>Console 2</button>
        <button onClick={this.printConsole3}>Console 3</button>
      </div>
    ) 
  }
}

export default App;
