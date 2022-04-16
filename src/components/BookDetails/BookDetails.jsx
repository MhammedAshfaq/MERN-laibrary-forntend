import React, { useEffect, useState } from 'react'
import './BookDetails.css';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const BookDetails = () => {
    const [bookDetails, setBookDetails] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/admin/getbookdetails/${id}`).then((response) => {
            setBookDetails(response.data.book)
        }).catch((err) => {
            alert(err)
        })
    }, [])

    const addToCart = async (bookId) => {
        console.log(bookId)
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
        <div className='booked__details'>
            <div className="conteiner">
                <div className="left__detai">
                    <img src={bookDetails && bookDetails.url} alt="" />
                </div>
                <div className="right__details">
                    <h4>{bookDetails && bookDetails.name}</h4>
                    <p>total Page: <span style={{ marginLeft: '20px', color: 'blue' }}>{bookDetails ? bookDetails.page : "Not Found"}</span></p>
                    <p>Pricr <span style={{ marginLeft: '20px', color: 'blue' }}> &#8377; {bookDetails && bookDetails.price}</span></p>
                    <p>Launge Date <span style={{ marginLeft: '20px', color: 'blue' }}>{bookDetails && bookDetails.date}</span></p>
                    <button onClick={() => addToCart(bookDetails._id)}>Add To Cart</button>
                </div>

            </div>

        </div>
    )
}

export default BookDetails