const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const secretKey = "Kanu"

const customerSchema = new mongoose.Schema({
    first_name:String,
    last_name: String,
    email:String,
    password:String,
    number:Number,
    verified: { type: 'boolean', default: false },
    role: { type: 'string', default: 'user', enum: ['user', 'admin'] },
  });

  customerSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
      { _id: this._id, role: this.role },
     secretKey,
      {
        expiresIn: '7d',
      },
    );
    return token;
  };

  module.exports = mongoose.model("customers",customerSchema);