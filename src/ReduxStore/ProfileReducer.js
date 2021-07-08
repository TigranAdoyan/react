import { ProfileApi } from '../Api/Api';

// Defining Action types
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const ADD_PROFILE = "ADD_PROFILE";
const CHANGE_LOADING_STATUS_PROFILE_PAGE = "CHANGE_LOADING_STATUS_PROFILE_PAGE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";



// Default State --------------------------------------
let defaultState = {
    posts: [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
    ],
    profile: null,
    profileStatus: null,
    loadingStatus: false,
};

// Creating and Exporting  Reducer ------------------------------------
export default function ProfileReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_POST:
            {
                return {
                    ...state,
                    posts: [...state.posts, { id: state.posts.length + 1, title: action.post }],
                };
            }
        case DELETE_POST:
            {
                return {
                    ...state,
                    posts: state.posts.filter(p => p.id !== action.id),
                };
            }
        case ADD_PROFILE:
            {
                return {
                    ...state,
                    profile: action.profile
                }
            }
        case CHANGE_LOADING_STATUS_PROFILE_PAGE:
            {
                return {
                    ...state,
                    loadingStatus: action.status
                }
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                profileStatus: action.status
            };
        default:
            {
                return state;
            }
    }
};


// Exporting action creators
export const AddPost_ActionCreator = (post) => ({ type: ADD_POST, post });
export const DeletePost_ActionCreator = (id) => ({ type: DELETE_POST, id });
const SetStatus_ActionCreator = (status) => ({ type: SET_PROFILE_STATUS, status });
const AddProfile_ActionCreator = (profile) => ({ type: ADD_PROFILE, profile });
const ChangeLoadingStatus_ActionCreator = (status) => ({ type: CHANGE_LOADING_STATUS_PROFILE_PAGE, status });




// Creating and Exporting ThunkCreators
export const AddProfile_ThunkCreator = (id) => {
    return async(dispatch) => {
        dispatch(ChangeLoadingStatus_ActionCreator(true));
        const response = await ProfileApi.GetProfile(id);
        if (response.status === 200) {
            dispatch(AddProfile_ActionCreator(response.data));
            dispatch(ChangeLoadingStatus_ActionCreator(true));
        };
    }
};
export const GetStatus_ThunkCreator = (id) => {
    return async function(dispatch) {
        const response = await ProfileApi.GetStatus(id);
        if (response.status === 200) {
            dispatch(SetStatus_ActionCreator(response.data));
        };
    };
};
export const UpdateStatus_ThunkCreator = (status) => {
    return async function(dispatch) {
        const response = await ProfileApi.UpdateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(SetStatus_ActionCreator(status))
        };
    };
};