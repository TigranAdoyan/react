import { Auth_ThunkCreator } from './AuthReducer';

const INITIALIZE_APP = "INITIALIZE_APP";

const defaultState = {
    appReady: false
};

export default function AppReducer(state = defaultState, action) {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                appReady: true
            };
        default:
            return state;
    };
};

const InitializeApp_ActionCreator = () => ({ type: INITIALIZE_APP });

export const InitializeApp_ThunkCreator = () => {
    return (dispatch) => {
        dispatch(Auth_ThunkCreator()).then(result => {
            dispatch(InitializeApp_ActionCreator());
        });
    };
};