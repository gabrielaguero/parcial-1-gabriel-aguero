import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import discos_route from "./routes/discos_route.js"
import bandas_route from "./routes/bandas_route.js";

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Conectado a la DB"))
  .catch(err => console.log("Error al conectar con la DB:", err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/discos", discos_route);
app.use("/bandas", bandas_route);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});