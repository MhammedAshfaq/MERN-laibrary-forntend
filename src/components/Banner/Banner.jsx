import React from 'react'
import { Carousel } from 'react-bootstrap'

const Banner = () => {
    return (
        <div style={{marginTop:'40px'}}>
            <Carousel fade={true}>
                <Carousel.Item interval={2000}>
                    <img
                        style={{ objectFit: 'cover', height: '60vh' }}
                        className="d-block w-100"
                        src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/19123105/library-1024x683.jpg "
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>So please, oh please, we beg, we pray, go throw your TV set away, and in its place you can install a lovely bookshelf on the wall</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        style={{ objectFit: 'cover', height: '60vh' }}
                        className="d-block w-100"
                        src="https://wwwaxiellcom.cdn.triggerfish.cloud/uploads/sites/3/2019/03/library-activities.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <p>You can never get a cup of tea large enough or a book long enough to suit me.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  >
                    <img
                        style={{ objectFit: 'cover', height: '60vh' }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8&w=1000&q=80 "
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <p> find television very educating. Every time somebody turns on the set, I go into the other room and read a book.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner