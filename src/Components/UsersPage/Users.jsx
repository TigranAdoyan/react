import React from 'react';
import userImg from "../../Files/Images/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg";
import "./Users.css";
import {NavLink} from 'react-router-dom';

const Users = ({pages, users, SetPage, currentPage, UnFollow, Follow, buttonStatus}) => { 
   
   return (
      
       <div className="body" >
              <div className="pagination" >
                  <button disabled={currentPage === 1 ? true : false} onClick={() => SetPage(currentPage - 1)} >PREV</button>
                      {pages.map(page => {
                         return <span onClick={() => SetPage(page)} className={page === currentPage && "activePage"} >{page}</span>
                      })} 
                  <button onClick={() => SetPage(currentPage + 1)} >NEXT</button>
              </div>
              {users.map(user => {
                      return <div className="card" key={user.id} >
                         <span className="left" >
                            <div>
                               <div className="img_div" >
                                 <NavLink to={"/profile/" + user.id}>
                                   <img src={user.photos.large ? user.photos.large : userImg } alt="" />
                                 </NavLink> 
                               </div> 
                            </div>
                            <div>
                              <button disabled={user.buttonStatus} onClick={() => user.followed ? UnFollow(user.id) : Follow(user.id) } >{user.followed ? "UnFollow" : "Follow" }</button>
                            </div>
                         </span>
                         <span className="right" >
                             <span>
                                Name:  {user.name}; <br/>
                                Status:  {user.status}
                             </span>
                             <span>
                                   
                             </span>
                         </span>
              </div>
           })}    
       </div>
  );
};

export default Users;