import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';


export default function Pizza({pizza}) {

    const dispatch = useDispatch();

    const addToCartHandler = () => {
      dispatch(addToCart(pizza, quantity, varient));
    };

    const [varient,setVerient] = useState("small");
    const [quantity, setQuantity] = useState(1);

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);


   

  return (
    <div>
       
    <div className="card h-100 p-4">
    <h5 className="card-title text-center pb-3"> { pizza.name}</h5>
      <img onClick={toggleShow} src={pizza.image} className="card-img-top " alt="..."/>
      <div className="card-body p-0">

        <div className='d-flex justify-content-between my-3'>
            <div >
            <span >Size</span>
            <select className='mx-2' value = {varient} onChange={(e)=>{setVerient(e.target.value)}}>
                {pizza.varients.map(varient=>{
                    return <option value={varient}>{varient}</option>
                })}
            </select>
            </div>

            <div >
            <span className='mx-2'>Quantity</span>
            <select  value = {quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
         
                {[...Array(10).keys()].map((x,i)=>{
                    return <option value = {i+1}>{i+1}</option>
                })}
            </select>
            </div>

        </div>

        <div className='flex-container d-flex justify-content-between align-items-center'>
            <div>
                <span className='fs-5 fw-bold'>Price : {pizza.prices[0][varient] * quantity}</span>
            </div>
            <button  onClick={addToCartHandler}>ADD TO CART</button>
         </div>

        </div>


    </div>

   
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{pizza.name}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <img src={pizza.image} className="card-img-top " alt="..."/>
            <p>{pizza.description}</p>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>



     </div> 
   
  )
}
