import Proyecto from "../models/Proyecto.js";

export const obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find();

        res.json({
            proyectos
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido Mal :('
        })
    }
}

export const cearProyecto = async (req, res) => {
    try {
        const { title, description, image, documentation } = req.body;

        const proyecto = new Proyecto({ title, description, image, documentation });
        const saveProyecto = await proyecto.save();

        res.status(201).json({
            msg: 'Proyecto Creado',
            saveProyecto
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido Mal :('
        })
    }
}

export const actualizarProyecto = async(req, res) => {
    try {
        const { title, description, documentation, image } = req.body;
        const { id } = req.params;

        const proyectoActualizado = await Proyecto.findByIdAndUpdate(id, { title, description, documentation, image });

        res.json({
            proyectoActualizado
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal :('
        })
    }
}

export const eliminarProyecto = async(req,res) => {
    try {
        const {id} = req.params;
        const proyectoDeleted = await Proyecto.findByIdAndDelete(id);

        res.json({
            proyectoDeleted
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido Mal :('
        })
    }
}

export const obtenerProyecto = async(req,res) => {
    try {
        const {id} = req.params;

        const proyecto = await Proyecto.findById(id);

        res.json({
            proyecto
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal :('
        })
    }
}