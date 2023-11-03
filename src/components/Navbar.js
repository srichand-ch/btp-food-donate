import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import profileimage from '../images/user-profile.jpg';

export default function Navbar(){

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true); //currently kept in true to check if the profile page is working or nott
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the dropdown menu
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Add the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav">
      <Link to = "/" className="site-title">
        SHARE MEAL
      </Link>
      <ul>
        <li><CustomLink to="/aboutus">About Us</CustomLink></li>
        <li><CustomLink to="/contactus">Contact Us</CustomLink></li>
        <li><CustomLink to="/partnerwithus">Partner with Us</CustomLink></li>
      </ul>
      <ul>
        {isUserLoggedIn ? (
          <button><CustomLink to="/Donate" className="don-but">Donate</CustomLink></button> 
        ) : (
          <button><CustomLink to="/Login" className="don-but">Donate</CustomLink></button> 
        )}
      </ul>
      <ul className="profile-dropdown">
        {isUserLoggedIn ? (
          <div className="profile-button" onClick={() => setOpen(!open)}>
            <img src={profileimage} alt="Profile" className="profile-image" />
          </div>
        ) : (
          <CustomLink to="/Login">Login</CustomLink>
        )}
        {isUserLoggedIn && (
          <div
            ref={dropdownRef}
            className={`profile-menu ${open ? 'active' : 'inactive'}`}
          >
            <div>
              <DropdownItem text={"My Profile"} />
              <DropdownItem text={"Edit Profile"} />
              <DropdownItem text={"Logout"} />
            </div>
          </div>
        )}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return(
    <li className={isActive ? "active" : ""}>
      <Link to = {to} {...props}>
        {children}
      </Link>
    </li>
  )
}

function DropdownItem(props){
  return (
    <li className="dropdownItem">
      <a>{props.text}</a>
    </li>
  )
}
