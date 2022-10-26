import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { GridCards } from '../components/GridCards';
import { CarouselPubs } from '../components/Carousel';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import { DonationCards } from '../components/DonationCards';

export const MetodosPago = () => {

  return (

    <Container>
        <Row>
            <DonationCards/>
        </Row>
    </Container>

  );
}


