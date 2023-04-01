import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL ,uploadBytes} from 'firebase/storage';
import { setDoc, doc ,addDoc,collection} from 'firebase/firestore';

import {auth } from '../firebase.config';
import { storage } from '../firebase.config';
import { db } from '../firebase.config';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '.././style/login.css'

const Signup = () => {


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()



    const addImage = (e) => {
    e.preventDefault();
      console.log("uploading.....");
      setLoading(true);
    const storageRef = ref(storage, `productImages/${Date.now() + file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        uploadToAuth(url);
      })
    })
    
  }


  const uploadToAuth = (url) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=> {
      const user = userCredential.user;
      uploadToDb(user,url);
    })



  }

  const uploadToDb = (user,url) => {
    const dbRef = collection(db, "users");
 
    
      const data = {
        displayName: username,
        email : email,
        photoUrl: url,
    };
    
    addDoc(dbRef, data)
    .then(docRef => {
      console.log("Document has been added successfully");
      toast.success("Product successfully added");
      navigate("/login");
      setLoading(false);
      
    })
      .catch(error => {
        
      console.log(error);
      toast.error("Product not added!");
      setLoading(false);
    })
  }



  // const signup = async (e) => {
  //   e.preventDefault()
  //   

    
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  //     const user = userCredential.user
  //     const storageRef = ref(storage, `image/${Date.now() + username}`)
  //     const uploadTask = uploadBytesResumable(storageRef, file);


  //     uploadTask.on((error)=>{
  //       toast.error(error.massage)
  //     }, ()=>{
  //       getDownloadURL(uploadTask.snapshot.ref).then(async(downloadUrl)=> {

  //         // update user profile
  //       await  updateProfile(user, {
  //           displayName: username,
  //           photoUrl: downloadUrl
  //         });

  //         //store user data in firestore database
  //           await setDoc(doc(db,'user', user.uid),{
  //             uid: user.uid,
  //             displayName:username,
  //             email,
  //             photoUrl: downloadUrl,
  //           })
  //       });
  //     })

  //     setLoading(false)
  //     toast.success('account created')
  //     navigate('/login')

  //   } catch (error) {
  //     setLoading(false)
  //    toast.error("Something want wrong")

  //     }
      
  // }

  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            {
              loading? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading....</h5></Col> : 
              <Col lg='6' className='m-auto text-center'>
              <h3 className="fw-bold mb -4">Signup</h3>

              <Form className='auth-from' onSubmit={addImage}>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="email" placeholder='Enter your email...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="password" placeholder='Enter your password...'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="file"

        onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>

                <button type='submit' className="buy-btn auth-btn">Create an Account</button>
                <p>Already have an account?
                  <Link to='/login'>Login</Link>
                </p>
              </Form>
            </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>

  )
};



export default Signup;