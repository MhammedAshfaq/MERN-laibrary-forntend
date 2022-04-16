import React, { useEffect } from 'react'
import './Home.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import BookList from '../../components/BookList/BookList'
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/api/auth/list', { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
            .then((response) => {
                // console.log(response.data)
            }).catch((err) => {
                navigate('/login')
            })
    }, [])

    return (
        <div>
            <Navbar />
            <Banner />
            <div className="herder">
                <h1>Pick & Read Your Books</h1>
            </div>
            <BookList />
            <Footer />
        </div>
    )
}

export default Home