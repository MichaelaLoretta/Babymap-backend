const mongoose = require("mongoose");

// maybe later on we can add a field for specials such as skating or plaskdamm? Array of strings?

const PlaygroundSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Playground", PlaygroundSchema);
