// Resources.js
import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Local styles modify original bootstrap styles
import './styles/Card.css';
import './styles/day-mode.css';
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
              <Card.Text style={{textAlign: 'center'}}>
 UpstateBridge's corporate partners and local services are here to support you on your path toward financial security.<br></br>
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
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-unitedministries.png`} alt="card image cap" />
              <Card.Body>
              <Card.Title>United Ministries<br/>
              (864) 232-6463<br/>
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
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-harvest.png`} alt="card image cap" />
              <Card.Body>
              <Card.Title>Harvest Hope Food Bank<br/>
              (864) 281-3995<br/>
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
              803-253-4004<br/>
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
      </Container>
  </div>
  );
}

export default Resources;