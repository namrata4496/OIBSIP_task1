import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBadge,
} from 'mdb-react-ui-kit';
import {useDispatch,useSelector} from 'react-redux'

export default function Navbar() {
 

  
  const cartState = useSelector(state => state.cartReducer)
  const userstate = useSelector((state) => state.setUserData);
	const user = userstate.userData;
  const dispatch = useDispatch()
  

  const navigate = useNavigate();
 
  const auth = localStorage.getItem('token');
  
  const logout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("cartItems");
   navigate('/');
}


  return (
    <>




    
    <MDBNavbar expand='lg'  style={{backgroundColor:"#c23415", color:"white"}}>
      <MDBContainer fluid  className='d-flex justify-content-between'>
      
        <MDBNavbarBrand href='/home' className='p-3' >
          <img src="/images/logo.png" style={{width:"150px"}}/>
        </MDBNavbarBrand>

         <div >
        


          {auth ? 
          <>
           <MDBDropdown group className='shadow-0 '>
        <MDBDropdownToggle color='transparent' className='fs-5 text-white px-0'><MDBIcon fas icon="user-alt" />  {user.first_name}</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Order</MDBDropdownItem>
          <MDBDropdownItem link onClick={logout}>Logout</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <Link to='/cart' style={{marginLeft:"20px"}} ><MDBIcon fas icon="shopping-cart"  className='text-white'/></Link>
          <MDBBadge pill color='danger'>{cartState.cartItems.length}</MDBBadge>

          </>
         
          :  <button  className='button-42' ><Link to='/login' className='fs-5 fw-bold text-white'>Sign In</Link></button>}
        
          </div>   

       
   </MDBContainer>
    </MDBNavbar>
    </>
  );
}