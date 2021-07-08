export const GetUsers = (state) => {
    return state.UsersState.users;
};

export const GetTotalUsers = (state) => {
    return state.UsersState.totalUsers;
};

//////////////////////////////////////////
export const GetPageSize = (state) => {
    return state.UsersState.pageSize;
};

export const GetCurrentPage = (state) => {
    return state.UsersState.currentPage;
};
//////////////////////////////////////////////////
export const GetLoadingStatus = (state) => {
    return state.UsersState.loadingStatus;
};

export const GetButtonStatus = (state) => {
    return state.UsersState.buttonStatus;
};