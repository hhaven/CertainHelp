import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PerfilOngs() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Info de ONGs
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;