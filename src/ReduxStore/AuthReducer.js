import {AuthApi, SecurityApi, ProfileApi, UploadImageApi} from '../Api/Api';

const AUTH = "AUTH";
const ADD_MY_PROFILE = "ADD_MY_PROFILE";
const ADD_MY_PROFILE_PHOTOS = "ADD_MY_PROFILE_PHOTOS";
const UPDATE_MY_PROFILE = "UPDATE_MY_PROFILE";
const WRONG_PASSWORD = "WRONG_PASSWORD";
const LIMIT_OUT = "LIMIT_OUT";

const defaultState = {
    id: null,
    login: null,
    email: null,
    myProfile: null,
    isAuth: false,
    wrongPassword: null,
    wrongPasswordMessage: null,
    limitOut: null,
};

export default function AuthReducer (state = defaultState, action) {
       switch(action.type) {
              case AUTH: 
                if(action.data) {
                    return  {
                        ...state,
                        ...action.data,
                        isAuth: true
                    };   
                } else {
                    return {
                        ...state,
                        id: null,
                        login: null,
                        email: null,
                        isAuth: false,
                        wrongPassword: null,
                        limitOut: null,
                        imageUrl: null 
                    }
                };
              case ADD_MY_PROFILE: 
                   return {
                       ...state,
                       myProfile: action.data
                   };
              case ADD_MY_PROFILE_PHOTOS: 
                   return {
                       ...state,
                       myProfile: { ...state.myProfile, photos: action.photos }
                   };
              case WRONG_PASSWORD: 
                   return {
                       ...state,
                       wrongPassword: true,
                       wrongPasswordMessage: action.message
                   };
               case LIMIT_OUT:
                   return {
                       ...state,
                       limitOut: true,
                       imageUrl: action.imageUrl
                   };
              default: 
                  return state;
       }
};





const Auth_ActionCreator = (profile) => {
    return {
       type: AUTH,
       data: profile,
   };
};
const AddMyProfile_ActionCreator = (data) => {
    return {
     type: ADD_MY_PROFILE,
     data
  };
};
const ChangeImage_ActionCrator = (photos) => {
   return {
       type: ADD_MY_PROFILE_PHOTOS,
       photos,
   };
};



const WrongPasswordAcionCreator = (message) => {
    return {
      type: WRONG_PASSWORD,
      message
    };
};
const LimitOutActionCreator = (imageUrl) => {
    return {
        type: LIMIT_OUT,
        imageUrl
    };
};



export const AddMyProfile_ThunkCreator = (id) => {
    return async (dispatch) => {
    const response = await ProfileApi.GetProfile(id);
    if(response.status === 200) {
        dispatch(AddMyProfile_ActionCreator(response.data))
    };
    };
};
export const Auth_ThunkCreator = () => {
    return async (dispatch) => {
    const response = await AuthApi.Auth()
    if(response.data.resultCode === 0) {
        const result = await dispatch(Auth_ActionCreator(response.data.data));
        if(result) {
        return true; };
     };
    };
};
const Captcha_ThunkCreator = () => {
    return (dispatch) => {
       SecurityApi.SetCaptcha().then(response => {
         dispatch(LimitOutActionCreator(response.data.url));
       });
    };
};




export const LoginServer_ThunkCreator = (data) => (dispatch) => {
    AuthApi.Login(data).then(response => {
     switch (response.data.resultCode) {
        case 0:
            dispatch(Auth_ThunkCreator());               
            break;
        case 1: 
            dispatch(WrongPasswordAcionCreator(response.data.messages[0]))
            break;
        case 10:
            dispatch(Captcha_ThunkCreator());
            if(response.data.messages[0] === "Incorrect Email or Password") {
                dispatch(WrongPasswordAcionCreator(response.data.messages[0]))
            };
            break;
        default:
            break;
     }


    //   else if (response.data.resultCode === 10)  {
    //       SecurityApi.SetCaptcha().then(response => {
    //           debugger;
    //       })
    //   }
   });
};

export const LogoutServer_ThunkCreator = () => (dispatch) => {
   AuthApi.Logout().then(response => {
       if(response.data.resultCode === 0) {
           dispatch(Auth_ActionCreator(null, false));
       };
   });
};




export const UploadImage_ThunkCreator = (file) => {
    return (dispatch) => {
        UploadImageApi.UploadImage(file).then(response => {
            dispatch(ChangeImage_ActionCrator(response.data.data.photos));
        });
    };
};
export const UpdateMyProfile_ThunkCrator = (data) => {
    return (dispatch) => {
        debugger;
        ProfileApi.UpdateProfile(data).then(response => {
            debugger;
        });
    };
};