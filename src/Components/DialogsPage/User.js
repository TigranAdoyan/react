import {NavLink} from 'react-router-dom';

const User = ({id, name}) => {
    return (
         <div className="item"  >
              <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="" srcset="" />
              <NavLink to={`/dialogs/${id}`} >{name}</NavLink>
         </div>
    )
};

export default User;