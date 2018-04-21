const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  hash: {type: String, required: true},
  address: {type: String, required: false},
  // TODO: Add fields for user style and model
})
