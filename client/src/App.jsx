

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'

function App() {


  return (
  <div>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path='/login' element={<SignIn/>}/>
    </Routes>
   </BrowserRouter>

  </div>
  )
}

export default App
