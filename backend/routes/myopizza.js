const express = require('express');
const router = express.Router();
const Bases = require('../db/bases');
const Sauce = require('../db/sauces');
const Toppings = require('../db/toppings');
const Cheese = require('../db/cheese');

router.get('/getallbases', async (req, res) => {
	try {
		const bases = await Bases.find({});
		res.send(bases);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

router.get('/getallcheese', async (req, res) => {
	try {
		const cheese = await Cheese.find({});
		res.send(cheese);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

router.get('/getallsauces', async (req, res) => {
	try {
		const sauces = await Sauce.find({});
		res.send(sauces);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
router.get('/getalltoppings', async (req, res) => {
	try {
		const toppings = await Toppings.find({});
		res.send(toppings);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//add base
router.post('/addbase', async (req, res) => {
	
	try {
		const base =await new Bases({...req.body, varients:['small', 'medium', 'large']}).save();

		res.send("Added");
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
router.post('/getbasebyid', async (req, res) => {
	const baseid = req.body.baseid;
	try {
		const base = await Bases.findById(baseid);
		res.send(base);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

router.post('/updatebase', async (req, res) => {
	const updatedBase = req.body.updatedBase;
	try {
		const base = await Bases.findByIdAndUpdate(
			updatedBase._id,
			updatedBase,
		);
		res.send(base);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//delete base
router.post('/deletebase', async (req, res) => {
	const baseid = req.body.baseid;
	try {
		const base = await Bases.findByIdAndDelete(baseid);
		res.send(base);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//add topping
router.post('/addtopping', async (req, res) => {
	try{
	   const topping =await new Toppings({...req.body}).save();
		res.send(topping);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//get topping by id
router.post('/gettoppingbyid', async (req, res) => {
	const toppingid = req.body.toppingid;
	try {
		const topping = await Toppings.findById(toppingid);
		res.send(topping);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//update topping
router.post('/updatetopping', async (req, res) => {
	const updatedTopping = req.body.updatedTopping;
	try {
		const topping = await Toppings.findByIdAndUpdate(
			updatedTopping._id,
			updatedTopping,
		);
		res.send(topping);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

//delete topping
router.post('/deletetopping', async (req, res) => {
	const toppingid = req.body.toppingid;
	try {
		const topping = await Toppings.findByIdAndDelete(toppingid);
		res.send(topping);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
module.exports = router;
