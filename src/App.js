import './App.css';
import {NavBar2} from './components/NavBar2'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Registrop} from './pages/registro'
import {Home} from './pages/home'
import { Publicacion } from './pages/publicacion';
import {Route, Routes, Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Publicaciones } from './pages/publicaciones';
import { MetodosPago } from './pages/metodospago';
import { Orgs } from './pages/orgs';
import { PerfilOng } from './pages/perfilong';
import { PubMod } from './pages/pubmod';

function App() {
  return (
    <>
    
    <NavBar2></NavBar2>
    
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path = "/home" element = {<Home/>}></Route>
            <Route path = "/registro" element ={<Registrop/>}></Route>
            <Route path = "/publicacion" element = {<Publicacion/>}></Route>
            <Route path = "/pub" element = {<Publicaciones/>}></Route>
            <Route path = "/metodospago" element = {<MetodosPago/>}></Route>
            <Route path = "/orgs" element = {<Orgs/>}></Route>
            <Route path = "/perfilong" element = {<PerfilOng/>}></Route>
            <Route path = "/pubmod" element = {<PubMod/>}></Route>
            </Routes>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
