import React from 'react';
import {BrowserRouter, Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import {InitializeApp_ThunkCreator} from './ReduxStore/AppReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
// Importing store
import store from './ReduxStore/ReduxStore';
// Importing Styles
import './App.css';
// Importing React Suspens HOC
import WithSuspense from './Components/HightOrderComponent/ReactSuspens';
// Importing Components
import Preloader from './Components/CommonComponents/Preloader';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import Error404 from "./Components/Error404/Error404";
import HomePage from "./Components/HomePage/HomePage";

// Creating React Lazy Loading
const ProfileContainer = React.lazy(() => import('./Components/ProfilePage/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Components/DialogsPage/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./Components/UsersPage/UsersContainer'));
const LoginPage = React.lazy(() => import('./Components/LoginPage/Login'));




class App extends React.Component {
  componentDidMount() {
    this.props.InitializeApp();
  };
  componentDidUpdate() {
    this.props.InitializeApp()
  };
  render() {
    return (
      <>
      {this.props.readyApp ? 
           <div className="App">
           <HeaderContainer />
           <div className="content">
             <Navbar/>
             <Switch>
                  <Route exact path="/" render={() => <Redirect to="/profile" />} />
                  <Route exact  path='/profile/:id?' render={() => WithSuspense(ProfileContainer) } />
                  <Route exact path="/dialogs" render={() => WithSuspense(DialogsContainer)   } />
                  <Route exact path="/users" render={() => WithSuspense(UsersContainer)  } />
                  <Route exact path="/login" render={() => WithSuspense(LoginPage) } />          
                  <Route  path="*" render={Error404} />
             </Switch>
           </div>
           
       </div> 
       : 
       <Preloader />
      }    
      </>
      
    )
  }
};

const mapStateToProps = (state) => {
  return {
     readyApp: state.AppState.appReady,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    InitializeApp: () => dispatch(InitializeApp_ThunkCreator()),
  };
};




const AppContainer = compose(
  connect(mapStateToProps, mapDispatchToProps ),
  withRouter
)(App);

export default function MainApp() {
  return  <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
          </BrowserRouter>
}