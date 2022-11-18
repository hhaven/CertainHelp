import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authentication } from '../firebase';
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import { Col, Row } from 'react-bootstrap';

export const Registro = () => {
  const SignInWithGoogle = () =>{
  
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re)=>{
      console.log(re);
    })
    .catch((err)=>{
      console.log(err);
    })

  }
    
  return (<>
  <Row className= "align-me">
    <Col>
    
  <Button onClick = {SignInWithGoogle}>Iniciar sesion con Google</Button>
    </Col>
  </Row>

  </>
  );
}