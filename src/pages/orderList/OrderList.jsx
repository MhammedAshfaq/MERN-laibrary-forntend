import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OrderList = () => {
    const [orderDetail, setOrderDetail] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/api/auth/order-details/${localStorage.getItem('id')}`).then((response) => {
            setOrderDetail(response.data.details)
        }).catch((err) => {
            alert(err)
        })
    }, [orderDetail])

    const deleteOrder = (id) => {
        axios.post(`http://localhost:3001/api/auth/cancel-order/${id}`).then((response) => {
            alert(response.data.message)
        }).catch((err) => {
            alert(err)
        })
    }
    return (
        <>
            {
                orderDetail.length !== 0 ? (
                    <>
                        <div style={{ padding: '90px 40px 0 40px' }} >
                            <div style={{ textAlign: 'center', paddingBottom: '20px' }} className="order__heder">
                                <h1> My Orders</h1>
                            </div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>OD Date</th>
                                        <th>Address</th>
                                        <th>Modile</th>
                                        <th>Pincode</th>
                                        <th>Amound</th>
                                        <th>Pay -Method</th>
                                        <th>status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderDetail && orderDetail.map((order) => {
                                            return (
                                                <tr key={order._id}>
                                                    <td>{order.date}</td>
                                                    <td>{order.deliveryDetails.address}</td>
                                                    <td>{order.deliveryDetails.mobile}</td>
                                                    <td>{order.deliveryDetails.pincode}</td>
                                                    <td>&#8377; {order.totalAmount}</td>
                                                    <td>{order.paymentMethod}</td>
                                                    <td>{order.status}</td>
                                                    <td>
                                                        <Link to={`/order-products/${order._id}`} style={{ padding: '10px 20px', backgroundColor: '#4287f5', borderRadius: '5px', marginRight: '5px', fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>View</Link>
                                                        <button style={{ padding: '10px 20px', backgroundColor: '#ad3a36', borderRadius: '5px', color: 'white', fontWeight: 'bold' }} onClick={() => deleteOrder(order._id)}  >Calncel</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </Table>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }} className="place__order">
                            <div style={{ position: 'absolute', right: '0', margin: '20px 30px', }}>
                                <Link style={{ textDecoration: 'none', border: '1px solid #111', color: 'black', padding: '10px 30px' }} to="/">Go Back</Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <p style={{ textAlign: 'center', padding: '50px 0 0 0', color: 'black', fontSize: '18px' }}>Not Product !</p>
                )
            }

        </>
    )
}

export default OrderList