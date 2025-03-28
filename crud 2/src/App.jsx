import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Table from './components/Table'
import Form from './components/Form'

function App() {
  return (
    <div>
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Table/>}/>
              <Route path='/form' element={<Form/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
