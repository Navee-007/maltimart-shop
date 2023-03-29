import React from 'react';
import "../style/allproduct.css"
import { useEffect, useState } from 'react';
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'


// import photoUrl from "../assets/images/arm-chair-01.jpg"
import { Container, Row, Col } from 'reactstrap';




  


const AllProducts = () => {


  const [data, setData] = useState([]);
 


useEffect(() => {
  const getData = async () => {
    const data = await getDocs(collection(db,"allProducts"));
    setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }
  getData()
}, []);
  




//const {data: productData}= useGetdata("products")

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>   </th>
                </tr>
              </thead>
              {/* <tbody>
                <tr >
                  <td><img src={photoUrl} alt="" className='dashboard-img' /></td>
                      <td>Arm chair</td>
                      <td>chair</td>
                      <td>$232</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody> */}


              <tbody> 
                {
                  data.map(item => (
                  <tr key={item.id}>
                  <td><img src={item.imgUrl} alt="" className='product-img' /></td>
                      <td>{ item.title}</td>
                      <td>{item.category }</td>
                      <td>${ item.price}</td>
                      <td> 
                        {/* <button className='buy-btn btn-danger all-p-btn' >delete</button> */}
                      </td>
                </tr>
                ))
                }
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProducts