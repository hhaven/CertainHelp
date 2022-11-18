import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import { useLocation } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

export const Publicacion = () => {
  const location = useLocation()
  const { test } = location.state
  return (
    <Container>
      <Row style ={{paddingBottom: '2%'}} className = "align-me">
        
      <Col>{test.title}</Col>
      <Col xs= {5}></Col>
      </Row >
      <Row className = "align-me">
      <Col>
        <Image src = {test.images} style={{height: '50%', width: '50%'}}></Image>
        </Col>
        
        <Col className = "align-me" xs={5}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Col>
      </Row>
      <Row style={{paddingTop: '4%'}}>
        <Col xs = {3} style={{textAlign: 'right'}}>
        Fondos recaudados
        </Col>
        <Col>
        <ProgressBar now = {86}></ProgressBar>
        </Col>
        <Col xs = {3}>
        $ 2,600/3,000
        </Col>

        <Row style = {{padding: '2rem'}}>
        <Button variant="info" href="/metodospago">Donar</Button>{' '}
        </Row>
        
    
      </Row>
    </Container>

  );
}

