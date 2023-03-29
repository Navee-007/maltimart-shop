import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';

import { db, storage } from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL,uploadBytes } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
// import { async } from '@firebase/util';
  import { useNavigate } from 'react-router-dom';


const AddProducts = () => {

  const [enterTitle, setEnterTitle] = useState('')
  const [enterShortDesc, setEnterShortDesc] = useState('')
  const [enterDescription, setEnterDescription] = useState('')
  const [enterCategory, setEnterCategory] = useState('')
  const [enterPrice, setEnterPrice] = useState('')
  const [enterProductImg, setEnterProductImg] = useState(null)
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();



// ======



  const addProduct = (e) => {
    e.preventDefault();
    console.log("uploading.....");
    const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`);
    uploadBytes(storageRef, enterProductImg).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        uploadToDb(url);
      })
    })
    
  }

  const uploadToDb = (url) => {
    const dbRef = collection(db, "allProducts");
    const data = {
        title: enterTitle,
        shortDesc: enterShortDesc,
        description: enterShortDesc,
        category: enterCategory,
        price: enterPrice,
        imgUrl: url,  
    };
    
    addDoc(dbRef, data)
    .then(docRef => {
      console.log("Document has been added successfully");
      toast.success("Product successfully added");
      navigate("/dashboard/all-products");
    })
    .catch(error => {
      console.log(error);
      toast.error("Product not added!");
      setLoading(false);
    })
    
  }

  



  // const addProduct = async (e) => {
  //   e.preventDefault()
  //   // ============add productto FB database===========

  //   console.log()
  //   try {
  //     const docRef = await collection(db, 'products')

  //     const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)

  //     const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

      
  //     uploadTask.on(() => {
  //       toast.error('imagesnot uploaded')
  //       setLoading(true)
  //     }, () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
  //         await addDoc(docRef, {
  //           title: enterTitle,
  //           shortDesc: enterShortDesc,
  //           description: enterShortDesc,
  //           category: enterCategory,
  //           price: enterPrice,
  //           imgUrl: "downloadUrl",  
  //         });
          
  //       });
        
  //     }
  //     );
  //     setLoading(false)
  //     toast.success("Product successfully added")
  //       navigate("/dashboard/all-products")
  //   } catch (err) { 
  //     toast.error("Product notadded!")
  //       setLoading(false)
      
  //   }



  // }




  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {
              loading ? <h4 className='py-5 text-center'>Loading......</h4> : 
                <>
                <h4 className='mb-5'>Add Product</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className="form-group">
                <span>Product title</span>
                <input type="text" placeholder='Double Sofa' value={enterTitle}
                  onChange={e => setEnterTitle(e.target.value)} required />
              </FormGroup>
              <FormGroup className="form-group">
                <span>Short Description</span>
                <input type="text" placeholder="description....."
                  value={enterShortDesc}
                  onChange={e => setEnterShortDesc(e.target.value)} required />
              </FormGroup>

              <FormGroup className="form-group">
                <span>Description</span>
                <input type="text" placeholder="description....."
                  value={enterDescription}
                  onChange={e => setEnterDescription(e.target.value)} required />
              </FormGroup>

              <div className='d-flex align-item-center justify-content-between gap-5'>
                <FormGroup className="form-group w-50">
                  <span>Price</span>
                  <input type="" placeholder="$100"
                    value={enterPrice}
                    onChange={e => setEnterPrice(e.target.value)} required />
                </FormGroup>

                <FormGroup className="form-group w-50">
                  <span>Category</span>
                  <select className='w-100 p-2'
                    value={enterCategory}
                    onChange={e => setEnterCategory(e.target.value)} required>
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </FormGroup>
              </div>

              <FormGroup className="form-group">
                <span>Product Image</span>
                <input type="file"
                  onChange={e => setEnterProductImg(e.target.files[0])}
                   />
              </FormGroup>

              <button className="buy-btn " type='submit'>Add Product</button>
            </Form>
                </>
            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts