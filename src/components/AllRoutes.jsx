import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Verify from '../Pages/Verify'
import VerifySuccess from '../Pages/VerifySuccess'

function AllRoutes() {
  return (
    <Routes>
        <Route path={"/"} element={<Homepage/>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/signup"} element={<Signup/>} />
        <Route path={"/verifyId"} element={<Verify/>} />
        <Route path={"/verifySuccessful"} element={<VerifySuccess/>} />
    </Routes>
  )
}

export default AllRoutes