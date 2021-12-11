import React, { Component } from "react";
import Message from "./templates/Message";

export class Chat extends Component{
    render() {
        return (
            <div>
               <Message />
            </div>
        );
    }
}

export default Chat;