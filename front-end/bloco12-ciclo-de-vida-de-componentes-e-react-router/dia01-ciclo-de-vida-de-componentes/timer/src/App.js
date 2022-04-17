import React, { Component } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Button from "./components/Button";
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      showTimer: false,
      textTimer: 'LIGAR TIMER',
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showTimer: !prevState.showTimer,
      textTimer: prevState.textTimer === 'LIGAR TIMER' ? 'DESLIGAR TIMER' : 'LIGAR TIMER'
    }))
  }

  render() {
    const { showTimer, textTimer } = this.state
    return (
        <main className="main">
          <Header logo='https://lever-client-logos.s3.us-west-2.amazonaws.com/1ecf7375-9cc9-4b3d-ba9a-c1cdcab267b5-1637341317710.png' />
          {showTimer && <Timer />}
          <Button
            textTimer={ textTimer }
            toggleTimer={this.handleClick}
          />
        </main>
    )
  }
}

export default App;
