import React from 'react';
import Header from './Header';
import UpdatePopup from './UpdatePopup';
import { LogoutServer_ThunkCreator, UpdateMyProfile_ThunkCrator} from '../../ReduxStore/AuthReducer';
import { connect } from 'react-redux';



class HeaderContainer extends React.Component {
    state =  {
        popupOpen: false,
    }; 
    Logout = () => {
       this.props.Logout();
    }; 
    OnPopupStatus () {
        this.setState({ 
            popupOpen: true,
        });
    };
    OffPopupStatus () {
        this.setState({ 
            popupOpen: false 
        });
    };
    render() {
        return (
            <>
              <Header 
                login={this.props.login}
                email={this.props.email}
                isAuth={this.props.isAuth}
                Logout={this.Logout}
                OnPopupStatus={this.OnPopupStatus.bind(this)}
              /> 
              {
                this.state.popupOpen ?
                <UpdatePopup UpdateProfile={this.props.UpdateProfile} OffPopupStatus={this.OffPopupStatus.bind(this)} /> : null
              }
            </>
        );
    };
};





const mapStateToProps = (state) => {
    return {
         isAuth: state.AuthState.isAuth,
         login: state.AuthState.login,
         email: state.AuthState.email,
    };
};
const mapDispatchtoProps = (dispatch) => {
    return {
        Logout: () => dispatch(LogoutServer_ThunkCreator()),
        UpdateProfile: (data) => dispatch(UpdateMyProfile_ThunkCrator(data))
    };
};


export default connect(mapStateToProps, mapDispatchtoProps)(HeaderContainer);