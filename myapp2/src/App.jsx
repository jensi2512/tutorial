import Home from "./components/Home"
import About from "./components/About"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Form2 from "./components/Form2"

function App() {
  return (
    <div>
       <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About />}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/form2" element={<Form2/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
