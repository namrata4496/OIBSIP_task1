import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTopping, getAllToppings } from '../../actions/myoPizzaAction';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Dashboard from './Dashboard';


export default function Baseslist() {

    const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllToppings());
	}, [dispatch]);
	const toppingstate = useSelector((state) => state.getAllToppings);

	const { toppings, loading } = toppingstate;
  return (
    <>
    <div className='d-flex align-items-start'>
    <Dashboard></Dashboard>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col' className='fw-bold mb-1 fs-5'>Name</th>
          <th scope='col' className='fw-bold mb-1 fs-5'>Stock</th>
          <th scope='col' className='fw-bold mb-1 fs-5'>Actions</th>
         
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {toppings.map(topping=>{
            return(
            <tr>
            <td>
              
                  <p >{topping.name}</p>
               
            </td>
            <td>
              <p className='fw-normal mb-1'>{topping.stock}</p>
            
            </td>
            <td>Delete</td>
          </tr>
            )
        })}
      
   
      </MDBTableBody>
    </MDBTable>
    </div>
    </>
  );
}