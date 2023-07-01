import React,{useEffect} from 'react'
import { Link} from 'react-router-dom';

import Pizza from '../components/Pizza'
import {useDispatch,useSelector} from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Home from '../components/Home'

export default function Homescreen() {

  const dispatch = useDispatch()
  const pizzastate = useSelector(state=> state.getAllPizzasReducer)
  const {loading,pizzas,error} = pizzastate
  useEffect(()=>{dispatch(getAllPizzas())},[dispatch])

  return (
    <>
    <Navbar/>
  
    <div>
     {
      loading ? (<h1>Loading...</h1>)
              : error ? (<h1>Eroor while fetching pizzas</h1>)
              : (  <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
              {pizzas.map(e=>{
                    return (
                       <div className="col p-5" key={e._id} > 
            
                    <Pizza  pizza ={e}/> 
                  
                    </div>
                   
                    )  
              })}
               </div>
               )
     }
    <div>
    <Link to='/myopizza'>
<button className="button-52 mb-5"  role="button">Make Your Own &rarr;</button>
</Link>
    </div>
       <Footer/>
    </div>
    </>
  )
}
