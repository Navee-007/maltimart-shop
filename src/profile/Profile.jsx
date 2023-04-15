import React from 'react';
import "../style/dashboard.css"
import AdminNav from './AdminNav';
import { Container, Col, Row } from 'reactstrap';
import proImg from "../assets/images/user-icon.png"

const Dashboard = () => {



  return (
    <>
    <section>
   
      <Container>
        <Row>
          <Col lg='3'>
          <AdminNav></AdminNav>
          </Col>
          <Col lg='9'>
           <div className="top-box">
           <div className="img-box">
            <img src={proImg} alt="" />
             <div className="">
             <h2>Naveen kumar</h2>
             <p>email@gmail.com</p>
             </div>
           </div>
           </div>
           <div className="bottom-box">
            <div className="box">
              <div className="content">
              <h2>Name</h2>
              <p>Naveen Kumar</p>
              </div>
              <i className="ri-user-fill" />
            </div>
            <div className="box">
              <div className="content">
              <h2>Date of birth</h2>
              <p>12-20-2000</p>
              </div>
              <i className="ri-calendar-fill" />
            </div>
            <div className="box">
              <div className="content">
              <h2>Country </h2>
              <p>India</p>
              </div>
              <i className="ri-global-fill" />
            </div>
            <div className="box">
              <div className="content">
              <h2>Language</h2>
              <p>English</p>
              </div>
              <i className="ri-chat-new-fill" />
            </div>
            <div className="box">
              <div className="content">
              <h2>mobile Number</h2>
              <p>1234567890</p>
              </div>
              <i className="ri-smartphone-fill" />
            </div>
           </div>
          </Col>

        </Row>
      </Container>
    </section>
  </>
  )
}

export default Dashboard