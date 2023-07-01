const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
const Customer = require('../db/Customers');
const Token = require('../db/token');
const bcrypt = require('bcrypt');
const secretKey = "Kanu"
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

router.post('/login',async (req,res)=>{
   
  try {
	
      const user = await Customer.findOne({ email: req.body.email });
      if (!user)
        return res
          .status(401)
          .send({ message: 'Invalid Email or Password' });
       

          const validPassword = await bcrypt.compare(
            req.body.password,
            user.password,
          );
         
          if (!validPassword)
			return res
				.status(401)
				.send({ message: 'Invalid Email or Password' });


        if (!user.verified) {
          let token = await Token.findOne({ userId: user._id });
          if (!token) {
            token = await new Token({
              userId: user._id,
              token: crypto.randomBytes(32).toString('hex'),
            }).save();
            const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
            await sendEmail(user.email, 'Verify Email', url);
          }
    
          return res.status(400).send({
            message: 'An Email sent to your account please verify',
          });
        }


        const token = user.generateAuthToken();
       
        res.status(200).send({
          data: token,
          user: user,
          message: 'logged in successfully',
        });
      } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
      }
    });



    router.get('/jwt/verify', async (req, res) => {
      try {
        const user = await jwt.verify(
          req.query.token,
          secretKey,
        );
        
        const userData = await Customer.findOne({ _id: user._id });
        res.send({
          success: true,
          data: user,
          userData,
          message: 'Valid User',
        });
      } catch (error) {
        res.status(500).send({
          success: false,
          message: error?.message,
        });
      }
    });



   /*

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
     */






    module.exports = router