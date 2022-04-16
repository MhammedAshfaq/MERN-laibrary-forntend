import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminNav from '../Navbar/Navbar'
import axios from 'axios'

const AllUsers = () => {
    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        let url = "http://localhost:3001/api/admin/getallusers";
        const options = {
            method: 'GET',
            url: url,
        }
        try {
            const response = await axios(options);
            setUsers(response.data.users)
        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        getAllUsers();
    }, [])

    return (
        <>
            <AdminNav />
            <div style={{ margin: '50px 10px' }}>

                <h1 style={{ marginBottom: '20px' }}>All Users</h1>
                <div style={{ display: 'flex', justifyContent: 'end', margin: '20px ' }} className="fewproduct__button">
                    <Link style={{ border: '1px solid #111', textDecoration: 'none', color: 'black', padding: '10px 30px' }} to='/admin/dashbord'>Go Back</Link>
                </div>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user) => {
                                return (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td> <Button variant="danger">Block</Button> </td>
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

export default AllUsers