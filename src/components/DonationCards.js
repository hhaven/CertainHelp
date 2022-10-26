import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import PlaceHolderImage from '../assets/img/paypal.png'
import Skrill from '../assets/img/skrill.png'
import Visa from '../assets/img/visa.jpg'

export const DonationCards = () => {
  return (
    <>
    <Container>
        <Row className= "customPadding">
            <Col>
                <Link to ="/registro">
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={PlaceHolderImage} />
                    </Card>
                </Link>
                
            </Col>
            <Col>
            <Card style={{ width: '14rem' }} >
                <Card.Img variant="top" src={Skrill} />
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '14rem' }} >
                <Card.Img variant="top" src={Visa} />
            </Card>
            </Col>
        </Row>
        <hr></hr>
        <Row>
            <InputGroup className="mb-3" style={{ width: '14rem' }} xs="auto">
                <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
            <Form.Check 
                type="switch"
                id="custom-switch"
                label="Donacion anonima"
            />
            <Button>Hacer Donacion</Button>
        </Row>
    </Container>
    </>
  );
}