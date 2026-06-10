


import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Auth/Auth'
import MainLayout from './Layout/MainLayout'
import HomeView from './Layout/HomeView'
import About from './Layout/About'
import Technology from './Admin/Pages/Technology'


function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Auth/>} />

    <Route path="/Main" element={<MainLayout/>}>

    <Route path="" element={<HomeView/>} />
    <Route path="/Main/Home" element={<HomeView/>} />
    <Route path="/Main/About" element={<About/>} />
    <Route path="/Main/Technology" element={<Technology/>} />



  
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
