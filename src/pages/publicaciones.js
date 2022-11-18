import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { GridCards } from '../components/GridCards';
import { CarouselPubs } from '../components/Carousel';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore';

export const Publicaciones = () => {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "test"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  


  return (

    <Container>
        <Row>
                
          <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value ={title} 
                onChange={(e) => setTitle(e.target.value)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Form>
        </Row>
        <Row>
            <CarouselPubs/>
        </Row>
        <Row>
            <GridCards/>
        </Row>
    </Container>

  );
}


