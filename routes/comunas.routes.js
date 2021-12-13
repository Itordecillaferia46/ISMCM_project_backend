const express = require('express');
const router = express.Router();
const Refran = require('./../models/comunas.models')


//AÑADIR NUEVAS COMUNAS
router.post("/", async(req, res) => {
  const {communen_number, neighborhood, add_information} = req.body;

  const comuna_nuevo = await Comuna.create({
    communen_number: communen_number,
    neighborhood: neighborhood,
    add_information: add_information,
    
    });
    res.send(comuna_nuevo);
})

//VER LAS COMUNAS AÑADIDAS
router.get('/', async(req, res) => {
  const comuna = await Comuna.find();
  res.json(comuna);
});

//VER PALABRA POR ID
router.get('/:id', async(req, res) => {
  const comuna = await Comuna.findById(req.params.id);
  res.json(comuna);
});

//ELIMINAR COMUNA
router.delete('/:id', async(req, res) => {
  await Comuna.findByIdAndRemove(req.params.id);
  res.json("eliminada");
});

//EDITAR COMUNA
router.put('/:id', async (req, res) => {
  await Comuna.findByIdAndUpdate(req.params.id, req.body)
  res.json("actualizado");
})



module.exports = router;
