import React, {useState} from "react";
import "./Profile.css";
import DefaultImage from '../../Files/Images/profile.jpg';
import Post from "./Post";
import ProfileInfo from "./ProfileInfo";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import AddPostForm from "./PostForm/AddPost";



const  Profile = ({id, profileStatus, UpdateStatus, posts, profile, AddPost, DeletePost, myProfile, UploadImage, imageUrl}) => {
   const [selectedImage, SelectImage] = useState(null); 
   const OnSubmit = () => {
      UploadImage(selectedImage);
   };

   const SetData = (event) => {
      SelectImage(event.target.files[0]);
   };


   return (
      <div className="body">
            {profile && id  ?
            <ProfileInfo profile={profile} profileStatus={profileStatus}  /> : 
            <div className="MyProfilelInfo" >
                  <div>                     
                     <img src={myProfile?.photos?.large || null} alt="" srcset=""/>
                     <input type="file" name="photo" onChange={SetData} />
                     <button onClick={OnSubmit} >Send</button>
               
                  </div>
                  <span>{myProfile ? myProfile.fullName : null }</span>
                  <ProfileStatusWithHooks profileStatus={profileStatus} UpdateStatus={UpdateStatus} />
            </div>}
            <p>My posts</p>
            <AddPostForm AddPost={AddPost} />
            {posts.map((post) => {
               return <Post id={post.id} title={post.title} DeletePost={DeletePost} />
            })}; 
      </div>
   );
};

export default Profile;