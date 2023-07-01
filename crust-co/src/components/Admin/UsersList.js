import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../actions/userAction';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Dashboard from './Dashboard';

export default function Userslist() {

    const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);
	const userstate = useSelector((state) => state.getAllUsers);

	const { users} = userstate;


  return (
    <>
    <div className='d-flex align-items-start'>
    <Dashboard></Dashboard>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col' className='fw-bold mb-1'>Customer Id</th>
          <th scope='col' className='fw-bold mb-1'>Name</th>
          <th scope='col' className='fw-bold mb-1'>Email</th>
          <th scope='col' className='fw-bold mb-1'>Number</th>
         
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {users.map(user=>{
            return(
            <tr>
             <td>   
                  <p >{user._id}</p>
            </td>
            <td>
              <p className='fw-normal mb-1'>{user.first_name} {user.last_name}</p>
            
            </td>
            <td>
           {user.email}
            </td>
            <td>{user.number}</td>
          </tr>
            )
        })}
      
   
      </MDBTableBody>
    </MDBTable>
    </div>
    </>
  );
}