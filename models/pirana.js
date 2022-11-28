const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GeoSchema = new Schema(
  {
    type: {
      type: String,
      default:'Point'
    },
    coordinates:{
      type: [Number],
      index:'2dsphere'
    }
  }
)
const PiranaSchema = new Schema({
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
  geometry: GeoSchema
});

const Pirana = mongoose.model('pirana', PiranaSchema)
module.exports=Pirana
