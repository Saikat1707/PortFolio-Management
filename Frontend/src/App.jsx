import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import CreateLink from './pages/CreateLink'
import UpdateLink from './pages/UpdateLink'
import UpdateProject from './pages/UpdateProject'
import HeroSection from './pages/home/HeroSection'
import AdminLogin from './pages/AdminLogin'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // or 'light' or 'colored'
      />
      <Routes>
        <Route path='/' element={<HeroSection/>} />
        <Route path='/admin/customize/login' element={<AdminLogin/>}/>
        <Route path='/admin/customize' element={<Admin/>} />
        <Route path='/admin/customize/create/:title' element={<CreateLink/>}/>
        <Route path='/admin/customize/update/:title/:linkId' element={<UpdateLink/>}/>
        <Route path='/admin/customize/update/Project/:projectId' element={<UpdateProject/>}/>
      </Routes>
    </>
  )
}

export default App
