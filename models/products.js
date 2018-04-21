const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {type: String},
  catagory: {type: String},
  price: {type: Number},
  upc: {type: Number},
  sku: {type: Number},
  // TODO: Add image fields
})
