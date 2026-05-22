import React from 'react'
import {Toaster} from 'react-hot-toast'
import {Route, Routes,Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Attendance from './pages/Attendance'
import Leave from './pages/Leave'
import Payslips from './pages/Payslips'
import Settings from './pages/Settings'
import PrintPaySlips from './pages/PrintPaySlips'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <>
      <Toaster />   
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/login/admin" element={<LoginForm role="admin" title="Admin portal" subtitle="Sign in to manage the organization"/>}/>
        <Route path="/login/employee" element={<LoginForm role="employee" title="Employee Portal" subtitle="Sign in to access your account"/>}/>

        <Route element={<Layout/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
          <Route path='/leave' element={<Leave/>}/>
          <Route path='/payslips' element={<Payslips/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Route>

        <Route path='/print/payslips/:id' element={<PrintPaySlips/>}/>
        <Route path='*' element={<Navigate to="/dashboard" replace/>}/>
      </Routes>
    </>
  )
}

export default App