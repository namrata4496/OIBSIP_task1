import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBase, getAllBases } from '../../actions/myoPizzaAction';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Dashboard from './Dashboard';


export default function Baseslist() {

    const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBases());
	}, [dispatch]);
	const basestate = useSelector((state) => state.getAllBases);

	const { bases, loading } = basestate;
  return (
    <>
    <div className='d-flex align-items-start'>
    <Dashboard></Dashboard>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col' className='fw-bold mb-1 fs-5'>Name</th>
          <th scope='col' className='fw-bold mb-1 fs-5'>Stock</th>
          <th scope='col' className='fw-bold mb-1 fs-5'>Prices</th>
          <th scope='col' className='fw-bold mb-1 fs-5'>Actions</th>
         
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {bases.map(bases=>{
            return(
            <tr>
            <td>
              
                  <p >{bases.name}</p>
               
            </td>
            <td>
              <p className='fw-normal mb-1'>{bases.stock}</p>
            
            </td>
            <td>
                Small : {bases.prices[0]['small']}
				<br />
				Medium : {bases.prices[0]['medium']}
				<br />
				Large : {bases.prices[0]['large']}
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