import {createStore, combineReducers,applyMiddleware} from 'redux'
import {configureStore} from '@reduxjs/toolkit'

import thunk from 'redux-thunk'

import {composeWithDevTools} from '@redux-devtools/extension'
import { getAllPizzasReducer } from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer'


import {
	addBaseReducer,
	addToppingReducer,
	getAllBasesReducer,
	getAllCheeseReducer,
	getAllSaucesReducer,
	getAllToppingsReducer,
	getBaseByIdReducer,
	getToppingByIdReducer,
	updateBaseReducer,
	updateToppingReducer,
} from './reducers/myoPizzaReducer';
import {
	deliverOrderReducer,
	getAllOrdersReducer,
	getUserOrdersReducer,
	placeOrderReducer,
} from './reducers/orderReducer';
import {
	addPizzaReducer,

	getPizzaByIdReducer,
	updatePizzaReducer,
} from './reducers/pizzaReducers';
import {
	getAllUsersReducer,
	setUserDataReducer,
} from './reducers/UsersReducer';




const rootReducer = combineReducers({
   getAllPizzasReducer:getAllPizzasReducer,
   cartReducer:cartReducer,
   getAllCheese: getAllCheeseReducer,
	getAllBases: getAllBasesReducer,
	getAllSauces: getAllSaucesReducer,
	getAllToppings: getAllToppingsReducer,
	placeOrder: placeOrderReducer,
	getUserOrders: getUserOrdersReducer,
	addPizza: addPizzaReducer,
	getPizzaById: getPizzaByIdReducer,
	updatePizza: updatePizzaReducer,
	getAllOrders: getAllOrdersReducer,
	deliverOrder: deliverOrderReducer,
	getAllUsers: getAllUsersReducer,
	addBase: addBaseReducer,
	getBaseById: getBaseByIdReducer,
	updateBase: updateBaseReducer,
	addTopping: addToppingReducer,
	getToppingById: getToppingByIdReducer,
	updateTopping: updateToppingReducer,
	setUserData: setUserDataReducer,
})








const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


const initialState={
    cartReducer:{
        cartItems :cartItems
    }
}
const middleware = [thunk]

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;