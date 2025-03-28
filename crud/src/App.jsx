import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Table from './components/Table'
import Form from './components/Form'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Protact from './components/Protact';

function App() {
   return (
      <div>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/form' element={<Protact> <Form /> </Protact>} />
               <Route path='/table' element={<Protact> <Table /> </Protact>} />
               <Route path='/about' element={<Protact><About /></Protact>} />
            </Routes>
            <ToastContainer
               position="top-center"
            />
         </BrowserRouter>
      </div>
   )
}

export default App
