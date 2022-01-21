const mongoose = require('mongoose');

const HodlinfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    requied: true,
  },
  buy: {
    type: String,
    requied: true,
  },
  sell: {
    type: String,
    requied: true,
  },
  volume: {
    type: String,
    requied: true,
  },
  base_unit: {
    type: String,
    requied: true,
  },
});

module.exports = mongoose.model("information",HodlinfoSchema);