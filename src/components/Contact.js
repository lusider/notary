
import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { API } from 'aws-amplify';


async function addContact() {
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      message: formState.message,
      phone: formState.phone,
      request: formState.request,
      time: formState.time,
      date: formState.date
    }
  };

  console.log(data);
  const apiData = await API.post('formapi', '/contact', data);
  console.log({ apiData });
  alert('Mail sent');
}

const formState = { name: '', email: '', message: '', phone: '', request: '', time: '', date: '' };

const updateFormState = (key, value) => {
  formState[key] = value;
}

function Contact() {
  return (
    <div className="section-contact" id="contact">
    <Container>
    <Row>
    <Col md={3}/>
    <Col >
    <h2 style={{textAlign: 'center', marginBottom: '30px', marginTop: '60px'}}>Book Signing</h2>
    

      <br/>
        <Form>
          <Form.Group>
            <Form.Control placeholder="Name" onChange={e => updateFormState('name', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Email" onChange={e => updateFormState('email', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Phone" onChange={e => updateFormState('phone', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Date" onChange={e => updateFormState('date', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Time" onChange={e => updateFormState('time', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Request Type" onChange={e => updateFormState('request', e.target.value)} />
          </Form.Group>
          <Form.Group>
            
            <Form.Control as="textarea" rows={3} placeholder="Message" onChange={e => updateFormState('message', e.target.value)} />
          </Form.Group>
          <button className='btn btn-full' onClick={addContact}>Request Signing</button>
        </Form>
      </Col>
      <Col md={3} />
      </Row>
    </Container>
    </div>


  );
}

export default Contact;