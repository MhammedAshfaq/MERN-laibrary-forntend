import React, { useState } from 'react'
import './ForgotPassword.css';
import ResetPassword from '../ResetPassword/ResetPassword';
import axios from 'axios'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [openReset, setOpenReset] = useState(false)

    const handleForgot = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/auth/email-send', { email }).then((res) => { 
            if (res.data.success) {
                alert(res.data.message);
                setOpenReset(true)
            }
        }).catch((err) => {
            alert(err)
        })
    }
    return (
        <div>
            {
                openReset ? (
                    <ResetPassword email={email} />
                ) : (
                    <div className="page-content">
                        <div className="form-v5-content">
                            <form className="form-detail" onSubmit={handleForgot}>
                                <h2>Forgot Password</h2>
                                <div className="form-row">
                                    <label >Email</label>
                                    <input type="email" name="email" className="input-text" placeholder="Enter Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="form-row-last">
                                    <input type="submit" className="register" value="send email" />
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }

        </div >
    )
}

export default ForgotPassword