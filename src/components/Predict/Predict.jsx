import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import FormComponent from "./FormComponent";
import "./style.css";

// https://pubmed.ncbi.nlm.nih.gov/21095735/
export default function Predict() {
  const [result, setResult] = useState();
  return (
    <Container id='main'>
      <Row>
        <Col>
          <h1>Check your Eye</h1>
          <p>
            To analyze the condition of the eye, the ML model mainly requires
            your retainal scan. Other than your image of scan, the model also
            required few other diagnostic result such as ExpCDR (Cup-to-disc
            ratio), Eye Type (left eye (OS) or right eye (OD)) and Eye Set
            (Usual given along with retainal scan, they{"'"}re just group
            assiged based on Intraocular Pressure (IOP) & Corneal Thickness).
          </p>
          <FormComponent setResult={setResult} />
        </Col>
        <Col>{result !== undefined && <h2>Result: {result}</h2>}</Col>
      </Row>
    </Container>
  );
}
