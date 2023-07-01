import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';

export default function Main() {
  return (
    <>
    <Navbar/>
    <Home/>

    <div className='d-flex align-items-center m-5'>
        <img src='/images/img5.png' style={{width:'30%'}} className='mr-5'  alt="chef" />
        <div className='d-flex flex-column align-items-start p-5'>
        <p className='fs-5  fw-bold text-start'>
    Build your perfect pizza creation with our customizable options. Simply share your preferences,
     and we'll bring your dream pizza to life, just the way you want it. From choosing the crust,
      selecting your favorite toppings, to adding extra cheese or a unique sauce, the power is in
       your hands. Get ready to savor the taste of a personalized pizza masterpiece crafted exclusively
        for you. Let your imagination run wild, and we'll make it a reality!
        </p>
        <button >Customize now</button>
        </div>
    </div>

    <MDBContainer className='pb-5'>
        <h2 className='text-center pb-5 fw-bolder'>What we offer?</h2>
      <MDBRow>
        <MDBCol size='md-4'>
        <div className='d-flex flex-column align-items-center'>
             <img style={{width:'70%'}} src='/images/img3.png' />
            
             <span className='fw-bolder p-2'> Easy Order</span> 
             </div>
        </MDBCol>
        <MDBCol size='md-4'>
            <div className='d-flex flex-column align-items-center'>
        <img style={{width:'70%'}} src='/images/img2.png' />
            <span className='fw-bolder p-2'>Fast delivery</span> 
             </div>
        </MDBCol>
        <MDBCol size='md-4'>
        <div className='d-flex flex-column align-items-center'>
        <img style={{width:'70%'}} src='/images/img4.png' />
           
            <span className='fw-bolder p-2'> Best Quality</span> 
            </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Footer/>
    </>
  );
}