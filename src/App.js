import './App.css';
import {NavBar2} from './components/NavBar2'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Registrop} from './pages/registro'
import {Route, Routes, Link} from "react-router-dom"
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
    <NavBar2></NavBar2>
      <nav>
        <ul>
          <li>
            <Link to = "/registro">Registro</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path = "/registro" element ={<Registrop/>}></Route>
    </Routes>
    </>
  );
}

export default App;
