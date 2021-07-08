const Message = ({message, id}) => {
   return (
       <div className="message" key={id}>
           {message}   
       </div>
   );
};

export default Message;