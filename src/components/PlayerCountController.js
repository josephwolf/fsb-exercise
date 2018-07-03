import React from "react";

const PLAYER_COUNT_CHANGED = "playerCountChanged";

class PlayerCountController extends React.Component {
    constructor(messageBrokerService){
        super();
        this.messageBrokerService = messageBrokerService;
    }

    updatePlayerCount(count){
        let playerCountChangedMessage = {
            type: PLAYER_COUNT_CHANGED,
            playerCount: count
        };

        this.messageBrokerService.sendMessage(playerCountChangedMessage);
    }
}

export default PlayerCountController