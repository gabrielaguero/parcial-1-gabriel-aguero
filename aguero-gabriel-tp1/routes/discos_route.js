import express from "express";
import {createDisco, getDiscos, updateDisco, buscarAlbum } from "../controllers/discos_controller.js";
import authenticate from "../middleware/authenticator.js";


const route = express.Router();

route.get("/", async (req, res) => {
    try {
      const discos = await getDiscos(); 
      res.status(200).json(discos); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  });

  route.get("/:albumn", async (req, res) => {
    try {
      const albumn = req.params.albumn; 
      const discos = await buscarAlbum(albumn); 
      res.status(200).json(discos); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  });


route.post("/",  (req, res) => {
    let body = req.body;
    let resultado = createDisco(body);
    resultado
            .then((discos) => {res.status(201).json(discos)})
            .catch((error) => {res.status(400).json(error)})
});

route.put("/",  (req, res) => {
    let body = req.body;
    let resultado = updateDisco(body);
    resultado
            .then((discos) => {res.status(201).json(discos)})
            .catch((error) => {res.status(400).json(error)})
});

route.delete("/:id",   (req, res) => {
    let body = req.body;
    let resultado = discoDeleted(req.params.id, body);
    resultado
            .then((user) => { res.status(201).json(user) })
            .catch((error) => { res.status(400).json(error) })
});

export default route;
