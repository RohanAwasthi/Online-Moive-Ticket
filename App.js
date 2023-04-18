import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Opening from './pages/Opening'
import "./App.css"
import Movies from './components/Movies'



function App() {
  return (
    <>
      <Router>
        <div className='container' style={{backgroundColor:"#b0d8dd"}} >
          <Header />
          <Routes>
            <Route path='/' element={<Opening />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/show' element={<Movies />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
