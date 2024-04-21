import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import ContactForm from "./ContactForm";
import "./style.css";
import loading from "../../assets/img/loading.png";
import safe from "../../assets/img/safe.png";
import danger from "../../assets/img/danger.png";

export default function Contact() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function renderContent() {
    if (isLoading) {
      if (isLoading)
        return (
          <img
            src={loading}
            alt='loading'
            id='loader'
            style={{ width: "75%", margin: "auto" }}
          />
        );
    }
    if (hasError) {
      return (
        <>
          <img
            src={danger}
            alt='error logo'
            style={{ width: "75%", margin: "auto" }}
          />
          <h2 className='submit-message'>
            There was an error submitting your form. Please try again.
          </h2>
        </>
      );
    }
    if (hasSubmitted) {
      return (
        <>
          <img
            src={safe}
            alt='sucess logo'
            style={{ width: "75%", margin: "auto" }}
          />
          <h2 className='submit-message'>Thank you for your submission!</h2>
        </>
      );
    }
    return <ContactForm {...{ setHasSubmitted, setHasError, setIsLoading }} />;
  }

  return (
    <Container id='contact-block'>
      <Row>
        <Col id='contact-form'>{renderContent()}</Col>
        <Col id='contact-content'>
          <h1>Contact Us</h1>
          <p>
            We really hope you find this AI-based project helpful. Please let us
            know what you think about our project, we{"'"}re always open for
            suggestion. This project is open sourced under{" "}
            <a
              href='https://github.com/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning/blob/main/LICENSE'
              title='MIT License'
              id="mit-license"
            >
              MIT license
            </a>
            , so feel to check out the source code. Contributors are always
            welcome.
          </p>
          <a
            href='https://github.com/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning'
            title='visit the project'
            target="_blank"
            id="contact-preview-anchor"
          >
            <img
              src='https://opengraph.githubassets.com/730819b9efe4b0602c7e62e537f4aad25b34ff4463149d375b29b19c1d306509/iamwatchdogs/Glaucoma-Detection-using-Transfer-Learning'
              alt='github repo preview'
              id='contact-preview'
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
