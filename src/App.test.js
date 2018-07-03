import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerCountController from "./components/PlayerCountController";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('can send messages from the player count controller', () => {
    const messageBroker = jest.mock("./components/MessageBrokerService");
    const playerCountController = new PlayerCountController(messageBroker);
    const expectedMessage = { type: "playerCountChanged", playerCount: 1 };

    playerCountController.updatePlayerCount(1);
    expect(messageBroker.sendMessage).toBeCalledWith(expectedMessage);
});
