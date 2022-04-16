import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddBooks = () => {
    const [book, setBook] = useState({
        name: '',
        price: '',
        url: '',
        date: '',
        page:''
    })

    const handleBookChange = (event) => {
        const { name, value } = event.target;
        setBook({
            ...book,
            [name]: value
        })
    }

    const submitBook = async (event) => {
        event.preventDefault();
        let url = 'http://localhost:3001/api/admin/addBook';
        const options = {
            method: 'POST',
            url: url,
            data: book
        }
        try {
            const response = await axios(options);
            if (response.data.success) {
                alert(response.data.message)
                setBook({
                    name: '',
                    price: '',
                    url: '',
                    date: '',
                    page:''
                })
            }
        } catch (error) {
            alert(error.response.data.error)
        }
    }
    return (
        <div style={{ margin: '50px' }}>
            <h1>Add Book and Enjoy</h1>
            <Form onSubmit={submitBook}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control type="text" placeholder="Book Name" value={book.name} name="name" onChange={handleBookChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control type="text" placeholder="Image Url" value={book.url} name="url" onChange={handleBookChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Price" value={book.price} name="price" onChange={handleBookChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Total Pages</Form.Label>
                    <Form.Control type="number" placeholder="Price" value={book.page} name="page" onChange={handleBookChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Date" value={book.date} name="date" onChange={handleBookChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddBooks