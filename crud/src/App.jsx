import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Table from './components/Table'
import Form from './components/Form'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Table/>}/>
              <Route path='/form' element={<Form/>}/>
           </Routes>
           <ToastContainer
              position="bottom-right"
              
           />
        </BrowserRouter>
    </div>
  )
}

export default App
