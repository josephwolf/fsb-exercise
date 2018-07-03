import React, { Component } from 'react';
import './App.css';
import MessageBrokerService from "./components/MessageBrokerService";
import PlayerCountController from "./components/PlayerCountController";
import PlayerCountDisplay from "./components/PlayerCountDisplay";

class App extends Component {
    constructor() {
        super();
        this.state = {player1checked: false, player2checked: false, player3checked: false, player4checked: false};
        this.handlePlayerChecked = this.handlePlayerChecked.bind(this);
    }

    handlePlayerChecked (playerCountController, playerNumber) {
        this.state[`player${playerNumber}checked`] ? playerCountController.updatePlayerCount(-1) : playerCountController.updatePlayerCount(1);
        this.setState({[`player${playerNumber}checked`]: !this.state[`player${playerNumber}checked`]});
    }

    messageBroker = new MessageBrokerService();
    playerCountController = new PlayerCountController(this.messageBroker);
    playerCountDisplay = new PlayerCountDisplay(this.messageBroker);

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FSB Technology Exercise</h1>
        </header>
        <div className="App-intro">
            <h3>Player Selector</h3>
            <label>Player 1</label><input type="checkbox" onChange={ () => this.handlePlayerChecked(this.playerCountController, 1) }/><br/>
            <label>Player 2</label><input type="checkbox" onChange={ () => this.handlePlayerChecked(this.playerCountController, 2) }/><br/>
            <label>Player 3</label><input type="checkbox" onChange={ () => this.handlePlayerChecked(this.playerCountController, 3) }/><br/>
            <label>Player 4</label><input type="checkbox" onChange={ () => this.handlePlayerChecked(this.playerCountController, 4) }/><br/>
            <br/>
            <h3>Players Selected</h3>
            <h1>{this.playerCountDisplay.state.numberOfPlayers}</h1>
        </div>
      </div>
    );
  }
}

export default App;
