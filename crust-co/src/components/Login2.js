import React,{useState,useEffect} from 'react';


function Login2({changeView}) {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
 
/*
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token && !isAdmin){
      
      navigate('/Home');
      console.log('admin')
     
     
    }
  },[])*/

  const collect =async (event)=>{

  

     let result = await fetch('http://localhost:4000/api/login',{
        method:'post',
        body: JSON.stringify({email,password}),
        headers:{
          'Content-Type':'application/json'
        },
       });
       
       result = await result.json();
       if(result.user){
      localStorage.setItem('token', result.data);
     
     if (result.user?.role === 'admin') {
      window.location.href = '/admin';
    } else {
      window.location.href = '/home';
    }
       }

       
       else {
        alert("incorrect email or password");
         setEmail("");
         setPassword("");
       }
  }


  return (
    <form>
    <h2>Welcome Back!</h2>
    <fieldset>
      <legend>Log In</legend>
      <ul>
        <li>
          <label htmlFor="email">Email:</label>
          <input type="text" id="username" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </li>
        <li>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </li>
        <li>
          <i/>
          <a onClick={ () => changeView("PWReset")} href="#">Forgot Password?</a>
        </li>
      </ul>
    </fieldset>
    <button onClick={collect}>Login</button>
    <button type="button" onClick={ () => changeView("signUp")}>Create an Account</button>
  </form>
  );
}

export default Login2;