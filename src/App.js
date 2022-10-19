import './App.css';
import {NavBar2} from './components/NavBar2'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Registrop} from './pages/registro'
import {Home} from './pages/home'
import {Route, Routes, Link} from "react-router-dom"
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
    <NavBar2></NavBar2>
    <Routes>
      <Route path = "/home" element = {<Home/>}></Route>
      <Route path = "/registro" element ={<Registrop/>}></Route>

    </Routes>
    </>
  );
}

export default App;
