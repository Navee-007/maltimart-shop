import React from 'react';
import { Container, Row } from "reactstrap"

import profile from "../assets/images/user-icon.png"

import {useNavigate} from 'react-router-dom'
import "../style/admin-nav.css"

// import useAuth from "../custom-hooks/useAuth"

import { NavLink } from 'react-router-dom';


import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";


const admin_nav = [
  {
    display: 'Dashboard',
    path: '/dashboard'
  },
  {
    display: 'All-Products',
    path: '/dashboard/all-Products'
  },
   {
    display: 'Add-Product',
    path: '/dashboard/add-Product'
  },
  {
    display: 'Orders',
    path: '/dashboard/orders'
  },
  {
    display: 'Users',
    path: '/dashboard/users'
  },



]


const AdminNav = () => {

  const navigate = useNavigate()

    const logout = () =>{
    signOut(auth).then(()=>{
      toast.success('Logged out')
      navigate("/home")
    }).catch(err=>{
      toast.error(err.message)
    })
  }


  // const { currentUser } = useAuth()

  return (
    <>
      <header className="admin-header">
        <div className="admin-nav-top">
          <Container>
            <div className="admin-nav-wrapper-top">
              <div className="logo">
                <h2>Multimart</h2>
              </div>

              
              <div className="admin-nav-top-right">
                <span><i class="ri-notification-line"></i></span>
                <span><i class="ri-settings-5-line"></i></span>
                {/* <img src={currentUser.photoUrl} alt="" /> */}
                <img src={profile} alt="" />
                <p className='admin-nav-logout' onClick={logout} >Logout</p>

              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin-menu p-0">
        <Container>
          <Row>
            <div className="admin-navigation">
              <ul className="admin-menu-list">


                {admin_nav.map((item, index) => (
                  <li className="admin-menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}

                
            </ul>
          </div>
        </Row>
      </Container>
    </section>
      </>
  )
}

export default AdminNav