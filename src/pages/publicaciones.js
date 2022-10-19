import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { GridCards } from '../components/GridCards';
import { CarouselPubs } from '../components/Carousel';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';

export const Publicaciones = () => {

  return (

    <Container>
        <Row>
                <Form.Label htmlFor="inputPassword5">Buscar</Form.Label>
                <Form.Control
                    aria-describedby="passwordHelpBlock"
                    
                />
                <Form.Text id="passwordHelpBlock" muted className = 'customCarousel'>
                </Form.Text>
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


