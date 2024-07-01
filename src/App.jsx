import { Route, Routes } from 'react-router-dom'
import Main from "./components/layout/Main"
import Home from './components/pages/Home'
import Donation from './components/pages/Donation'
import './App.css'


function App() {
  
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home />} />
          <Route path="/donate" element={<Donation />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
