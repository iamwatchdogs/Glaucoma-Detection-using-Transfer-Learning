import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import FormComponent from "./FormComponent";

export default function Predict() {
  const [result, setResult] = useState();
  return (
    <Container>
      <Row>
        <Col>
          <h1>Predict</h1>
          <FormComponent setResult={setResult} />
        </Col>
        <Col>{result !== undefined && <h2>Result: {result}</h2>}</Col>
      </Row>
    </Container>
  );
}