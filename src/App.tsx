


import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Auth/Auth'
import MainLayout from './Layout/MainLayout'
import HomeView from './Layout/HomeView'
import About from './Layout/About'


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


  
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
