import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const OrderProducts = () => {
    const [products, setProducts] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/auth/order-products/${id}`).then((response) => {
            setProducts(response.data.products)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <div style={{ padding: '90px 40px 0 40px' }} >
                <div style={{ textAlign: 'center', paddingBottom: '20px' }} className="order__heder">
                    <h1> Order Products</h1>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Total Pages</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{product.product.name}</td>
                                        <td>{product.product.page}</td>
                                        <td>{product.product.price}</td>
                                        <td> <img style={{ width: '50px', height: '50px', objectFit: 'cover' }} src={product.product.url} alt="" /></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }} className="place__order">
                <div style={{ position: 'absolute', right: '0', margin: '20px 30px', }}>
                    <Link style={{ textDecoration: 'none', border: '1px solid #111', color: 'black', padding: '10px 30px' }} to="/my-order">Go Back</Link>
                </div>
            </div>
        </>

    )
}

export default OrderProducts