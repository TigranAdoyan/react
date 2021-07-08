import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = ({profileStatus, UpdateStatus}) => {
  
   const [editMode, setEditMode] = useState(false);
   const [status, setStatus] = useState('')
  
    useEffect(() => {
      setStatus(profileStatus)
    }, [profileStatus]);
   
    const OnEditMode = () => {
      setEditMode(true);
    };

   const OffEditMode = () => {
      UpdateStatus(status); 
      setEditMode(false);
   };
   

   return (
        <div className="statusDiv">
            {editMode ? 
              <input 
                onChange={ (e) => setStatus(e.currentTarget.value) } 
                onBlur={() => {OffEditMode(false)} }
                value={status}  
                autoFocus={true} type="text" 
              /> :
              <span onDoubleClick={() => {OnEditMode(true)} } 
                > {status ?  status : ""} </span>  
              }
        </div>
   );
};

export default ProfileStatusWithHooks;