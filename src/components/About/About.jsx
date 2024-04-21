import { Container, Row, Col } from "react-bootstrap";

import "./style.css";
import glaucoma from "../../assets/img/what-is-glaucoma.jpeg";
import trasferLearning from "../../assets/img/transfer-learning-example.png";

export default function About() {
  return (
    <Container id='about'>
      <Row>
        <h1>About This Project</h1>
      </Row>
      <Row>
        <p>
          GlaucoDetect is an AI-based image detection model used to detect
          gluaoma eye disease at early stages. This model is trained using
          trasfer learning techniques on Fundus Dataset which was collected and
          annotated by trained professionals from Singapore Eye Research
          Institute. The project was created and is maintained by{" "}
          <a href='https://github.com/iamwatchdogs' target='_blank'>
            Shamith Nakka
          </a>
          , Murali Krishna and Sai Durga under guidance of Ramana Murthy. This
          project is open sourced under{" "}
          <a
            href='https://github.com/iamwatchdogs/Glaucoma-Detection-Using-Transfer-Learning/LICENCE'
            target='_blank'
          >
            MIT Licence
          </a>{" "}
          and available on{" "}
          <a
            href='https://github.com/iamwatchdogs/Glaucoma-Detection-Using-Transfer-Learning'
            target='_blank'
          >
            GitHub
          </a>
          .
        </p>
      </Row>
      <Row style={{ gap: "1.5vw" }}>
        <Col style={{ gap: "0.5px" }}>
          <h2>What is Glaucoma ?</h2>
          <p>
            <b>Glaucoma</b> is a condition that affects the eyes. It{" "}
            <b>silently damages the optic nerve</b>, which is crucial for
            transmitting visual signals from your eyes to your brain. Glaucoma
            can lead to <b>permanent vision loss</b> if not detected and managed
            early. Regular eye check-ups are essential to catch this stealthy
            saboteur before it causes harm.
          </p>
          <p>
            The primary cause of glaucoma is increased pressure within the eye,
            but the exact reasons behind this nerve damage are not fully
            understood. And it{"'"}s harder to detect it as the symptoms are
            almost close to symptoms of any other eye disease or even none in
            some cases. Here are some the symptoms that you can look for: Loss
            of Peripheral Vision, Halos Around Lights, Eye Pain or Discomfort,
            Redness in the Eye and Narrowed or Tunnel Vision.{" "}
            <b>
              Please consult doctor if you{"'"}re facing any of the mentioned
              symptoms
            </b>
            .
          </p>
        </Col>
        <Col>
          <img
            src={glaucoma}
            alt='image explaining glaucoma'
            className='about-img'
          />
        </Col>
      </Row>
      <Row style={{ gap: "1.5vw" }}>
        <Col style={{ gap: "0.5px", width: "100%" }}>
          <h2>Our Solution</h2>
          <p>
            Since the glaucoma condition is harder to detect, we have deicded to
            leverage the power of AI/ML to help us create an platform that can
            be available for people 24/7 and give the closest possible result
            based on users eye diagnostics.{" "}
          </p>
          <p>
            We have used the <b>transfer learning techniques</b> to get the best
            possible result without worrying about the overfitting problem. We
            used the pre-trained models{" "}
            <i>
              (that are trained on huge dataset called <b>Imagenet</b>)
            </i>{" "}
            as an filter to extract the required feature to classify the end
            result. And for making this model available for everybody we have
            build an web application using <b>React library</b> for the client
            side and <b>Flask framework</b> at the backend to handle request and
            performing classification based on the users data.
          </p>
          <p>
            <b>
              Please note that we tried our best to make the model give the
              closest to the actual result, but still we highly recommend you to
              consult a doctor rather than solely depending upto our model.
            </b>
          </p>
        </Col>
        <Col>
          <img
            src={trasferLearning}
            alt='transfer learning explaination'
            className='about-img'
          />
        </Col>
      </Row>
    </Container>
  );
}
