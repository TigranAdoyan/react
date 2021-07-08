import * as axios from 'axios';


// Creating Instance of axios
const InstanceAxios = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "a7eea0c1-5527-4e78-bb61-41e2faeaf2c9"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});




export const UsersApi = {
    GetUsers: (pageSize, currentPage) => InstanceAxios.get(`users/?count=${pageSize}&page=${currentPage}`)
};

export const FollowApi = {
    Follow: (id) => InstanceAxios.post(`follow/${id}`),
    UnFollow: (id) => InstanceAxios.delete(`follow/${id}`),
};

export const ProfileApi = {
    GetProfile: (id) => InstanceAxios.get(`profile/${id}`),
    GetStatus: (id) => InstanceAxios.get(`profile/status/${id}`),
    UpdateStatus: (status) => InstanceAxios.put(`profile/status`, { status }),
    UpdateProfile: (data) => InstanceAxios.put(`profile`, {...data })

};

export const AuthApi = {
    Auth: () => InstanceAxios.get('auth/me'),
    Login: (data) => InstanceAxios.post('auth/login', data),
    Logout: () => InstanceAxios.delete('auth/login')
};

export const SecurityApi = {
    SetCaptcha: () => InstanceAxios.get('/security/get-captcha-url')
};

export const UploadImageApi = {
    UploadImage: (image) => {
        var formData = new FormData();
        formData.append('image', image);

        return InstanceAxios.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });
    },
};