import React from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/admin/login')
    }
    return (
        <nav>
            <div className="left">
                <img src="https://i.pinimg.com/736x/5f/fb/de/5ffbdeceb84323decd76084b2efca958.jpg" alt="" />
                <h2>Oxford Admin Panel</h2>
            </div>
            <div className="right">
                <ul>
                    <li><Link style={{ textDecoration: 'none', color: 'black' }} to='/admin/allbooks'>All Books</Link> </li>
                    <li><Link style={{ textDecoration: 'none', color: 'black' }} to='/admin/all-orders'>All Orders</Link> </li>
                    <li><Link style={{ textDecoration: 'none', color: 'black' }} to='/admin/allusers'>All Users</Link> </li>
                    <li><Link style={{ textDecoration: 'none', color: 'black' }} to='/admin/dashbord'>Success Payment</Link> </li>
                    {/* <li><Link to='/'>Books</Link> </li> */}
                </ul>
                <h2>Super Admin</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar