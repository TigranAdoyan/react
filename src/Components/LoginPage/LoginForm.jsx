import React from 'react';
import {Input} from '../Controlls/FormControll'
import {reduxForm, Field} from 'redux-form'; 
import {Required} from '../../Utilits/Validators/Validator';
 

const LoginForm = (props) => {  
   return (
       <form onSubmit={props.handleSubmit} >
          <div>
              <Field 
              type="text"
              name={"email"} 
              placeholder={"Email"} 
              component={Input}
              validate={[Required]} />
          </div>
          <div>
              <Field 
              type="text" 
              name={"password"} 
              placeholder={"Password"} 
              component={Input}
              validate={[Required]} />
          </div>
          <div className="rememberMeDiv" >
              <Field 
              className="checkbox" 
              name={"rememberMe"} 
              type="checkbox" 
              component={Input}/>
            Remember Me
          </div>
          {props.wrongPassword &&
            <div className="wrongPassword">
              <p>{props.wrongPasswordMessage}</p>
            </div>
          }
          {props.limitOut && 
            <div>
                <div className="captchaImage" >
                    <img src={props.imageUrl} alt=""/>
                </div> 
                <Field 
                name="captcha"
                type="text"
                component={Input}
                validate={[Required]}
                />
            </div>
          }
          <div>
              <button type="submit">Login</button>
          </div>
       </form>
   )
};

export default reduxForm({form: "login"})(LoginForm);