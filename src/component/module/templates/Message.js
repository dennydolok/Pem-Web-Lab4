import React, { useState, useEffect, useRef} from "react";
import io from "socket.io-client";


function Message(){
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState();

    const socketRef = useRef();

    useEffect(() =>{
        socketRef.current = io.connect('http://localhost:8000/');
        console.log("ttt");

        socketRef.current.on("your id", id => {
            console.log(id);
            setYourID(id);
        })

        socketRef.current.on("messageX", (message) =>{
            //console.log(message);
            receivedMessage(message);
        }) 
    }, []);

    const receivedMessage = (message) =>{
       console.log(message);
        setMessages(oldMsgs => [...oldMsgs, message]);
    }

    const sendMessage = e => {
        e.preventDefault();
        const messageObject = {
            body: message,
            id: yourID,
        };
        //console.log(messageObject);
        setMessage('');
        socketRef.current.emit("send Message", messageObject);
    }

    const handleChange = (value) =>{
        setMessage(value);
    }

    return(
        <div id="chat-socket">
            <div className="row">
                <div className="col">
                    <div className="card card-custom">
                        <div className="card-header">
                            <h3>Receive</h3>
                        </div>
                        <div className="card-body">
                            {messages.map((message, index) => {
                                if(message.id === yourID){
                                    return(
                                        <div key={index} className="bg-info rounded m-2 p-3 text-right">
                                            <span className="text-white">{message.body}</span>
                                        </div>
                                    )   
                                }
                                return(
                                    <div key={index} className="bg-light rounded m-2 p-3 text-left">
                                        <span className="text-info">{message.body}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <form method="post" id="form-chat" onSubmit={(e)=>sendMessage(e)}>
                        <h5>Message</h5>
                        <div className="input-group">    
                            <textarea name="chat" value={message} onChange={(e)=>handleChange(e.target.value)} className="form-control"></textarea>
                        </div>
                        <button type="submit" className="mt-1 btn btn-primary float-end">Send</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Message;