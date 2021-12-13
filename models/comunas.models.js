const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const comunasSchema = new Schema({

   communen_number: Number,
   neighborhood: String,
   add_information: String

 })

const Comunas = mongoose.model("comunas", comunasSchema);

module.exports = Comunas;
