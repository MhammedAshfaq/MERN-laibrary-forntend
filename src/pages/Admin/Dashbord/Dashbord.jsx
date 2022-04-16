import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import AdminNav from '../Navbar/Navbar';
import AdminFooter from '../../../components/Footer/Footer'
import FewProducts from '../FewProducts/FewProducts'

const Dashbord = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const adminAuthrized = localStorage.getItem('adminToken');
        if (!adminAuthrized) {
            navigate('/admin/login')
        }
    }, [])

    return (
        <div>
            <AdminNav />
            <FewProducts />
            <AdminFooter />
        </div>
    )
}

export default Dashbord