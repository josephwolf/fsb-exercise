import React from "react";

const PLAYER_COUNT_CHANGED = "playerCountChanged";

class PlayerCountDisplay extends React.Component {
    constructor(messageBrokerService){
        super();
        this.state = { numberOfPlayers: 0 };
        this.listen = this.listen.bind(this);
        messageBrokerService.subscribe(this.listen, PLAYER_COUNT_CHANGED);
    }

    listen(message){
        // this.setState({numberOfPlayers: this.state.numberOfPlayers + message.playerCount})
        //NB using setState gave me a strange error saying the component was not yet mounted.
        //a lot of browsing gave no direct answer, but the react itself suggested this solution

        this.state.numberOfPlayers = this.state.numberOfPlayers + message.playerCount
    }
}

export default PlayerCountDisplay