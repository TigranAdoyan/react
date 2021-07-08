import thunkMiddleware from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// Importing Reducers
import AuthState from './AuthReducer';
import ProfileState from './ProfileReducer';
import DialogState from './DialogReducer';
import UsersState from './UsersReducer';
import { reducer as FormReducer } from 'redux-form'
import AppState from './AppReducer';

// Combining Reducers
const reducers = combineReducers({
    AuthState,
    ProfileState,
    DialogState,
    UsersState,
    form: FormReducer,
    AppState
});



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Creating and Exporting  Store
export default createStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware)));