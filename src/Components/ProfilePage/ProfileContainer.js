import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
// Importing Style
import "./Profile.css";
// Importing  Components
import Profile from "./Profile";
import ChectAuthHOC from "../HightOrderComponent/ChechAuthHOC";
import Preloader from "../CommonComponents/Preloader";
// Importing Action Creaters
import { AddProfile_ThunkCreator, GetStatus_ThunkCreator, UpdateStatus_ThunkCreator,  AddPost_ActionCreator, DeletePost_ActionCreator } from "../../ReduxStore/ProfileReducer";
import { AddMyProfile_ThunkCreator, UploadImage_ThunkCreator } from '../../ReduxStore/AuthReducer';
// Import connect from react-redux
import { connect } from "react-redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        if(id) {
            this.props.AddProfile(id);
            this.props.GetStatus(id);
        }else{
            this.props.GetStatus(this.props.myId);
            this.props.AddMyProfile(this.props.myId);
        }
    };
    componentDidUpdate(prevState) {  
        const id = this.props.match.params.id;
        if(id !== prevState.match.params.id) {
            if(id) {
                this.props.AddProfile(id);
                this.props.GetStatus(id);
            }else{
                this.props.GetStatus(this.props.myId);
                this.props.AddMyProfile(this.props.myId);
            }
        };
    };

    render() {
       return <>
          {this.props.match.params.id 
          && !this.props.profile ? 
          <Preloader /> :  
          <Profile
        AddPost = { this.props.AddPost }
        DeletePost = {this.props.DeletePost}
        UpdateStatus={this.props.UpdataStatus}
        UploadImage={this.props.UploadImage}
        posts = { this.props.posts }
        profile = { this.props.profile }
        id={ this.props.match.params.id }
        profileStatus={ this.props.profileStatus }
        myProfile={this.props.myProfile}
        />}
     </>
    };
};




// Maping states and dispatches to props
const mapStateToProps = (state) => {
    return {
        posts: state.ProfileState.posts,
        profile: state.ProfileState.profile,
        profileStatus: state.ProfileState.profileStatus,
        myId: state.AuthState.id,
        loadingStatus: state.ProfileState.loadingStatus,
        myProfile: state.AuthState.myProfile
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        AddPost: (post) => dispatch(AddPost_ActionCreator(post)),
        UploadImage: (file) => dispatch(UploadImage_ThunkCreator(file)),
        DeletePost: (id) => dispatch(DeletePost_ActionCreator(id)),
        AddProfile: (id) => dispatch(AddProfile_ThunkCreator(id)),
        AddMyProfile: (id) => dispatch(AddMyProfile_ThunkCreator(id)),
        GetStatus: (id) => dispatch(GetStatus_ThunkCreator(id)),
        UpdateStatus: (status) => dispatch(UpdateStatus_ThunkCreator(status)),
    }
};


// Creating and Exporting ProfileContainer
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
   ChectAuthHOC
)(ProfileContainer);