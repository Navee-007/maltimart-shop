import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../style/product-details.css";
import { motion } from "framer-motion";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/CartSlices";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };


    toast.success("Review Submitted")
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added  to successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg="6">
              <div className="product-details">
                <h2>{productName}</h2>
                <div className="product-rating  d-flex align-item-center gap-5 mb-3">
                  <div>
                    <span>
                      <i className="ri-star-s-fill" />
                    </span>
                    <span>
                      <i className="ri-star-s-fill" />
                    </span>
                    <span>
                      <i className="ri-star-s-fill" />
                    </span>
                    <span>
                      <i className="ri-star-s-fill" />
                    </span>
                    <span>
                      <i className="ri-star-half-s-fill" />
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}ratings</span>)
                  </p>
                </div>
                <div className="d-flex align-item-center gap-5">
                  <span className="product-price">$ {price} </span>
                  <span>Category: {category}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy-btn"
                  onClick={addToCart}
                >
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab-wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab-content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product-reviews mt-5">
                  <div className="review-wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Jhon Doe</h6>
                          <span>{item.rating}( rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review-form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form-group d-flex align-items-center gap-5 rating-group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className="form-group d-flex align-items-center gap-5">
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(1)}>
                            1
                            <i className="ri-star-s-fill" />
                          </motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(2)}>
                            2
                            <i className="ri-star-s-fill" />
                          </motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(3)}>
                            3
                            <i className="ri-star-s-fill" />
                          </motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(4)}>
                            4
                            <i className="ri-star-s-fill" />
                          </motion.span>
                          <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(5)}>
                            5
                            <i className="ri-star-s-fill" />
                          </motion.span>
                        </div>
                        <div className="form-group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Review Message..."
                            required
                          />
                        </div>
                        <motion.button whileTap={{scale: 1.2}} type="submit" className="buy-btn">
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12">
              <h2 className="related-title">You might also like</h2>
            </Col>
            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
