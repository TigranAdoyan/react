import "./Navbar.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
       <div className='navbar' >
           <ul>
               <li><NavLink to="/profile" activeClassName="active" >Profile</NavLink> </li>
               <li><NavLink to="/dialogs" activeClassName="active" >Dialogs</NavLink> </li>
               <li><NavLink to="/users" activeClassName="active" >Users</NavLink> </li>
           </ul>
       </div>
    );
};

export default Navbar;