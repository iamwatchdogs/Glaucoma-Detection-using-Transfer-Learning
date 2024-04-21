import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ContactForm({ setHasSubmitted, setHasError }) {
  const [contactDetails, setContactDetails] = useState({
    name: null,
    email: null,
    subject: null,
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  }

  async function handleSubmit(contactDetails) {
    const URL = import.meta.env.VITE_REACT_APP_FORMSUBMIT_URL;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(contactDetails),
    };

    const res = await fetch(URL, options);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setHasSubmitted(true);
    } else {
      setHasError(true);
      console.log(res);
    }
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(contactDetails);
      }}
    >
      <Row>
        <Form.Group as={Col} className='mb-3' controlId='contact.Email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='youremail@email.com'
            name='email'
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} className='mb-3' controlId='contact.Email'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='your name'
            name='name'
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className='mb-3' controlId='contact.Subject'>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            as='textarea'
            rows={10}
            name='message'
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </Row>

      <Row className='m-auto'>
        <Button id='contact-submit' type='submit' className='w-100'>
          Submit
        </Button>
      </Row>
    </Form>
  );
}
