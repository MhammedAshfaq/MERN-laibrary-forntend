import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("")
    useEffect(() => {
        setusername(localStorage.getItem('userName'))
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <nav>
            <div className="left">
                <img src="https://i.pinimg.com/736x/5f/fb/de/5ffbdeceb84323decd76084b2efca958.jpg" alt="" />
                <h2>Oxford</h2>
            </div>
            <div className="right">
                <ul>
                    <li><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Books</Link> </li>
                    <li><Link style={{ textDecoration: 'none', color: 'black' }} to='/my-cart'>My Cart</Link> </li>
                    <li><Link style={{ textDecoration: 'none', color: 'black' }} to='/my-order'>Orders</Link> </li>
                    {/* <li><Link to='/'>Books</Link> </li> */}
                </ul>
                <h2>{username && username}</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar