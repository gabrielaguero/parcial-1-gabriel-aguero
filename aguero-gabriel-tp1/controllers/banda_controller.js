import Banda from "../models/bandas_model.js";



async function getBandas () {
    let bandas = await Banda.find();
    return bandas;
}

async function ordenarPorAnio(){
    let bandaAnio = await Banda.find().sort({año: 1});
    return bandaAnio;
}

async function createBanda(body){
    let bandas = new Banda ({
      nombre: body.nombre,
      integrantes: body.integrantes,
      año: body.año,
      imagen: body.imagen
    });
    return await bandas.save();
};

async function updateBanda(body){
    let bandas = new Banda.updateOne ({
        $set:{
            nombre: body.nombre,
            integrantes: body.integrantes,
            año: body.año,
            imagen: body.imagen
    }
    });
    return bandas;
};

async function deleteBanda(id){
    let bandaDeleted = await Banda.findByIdAndUpdate(id, {
        $set: {
            estado: false
        }
    }, {new: true})
    return bandaDeleted;
}

export {getBandas, ordenarPorAnio, createBanda, updateBanda, deleteBanda}