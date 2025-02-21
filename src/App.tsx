import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import MainLayout from "./components/MainLayout";
import Dashboard from './components/Dashboard'
import Landing from './components/LandingPages';
import StokMenu from './components/StockMenu';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
          <Route element={<MainLayout/>}>
              <Route path="/" element={<Landing/>}/>
              <Route path="/Dashboard" element={<Landing/>}/>
              <Route path="/StokMenu" element={<StokMenu/>}/>
          </Route>
          
      </Routes>
    </Router>
  )
}

export default App
