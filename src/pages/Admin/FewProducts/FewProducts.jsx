import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import axios from 'axios'

const FewProducts = () => {
    const [books, setBooks] = useState([])

    const getAllBooks = async () => {
        let url = 'http://localhost:3001/api/admin/getallbooks';
        const options = {
            method: 'GET',
            url: url
        }
        try {
            const response = await axios(options);
            const limitedBooks = response.data.books.slice(0, 5);
            setBooks(limitedBooks)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getAllBooks();
    }, [])


    return (
        <div style={{ margin: '50px 10px' }}>

            <h1 style={{ marginBottom: '20px' }}>Few Books</h1>
            <div style={{ display: 'flex', justifyContent: 'end', margin: '20px ' }} className="fewproduct__button">
                <Link style={{ border: '1px solid #111', textDecoration: 'none', color: 'black', padding: '10px 30px' }} to='/admin/addbook'>Add Book</Link>
            </div>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books.map((book) => {
                            return (
                                <tr key={book._id}>
                                    <td>{book.name}</td>
                                    <td>&#8377; {book.price}</td>
                                    <td>{book.date}</td>
                                    <td> <img style={{ width: '50px', height: '50px', objectFit: 'cover' }} src={book.url} alt="" /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <div style={{ display: 'flex', justifyContent: 'end' }} className="fewproduct__button">
                <Link to="/admin/allbooks"> show more</Link>
            </div>
        </div >
    )
}

export default FewProducts