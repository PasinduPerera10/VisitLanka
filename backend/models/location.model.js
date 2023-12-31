const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  province: { type: String, required: true },
  district: { type: String, required: true },
  category: { type: String, required: true },
  image1: {
    type: String
  },
  // image2: {
  //   type: String
  // },
  // image3: {
  //   type: String
  // },
  // image4: {
  //   type: String
  // },
  // image5: {
  //   type: String
  // },
});

const Location = mongoose.model('Beach', locationSchema);

module.exports = Location;