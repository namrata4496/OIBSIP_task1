const express = require("express");
const router = express.Router();
const pizzaModel = require('../db/Pizza');

router.get('/getpizzas',async (req,res)=>{
     try {
        const pizzas = await pizzaModel.find({})
        res.send(pizzas)
     } catch (error) {
        res.json({message:error})
     }
})

module.exports = router