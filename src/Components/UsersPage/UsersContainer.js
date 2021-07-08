// Importin presentional component
import UsersApiContainer from "./UsersApiContainer";
// Importing Selectors
import { GetUsers, GetTotalUsers, GetPageSize, GetCurrentPage, GetLoadingStatus, GetButtonStatus } from '../../ReduxStore/Selectors/UsersSelectors';
// Importing Action Creators
import {
    SetUsers_ThunkCreator,
    SetPage_ThunkCreator,
    Follow_ThunkCreator,
    UnFollow_ThunkCreator,
} from "../../ReduxStore/UsersReducer";
import { connect } from 'react-redux';




// State and Dispatch maper Defining
const mapStateToProps = (state) => {
    return {
        users: GetUsers(state),
        totalUsers: GetTotalUsers(state),
        pageSize: GetPageSize(state),
        currentPage: GetCurrentPage(state),
        loadingStatus: GetLoadingStatus(state),
        buttonStatus: GetButtonStatus(state)
    };
};
const mapDispatchtoProps = (dispatch) => {
    return {
        Follow: (userId) => dispatch(Follow_ThunkCreator(userId)),
        UnFollow: (userId) => dispatch(UnFollow_ThunkCreator(userId)),
        SetUsers: () => dispatch(SetUsers_ThunkCreator()),
        SetPage: (setedPage) => dispatch(SetPage_ThunkCreator(setedPage))
    }
};


// Creating and Exporting  UserContainer 
export default connect(mapStateToProps, mapDispatchtoProps)(UsersApiContainer);