import React from 'react';
import {Field} from 'redux-form'
import {Input} from '../../Controlls/FormControll';
import {Required, MaxLength_Creator, MinLength_Creator} from '../../../Utilits/Validators/Validator';
import {reduxForm} from 'redux-form';


const MaxLength15 = MaxLength_Creator(15);
const MinLength4 = MinLength_Creator(4);

const SendMessageForm = (props) => {
  return (
     <form onSubmit={props.handleSubmit} >
        <div>
           <Field
           component={Input} 
           validate={[Required, MinLength4, MaxLength15]}
           type="text"
           name={"message"} 
           />
           <button type="submit">Send</button>
        </div>
     </form>
  );
};

export default reduxForm({form: "message",  asyncBlurFields: []})(SendMessageForm);;