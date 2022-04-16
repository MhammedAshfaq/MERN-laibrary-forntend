import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import './AllOrders.css';

const AllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/admin/get-all-order-lists').then((response) => {
            setOrders(response.data.list)
        }).catch((err) => {
            alert(err)
        })
    }, [orders])

    const handleClick = (itemId) => {
        axios.get(`http://localhost:3001/api/admin/confim-order-list/${itemId}`)
            .then((response) => {
                alert(response.data.message)
            }).catch((err) => {
                alert("Somthing Error ", err)
            })
    }

    return (
        <div>
            <div style={{ padding: '90px 40px 0 40px' }} >
                <div style={{ textAlign: 'center', paddingBottom: '20px' }} className="order__heder">
                    <h1> All Orders Managment</h1>
                </div>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Address</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Pay Type</th>
                            <th>Status</th>
                            <th>Amound</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map((order) => {
                                return (
                                    <tr key={order._id}>
                                        <td>{order.date}</td>
                                        <td>{order.deliveryDetails.address}</td>
                                        <td>{order.deliveryDetails.mobile}</td>
                                        <td>{order.deliveryDetails.emailId}</td>
                                        <td>{order.paymentMethod}</td>
                                        <td className={order.status === "pending" ? "pending" : "placeed"}>{order.status}</td>
                                        <td>{order.totalAmount}</td>
                                        <td><button onClick={() => handleClick(order._id)} style={{ padding: '5px 10px', backgroundColor: '#222c75', borderRadius: '5px', color: 'white', fontWeight: 'bold' }}>Active</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }} className="place__order">
                <div style={{ position: 'absolute', right: '0', margin: '20px 30px', }}>
                    <Link style={{ textDecoration: 'none', border: '1px solid #111', color: 'black', padding: '10px 30px' }} to="/admin/dashbord">Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default AllOrders