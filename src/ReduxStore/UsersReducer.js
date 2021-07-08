import { UsersApi, FollowApi } from '../Api/Api';

const FOLLOW = "FOLLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FOLLOW_BUTTON_STATUS = "SET_FOLLOW_BUTTON_STATUS";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const CHANGE_LOADING_STATUS_USERSPAGE = "CHANGE_LOADING_STATUS_USERSPAGE";


// Default State
const defaultState = {
    users: [],
    totalUsers: 0,
    pageSize: 10,
    currentPage: 1,
    loadingStatus: true,
};

// Creating and Exporting Reducer
export default function UsersReducer(state = defaultState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true }
                    }
                    return user;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false }
                    }
                    return user;
                })
            }
        case SET_USERS:
            {
                const users = action.users.map(user => {
                    return {...user, buttonStatus: false };
                });
                return {
                    ...state,
                    users: [...users],
                    totalUsers: action.totalUsers,
                }
            }
        case SET_PAGE:
            {
                const users = action.users.map(user => {
                    return {...user, buttonStatus: false };
                });
                return {
                    ...state,
                    users: [...users],
                    totalUsers: action.totalUsers,
                    currentPage: action.selectedPage
                }
            }
        case CHANGE_LOADING_STATUS_USERSPAGE:
            return {
                ...state,
                loadingStatus: action.status
            }
        case SET_FOLLOW_BUTTON_STATUS:
            {
                const users = state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, buttonStatus: !user.buttonStatus };
                    }
                    return user;
                });
                return {
                    ...state,
                    users: [...users]
                }
            }
        default:
            return state
    }
};


// Creating Action Creators
const Follow_ActionCreator = (id) => ({ type: FOLLOW, id });
const UnFollow_ActionCreator = (id) => ({ type: UNFOLLOW, id });
const SetUsers_ActionCreator = (users, totalUsers) => ({ type: SET_USERS, users, totalUsers });
const SetPage_ActionCreator = (users, totalUsers, selectedPage) => ({ type: SET_PAGE, users, totalUsers, selectedPage });
const ChangeLoadingStatus_ActionCreator = (status) => ({ type: CHANGE_LOADING_STATUS_USERSPAGE, status });
const SetFollowButtonStatus_ActionCreator = (id) => ({ type: SET_FOLLOW_BUTTON_STATUS, id });


// Exporting Thunk Creators
export const SetUsers_ThunkCreator = () => {
    return (dispatch) => {
        dispatch(ChangeLoadingStatus_ActionCreator(true));
        UsersApi.GetUsers().then(response => {
            dispatch(SetUsers_ActionCreator(response.data.items, response.data.totalCount))
            dispatch(ChangeLoadingStatus_ActionCreator(false));
        });

    };
};
export const SetPage_ThunkCreator = (selectedPage) => {
    return (dispatch) => {
        dispatch(ChangeLoadingStatus_ActionCreator(true));
        UsersApi.GetUsers(10, selectedPage).then(response => {
            dispatch(SetPage_ActionCreator(response.data.items, response.data.totalCount, selectedPage))
            dispatch(ChangeLoadingStatus_ActionCreator(false));
        });
    };
};
export const Follow_ThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(SetFollowButtonStatus_ActionCreator(id));
        FollowApi.Follow(id).then(response => {
            if (response.status === 200) {
                dispatch(Follow_ActionCreator(id));
            };
            dispatch(SetFollowButtonStatus_ActionCreator(id));
        });
    }
};
export const UnFollow_ThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(SetFollowButtonStatus_ActionCreator(id));
        FollowApi.UnFollow(id).then(response => {
            if (response.status === 200) {
                dispatch(UnFollow_ActionCreator(id));
            }
            dispatch(SetFollowButtonStatus_ActionCreator(id));
        })
    }
}