import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const registerAction = async (e) => {
        e.preventDefault();
        localStorage.clear();

        let url = 'http://localhost:3001/api/auth/signup';
        const options = {
            method: 'POST',
            url: url,
            data: user
        }
        try {
            const response = await axios(options);
            if (response.data.success) {
                alert("Registeration Succesfully");
                navigate('/login')
            }
        } catch (error) {
            alert(error.response.data.error)
        }
    }

    return (

        <div className="page-content">
            <div className="form-v5-content">
                <form className="form-detail" onSubmit={registerAction}>
                    <h2>Register Account </h2>
                    <div className="form-row">
                        <label  >Full Name</label>
                        <input type="text" name="name" className="input-text" placeholder="Your Name" value={user.name} onChange={handleChange} required />
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="form-row">
                        <label  >Your Email</label>
                        <input type="text" name="email" value={user.email} onChange={handleChange} className="input-text" placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="form-row">
                        <label  >Password</label>
                        <input type="password" name="password" value={user.password} onChange={handleChange} className="input-text" placeholder="Your Password" required />
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="go__back">
                        <Link to="/login">Go Back</Link>
                    </div>
                    <div className="form-row-last">
                        <input type="submit" className="register" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register