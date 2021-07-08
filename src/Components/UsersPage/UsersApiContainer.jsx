import React from "react";
import Users from './Users';
import Preloader from '../CommonComponents/Preloader';

class UserApiContainer extends React.Component {
  
    componentDidMount = () => {
         this.props.SetUsers()
    };
    selectPage = (selectedPage) => {
          this.props.SetPage(selectedPage);                   
    };
    Follow = (id) => {
      this.props.Follow(id);    
    };
    UnFollow = (id) => {
      this.props.UnFollow(id);
    };
  
    currentPages = () => {
              const pageCounts = Math.ceil(this.props.totalUsers/this.props.pageSize);
              const pages = [];
              for(let i = 1; i <= pageCounts; i++) {
                         pages.push(i);
              };
              let newPages = [];
              if(this.props.currentPage === 2) {
                   newPages = pages.slice(this.props.currentPage - 2, this.props.currentPage + 3) ;
              }
              if(this.props.currentPage === 1) {
                   newPages = pages.slice(this.props.currentPage - 1, this.props.currentPage + 4) ;
               }
               if(this.props.currentPage > 2) {
                    newPages = pages.slice(this.props.currentPage - 3, this.props.currentPage + 2);
                }
              return newPages          
    };
    render() {
        return <>
          {this.props.loadingStatus ? <Preloader />
          :  <Users
          Follow={this.Follow}
          UnFollow={this.UnFollow}
          pages={this.currentPages()}
          users={this.props.users}
          SetPage={this.selectPage}
          currentPage={this.props.currentPage}
          buttonStatus={this.props.buttonStatus}
          />}
        </>        

    };
};

export default UserApiContainer;