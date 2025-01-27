import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import Login from './pages/Login';
import './App.css'
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    
        <Header />
        <body className='min-h-screen flex flex-col'>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/series" element={<Series />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </body>

        <Footer />
      
    </Router>

  )
}

export default App
