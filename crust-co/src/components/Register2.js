import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Register2({changeView}) {

    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [password,setPassword] = useState("");
    const [first_name,setfName] = useState("");
    const [last_name,setlName] = useState("");
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
     // const auth = localStorage.getItem('user');
   //   if(auth){
  //      navigate('/');
  //    }
      
    })

    const collect =async (event)=>{
      event.preventDefault();
       let result = await fetch('http://localhost:4000/api/register',{
        method:'post',
        body: JSON.stringify({first_name,last_name,email,password,number}),
        headers:{
          'Content-Type':'application/json'
        },
       });
       result = await result.json();
       setMsg(result.message);
    }

  return (
    <form>
    <h2>Sign Up!</h2>
    <fieldset>
      <legend>Create Account</legend>
      <ul>
        <li>
          <label for="email">Email:</label>
          <input type="email" id="username" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </li>
        <li>
          <label for="First_Name">First_Name:</label>
          <input type="text" id="username" value={first_name} onChange={(e)=>setfName(e.target.value)} required/>
        </li>
        <li>
          <label for="Last_Name">Last_Name:</label>
          <input type="text" id="username" value={last_name} onChange={(e)=>setlName(e.target.value)} required/>
        </li>
        <li>
          <label for="Phone">Phone:</label>
          <input type="number" id="email" value={number} onChange={(e)=>setNumber(e.target.value)} required/>
        </li>
        <li>
          <label for="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </li>
      </ul>

    </fieldset>
    {msg && <div>{msg}</div>}
    <button onClick={collect}>Submit</button>
    <button type="button" onClick={ () => changeView("logIn")}>Have an Account?</button>
  </form>
  );
}

export default Register2;