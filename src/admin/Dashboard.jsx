import React from 'react';
import "../style/dashboard.css"

import { useEffect, useState } from 'react';
import { db } from '../firebase.config'
import { collection, deleteDoc, getDocs } from 'firebase/firestore'
import { Container, Col, Row } from 'reactstrap';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';

import { doc } from 'firebase/firestore';

// import useGateData from "../custom-hooks/useGetdata"


const Dashboard = () => {

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "allProducts"));
      setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data2 = await getDocs(collection(db, "users"));
  //     setData2(data2.docs.map(doc => ({ ...doc.data2(), id: doc.id })))
  //   }
  //   getData()
  // }, []);


  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <div className="revenue-box">
                <h5>Totel Sales</h5>
                <span>790</span>
              </div>
            </Col>
            <Col lg='3'>
              <div className="orders-box">
                <h5>Orders</h5>
                <span>790</span>
              </div>
            </Col>
            <Col lg='3'>
              <div className="products-box">
                <h5>Totel Products</h5>
                {
                  data.map((item, Index) => {
                    return (
                      <span key={Index}>{data.length }</span>
                   )
                 })
                }
                
              </div>
            </Col>
            <Col lg='3'>
              <div className="users-box">
                <h5>Totel users</h5>
                <span>790</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Dashboard