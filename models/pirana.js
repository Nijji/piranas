const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  records: {
    type: String,
    required: true,
  },
  coordinates: {
    type: String,
    required: true,
  },
});

const Pirana=mongoose.model(pirana,'')