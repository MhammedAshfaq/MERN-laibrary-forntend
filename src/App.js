import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Components
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import BookDetails from './components/BookDetails/BookDetails';
import AdminLogin from './pages/Admin/Login/Login';
import AdminDashbord from './pages/Admin/Dashbord/Dashbord';
import AdminAllUsers from './pages/Admin/AllUsers/AllUsers';
import AdminAllBooks from './pages/Admin/AllBooks/AllBooks';
import AdminAddBook from './pages/Admin/AddBooks/AddBooks';
import MyCart from './pages/MyCart/MyCart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Success from './pages/Success/Success';
import OrderList from './pages/orderList/OrderList';
import OrderProducts from './pages/OrderProducts/OrderProducts';
import AdminAllOrders from './pages/Admin/AllOrders/AllOrders'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/book/:id' element={<BookDetails />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/dashbord' element={<AdminDashbord />} />
          <Route path='/admin/allusers' element={<AdminAllUsers />} />
          <Route path='/admin/allbooks' element={<AdminAllBooks />} />
          <Route path='/admin/addbook' element={<AdminAddBook />} />
          <Route path='/my-cart' element={<MyCart />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/order-success' element={< Success />} />
          <Route path='/my-order' element={< OrderList />} />
          <Route path='/order-products/:id' element={< OrderProducts />} />
          <Route path='/admin/all-orders' element={< AdminAllOrders />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App