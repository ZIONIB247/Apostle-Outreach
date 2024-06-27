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
          {/* <Route path="about" element={<About />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
