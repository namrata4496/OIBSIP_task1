const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    name:String,
    image: String,
    description:String,
    prices:[],
    varients:[]
  },{
    timestamps:true,
  });

  module.exports = mongoose.model("pizza",PizzaSchema);