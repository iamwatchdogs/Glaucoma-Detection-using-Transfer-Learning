import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import FormComponent from "./FormComponent";
import "./style.css";

import safe from "../../assets/img/safe.png";
import warning from "../../assets/img/warning.png";
import danger from "../../assets/img/danger.png";
import detection from "../../assets/img/detection.png";

// https://pubmed.ncbi.nlm.nih.gov/21095735/
// eslint-disable-next-line react/prop-types
function RenderResult({ result }) {
  if (!result || isNaN(result))
    return (
      <>
        <img src={detection} alt='detection image' style={{width:"100%"}}/>
      </>
    );
  let img, description;
  const floatResult = parseFloat(result);

  if (floatResult <= 0.4) img = { name: "Safe", src: safe };
  else if (floatResult <= 0.7) img = { name: "Warning", src: warning };
  else img = { name: "Danger", src: danger };

  switch (img.name) {
    case "Safe":
      description = `Your eye is in good condition. You are safe. Keep it up.`;
      break;
    case "Warning":
      description = `Your eye is in warning condition. Please consult with doctor as soon as possible.`;
      break;
    case "Danger":
      description = `Your eye is in danger condition. Please consult with doctor immediately.`;
      break;
    default:
      description = `Something went wrong. Please try again.`;
  }
  return (
    <>
      <img src={img.src} alt={`${img.name} image`} />
      <h2>
        Status: <b>{img.name}</b>
      </h2>
      <h2>
        Probability of Glaucoma: <b>{Math.round(floatResult*1000)/10}%</b>
      </h2>
      <p>{description}</p>
    </>
  );
}

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
        <Col id="display-results">
          <RenderResult result={result} />
        </Col>
      </Row>
    </Container>
  );
}
