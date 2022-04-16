import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

    const navigate = useNavigate();
    const [info, setInfo] = useState({
        address: '',
        email: '',
        pincode: '',
        mobile: '',
        method: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo({
            ...info,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let url = `http://localhost:3001/api/auth/place-order/${localStorage.getItem('id')}`;
        const options = {
            method: 'POST',
            url: url,
            data: info
        }
        try {
            const response = await axios(options);
            if (response.data.success) {
                alert(response.data.message)
                navigate('/order-success');
            }
        } catch (error) {
            alert(error.message);
        }

    }
    return (
        <div style={{ margin: '50px' }}>
            <h2>EnterDelivery Details</h2>
            <div className="order__left" style={{ margin: '30px ' }}>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" name="address" value={info.address} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" name="email" value={info.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Pincode</Form.Label>
                        <Form.Control type="number" placeholder="Enter Pincode" name="pincode" value={info.pincode} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="number" placeholder="Enter Number" name="mobile" value={info.mobile} onChange={handleChange} />
                    </Form.Group>

                    <Form.Select aria-label="Default select example" style={{ marginBottom: '20px' }} name="method" value={info.method} onChange={handleChange}>
                        <option>Open this select menu</option>
                        <option value="COD">COD</option>
                        <option value="ONLINE">ONLINE</option>
                    </Form.Select>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="order__right">

            </div>
        </div>
    )
}

export default PlaceOrder