/** @format */

import React from "react";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function About() {
  return (
    <div
      className='bg-image '
      style={{ backgroundColor: "rgba(143, 47, 31, 0.7)" }}>
      <img
        src='https://mdbootstrap.com/img/Photos/Others/images/76.jpg'
        className='img-fluid'
        alt='Sample'
      />
      <div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>파닥파닥 낚였닥</p>
        </div>
      </div>
    </div>
  );
}
