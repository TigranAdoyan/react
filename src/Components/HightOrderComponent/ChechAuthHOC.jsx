import { connect } from 'react-redux';
import React from 'react';
import {Redirect} from 'react-router-dom'

const mapStateToProps = (state) => {
     return {
          isAuth: state.AuthState.isAuth
     };
};

const ChechAuthContainer = (Component) =>   {
   class ContainerComponent extends React.Component {
      render() {
              if(!this.props.isAuth) {
                 return <Redirect to="/login" />
              }
              return <Component {...this.props} />
      }
   };
   return connect(mapStateToProps)(ContainerComponent);
};


export default ChechAuthContainer;