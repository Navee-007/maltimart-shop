import React from 'react';
import Footer from '../Footer/Footer';
import Routers from '../../Routers/Routers';
import Header from '../Header/Header';

// import AdminNav from '../../profile/AdminNav';
// import { useLocation } from 'react-router-dom';



const Layout = () => {

  // const location =useLocation()


  return (
    <>
      {/* {
          location.pathname.startsWith("/profile") ? <Header/> : <Header/>
      } */}
      <Header/>
      <div>
        <Routers/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
