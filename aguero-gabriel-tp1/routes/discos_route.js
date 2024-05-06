import express from "express";
import {createDisco, getDiscos, updateDisco, buscarAlbum } from "../controllers/discos_controller.js";
import authenticate from "../middleware/authenticator.js";


const route = express.Router();

route.get("/", authenticate,  (req, res) => {
    let resultado = getDiscos;
    resultado
            .then((discos) => {res.status(200).json(discos)})
            .catch((error) => {res.status(400).json(error)})
});

route.get("/:albumn", authenticate,  (req, res) => {
    let resultado = buscarAlbum(albumn);
    resultado
            .then((discos) => {res.status(200).json(discos)})
            .catch((error) => {res.status(400).json(error)})
});


route.post("/", authenticate, (req, res) => {
    let body = req.body;
    let resultado = createDisco(body);
    resultado
            .then((discos) => {res.status(201).json(discos)})
            .catch((error) => {res.status(400).json(error)})
});

route.put("/", authenticate, (req, res) => {
    let body = req.body;
    let resultado = updateDisco(body);
    resultado
            .then((discos) => {res.status(201).json(discos)})
            .catch((error) => {res.status(400).json(error)})
});

route.delete("/:id", authenticate, (req, res) => {
    let body = req.body;
    let resultado = discoDeleted(req.params.id, body);
    resultado
            .then((user) => { res.status(201).json(user) })
            .catch((error) => { res.status(400).json(error) })
});

export default route;
