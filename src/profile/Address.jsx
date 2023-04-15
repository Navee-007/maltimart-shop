import React from 'react';
import "../style/dashboard.css"
// import { useEffect, useState } from 'react';
// import { db } from '../firebase.config'
// import { collection, getDocs } from 'firebase/firestore'

import AdminNav from './AdminNav';
import proImg from "../assets/images/user-icon.png"

// import photoUrl from "../assets/images/arm-chair-01.jpg"
import { Container, Row, Col } from 'reactstrap';




  


const AllProducts = () => {


  // const [data, setData] = useState([]);
 


// useEffect(() => {
//   const getData = async () => {
//     const data = await getDocs(collection(db,"allProducts"));
//     setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
//   }
//   getData()
// }, []);
  




//const {data: productData}= useGetdata("products")

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
              
              <p>Naveen kumar, <br />
              8/212, kadaiyur, <br />
              kangayam, tiruppur. <br />
              pincode: </p>
              </div>
              <i className="ri-edit-line" />
            </div>
            <div className="box">
              <div className="content">
              
              <p>Naveen kumar, <br />
              8/212, kadaiyur, <br />
              kangayam, tiruppur. <br />
              pincode: </p>
              </div>
              <i className="ri-edit-line" />
            </div>
            <div className="box">
              <div className="content">
              
              <p>Naveen kumar, <br />
              8/212, kadaiyur, <br />
              kangayam, tiruppur. <br />
              pincode: </p>
              </div>
              <i className="ri-edit-line" />
            </div>
            
            
           </div>
          </Col>

        </Row>
      </Container>
    </section>
  </>
  )
}

export default AllProducts