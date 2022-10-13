import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import CartModal from './Components/Modals/OrderModal';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Pages/Modal';

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/modal' element={<Modal />}/>

        </Routes>

      </BrowserRouter>

      
    </div>
  );
}

export default App;
