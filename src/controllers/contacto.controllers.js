import Contacto from "../models/Contacto.js"


export const obtenerMensajes = async(req,res) => {
    
    const mensajes = await Contacto.find();

    res.json({
        mensajes
    });
}

export const crearMensaje = async(req,res) => {
    try {
        const {name,email,message} = req.body;

        const mensaje = new Contacto({name,email,message});
        const newMensaje = await mensaje.save();

        res.redirect('http://localhost:3000');


    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido Mal :('
        })
    }
}