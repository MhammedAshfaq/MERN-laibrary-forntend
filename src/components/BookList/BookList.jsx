import React, { useEffect, useState } from 'react'
import './BookList.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([])

    const fetchAllBooks = async () => {
        let url = 'http://localhost:3001/api/admin/getallbooks';
        const options = {
            method: 'GET',
            url: url
        }
        try {
            const responce = await axios(options);
            setBooks(responce.data.books)
        } catch (error) {
            alert(error.mrssage)
        }
    }

    useEffect(() => {
        fetchAllBooks();
    }, [])

    const addToCart = async (bookId) => {
        const userId = localStorage.getItem('id');

        let url = `http://localhost:3001/api/auth/add-to-cart/${bookId}`;
        const options = {
            method: 'POST',
            url: url,
            data: {
                user: userId
            }
        }
        try {
            const responce = await axios(options);
            if (responce.data.success) {
                alert(responce.data.message)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <section>
            <div className="booker__cads">
                {
                    books && books.map((book) => {
                        return (
                            <div className="book__cart">
                                <div className="inner">
                                    <Link to={`/book/${book._id}`}>
                                        <div className="top__inner">
                                            <img src={book.url} alt="" />
                                        </div>
                                        <div className="bootom__inner">
                                            <h3>{book.name}</h3>
                                            <p>Total pages  :{book.page ? book.page : "Not Found"}</p>
                                            <p>price : &#8377; {book.price}</p>
                                        </div>
                                    </Link>
                                    <div className="button_Add">
                                        <button onClick={() => addToCart(book._id)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </section >
    )
}

export default BookList