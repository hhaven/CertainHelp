import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlaceHolderImage from '../assets/img/500.png'

export const Cards = () => {
  return (
    <Card style={{ width: '18rem' }} className = "customCard">
      <Card.Img variant="top" src={PlaceHolderImage} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
        <Button variant="dark">Ir</Button>
      </Card.Body>
    </Card>
  );
}
