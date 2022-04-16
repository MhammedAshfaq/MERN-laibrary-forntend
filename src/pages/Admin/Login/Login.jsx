import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState({
        email: '',
        id: '',
        password: '',
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAdmin({
            ...admin,
            [name]: value
        })
    }
    const hadleLogin = async (event) => {
        event.preventDefault();
        localStorage.clear();
        let url = 'http://localhost:3001/api/admin/signin';
        const options = {
            method: "POST",
            url: url,
            data: admin
        }
        try {
            const response = await axios(options)
            localStorage.setItem("adminToken", response.data.token)
            alert(response.data.message)
            navigate('/admin/dashbord')
        } catch (error) {
            alert("Errror :" + error.response.data.error)
        }
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form" onSubmit={hadleLogin}>
                        <span className="login100-form-title p-b-43" style={{ fontFamily: "sans-serif", marginBottom: '20px' }}>
                            Admin Login
                        </span>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="email" value={admin.email} placeholder="Email" name="email" onChange={handleChange} />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="number" value={admin.id} placeholder="ID" name="id" onChange={handleChange} />
                            <span className="focus-input100"></span>
                        </div>


                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" value={admin.password} placeholder="Password" name="password" onChange={handleChange} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>

                    </form>

                    <div className="login100-more" style={{
                        backgroundImage: "url('https://keepersecurity.com/en_US/console/resources/css/img/undraw_programming_2svr@2x.png')",
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login