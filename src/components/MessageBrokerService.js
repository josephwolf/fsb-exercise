import React from 'react'

class MessageBrokerService extends React.Component {
    constructor(){
        super();
        this.subscribers = [];
    }

    sendMessage(message){
        this.subscribers[message.type].forEach(subscriber => {
            subscriber(message);
        });
    }

    subscribe(subscriber, messageType){
        if(!this.subscribers[messageType]){
            this.subscribers[messageType] = [];
        }

        this.subscribers[messageType].push(subscriber);
    }
}

export default MessageBrokerService