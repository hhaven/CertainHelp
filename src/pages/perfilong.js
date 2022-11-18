import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import { useLocation } from 'react-router-dom';
import { PubsDeOrgs } from '../components/pubsdeorgs';

export const PerfilOng = () => {
  const location = useLocation()
  const { test } = location.state
  return (
    <Container>
      <Row style ={{paddingBottom: '2%'}} className = "align-me">
        
      <Col>{test.title}</Col>
      </Row >
      <Row style ={{paddingBottom: '2%'}} className = "align-me">
        
      <Col>
        <Image src = {test.images} style={{height: '30%', width: '30%'}}></Image>
        </Col>
      </Row>
      <Row className = "align-me">
        
        <Col className = "align-me">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Col>
      </Row>
      <Row style={{padding: '3em'}}>
        <hr></hr>
      </Row>
      <Row>
        <PubsDeOrgs name = {test.title}></PubsDeOrgs>
      </Row>
      
    </Container>
  );
}

