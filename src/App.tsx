


import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Auth/Auth'
import MainLayout from './Layout/MainLayout'

function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Auth/>} />
    <Route path="/Main" element={<MainLayout/>}>
  
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
