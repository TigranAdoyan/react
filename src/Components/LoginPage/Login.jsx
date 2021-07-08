import React from 'react';
import LoginForm from './LoginForm';
import {LoginServer_ThunkCreator} from '../../ReduxStore/AuthReducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import "./Login.css";


const Login = (props) => {
 const onSubmit = (data) => {
    props.Login(data);
 }
 if(props.isAuth) {
   return <Redirect to="/profile" />
 }
  

  return ( <div className="body" > 
    <div className="formDiv">
     <div className="formDivInner">
     <h1>Login</h1>
       <LoginForm 
        onSubmit={onSubmit} 
        wrongPassword={props.wrongPassword}
        wrongPasswordMessage={props.wrongPasswordMessage} 
        limitOut={props.limitOut}
        imageUrl={props.imageUrl} />
     </div>
    </div>
  </div> )
};



const mapStateToProps = (state) => {
   return {
     isAuth: state.AuthState.isAuth,
     wrongPassword: state.AuthState.wrongPassword,
     wrongPasswordMessage: state.AuthState.wrongPasswordMessage,
     limitOut: state.AuthState.limitOut,
     imageUrl: state.AuthState.imageUrl
   };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Login: (data) => dispatch(LoginServer_ThunkCreator(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);




// class Login extends React.Component {
//   state = {
//     isAuth: this.props.isAuth,
//   };

//   onSubmit = (data) =>  {
//     this.props.Login(data);
//     this.setState({isAuth: true});
//   };

  

//   render() {
//     return (
//       <>
//         {this.state.isAuth ? 
//         <Redirect to="/profile" /> 
//         :
//         <div className="body">
//         <div className="formDiv">
//           <div className="formDivInner" >
//              <h1>Login</h1>
//              <LoginForm  onSubmit={this.onSubmit}/>
//           </div>
//         </div>
//         </div>
//         }
//       </>
      
//     )
//   }
// }





