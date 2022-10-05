import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AnonDon() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Deseo que la donacion sea anonima" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Aceptar
      </Button>
    </Form>
  );
}

export default AnonDon;