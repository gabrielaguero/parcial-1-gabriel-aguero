import mongoose from "mongoose";

const bandaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    integrantes: { type: Number, required: true },
    año: { type: Number, required: true },
    imagen: { type: String, required: false },
});


export default mongoose.model("bandas", bandaSchema);