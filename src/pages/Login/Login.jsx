import React, { useState } from 'react'
import './Login.css'
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
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

    const loginActin = async (e) => {
        e.preventDefault();
        localStorage.clear();

        let url = 'http://localhost:3001/api/auth/signin';
        const options = {
            method: "POST",
            url: url,
            data: user
        }
        try {
            const response = await axios(options);
            if (response.data.success) {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userName', response.data.user.name)
                localStorage.setItem('id', response.data.user._id)
                alert(response.data.message)
                navigate('/')
            }
        } catch (error) {
            alert("Errror :" + error.response.data.error)

        }
    }

    return (

        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form" onSubmit={loginActin}>
                        <span className="login100-form-title p-b-43" style={{ fontFamily: "sans-serif", marginBottom: '20px' }}>
                            Login to continue
                        </span>


                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="email" value={user.email} placeholder="Email" name="email" onChange={handleChange} />
                            <span className="focus-input100"></span>
                            {/* <span className="label-input100">Email</span> */}
                        </div>


                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" value={user.password} placeholder="Password" name="password" onChange={handleChange} />
                            <span className="focus-input100"></span>
                            {/* <span className="label-input100">Password</span> */}
                        </div>

                        <div className="flex-sb-m w-full p-t-3 p-b-32" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div>
                                <Link to='/register' className="txt1">
                                    Create new account ?
                                </Link>
                            </div>

                            <div>
                                <Link to="/forgotpassword" className="txt1">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>


                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>
                        <div className="login__icons">
                            <AiFillGoogleCircle style={{ fontSize: "2rem", marginRight: '20px', cursor: 'pointer' }} />
                            <AiFillGithub style={{ fontSize: "2rem", cursor: 'pointer' }} />
                        </div>

                    </form>

                    <div className="login100-more" style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8&w=1000&q=80')"
                    }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login