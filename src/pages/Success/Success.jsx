import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <div style={{  textAlign: 'center',paddingTop:'100px' }}>
            <h1 style={{fontWeight:400,marginBottom:'30px'}}>Your Orders are Successfully Compleated Thank You</h1>
            <Link style={{backgroundColor:'#1e2859',color:'white',textDecoration:'none',padding:'10px 30px',borderRadius:'5px'}} to="/my-order"> Show orders</Link>
        </div>
    )
}

export default Success