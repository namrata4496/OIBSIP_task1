import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePizza, getAllPizzas } from '../../actions/pizzaActions';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Dashboard from './Dashboard';

export default function Userslist() {

    const dispatch = useDispatch();
	const pizzastate = useSelector((state) => state.getAllPizzasReducer);

	const { pizzas, error, loading } = pizzastate;

	useEffect(() => {
		dispatch(getAllPizzas());
	}, [dispatch]);

  return (
    <>
    <div className='d-flex align-items-start'>
    <Dashboard></Dashboard>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col' className='fw-bold mb-1 fs-5'>Name</th>
          <th scope='col' className='fw-bold mb-1 fs-5'>Category</th>
          <th scope='col' className='fw-bold mb-1 fs-5'>Prices</th>
          <th scope='col' className='fw-bold mb-1 fs-5'>Actions</th>
         
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {pizzas.map(pizza=>{
            return(
            <tr>
            <td>
              
                  <p >{pizza.name}</p>
               
            </td>
            <td>
              <p className='fw-normal mb-1'>{pizza.category}</p>
            
            </td>
            <td>
                Small : {pizza.prices[0]['small']}
				<br />
				Medium : {pizza.prices[0]['medium']}
				<br />
				Large : {pizza.prices[0]['large']}
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