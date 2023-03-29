import React from "react";
import "../Footer/footer.css";
import logo from "../../assets/images/eco-logo.png";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo ">
              
              <div>
                <h1 className="text-white">Multimart</h1>
              </div>
            </div>
            <p className="footer-text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              porro quos placeat, sequi consequuntur laboriosam eum modi iure.
              Doloribus, vero!
            </p>
          </Col>

          <Col lg="3">
            <div className="footer-quick-link">
              <h4 className="quick-links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer-quick-link">
              <h4 className="quick-links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer-quick-link">
              <h4 className="quick-links-title">Contact</h4>
              <ListGroup className="footer-content mb-3">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-md-center gap-2">
                  <span>
                    <i className="ri-map-pin-line" ></i>
                  </span>
                  <p>212, Kangaym, Tiruppur, Tamilnadu.</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-md-center gap-2">
                  <span>
                    <i className="ri-phone-line" ></i>
                  </span>
                  <p>+91 76 01 88 01 38</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-md-center gap-2">
                <span>
                <i className="ri-mail-line" ></i>
                  </span>
                  <p>+91 76 01 88 01 38</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col>
            <p className="footer-copyright">Copyright {year} developed by Navee . All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
