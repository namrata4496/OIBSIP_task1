import {
	Box,
	Button,
	Flex,
	HStack,
	Image,
	Radio,
	RadioGroup,
	Spacer,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import {InputLabel,MenuItem} from '@mui/material';
import { Select } from 'antd';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';
import {
	getAllBases,
	getAllCheese,
	getAllSauces,
	getAllToppings,
} from '../actions/myoPizzaAction';
import Navbar from '../components/Navbar';

export default function CustomPizza() {

    const { Option } = Select;
	const dispatch = useDispatch();
	const basestate = useSelector((state) => state.getAllBases);
	const saucestate = useSelector((state) => state.getAllSauces);
	const toppingstate = useSelector((state) => state.getAllToppings);
	const cheesestate = useSelector((state) => state.getAllCheese);
	const [cheesee, setCheese] = useState('');
	const [tags, setTags] = useState([]);
	const [sauce, setSauce] = useState('');
	const [price, setPrice] = useState(0);
	const [basename, setBasename] = useState('');
	const [cartItem, setCartItem] = useState({
		name: 'Make your Own Pizza',
		_id: '',
		image: './images/img6.png',
		description: '',
		varient: '',
		quantity: 1,
		prices: [
            {
                small:0,
                medium:0,
                large:0
            }
        ],
		 price: 0,
	});

	const { bases } = basestate;
	const { sauces } = saucestate;
	const { toppings } = toppingstate;
	const { cheese } = cheesestate;
	const children = [];

	children.push(
		toppings.map((topping) => {
			return <Option value={topping.name}>{topping.name}</Option>;
		}),
	);

	useEffect(() => {
		dispatch(getAllBases());
		dispatch(getAllToppings());
		dispatch(getAllSauces());
		dispatch(getAllCheese());
	}, [dispatch]);



    return (
        <>
     <Navbar/>
	
	
		<Flex justifyContent='center'>
			<VStack margin={5}>
				<Box
					borderRadius='25px'
					borderWidth='3px'
					borderColor='#b33030'
					padding='10px'
				>
					<Image
						src='https://www.crustys.com/wp-content/uploads/2019/01/make_your_own_pizza.jpg'
						borderTopRadius='25px'
					></Image>
					<Box padding='5px'>
						<Text fontSize='3xl' textAlign='center'>
							Create your own Pizza!!
						</Text>

                      


						<HStack>
                        
                        <InputLabel className='pt-3 pb-1'>SIZE</InputLabel>
							<Spacer />
							<Text padding='10px' fontSize='2xl'>
								PRICE:-{cartItem?.price}
							</Text>
						</HStack>
						<RadioGroup
							onChange={(value) => {
								const d = { ...cartItem };
								d.varient = value;
								if (value === 'small') {
									d.price = 200;
								} else if (value === 'medium') {
									d.price = 300;
								} else if (value === 'large') {
									d.price = 400;
								}
								console.log(value);
								setPrice(d.price);
								setCartItem(d);
                                console.log(cartItem.price)
							}}
						>
							<Stack direction='row'>
								<Radio value='small' className='border-2'>Small</Radio>
								<Radio value='medium'>Medium</Radio>
								<Radio value='large'>Large</Radio>
							</Stack>
						</RadioGroup>


                        <InputLabel className='pt-3 pb-1'>Select one base :-</InputLabel>
                        <Select
							style={{ width: '100%' }}
							placeholder='Select option'
							onChange={(value) => {
								setBasename(value);
							}}
						>
							{bases.map((base, index) => {
								return (
									<MenuItem value={base.name}>
										<span
											onClick={() => {
												const d = { ...cartItem };
												if (cartItem?.varient ==='small') {
													d.price = 200 + base.prices[0][cartItem?.varient] * cartItem?.quantity;
												} else if (
													cartItem?.varient ===
													'medium'
												) {
													d.price =
														300 +
														base.prices[0][
															cartItem?.varient
														] *
															cartItem?.quantity;
												} else if (
													cartItem?.varient ===
													'large'
												) {
													d.price =
														400 +
														base.prices[0][
															cartItem?.varient
														] *
															cartItem?.quantity;
												}
												// d.price = base.prices;
												setPrice(d.price);
												setCartItem(d);
                                                console.log(cartItem.price)
											}}
										>
											{base.name} |{' '}
											{base.prices[0][cartItem?.varient]}
											/-
										</span>
									</MenuItem>
								);
							})}
						</Select>

						
						
                        <InputLabel className='pt-3 pb-1'>Select any 3 Toppings :-</InputLabel>
						<Select
							onChange={(value) => {
								if (value?.length > 3) {
									alert('Cannot select more than 3 toppings');
								} else {
									setTags(value);
                                    console.log(cartItem.price)
								}
							}}
							value={tags}
							maxTagCount={3}
							mode='tags'
							style={{ width: '100%' }}
							placeholder='Tags Mode'
						>
							{children}
						</Select>

                        <InputLabel className='pt-3 pb-1' >Select sauce of your choice :-</InputLabel>
						<Select
							style={{ width: '100%' }}
							placeholder='Select option'
							onChange={(value) => setSauce(value)}
						>
							{sauces.map((sauce) => {
								return (
									<option value={sauce.name}>
										{sauce.name}
									</option>
								);
							})}
						</Select>

                        <InputLabel className='pt-3 pb-1'> Select cheese of your choice:-</InputLabel>
						<Select
							style={{ width: '100%' }}
							placeholder='Select option'
							onChange={(value) => setCheese(value)}
						>
							{cheese.map((cheese) => {
								return (
									<option value={cheese.name}>
										{cheese.name}
									</option>
								);
							})}
						</Select>

                        <InputLabel className='pt-3 pb-1'> Quantity</InputLabel>
						<Select
							style={{ width: '100%' }}
							placeholder='Select option'
							onChange={(value) => {
								const d = { ...cartItem };
								d.quantity = value;
								let total = price * value;
								d.price = total;
								setCartItem(d);
                                console.log(cartItem.price)
							}}
						>
							{[...Array(10).keys()].map((x, i) => {
								return (
									<option key={i} value={i + 1}>
										{i + 1}
									</option>
								);
							})}
						</Select>

						<Button
							marginTop='15px'
							width='25%'
							backgroundColor=' #b33030'
							color='white'
							onClick={() => {
								const d = { ...cartItem };
                                console.log(d);
								d.description = `${basename}, ${tags
									.join(' , ')
									.toString()} , ${sauce}, ${cheesee}`;
								console.log(d);
								d._id = nanoid(24);
								setCartItem(d);
                               
								dispatch(addToCart(cartItem, cartItem.quantity, cartItem.varient));
								console.log('Added');
							}}
						>
							Add to Cart
						</Button>
					</Box>
				</Box>
			</VStack>
		</Flex>
     
      </>
	);
}