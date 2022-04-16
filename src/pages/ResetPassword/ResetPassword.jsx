import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = ({ email }) => {
    const navigate = useNavigate();
    const [reset, setReset] = useState({
        email: email,
        code: '',
        password: '',
        confirmPassword: ''
    })

    const resetHandle = (event) => {
        const { name, value } = event.target;
        setReset({
            ...reset,
            [name]: value
        })
    }

    const handleReset = (event) => {
        event.preventDefault();
        const { confirmPassword, password } = reset
        if (confirmPassword === password) {
            axios.post("http://localhost:3001/api/auth/change-passowed", reset).then((res) => {
                if (res.data.success) {
                    alert(res.data.message)
                    navigate('/login')
                } else {
                    alert(res.data.error)
                }
            }).catch((err) => {
                alert(err.response.data.message)
            })
        } else {
            alert('Password are not same')
        }
    }

    return (
        <div className="page-content">
            <div className="form-v5-content">
                <form className="form-detail" onSubmit={handleReset}>
                    <h2>Reset Password</h2>
                    <div className="form-row">
                        <label >OTP</label>
                        <input type="number" name="code" className="input-text" placeholder="OTP" value={reset.code} onChange={resetHandle} required />
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="form-row">
                        <label >Password</label>
                        <input type="password" name="password" className="input-text" placeholder="password" value={reset.password} onChange={resetHandle} required />
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="form-row">
                        <label >Confirm Password</label>
                        <input type="password" name="confirmPassword" className="input-text" placeholder="confirm password" value={reset.confirmPassword} onChange={resetHandle} required />
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="form-row-last">
                        <input type="submit" className="register" value="Reset Password" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword