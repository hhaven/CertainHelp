import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { Form } from 'react-bootstrap';

import PlaceHolderImage from '../assets/img/500.png'

export const GridCards = ({items}) => {
  const [selected, updateSelected] = useState('');
  const onChange = (e) =>{
    updateSelected(String(e.target.value));
  } 


  return (<>
  <Row style={{paddingBottom: '2em'}}>
    <Col xs={9}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control placeholder="Nombre de organizacion" onChange = {onChange}/>
        <Form.Text className="text-muted">
        Realiza una busqueda
        </Form.Text>
      </Form.Group>
    </Col>

    <Col>
      <Form.Select aria-label="Default select example" onChange={onChange}>
            <option value="todos">Sin filtros</option>
            <option value="animales">Animales</option>
            <option value="niños">Niños</option>
            <option value="medioambiente">Medio Ambiente</option>
            <option value="enfermedades">Enfermedades</option>
            <option value="otros">Otros</option>
      </Form.Select>
    </Col>
  </Row>
      
    <Row xs={1} md={3} className="g-4" style={{paddingBottom: '10em'}}>
      
      {items.filter(row => {
        if(selected.toLowerCase() === 'todos' || selected.toLowerCase() === 'animales' || selected.toLowerCase() === 'niños' || selected.toLowerCase() === 'medioambiente' || selected.toLowerCase() === 'enfermedades' || selected.toLowerCase() === 'otros'){
          return selected.toLowerCase() === 'todos' ? row : row.data.type.toLowerCase().includes(selected);
        }
        else{
          return selected.toLowerCase() === '' ? row : row.data.title.toLowerCase().includes(selected.toLowerCase());
        }
      }).map((row, index) => (
        <Col>
        <Link style={{textDecoration: 'none'}} to = "/perfilong" state={{ test: row.data}}>
          <Card className = "customCard">
            <Card.Img variant="top" src={row.data.images}  style ={{ width: '100%', height: '18rem'}}/>
            <Card.Body>
              <Card.Title style = {{color: 'white'}}>{row.data.title}</Card.Title>
              <Card.Text style = {{color: 'white'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        </Col>
      ))}
    </Row></>
  );
}