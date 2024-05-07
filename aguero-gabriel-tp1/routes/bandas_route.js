import express from "express";
import {getBandas, createBanda, updateBanda, deleteBanda } from "../controllers/banda_controller.js";
import authenticate from "../middleware/authenticator.js";



const route = express.Router();

route.get("/", authenticate, async (req, res) => {
    try {
      const bandas = await getBandas(); 
      res.status(200).json(bandas); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  });

route.get("/año", authenticate,   (req, res) => {
    let resultado = ordenarPorAnio;
    resultado
            .then((discos) => {res.status(200).json(discos)})
            .catch((error) => {res.status(400).json(error)})
});

route.post("/", authenticate, (req, res) => {
    let body = req.body;
    let resultado = createBanda(body);
    resultado
            .then((discos) => {res.status(201).json(discos)})
            .catch((error) => {res.status(400).json(error)})
});

route.put("/", authenticate, (req, res) => {
    let body = req.body;
    let resultado = updateBanda(body);
    resultado
            .then((discos) => {res.status(201).json(discos)})
            .catch((error) => {res.status(400).json(error)})
});

route.delete("/:id", authenticate, (req, res) => {
    let body = req.body;
    let resultado = deleteBanda(req.params.id, body);
    resultado
            .then((user) => { res.status(201).json(user) })
            .catch((error) => { res.status(400).json(error) })
});

export default route;