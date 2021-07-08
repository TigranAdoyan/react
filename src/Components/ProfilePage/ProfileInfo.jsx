import React from 'react';
import profileImg from '../../Files/Images/profile.jpg';

const ProfileInfo = ({profile, profileStatus}) => {
  return (
     <div className="profileDiv">
              <div className="infoDiv" >
                 <h4><span>Name:</span><span>{profile.fullName}</span></h4>
                 <h4><span>About Me:</span><span>{profile.aboutMe}</span></h4>     
                 <h4><span>Status:</span><span>{profileStatus}</span></h4>       
              </div>
              <div className="imgDiv"> 
                 <img src={profile.photos.large ? profile.photos.large : profileImg} alt=""/>
              </div>
     </div>
  )
};

export default ProfileInfo;