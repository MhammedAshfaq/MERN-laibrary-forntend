import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios'

const MyCart = () => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState()

    const totalAmoud = async () => {
        let url = `http://localhost:3001/api/auth/cart-total-amound/${localStorage.getItem('id')}`;
        const options = {
            method: 'GET',
            url: url,
        }
        try {
            const response = await axios(options);
            setTotal(response.data.total)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/auth/get-cart-products/${localStorage.getItem('id')}`).then((response) => {
            setCart(response.data);
        }).catch((err) => {
            console.log(err);
        })
        totalAmoud();
    }, [cart])

    //remove Item
    const removeItem = (cartId, productId) => {
        axios.post('http://localhost:3001/api/auth/remove-cart-product', { cartId, productId }).then((response) => {
            alert(response.data.message)
        }).catch((err) => {
            alert(err)
        })

    }

    return (
        <>
            {
                cart.length !== 0 ? (
                    <>
                        <Navbar />
                        <div style={{ margin: '50px 10px' }}>

                            <h1 style={{ marginBottom: '20px' }}>My Cart</h1>
                            <div style={{ display: 'flex', justifyContent: 'end', margin: '20px ' }} className="fewproduct__button">
                                <Link style={{ border: '1px solid #111', textDecoration: 'none', color: 'black', padding: '10px 30px' }} to='/'>Go Back</Link>
                            </div>

                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Book name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Image</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart && cart.map((cart) => {
                                            return (
                                                <tr key={cart.item}>
                                                    {/* <tr > */}
                                                    <td>{cart.product.name}</td>
                                                    <td> &#8377; {cart.product.price}</td>
                                                    <td>  {cart.quantity}</td>
                                                    <td> <img style={{ width: '50px', height: '50px', objectFit: 'cover' }} src={cart.product.url} alt="" /></td>
                                                    <td> <Button onClick={() => removeItem(cart._id, cart.product._id)} variant="danger">Delete</Button> </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </Table>
                            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }} className="place__order">
                                <div style={{ position: 'absolute', right: '0', margin: '20px 30px', }}>
                                    <h5 style={{ marginBottom: '30px' }} >Total:  {total && total}</h5>
                                    <Link style={{ textDecoration: 'none', border: '1px solid #111', color: 'black', padding: '10px 30px' }} to="/place-order">Place Order</Link>
                                </div>
                            </div>
                        </div >
                    </>
                ) : (
                    <p style={{ textAlign: 'center', padding: '50px 0 0 0', color: 'black', fontSize: '18px' }}>Cart Item Empty !</p>
                )
            }

        </>
    )
}

export default MyCart