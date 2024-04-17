import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import FormComponent from "./FormComponent";
import './style.css';

export default function Predict() {
  const [result, setResult] = useState();
  return (
    <Container id="main">
      <Row>
        <Col>
          <h1>Predict</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum explicabo recusandae laboriosam placeat sint eos, assumenda ipsa facere repellendus repellat nemo, consequuntur dolores ipsam enim illum! Molestias, quidem voluptatem.
          Nam suscipit numquam obcaecati, ex omnis inventore culpa sequi tempore mollitia quibusdam sunt molestias quisquam repellendus, tempora maxime cum? Qui culpa tempore corporis maiores perferendis? Quia repudiandae itaque repellendus optio.</p>
          <FormComponent setResult={setResult} />
        </Col>
        <Col>{result !== undefined && <h2>Result: {result}</h2>}</Col>
      </Row>
    </Container>
  );
}