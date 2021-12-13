const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const palabraSchema = new Schema({
  communen: Number,
  title: String,
  description: String,
});

// palabraSchema.methods.setImgUrl = function (location) {
//   this.imagenUrl = location;
// };

const Palabra = mongoose.model("palabra", palabraSchema);

module.exports = Palabra;
