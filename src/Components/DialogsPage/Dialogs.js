import React from "react";
import "./Dialogs.css";
import {Redirect} from 'react-router-dom';
import User from "./User";
import Message from "./Message";
import SendMessageForm from './SendMessage/SendMessage';

const Dialogs = ({isAuth, users, messages, messageValue, SendMessage}) => {
   if(!isAuth) {
      return <Redirect to="/login" />
   }
   return (
      <div className="messages">
           <div className="messages-user">
               {users.map(user => {
                    return <User name={user.name} id={user.id} />
               })}
           </div>
           <div className="messages-place" >
              <div>
                 {messages.map(message => {
                       return (<Message message={message.message} id={message.id} />)
                 })}
              </div>
              <div className="SEND_DIV" >
                  <SendMessageForm SendMessage={SendMessage} />
              </div>
           </div>

      </div>
   )
};

export default Dialogs;