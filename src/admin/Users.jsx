import React from 'react';
import { useEffect, useState } from 'react';
import { db } from '../firebase.config'
import { collection, deleteDoc, getDocs } from 'firebase/firestore'
import { Container, Col, Row } from 'reactstrap';
// import { async } from '@firebase/util';
import { toast } from 'react-toastify';

import { doc } from 'firebase/firestore';

const Users = () => {
    const [data, setData] = useState([])
    
    
useEffect(() => {
  const getData = async () => {
    const data = await getDocs(collection(db,"users"));
    setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }
  getData()
}, []);
    
    const deleteUser = async (id) => {
        await deleteDoc(doc(db, 'id'))
        toast.success('user deleted')
    }
  

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <h4 className="fw-bold">Users</h4>
                    </Col >
                    <Col lg="12" className="pt-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th></th>
action                            </tr>
                            </thead>
                            <tbody>
                               {
                  data.map(item => (
                  <tr key={item.id}>
                  <td><img src={item.photoUrl} alt="" className='product-img' /></td>
                      <td>{ item.displayName}</td>
                          <td>{item.email}</td>
                          <td>
                              {/* <button className='buy-btn btn-danger' onClick={() => {
                                  deleteUser(Users.uid);
                              }}>delete</button> */}
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

export default Users