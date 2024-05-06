import Disco from "../models/discos_model.js";



async function getDiscos () {
    let discos = await Disco.find();
    return discos;
}

async function buscarAlbum(){
    let albumNombre = await Disco.find({albumn});
    return albumNombre;
}



async function createDisco(body){
    let disco = new Disco ({
      banda: body.banda,
      genero: body.genero,
      albumn: body.albumn,
      origen: body.origen
    });
    return await disco.save();
};

async function updateDisco(body){
    let disco = new Disco.updateOne ({
        $set:{
        banda: body.banda,
        genero: body.genero,
        albumn: body.albumn,
        origen: body.origen
    }
    });
    return disco;
};

async function deleteDisco(id){
    let discoDeleted = await Disco.findByIdAndUpdate(id, {
        $set: {
            estado: false
        }
    }, {new: true})
    return discoDeleted;
}



export {getDiscos, createDisco, updateDisco, deleteDisco, buscarAlbum}