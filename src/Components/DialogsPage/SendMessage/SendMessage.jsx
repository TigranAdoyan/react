import React from 'react';
import SendMessageForm from './SendMessageForm';



const SendMessage = (props) => {
   const onSubmit = (data) => { 
      props.SendMessage(data.message);
   };
   return (
      <SendMessageForm onSubmit={onSubmit} />
   )
};

export default SendMessage;