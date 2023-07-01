const express = require("express");

require('dotenv').config()
const path = require("path");
const cors = require('cors');
require('./db/config');
const Customer = require('./db/Customers');
const morgan = require("morgan");


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api", require("./routes/loginRoute"));
app.use("/api", require("./routes/registerRoute"));
app.use('/api/myopizza',require('./routes/myopizza'));

app.get("/",async(req,res)=>{
    console.log("app is running")
    res.send("cool")
})

app.post("/register",async (req,res)=>{
  
  const customer = new Customer(req.body);
  let ispresent = (await Customer.find({email:req.body.email}));
  if(ispresent.length>1){
    res.send("sorry user already exist");
  }else{
    let result = await customer.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
}
});

/*
app.post("/login",async (req,res)=>{
 
  if(req.body.email&&req.body.password){
    let customer =await Customer.findOne(req.body).select("-password");
    if(customer){
      res.send(customer);
    }
    else{
      res.send({"result":"no user found"});
    }
 }
  else{
    res.send("please enter both feilds");
  }
 
})


app.get('/api/pizzas', (req, res) => {
    pizza.find()
      .then((pizzas) => {
        console.log(pizzas)
        res.json(pizzas);
      })
      .catch((err) => {
        console.error('Error fetching pizzas:', err);
        res.status(500).json({ error: 'An error occurred' });
      });
  });

  */


app.listen(4000);