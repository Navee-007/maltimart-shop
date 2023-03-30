import React, { useRef, useEffect,useState } from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from 'framer-motion'; 
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import {auth} from "../../firebase.config" 
import { toast } from "react-toastify";
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'







const nav_links = [
  { path: "home", display: "Home" },
  { path: "shop", display: "Shop" },
  { path: "cart", display: "Cart" },
];
const Header = () => {

  const headerRef = useRef(null);
  const navigate = useNavigate()
  const { currentUser } = useAuth()


  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const profileActionRef = useRef(null)

  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky-header')
      } else {
        headerRef.current.classList.remove('sticky-header')

      }
    });
  };
  
  const [data, setData] = useState([]);



  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "users"));
      setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  }, []);



  const logout = () =>{
    signOut(auth).then(()=>{
      toast.success('Logged out')
      navigate("/home")
    }).catch(err=>{
      toast.error(err.message)
    })
  }


  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active-menu')

  const NavigateToCart = () => {
    navigate("./cart")
  }

  const toggleProfileActions = () => profileActionRef.current.classList.toggle('show-profileActions')

  return (
    <header className="header" ref={headerRef} >
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo ">
              <img src={logo} alt="img" />
              <div>
                <h1 className="main-title">Multimart</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">



                {nav_links.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}

                
              </ul>
            </div>

            <div className="nav-icons">
              <span className="fav-icon">
                <i className="ri-heart-line" />
                <span className="badge">1</span>
              </span>
              <span className="cart-icon" onClick={NavigateToCart}>
                <i className="ri-shopping-bag-line" />
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile  ">

                {
                  data.map((item, Index) => {
                    return (
                      <motion.img whileTap={{ scale: 1.2 }} src={currentUser ? currentUser.item.photoUrl : userIcon} alt=""
                        onClick={toggleProfileActions} />
                    )
                  })
                }
                
                
                <div className="profile-actions" ref={profileActionRef} onClick={toggleProfileActions}>
                  {
                    currentUser ? <span onClick={logout}>Logout</span> :
                      <div className='profile-i'>
                        <Link to='/signup'>Signup</Link>
                        <Link to='/login'>Login</Link>
                        {/* <Link to='/dashboard'>Dashboard</Link> */}
                      </div>

                  }
                </div>
              </div>
              <div className="mobile-menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line" />
                </span>
              </div>
            </div>


          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
