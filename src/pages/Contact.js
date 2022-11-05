import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Contact() {
  return (
    <section className="m-5 ms-0 p-5">
      <div className="mb-4">
        <h1 className="fw-bold">Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <Form>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            className="mb-4"
            controlId="validationCustom01"
          >
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your first name"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            className="mb-4"
            controlId="validationCustom02"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your last name"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="12"
            className="mb-4"
            controlId="validationCustom01"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="yourname@email.com"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="12"
            className="mb-4"
            controlId="validationCustom01"
          >
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              style={{ height: "100px" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="You agree to providing your data to  who may contact you."
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="12"
            className="mb-4"
            controlId="validationCustom01">
            <Button variant="primary" className="w-100 fw-bold" type="submit">
            Send message
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </section>
  );
}

export default Contact;
