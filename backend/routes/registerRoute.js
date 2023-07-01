const router = require('express').Router();
const  User = require('../db/Customers');
const bcrypt = require('bcrypt');
const Token = require('../db/token');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');


router.post('/register', async (req, res) => {
	try {
		
		console.log(process.env.BASE_URL)
		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: 'User with given email already Exist!' });
             
		const salt = await bcrypt.genSalt(5);
       
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		
        
		user = await new User({ ...req.body, password: hashPassword }).save();
		
      
		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString('hex'),
		}).save();
        console.log("umm");
       //  res.send("success")
        

		const url = `${process.env.BASE_URL}${user.id}/verify/${token.token}`;
		await sendEmail(
			user.email,
			'Verify Email',
			`Verify your account by clicking on this link --> ${url} . Thank you !`,
		);
         
		res.status(201).send({
			message:
				'An Email sent to your account please verify ! Check in spam folder too',
		});
        
	} catch (error) {
		res.status(500).send({ message: 'Internal Server Error' });
	}
});

router.get('/:id/verify/:token/', async (req, res) => {
	const user = await User.findOne({ _id: req.params.id });
	try {
		if (!user)
			return res
				.status(400)
				.send({ success: false, message: 'Invalid link' });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token)
			return res
				.status(400)
				.send({ success: false, message: 'Invalid link' });

		await User.findOneAndUpdate({ _id: user._id }, { verified: true });
		
		//await token.remove();
		//localStorage.removeItem(token);

		res.status(200).send({
			success: true,
			message: 'Email verified successfully',
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: 'Internal Server Error',
		});
	}
});
router.get('/getallusers', async (req, res) => {
	try {
		const users = await User.find({});
		res.send(users);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

module.exports = router;