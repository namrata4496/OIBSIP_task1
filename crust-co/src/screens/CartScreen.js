import React from 'react'
import { addToCart, deleteFromCart } from "../actions/cartAction";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn,
MDBContainer,
MDBIcon,
MDBInput,
MDBListGroup,
MDBListGroupItem,
MDBRipple,

MDBTooltip,
MDBTypography,
  } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from "react-redux";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function CartScreen() {

    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
   
    return (
      <>
      <Navbar/>
    <div>
      <div className="d-flex justify-content-evenly">
        <div style={{width:'60%'}} className='mt-5 '> 
       
        {cartItems.map((item) => (
        <>
        <MDBCard style={{ maxWidth: '80%' }} className="m-5 ml-0">
      <MDBRow className='g-0 align-items-center'>
        <MDBCol md='4'>
          <MDBCardImage src={item.image} alt='...' fluid />
        </MDBCol>
        <MDBCol md='7'>
          <MDBCardBody className='text-start'>
            <MDBCardTitle>{item.name} [{item.varient}]</MDBCardTitle>
            <MDBCardText>
               Price : {item.quantity} X {item.prices[0][item.varient]} ={" "}
                      {item.price}
            </MDBCardText>
            <MDBCardText>
            <h6>
                      Quantity :&nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                         
                          dispatch(
                            addToCart(item, item.quantity-1, item.varient)
                          );
                          console.log(item.quantity )
                        }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                    </h6>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol  md='1' >
        <MDBIcon fas icon="times"   className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item))}}/>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </>))
    }
        </div>
        <div style={{width:'30%'}} className='mt-5 mr-5 pt-5'>
      
       <MDBRow>
        <MDBCol>
        <MDBCard className="mb-4">
          <MDBCardHeader>
            <MDBTypography tag="h5" className="mb-0">
              Summary
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBListGroup flush>
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
               No. of items in your cart
                <span>{cartItems.length}</span>
                </MDBListGroupItem>
             
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount (including VAT)</strong>
                 
                </div>
                <span>
                  <strong>{subTotal} /-</strong>
                </span>
              </MDBListGroupItem>
            </MDBListGroup>

            <MDBBtn block size="lg">
              Go to checkout
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCol> 
        </MDBRow>
        </div>
      </div>

    </div>
    <Footer/>
    </>

  )
}
