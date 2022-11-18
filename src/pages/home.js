import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Registro} from '../components/Register'
import {Cards} from '../components/Cards'
import { Col, Row } from 'react-bootstrap';

export const Home = () => {

  return (<>
  
    <Row className='align-me'>
      <Col style ={{paddingTop: '20%'}}>
      <h1 style ={{fontSize: '10em'}}>Bienvenido</h1>
      </Col>
    </Row>
  
  </>
  );
}


