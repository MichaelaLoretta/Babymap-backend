const mongoose = require("mongoose");

const DiaperStationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  address: {
    type: String,
  },
  img: {
    type: String,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model("DiaperStation", DiaperStationSchema);
