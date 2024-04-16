import { Container, Row, Col } from "react-bootstrap";
import FormComponent from "./FormComponent";

export default function Predict() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Predict</h1>
          <FormComponent />
        </Col>
      </Row>
    </Container>
  );
}