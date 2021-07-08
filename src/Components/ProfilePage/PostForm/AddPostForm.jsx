import React from 'react';
import {Field} from 'redux-form';
import {Required, MaxLength_Creator, MinLength_Creator} from '../../../Utilits/Validators/Validator';
import {TextArea} from '../../Controlls/FormControll';
import {reduxForm} from 'redux-form';



const MaxLength10 = MaxLength_Creator(10);
const MinLength2 = MinLength_Creator(2);

const AddPostForm = (props) => {
  return (
      <form onSubmit={ (e) => {
           e.preventDefault();
           props.handleSubmit();
           props.reset();
      }} >
          <div>
              <Field
              component={TextArea}
              validate={[Required, MinLength2, MaxLength10]}
              className="textarea" 
              name={"post"} 
              placeholder={"New Post"}
              />
          </div>
          <div>
              <button type="submit">Add</button>
          </div>
      </form>          
)};

export default reduxForm({form: "post"})(AddPostForm);