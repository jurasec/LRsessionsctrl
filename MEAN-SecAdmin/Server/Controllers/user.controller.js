const Usuario = require('../models/usuarios');

const UserCtrl = {};
//Retorna todos los usuarios almacenados en la base de datos (Funciona)
UserCtrl.getUser = async (req,res) => {
    const users = await Usuario.find(); //Escucha los datos de respuesta de la base de datos 
    res.json(users); 
};
//Crea un usuario en la base de datos (Funciona)
UserCtrl.createUser = async (req, res) => {
const u = new Usuario(req.body);
await u.save();
res.json({
    'status' : 'User Saved'
});

};

//Retorna un solo usuario 
UserCtrl.getOneUser = async (req, res) => {
    const OneUser = await Usuario.findById(req.params.id);
    res.json(OneUser);
};

//Edita usuario 
UserCtrl.editUser = async (req, res) => {
const { id } = req.params;
const euser = {
    name: req.body.name,
    position: req.body.position 
    };
await Usuario.findByIdAndUpdate(id, { $set: euser } , {new: true});
res.json({status: 'Empleado actualizado'});
};

//Elimina usuario 
UserCtrl.deleteUser = async(req, res) => { 
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Empleado eliminado'});
};
module.exports = UserCtrl; 
