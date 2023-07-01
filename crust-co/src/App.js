import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CartScreen from './screens/CartScreen';
import SignInScreen2 from './screens/SignInScreen2';
import Homescreen from './screens/Homescreen';
import CustomPizza from './screens/CustomPizza';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import axios from 'axios';
import { setUserData } from './actions/userAction.js';
import AdminScreen from './screens/AdminScreen';
import Userslist from './components/Admin/UsersList';
import PizzaList from './components/Admin/PizzaList';
import Baseslist from './components/Admin/Baseslist';
import Toppingslist from './components/Admin/Toppingslist';
import Addtopping from './components/Admin/Addtopping';
import EmailVerify from './screens/EmailVerify';
import Main from './screens/Main';

function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  


	const userstate = useSelector((state) => state.setUserData);
	const user = userstate.userData;

	const dispatch = useDispatch();
	useEffect(() => {
		let token = localStorage.getItem('token');
		if (token) {
			const url =	'http://localhost:4000/api/jwt/verify';
			axios.get(url, {
					params: {
						token,
					},
				})
				.then((res) => {
     
					if (res.data.success) {
						if (res?.data?.data?.role === 'admin') {
							setIsAdmin(true);
						}
						if (res?.data?.userData) {
             
						 dispatch(setUserData(res.data.userData));
           
						}
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [dispatch]);

  return (
    <div className="App">
     
     <BrowserRouter>
     
<Routes> 
<Route path='/' element={<Main/>}/>
<Route path='/login' element={<SignInScreen2/>}/>
<Route path='/:id/verify/:token' element={<EmailVerify />} />
{user?.role && (
				<>
 
 <Route path='/home' element={<Homescreen/>}/>
  <Route path='/cart' element={<CartScreen/>}/>
  <Route path='/myoPizza' element={<CustomPizza />} />
 
</>)}

{isAdmin && (
				<>
					<Route path='/admin' element={<AdminScreen />} />
          <Route path='/admin/userslist' element={<Userslist />} />
          <Route path='/admin/pizzaslist' element={<PizzaList />} />
          <Route path='/admin/baseslist' element={<Baseslist />} />
          <Route	path='/admin/toppinglist' element={<Toppingslist />}	/>
          <Route path='/admin/addtopping' element={<Addtopping />} />

				</>
			)}

</Routes>


</BrowserRouter>
  


    </div>
  );
}

export default App;
