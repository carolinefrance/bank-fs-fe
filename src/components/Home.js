// HOME
// Home is a subcomponent and landing page.
// It is imported into App.js and rendered in the main area of the app.
// IMPORTS
// React
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Local styles modify original bootstrap styles
//import './styles/day-mode.css';
import './styles/night-mode.css';
/*import '../day-night-mode.js';*/

// COMPONENT: Home
export function Home() {
  return (
    <div style={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
    <Container>
        <Row>
          <Col>
            <Card className='card-wide'>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-banner-night.gif`} alt="card image cap" />
              <Card.Body>
              <Card.Title>UpstateBridge Financial Services: Your Path to Security</Card.Title>
              <br/>
              <Card.Text style={{textAlign: 'left'}}>
At UpstateBridge, we provide banking opportunities, financial guidance, and local resources for Americans in financial need. As your trusted financial provider, we partner with philanthropic organizations to lessen the stress that comes with financial instability. Our team takes time to listen to your unique concerns to build strategies that can lead to a brighter financial future.<br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col><img src={`${process.env.PUBLIC_URL}/images/image-spacer.png`} alt="" /></Col>
      </Row>
      <Row>
        <Col>
        <Card className='card-small'>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-grow-money.jpeg`} alt="card image cap" />
              <Card.Body>
              <Card.Title>No Fees</Card.Title>
              <br/>
              <Card.Text style={{textAlign: 'left'}}>We understand how challenging it is for low-income individuals to pay for basic needs. This is why we will never charge you a fee for a low balance. All of our accounts and services are free, which is made possible via philanthropic donors. Our goal is to help you stretch the funds you have and create a strategy that moves you toward financial stability.<br></br></Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className='card-small'>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-partnership.jpeg`} alt="card image cap" />
              <Card.Body>
              <Card.Title>Partnerships</Card.Title>
              <br/>
              <Card.Text style={{textAlign: 'left'}}>We are proud to join forces with esteemed corporate partners including United Way, United Ministries, and Harvest Hope Food Bank. Together, we offer our customers access to food, shelter, and essential services. Gain access to our valuable resources, financial education programs, and community initiatives to pave the way toward financial stability.<br></br></Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className='card-small'>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-community.jpeg`} alt="card image cap" />
              <Card.Body>
              <Card.Title>Community</Card.Title>
              <br/>
              <Card.Text style={{textAlign: 'left'}}>Our team provides personalized assistance tailored to the needs of our customers:<br></br>
              <ul>
                <li className="card-list">Veterans</li>
                <li className="card-list">People with Medical Needs</li>
                <li className="card-list">Low-income Residents</li>
                <li className="card-list">College Students</li>
                <li className="card-list">Refugees</li>
                <li className="card-list">Immigrants</li>
                <li className="card-list">People in Need of Housing</li>
                <li className="card-list">People with Criminal Records</li>
              </ul>
              </Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
  </div>
  );
}

export default Home;