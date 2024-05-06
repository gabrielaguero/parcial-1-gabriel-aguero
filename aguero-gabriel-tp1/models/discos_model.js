import mongoose from "mongoose";

const discoSchema = new mongoose.Schema({
    banda: { type: String, required: true },
    genero: { type: String, required: true },
    albumn: { type: String, required: true },
    origen: { type: String, required: true },
    portada: { type: String, required: false}
});


export default mongoose.model("discos", discoSchema);