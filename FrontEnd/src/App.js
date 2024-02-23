import {useState} from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const[count, setcount] = useState(0)
 
  return (
    <div className='app'>
  <BrowserRouter>
  <Routes>
          <Route path='/' element={<User/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element  ={<UpdateUser/>}></Route>
      </Routes>
  </BrowserRouter>

   </div>

  );
}

export default App;