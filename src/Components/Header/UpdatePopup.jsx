import React from 'react';
import UpdateForm from './UpdateForm';


const UpdatePopup = ({UpdateProfile, OffPopupStatus}) => {
    const Update = (data) => {
       const {userId, lookingForAJob, lookingForAJobDescription, AboutMe, fullName, github,vk, facebook,instagram, twitter, website, youtube, mainLink} = data;
       debugger;
       UpdateProfile({
        userId,
        lookingForAJob, 
        lookingForAJobDescription, 
        fullName,
        AboutMe,
        contacts: {
            github,
            vk, 
            facebook,
            instagram, 
            twitter, 
            website, 
            youtube, 
            mainLink
        }
       })
    };
    return (
        <div className="popup_background">
            <div className="popup">
               <UpdateForm onSubmit={Update}  OffPopupStatus={OffPopupStatus} />
            </div>
        </div>
    );
};

export default UpdatePopup;