import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { Form } from 'react-bootstrap';

import PlaceHolderImage from '../assets/img/500.png'

export const GCOP = ({items, name}) => {
  const [selected, updateSelected] = useState('');
  const onChange = (e) =>{
    updateSelected(String(e.target.value));
  } 


  return (<>
  <Row style={{paddingBottom: '2em'}}>

    <Col>
    Campañas
    </Col>
  </Row>
      
    <Row xs={1} md={3} className="g-4" style={{paddingBottom: '10em'}}>
      
      {items.filter(row => {
        if(name === row.data.org){
            return row
        }
      }).map((row, index) => (
        <Col>
        <Link style={{textDecoration: 'none'}} to = "/publicacion" state={{ test: row.data}}>
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