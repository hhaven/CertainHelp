import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import PlaceHolderImage from '../assets/img/500.png'

export const GridCards = () => {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
        <Link style={{textDecoration: 'none'}} to="/metodospago">
          <Card className = "customCard">
            <Card.Img variant="top" src={PlaceHolderImage} />
            <Card.Body>
              <Card.Title>Campaña</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        </Col>
      ))}
    </Row>
  );
}