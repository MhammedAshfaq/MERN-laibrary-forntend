import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminNav from '../Navbar/Navbar'
import axios from 'axios'

const AllBooks = () => {

    const [books, setBooks] = useState([])

    const getAllBooks = async () => {
        let url = 'http://localhost:3001/api/admin/getallbooks';
        const options = {
            method: 'GET',
            url: url
        }
        try {
            const response = await axios(options);
            setBooks(response.data.books)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getAllBooks();
    }, [])

    return (
        <>
            <AdminNav />
            <div style={{ margin: '50px 10px' }}>

                <h1 style={{ marginBottom: '20px' }}>All Books Details</h1>
                <div style={{ display: 'flex', justifyContent: 'end', margin: '20px ' }} className="fewproduct__button">
                    <Link style={{ border: '1px solid #111', textDecoration: 'none', color: 'black', padding: '10px 30px' }} to='/admin/dashbord'>Go Back</Link>
                </div>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Book name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Image</th>
                            <th>Aciton</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books && books.map((book) => {
                                return (
                                    <tr key={book._id}>
                                        <td>{book.name}</td>
                                        <td> &#8377; {book.price}</td>
                                        <td>{book.date}</td>
                                        <td> <img style={{ width: '50px', height: '50px', objectFit: 'cover' }} src={book.url} alt="" /></td>
                                        <td> <Button variant="danger">Delete</Button> </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>

            </div >
        </>
    )
}

export default AllBooks