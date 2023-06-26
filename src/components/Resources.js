// Resources.js
//import React, { useState, useContext } from "react";
//import { UserContext } from "../App";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Local styles modify original bootstrap styles
//import './styles/day-mode.css';
import './styles/night-mode.css';
/*import '../day-night-mode.js';*/

// COMPONENT: Resources
export function Resources() {
  return (
    <div style={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
    <Container>
        <Row>
          <Col>
            <Card className='card-wide'>
              <Card.Body>
              <Card.Text style={{textAlign: 'center', fontWeight: 'bold'}}>
 UpstateBridge's partners and services are here to support you.<br></br>
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
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-va.png`} alt="card image cap" />
              <Card.Body>
              <Card.Title>US Department of Veterans Affairs<br/>
              <span className="blueText">(800) 698-2411</span><br/>
              <a href="https://www.va.gov/" alt="United Ministries">www.va.gov</a>
              </Card.Title>
              <br/>
              <Card.Text style={{textAlign: 'left'}}>
              <ul>
                <li>VA health care</li>
                <li>VA-backed home loan</li>
                <li>GI Bill</li>
              </ul>
              </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className='card-small'>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-harvest.png`} alt="card image cap" />
              <Card.Body>
              <Card.Title>Harvest Hope Food Bank<br/>
              <span className="blueText">(864) 281-3995</span><br/>
              <a href="https://www.harvesthope.org/" alt="Harvest Hope">harvesthope.org</a>
              </Card.Title>
              <br/>
              <Card.Text style={{textAlign: 'left'}}><ul>
                <li>Emergency Food Assistance</li>
                <li>Mobile Food Pantries</li>
                <li>Senior Food Box Program</li>
              </ul></Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className='card-small'>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-lottery.png`} alt="card image cap" />
              <Card.Body>
              <Card.Title>SC Education Lottery<br/>
              <span className="blueText">803-253-4004</span><br/>
              <a href="https://www.sceducationlottery.com/" alt="Harvest Hope">sceducationlottery.com</a>
              </Card.Title>
              <br/>
              <Card.Text style={{textAlign: 'left'}}>
              <ul>
                <li>SC LIFE Scholarship<br/>(academic merit)</li>
                <li>SC Lottery Tuition Assistance (technical college)</li>
              </ul>
              </Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>

      <Row>
        <Col><img src={`${process.env.PUBLIC_URL}/images/image-spacer.png`} alt="" height="10px"/></Col>
      </Row>

      <Row>
        <Col>
        <Card className='card-small'>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-unitedministries.png`} alt="card image cap" />
              <Card.Body>
              <Card.Title>United Ministries<br/>
              <span className="blueText">(864) 232-6463</span><br/>
              <a href="https://united-ministries.org/" alt="United Ministries">united-ministries.org</a>
              </Card.Title>
              <br/>
              <Card.Text style={{textAlign: 'left'}}>
              <ul>
                <li>Emergency Financial Assistance</li>
                <li>Crisis Stabilization</li>
                <li>Supportive Housing</li>
              </ul>
              </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className='card-small'>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-gfm.png`} alt="card image cap" />
              <Card.Body>
              <Card.Title>Go Fund Me<br/>
              <a href="https://www.gofundme.com" alt="Go Fund Me">gofundme.com</a>
              </Card.Title>
              <br/>
              <Card.Text style={{textAlign: 'left'}}><ul>
                <li>Create a Fundraising Campaign</li>
                <li>Collect Donations to Fund an Emergency</li>
              </ul></Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className='card-small'>
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-hire.png`} alt="card image cap" />
              <Card.Body>
              <Card.Title>National HIRE Network<br/>
              <span className="blueText">803-253-4004</span><br/>
              <a href="https://nicic.gov/" alt="National HIRE Network">nicic.gov</a>
              </Card.Title>
              <br/>
              <Card.Text style={{textAlign: 'left'}}>
              <ul>
                <li>Helps people with criminal records seek employment</li>
                <li>Directory of local programs and services</li>
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

export default Resources;