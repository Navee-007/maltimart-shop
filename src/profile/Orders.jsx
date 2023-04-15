import React from 'react'
import AdminNav from './AdminNav';
import { Container, Col, Row } from 'reactstrap';
import proImg from "../assets/images/user-icon.png";
import chair1 from "../assets/images/arm-chair-01.jpg";
import chair2 from "../assets/images/arm-chair-02.jpg";
import chair3 from "../assets/images/arm-chair-03.jpg";


const Orders = () => {
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
           <div className="order-box">
            <img src={chair1} alt="" />
            <h2>Arm Chair</h2>
            <h2>$20</h2>
            <h3>pending</h3>
           </div>
           <div className="order-box">
            <img src={chair2} alt="" />
            <h2>Arm Chair</h2>
                       <h2>$20</h2>
            <h3>delivered</h3>

           </div>
           <div className="order-box">
            <img src={chair3} alt="" />
            <h2>Arm Chair</h2>
                       <h2>$20</h2>
            <h3>delivered</h3>

           </div>
           </div>
          </Col>

        </Row>
      </Container>
    </section>
  </>
  )
}

export default Orders;