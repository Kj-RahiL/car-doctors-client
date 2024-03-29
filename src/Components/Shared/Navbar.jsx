import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            alert('sign out successfully')
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const link = <>
        <li><NavLink to="/"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',

                };
            }}
        >Home</NavLink></li>

        <li><NavLink to="/about"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}
        >About</NavLink></li>

        <li><NavLink to="/services"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}
        >Services</NavLink></li>

        <li><NavLink to="/blog"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Blog</NavLink></li>

        {
            user?.email ? <>
              
              <li><NavLink to="/myBooking"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>My Booking</NavLink></li>
            
            <li><NavLink 
            to="/" 
            style={({ isActive }) => {
                return {
                    color: isActive ? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}
            onClick={handleLogOut}>Log Out</NavLink></li>
          
            </>
            
            : <li><NavLink to="/login"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Log In</NavLink></li>
        }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline border-[#FF3811] text-[#FF3811]">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;