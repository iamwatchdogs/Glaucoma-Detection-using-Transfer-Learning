import { Form, Button } from "react-bootstrap";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function FormComponent({ setResult }) {
  const [formData, setFormData] = useState({
    ExpCDR: "",
    EyeType: "0",
    EyeSet: "0",
    ImgFile: null,
  });

  function handleInputChange(e) {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("ExpCDR", formData.ExpCDR);
      formDataToSend.append("EyeType", formData.EyeType);
      formDataToSend.append("EyeSet", formData.EyeSet);
      formDataToSend.append("ImgFile", formData.ImgFile);

      handleRequest(formDataToSend);
    } catch (error) {
      console.error("Error occurred while sending POST request:", error);
    }
  }

  async function handleRequest(formDataToSend) {
    const URL = "http://127.0.0.1:5000/classify";
    const options = {
      method: "POST",
      body: formDataToSend,
    };

    const res = await fetch(URL, options);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setResult(data["prediction"]);
    } else {
      throw new Error("Failed to fetch");
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='ExpCDR'>
        <Form.Label>Enter Exp CDR Value</Form.Label>
        <Form.Control
          type='text'
          name='ExpCDR'
          pattern='^0\.[0-9]+$'
          value={formData.ExpCDR}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId='EyeType'>
        <Form.Label>Eye Type</Form.Label>
        <Form.Control
          as='select'
          name='EyeType'
          value={formData.EyeType}
          onChange={handleInputChange}
          required
        >
          <option value='0'>OD</option>
          <option value='1'>OOS</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='EyeSet'>
        <Form.Label>EyeSet</Form.Label>
        <Form.Control
          as='select'
          name='EyeSet'
          value={formData.EyeSet}
          onChange={handleInputChange}
          required
        >
          <option value='0'>A</option>
          <option value='1'>B</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='ImgFile'>
        <Form.Label>ImgFile</Form.Label>
        <Form.Control
          type='file'
          name='ImgFile'
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}
